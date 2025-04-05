
import { useParams } from "react-router-dom";
import { useBlogPostBySlug } from "@/services/blogService";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPostBySlug(slug || "");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" size="sm" className="mb-4" asChild>
              <Link to="/blog" className="flex items-center text-charcoal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </Button>
            
            {isLoading ? (
              <>
                <Skeleton className="h-8 w-2/3 mb-2" />
                <div className="flex items-center mb-4">
                  <Skeleton className="h-4 w-24 mr-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
                {Array(5).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full mb-2" />
                ))}
              </>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-lg text-red-500 mb-4">Error loading blog post</p>
                <Button asChild>
                  <Link to="/blog">Return to Blog</Link>
                </Button>
              </div>
            ) : post === null ? (
              <div className="text-center py-12">
                <p className="text-lg mb-4">Blog post not found</p>
                <Button asChild>
                  <Link to="/blog">Return to Blog</Link>
                </Button>
              </div>
            ) : (
              <>
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                <div className="flex flex-wrap items-center mb-4 text-charcoal-light">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-charcoal rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="prose max-w-none mt-6">
                  {post.content ? (
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  ) : (
                    <p className="text-charcoal-light italic">No content available for this post.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
