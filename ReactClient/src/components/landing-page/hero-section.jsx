import { Link } from "react-router-dom"
import { Users } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-950 to-blue-800 text-white py-16 md:py-24">
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Nippon CE!</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Master Japanese language skills and open doors to exciting career opportunities in Japan
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/home"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Get Started
            </Link>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
              <Users size={20} />
              Join our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

