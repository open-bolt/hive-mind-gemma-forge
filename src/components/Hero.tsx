
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="bg-hive-pattern">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-dark mb-6">
                <span className="bg-gradient-to-r from-hive to-teal-dark bg-clip-text text-transparent">
                  Crowd Hive
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-charcoal-light mb-6">
                A distributed computing project to train Gemma 3 from scratch using the 
                collective power of volunteers around the world.
              </p>
              <p className="text-md md:text-lg text-charcoal mb-8">
                Join our hive mind and contribute your GPU power to help train a 
                1B parameter language model. Every computation step counts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange hover:bg-orange-dark text-white" asChild>
                  <Link to="/join">Join Training</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-hive text-hive hover:bg-hive/5" asChild>
                  <Link to="/leaderboard">View Leaderboard</Link>
                </Button>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-hive/30 to-teal-light/30 rounded-xl blur-xl animate-pulse-slow"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <pre className="text-sm overflow-x-auto bg-gray-50 p-4 rounded-md">
                    <code>{`"architectures": [
  "Gemma3ForCausalLM"
],
"hidden_size": 1152,
"num_attention_heads": 4,
"num_hidden_layers": 26,
...
"torch_dtype": "bfloat16"`}</code>
                  </pre>
                  <div className="mt-4 flex items-center justify-between text-sm text-charcoal-light">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Training in progress</span>
                    </div>
                    <div>1B parameters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
