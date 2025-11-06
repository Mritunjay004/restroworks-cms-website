import Image from "next/image";
import Link from "next/link";

interface HeroBlockProps {
  heading: string;
  subheading?: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  backgroundImage?: {
    url: string;
    alt: string;
  };
}

export default function HeroBlock({
  heading,
  subheading,
  primaryButton,
  backgroundImage,
}: HeroBlockProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      {backgroundImage && (
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alt}
          fill
          className="object-cover -z-10"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-5"></div>
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{heading}</h1>
        {subheading && <p className="text-xl md:text-2xl mb-8">{subheading}</p>}
        {primaryButton && (
          <Link
            href={primaryButton.link}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            {primaryButton.text}
          </Link>
        )}
      </div>
    </section>
  );
}
