import React from 'react';

import TopSection from '../../components/TopSection';
import AvailableHotelsSection from '../../components/AvailableHotelsSection';
import OffersSection from '../../components/OffersSection';
import HomesSection from '../../components/HomesSection';
import BestDestinationsSection from '../../components/BestDestinationsSection';
import Footer from '../../components/Footer';

const MainPage = () => (
  <main>
    <TopSection />
    <AvailableHotelsSection />
    <OffersSection />
    <HomesSection />
    <BestDestinationsSection />
    <Footer />
  </main>
);

export default MainPage;
