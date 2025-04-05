
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SystemRequirements from "@/components/SystemRequirements";
import ResourceLinks from "@/components/ResourceLinks";
import LeaderboardPreview from "@/components/LeaderboardPreview";
import BlogPreview from "@/components/BlogPreview";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <SystemRequirements />
        <LeaderboardPreview />
        <ResourceLinks />
        <BlogPreview />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
