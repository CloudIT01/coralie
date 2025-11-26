import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      issue: 'Résidents anxieux et isolés',
      impact: 'Troubles du comportement, refus de soin, difficulté d\'intégration'
    },
    {
      issue: 'Équipes soignantes débordées',
      impact: 'Charge mentale élevée, manque de temps pour l\'accompagnement psychologique'
    },
    {
      issue: 'Image de soi dégradée',
      impact: 'Perte d\'estime, repli sur soi, dépression'
    }
  ];

  const solutions = [
    {
      title: 'Un terrain apaisé',
      description: 'La socio-esthétique prépare le patient à accepter les soins médicaux en restaurant la confiance et le dialogue'
    },
    {
      title: 'Allègement de la charge soignante',
      description: 'Une prise en charge complémentaire qui libère du temps pour vos équipes et améliore l\'ambiance générale'
    },
    {
      title: 'Amélioration de la qualité de vie',
      description: 'Ateliers collectifs favorisant le lien social et soins individuels adaptés aux pathologies'
    }
  ];

  return (
    <section id="approche" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#09303b] mb-4">
            Vous faites face à ces défis quotidiens ?
          </h2>
          <p className="text-xl text-[#678187] max-w-3xl mx-auto">
            Les établissements médico-sociaux sont confrontés à des enjeux humains complexes. La socio-esthétique apporte une réponse concrète et mesurable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-[#09303b] mb-6 flex items-center">
                <AlertCircle className="mr-3 text-red-500" size={28} />
                Les obstacles rencontrés
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-[#09303b] mb-2">{problem.issue}</h4>
                    <p className="text-sm text-[#678187]">{problem.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#3fbeb0]/10 border-l-4 border-[#3fbeb0] p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-[#09303b] mb-6 flex items-center">
                <CheckCircle className="mr-3 text-[#3fbeb0]" size={28} />
                L'apport de la socio-esthétique
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-[#027199] mb-2">{solution.title}</h4>
                    <p className="text-sm text-[#678187]">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#027199] to-[#3fbeb0] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <p className="text-white/90">Des résidents notent une amélioration de leur bien-être</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3x</div>
              <p className="text-white/90">Plus d'acceptation des soins médicaux après accompagnement</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-white/90">Complémentaire à votre projet thérapeutique pluridisciplinaire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
