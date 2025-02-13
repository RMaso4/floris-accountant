const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Diensten', href: '/diensten' },
      { name: 'Over Ons', href: '/over-ons' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Accountancy', href: '/diensten#accountancy' },
      { name: 'Belastingzaken', href: '/diensten#belastingzaken' },
      { name: 'Administratieve dienstverlening', href: '/diensten#administratie' },
      { name: 'Advisering', href: '/diensten#advisering' },
    ],
    contact: [
      { name: 'Minderbroederssingel 10A', href: 'https://maps.google.com/?q=Minderbroederssingel+10A,+6041+KJ+Roermond' },
      { name: '6041 KJ Roermond', href: 'https://maps.google.com/?q=Minderbroederssingel+10A,+6041+KJ+Roermond' },
      { name: '0475-330773', href: 'tel:0475330773' },
      { name: 'info@floris.ac', href: 'mailto:info@floris.ac' },
    ]
  }
  
  export function Footer() {
    return (
      <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>
  
        <div className="relative max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Over Floris</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Floris is een daadkrachtige adviseur die met beide benen op de grond staat. 
                Met onze expertise in financiële dienstverlening helpen we ondernemers vooruit.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Diensten</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Floris Accountant. Alle rechten voorbehouden.
              </p>
  
              {/* Navigation */}
              <nav className="flex flex-wrap justify-center -mx-4 -my-2">
                {navigation.main.map((item) => (
                  <div key={item.name} className="px-4 py-2">
                    <a
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </footer>
    )
  }