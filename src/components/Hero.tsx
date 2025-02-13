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
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-24 sm:pb-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
              <div className="animate-fade-in">
                {/* Refined Badge */}
                <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-100">
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Welkom bij Floris
                  </span>
                </div>
  
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:mt-2">
                  <span className="block font-serif italic">Floris,</span>
                  <span className="pb-5 block mt-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    aangenaam
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-gray-600 leading-relaxed sm:mt-12">
                  Floris is een daadkrachtige adviseur die met beide benen op de grond staat.
                  Hij weet wat er speelt voor de ondernemer. Floris denkt mee en geeft adviezen
                  waar je wat aan hebt, want Floris weet als geen ander hoe de wereld van het
                  geld in elkaar zit.
                </p>
  
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg"
                  >
                    Contact opnemen
                  </a>
                  <a
                    href="/diensten"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Onze diensten
                  </a>
                </div>
              </div>
            </div>
  
            <div className="hidden lg:col-span-6 lg:flex lg:items-center lg:justify-center">
              <div className="relative w-full max-w-lg">
                {/* Background blur effect */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />
                
                {/* Image container with enhanced styling */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-blue-800/20 transform rotate-6" />
                  <img 
                    src="/image.png" 
                    alt="Floris adviseur"
                    className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }