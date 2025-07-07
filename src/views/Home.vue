<template>
    <main class="bg-fondo text-white font-mono">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContentSection />
        <ContactSection />
        <ScrollToTop />
        <Footer />
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ContentSection from '@/components/ContentSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import Footer from '../components/Footer.vue'
</script>
