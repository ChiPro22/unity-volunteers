import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: "Green Earth Foundation", logo: "🌍" },
    { name: "Smile For All", logo: "😊" },
    { name: "Helping Hands NGO", logo: "🤝" },
    { name: "Women Empowerment Trust", logo: "💪" },
    { name: "Education For All", logo: "📚" },
    { name: "Clean Water Initiative", logo: "💧" },
    { name: "Food Security Alliance", logo: "🍽️" },
    { name: "Health Care Network", logo: "❤️" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Trusted NGO Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Working together with established organizations to create meaningful impact in communities worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-hover"
            >
              <div className="text-4xl mb-3">{partner.logo}</div>
              <h3 className="font-semibold text-card-foreground text-sm">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;