
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTopContributors } from "@/services/leaderboardService";
import { Skeleton } from "@/components/ui/skeleton";

const LeaderboardPreview = () => {
  const { data: leaderboardEntries, isLoading, error } = useTopContributors(5);

  if (error) {
    console.error("Error loading contributors:", error);
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Training Leaderboard</h2>
            <p className="text-charcoal-light">
              Top contributors to our distributed training effort
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-hive hover:bg-hive-dark text-white" asChild>
            <Link to="/leaderboard">View Full Leaderboard</Link>
          </Button>
        </div>

        <Card>
          <CardHeader className="bg-gray-50 border-b">
            <div className="grid grid-cols-12 gap-4 font-medium text-sm text-charcoal">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-3">Contributor</div>
              <div className="col-span-3 text-center">Training Steps</div>
              <div className="col-span-3">GPU Type</div>
              <div className="col-span-2">Country</div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              // Loading skeletons
              Array(5).fill(0).map((_, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-12 gap-4 p-4 text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="col-span-1 text-center">
                    <Skeleton className="h-5 w-5 mx-auto" />
                  </div>
                  <div className="col-span-3">
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <div className="col-span-3 text-center">
                    <Skeleton className="h-5 w-24 mx-auto" />
                  </div>
                  <div className="col-span-3">
                    <Skeleton className="h-5 w-20" />
                  </div>
                  <div className="col-span-2">
                    <Skeleton className="h-5 w-8" />
                  </div>
                </div>
              ))
            ) : leaderboardEntries ? (
              leaderboardEntries.map((entry, index) => (
                <div 
                  key={entry.id}
                  className={`grid grid-cols-12 gap-4 p-4 text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } ${index === 0 ? "border-l-4 border-orange" : ""}`}
                >
                  <div className="col-span-1 text-center font-semibold">
                    {entry.rank}
                  </div>
                  <div className="col-span-3 font-medium">{entry.name}</div>
                  <div className="col-span-3 text-center">
                    <span className="font-mono font-medium">{entry.steps.toLocaleString()}</span>
                    {index === 0 && (
                      <Badge className="ml-2 bg-orange">Leader</Badge>
                    )}
                  </div>
                  <div className="col-span-3">{entry.gpu_type}</div>
                  <div className="col-span-2">{entry.country}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p>No contributor data available.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-charcoal-light mb-4">
            Join 438 contributors from 52 countries training our model
          </p>
          <Button className="bg-orange hover:bg-orange-dark text-white" asChild>
            <Link to="/join">Become a Contributor</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPreview;
