
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";

const SystemRequirements = () => {
  const [activeTab, setActiveTab] = useState('hardware');

  const requirements = {
    hardware: [
      { title: "GPU", description: "Minimum 8GB VRAM", required: true }
    ],
    os: [
      { title: "Linux", description: "Ubuntu 22.04+ (64-bit) recommended", required: true },
      { title: "macOS", description: "Partially supported (Docker recommended)", required: false },
      { title: "Windows 10+", description: "Experimental (via WSL)", required: false }
    ],
    software: [
      { title: "Python", description: "3.11", link: "https://docs.python.org/3.11/", required: true },
      { title: "PyTorch", description: "2.6", link: "https://pytorch.org/docs/stable/index.html", required: true },
      { title: "CUDA", description: "12.8", link: "https://docs.nvidia.com/cuda/", required: true },
      { title: "Hivemind", description: "Latest", link: "https://github.com/learning-at-home/hivemind", required: true },
      { title: "DataTrove", description: "Latest", link: "https://github.com/huggingface/datatrove", required: true },
      { title: "Other Packages", description: "wandb, git, huggingface_hub, transformers, datasets", required: true }
    ]
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">System Requirements</h2>
        <p className="text-center text-charcoal-light mb-8">
          Check if your system meets the requirements to join the training
        </p>

        <Tabs defaultValue="hardware" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hardware">Hardware</TabsTrigger>
            <TabsTrigger value="os">Operating Systems</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Hardware Requirements</CardTitle>
                <CardDescription>
                  The minimum hardware specifications needed to participate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.hardware.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        {req.required ? (
                          <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                            <Check size={14} className="text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                            <Check size={14} className="text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{req.title}</div>
                        <div className="text-sm text-gray-600">{req.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="os" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Operating System Compatibility</CardTitle>
                <CardDescription>
                  CrowdHive has varying levels of support for different operating systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.os.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        {req.required ? (
                          <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                            <Check size={14} className="text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                            <Check size={14} className="text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{req.title}</div>
                        <div className="text-sm text-gray-600">{req.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="software" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Software Dependencies</CardTitle>
                <CardDescription>
                  Required software packages and libraries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.software.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{req.title}</div>
                        <div className="text-sm text-gray-600">
                          {req.description}
                          {req.link && (
                            <a href={req.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-teal hover:underline">
                              Docs
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SystemRequirements;
