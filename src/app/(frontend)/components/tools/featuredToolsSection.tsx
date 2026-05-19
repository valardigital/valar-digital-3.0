'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getMediaUrl } from '@/utilities/getMediaUrl';
import type { ToolCardData } from '@/utilities/mapToolToCard';

interface FeaturedToolsSectionProps {
  tools: ToolCardData[];
}

export default function FeaturedToolsSection({ tools }: FeaturedToolsSectionProps) {
  if (!tools.length) return null;

  const mainFeatured = tools[0];
  const sidebarTools = tools.slice(1, 4);

  return (
    <div className="container mx-auto md:py-10 py-6 px-4 md:px-0">
      <h2 className="text-lg md:text-[32px] font-medium text-text-dark mb-6 leading-[1.5]">
        Featured Tools
      </h2>

      <div className="flex gap-8 flex-col lg:flex-row items-stretch">
        <div className="flex-1">
          <article className="group">
            <Link href={`/tools/${mainFeatured.id}`}>
              <div className="relative w-full h-[200px] md:h-[350px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={getMediaUrl(mainFeatured.image)}
                  alt={mainFeatured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="flex items-center gap-2 mb-2 md:mb-4 text-text-light text-sm tracking-[0.025rem]">
                <span>{mainFeatured.durationLabel}</span>
                {mainFeatured.date ? (
                  <>
                    <span className="w-1 h-1 bg-text-light rounded-full" />
                    <span>{mainFeatured.date}</span>
                  </>
                ) : null}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-text-dark mb-2 leading-[1.3] tracking-[0.04rem] group-hover:text-primary transition-colors">
                {mainFeatured.title}
              </h3>
              <p className="text-sm md:text-base text-text-dark tracking-[0.04rem] leading-[1.5] line-clamp-3">
                {mainFeatured.excerpt}
              </p>
            </Link>
          </article>
        </div>

        <div className="lg:w-[38%] flex flex-col gap-6">
          {sidebarTools.map((tool) => (
            <article key={tool.id} className="group">
              <Link href={`/tools/${tool.id}`} className="flex gap-4">
                <div className="relative w-[120px] md:w-[140px] h-[90px] md:h-[100px] shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={getMediaUrl(tool.image)}
                    alt={tool.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="140px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 text-text-light text-xs tracking-[0.025rem]">
                    <span>{tool.durationLabel}</span>
                  </div>
                  <h3 className="text-base font-medium text-text-dark leading-[1.3] tracking-[0.04rem] group-hover:text-primary transition-colors line-clamp-2">
                    {tool.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
