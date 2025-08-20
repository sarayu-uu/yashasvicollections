import Navbar from '@/components/Navbar';
import CollectionList from '@/components/CollectionList';
import HeroCarousel from '@/components/HeroCarousel';
import FeaturesSection from '@/components/FeaturesSection';
import CuratedCollections from '@/components/CuratedCollections';
import BestsellerSection from '@/components/BestsellerSection';
import CategorySection from '@/components/CategorySection';
import CustomerReviews from '@/components/CustomerReviews';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CollectionList />
      <HeroCarousel />
      <FeaturesSection />
      <AboutSection />
      <CuratedCollections />
      <BestsellerSection />
      <CategorySection />
      <CustomerReviews />
      
    </main>
  );
}
