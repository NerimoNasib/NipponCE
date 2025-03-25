import SectionHeader from "./section-header"
import CourseCard from "./course-card"

export default function CoursesSection() {
  const courses = [
    {
      level: { name: "Beginner", color: "green" },
      title: "Japanese Foundations",
      description: "Master hiragana, katakana, and basic grammar to build a solid foundation",
      link: "/courses/foundations",
      imagePath: "/landing-page/kodomo-shinji.jpg",
    },
    {
      level: { name: "Intermediate", color: "yellow" },
      title: "Conversational Japanese",
      description: "Develop practical conversation skills for daily life and work situations",
      link: "/courses/conversation",
      imagePath: "/landing-page/talking-shinji.jpeg",
    },
    {
      level: { name: "Advanced", color: "blue" },
      title: "Technical Japanese",
      description: "Learn specialized vocabulary for engineering, programming, and tech industries",
      link: "/courses/technical",
      imagePath: "/landing-page/technical-shinji.jpg",
    },
  ]

  return (
    <section id="courses" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Our Learning Paths"
          description="From basic hiragana to advanced conversation, we've got you covered"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              level={course.level}
              title={course.title}
              description={course.description}
              link={course.link}
              imagePath={course.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

