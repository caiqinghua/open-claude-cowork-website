import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Advantages } from '@/components/advantages';
import { TechStack } from '@/components/tech-stack';
import { QuickStart } from '@/components/quick-start';
import { CTA, Footer } from '@/components/cta';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Advantages />
        <TechStack />
        <QuickStart />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
