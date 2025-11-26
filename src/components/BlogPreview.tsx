import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function BlogPreview() {
  const articles = [
    {
      title: 'La socio-esthétique en EHPAD : un soin de support essentiel',
      excerpt: 'Découvrez comment la socio-esthétique améliore la qualité de vie des résidents et facilite le travail des équipes soignantes.',
      date: '15 Mars 2024',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Gériatrie'
    },
    {
      title: 'Soins non-médicamenteux : une approche complémentaire reconnue',
      excerpt: 'Les autorités de santé encouragent l\'intégration de pratiques comme la socio-esthétique dans les projets thérapeutiques.',
      date: '8 Mars 2024',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/3737572/pexels-photo-3737572.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Réglementation'
    },
    {
      title: 'Comment la socio-esthétique aide les patients en oncologie',
      excerpt: 'Restaurer l\'estime de soi pendant et après les traitements : témoignages et bonnes pratiques.',
      date: '1 Mars 2024',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Oncologie'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#3fbeb0]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#027199]">Ressources professionnelles</span>
          </div>
          <h2 className="text-4xl font-bold text-[#09303b] mb-4">
            Blog & Actualités
          </h2>
          <p className="text-xl text-[#678187] max-w-3xl mx-auto">
            Des articles pour mieux comprendre l'apport de la socio-esthétique dans les établissements médico-sociaux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#027199] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-[#678187] mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#09303b] mb-3 leading-tight">
                  {article.title}
                </h3>

                <p className="text-[#678187] mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-[#027199] font-semibold hover:text-[#3fbeb0] transition-colors group">
                  <span>Lire l'article</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-2 bg-white border-2 border-[#027199] text-[#027199] px-8 py-3 rounded-lg font-semibold hover:bg-[#027199] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
            <span>Voir tous les articles</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#027199] to-[#3fbeb0] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Vous souhaitez approfondir un sujet ?
              </h3>
              <p className="text-white/90 text-lg">
                Je suis disponible pour des présentations en équipe, des formations courtes ou simplement échanger sur l'intégration de la socio-esthétique dans votre établissement.
              </p>
            </div>
            <div className="text-center md:text-right">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-[#027199] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#09303b] hover:text-white transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
              >
                <span>Organiser une rencontre</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
