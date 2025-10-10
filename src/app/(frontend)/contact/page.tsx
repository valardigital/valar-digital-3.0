import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Valar Digital | Get in Touch Today',
  description: "Reach out to Valar Digital for Shopify insights, questions, or expert advice. Fill the form or email us, and we'll get back to you promptly.",
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/contact',
  },
};
import Image from "next/image";
import quote from "@/assets/images/contact/white-quote.png";
import icon from "@/assets/images/contact/icon.png";
import FormSection from "../components/contact/FormSection";

export default function Contact() {

    return (
        <section className='mt-[64px] md:mt-[80px]'>
            <div className='container mx-auto pt-6 md:py-16 flex items-start lg:flex-row flex-col gap-6 md:gap-10'>
                <div className="w-full md:px-0 px-4">
                    <FormSection />
                    <div className="flex md:flex-row flex-col gap-6 md:gap-12 pt-6 mt-6 md:pt-12 md:mt-12 border-t-1">
                        <div className="tracking-[0.04rem]">
                            <h6 className="font-medium">Why Talk to Us</h6>
                            <p className="mt-2"><span className="font-medium">No pressure. Just perspective.</span> You don’t need to hire us to gain value, we’re happy to offer honest feedback or spot areas for improvement.</p>
                        </div>
                        <div className="tracking-[0.04rem]">
                            <h6 className="font-medium">Thinking Long-Term?</h6>
                            <p className="mt-2"><span className="font-medium">So are we.</span> We don’t just build pretty sites, we help brands grow, convert, and retain. If you’re playing the long game, let’s talk.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="bg-primary py-6 md:py-8 px-4 md:px-10 text-white space-y-6 lg:ml-auto md:max-w-[407px] md:rounded-2xl">
                        <Image src={quote} alt="Quote Icon" className="size-6" />
                        <p className="leading-[1.5] md:leading-8 md:tracking-[0.045rem] tracking-[0.04rem] md:text-lg">Shashi and his team have genuinely been a catalyst for our business. When we started working with them, our conversion rate sat at 2.5%. And after doing CRO and development work on our website for the last two years. It now sits at 5%. I can genuinely say they are a fantastic partner and will help transform your e-commerce business.</p>
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
