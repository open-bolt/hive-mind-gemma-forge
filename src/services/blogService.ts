
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string | null;
  date: string;
  author: string;
  slug: string;
  tags?: string[];
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data: posts, error: postsError } = await supabase
    .from("blog_posts")
    .select("*")
    .order("date", { ascending: false });

  if (postsError) {
    console.error("Error fetching blog posts:", postsError);
    throw postsError;
  }

  // Fetch tags for all posts
  const { data: tags, error: tagsError } = await supabase
    .from("blog_post_tags")
    .select("post_id, tag");

  if (tagsError) {
    console.error("Error fetching blog post tags:", tagsError);
    throw tagsError;
  }

  // Group tags by post_id
  const tagsByPostId = tags.reduce((acc: Record<string, string[]>, tag) => {
    if (!acc[tag.post_id]) {
      acc[tag.post_id] = [];
    }
    acc[tag.post_id].push(tag.tag);
    return acc;
  }, {});

  // Add tags to posts
  return posts.map(post => ({
    ...post,
    tags: tagsByPostId[post.id] || []
  }));
};

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  });
};

export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data: post, error: postError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (postError) {
    if (postError.code === "PGRST116") {
      // Post not found
      return null;
    }
    console.error("Error fetching blog post:", postError);
    throw postError;
  }

  // Fetch tags for this post
  const { data: tags, error: tagsError } = await supabase
    .from("blog_post_tags")
    .select("tag")
    .eq("post_id", post.id);

  if (tagsError) {
    console.error("Error fetching blog post tags:", tagsError);
    throw tagsError;
  }

  return {
    ...post,
    tags: tags.map(t => t.tag)
  };
};

export const useBlogPostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchBlogPostBySlug(slug),
    enabled: !!slug,
  });
};
