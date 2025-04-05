
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Introducing Crowd Hive: Distributed Training for Gemma 3",
      excerpt:
        "Learn how we're leveraging distributed computing to train a 1B parameter language model from scratch.",
      date: "April 2, 2025",
      author: "Crowd Hive Team",
      slug: "introducing-crowd-hive",
    },
    {
      title: "Optimizing Training Speed with Hivemind",
      excerpt:
        "Discover the technical details behind our distributed training setup and how we're optimizing for speed and efficiency.",
      date: "March 28, 2025",
      author: "AI Research Team",
      slug: "optimizing-training-speed",
    },
    {
      title: "Data Preparation Pipeline for Gemma 3 Training",
      excerpt:
        "A deep dive into how we're preparing and filtering data for training our language model.",
      date: "March 20, 2025",
      author: "Data Engineering Team",
      slug: "data-preparation-pipeline",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
            <p className="text-charcoal-light">
              Technical insights and progress reports from our training journey
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-hive text-hive hover:bg-hive/5" asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="text-sm text-charcoal-light mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold hover:text-hive transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-charcoal-light">{post.excerpt}</p>
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
    </div>
  );
};

export default BlogPreview;
