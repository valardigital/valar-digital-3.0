export default function HeroBanner() {
    return (
        <section className="pt-[64px] md:pt-[67px] bg-[linear-gradient(180deg,#1D6CBB_0%,#075099_100%)]">
            <div className="container mx-auto text-white py-8 md:pt-[80px] md:pb-[64px] px-4 text-center">
                <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
                    Shopify Design<br /> That Converts Beautifully
                </h1>
                <p className="tracking-[0.04rem] leading-[1.5]">
                    Transform your Shopify store with stunning, conversion-optimized<br className='hidden md:block' />
                    designs that turn visitors into customers and elevate your brand.
                </p>
            </div>
        </section>
    );
}