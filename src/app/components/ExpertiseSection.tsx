import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Shopify Development",
    description:
      "High-performance storefronts, headless builds, and seamless integrations, tailored to your tech stack and brand goals.",
    image: "/images/e-img-1.png",
    tags: ["Custom Themes", "Headless Builds", "App Integrations"],
  },
  {
    title: "Growth Strategy & CRO",
    description:
      "From funnel audits to A/B testing, we turn browsers into buyers through data-backed design and conversion best practices.",
    image: "/images/e-img-2.png",
    tags: ["A/B Testing", "Funnel Optimization", "Analytics & Insights"],
  },
  {
    title: "AI-Enhanced Automation",
    description:
      "We implement smart systems that reduce manual work and improve customer experience, from personalization to backend flows.",
    image: "/images/e-img-3.png",
    tags: ["Smart Workflows", "Personalization", "Backend Efficiency"],
  },
  {
    title: "Custom Shopify Apps",
    description:
      "Whether it’s upsells, bundles, or subscription logic, we build tailored tools that drive revenue beyond what’s off-the-shelf.",
    image: "/images/e-img-4.png",
    tags: ["Subscriptions", "Retention Tools", "Upsells & Bundles"],
  },
];

export default function ExpertiseSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      {/* Section Header */}
      <p className="text-primary text-sm font-semibold uppercase mb-2">
        What We Do Best
      </p>
      <h2 className="text-4xl font-bold text-text-dark mb-4">
        Expertise That
        <br className="hidden sm:block" /> Delivers Results
      </h2>
      <p className="text-text-light max-w-2xl mx-auto mb-12">
        We combine deep Shopify Plus development, smart automation, and
        performance-focused strategy to help ecommerce brands grow with speed,
        precision, and clarity.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-start gap-6"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={160}
              height={160}
              className="rounded-lg w-full md:w-40 object-cover"
            />
            <div>
              <h3 className="text-lg text-text-dark font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-text-light mb-4 text-sm">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-[4px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-sm font-semibold shadow-md"
        >
          See All Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
