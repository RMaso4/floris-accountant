import { Calculator, FileText, PiggyBank, Briefcase } from 'lucide-react'

const services = [
  {
    name: 'Accountancy',
    description: 'Samenstellen van jaarrekeningen, beoordelen van jaarrekeningen, deponeerstukken KvK',
    icon: Calculator,
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Belastingzaken',
    description: 'Aangiften vennootschapsbelasting, inkomstenbelasting, dividendbelasting',
    icon: PiggyBank,
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Administratieve dienstverlening',
    description: 'Voeren van administraties, verzorgen loon- en salarisadministratie, online boekhouden',
    icon: FileText,
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Advisering',
    description: 'Ondernemingsplan, financieringen, begrotingen, bedrijfsopvolging',
    icon: Briefcase,
    gradient: 'from-blue-700 to-blue-900',
  },
]

export function Services() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Diensten
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wat doet Floris?
          </p>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Professionele dienstverlening op maat voor uw onderneming, met persoonlijke aandacht en expertise.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div 
                key={service.name} 
                className="group relative pt-6"
              >
                <div className="relative rounded-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
                  {/* Card Background with Gradient Border */}
                  <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl" />
                  
                  <div className="relative h-full bg-white rounded-2xl p-8">
                    <div className="flex flex-col items-start">
                      {/* Icon with gradient background */}
                      <div className={`
                        inline-flex items-center justify-center p-3 rounded-xl
                        bg-gradient-to-r ${service.gradient} shadow-lg
                        transform -translate-y-11
                      `}>
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>

                      <h3 className="mt-2 text-xl font-bold text-gray-900">
                        {service.name}
                      </h3>

                      <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}