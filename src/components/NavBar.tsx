
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                 ${isScrolled ? "glass-effect py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-secondary font-bold text-xl">AS</span>
          </div>
          <span className="text-secondary font-bold text-xl">Al-Safar</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={isActive("/")}>Accueil</NavLink>
          <NavLink to="/offres" active={isActive("/offres")}>Nos Offres</NavLink>
          <NavLink to="/a-propos" active={isActive("/a-propos")}>À Propos</NavLink>
          <NavLink to="/reservation" active={isActive("/reservation")}>Réservation</NavLink>
          <NavLink to="/informations" active={isActive("/informations")}>Informations</NavLink>
          <NavLink to="/contact" active={isActive("/contact")}>Contact</NavLink>
        </div>

        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} active={isActive("/")}>
              Accueil
            </MobileNavLink>
            <MobileNavLink to="/offres" onClick={() => setIsMenuOpen(false)} active={isActive("/offres")}>
              Nos Offres
            </MobileNavLink>
            <MobileNavLink to="/a-propos" onClick={() => setIsMenuOpen(false)} active={isActive("/a-propos")}>
              À Propos
            </MobileNavLink>
            <MobileNavLink to="/reservation" onClick={() => setIsMenuOpen(false)} active={isActive("/reservation")}>
              Réservation
            </MobileNavLink>
            <MobileNavLink to="/informations" onClick={() => setIsMenuOpen(false)} active={isActive("/informations")}>
              Informations
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)} active={isActive("/contact")}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`${
      active ? "text-primary" : "text-secondary"
    } hover:text-primary transition-colors duration-300`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  onClick,
  active,
  children,
}: {
  to: string;
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`${
      active ? "text-primary" : "text-secondary"
    } hover:text-primary transition-colors duration-300 py-2`}
  >
    {children}
  </Link>
);

export default NavBar;
