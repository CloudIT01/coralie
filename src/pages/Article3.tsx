import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Article3() {
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
              Oncologie
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#09303b] mb-4 leading-tight">
              Comment la socio-esthétique aide les patients en oncologie
            </h1>

            <div className="flex flex-wrap items-center space-x-6 text-[#678187] text-sm mb-8">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>Coralie - Socio-esthéticienne</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>1 Mars 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>6 min de lecture</span>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Socio-esthétique en oncologie"
              className="w-full h-96 object-cover rounded-xl mb-12"
            />
          </div>

          <div className="prose prose-lg max-w-none text-[#678187] leading-relaxed space-y-6">
            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Introduction : au-delà des traitements, restaurer l'humanité
            </h2>

            <p>
              Le diagnostic du cancer marque un tournant douloureux dans la vie d'une personne. Au-delà des enjeux strictement médicaux, les patients font face à des transformations profondes : altération de l'image corporelle due aux traitements (chimiothérapie, radiothérapie), perte d'estime de soi, isolement social et dépression. Dans ce contexte bouleversant, la socio-esthétique émerge comme un soin humanisant essentiel. Elle offre aux patients un espace pour retrouver la confiance en leur image et, par extension, en eux-mêmes.
            </p>

            <p>
              Loin d'être superficiel, ce accompagnement esthétique s'inscrit dans une approche globale du bien-être oncologique, reconnue et recommandée par les principales organisations de santé.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Les impacts physiques et psychologiques du cancer
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Altération visuelle de l'apparence
            </h3>

            <p>
              Les traitements du cancer entraînent des modifications visibles : perte de cheveux lors de la chimiothérapie, changements de pigmentation de la peau, cicatrices post-chirurgicales, amaigrissement ou prise de poids. Ces changements, souvent temporaires, sont néanmoins vécu comme une agression corporelle intense. Le patient voit son reflet et ne se reconnaît plus. Pour beaucoup, cette dissonance entre l'image interne et la réalité externe devient une source majeure de détresse psychologique.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Perte d'estime de soi et isolation sociale
            </h3>

            <p>
              L'altération de l'image corporelle s'accompagne souvent d'une perte d'estime personnelle. Certains patients cessent de se maquiller, de soigner leur apparence, se sentant indigne de cet effort. Cette attitude crée un cercle vicieux : moins on s'investit dans son apparence, plus la dévalorisation s'accentue. En conséquence, nombreux sont les patients qui se replient socialement, annulent les sorties, évitent les rencontres. L'isolement aggrave la dépression et réduit les facteurs protecteurs psychologiques.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Dépression et anxiété
            </h3>

            <p>
              Les taux de dépression chez les patients atteints de cancer sont considérablement plus élevés que dans la population générale. Cette dépression découle du diagnostic lui-même, des effets secondaires des traitements, mais aussi de ces enjeux identitaires profonds. L'anxiété persistante—crainte de récidive, peur de la mort, préoccupation constante pour sa santé—complique davantage l'état psychologique.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Rôle transformateur de la socio-esthétique en oncologie
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Restauration de l'image corporelle et de la confiance
            </h3>

            <p>
              La socio-esthétique intervient précisément là où le patient en a le plus besoin : dans la reconstruction de son image. À travers des techniques adaptées—maquillage correcteur pour les cicatrices ou les changements de pigmentation, soins du cuir chevelu, modelage des traits du visage—le socio-esthéticien aide le patient à se reconnaître dans le miroir. Mais l'intervention va bien au-delà du cosmétique. Chaque geste est accompagné d'une écoute empathique et d'une reconnaissance de la personne. Le patient retrouve peu à peu la confiance en son apparence et, progressivement, en lui-même.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Recréation du lien social
            </h3>

            <p>
              Quand un patient retrouve confiance en son image, il redevient disposé à s'engager socialement. Des ateliers de socio-esthétique collective—séances maquillage en groupe, soins des mains—offrent des espaces de rencontre et d'échange entre patients. Ces moments créent un sentiment de normalité, d'appartenance à une communauté. Les patients découvrent qu'ils ne sont pas seuls, que d'autres vivent les mêmes transformations et les mêmes questionnements. Cette solidarité devient un facteur protecteur majeur contre la dépression.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Amélioration du bien-être psychologique et réduction du stress
            </h3>

            <p>
              Les séances de socio-esthétique offrent des moments de détente et de soin bienveillant. Le toucher doux du socio-esthéticien, l'atmosphère apaisante, les soins de qualité génèrent une diminution mesurable du cortisol (hormone du stress) et une augmentation des endorphines (hormones du bien-être). De nombreux patients rapportent dormir mieux après les séances et éprouver un apaisement de l'anxiété.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Intégration dans le parcours de soins oncologiques
            </h2>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Reconnaissance officielle par les autorités sanitaires
            </h3>

            <p>
              L'importance de la socio-esthétique en oncologie est désormais reconnue par les principales organisations : l'Institut National du Cancer, l'Haute Autorité de Santé, et les sociétés savantes d'oncologie recommandent son intégration dans le parcours de soins. Nombreuses sont les structures de cancérologie qui proposent désormais ces services à leurs patients.
            </p>

            <h3 className="text-2xl font-semibold text-[#027199] mt-8 mb-3">
              Continuité de soins : avant, pendant et après les traitements
            </h3>

            <p>
              La socio-esthétique intervient à tous les stades du parcours oncologique. Avant les traitements, elle prépare psychologiquement le patient aux changements à venir. Pendant les traitements, elle aide à gérer les effets visibles et les impacts émotionnels. Après les traitements, elle accompagne la reconstruction progressive de l'image corporelle et, pour certains, la cicatrisation psychologique.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Témoignages et bonnes pratiques
            </h2>

            <p>
              Les patients qui ont bénéficié d'accompagnement socio-esthétique rapportent régulièrement des transformations significatives. Nombreux décrivent ces séances comme des "moments de respiration" dans une épreuve éprouvante. Ils soulignent comment la restauration de leur image a directement impacté leur confiance, leurs relations sociales et leur capacité à poursuivre les traitements avec davantage de sérénité. Certains créent des amitiés durables avec d'autres patients rencontrés en ateliers collectifs.
            </p>

            <h2 className="text-3xl font-bold text-[#09303b] mt-12 mb-4">
              Conclusion : l'humanité au cœur du soin
            </h2>

            <p>
              La socio-esthétique en oncologie illustre une vérité fondamentale : les soins ne se limitent pas aux protocoles médicaux. Le bien-être psychologique, l'estime de soi et la dignité personnelle sont tout aussi essentiels. En restaurant l'image corporelle, la socio-esthétique restaure l'humanité du patient. Elle lui rappelle qu'il reste digne d'attention et de soin, qu'il mérite de se sentir bien dans son corps et dans sa peau.
            </p>

            <p>
              Si vous ou un proche traversez une épreuve oncologique et souhaitez bénéficier d'un accompagnement socio-esthétique, sachez que ce soin représente un investissement dans votre bien-être global et votre qualité de vie durant et après les traitements.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#027199] to-[#3fbeb0] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Un accompagnement esthétique pendant votre parcours
            </h3>
            <p className="text-white/90 mb-6">
              Vous cherchez un soutien bienveillant pour retrouver confiance en votre apparence ? Contactez-moi pour discuter d'un accompagnement adapté à votre situation.
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
