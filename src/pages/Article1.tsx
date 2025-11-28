import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';

export default function Article1() {
  const scrollToSection = useScrollToSection();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="inline-flex items-center space-x-2 text-[#027199] font-semibold hover:text-[#3fbeb0] transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Retour aux articles</span>
        </Link>

        <article className="bg-white">
          <div className="mb-8">
            <div className="inline-block bg-[#027199] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
              Gériatrie
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#09303b] mb-4 leading-tight">
              La socio-esthétique en EHPAD : un soin de support essentiel
            </h1>

            <div className="flex flex-wrap items-center space-x-6 text-[#678187] text-sm mb-8">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>Coralie - Socio-esthéticienne</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>15 Mars 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>5 min de lecture</span>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Socio-esthétique en EHPAD"
              className="w-full h-96 object-cover rounded-xl mb-12"
            />
          </div>

          <div className="prose prose-lg max-w-none text-[#678187] leading-relaxed space-y-6">
            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Introduction : pourquoi la socio-esthétique en EHPAD ?
            </h2>

            <p>
              Les établissements d'hébergement pour personnes âgées dépendantes (EHPAD) accueillent quotidiennement des résidents confrontés à des défis multiples : isolement social, perte d'autonomie, anxiété face aux soins et altération de l'image de soi. Dans ce contexte, la socio-esthétique émerge comme une réponse innovante et complémentaire aux approches médicales traditionnelles. Cette discipline combine les techniques d'esthétique cosmétique avec une expertise en relation d'aide et en psychologie sociale pour restaurer la confiance et le bien-être des résidents.
            </p>

            <p>
              Loin d'être un simple service cosmétique, la socio-esthétique en EHPAD constitue un véritable soin de support reconnu par les autorités sanitaires. Elle intervient dans le projet thérapeutique pluridisciplinaire pour améliorer la qualité de vie et faciliter l'acceptation des protocoles médicaux.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Les défis rencontrés par les résidents des EHPAD
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Isolement et troubles émotionnels
            </h3>

            <p>
              L'admission en EHPAD marque souvent un tournant difficile dans la vie d'une personne âgée. Séparation de l'environnement familial, perte de repères et sentiment d'abandon peuvent générer une anxiété chronique. Cette isolement émotionnel s'accentue lorsque les troubles cognitifs limitent les interactions sociales. Les résidents développent progressivement une forme de retrait, perdant l'intérêt pour leur apparence et leurs relations interpersonnelles.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Dégradation de l'image de soi
            </h3>

            <p>
              La vieillesse s'accompagne souvent d'une transformation physique : rides, cheveux blancs, modifications du teint et de la texture de la peau. Pour de nombreux résidents, cette transformation crée une dissonance cognitive entre l'image mentale qu'ils conservent d'eux-mêmes et leur reflet dans le miroir. Cette perte d'estime de soi peut engendrer des comportements de repli, de refus de participation aux activités collectives et, dans les cas les plus graves, une dépression.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Résistance aux soins médicaux
            </h3>

            <p>
              Les refus de soins, les comportements agressifs lors des toilettes ou des soins infirmiers représentent des enjeux majeurs en EHPAD. Ces réticences surviennent souvent quand le résident se sent dépossédé de son corps et de son autonomie. La restauration de la dignité et de la confiance en soi devient alors un préalable essentiel à l'acceptation des protocoles thérapeutiques.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Comment la socio-esthétique transforme le bien-être
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Restauration de l'estime de soi
            </h3>

            <p>
              Les interventions de socio-esthétique ciblent la restauration de l'image corporelle et de la confiance personnelle. À travers des soins adaptés—modelages du visage, traitement des mains, soins des cheveux—les résidents retrouvent une relation positive avec leur corps. Chaque soin est accompagné d'une écoute empathique et d'une valorisation de la personne. Les résidents rapportent une augmentation significative de leur estime et un regain d'intérêt pour leur présentation personnelle.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Amélioration de la qualité de vie et du lien social
            </h3>

            <p>
              Les ateliers de socio-esthétique collective—ateliers maquillage, soins des mains—favorisent le lien social entre résidents. Ces moments partagés créent des opportunités d'échange, de rires et de moments privilégiés. L'atmosphère générale de l'établissement s'en trouve améliorée, avec une diminution visible de l'anxiété et des comportements agressifs.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Facilitation de l'acceptation des soins
            </h3>

            <p>
              Lorsqu'un résident retrouve confiance en son image et en lui-même, sa disposition à accepter les protocoles de soins s'améliore considérablement. Les études montrent une augmentation de 3x de l'acceptation des soins médicaux après un accompagnement socio-esthétique régulier.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Intégration dans le projet thérapeutique pluridisciplinaire
            </h2>

            <p>
              La socio-esthétique n'est pas une alternative à la médecine, mais un complément reconnu par les autorités sanitaires (HAS, ARS). Elle s'intègre naturellement aux équipes pluridisciplinaires aux côtés des médecins, infirmiers, psychologues et animateurs. Ses objectifs—amélioration du bien-être, maintien de la dignité, restauration de l'estime de soi—alignent parfaitement avec les missions des EHPAD modernes.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Conclusion : un investissement dans la dignité
            </h2>

            <p>
              La socio-esthétique en EHPAD représente bien plus qu'un service cosmétique : c'est un investissement dans la qualité de vie et la dignité des résidents. Elle allège la charge des équipes soignantes, transforme l'atmosphère de l'établissement et restaure la confiance de chaque résident. Dans un contexte où le bien-être global devient central aux politiques de santé, intégrer la socio-esthétique est une décision stratégique et humaine.
            </p>

            <p>
              Vous souhaitez découvrir comment la socio-esthétique peut transformer votre EHPAD ? Je serais ravi de discuter de ses bénéfices spécifiques pour vos résidents et vos équipes.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#027199] to-[#3fbeb0] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Intéressé par la socio-esthétique pour votre établissement ?
            </h3>
            <p className="text-white/90 mb-6">
              Contactez-moi pour discuter des possibilités d'intégration de la socio-esthétique dans votre projet thérapeutique.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-[#027199] px-8 py-3 rounded-lg font-semibold hover:bg-[#09303b] hover:text-white transition-all duration-300"
            >
              Prendre contact
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
