import arrows from "@/assets/images/growth/arrow.svg";
import Image from "next/image";

export default function HowItWorks() {
    return (
        <section className="bg-white py-8 md:py-10 px-4 md:px-0">
            <div className="container mx-auto">
                <h2 className="text-text-dark font-medium leading-[1.2] text-5xl mb-4 md:mb-6 text-center">How It Works</h2>
                <p className="text-text-dark tracking-[0.04rem] leading-[1.5] text-center">Getting your growth report is simple and straight forward</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 md:mt-[60px] md:mb-[30px] gap-4 md:gap-6">
                    <div className="rounded-2xl border relative">
                        <div className="bg-primary text-white rounded-tl-2xl rounded-br-2xl font-bold text-2xl md:text-[32px] size-[61px] md:size-[70px] flex items-center justify-center">01</div>
                        <div className="py-6 px-4">
                            <h6 className="text-text-dark mb-2 md:mb-4 font-medium text-[20px]">Submit Your Information</h6>
                            <p className="text-text-light tracking-[0.04rem]">Fill out the form with details about your Shopify store and business goals.</p>
                        </div>

                        <div className="hidden lg:block absolute left-1/2 -bottom-5 z-20">
                            <Image src={arrows} alt="" className="w-[300px] max-w-[300px]" />
                        </div>
                    </div>
                    <div className="relative rounded-2xl border">
                        <div className="bg-primary text-white rounded-tl-2xl rounded-br-2xl font-bold text-2xl md:text-[32px] size-[61px] md:size-[70px] flex items-center justify-center">02</div>
                        <div className="py-6 px-4">
                            <h6 className="text-text-dark mb-2 md:mb-4 font-medium text-[20px]">We Analyze Your Store</h6>
                            <p className="text-text-light tracking-[0.04rem]">Our experts conduct a thorough analysis of your store, competitors, and market.</p>
                        </div>

                        <div className="hidden lg:block absolute left-1/2 -top-5 z-20">
                            <Image src={arrows} alt="" className="w-[300px] max-w-[300px] rotate-180" />
                        </div>
                    </div>
                    <div className="rounded-2xl relative border">
                        <div className="bg-primary text-white rounded-tl-2xl rounded-br-2xl font-bold text-2xl md:text-[32px] size-[61px] md:size-[70px] flex items-center justify-center">03</div>
                        <div className="py-6 px-4">
                            <h6 className="text-text-dark mb-2 md:mb-4 font-medium text-[20px]">Receive Growth Report</h6>
                            <p className="text-text-light tracking-[0.04rem]">Within 3 business days, you'll get your personalized growth plan via email.</p>
                        </div>

                        <div className="hidden lg:block absolute left-1/2 -bottom-5 z-20">
                            <Image src={arrows} alt="" className="w-[300px] max-w-[300px]" />
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border">
                        <div className="bg-primary text-white rounded-tl-2xl rounded-br-2xl font-bold text-2xl md:text-[32px] size-[61px] md:size-[70px] flex items-center justify-center">04</div>
                        <div className="py-6 px-4">
                            <h6 className="text-text-dark mb-2 md:mb-4 font-medium text-[20px]">Implementation Support</h6>
                            <p className="text-text-light tracking-[0.04rem]">Optional consultation call to discuss how to implement the recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}