import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Heart, Mail, Lock, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
        <Card className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary fill-current" />
              <span className="text-2xl font-bold hero-text">VolunteerConnect</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to continue your volunteer journey</p>
          </div>

          <form className="space-y-6">
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

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  className="pl-10"
                  required 
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-border" />
                <span>Remember me</span>
              </label>
              <Link to="#" className="text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>

            <div className="relative">
              <Separator className="my-4" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-card px-2 text-muted-foreground text-sm">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              <Chrome className="h-4 w-4 mr-2" />
              Sign in with Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/signup" className="text-primary hover:underline font-medium">
              Sign up here
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              By signing in, you agree to our{' '}
              <Link to="#" className="text-primary hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;