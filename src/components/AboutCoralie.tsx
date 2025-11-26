import { Smile, MapPin, Award, Heart } from 'lucide-react';

export default function AboutCoralie() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3fbeb0]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#3fbeb0]/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coralie, socio-esthéticienne"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#09303b]/90 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  "J'accompagne les personnes fragilisées avec douceur et professionnalisme, sans blouse blanche, mais avec une vraie expertise."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#3fbeb0]/10 px-4 py-2 rounded-full mb-4">
                <Smile size={20} className="text-[#027199]" />
                <span className="text-sm font-semibold text-[#027199]">Votre partenaire bien-être</span>
              </div>
              <h2 className="text-4xl font-bold text-[#09303b] mb-4">
                Coralie, une approche humaine et solaire
              </h2>
              <p className="text-lg text-[#678187] leading-relaxed">
                À 34 ans, je mets ma jovialité et mon expertise au service des établissements médico-sociaux.
                Mon objectif : apporter un rayon de soleil dans le quotidien de vos résidents et de vos équipes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#027199]/10 rounded-lg flex items-center justify-center mb-4">
                  <Award size={24} className="text-[#027199]" />
                </div>
                <h3 className="font-semibold text-[#09303b] mb-2">Expertise certifiée</h3>
                <p className="text-sm text-[#678187]">
                  Formation spécialisée en socio-esthétique et soins de support en oncologie et gériatrie
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3fbeb0]/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-[#3fbeb0]" />
                </div>
                <h3 className="font-semibold text-[#09303b] mb-2">Proximité locale</h3>
                <p className="text-sm text-[#678187]">
                  Basée à Castelnaudary, j'interviens dans un rayon de 30km pour être au plus près de vos besoins
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#027199]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart size={24} className="text-[#027199]" />
                </div>
                <h3 className="font-semibold text-[#09303b] mb-2">Approche holistique</h3>
                <p className="text-sm text-[#678187]">
                  Une prise en charge globale qui considère la personne dans sa totalité, pas seulement sa pathologie
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3fbeb0]/10 rounded-lg flex items-center justify-center mb-4">
                  <Smile size={24} className="text-[#3fbeb0]" />
                </div>
                <h3 className="font-semibold text-[#09303b] mb-2">Personnalité solaire</h3>
                <p className="text-sm text-[#678187]">
                  Sans blouse blanche mais avec une énergie positive qui transforme l'atmosphère de soin
                </p>
              </div>
            </div>

            <div className="bg-[#027199]/5 border-l-4 border-[#027199] p-6 rounded-r-xl">
              <p className="text-[#09303b] leading-relaxed">
                <span className="font-semibold">Mon engagement :</span> Être une ressource complémentaire à vos équipes soignantes,
                en apportant une dimension de bien-être qui facilite le travail de chacun et améliore le vécu de vos résidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
