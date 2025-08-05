import { TestimonialSlider } from "./TestimonialSlider";

export default function TestimonialSection() {
    return (
        <section className="bg-background-muted service-testimonial-section">
            <div className="container mx-auto pb-22 pt-8 md:py-16 px-4 text-center">
                <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem] leading-[1.5]">
                    SUCCESS STORIES
                </p>
                <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.2] text-text-dark mb-6 md:mb-8">
                    What Our Clients Say
                </h2>
                <TestimonialSlider />
            </div>
        </section>
    );
}