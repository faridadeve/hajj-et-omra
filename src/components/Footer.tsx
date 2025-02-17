
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-secondary to-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Al-Safar</h3>
            <p className="text-sm text-white/80">
              Votre agence de confiance pour le Hajj et l'Omra à Paris
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/offres" className="text-white/80 hover:text-primary transition-colors">
                  Nos Offres
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-white/80 hover:text-primary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/offres#hajj" className="text-white/80 hover:text-primary transition-colors">
                  Hajj
                </Link>
              </li>
              <li>
                <Link to="/offres#omra" className="text-white/80 hover:text-primary transition-colors">
                  Omra
                </Link>
              </li>
              <li>
                <Link to="/informations" className="text-white/80 hover:text-primary transition-colors">
                  Informations Pratiques
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-white/80">
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris, France</p>
              <p className="mt-2">
                <a href="tel:+33100000000" className="hover:text-primary transition-colors">
                  +33 1 00 00 00 00
                </a>
              </p>
              <p>
                <a href="mailto:contact@al-safar.fr" className="hover:text-primary transition-colors">
                  contact@al-safar.fr
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Al-Safar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
