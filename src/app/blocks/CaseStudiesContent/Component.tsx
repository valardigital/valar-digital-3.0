import React from "react";
import RichText from "@/components/RichText";

interface Blockquote {
  quote?: string;
  attribution?: string;
}

interface CaseStudyContentProps {
  title?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  titleStyle?: "default" | "sentence" | "title" | "lowercase";
  content: any;
  blockquote?: Blockquote;
  showDivider?: boolean;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({
  title,
  headingLevel = "h2",
  titleStyle = "default",
  content,
  blockquote,
  showDivider = true,
}) => {
  // Helper function to format title text
  const formatTitle = (text: string, style: string) => {
    switch (style) {
      case "sentence":
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      case "title":
        return text.replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
      case "lowercase":
        return text.toLowerCase();
      case "default":
      default:
        return text.toUpperCase();
    }
  };

  // Get CSS classes based on title style
  const getTitleClasses = () => {
    const baseClasses = "md:text-[22px] text-xl font-medium text-text-dark tracking-[0.04rem]";
    return titleStyle === "default" ? `${baseClasses} uppercase` : baseClasses;
  };
  return (
    <div className="bg-background-subtle mt-[112px] md:mt-0">
    <section className="container mx-auto py-8 md:py-12">
      {/* Top Spacer */}
      {/* <div className="h-12 bg-background-muted" /> */}

      <div className={`flex flex-col ${title ? 'md:flex-row' : ''} gap-1 md:gap-6 px-5 md:px-0`}>
        {/* Title (left) */}
        {title && (
          <div className="md:w-1/4 flex items-start justify-start mb-4 md:mb-0">
            {React.createElement(headingLevel, {
              className: getTitleClasses(),
              children: formatTitle(title, titleStyle)
            })}
          </div>
        )}

        {/* Content (right) */}
        <div className={`flex-1 flex flex-col ${!title ? 'w-full' : ''}`}>
          <RichText data={content} />

          {blockquote?.quote && (
            <blockquote className="bg-primary/5 border-l-2 border-primary px-4 md:px-6 py-4 text-primary tracking-wider">
              <span className="block mb-2">"{blockquote.quote}"</span>
              {blockquote.attribution && (
                <span className="block text-primary font-normal">
                  — {blockquote.attribution}
                </span>
              )}
            </blockquote>
          )}
        </div>
      </div>
    </section>
    {/* Divider */}
      {showDivider && <hr className="border container mx-auto w-[90%] md:w-full" />}
    </div>
  );
};

export default CaseStudyContent;
