
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Introducing Crowd Hive: Distributed Training for Gemma 3",
      excerpt:
        "Learn how we're leveraging distributed computing to train a 1B parameter language model from scratch.",
      date: "April 2, 2025",
      author: "Crowd Hive Team",
      slug: "introducing-crowd-hive",
      tags: ["Announcement", "Overview"],
    },
    {
      title: "Optimizing Training Speed with Hivemind",
      excerpt:
        "Discover the technical details behind our distributed training setup and how we're optimizing for speed and efficiency.",
      date: "March 28, 2025",
      author: "AI Research Team",
      slug: "optimizing-training-speed",
      tags: ["Technical", "Optimization"],
    },
    {
      title: "Data Preparation Pipeline for Gemma 3 Training",
      excerpt:
        "A deep dive into how we're preparing and filtering data for training our language model.",
      date: "March 20, 2025",
      author: "Data Engineering Team",
      slug: "data-preparation-pipeline",
      tags: ["Data", "Pipeline"],
    },
    {
      title: "Community Spotlight: First 100 Contributors",
      excerpt:
        "Meet some of the early contributors who have helped kickstart our distributed training effort.",
      date: "March 15, 2025",
      author: "Community Manager",
      slug: "community-spotlight-first-100",
      tags: ["Community", "Contributors"],
    },
    {
      title: "Training Progress Report: Week 1",
      excerpt:
        "A detailed look at our first week of training, including metrics, challenges, and wins.",
      date: "March 10, 2025",
      author: "ML Engineering Team",
      slug: "training-progress-report-week-1",
      tags: ["Progress", "Metrics"],
    },
    {
      title: "Setting Up Your Environment for Crowd Hive",
      excerpt:
        "A comprehensive guide to configuring your system to contribute to our distributed training project.",
      date: "March 5, 2025",
      author: "DevOps Team",
      slug: "setting-up-your-environment",
      tags: ["Tutorial", "Setup"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-lg text-charcoal-light mb-8">
            Technical insights and progress reports from our training journey
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <div className="text-sm text-charcoal-light mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold hover:text-hive transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-charcoal-light mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-charcoal rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between items-center">
                  <div className="text-sm text-charcoal">{post.author}</div>
                  <Button variant="ghost" size="sm" className="text-hive hover:text-hive-dark hover:bg-hive/5" asChild>
                    <Link to={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
