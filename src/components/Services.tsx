import { Calculator, FileText, PiggyBank, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    name: 'Accountancy',
    description: 'Samenstellen van jaarrekeningen, beoordelen van jaarrekeningen, deponeerstukken KvK',
    icon: Calculator,
    href: '/diensten#accountancy',
    features: ['Jaarrekeningen', 'Deponeringen KvK', 'Verklaring verzekerd belang']
  },
  {
    name: 'Belastingzaken',
    description: 'Aangiften vennootschapsbelasting, inkomstenbelasting, dividendbelasting',
    icon: PiggyBank,
    href: '/diensten#belastingzaken',
    features: ['Vennootschapsbelasting', 'Inkomstenbelasting', 'Dividendbelasting']
  },
  {
    name: 'Administratieve dienstverlening',
    description: 'Voeren van administraties, verzorgen loon- en salarisadministratie, online boekhouden',
    icon: FileText,
    href: '/diensten#administratie',
    features: ['Financiële administratie', 'Salarisadministratie', 'Online boekhouden']
  },
  {
    name: 'Advisering',
    description: 'Ondernemingsplan, financieringen, begrotingen, bedrijfsopvolging',
    icon: Briefcase,
    href: '/diensten#advisering',
    features: ['Bedrijfsadvies', 'Financieringsaanvragen', 'Bedrijfsopvolging']
  },
];

export function Services() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Onze Dienstverlening
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wat kunnen wij voor u betekenen?
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Complete financiële dienstverlening voor ondernemers. Van dagelijkse administratie tot strategisch advies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
                transition-all duration-300 hover:shadow-lg"
            >
              {/* Service Icon */}
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                >
                  Meer informatie
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="/diensten"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg 
              text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
              transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg"
          >
            Bekijk al onze diensten
          </a>
        </div>
      </div>
    </div>
  );
}