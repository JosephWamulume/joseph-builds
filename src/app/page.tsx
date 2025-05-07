import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">Joseph<span className="text-blue-600">Builds</span></a>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Joseph Wamulume</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mb-6">Full Stack Developer</h2>
            <p className="text-gray-600 mb-8 text-lg">
              I build modern, responsive web applications using the latest technologies.
              Passionate about creating seamless user experiences and solving complex problems.  
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                View My Work
              </a>
              <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-80 md:h-96">
              {/* Replace with your profile image */}
              <div className="bg-blue-600 rounded-lg w-full h-full opacity-20 absolute"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xl font-medium text-blue-800">Your Profile Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Hi there! I'm Joseph, a passionate full-stack developer specializing in building exceptional digital experiences. With a strong foundation in both front-end and back-end technologies, I enjoy creating applications that are not only functional but also intuitive and responsive.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in software development started with a curiosity about how websites work, which led me to pursue a formal education in computer science. Since then, I've been continuously learning and adapting to the ever-evolving tech landscape.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Skill Items */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-medium text-gray-800 mb-2">Frontend Development</h3>
              <p className="text-gray-600 text-sm">React, Next.js, HTML5, CSS3, JavaScript, TypeScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-medium text-gray-800 mb-2">Backend Development</h3>
              <p className="text-gray-600 text-sm">Node.js, Express, MongoDB, RESTful APIs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-medium text-gray-800 mb-2">UI/UX Design</h3>
              <p className="text-gray-600 text-sm">Responsive Design, Tailwind CSS, Bootstrap</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-medium text-gray-800 mb-2">Tools & Methods</h3>
              <p className="text-gray-600 text-sm">Git, GitHub, VS Code, Agile Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Football Stats Dashboard */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <div className="text-blue-800 font-medium">Football Stats Dashboard Preview</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Football Stats Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive football statistics dashboard built with the MERN stack, featuring league standings, team details, and player statistics with MongoDB caching.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">MongoDB</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Express</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Node.js</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://football-stats-dashboard.onrender.com" className="text-sm text-blue-600 hover:text-blue-800 transition">View Demo</a>
                  <a href="https://github.com/JosephWamulume/football-stats-dashboard-mern" className="text-sm text-blue-600 hover:text-blue-800 transition">GitHub Repo</a>
                </div>
              </div>
            </div>
            
            {/* Add more project cards later */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <div className="text-green-800 font-medium">Project Preview</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  More exciting projects are in the works. Stay tuned for updates!
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Future Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-800 font-medium">Email</p>
                      <a href="mailto:contact@josephbuilds.com" className="text-gray-600 hover:text-blue-600 transition">contact@josephbuilds.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-800 font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/josephwamulume" className="text-gray-600 hover:text-blue-600 transition">linkedin.com/in/josephwamulume</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-800 font-medium">GitHub</p>
                      <a href="https://github.com/JosephWamulume" className="text-gray-600 hover:text-blue-600 transition">github.com/JosephWamulume</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-xl font-bold">Joseph<span className="text-blue-400">Builds</span></a>
              <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/JosephWamulume" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/josephwamulume" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
