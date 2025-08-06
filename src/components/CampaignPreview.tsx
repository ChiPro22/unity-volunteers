import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Search, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampaignPreview = () => {
  const campaigns = [
    {
      id: 1,
      title: "Plant 1000 Trees",
      ngo: "Green Earth Foundation",
      date: "15 Aug 2025",
      location: "Pune City Park",
      image: "🌱",
      volunteers: 45,
      description: "Join us in planting 1000 trees to combat climate change"
    },
    {
      id: 2,
      title: "Back to School Drive",
      ngo: "Education For All",
      date: "1 Sept 2025",
      location: "Zilla Parishad School, Nashik",
      image: "📚",
      volunteers: 28,
      description: "Distributing books, uniforms, and stationery to underprivileged children"
    },
    {
      id: 3,
      title: "Food For All",
      ngo: "Helping Hands NGO",
      date: "20 Aug 2025",
      location: "Shivajinagar, Pune",
      image: "🍽️",
      volunteers: 67,
      description: "Providing free meals to the homeless in the city"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ongoing Campaigns
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover meaningful volunteer opportunities and make a difference in your community
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search campaigns..." 
              className="pl-10 bg-card"
            />
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden card-hover">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{campaign.image}</div>
                <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{campaign.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {campaign.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {campaign.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {campaign.volunteers} volunteers registered
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">{campaign.ngo}</span>
                    <Button size="sm" variant="default">Register</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/campaigns">
              Show More Campaigns
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignPreview;