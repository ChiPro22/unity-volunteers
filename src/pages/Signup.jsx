import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Heart, User, Mail, Calendar, Building, Phone, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 py-8">
        <Card className="w-full max-w-lg p-8 bg-white/95 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary fill-current" />
              <span className="text-2xl font-bold hero-text">VolunteerConnect</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Join Our Community</h1>
            <p className="text-muted-foreground">Start your volunteer journey today</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your full name"
                  className="pl-10"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com"
                  className="pl-10"
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  type="number" 
                  placeholder="25"
                  min="16"
                  max="100"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="dob" 
                    type="date" 
                    className="pl-10"
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company/College</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="company" 
                  type="text" 
                  placeholder="Your workplace or educational institution"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="mobile" 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="pl-10"
                  required 
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <input 
                type="checkbox" 
                id="terms" 
                className="rounded border-border" 
                required 
              />
              <label htmlFor="terms" className="text-muted-foreground">
                I agree to the{' '}
                <Link to="#" className="text-primary hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>

            <div className="relative">
              <Separator className="my-4" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-card px-2 text-muted-foreground text-sm">Or sign up with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              <Chrome className="h-4 w-4 mr-2" />
              Sign up with Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in here
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;