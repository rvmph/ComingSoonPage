import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function Navbar() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-slate-900 tracking-tight">
              HOAFAX
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToId('features')} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToId('how-it-works')} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              How it Works
            </button>
            <Button 
              onClick={() => scrollToId('waitlist')}
              variant="default"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
