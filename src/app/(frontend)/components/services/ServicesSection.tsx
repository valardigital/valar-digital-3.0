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
                        description="We design professional Shopify stores that convert visitors into loyal customers. Our designs combine stunning visuals with proven UX principles. From sitemaps to pixel-perfect prototypes for desktop and mobile, our focus is on clarity, usability, and high-converting layouts."
                        features={[
                            "UX/UI design & research",
                            "Custom Shopify layouts",
                            "Mobile-first responsive design",
                            "Conversion-focused creative direction"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/shopify-design"
                    />
                    <ServiceCard
                        image={serviceImg2}
                        imageAlt="Shopify design mockups"
                        title="Shopify Development"
                        description="We build fast, flexible Shopify storefronts that are easy to manage and designed to maximize conversions. From custom Shopify Plus themes to bespoke integrations, our services are engineered with one goal in mind – performance."
                        features={[
                            "Custom Shopify Plus themes",
                            "Third-party integrations",
                            "Performance optimization",
                            "Scalable technical architecture"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/shopify-development"
                    />
                    <ServiceCard
                        image={serviceImg3}
                        imageAlt="Shopify design mockups"
                        title="Shopify Apps"
                        description="We create and customize Shopify apps that improve checkout flow, increase average order value, and boost customer experience. Whether you need custom features or tailored solutions, our team can help you scale your business."
                        features={[
                            "Customer Checkout Extensions",
                            "Loyalty & Retention Features",
                            "Post-purchase upsells",
                            "Workflow automation tools"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/shopify-app-development"
                    />
                    <ServiceCard
                        image={serviceImg4}
                        imageAlt="Shopify design mockups"
                        title="Shopify Migration"
                        description="We provide expert Shopify migration services with zero data loss. From products and customer information to order history and content, everything is migrated seamlessly."
                        features={[
                            "Magento, WooCommerce, BigCommerce & more",
                            "Secure Data Migration",
                            "SEO & 301 redirects",
                            "Shopify Store Setup & Maintenance"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/shopify-migration"
                    />
                    <ServiceCard
                        image={serviceImg5}
                        imageAlt="Shopify design mockups"
                        title="Shopify Marketing"
                        description="We provide tailored Shopify marketing strategies aligned with your business goals. From paid ads to email campaigns, our results-driven framework helps you attract, convert, and retain more customers."
                        features={[
                            "SEO & PPC for Shopify",
                            "Shopify Social Media Marketing",
                            "Email & Content Marketing for Shopify",
                            "Conversion Rate Optimization"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/shopify-marketing"
                    />
                    <ServiceCard
                        image={serviceImg6}
                        imageAlt="Shopify design mockups"
                        title="Ecommerce Audit"
                        description="We conduct a thorough end-to-end audit of your Shopify store, analyzing brand, data, UX, CRO, and SEO to uncover growth opportunities and areas for improvement."
                        features={[
                            "SEO & Performance Review",
                            "Stakeholder Interviews & Workshops",
                            "Data-Driven Insights",
                            "UX & CRO Recommendations"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/shopify-audit"
                    />
                    <ServiceCard
                        image={serviceImg7}
                        imageAlt="Shopify design mockups"
                        title="Conversion Rate Optimization"
                        description="We transform your Shopify store into a revenue machine by turning more visitors into paying customers. By improving functionality, testing new ideas, and enhancing the customer journey, our CRO strategies are designed to boost sales and revenue while improving the customer experience."
                        features={[
                            "CRO audits & strategy",
                            "A/B testing & experimentation",
                            "On-site personalization",
                            "Analytics & user behavior tracking",
                            "Heatmap optimization"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/conversion-rate-optimization"
                    />
                    <ServiceCard
                        image={serviceImg8}
                        imageAlt="Shopify design mockups"
                        title="Headless Commerce"
                        description="For enterprise brands and unique applications, headless commerce might be the right approach. By decoupling the front end from the back end, it enables lightning-fast page loads and gives you unlimited control over content, code, and creative. We build JAMStack websites using e-commerce platform APIs like Shopify Plus and headless CMS platforms such as Contentful."
                        features={[
                            "Headless Shopify Development",
                            "JAMStack Architecture",
                            "Contentful CMS Integration",
                            "React / Gatsby / Next.js Frontends"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/headless-commerce-development
"
                    />
                    <ServiceCard
                        image={serviceImg9}
                        imageAlt="Shopify design mockups"
                        title="Website Speed Optimization"
                        description="We design and optimize high-performing Shopify Plus websites that are lightweight and have faster load times. Faster websites not only improve the customer experience but also boost engagement and conversions. Our team ensures your Shopify store is fast, responsive, and built to excel."
                        features={[
                            "Shopify Plus Speed Optimization",
                            "Code & Image Optimization",
                            "Server & CDN Integration",
                            "Performance Audits & Fixes",
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/website-speed-optimization"
                    />
                    <ServiceCard
                        image={serviceImg3}
                        imageAlt="Shopify design mockups"
                        title="Integration Services"
                        description="We streamline your entire tech stack with seamless integration services, from leading Shopify apps to custom backend solutions. Whether you need CRM, ERP, or PIM integrations, our team ensures smooth connectivity and scalability across platforms."
                        features={[
                            "Klaviyo, ReCharge, Gorgias, Rebuy, Okendo, and more",
                            "ERP, CRM, and PIM integrations",
                            "Custom API and data integrations",
                            "End-to-end setup, support, and maintenance"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/integration"
                    />
                    <ServiceCard
                        image={serviceImg10}
                        imageAlt="Shopify design mockups"
                        title="Branding and Creative"
                        description="Build a unique brand identity with our tailored branding and creative services designed for e-commerce growth. From Shopify branding and identity creation to compelling copywriting, creative direction, and style guides, we help your store stand out and drive engagement across all channels."
                        features={[
                            "Brand Identity & Strategy",
                            "Copywriting & Content Creation Services",
                            "Creative Direction for Campaigns",
                            "Brand Guidelines & Style Systems"
                        ]}
                        buttonText="Find out more"
                        buttonHref="/services/branding-creative"
                    />
                </div>
            </div>
        </section>
    );
}
