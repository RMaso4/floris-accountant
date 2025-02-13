'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { NewsletterForm } from './NewsletterForm'

export function Contact() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="px-6 py-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100/50 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact met Floris
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Heeft u vragen over onze dienstverlening? Neem gerust contact met ons op.
              </p>

              <dl className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">Bezoekadres</dt>
                    <dd className="mt-2 text-gray-600 space-y-1">
                      <p>Minderbroederssingel 10A</p>
                      <p>6041 KJ ROERMOND</p>
                    </dd>
                    <dt className="text-lg font-medium text-gray-900 mt-4">Postadres</dt>
                    <dd className="mt-2 text-gray-600 space-y-1">
                      <p>Postbus 1042</p>
                      <p>6040 KA ROERMOND</p>
                    </dd>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">Telefoon</dt>
                    <dd className="mt-2 text-gray-600 space-y-1">
                      <p>
                        <a 
                          href="tel:0475330773" 
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          0475-330773
                        </a>
                      </p>
                      <p>F: 0475-350699</p>
                    </dd>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">E-mail</dt>
                    <dd className="mt-2 text-gray-600 space-y-1">
                      <p>
                        <a 
                          href="mailto:info@floris.ac" 
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          info@floris.ac
                        </a>
                      </p>
                      <p className="mt-2">
                        Salarisadministratie: <br />
                        <a 
                          href="mailto:salarisadministratie@floris.ac" 
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          salarisadministratie@floris.ac
                        </a>
                      </p>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Newsletter Section */}
            <div className="mt-12">
              <NewsletterForm />
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Onze Locatie</h2>
              <p className="mt-2 text-gray-600">
                Bezoek ons kantoor in Roermond
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Floris Accountant Locatie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.580151562726!2d5.987246!3d51.191738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c74b5a5c052f59%3A0x2fb1c5a8f11b636e!2sMinderbroederssingel%2010A%2C%206041%20KJ%20Roermond!5e0!3m2!1sen!2snl!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}