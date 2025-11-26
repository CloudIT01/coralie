import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    establishment: '',
    role: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Je reviendrai vers vous rapidement.');
    setFormData({
      name: '',
      establishment: '',
      role: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-[#09303b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Parlons de votre projet d'établissement
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Vous êtes directeur d'EHPAD, cadre de santé, médecin coordonnateur ou responsable d'association ?
              Contactez-moi pour discuter de l'intégration de la socio-esthétique dans votre structure.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3fbeb0]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[#3fbeb0]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Zone d'intervention</h3>
                  <p className="text-white/80">Castelnaudary et 30km aux alentours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3fbeb0]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[#3fbeb0]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-white/80">06 XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3fbeb0]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#3fbeb0]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-white/80">contact@coralie-socioesthetique.fr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Formulaire de contact professionnel</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom et Prénom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3fbeb0]"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Fonction *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#3fbeb0]"
                  >
                    <option value="" className="text-gray-900">Sélectionnez</option>
                    <option value="directeur" className="text-gray-900">Directeur/Directrice</option>
                    <option value="cadre" className="text-gray-900">Cadre de santé</option>
                    <option value="medecin" className="text-gray-900">Médecin coordonnateur</option>
                    <option value="responsable" className="text-gray-900">Responsable association</option>
                    <option value="autre" className="text-gray-900">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="establishment" className="block text-sm font-medium mb-2">
                  Établissement / Structure *
                </label>
                <input
                  type="text"
                  id="establishment"
                  name="establishment"
                  required
                  value={formData.establishment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3fbeb0]"
                  placeholder="EHPAD Les Jardins"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3fbeb0]"
                    placeholder="j.dupont@ehpad.fr"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3fbeb0]"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3fbeb0] resize-none"
                  placeholder="Parlez-moi de votre projet et des besoins de votre établissement..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#027199] to-[#3fbeb0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#3fbeb0] hover:to-[#027199] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>Envoyer ma demande</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3fbeb0] to-[#027199] flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <p className="font-semibold">Coralie - Socio-Esthéticienne</p>
                <p className="text-sm text-white/60">Castelnaudary et alentours</p>
              </div>
            </div>

            <div className="text-center md:text-right text-white/60 text-sm">
              <p>&copy; 2024 Coralie Socio-Esthétique. Tous droits réservés.</p>
              <p className="mt-1">Mentions légales • Politique de confidentialité</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
