import { Link } from "wouter";
import logoPng from "@assets/Screenshot_2026-02-05_at_12.10.24_PM_1770318632225.png";

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
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={logoPng} 
                alt="HOAFAX Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center">
            {/* Navigation links removed as requested */}
          </div>
        </div>
      </div>
    </nav>
  );
}
