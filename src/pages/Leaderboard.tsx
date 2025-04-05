
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContributors } from "@/services/leaderboardService";
import { Skeleton } from "@/components/ui/skeleton";

const Leaderboard = () => {
  const { data: contributors, isLoading, error } = useContributors();

  if (error) {
    console.error("Error loading contributors:", error);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Training Leaderboard</h1>
          <p className="text-lg text-charcoal-light mb-8">
            Top contributors ranked by training steps contributed to the project
          </p>

          <div className="bg-gradient-to-r from-hive to-teal-dark rounded-lg p-6 mb-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm opacity-80">Total Contributors</div>
                <div className="text-3xl font-bold">438</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Total Training Steps</div>
                <div className="text-3xl font-bold">5.34M</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Training Progress</div>
                <div className="text-3xl font-bold">27%</div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="contributors">
            <TabsList className="mb-6">
              <TabsTrigger value="contributors">By Contributors</TabsTrigger>
              <TabsTrigger value="countries">By Countries</TabsTrigger>
              <TabsTrigger value="gpus">By GPU Types</TabsTrigger>
            </TabsList>

            <TabsContent value="contributors">
              <Card>
                <CardHeader className="bg-gray-50 border-b">
                  <div className="grid grid-cols-12 gap-4 font-medium text-sm text-charcoal">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-3">Contributor</div>
                    <div className="col-span-2 text-center">Training Steps</div>
                    <div className="col-span-2 text-center">Hours</div>
                    <div className="col-span-2">GPU Type</div>
                    <div className="col-span-2">Country</div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {isLoading ? (
                    // Loading skeletons
                    Array(10).fill(0).map((_, index) => (
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
                        <div className="col-span-2 text-center">
                          <Skeleton className="h-5 w-24 mx-auto" />
                        </div>
                        <div className="col-span-2 text-center">
                          <Skeleton className="h-5 w-16 mx-auto" />
                        </div>
                        <div className="col-span-2">
                          <Skeleton className="h-5 w-20" />
                        </div>
                        <div className="col-span-2">
                          <Skeleton className="h-5 w-8" />
                        </div>
                      </div>
                    ))
                  ) : contributors ? (
                    contributors.map((entry, index) => (
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
                        <div className="col-span-2 text-center">
                          <span className="font-mono font-medium">{entry.steps.toLocaleString()}</span>
                          {index === 0 && (
                            <Badge className="ml-2 bg-orange">Leader</Badge>
                          )}
                        </div>
                        <div className="col-span-2 text-center">
                          <span className="font-mono">{entry.total_hours}</span>
                        </div>
                        <div className="col-span-2">{entry.gpu_type}</div>
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
            </TabsContent>

            <TabsContent value="countries">
              <Card>
                <CardHeader>
                  <CardTitle>Contributions by Country</CardTitle>
                  <CardDescription>
                    Coming soon - country breakdown statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    Country statistics will be available soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gpus">
              <Card>
                <CardHeader>
                  <CardTitle>Contributions by GPU Type</CardTitle>
                  <CardDescription>
                    Coming soon - GPU performance statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    GPU statistics will be available soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
