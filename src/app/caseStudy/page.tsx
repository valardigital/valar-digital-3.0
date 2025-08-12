import CaseStudyCard from "../components/caseStudy/caseStudyCard";
import purdyFiggImage from "@/assets/images/caseStudy/p&f.png";
import zima from "@/assets/images/caseStudy/zima.png";
import CTASection from "../components/shared/CTASection";

export default function CaseStudy() {
    const ArrowDownIcon = () => (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    );

    const ArrowUpIcon = () => (
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </div>
    );

    return (
        <div className='bg-background-muted mt-[64px] md:mt-[67px]'>
            <div className="container mx-auto">
                <div className="text-text-dark text-center py-6 md:py-10">
                    <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">Case Studies That<br />Speak for Themselves</h1>
                    <p className="leading-[1.5] tracking-[0.04rem]">Discover how we've helped Shopify brands transform their customer experience, optimize<br className="hidden md:block" /> conversions, and scale their revenue through strategic design and development.</p>
                </div>
                <div className="pt-6 pb-10 space-y-6 md:space-y-10 md:px-0 px-4">
                    <CaseStudyCard
                        image={purdyFiggImage}
                        imageAlt="Purdy & Figg product bottle"
                        tags={['Retention UX', 'Shopify Rebuild', 'Custom Subscription Flow']}
                        title="How We Helped Purdy & Figg Cut Subscription Churn by 23%"
                        description="We replaced a clunky third-party portal with a custom, mobile-first experience. In 8 weeks, we delivered a calmer, clearer flow that cut cancellations and reduced support load."
                        metrics={[
                            {
                                icon: <ArrowDownIcon />,
                                value: '↓ 23% churn',
                                description: ''
                            },
                            {
                                icon: <ArrowUpIcon />,
                                value: '↑ 42% engagement',
                                description: ''
                            },
                            {
                                icon: <ArrowUpIcon />,
                                value: '↑ 35% skipped over cancelled',
                                description: ''
                            }
                        ]}
                    />
                    <CaseStudyCard
                        image={zima}
                        imageAlt="Zima Dental Pod"
                        tags={['Retention UX', 'Shopify Rebuild', 'Custom Subscription Flow']}
                        title="Doubled Retention with a Smarter Refill Flow"
                        description="We redesigned Zima’s post-purchase experience to better match how real customers reorder. From timing to tone, every part of the refill flow was rethought to reduce drop-off and build lasting habits."
                        metrics={[
                            {
                                icon: <ArrowDownIcon />,
                                value: '↓ 2x repeat order rate',
                                description: ''
                            },
                            {
                                icon: <ArrowUpIcon />,
                                value: '↑ refill journey completion',
                                description: ''
                            },
                            {
                                icon: <ArrowUpIcon />,
                                value: '↑ Support tickets around reordering',
                                description: ''
                            }
                        ]}
                    />
                </div>
                
                {/* CTA Section */}
                <CTASection/>
            </div>
        </div>
    );
}
