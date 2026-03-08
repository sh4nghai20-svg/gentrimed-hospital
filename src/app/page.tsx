import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import OurDoctors from '@/components/OurDoctors';
import Statistics from '@/components/Statistics';
import NewsEvents from '@/components/NewsEvents';
import Testimonials from '@/components/Testimonials';
import AppointmentCTA from '@/components/AppointmentCTA';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <WhyChooseUs />
      <Services />
      <OurDoctors />
      <Statistics />
      <NewsEvents />
      <Testimonials />
      <AppointmentCTA />
      <Footer />
      <Chatbot />
    </main>
  );
}
