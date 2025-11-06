import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  image?: {
    url: string;
    alt: string;
  };
}

interface TestimonialsBlockProps {
  heading?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsBlock({
  heading,
  testimonials,
}: TestimonialsBlockProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {heading && (
          <h2 className="text-4xl font-bold text-center mb-12">{heading}</h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="mb-4">
                <p className="text-gray-700 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center">
                {testimonial.image && (
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image.url}
                      alt={testimonial.image.alt}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
