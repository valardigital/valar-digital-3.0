import featureImage from "@/assets/images/services/featureImage.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import arrowRight from '@/assets/images/arrow-right.png';

export default function FeatureSection() {
    return (
        <section className="bg-background-muted py-8 md:py-[64px]">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 px-4 md:px-0">
                <div className="text-text-dark space-y-4 md:space-y-6 flex-1 text-center md:text-left">
                    <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.2]">What We <span className="text-primary">Offer?</span></h2>
                    <p className="leading-[1.5] tracking-[0.04rem]">From creative direction to high-fidelity layouts, we handle the full design process — always guided by UX best practices and CRO insights. Whether you’re launching or rebranding, we’ll make sure your store looks good and performs better.</p>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
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
                            <span>
                                UX research & wireframes
                            </span>
                        </li>
                        <li className="flex gap-4">
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
                            <span>
                                Mobile-first, responsive layouts
                            </span>
                        </li>
                        <li className="flex gap-4">
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
                            <span>
                                Custom PDPs, PLPs & landing pages
                            </span>
                        </li>
                        <li className="flex gap-4">
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
                            <span>
                                Conversion-focused design system
                            </span>
                        </li>
                        <li className="flex gap-4">
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
                            <span>
                                Ready-to-build developer handoff
                            </span>
                        </li>
                    </ul>
                    <Link href="#" className='flex-1 hidden md:block'>
                        <Button size="lg" className=' flex items-center'>
                            <span>Schedule A Call</span>
                            <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                        </Button>
                    </Link>
                </div>
                <div className="flex-1">
                    <div className="rounded-3xl overflow-hidden">
                        <Image src={featureImage} alt="Feature Image" className="object-cover size-full" />
                    </div>
                    <Link href="#" className='flex-1 block md:hidden mt-4'>
                        <Button size="lg" className='w-full flex items-center'>
                            <span>Schedule A Call</span>
                            <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}