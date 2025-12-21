import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import logo from "@/assets/hack-davidson-logo.png";
import retroTechArt from "@/assets/retro-tech-art.jpg";
import CountdownTimer from "./CountdownTimer";
import RegistrationDialog from "./RegistrationDialog";
import { useState } from "react";

const HeroSection = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20 relative overflow-hidden bg-background">
      {/* Sharp Geometric Shapes - hidden on mobile for cleaner look */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 sharp-clip" />
      <div className="absolute bottom-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-accent/10 rotate-45 opacity-50" />
      <div className="hidden sm:block absolute top-40 right-1/4 w-32 h-32 border-4 border-primary/20" />
      <div className="hidden sm:block absolute bottom-1/3 left-1/4 w-24 h-24 border-4 border-accent/30 rotate-12" />
      
      {/* Retro Tech Art Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src={retroTechArt} 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Side - Logo and Info */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={logo} 
                  alt="Hack@Davidson Logo" 
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain filter drop-shadow-2xl"
                />
              </div>

              {/* Event Info */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start text-sm sm:text-base font-medium">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>February 20-22, 2026</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-accent">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Davidson College, NC</span>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Text and CTA */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-primary leading-none">
                Hack@
                <br />
                Davidson
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-muted-foreground font-medium px-4 sm:px-0">
                48 hours of innovation, collaboration, and creativity. Join us for Davidson's premier hackathon experience.
              </p>

              {/* Countdown Timer */}
              <div className="py-2 sm:py-4">
                <CountdownTimer />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <RegistrationDialog 
                  open={isRegistrationOpen} 
                  onOpenChange={setIsRegistrationOpen}
                  trigger={
                    <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-accent hover:bg-accent/90 text-accent-foreground group w-full sm:w-auto">
                      Become a Hacker
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  }
                />
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
                  onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Schedule
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://community.davidson.edu/gift-form" target="_blank" rel="noopener noreferrer">
                    Donate
                  </a>
                </Button>
              </div>

              {/* Registration Deadline */}
              <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
                Early registration closes <span className="text-accent font-semibold">January 31</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
