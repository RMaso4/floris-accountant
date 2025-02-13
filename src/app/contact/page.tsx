'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  subject: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setFormStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error)
      setFormStatus('error')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Contact met Floris
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Heeft u vragen? Wij helpen u graag verder.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              {/* Office Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bezoek ons kantoor</h2>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Bezoekadres</h3>
                    <p className="mt-2 text-gray-600">
                      Minderbroederssingel 10A<br />
                      6041 KJ ROERMOND
                    </p>
                    <h3 className="text-lg font-medium text-gray-900 mt-4">Postadres</h3>
                    <p className="mt-2 text-gray-600">
                      Postbus 1042<br />
                      6040 KA ROERMOND
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Neem contact op</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-gray-600">
                        T: <a href="tel:0475330773" className="hover:text-blue-500">0475-330773</a>
                      </p>
                      <p className="text-gray-600">F: 0475-350699</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-gray-600">
                        <a href="mailto:info@floris.ac" className="hover:text-blue-500">
                          info@floris.ac
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="mailto:salarisadministratie@floris.ac" className="hover:text-blue-500">
                          salarisadministratie@floris.ac
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Verzenden...' : 'Verstuur bericht'}
              </button>

              {formStatus === 'success' && (
                <div className="mt-4 rounded-md bg-green-50 p-4">
                  <p className="text-green-800">
                    Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mt-4 rounded-md bg-red-50 p-4">
                  <p className="text-red-800">
                    Er is iets misgegaan. Probeer het later opnieuw.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Floris Accountant Locatie"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.580151562726!2d5.987246!3d51.191738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c74b5a5c052f59%3A0x2fb1c5a8f11b636e!2sMinderbroederssingel%2010A%2C%206041%20KJ%20Roermond!5e0!3m2!1sen!2snl!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}