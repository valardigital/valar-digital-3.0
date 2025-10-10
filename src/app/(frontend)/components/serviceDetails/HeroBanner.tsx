interface HeroBannerProps {
    title: string;
    description: string;
}

export default function HeroBanner({ title, description }: HeroBannerProps) {
    return (
        <section className="pt-[64px] md:pt-[67px] bg-[linear-gradient(180deg,#1D6CBB_0%,#075099_100%)]">
            <div className="container mx-auto text-white py-8 md:pt-[80px] md:pb-[64px] px-4 text-center">
                <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="tracking-[0.04rem] leading-[1.5]" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </section>
    );
}