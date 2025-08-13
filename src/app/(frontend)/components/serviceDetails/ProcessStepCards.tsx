import Image, { StaticImageData } from "next/image";

interface ProcessStepCardsProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const ProcessStepCards = ({ image, title, description }: ProcessStepCardsProps) => {
  return (
    <div className="text-center border bg-background-muted p-8 rounded-2xl space-y-3 leading-[1.5] tracking-[0.04rem]">
      <div className="flex justify-center border bg-white p-3 w-max rounded-[4px] mx-auto">
        <Image src={image} alt="icon" className="size-7"/>
      </div>
      <h3 className="text-xl md:text-2xl font-medium text-text-dark">
        {title}
      </h3>
      <p className="text-text-light">
        {description}
      </p>
    </div>
  );
};