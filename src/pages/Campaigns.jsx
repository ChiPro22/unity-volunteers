import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Calendar, MapPin, Users, Clock, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Campaigns = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const { toast } = useToast();

  const campaigns = [
    {
      id: 1,
      title: "Plant 1000 Trees",
      ngo: "Green Earth Foundation",
      date: "15 Aug 2025",
      location: "Pune City Park",
      image: "🌱",
      volunteers: 45,
      description: "Join us in planting 1000 trees to combat climate change and improve air quality in our city.",
      fullDescription: "This large-scale tree plantation drive aims to plant 1000 native trees across Pune City Park. Volunteers will learn about sustainable forestry, climate action, and environmental conservation while making a tangible impact on their community.",
      ngoInfo: {
        founded: "2015",
        founder: "Dr. Meera Verma",
        aim: "Environmental conservation and sustainable development",
        achievements: "Planted over 50,000 trees, Cleaned 25 water bodies"
      },
      category: "Environment",
      timeRequired: "4 hours"
    },
    {
      id: 2,
      title: "Back to School Drive",
      ngo: "Education For All",
      date: "1 Sept 2025",
      location: "Zilla Parishad School, Nashik",
      image: "📚",
      volunteers: 28,
      description: "Distributing books, uniforms, and stationery to underprivileged children",
      fullDescription: "Help us ensure every child has the tools they need for education. We'll be distributing school supplies, uniforms, and books to 200+ underprivileged children starting their new academic year.",
      ngoInfo: {
        founded: "2010",
        founder: "Prof. Rajesh Gupta",
        aim: "Quality education access for underprivileged children",
        achievements: "Educated 5,000+ children, 95% literacy rate in target areas"
      },
      category: "Education",
      timeRequired: "6 hours"
    },
    {
      id: 3,
      title: "Food For All",
      ngo: "Helping Hands NGO",
      date: "20 Aug 2025",
      location: "Shivajinagar, Pune",
      image: "🍽️",
      volunteers: 67,
      description: "Providing free meals to the homeless in the city",
      fullDescription: "Weekly food distribution program serving nutritious meals to homeless individuals and families. Volunteers help with food preparation, packaging, and distribution while showing compassion and dignity to those in need.",
      ngoInfo: {
        founded: "2012",
        founder: "Sister Mary Thomas",
        aim: "Alleviating hunger and homelessness",
        achievements: "Served 100,000+ meals, Sheltered 500+ individuals"
      },
      category: "Hunger Relief",
      timeRequired: "3 hours"
    },
    {
      id: 4,
      title: "Women Skill Training",
      ngo: "Women Empowerment Trust",
      date: "10 Sept 2025",
      location: "Kolhapur Training Hall",
      image: "💪",
      volunteers: 35,
      description: "Skill-building workshops for rural women",
      fullDescription: "Empowering rural women through vocational training in tailoring, computer skills, and entrepreneurship. Volunteers assist with training delivery, mentoring, and helping women develop sustainable livelihoods.",
      ngoInfo: {
        founded: "2008",
        founder: "Mrs. Sunita Devi",
        aim: "Economic empowerment of rural women",
        achievements: "Trained 2,000+ women, 80% employment rate"
      },
      category: "Women Empowerment",
      timeRequired: "8 hours"
    },
    {
      id: 5,
      title: "Clean Water Initiative",
      ngo: "Pure Water Foundation",
      date: "25 Aug 2025",
      location: "Rural Maharashtra",
      image: "💧",
      volunteers: 52,
      description: "Installing water purification systems in rural areas",
      fullDescription: "Join our mission to provide clean drinking water to rural communities. Volunteers will help install water purification systems and educate communities about water conservation and hygiene practices.",
      ngoInfo: {
        founded: "2016",
        founder: "Eng. Amit Patil",
        aim: "Access to clean water for all",
        achievements: "Provided clean water to 50+ villages, Trained 1,000+ families"
      },
      category: "Water & Sanitation",
      timeRequired: "2 days"
    },
    {
      id: 6,
      title: "Elderly Care Support",
      ngo: "Golden Years Foundation",
      date: "5 Sept 2025",
      location: "Old Age Home, Mumbai",
      image: "👴",
      volunteers: 23,
      description: "Spending quality time with elderly residents",
      fullDescription: "Bring joy and companionship to elderly residents through activities, storytelling, health check-ups, and emotional support. Volunteers learn about aging gracefully while making meaningful connections.",
      ngoInfo: {
        founded: "2014",
        founder: "Dr. Kavitha Nair",
        aim: "Dignified care and support for the elderly",
        achievements: "Cared for 500+ elderly, 24/7 medical support"
      },
      category: "Elderly Care",
      timeRequired: "4 hours"
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.ngo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRegister = (campaign) => {
    setSelectedCampaign(campaign);
    setIsRegistrationOpen(true);
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: `You've successfully registered for "${selectedCampaign.title}". The NGO will contact you soon.`,
    });
    setIsRegistrationOpen(false);
    setSelectedCampaign(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            NGO <span className="hero-text">Campaigns</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover meaningful volunteer opportunities and make a lasting impact in your community
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search campaigns, NGOs, or categories..." 
              className="pl-10 bg-card"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden card-hover">
                <div className="p-6">
                  <div className="text-5xl mb-4 text-center">{campaign.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{campaign.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {campaign.date}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {campaign.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {campaign.timeRequired}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {campaign.volunteers} volunteers registered
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Tag className="h-4 w-4 mr-2" />
                      {campaign.category}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-primary font-medium">{campaign.ngo}</span>
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">View Details & Register</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{campaign.title}</DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Campaign Details */}
                          <div>
                            <h3 className="font-semibold mb-2">About This Campaign</h3>
                            <p className="text-muted-foreground">{campaign.fullDescription}</p>
                          </div>
                          
                          {/* NGO Information */}
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">About {campaign.ngo}</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <strong>Founded:</strong> {campaign.ngoInfo.founded}
                              </div>
                              <div>
                                <strong>Founder:</strong> {campaign.ngoInfo.founder}
                              </div>
                              <div className="col-span-2">
                                <strong>Aim:</strong> {campaign.ngoInfo.aim}
                              </div>
                              <div className="col-span-2">
                                <strong>Achievements:</strong> {campaign.ngoInfo.achievements}
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full" 
                            onClick={() => handleRegister(campaign)}
                          >
                            Register for This Campaign
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No campaigns found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Dialog */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for {selectedCampaign?.title}</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmitRegistration} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Test User" required />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="test@example.com" required />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="9876543210" required />
            </div>
            
            <div>
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" defaultValue="25" required />
            </div>
            
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" defaultValue="2000-01-01" required />
            </div>
            
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="Pune, Maharashtra" required />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="consent" defaultChecked required />
              <Label htmlFor="consent" className="text-sm">
                I consent to share my information with the NGO and agree to participate in this campaign
              </Label>
            </div>
            
            <Button type="submit" className="w-full">
              Submit Registration
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Campaigns;