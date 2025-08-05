import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import image1 from "../../../assets/images/home/e-img-1.jpg";
import image2 from "../../../assets/images/home/e-img-2.png";
import image3 from "../../../assets/images/home/e-img-3.png";
import image4 from "../../../assets/images/home/e-img-4.png";


const services = [
  {
    title: "Shopify Development",
    description:
      "High-performance storefronts, headless builds, and seamless integrations, tailored to your tech stack and brand goals.",
    image: image1,
    tags: ["Custom Themes", "Headless Builds", "App Integrations"],
  },
  {
    title: "Growth Strategy & CRO",
    description:
      "From funnel audits to A/B testing, we turn browsers into buyers through data-backed design and conversion best practices.",
    image: image2,
    tags: ["A/B Testing", "Funnel Optimization", "Analytics & Insights"],
  },
  {
    title: "AI-Enhanced Automation",
    description:
      "We implement smart systems that reduce manual work and improve customer experience, from personalization to backend flows.",
    image: image3,
    tags: ["Smart Workflows", "Personalization", "Backend Efficiency"],
  },
  {
    title: "Custom Shopify Apps",
    description:
      "Whether it’s upsells, bundles, or subscription logic, we build tailored tools that drive revenue beyond what’s off-the-shelf.",
    image: image4,
    tags: ["Subscriptions", "Retention Tools", "Upsells & Bundles"],
  },
];

export default function ExpertiseSection() {
  return (
    <section className="px-4 py-10 text-center [box-shadow:0px_0px_60px_0px_#B1BDD140_inset] bg-background-muted border-border-50">
      <div className="container mx-auto">

        <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem]">
          What We Do Best
        </p>
        <h2 className="text-[28px] md:text-5xl font-medium text-text-dark mb-4 md:mb-6 leading-[1.2]">
          Expertise That
          <br /> Delivers Results
        </h2>
        <p className="text-text-dark mb-6 md:mb-12 tracking-[0.04rem]">
          We combine deep Shopify Plus development, smart automation, and
          performance-focused<br className="hidden md:block" /> strategy to help ecommerce brands grow with speed,
          precision, and clarity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 shadow-[0px_12px_12px_0px_#E6EFF540]  border-gradient-border-image border-[1.5px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={160}
                height={160}
                className="rounded-2xl w-full h-[200px] md:h-[301px] md:w-[204px] object-cover"
              />
              <div className="text-text-dark">
                <h3 className="text-2xl font-medium mb-2">
                  {service.title}
                </h3>
                <p className="mb-6 tracking-[0.04rem]">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-background-subtle text-sm text-text-dark p-2 rounded-[4px] border border-border tracking-[0.04rem]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-12 w-full md:w-max mx-auto">
          <Link
            href="#"
          >
            <Button className="w-full md:w-max flex items-center gap-2">
              See All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M3 12h19m-6-6l6 6-6 6" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
