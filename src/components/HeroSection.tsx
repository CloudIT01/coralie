import { Sparkles, Heart, Users } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative pt-32 pb-20 bg-gradient-to-br from-[#09303b] via-[#027199] to-[#3fbeb0] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3fbeb0] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles size={18} className="text-[#3fbeb0]" />
              <span className="text-sm font-medium">Soin de support thérapeutique</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              La socio-esthétique au service du{' '}
              <span className="text-[#3fbeb0]">bien-être</span> de vos résidents
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              Intégrez un soin non-médicamenteux qui apaise vos patients, améliore leur qualité de vie et allège la charge mentale de vos équipes soignantes.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-[#3fbeb0]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Estime de soi</h3>
                  <p className="text-sm text-white/80">Restaurer la confiance et l'image de soi</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-[#3fbeb0]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Pluridisciplinarité</h3>
                  <p className="text-sm text-white/80">Une expertise complémentaire à votre projet thérapeutique</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-[#027199] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3fbeb0] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Discuter de votre projet d'établissement
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#027199] transition-all duration-300"
              >
                Découvrir mes prestations
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#3fbeb0] rounded-full animate-pulse"></div>
                <span className="text-white/80">Castelnaudary + 30km</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#3fbeb0] rounded-full animate-pulse"></div>
                <span className="text-white/80">EHPAD • Cliniques • Associations</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3fbeb0]/20 to-transparent"></div>
              <img
                src="/socio-estheticienne.png"
                alt="Coralie, socio-esthéticienne professionnelle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
