
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JoinCTA = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-hive to-teal-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be Part of Something Revolutionary
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Join thousands of contributors pooling their resources to train a
          state-of-the-art language model from scratch.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-hive hover:bg-gray-100" asChild>
            <Link to="/join">Start Contributing</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link to="/leaderboard">Check Leaderboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinCTA;
