
import { Star, Globe, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/placeholder.svg",
      title: "Hajj & Omra",
      subtitle: "Votre voyage spirituel commence ici",
      arabicText: "الحج والعمرة",
    },
    {
      image: "/placeholder.svg",
      title: "Une Expérience Unique",
      subtitle: "Découvrez nos services personnalisés",
      arabicText: "تجربة فريدة",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {slide.title}
                </span>
                <span className="block text-2xl md:text-4xl mt-2 font-amiri" lang="ar">
                  {slide.arabicText}
                </span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/reservation"
                  className="rounded-full bg-primary hover:bg-primary-dark text-secondary px-8 py-3 font-semibold transition-all duration-300"
                >
                  Réserver Maintenant
                </a>
                <a
                  href="/contact"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white px-8 py-3 transition-all duration-300"
                >
                  Nous Contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Star,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience dans l'organisation de voyages spirituels",
    },
    {
      icon: Globe,
      title: "Accompagnement",
      description: "Une équipe dédiée pour vous guider à chaque étape de votre voyage",
    },
    {
      icon: MapPin,
      title: "Localisation",
      description: "Une agence située au cœur de Paris pour plus de proximité",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Pourquoi Choisir Notre Agence ?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{reason.title}</h3>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed",
      text: "Une expérience inoubliable grâce à l'accompagnement professionnel d'Al-Safar",
      rating: 5,
    },
    {
      name: "Fatima",
      text: "Je recommande vivement cette agence pour leur expertise et leur attention aux détails",
      rating: 5,
    },
    {
      name: "Mohammed",
      text: "Un service exceptionnel et un accompagnement spirituel de qualité",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Témoignages
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary-light/20 backdrop-blur-lg p-6 rounded-lg border border-primary/10"
            >
              <div className="flex justify-center mb-4">
                <MessageCircle className="text-primary w-8 h-8" />
              </div>
              <p className="text-white/90 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">{testimonial.name}</span>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
