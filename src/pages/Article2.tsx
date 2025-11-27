import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Article2() {
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
              Réglementation
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#09303b] mb-4 leading-tight">
              Soins non-médicamenteux : une approche complémentaire reconnue
            </h1>

            <div className="flex flex-wrap items-center space-x-6 text-[#678187] text-sm mb-8">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>Coralie - Socio-esthéticienne</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>8 Mars 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>5 min de lecture</span>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/3737572/pexels-photo-3737572.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Soins non-médicamenteux"
              className="w-full h-96 object-cover rounded-xl mb-12"
            />
          </div>

          <div className="prose prose-lg max-w-none text-[#678187] leading-relaxed space-y-6">
            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Introduction : la révolution des soins complémentaires
            </h2>

            <p>
              Au cours de la dernière décennie, les autorités sanitaires nationales et internationales ont opéré un virage paradigmatique majeur dans la conception des soins. L'Haute Autorité de Santé (HAS) et les Agences Régionales de Santé (ARS) reconnaissent désormais l'importance cruciale des soins non-médicamenteux dans l'amélioration du bien-être et de la qualité de vie des patients. Cette reconnaissance officielle représente un tournant décisif pour des disciplines comme la socio-esthétique, longtemps considérées comme des services annexes.
            </p>

            <p>
              La socio-esthétique s'inscrit pleinement dans cette approche holistique qui comprend que le bien-être physique, psychologique et social sont indissociables. Elle bénéficie désormais d'une légitimité scientifique et réglementaire croissante.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Cadre réglementaire et reconnaissance officielle
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Directives de l'Haute Autorité de Santé
            </h3>

            <p>
              La HAS a publié plusieurs recommandations encourageant l'intégration de soins complémentaires, notamment dans le contexte du vieillissement et de la gestion de la douleur chronique. Ces recommandations soulignent que les soins complémentaires réduisent l'anxiété, améliorent l'adhésion aux traitements et diminuent la charge mentale des équipes. La socio-esthétique figure explicitement comme un exemple de pratique de support efficace.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Intégration dans les projets thérapeutiques pluridisciplinaires
            </h3>

            <p>
              Tous les EHPAD et établissements de santé modernes doivent élaborer un projet thérapeutique pluridisciplinaire pour chaque résident ou patient. Ce projet formalise les objectifs de bien-être global et coordonne les interventions de tous les professionnels. La socio-esthétique y a désormais sa place légitime aux côtés de la médecine, des soins infirmiers, de la psychologie et de l'animation.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Financement et couverture sociale
            </h3>

            <p>
              Un tournant décisif s'opère également au niveau du financement. Bien que les modalités varient selon les régions et les établissements, de nombreuses structures développent des modèles de financement intégrant la socio-esthétique comme élément du budget de fonctionnement, plutôt que comme service externe optionnel. Certaines mutuelles commencent également à reconnaître et à financer partiellement ces soins dans certains contextes.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Fondements scientifiques des soins complémentaires
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Études probantes et résultats mesurables
            </h3>

            <p>
              Des études cliniques rigouruses démontrent l'efficacité de la socio-esthétique sur plusieurs indicateurs : réduction du stress et de l'anxiété, amélioration de l'image corporelle, augmentation de la participation aux activités sociales, et diminution des comportements agressifs. Ces études, menées dans des contextes variés (EHPAD, oncologie, psychiatrie), confortent la légitimité scientifique de la discipline.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Mécanismes d'action biopsychosociaux
            </h3>

            <p>
              La socio-esthétique agit sur trois niveaux complémentaires : au niveau biologique, les techniques de contact et de massage stimulent le système nerveux parasympathique et réduisent le cortisol (hormone du stress). Au niveau psychologique, elle favorise l'estime de soi et la valorisation personnelle. Au niveau social, elle crée des moments d'échange et renforce le sentiment d'appartenance.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Avantages pour les établissements et les équipes
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Réduction de la charge mentale des équipes soignantes
            </h3>

            <p>
              Les équipes de soins sont quotidiennement confrontées à des résidents anxieux, agressifs ou déprimés. La socio-esthétique offre un outil efficace pour atténuer ces états. En agissant sur le bien-être émotionnel, elle diminue les comportements difficiles et les refus de soins, allégeant considérablement la charge psychologique des soignants.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Amélioration de la qualité de vie globale
            </h3>

            <p>
              Un établissement où la socio-esthétique fait partie intégrante du projet thérapeutique bénéficie d'une atmosphère plus sereine. Les résidents sont plus engagés, les interactions plus positives, et le sentiment d'accueil et de dignité plus prononcé. Cela impacte positivement la satisfaction des résidents, des familles et du personnel.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Tendances futures et évolutions attendues
            </h2>

            <p>
              Les prochaines années verront probablement une généralisation de l'intégration de la socio-esthétique dans les établissements médico-sociaux. Les normes de certification accentueront les exigences de qualité de vie, poussant davantage de structures à développer ces services. La formation et la professionnalisation de la socio-esthétique continueront à progresser, confortant sa position au sein des équipes pluridisciplinaires.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Conclusion : une complémentarité incontournable
            </h2>

            <p>
              La reconnaissance croissante des soins non-médicamenteux par les autorités sanitaires ne surprend pas : elle répond à une réalité clinique évidente. Les résidents et patients ne sont pas que des corps à traiter, mais des êtres holistiques dont le bien-être émotionnel et social conditionne directement l'efficacité des protocoles médicaux. La socio-esthétique, par son approche centrée sur la dignité et l'estime de soi, répond précisément à cet enjeu.
            </p>

            <p>
              Si votre établissement souhaite se doter de cette approche complémentaire reconnue et efficace, je suis à votre disposition pour concevoir un programme adapté à vos besoins spécifiques.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#027199] to-[#3fbeb0] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Prêt à intégrer la socio-esthétique dans votre projet thérapeutique ?
            </h3>
            <p className="text-white/90 mb-6">
              Contactez-moi pour explorer comment ces soins complémentaires peuvent bénéficier à votre établissement.
            </p>
            <button
              onClick={() => {
                window.location.href = '/#contact';
              }}
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
