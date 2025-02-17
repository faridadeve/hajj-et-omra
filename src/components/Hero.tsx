
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <span className="inline-block bg-primary/90 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeIn">
          Votre voyage spirituel commence ici
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
          Hajj & Omra{" "}
          <span className="block text-2xl md:text-4xl mt-2 font-amiri" lang="ar">
            الحج والعمرة
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 animate-slideUp">
          Votre agence de confiance à Paris pour vos voyages spirituels
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp">
          <a href="#contact" className="btn-primary">
            Nous Contacter
          </a>
          <a
            href="#services"
            className="px-6 py-3 bg-white/10 text-white rounded-full 
                     transition-all duration-300 hover:bg-white/20"
          >
            Découvrir Nos Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
