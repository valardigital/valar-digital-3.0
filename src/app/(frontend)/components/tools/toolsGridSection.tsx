'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getMediaUrl } from '@/utilities/getMediaUrl';
import Pagination from '../shared/Pagination';
import type { ToolCardData } from '@/utilities/mapToolToCard';

interface ToolsGridSectionProps {
  tools: ToolCardData[];
  popularTags: string[];
  page?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
}

export default function ToolsGridSection({
  tools,
  popularTags,
  page = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 6,
}: ToolsGridSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const normalize = (v: string) => v.toLowerCase();
  const matchesText = (tool: ToolCardData, query: string) => {
    if (!query) return true;
    const q = normalize(query);
    return (
      normalize(tool.title).includes(q) ||
      normalize(tool.excerpt).includes(q) ||
      tool.categories.some((c) => normalize(c).includes(q))
    );
  };

  const bySearch = tools.filter((tool) => matchesText(tool, searchQuery));
  const filteredTools = activeTag ? bySearch.filter((tool) => matchesText(tool, activeTag)) : bySearch;

  const effectiveTotalItems =
    totalItems && totalItems > 0 ? totalItems : Math.max(tools.length, (totalPages || 1) * (itemsPerPage || 6));

  const handleTagClick = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <>
      <section>
        <div className="container mx-auto py-6 px-4 md:px-0">
          <div className="block lg:hidden -mx-4">
            <div className="space-y-8 bg-white py-6 px-4">
              <div className="mb-2">
                <h3 className="tracking-[0.025rem] font-medium text-text-dark mb-2">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tools..."
                    className="w-full px-6 py-4 border border-border rounded-[8px] bg-[#F3F6FA4D] text-text-dark placeholder:text-text-light placeholder:font-medium tracking-[0.04rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div className="overflow-x-scroll mt-2 -mx-4 pl-4 [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-3 tracking-[0.04rem]">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagClick(tag)}
                      className={`px-4 py-2 h-[36px] text-sm rounded-[4px] border transition-colors whitespace-nowrap ${activeTag === tag ? 'bg-primary text-white border-primary' : 'bg-primary/5 text-text-dark border-border hover:bg-primary/8'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 lg:gap-12 flex-col lg:flex-row">
            <div className="flex-1 lg:w-[65%]">
              {filteredTools.length === 0 ? (
                <p className="text-text-light text-center py-12 tracking-[0.04rem]">
                  No tools match your search. Try a different term or browse all tools.
                </p>
              ) : (
                <div className="space-y-6 md:space-y-10">
                  {filteredTools.map((tool) => (
                    <article key={tool.id} className="group">
                      <Link href={`/tools/${tool.id}`}>
                        <div>
                          <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-2xl">
                            <Image
                              src={getMediaUrl(tool.image)}
                              alt={tool.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 50vw"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2 md:mb-4 text-text-light text-sm tracking-[0.025rem]">
                              <span>{tool.durationLabel}</span>
                              {tool.date ? (
                                <>
                                  <span className="w-1 h-1 bg-text-light rounded-full" />
                                  <span>{tool.date}</span>
                                </>
                              ) : null}
                            </div>
                            <h3 className="text-base md:text-[20px] font-medium text-text-dark mb-2 leading-[1.3] tracking-[0.04rem]">
                              {tool.title}
                            </h3>
                            <p className="text-sm md:text-base text-text-dark tracking-[0.04rem] leading-[1.5] line-clamp-2">
                              {tool.excerpt}
                            </p>
                            {tool.categories.length > 0 ? (
                              <div className="flex flex-wrap gap-2 mt-4 text-sm text-text-dark tracking-[0.04rem]">
                                {tool.categories.map((category) => (
                                  <span
                                    key={category}
                                    className="px-3 py-2 bg-primary/5 border rounded-[4px]"
                                  >
                                    {category}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8 border-border-gradient-image rounded-[8px] bg-white p-6 lg:py-6 lg:px-8 lg:max-w-[424px] lg:shadow-none shadow-[0px_4px_20px_0px_#C8D3EF40]">
                <div className="hidden lg:block">
                  <h3 className="text-xl tracking-[0.025rem] font-medium text-text-dark mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search tools..."
                      className="w-full px-6 py-4 border border-border rounded-[8px] bg-[#F3F6FA4D] text-text-dark placeholder:text-text-light placeholder:font-medium tracking-[0.04rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <hr className="my-8 bg-border hidden lg:block" />
                <div className="hidden lg:block">
                  <h3 className="text-xl tracking-[0.025rem] font-medium text-text-dark mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-3 tracking-[0.04rem]">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagClick(tag)}
                        className={`px-4 py-2 h-[38px] rounded-[4px] border transition-colors cursor-pointer ${activeTag === tag ? 'bg-primary text-white border-primary' : 'bg-primary/5 text-text-dark border-border hover:bg-primary/8'}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pagination
        currentPage={page}
        totalPages={Math.max(1, totalPages)}
        totalItems={effectiveTotalItems}
        itemsPerPage={itemsPerPage}
        baseUrl="/tools"
      />
    </>
  );
}
