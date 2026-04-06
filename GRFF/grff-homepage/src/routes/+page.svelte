<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import StatsSection from '$lib/components/StatsSection.svelte';
  import FeaturedCoursesSection from '$lib/components/FeaturedCoursesSection.svelte';
  import FeaturesSection from '$lib/components/FeaturesSection.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="min-h-screen bg-[#05010d] text-white">
  <Navbar />
  <HeroSection />
  <StatsSection />
  <FeaturedCoursesSection />
  <FeaturesSection />
  <CTASection />
  <Footer />
</main>