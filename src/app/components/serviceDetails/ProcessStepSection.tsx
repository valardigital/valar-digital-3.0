import { ProcessStepCards } from "./ProcessStepCards";
import bulbIcon from "@/assets/images/services/lightBulb.png";

const processSteps = [
    {
        id: 1,
        image: bulbIcon,
        title: "Discovery & UX Mapping",
        description: "We start by understanding your brand, customer journey, and what success looks like — then map out user flows and page goals."
    },
    {
        id: 2,
        image: bulbIcon,
        title: "Wireframes & Structure",
        description: "Mobile-first wireframes designed to guide users smoothly through the purchase path, with clarity and intent."
    },
    {
        id: 3,
        image: bulbIcon,
        title: "Visual Design & UI",
        description: "Branded, high-fidelity layouts across all key pages — including homepage, PDPs, and landing pages."
    },
    {
        id: 4,
        image: bulbIcon,
        title: "Design QA",
        description: "We review and refine every screen collaboratively — ensuring brand alignment, consistency, and clarity before handoff."
    },
    {
        id: 5,
        image: bulbIcon,
        title: "Dev-Ready Handoff",
        description: "Clean Figma files with annotations, specs, and guides — so your dev team can build with confidence."
    },
];

export default function ProcessStepSection() {
    return (
        <section className="bg-white">
            <div className="container mx-auto text-text-dark py-8 md:py-16 px-4 text-center">
                <h1 className="text-[28px] md:text-5xl font-medium mb-4 md:mb-6 leading-[1.2]">
                    Our Shopify Design Process,<br /> Step by Step
                </h1>
                <p className="tracking-[0.04rem] leading-[1.5]">
                    We combine creative direction with conversion strategy — and bring structure to every stage.<br className='hidden md:block' />
                    Here’s how we take your Shopify store from concept to ready-to-build design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-8">
                    {processSteps.map((step) => (
                        <ProcessStepCards
                            key={step.id}
                            image={step.image}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}