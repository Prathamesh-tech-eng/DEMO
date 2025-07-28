import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import TranslationMethodsSection from '../components/ui/TranslationMethodsSection.jsx';
import ImplementationSection from '../components/ui/ImplementationSection';
import ImpactCards from '../components/ui/ImpactCards';
import { Fade } from 'react-awesome-reveal';
import LoadingWrapper from '../components/ui/LoadingWrapper';

function HomePage() {
    return (
        <LoadingWrapper>
            <div className="bg-gray-50 font-sans">
                <Fade duration={1000}>
                    <HeroSection />
                </Fade>
                <Fade duration={1000} delay={200}>
                    <TranslationMethodsSection />
                </Fade>
                <Fade duration={1000} delay={400}>
                    <ImplementationSection />
                </Fade>
                <Fade duration={1000} delay={600}>
                    <ImpactCards />
                </Fade>
            </div>
        </LoadingWrapper>
    );
}

export default HomePage;
