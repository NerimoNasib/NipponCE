import { BookOpen, MessageCircle, Globe } from "lucide-react"
import SectionHeader from "./section-header"
import FeatureCard from "./feature-card"

export default function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Structured Curriculum",
      description: "Comprehensive lessons designed to take you from beginner to advanced Japanese proficiency",
      image: "/landing-page/structured-curriculum.avif",
    },
    {
      icon: MessageCircle,
      title: "Interactive Practice",
      description: "Engage with interactive exercises and real-world conversations to improve your skills",
      image: "/landing-page/anime-practice.webp",
    },
    {
      icon: Globe,
      title: "Tech-Focused Content",
      description: "Learn vocabulary and phrases relevant to computer engineering and technology fields",
      image: "/landing-page/tech-content.jpg",
    },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Why Learn With Us?"
          description="Our platform is designed specifically for Computer Engineering students who want to learn Japanese effectively"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} image={feature.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

