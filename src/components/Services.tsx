
import { Star, Globe, MapPin } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Une Expérience Spirituelle Unique
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Nous vous accompagnons dans chaque étape de votre voyage sacré avec
            expertise et dévouement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Star}
            title="Hajj"
            description="Accomplissez le cinquième pilier de l'Islam avec sérénité grâce à notre accompagnement personnalisé"
          />
          <ServiceCard
            icon={Globe}
            title="Omra"
            description="Vivez une expérience spirituelle enrichissante dans les lieux saints de l'Islam"
          />
          <ServiceCard
            icon={MapPin}
            title="Guidance"
            description="Bénéficiez de notre expertise et de nos conseils pour préparer votre voyage sacré"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="card group">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="text-primary group-hover:text-secondary" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
      <p className="text-secondary-light">{description}</p>
    </div>
  );
};

export default Services;
