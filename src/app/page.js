import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ZoneGenie from '@/components/ZoneGenie';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <ZoneGenie />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
