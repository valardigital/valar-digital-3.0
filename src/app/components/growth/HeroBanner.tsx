import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import arrowRight from '@/assets/images/arrow-right.png';

export default function HeroBanner() {
    return (
        <section className="bg-background-muted">
            <div className="container mx-auto text-text-dark py-6 md:py-10 px-4 text-center">
                <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
                    Unlock Your Shopify Store's<br /> <span className="text-primary">Growth Potential</span>
                </h1>
                <p className="tracking-[0.04rem] leading-[1.5] mb-4 md:mb-8">
                    Discover exactly what's holding your store back from its next revenue milestone.<br className="hidden md:block" />
                    Our expert team will audit your UX, conversion rate, site speed,<br className="hidden md:block" />
                    and growth opportunities- completely free.
                </p>
                <Link href="#growthReportForm" className="mx-auto w-max block">
                        <Button size="lg" className='w-max flex items-center'>
                            <span>Get Your Free Growth Report</span>
                            <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                        </Button>
                    </Link>
            </div>
        </section>
    );
}