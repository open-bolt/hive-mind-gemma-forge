
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LeaderboardPreview = () => {
  // Dummy data for the leaderboard preview
  const leaderboardEntries = [
    { rank: 1, name: "neural_nexus", steps: 34567, gpuType: "RTX 4090", country: "🇺🇸" },
    { rank: 2, name: "tensor_titan", steps: 32912, gpuType: "A100", country: "🇩🇪" },
    { rank: 3, name: "deep_dreamer", steps: 29845, gpuType: "RTX 4080", country: "🇯🇵" },
    { rank: 4, name: "ml_maestro", steps: 27601, gpuType: "RTX 3090", country: "🇬🇧" },
    { rank: 5, name: "quantum_quokka", steps: 25733, gpuType: "RTX 4090", country: "🇦🇺" },
  ];

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
            {leaderboardEntries.map((entry, index) => (
              <div 
                key={index} 
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
                <div className="col-span-3">{entry.gpuType}</div>
                <div className="col-span-2">{entry.country}</div>
              </div>
            ))}
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
