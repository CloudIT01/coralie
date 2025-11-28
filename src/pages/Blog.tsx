import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';

export default function Blog() {
  const scrollToSection = useScrollToSection();
  const articles = [
    {
      id: 1,
      title: 'La socio-esthétique en EHPAD : un soin de support essentiel',
      excerpt: 'Découvrez comment la socio-esthétique améliore la qualité de vie des résidents et facilite le travail des équipes soignantes. Un soin de support reconnu pour restaurer confiance et dignité.',
      date: '15 Mars 2024',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Gériatrie',
      link: '/article/1'
    },
    {
      id: 2,
      title: 'Soins non-médicamenteux : une approche complémentaire reconnue',
      excerpt: 'Les autorités de santé encouragent l\'intégration de pratiques comme la socio-esthétique dans les projets thérapeutiques. Découvrez le cadre réglementaire et les bénéfices prouvés.',
      date: '8 Mars 2024',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/3737572/pexels-photo-3737572.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Réglementation',
      link: '/article/2'
    },
    {
      id: 3,
      title: 'Comment la socio-esthétique aide les patients en oncologie',
      excerpt: 'Restaurer l\'estime de soi pendant et après les traitements : comment la socio-esthétique accompagne les patients à travers l\'épreuve du cancer.',
      date: '1 Mars 2024',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Oncologie',
      link: '/article/3'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center space-x-2 text-[#027199] font-semibold hover:text-[#3fbeb0] transition-colors mb-8">
            <span>← Retour à l'accueil</span>
          </Link>

          <div className="inline-flex items-center space-x-2 bg-[#3fbeb0]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#027199]">Ressources professionnelles</span>
          </div>

          <h1 className="text-5xl font-bold text-[#09303b] mb-4">
            Blog & Actualités
          </h1>

          <p className="text-xl text-[#678187] max-w-3xl mx-auto">
            Des articles pour mieux comprendre l'apport de la socio-esthétique dans les établissements médico-sociaux et ses applications dans divers contextes de soins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <Link key={article.id} to={article.link} className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#027199] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
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

                  <p className="text-[#678187] mb-6 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>

                  <button className="flex items-center space-x-2 text-[#027199] font-semibold group-hover:text-[#3fbeb0] transition-colors">
                    <span>Lire l'article</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#027199] to-[#3fbeb0] rounded-2xl p-8 md:p-12 text-white">
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
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[#027199] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#09303b] hover:text-white transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
              >
                <span>Organiser une rencontre</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
