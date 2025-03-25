export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    const footerSections = [
      {
        title: "Quick Links",
        links: [
          { name: "Home", href: "#" },
          { name: "Features", href: "#features" },
          { name: "Courses", href: "#courses" },
          { name: "Community", href: "#community" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "JLPT Preparation", href: "#" },
          { name: "Study Materials", href: "#" },
          { name: "Job Board", href: "#" },
          { name: "FAQ", href: "#" },
        ],
      },
      {
        title: "Connect",
        links: [
          { name: "Discord", href: "#" },
          { name: "Twitter", href: "#" },
          { name: "Instagram", href: "#" },
          { name: "Contact Us", href: "#" },
        ],
      },
    ]
  
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-blue-500 font-bold text-2xl">日本語</span>
                <span className="ml-2 font-semibold">Nippon CE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Helping Computer Engineering students master Japanese language and find opportunities in Japan.
              </p>
            </div>
  
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {currentYear} Nippon CE. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  