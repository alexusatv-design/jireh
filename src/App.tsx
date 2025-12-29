import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Services from './components/Services';
import About from './components/About';
import TrustBar from './components/TrustBar';
import QuickQuoteForm from './components/QuickQuoteForm';
import MobileCallButton from './components/MobileCallButton';
import Footer from './components/Footer';
import { updateMetaTags, createStructuredData } from './utils/seo';

function App() {
  useEffect(() => {
    updateMetaTags({
      title: 'General Contractor NJ | Kitchen Remodeling, Siding, Bathroom Renovation | Jireh Home Improvement',
      description: 'Jireh Home Improvement: NJ\'s trusted general contractor. Kitchen & bathroom remodeling, siding, windows, decks & more. Call (609) 638-7724!',
      keywords: [
        'general contractor new jersey',
        'home improvement expert nj',
        'kitchen remodeling new jersey',
        'bathroom renovation nj',
        'siding contractor nj',
        'window replacement',
        'deck builder new jersey',
        'bathroom remodeling',
        'kitchen remodeling',
        'power washing',
        'home renovation new jersey',
        'locally owned contractor',
        'finished basement',
        'home improvement',
        'jireh home improvement',
      ],
      ogType: 'website',
      canonicalUrl: 'https://jirehconstructionnj.com',
    });

    createStructuredData({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://jirehconstructionnj.com',
      name: 'Jireh Home Improvement',
      image: '/logo.png',
      description: 'Locally owned general contractor in New Jersey with 25+ years of experience. Expert kitchen remodeling, bathroom renovation, siding, windows, decks, and home improvement services.',
      url: 'https://jirehconstructionnj.com',
      telephone: '+16096387724',
      email: 'info@jirehconstructionnj.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'New Jersey',
        addressLocality: 'New Jersey',
        addressRegion: 'NJ',
        postalCode: '',
        addressCountry: 'US',
      },
      areaServed: 'NJ',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.0583,
        longitude: -74.4057,
      },
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '127',
        reviewCount: '127',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Google Reviews',
          },
          reviewBody: 'Highly trusted general contractor with 25+ years of experience in kitchen remodeling, bathroom renovation, and home improvement.',
        },
      ],
      sameAs: [
        'https://www.facebook.com/jirehconstructionnj',
        'https://www.instagram.com/jirehconstructionnj',
      ],
      foundingDate: '1999',
      employees: [
        {
          '@type': 'Person',
          name: 'Jireh Home Improvement Team',
        },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <BeforeAfterSlider />
        <Services />
        <About />
        <TrustBar />
        <QuickQuoteForm />
      </main>
      <MobileCallButton />
      <Footer />
    </div>
  );
}

export default App;
