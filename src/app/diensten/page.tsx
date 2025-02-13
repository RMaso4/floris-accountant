import { Briefcase, Calculator, FileText, PiggyBank, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 'accountancy',
    title: 'Accountancy',
    icon: Calculator,
    description: 'Professionele accountancydiensten voor uw financiële zekerheid.',
    services: [
      {
        name: 'Samenstellen van jaarrekeningen',
        description: 'Wij stellen uw jaarrekening samen volgens de geldende wet- en regelgeving. Dit omvat een gedetailleerde balans, winst- en verliesrekening en toelichting.',
      },
      {
        name: 'Beoordelen van jaarrekeningen',
        description: 'Onze experts beoordelen uw jaarrekening grondig op juistheid en volledigheid.',
      },
      {
        name: 'Deponeerstukken Kamer van Koophandel',
        description: 'Wij verzorgen de complete afhandeling van uw deponeringsverplichting bij de KvK.',
      },
      {
        name: 'Verklaring verzekerd belang',
        description: 'We stellen een verklaring verzekerd belang op voor uw verzekeringen.',
      }
    ],
    details: [
      'Samenstellen van de jaarrekening conform wet- en regelgeving',
      'Analyse van uw financiële positie en prestaties',
      'Advies over financiële verbetering en optimalisatie',
      'Begeleiding bij controles en audits',
      'Voorbereiding voor accountantscontrole',
      'Administratieve ondersteuning en advies'
    ]
  },
  {
    id: 'belastingzaken',
    title: 'Belastingzaken',
    icon: PiggyBank,
    description: 'Optimaliseer uw fiscale positie met onze belastingexpertise.',
    services: [
      {
        name: 'Aangiften vennootschapsbelasting',
        description: 'We verzorgen de complete aangifte vennootschapsbelasting voor uw BV of NV.',
      },
      {
        name: 'Aangiften inkomstenbelasting',
        description: 'Voor zowel ondernemers als particulieren verzorgen wij de aangifte inkomstenbelasting.',
      },
      {
        name: 'Aangiften dividendbelasting',
        description: 'Bij uitkering van dividend verzorgen wij de aangifte dividendbelasting.',
      },
      {
        name: 'Aangiften schenkingsrecht',
        description: 'Bij schenkingen verzorgen wij de aangifte schenkbelasting.',
      }
    ],
    details: [
      'Fiscale planning en optimalisatie',
      'BTW-aangiften en administratie',
      'Bezwaar- en beroepsprocedures',
      'Vooroverleg met de Belastingdienst',
      'Fiscaal advies bij bedrijfsoverdracht',
      'Internationale belastingzaken'
    ]
  },
  {
    id: 'administratieve-dienstverlening',
    title: 'Administratieve dienstverlening',
    icon: FileText,
    description: 'Complete administratieve ondersteuning voor uw bedrijf.',
    services: [
      {
        name: 'Voeren van administraties',
        description: 'We nemen uw complete financiële administratie uit handen.',
      },
      {
        name: 'Verzorgen loon- en salarisadministratie',
        description: 'Wij verzorgen de complete loon- en salarisadministratie voor uw medewerkers.',
      },
      {
        name: 'Aangifte loonheffingen',
        description: 'We verzorgen de periodieke aangifte loonheffingen.',
      },
      {
        name: 'Online boekhouden',
        description: 'We bieden moderne online boekhoudsoftware voor real-time inzicht.',
      }
    ],
    details: [
      'Volledige boekhouding en administratie',
      'Debiteuren- en crediteurenbeheer',
      'Rapportages en managementinformatie',
      'Implementatie boekhoudpakketten',
      'Procesoptimalisatie en automatisering',
      'Training en ondersteuning medewerkers'
    ]
  },
  {
    id: 'advisering',
    title: 'Advisering',
    icon: Briefcase,
    description: 'Strategisch advies voor de groei en continuïteit van uw onderneming.',
    services: [
      {
        name: 'Ondernemingsplan',
        description: 'We helpen bij het opstellen van een gedegen ondernemingsplan.',
      },
      {
        name: 'Financieringen',
        description: 'We adviseren over de beste financieringsmogelijkheden voor uw onderneming.',
      },
      {
        name: 'Bedrijfsopvolging',
        description: 'We begeleiden het complete bedrijfsopvolgingstraject.',
      },
      {
        name: 'Start nieuwe onderneming',
        description: 'We adviseren startende ondernemers over alle aspecten van het ondernemerschap.',
      }
    ],
    details: [
      'Strategische bedrijfsadvisering',
      'Begeleiding bij bedrijfsoverdracht',
      'Waardebepalingen en due diligence',
      'Financieringsaanvragen',
      'Reorganisatie en herstructurering',
      'Begeleiding startende ondernemers'
    ]
  }
];

export default function DienstenPage() {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Onze Diensten
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Professionele dienstverlening op maat voor uw onderneming
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="relative"
            >
              {/* Service Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Services */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Dienstverlening</h3>
                  {service.services.map((item) => (
                    <div 
                      key={item.name}
                      className="relative group bg-white rounded-xl border border-gray-100 p-6 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    >
                      <div className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0 transform transition-transform duration-200 group-hover:translate-x-1" />
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column - Details */}
                <div>
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100/50 p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Wat wij bieden</h3>
                    <div className="space-y-4">
                      {service.details.map((detail, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center group"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 transition-transform duration-200 group-hover:scale-150" />
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Contact Card */}
                  <div className="mt-8 bg-white rounded-xl border border-gray-100 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Meer weten over {service.title.toLowerCase()}?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Neem contact met ons op voor een vrijblijvend gesprek.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md"
                    >
                      Contact opnemen
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative separator except for last item */}
              {index !== services.length - 1 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16">
                  <div className="h-px w-40 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}