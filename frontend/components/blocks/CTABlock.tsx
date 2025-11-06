import Link from "next/link";

interface CTABlockProps {
  heading: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTABlock({
  heading,
  description,
  buttonText,
  buttonLink,
}: CTABlockProps) {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        {description && (
          <p className="text-xl mb-8 opacity-90">{description}</p>
        )}
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
