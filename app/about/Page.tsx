import React from 'react'
import Image from 'next/image'
import { FaHardHat, FaUsers, FaAward, FaBuilding } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-50 flex items-center">
        <div className="absolute inset-0 bg-blue-900/30 z-10" />
        <Image
          src="/images/about-hero.jpg" // Construction site image
          alt="Our Team at Work"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Building Excellence Since 2005
          </h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Story</h2>
              <p className="text-lg mb-4 text-gray-700">
                Founded in 2005, Pranvi Building Solutions began as a small steel fabrication workshop with a vision to transform India's construction landscape.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Today, we're a leading provider of pre-engineered steel structures, serving clients across multiple states with innovative building solutions.
              </p>
              <p className="text-lg text-gray-700">
                Our journey reflects our commitment to quality, timely delivery, and customer satisfaction.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/founders.jpg" // Founders/early days image
                alt="Founders"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <FaHardHat size={40} />, number: '18+', label: 'Years Experience' },
              { icon: <FaBuilding size={40} />, number: '500+', label: 'Projects Completed' },
              { icon: <FaUsers size={40} />, number: '200+', label: 'Clients Served' },
              { icon: <FaAward size={40} />, number: '25+', label: 'Industry Awards' }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <div className="mb-4 text-blue-200">{item.icon}</div>
                <p className="text-4xl font-bold mb-2">{item.number}</p>
                <p className="text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                description: "We never compromise on materials or construction standards",
                icon: "🔧"
              },
              {
                title: "Innovative Solutions",
                description: "Custom designs tailored to each client's unique needs",
                icon: "💡"
              },
              {
                title: "Safety First",
                description: "Rigorous safety protocols on every job site",
                icon: "🛡️"
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <span className="text-4xl mb-4 inline-block">{value.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage