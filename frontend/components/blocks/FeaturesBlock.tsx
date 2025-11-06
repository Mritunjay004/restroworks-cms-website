interface Feature {
  title: string;
  description?: string;
  icon?: string;
}

interface FeaturesBlockProps {
  heading?: string;
  features: Feature[];
}

export default function FeaturesBlock({
  heading,
  features,
}: FeaturesBlockProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {heading && (
          <h2 className="text-4xl font-bold text-center mb-12">{heading}</h2>
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {feature.icon && (
                <div className="text-4xl mb-4">{feature.icon}</div>
              )}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              {feature.description && (
                <p className="text-gray-600">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
