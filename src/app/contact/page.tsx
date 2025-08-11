import Image from "next/image";
import quote from "@/assets/images/contact/white-quote.png";
import icon from "@/assets/images/contact/icon.png";

export default function Contact() {

    return (
        <section className='mt-[64px] md:mt-[67px]'>
            <div className='container mx-auto pt-6 md:py-16 flex items-center lg:flex-row flex-col gap-10'>
                <div className="flex-1 md:px-0 px-4">
                    <h1 className='text-text-dark font-medium text-[28px] md:text-[40px] mb-2 md:mb-6'>Contact Us</h1>
                    <div className='text-text-dark tracking-[0.04rem] leading-[1.7]'>
                        <p>Have a question, project idea, or just want to chat?<br />Reach us anytime at</p>
                        <p className="font-bold text-primary my-2">hello@valardigital.com</p>
                        <p>We typically reply within 1 business day.</p>
                    </div>
                    <hr className="bg-border my-6 md:my-12" />
                    <div className="flex md:flex-row flex-col text-text-dark gap-6 md:gap-12">
                        <div className="md:max-w-[281px]">
                            <h5 className="mb-2 font-medium">Why Talk to Us</h5>
                            <p><span className="font-medium">No pressure. Just perspective.</span> You don’t need to hire us to gain value, we’re happy to offer honest feedback or spot areas for improvement.</p>
                        </div>
                        <div className="md:max-w-[281px]">
                            <h5 className="mb-2 font-medium">Thinking Long-Term?</h5>
                            <p><span className="font-medium">So are we.</span>  We don’t just build pretty sites, we help brands grow, convert, and retain. If you’re playing the long game, let’s talk.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-primary py-6 md:py-8 px-4 md:px-10 text-white space-y-6 md:max-w-[407px] md:rounded-2xl">
                        <Image src={quote} alt="Quote Icon" className="size-6" />
                        <p className="leading-[1.5] md:leading-8 tracking-[0.04rem]">Shashi and his team have genuinely been a catalyst for our business. When we started working with them, our conversion rate sat at 2.5%. And after doing C R O and development work on our website for the last two years. It now sits at 5%. I can genuinely say they are a fantastic partner and will help transform your e-commerce business.</p>
                        <div className="flex items-center gap-2">
                            <Image src={icon} alt="icon" className="w-8" />
                            <p className="tracking-[0.02rem]"><span className="font-bold tracking-[0.04rem]">Jack Rubin,</span> Co-Founder, Purdy & Figg</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
