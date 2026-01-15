import HeroModern from "@/components/HeroModern";
import ToolsBentoGrid from "@/components/ToolsBentoGrid";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <HeroModern />
      <ToolsBentoGrid />
      <FeaturesSection />
      <CommunitySection />
    </main>
  );
}
