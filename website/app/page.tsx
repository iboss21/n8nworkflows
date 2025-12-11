import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { WorkflowShowcase } from "@/components/workflow-showcase";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <WorkflowShowcase />
      <CTASection />
      <Footer />
    </div>
  );
}
