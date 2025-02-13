import Image from 'next/image'
import { Users, Target, Building, Briefcase } from 'lucide-react'

const teamMembers = [
  {
    name: 'Jasper',
    role: 'Eigenaar & Accountant',
    image: '/team/placeholder.jpg',
    description: 'Jasper richt zich op vaktechnische expertise en ondernemend advies. Met zijn kennis van financieel economische, juridische en fiscale zaken helpt hij ondernemers vooruit.',
  },
  {
    name: 'Olaf',
    role: 'Eigenaar & Accountant',
    image: '/team/placeholder.jpg',
    description: 'Olaf streeft ernaar een meerwaarde te zijn voor zowel ondernemers als particulieren. Door actief mee te denken en te adviseren over relevante zaken, draagt hij bij aan het succes van zijn klanten.',
  }
]

const values = [
  {
    icon: Users,
    title: 'Klantgericht',
    description: 'MKB + particulier - We richten ons op persoonlijke service voor zowel MKB-ondernemers als particulieren.'
  },
  {
    icon: Target,
    title: 'Toegevoegde waarde',
    description: 'Actieve begeleiding en advisering op financieel economisch, juridisch en fiscaal gebied.'
  },
  {
    icon: Building,
    title: 'Professioneel',
    description: 'Onze medewerkers zijn vaktechnisch onderlegd en werken met plezier aan uw zaken.'
  },
  {
    icon: Briefcase,
    title: 'Ervaring',
    description: 'Van klussenbedrijf tot glastuinbouw en van zorginstelling tot koerierbedrijf - wij hebben brede ervaring.'
  },
]

export default function AboutPage() {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Over Floris
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Een daadkrachtige adviseur die met beide benen op de grond staat
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Onze Missie
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              Floris wil een meerwaarde zijn voor de ondernemer en de particulier
            </p>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Door samen met de ondernemer te ondernemen en door actief te adviseren over relevante zaken.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl transform transition-transform group-hover:scale-[1.02]" />
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Wie zijn wij?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Floris is een accountantskantoor dat zich richt op het MKB en particulieren. 
                  We bieden een complete dienstverlening op het gebied van accountancy, 
                  fiscale zaken en bedrijfsadvies. Met onze persoonlijke aanpak en jarenlange 
                  ervaring staan we klaar om u te ondersteunen bij al uw financiële en 
                  administratieve uitdagingen.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl transform transition-transform group-hover:scale-[1.02]" />
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Onze Aanpak
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We geloven in een proactieve benadering waarbij we niet alleen 
                  reageren op uw vragen, maar ook meedenken over de toekomst van 
                  uw onderneming. Door onze kennis van verschillende branches kunnen 
                  we u voorzien van praktische adviezen die direct toepasbaar zijn 
                  in uw situatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Onze Kernwaarden</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div 
                key={value.title}
                className="relative group bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transform transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="absolute -top-6 left-8">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Ons Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Maak kennis met onze ervaren professionals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="relative group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transform transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="aspect-w-4 aspect-h-3 relative bg-gray-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`Foto van ${member.name}`}
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze Klanten</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Klanten van Floris zijn MKB-ondernemers variërend in vakgebied van 
              klussenbedrijf tot glastuinbouw en van zorginstelling tot koerierbedrijf.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}