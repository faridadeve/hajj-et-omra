
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                 ${isScrolled ? "glass-effect py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-secondary font-bold text-xl">AS</span>
          </div>
          <span className="text-secondary font-bold text-xl">Al-Safar</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Nos Services</NavLink>
          <NavLink href="#hajj">Hajj</NavLink>
          <NavLink href="#omra">Omra</NavLink>
          <NavLink href="#contact">Contact</NavLink>
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
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>
              Nos Services
            </MobileNavLink>
            <MobileNavLink href="#hajj" onClick={() => setIsMenuOpen(false)}>
              Hajj
            </MobileNavLink>
            <MobileNavLink href="#omra" onClick={() => setIsMenuOpen(false)}>
              Omra
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-secondary hover:text-primary transition-colors duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-secondary hover:text-primary transition-colors duration-300 py-2"
  >
    {children}
  </a>
);

export default NavBar;
