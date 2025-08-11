import Link from "next/link";
import { Button } from "../ui/button";
import arrowRight from '@/assets/images/arrow-right.png';
import Image from "next/image";
import graph from "@/assets/images/growth/chart.svg";
import search from "@/assets/images/growth/search-normal.svg";
import chart from "@/assets/images/growth/diagram.svg";
import briefcase from "@/assets/images/growth/briefcase.svg";
import brain from "@/assets/images/growth/brain.svg";

export default function ReportFeaturesSection() {
    return (
        <section className="bg-background-muted py-8 md:py-10 px-4 md:px-0">
            <div className="container mx-auto flex xl:flex-row flex-col items-center xl:gap-20 md:bg-white md:border rounded-3xl md:p-8">
                <div>
                    <h2 className="text-[28px] lg:text-5xl font-medium text-text-dark mb-6 md:mb-7 leading-[1.2] lg:text-left text-center">What You'll Get in<br />
                        Your Growth Report</h2>
                    <Link href="#" className="w-max hidden xl:block">
                        <Button className='w-max flex items-center'>
                            <span>Get Yours Now</span>
                            <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                        </Button>
                    </Link>
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4">
                        <div className="p-4 border border-border/70 tracking-[0.04rem] bg-white rounded-2xl md:text-left text-center">
                            <div className="border rounded-md bg-background-subtle p-[10px] h-max w-max mb-4 md:mx-0 mx-auto">
                                <Image src={graph} alt="Graph icon" className="size-[29px]" />
                            </div>
                            <h6 className="text-text-dark text-lg mb-2 font-medium">Conversion Audit</h6>
                            <p className="text-text-light">Page-by-page breakdown with CRO insights</p>
                        </div>
                        <div className="p-4 border border-border/70 tracking-[0.04rem] bg-white rounded-2xl md:text-left text-center">
                            <div className="border rounded-md bg-background-subtle p-[10px] h-max w-max mb-4 md:mx-0 mx-auto">
                                <Image src={search} alt="Search icon" className="size-[29px]" />
                            </div>
                            <h6 className="text-text-dark text-lg mb-2 font-medium">UX & Speed Review</h6>
                            <p className="text-text-light">Mobile-first, speed-tested, friction flagged</p>
                        </div>
                        <div className="p-4 border border-border/70 tracking-[0.04rem] bg-white rounded-2xl md:text-left text-center">
                            <div className="border rounded-md bg-background-subtle p-[10px] h-max w-max mb-4 md:mx-0 mx-auto">
                                <Image src={chart} alt="Chart icon" className="size-[29px]" />
                            </div>
                            <h6 className="text-text-dark text-lg mb-2 font-medium">Growth Levers</h6>
                            <p className="text-text-light">Actionable tactics across retention, AOV, and traffic</p>
                        </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                            <div className="p-4 border border-border/70 tracking-[0.04rem] bg-white rounded-2xl md:text-left text-center">
                                <div className="border rounded-md bg-background-subtle p-[10px] h-max w-max mb-4 md:mx-0 mx-auto">
                                    <Image src={briefcase} alt="Briefcase icon" className="size-[29px]" />
                                </div>
                                <h6 className="text-text-dark text-lg mb-2 font-medium">Tooling & App Suggestions</h6>
                                <p className="text-text-light">Tools you’re missing out on</p>
                            </div>
                            <div className="p-4 border border-border/70 tracking-[0.04rem] bg-white rounded-2xl md:text-left text-center">
                                <div className="border rounded-md bg-background-subtle p-[10px] h-max w-max mb-4 md:mx-0 mx-auto">
                                    <Image src={brain} alt="Graph icon" className="size-[29px]" />
                                </div>
                                <h6 className="text-text-dark text-lg mb-2 font-medium">Competitor Insights</h6>
                                <p className="text-text-light">What similar brands are doing better</p>
                            </div>
                        </div>
                    <Link href="#" className="w-full block xl:hidden mt-6">
                        <Button className='w-full flex items-center'>
                            <span>Get Yours Now</span>
                            <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}