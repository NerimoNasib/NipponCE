import { Check, Users } from "lucide-react"
import SectionHeader from "./section-header"

export default function CommunitySection() {
  const benefits = [
    "Practice speaking with native Japanese speakers",
    "Join study groups focused on JLPT preparation",
    "Access exclusive resources and learning materials",
    "Get information about job opportunities in Japan",
  ]

  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Join Our Community"
          description="Connect with fellow learners, practice together, and accelerate your progress"
        />

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Benefits of Our Community</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Users size={20} />
                Join Discord Community
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="/landing-page/eva.gif"
                alt="Community illustration"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

