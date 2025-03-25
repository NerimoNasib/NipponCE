import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function CourseCard({ level, title, description, link, imagePath }) {
  const getBgColor = () => {
    switch (level.color) {
      case "green":
        return "bg-green-100 text-green-800"
      case "yellow":
        return "bg-yellow-100 text-yellow-800"
      case "blue":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={imagePath} alt={title} className="h-48 w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className={`text-xs font-medium ${getBgColor()} px-2 py-1 rounded`}>{level.name}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-blue-600 font-medium flex items-center hover:text-blue-700">
          Explore course <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  )
}

