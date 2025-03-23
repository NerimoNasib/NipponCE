import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Japanese Journey?</h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join hundreds of Computer Engineering students who have successfully learned Japanese with us
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/home"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started Now
          </Link>
          <Link
            to="/courses"
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

