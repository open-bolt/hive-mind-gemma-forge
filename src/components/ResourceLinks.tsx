
import { Card, CardContent } from "@/components/ui/card";
import { Github, BookOpen, Globe, Database, Code, Discord, Upload } from "lucide-react";

const ResourceLinks = () => {
  const resources = [
    {
      title: "GitHub",
      description: "Explore our code and contribute",
      icon: <Github className="h-8 w-8 text-charcoal" />,
      url: "#",
    },
    {
      title: "HuggingFace",
      description: "Access pretokenized datasets",
      icon: <Database className="h-8 w-8 text-charcoal" />,
      url: "#",
    },
    {
      title: "Discord",
      description: "Join our community discussions",
      icon: <Discord className="h-8 w-8 text-charcoal" />,
      url: "#",
    },
    {
      title: "DockerHub",
      description: "Easy setup with our containers",
      icon: <Upload className="h-8 w-8 text-charcoal" />,
      url: "#",
    },
    {
      title: "ReadTheDocs",
      description: "Comprehensive documentation",
      icon: <BookOpen className="h-8 w-8 text-charcoal" />,
      url: "#",
    },
    {
      title: "Weights & Biases",
      description: "Monitor training in real-time",
      icon: <Globe className="h-8 w-8 text-charcoal" />,
      url: "#",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Resources</h2>
        <p className="text-center text-charcoal-light mb-12">
          Everything you need to get started and stay connected
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-hive/30 group-hover:transform group-hover:scale-[1.01]">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-50 group-hover:bg-hive/5 transition-colors">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-charcoal-light">{resource.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLinks;
