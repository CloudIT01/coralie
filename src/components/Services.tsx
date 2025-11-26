import { Users, User, FileCheck, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Ateliers collectifs',
      subtitle: 'Favoriser le lien social et l\'estime de soi',
      description: 'Des séances de groupe qui créent du lien entre résidents, stimulent la mémoire sensorielle et apportent un moment de convivialité.',
      formats: [
        'Atelier maquillage et colorimétrie',
        'Soin des mains et manucure collective',
        'Atelier bien-être et relaxation',
        'Conseil en image et valorisation de soi'
      ],
      color: 'from-[#027199] to-[#3fbeb0]'
    },
    {
      icon: User,
      title: 'Soins individuels',
      subtitle: 'Accompagnement personnalisé au lit du patient',
      description: 'Une prise en charge adaptée aux pathologies, aux mobilités réduites et aux besoins spécifiques de chaque résident.',
      formats: [
        'Soin du visage hydratant et apaisant',
        'Modelage des mains et des pieds',
        'Soin de confort post-traitement',
        'Accompagnement en oncologie et gériatrie'
      ],
      color: 'from-[#3fbeb0] to-[#027199]'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#09303b] mb-4">
            Des prestations adaptées à votre structure
          </h2>
          <p className="text-xl text-[#678187] max-w-3xl mx-auto">
            Que ce soit en groupe ou en individuel, chaque intervention est pensée pour s'intégrer harmonieusement
            à votre projet thérapeutique et à votre organisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-lg">{service.subtitle}</p>
              </div>

              <div className="p-8">
                <p className="text-[#678187] mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.formats.map((format, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#3fbeb0] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#09303b]">{format}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#09303b] to-[#027199] p-8 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
              <FileCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Facturation simplifiée</h3>
            <p className="text-white/90">
              Contrat de prestation direct avec l'établissement. Aucune gestion administrative pour le résident ou sa famille.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#027199] to-[#3fbeb0] p-8 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Flexibilité horaire</h3>
            <p className="text-white/90">
              Interventions planifiées selon vos contraintes et le rythme de votre établissement. Séances ponctuelles ou régulières.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3fbeb0] to-[#027199] p-8 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Coordination d'équipe</h3>
            <p className="text-white/90">
              Collaboration étroite avec vos soignants, médecins coordonnateurs et cadres de santé pour un soin pluridisciplinaire cohérent.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-[#3fbeb0]/10 border-2 border-[#3fbeb0] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-[#09303b] mb-4">
            Vous souhaitez intégrer la socio-esthétique à votre projet d'établissement ?
          </h3>
          <p className="text-lg text-[#678187] mb-8 max-w-2xl mx-auto">
            Discutons ensemble de vos besoins spécifiques et construisons un partenariat sur mesure pour le bien-être de vos résidents.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#027199] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#09303b] transition-colors shadow-lg hover:shadow-xl"
          >
            Prendre contact
          </button>
        </div>
      </div>
    </section>
  );
}
