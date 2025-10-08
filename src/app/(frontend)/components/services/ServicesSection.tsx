import ServiceCard from "./ServiceCard";
import cardImage from "@/assets/images/services/cardImage.png";
import serviceImg1 from "@/assets/images/services/service-img-1.png";
import serviceImg2 from "@/assets/images/services/service-img-2.png";
import serviceImg3 from "@/assets/images/services/service-img-3.png";
import serviceImg4 from "@/assets/images/services/service-img-4.png";
import serviceImg5 from "@/assets/images/services/service-img-5.png";
import serviceImg6 from "@/assets/images/services/service-img-6.png";
import serviceImg7 from "@/assets/images/services/service-img-7.png";
import serviceImg8 from "@/assets/images/services/service-img-8.png";
import serviceImg9 from "@/assets/images/services/service-img-9.png";
import serviceImg10 from "@/assets/images/services/service-img-10.png";

export default function ServicesSection() {
    return (
        <section className="px-4 py-10 text-center bg-white">
            <div className="container mx-auto">

                <h2 className="text-[28px] md:text-5xl font-medium text-text-dark mb-4 md:mb-6 leading-[1.2]">
                    Explore Our
                    <br /> Shopify Services
                </h2>
                <p className="text-text-dark mb-6 md:mb-10 tracking-[0.04rem] leading-[1.5]">
                    Everything we offer — built to help you grow faster, convert better, and retain longer.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceCard
                        image={serviceImg1}
                        imageAlt="Shopify design mockups"
                        title="Shopify Design"
                        description="We create clean, high-converting designs built for ecommerce. Every layout is tailored for clarity, speed, and mobile-first shopping."
                        features={[
                            "UX/UI Designs",
                            "Mobile-optimized layouts",
                            "High-converting PDPs",
                            "Shopify focused designs"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/shopify-design"
                    />
                    <ServiceCard
                        image={serviceImg2}
                        imageAlt="Shopify design mockups"
                        title="Shopify Development"
                        description="We build fast, flexible storefronts that are easy to manage and built to convert. From Shopify Plus themes to custom integrations, everything is tailored to perform."
                        features={[
                            "Shopify Plus development",
                            "Bespoke integrations",
                            "Solution architecture",
                            "Speed optimization"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg3}
                        imageAlt="Shopify design mockups"
                        title="Shopify Apps"
                        description="We build and customize apps that extend your store’s functionality — from boosting AOV to streamlining checkout and loyalty."
                        features={[
                            "Custom Shopify apps",
                            "Checkout extensions",
                            "Loyalty & retention tools",
                            "Tailored to your workflows"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg4}
                        imageAlt="Shopify design mockups"
                        title="Shopify Migration"
                        description="We handle complex migrations with zero data loss or SEO drop. From products to customers and order history, everything moves cleanly to Shopify."
                        features={[
                            "Magento, WooCommerce, BigCommerce",
                            "Secure data migration",
                            "SEO & 301 redirect handling",
                            "Full store setup on Shopify"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg5}
                        imageAlt="Shopify design mockups"
                        title="Shopify Marketing"
                        description="We craft full-funnel strategies tailored to your brand and goals, from paid ads to retention flows, everything is built to drive results."
                        features={[
                            "SEO & PPC for Shopify",
                            "Paid social campaigns",
                            "Email & content marketing",
                            "Conversion-focused strategy"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg6}
                        imageAlt="Shopify design mockups"
                        title="Ecommerce Audit"
                        description="We analyze your store from all angles — brand, data, UX, and CRO — to uncover what’s working and what needs fixing"
                        features={[
                            "SEO & performance review",
                            "Stakeholder workshops",
                            "Data-driven insights",
                            "UX & CRO recommendations"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg7}
                        imageAlt="Shopify design mockups"
                        title="Conversion Rate Optimization"
                        description="We turn more traffic into revenue through data-backed design, testing, and strategy — all focused on sustainable growth."
                        features={[
                            "A/B testing",
                            "Personalization",
                            "Heatmaps & analytics",
                            "CRO strategy & consulting"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg8}
                        imageAlt="Shopify design mockups"
                        title="Headless Commerce"
                        description="For brands that need speed, control, and flexibility. We build fast, scalable storefronts using Shopify’s backend and modern frameworks."
                        features={[
                            "Headless Shopify builds",
                            "JAMStack architecture",
                            "Contentful & custom CMS",
                            "React / Gatsby / Next.js"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg9}
                        imageAlt="Shopify design mockups"
                        title="Speed Optimization"
                        description="We optimize your store to load faster, run smoother, and convert better — without sacrificing design or functionality."
                        features={[
                            "Theme and code cleanup",
                            "Image & script optimization",
                            "Real-user performance testing",
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg3}
                        imageAlt="Shopify design mockups"
                        title="Integration Services"
                        description="We connect your tech stack for smooth, scalable operations — from leading Shopify apps to custom backend systems."
                        features={[
                            "Klaviyo, ReCharge, Gorgias, Rebuy, etc.",
                            "ERP, CRM, and PIM integrations",
                            "Custom API connections",
                            "End-to-end setup & support"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                    <ServiceCard
                        image={serviceImg10}
                        imageAlt="Shopify design mockups"
                        title="Creative and Branding"
                        description="We craft visual identities and creative assets that connect with your audience and elevate your brand presence across every touchpoint."
                        features={[
                            "Branding & identity",
                            "Copywriting & messaging",
                            "Creative direction",
                            "Style guides & assets"
                        ]}
                        buttonText="Find out more"
                        buttonHref="#"
                    />
                </div>
            </div>
        </section>
    );
}
