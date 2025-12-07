import { Header } from '@/components/organisms/Header';
import { HeroSection } from '@/components/organisms/HeroSection';
import { Footer } from '@/components/organisms/Footer';
import { LandingPageData } from '@/lib/types';

export interface LandingPageTemplateProps {
  data: LandingPageData;
}

export function LandingPageTemplate({ data }: LandingPageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header data={data.header} />

      {/* Main Content */}
      <main className="mt-[-60px] bg-center bg-no-repeat bg-cover bg-[url('/images/hero.webp')]">
        {/* Hero Section */}
        <HeroSection data={data} />
      </main>

      {/* Footer */}
      <Footer data={data.footer} />
    </div>
  );
}
