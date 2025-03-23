import Navbar from "../components/landing-page/navbar"
import HeroSection from "../components/landing-page/hero-section"
import FeaturesSection from "../components/landing-page/feature-section"
import CoursesSection from "../components/landing-page/courses-section"
import CommunitySection from "../components/landing-page/community-section"
import CTASection from "../components/landing-page/cta-section"
import Footer from "../components/landing-page/footer"

export default function LandingPage() {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <CommunitySection />
        <CTASection />
        <Footer />
      </div>
    )
  }