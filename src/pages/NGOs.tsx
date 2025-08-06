import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, Target, MapPin, Globe } from 'lucide-react';

const NGOs = () => {
  const ngos = [
    {
      id: 1,
      name: "Green Earth Foundation",
      logo: "🌍",
      shortInfo: "Focused on environmental conservation and tree plantation drives.",
      founded: "2015",
      founder: "Dr. Meera Verma",
      aim: "To create a sustainable future through environmental conservation and climate action initiatives.",
      location: "Pune, Maharashtra",
      website: "www.greenearthfoundation.org",
      achievements: [
        "Planted over 50,000 trees across 15 cities",
        "Cleaned and restored 25 water bodies", 
        "Educated 10,000+ students about environmental conservation",
        "Won 'Best Environmental NGO' award 2023"
      ],
      pastCampaigns: [
        {
          title: "Save Our Rivers",
          date: "March 2024",
          description: "Large-scale river cleaning drive that removed 5 tons of waste",
          image: "🏞️"
        },
        {
          title: "Urban Forest Project", 
          date: "January 2024",
          description: "Created mini forests in 10 urban areas",
          image: "🌳"
        },
        {
          title: "Plastic-Free Pune",
          date: "December 2023", 
          description: "City-wide campaign that reduced plastic usage by 30%",
          image: "♻️"
        }
      ],
      categories: ["Environment", "Climate Action", "Conservation"]
    },
    {
      id: 2,
      name: "Smile For All",
      logo: "😊",
      shortInfo: "Works for child education and healthcare support.",
      founded: "2010",
      founder: "Dr. Rajesh Gupta",
      aim: "Ensuring every child has access to quality education and healthcare regardless of their economic background.",
      location: "Mumbai, Maharashtra",
      website: "www.smileforall.org",
      achievements: [
        "Provided education to 5,000+ underprivileged children",
        "Established 15 learning centers across slums",
        "95% literacy rate achieved in target areas",
        "Provided healthcare to 20,000+ children"
      ],
      pastCampaigns: [
        {
          title: "Books for All",
          date: "June 2024",
          description: "Distributed 10,000 books to children in rural areas",
          image: "📚"
        },
        {
          title: "Health Check-up Drive",
          date: "April 2024", 
          description: "Free health screenings for 1,000+ children",
          image: "🏥"
        },
        {
          title: "Digital Literacy Program",
          date: "February 2024",
          description: "Taught computer skills to 500+ children",
          image: "💻"
        }
      ],
      categories: ["Education", "Healthcare", "Child Welfare"]
    },
    {
      id: 3,
      name: "Helping Hands NGO",
      logo: "🤝",
      shortInfo: "Dedicated to providing food and shelter to the homeless.",
      founded: "2012",
      founder: "Sister Mary Thomas",
      aim: "Eliminating hunger and homelessness by providing immediate relief and long-term rehabilitation support.",
      location: "Delhi, India",
      website: "www.helpinghandsngo.org",
      achievements: [
        "Served over 100,000 free meals",
        "Provided shelter to 500+ homeless individuals",
        "Rehabilitated 200+ people with job placements",
        "Operates 5 shelter homes across Delhi"
      ],
      pastCampaigns: [
        {
          title: "Winter Warmth Drive",
          date: "December 2023",
          description: "Distributed blankets and warm clothes to 2,000+ homeless",
          image: "🧥"
        },
        {
          title: "Skill Development Workshop",
          date: "September 2023",
          description: "Trained 100+ individuals in various trades",
          image: "🔧"
        },
        {
          title: "Mobile Kitchen Service",
          date: "August 2023",
          description: "Launched mobile food service reaching 50+ locations daily",
          image: "🚐"
        }
      ],
      categories: ["Hunger Relief", "Homelessness", "Rehabilitation"]
    },
    {
      id: 4,
      name: "Women Empowerment Trust",
      logo: "💪",
      shortInfo: "Promotes skill development and women's rights awareness.",
      founded: "2008",
      founder: "Mrs. Sunita Devi",
      aim: "Empowering women economically and socially through skill development, education, and advocacy.",
      location: "Kolhapur, Maharashtra", 
      website: "www.womenempowermenttrust.org",
      achievements: [
        "Trained 2,000+ women in various skills",
        "Achieved 80% employment rate among trainees",
        "Established 10 self-help groups",
        "Provided micro-loans to 500+ women entrepreneurs"
      ],
      pastCampaigns: [
        {
          title: "Sewing Circle Success",
          date: "May 2024",
          description: "Tailoring training that led to 150+ women starting businesses",
          image: "🧵"
        },
        {
          title: "Digital Didi Program",
          date: "March 2024",
          description: "Computer literacy for rural women",
          image: "📱"
        },
        {
          title: "Women's Rights Workshop",
          date: "January 2024",
          description: "Legal awareness program for 500+ women",
          image: "⚖️"
        }
      ],
      categories: ["Women Empowerment", "Skill Development", "Entrepreneurship"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our NGO <span className="hero-text">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the incredible organizations working tirelessly to create positive change in communities
          </p>
        </div>
      </section>

      {/* NGOs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ngos.map((ngo) => (
              <Card key={ngo.id} className="overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-4xl">{ngo.logo}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{ngo.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{ngo.shortInfo}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {ngo.categories.map((category, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Founded in {ngo.founded}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {ngo.location}
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      {ngo.website}
                    </div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3">
                          <span className="text-3xl">{ngo.logo}</span>
                          <span className="text-2xl">{ngo.name}</span>
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold mb-2 flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              Organization Details
                            </h3>
                            <div className="space-y-2 text-sm">
                              <div><strong>Founded:</strong> {ngo.founded}</div>
                              <div><strong>Founder:</strong> {ngo.founder}</div>
                              <div><strong>Location:</strong> {ngo.location}</div>
                              <div><strong>Website:</strong> {ngo.website}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2 flex items-center">
                              <Target className="h-4 w-4 mr-2" />
                              Our Mission
                            </h3>
                            <p className="text-sm text-muted-foreground">{ngo.aim}</p>
                          </div>
                        </div>

                        {/* Categories */}
                        <div>
                          <h3 className="font-semibold mb-2">Focus Areas</h3>
                          <div className="flex flex-wrap gap-2">
                            {ngo.categories.map((category, index) => (
                              <Badge key={index} variant="outline">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Achievements */}
                        <div>
                          <h3 className="font-semibold mb-3 flex items-center">
                            <Award className="h-4 w-4 mr-2" />
                            Key Achievements
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {ngo.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Past Campaigns */}
                        <div>
                          <h3 className="font-semibold mb-3">Recent Campaigns</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {ngo.pastCampaigns.map((campaign, index) => (
                              <Card key={index} className="p-4">
                                <div className="text-2xl mb-2 text-center">{campaign.image}</div>
                                <h4 className="font-medium mb-1 text-sm">{campaign.title}</h4>
                                <p className="text-xs text-muted-foreground mb-2">{campaign.date}</p>
                                <p className="text-xs">{campaign.description}</p>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NGOs;