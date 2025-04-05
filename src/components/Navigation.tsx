
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, BookOpen, Globe, Database, Code, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-2xl bg-gradient-to-r from-hive to-teal-dark bg-clip-text text-transparent">
            CrowdHive
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="px-3 py-2 rounded-md text-charcoal hover:bg-gray-100">Home</Link>
          <Link to="/leaderboard" className="px-3 py-2 rounded-md text-charcoal hover:bg-gray-100">Leaderboard</Link>
          <Link to="/blog" className="px-3 py-2 rounded-md text-charcoal hover:bg-gray-100">Blog</Link>
          <div className="pl-3 border-l border-gray-200">
            <Button variant="outline" size="sm" asChild>
              <Link to="/join" className="bg-orange hover:bg-orange-dark text-white rounded-md">
                Join Training
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-charcoal hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-charcoal hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/leaderboard" 
              className="px-3 py-2 rounded-md text-charcoal hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link 
              to="/blog" 
              className="px-3 py-2 rounded-md text-charcoal hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-orange hover:bg-orange-dark text-white" 
                asChild
              >
                <Link 
                  to="/join"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Training
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
