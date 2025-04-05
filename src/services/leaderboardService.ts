
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

export type Contributor = {
  id: string;
  rank: number;
  name: string;
  steps: number;
  gpu_type: string;
  country: string;
  total_hours: number;
};

export const fetchContributors = async (): Promise<Contributor[]> => {
  const { data, error } = await supabase
    .from("contributors")
    .select("*")
    .order("rank", { ascending: true });

  if (error) {
    console.error("Error fetching contributors:", error);
    throw error;
  }

  return data;
};

export const useContributors = () => {
  return useQuery({
    queryKey: ["contributors"],
    queryFn: fetchContributors,
  });
};

export const fetchTopContributors = async (limit: number = 5): Promise<Contributor[]> => {
  const { data, error } = await supabase
    .from("contributors")
    .select("*")
    .order("rank", { ascending: true })
    .limit(limit);

  if (error) {
    console.error("Error fetching top contributors:", error);
    throw error;
  }

  return data;
};

export const useTopContributors = (limit: number = 5) => {
  return useQuery({
    queryKey: ["topContributors", limit],
    queryFn: () => fetchTopContributors(limit),
  });
};
