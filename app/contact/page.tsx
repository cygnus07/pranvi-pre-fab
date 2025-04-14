import React from 'react'
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'

const ContactPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-50 flex items-center">
        <div className="absolute inset-0 bg-blue-900/30 z-10" />
        <Image
          src="/images/contact-hero.jpg" // Office or construction site image
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 11 2345 6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@pranvibuildings.com</p>
                    <p className="text-gray-600">sales@pranvibuildings.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-gray-600">
                      Pranvi Building Solutions Pvt. Ltd.<br />
                      123 Industrial Area, Sector 62<br />
                      Noida, Uttar Pradesh 201309
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566374032572!2d77.3658764150823!3d28.62673998242499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55ab92a4a0f%3A0x9a4b426b5b7d7a1e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage