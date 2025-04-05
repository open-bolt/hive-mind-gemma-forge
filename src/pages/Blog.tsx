
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/services/blogService";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const { data: blogPosts, isLoading, error } = useBlogPosts();

  if (error) {
    console.error("Error loading blog posts:", error);
  }

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
            {isLoading ? (
              // Loading skeletons
              Array(6).fill(0).map((_, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader className="pb-2">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-full" />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <Skeleton className="h-20 w-full mb-4" />
                    <div className="flex flex-wrap gap-2">
                      {Array(2).fill(0).map((_, i) => (
                        <Skeleton key={i} className="h-6 w-16" />
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </CardFooter>
                </Card>
              ))
            ) : blogPosts ? (
              blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col h-full">
                  <CardHeader className="pb-2">
                    <div className="text-sm text-charcoal-light mb-2">{post.date}</div>
                    <h3 className="text-xl font-semibold hover:text-hive transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-charcoal-light mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag, i) => (
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
              ))
            ) : (
              <div className="col-span-2 text-center py-10">
                <p>No blog posts found.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
