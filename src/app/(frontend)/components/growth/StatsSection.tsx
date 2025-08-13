export default function StatsSection() {
    return (
        <section className="bg-gradient-to-b from-white from-[83.59%] to-[#FAFBFE]">
            <div className="container mx-auto py-8 md:py-12 px-4 md:px-0">
                <h6 className="text-text-light text-center"><span className="text-text-dark font-bold">Trusted by 200+ Shopify brands<br className="block md:hidden" /></span> to unlock millions in additional revenue</h6>
                <div className="flex flex-col md:flex-row items-center md:gap-0 gap-10 mt-10">
                    <div className="flex-1 text-center md:border-r-2">
                        <h3 className="text-primary font-bold text-[32px] md:text-5xl mb-4">35%</h3>
                        <p className="text-[#111827] tracking-[0.05rem] text-sm md:text-base">AVG REVENUE INCREASE</p>
                    </div>
                    <div className="flex-1 text-center md:border-r-2">
                        <h3 className="text-primary font-bold text-[32px] md:text-5xl mb-4">200+</h3>
                        <p className="text-[#111827] tracking-[0.05rem] text-sm md:text-base">STORES OPTIMIZED</p>
                    </div>
                    <div className="flex-1 text-center">
                        <h3 className="text-primary font-bold text-[32px] md:text-5xl mb-4">$12M+</h3>
                        <p className="text-[#111827] tracking-[0.05rem] text-sm md:text-base">REVENUE GENERATED</p>
                    </div>
                </div>
            </div>
        </section>
    );
}