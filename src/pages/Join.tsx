
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const Join = () => {
  const steps = [
    {
      title: "Check Requirements",
      description: "Make sure your system meets the minimum requirements",
      details: (
        <ul className="space-y-2 mt-4">
          <li className="flex items-start">
            <Check size={18} className="text-green-500 mr-2 mt-0.5" />
            <span>GPU with minimum 8GB VRAM</span>
          </li>
          <li className="flex items-start">
            <Check size={18} className="text-green-500 mr-2 mt-0.5" />
            <span>Linux OS (Ubuntu 22.04+ recommended)</span>
          </li>
          <li className="flex items-start">
            <Check size={18} className="text-green-500 mr-2 mt-0.5" />
            <span>Python 3.11</span>
          </li>
          <li className="flex items-start">
            <Check size={18} className="text-green-500 mr-2 mt-0.5" />
            <span>PyTorch 2.6 with CUDA support</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Install Docker",
      description: "The easiest way to get started is with our Docker image",
      details: (
        <div className="mt-4">
          <p className="mb-2">Pull our Docker image with:</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
            docker pull crowdhive/gemma3-trainer:latest
          </pre>
        </div>
      ),
    },
    {
      title: "Configure Environment",
      description: "Set up your credentials and training parameters",
      details: (
        <div className="mt-4">
          <p className="mb-2">Create a configuration file:</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
            {`cp config.example.json config.json
nano config.json  # Edit with your info`}
          </pre>
        </div>
      ),
    },
    {
      title: "Start Training",
      description: "Join the hive and start contributing",
      details: (
        <div className="mt-4">
          <p className="mb-2">Run the training client:</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
            docker run --gpus all -v $(pwd)/config.json:/app/config.json crowdhive/gemma3-trainer:latest
          </pre>
          <p className="mt-2">Your client will automatically connect to the hive and start training!</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Join the Hive</h1>
          <p className="text-lg text-charcoal-light mb-8">
            Contribute your GPU power to help train Gemma 3 from scratch
          </p>

          <Tabs defaultValue="guided">
            <TabsList className="mb-6">
              <TabsTrigger value="guided">Guided Setup</TabsTrigger>
              <TabsTrigger value="docker">Docker Setup</TabsTrigger>
              <TabsTrigger value="manual">Manual Setup</TabsTrigger>
            </TabsList>

            <TabsContent value="guided">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Follow these steps to join the training</CardTitle>
                  <CardDescription>
                    A step-by-step guide to get you up and running quickly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {steps.map((step, index) => (
                      <div key={index} className="mb-8 last:mb-0">
                        <div className="flex">
                          <div className="flex-none">
                            <div className="w-8 h-8 rounded-full bg-hive text-white flex items-center justify-center font-medium">
                              {index + 1}
                            </div>
                            {index < steps.length - 1 && (
                              <div className="h-full w-0.5 bg-gray-200 mx-auto my-2"></div>
                            )}
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-lg font-medium">{step.title}</h3>
                            <p className="text-charcoal-light">{step.description}</p>
                            {step.details}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button className="bg-orange hover:bg-orange-dark text-white">
                  Download Configuration Tool
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="docker">
              <Card>
                <CardHeader>
                  <CardTitle>Docker Setup</CardTitle>
                  <CardDescription>
                    The fastest way to join using our pre-built Docker image
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">1. Pull the Docker image</h3>
                      <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
                        docker pull crowdhive/gemma3-trainer:latest
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">2. Create configuration file</h3>
                      <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
                        {`# Download example config
curl -O https://raw.githubusercontent.com/crowd-hive/gemma3-trainer/main/config.example.json

# Edit with your information
nano config.json`}
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">3. Start the trainer</h3>
                      <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
                        {`# Run with GPU support
docker run --gpus all \\
  -v $(pwd)/config.json:/app/config.json \\
  crowdhive/gemma3-trainer:latest`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manual">
              <Card>
                <CardHeader>
                  <CardTitle>Manual Setup</CardTitle>
                  <CardDescription>
                    For advanced users who prefer to install dependencies manually
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">1. Install dependencies</h3>
                      <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
                        {`# Create a virtual environment
python -m venv venv
source venv/bin/activate

# Install PyTorch
pip install torch==2.6.0

# Install other dependencies
pip install hivemind datatrove transformers datasets wandb`}
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">2. Clone repository</h3>
                      <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
                        git clone https://github.com/crowd-hive/gemma3-trainer.git
                        cd gemma3-trainer
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">3. Configure and start</h3>
                      <pre className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
                        {`# Create config from example
cp config.example.json config.json

# Edit configuration
nano config.json

# Start training
python train.py --config config.json`}
                      </pre>
                    </div>
                  </div>
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

export default Join;
