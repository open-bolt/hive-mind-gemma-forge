
import { Link } from "react-router-dom";
import { Github, BookOpen, Database, MessageSquare, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="font-bold text-2xl mb-4">Crowd Hive</div>
            <p className="text-gray-400 mb-6">
              A distributed computing project to train Gemma 3 from scratch using the collective power of volunteers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Discord">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="HuggingFace">
                <Database className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Documentation">
                <BookOpen className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Weights & Biases">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Project</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-400 hover:text-white">Leaderboard</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-400 hover:text-white">Join</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">HuggingFace</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">DockerHub</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Discord</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contributors</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Report Issues</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Crowd Hive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
