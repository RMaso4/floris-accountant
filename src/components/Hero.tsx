import Image from 'next/image';
import { Shield, Target, Users, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "30+ jaar ervaring",
    description: "Bewezen expertise in financieel advies en administratie"
  },
  {
    icon: Target,
    title: "Persoonlijke aanpak",
    description: "Directe communicatie met uw vaste adviseur"
  },
  {
    icon: Users,
    title: "MKB specialist",
    description: "Focus op kleine en middelgrote ondernemingen"
  },
  {
    icon: Clock,
    title: "Altijd bereikbaar",
    description: "Snelle response op al uw vragen"
  }
];

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Hero Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
              <div className="animate-fade-in">
                {/* Updated Badge */}
                <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-100">
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Uw betrouwbare financiële partner
                  </span>
                </div>

                {/* Enhanced Value Proposition */}
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:mt-2">
                  <span className="block">Samen bouwen aan</span>
                  <span className="block mt-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    uw financiële toekomst
                  </span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed sm:mt-8">
                  <strong>Floris is meer dan een accountant.</strong> Als ervaren financieel adviseur 
                  helpen wij MKB-ondernemers met praktische oplossingen voor complexe vraagstukken. 
                  Van boekhouding tot strategisch advies - wij denken met u mee.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg"
                  >
                    Gratis kennismaking
                  </a>
                  <a
                    href="/diensten"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Bekijk onze diensten
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:col-span-6 lg:flex lg:items-center lg:justify-center">
              <div className="relative w-full max-w-lg">
                {/* Background effects */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />
                
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-blue-800/20 transform rotate-6" />
                  <div className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                    <Image 
                      src="/image.png" 
                      alt="Floris adviseur"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative group bg-white rounded-xl p-6 shadow-sm border border-gray-100
                  transform transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="absolute -top-6 left-6">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}