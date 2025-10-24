import featureImage from "@/assets/images/services/featureImage.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import arrowRight from '@/assets/images/arrow-right.png';

interface FeatureItem { text: string }
interface FeatureSectionProps {
    heading?: string;
    description?: string;
    features?: FeatureItem[];
    ctaText?: string;
    image?: any;
    imageAlt?: string;
}

export default function FeatureSection({
    heading = "What We <span class=\"text-primary\">Offer?</span>",
    description = "From creative direction to high-fidelity layouts, we handle the full design process — always guided by UX best practices and CRO insights. Whether you're launching or rebranding, we'll make sure your store looks good and performs better.",
    features = [
        { text: "UX research & wireframes" },
        { text: "Mobile-first, responsive layouts" },
        { text: "Custom PDPs, PLPs & landing pages" },
        { text: "Conversion-focused design system" },
        { text: "Ready-to-build developer handoff" },
    ],
    ctaText = "Schedule A Call",
    image = featureImage,
    imageAlt = "Feature Image",
}: FeatureSectionProps) {
    return (
        <section className="bg-background-muted py-8 md:py-[64px]">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 px-4 md:px-0">
                <div className="text-text-dark space-y-4 md:space-y-6 flex-1 text-center md:text-left">
                    <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.2]" dangerouslySetInnerHTML={{ __html: heading }} />
                    <p className="leading-[1.5] tracking-[0.04rem]">{description}</p>
                    <ul className="space-y-4">
                        {features.map((f, idx) => (
                        <li key={idx} className="flex gap-4">
                            <div className="w-5 h-5 rounded-full bg-[#292D32] flex items-center justify-center mt-0.5 shrink-0">
                                <svg
                                    className="w-3 h-3 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <span>{f.text}</span>
                        </li>
                        ))}
                    </ul>
                    <Link href="#calendar" className='flex-1 hidden md:block'>
                        <Button size="lg" className=' flex items-center'>
                            <span>{ctaText}</span>
                            <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                        </Button>
                    </Link>
                </div>
                <div className="flex-1">
                    <div className="rounded-3xl overflow-hidden">
                        <Image src={image} alt={imageAlt} className="object-cover size-full" />
                    </div>
                    <Link href="#calendar" className='flex-1 block md:hidden mt-4'>
                        <Button size="lg" className='w-full flex items-center'>
                            <span>{ctaText}</span>
                            <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}