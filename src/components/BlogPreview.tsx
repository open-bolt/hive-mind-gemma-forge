
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/services/blogService";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPreview = () => {
  const { data: blogPosts, isLoading, error } = useBlogPosts();

  if (error) {
    console.error("Error loading blog posts:", error);
  }

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
          {isLoading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <Skeleton className="h-20 w-full" />
                </CardContent>
                <CardFooter className="pt-0 flex justify-between items-center">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-8 w-24" />
                </CardFooter>
              </Card>
            ))
          ) : blogPosts ? (
            blogPosts.slice(0, 3).map((post, index) => (
              <Card key={post.id} className="flex flex-col h-full">
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
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p>No blog posts found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
