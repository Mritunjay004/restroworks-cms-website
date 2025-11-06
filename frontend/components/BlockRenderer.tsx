import dynamic from "next/dynamic";

const HeroBlock = dynamic(() => import("./blocks/HeroBlock"));
const FeaturesBlock = dynamic(() => import("./blocks/FeaturesBlock"));
const TestimonialsBlock = dynamic(() => import("./blocks/TestimonialsBlock"));
const CTABlock = dynamic(() => import("./blocks/CTABlock"));

interface BlockRendererProps {
  block: any;
}

export default function BlockRenderer({ block }: BlockRendererProps) {
  const blockType = block.blockType;

  switch (blockType) {
    case "hero":
      return <HeroBlock {...block} />;
    case "features":
      return <FeaturesBlock {...block} />;
    case "testimonials":
      return <TestimonialsBlock {...block} />;
    case "cta":
      return <CTABlock {...block} />;
    default:
      return null;
  }
}
