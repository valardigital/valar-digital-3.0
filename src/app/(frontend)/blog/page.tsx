'use client';

import img1 from "@/assets/images/blog/blog-img-1.png";
import img2 from "@/assets/images/blog/blog-img-2.png";
import img3 from "@/assets/images/blog/blog-img-3.png";
import img4 from "@/assets/images/blog/blog-img-4.png";
import img5 from "@/assets/images/blog/blog-img-5.png";
import img6 from "@/assets/images/blog/blog-img-6.png";
import img7 from "@/assets/images/blog/blog-img-7.png";
import img8 from "@/assets/images/blog/blog-img-8.png";
import img9 from "@/assets/images/blog/blog-img-9.png";
import img10 from "@/assets/images/blog/blog-img-10.png";
import FeaturedBlogsSection from '../components/blog/featuredBlogSection';
import BlogGridSection from '../components/blog/blogGridSection';

const featuredPosts = [
  {
    id: 1,
    title: "From 0 to 99% Growth: Inside the Zone Framework",
    excerpt: "When Zima approached us, they had great products and loyal customers — but their growth had plateaued. In this case study, we walk through the exact changes we made: from restructuring their PDPs to implementing flexible retention offers. The results? A 99% YoY revenue increase, with higher LTV and better margins.",
    image: img1,
    categories: [
      "AI",
      "Ecommerce",
      "Human Insights"
    ],
    readTime: "12 min watch",
    date: "March 31, 2025",
    hasVideo: true,
    videoPageUrl: "#",
  },
  {
    id: 2,
    title: "Why Most Shopify A/B Tests Fail and What to Do Instead",
    excerpt: "Most Shopify brands run A/B tests expecting massive wins, only to see inconclusive data — or worse, misleading results. The problem isn’t the tool; it’s the setup. In this article, we break down the 4 most common reasons tests fail and show you how to design smarter experiments that lead to real decisions — not just prettier dashboards.",
    image: img2,
    categories: [
      "A/B Testing",
      "UX",
      "Shopify"
    ],
    readTime: "15 min read",
    date: "Aprl 16, 2025",
    hasVideo: false,
    videoPageUrl: "#",
  },
  {
    id: 3,
    title: "Lightweight UX Research Tactics That Actually Drive Revenue",
    excerpt: "You don’t need a research department or fancy tools to understand your users. We’ve run lean research for years — and in this post, we’re sharing the frameworks, questions, and workflows that work. Whether you’re solo or in a small team, these methods help you uncover insights that directly impact conversion and retention.",
    image: img3,
    categories: [
      "UX Research",
      "Shopify",
      "Ecommerce"
    ],
    readTime: "10 min read",
    date: "April 20, 2025",
    hasVideo: false,
    videoPageUrl: "#"
  },
  {
    id: 4,
    title: "6 Quick Wins to Boost AOV Without Killing UX",
    excerpt: "Every ecommerce brand wants to increase average order value — but pushing too hard can hurt trust. This post outlines six subtle, high-leverage UX and pricing tweaks that helped our clients lift AOV by up to 22%, without annoying upsells or slowing down the user journey.",
    image: img4,
    categories: [
      "AOV",
      "Conversion"
    ],
    readTime: "18 min watch",
    date: "April 6, 2025",
    hasVideo: false,
    videoPageUrl: "#"
  }
];

const posts = [
  {
    id: 1,
    title: "From 0 to 99% Growth: Inside the Zima Turnaround",
    excerpt: "When Zima approached us, they had great products and loyal customers — but their growth had plateaued. In this case study, we walk through the exact changes we made: from restructuring their PDPs to implementing flexible retention offers. The results? A 99% YoY revenue increase, with higher LTV and better margins.",
    image: img5,
    categories: [
      "Case Study",
      "Growth",
      "Retention"
    ],
    readTime: "13 min read",
    date: "April 22, 2025",
    hasVideo: false,
    videoPageUrl: "#",
    type: "Articles"
  },
  {
    id: 2,
    title: "The Agency Flywheel: How We Scale Brands Faster with Less Overhead",
    excerpt: "Most agencies grow by hiring more — we took a different path. In this article, we share how Valar Digital built an internal flywheel using AI tooling, specialized systems, and lean processes to scale client output without bloating our team. It’s the same model we use to scale brands — and now we’re sharing it.",
    image: img6,
    categories: [
      "Agency Life",
      "Growth"
    ],
    readTime: "14 min read",
    date: "May 5, 2025",
    hasVideo: false,
    videoPageUrl: "#",
    type: "Articles"
  },
  {
    id: 3,
    title: "Don’t Overbuild: Lean UX Strategies for Scaling Stores",
    excerpt: "Scaling a store shouldn’t mean adding complexity. In this video, we explore the concept of “minimum effective UX” — how to build only what drives growth and avoid wasting time on pixel-perfect distractions. It’s a practical look at how to balance ambition with velocity in a high-growth Shopify brand.",
    image: img7,
    categories: [
      "Lean UX",
      "Minimalism",
      "Dev Strategy"
    ],
    readTime: "16 min watch",
    date: "April 3, 2025",
    hasVideo: true,
    videoPageUrl: "#",
    type: "Videos"
  },
  {
    id: 4,
    title: "Designing for Retention: What the Best Shopify Brands Get Right",
    excerpt: "High retention isn’t luck — it’s design. From onboarding flows to refill reminders, we’ve seen consistent patterns across high-retention brands. In this post, we break down the core UX decisions that keep customers coming back — and how you can implement them quickly without rebuilding your whole stack.",
    image: img8,
    categories: [
      "Retention",
      "UX"
    ],
    readTime: "11 min read",
    date: "March 27, 2025",
    hasVideo: false,
    videoPageUrl: "#",
    type: "Articles"
  },
  {
    id: 5,
    title: "Founder-Led UX Audits: Our Favorite Questions to Ask",
    excerpt: "You don’t need to be a designer to spot conversion problems — you just need better questions. This article shares the exact prompts we give founders to review their own site, including how to think like a user, when to trust the data, and what signals to look for in heatmaps, checkout flow, and product pages.",
    image: img9,
    categories: [
      "Founders",
      "Product Thinking"
    ],
    readTime: "9 min read",
    date: "March 15, 2025",
    featured: false,
    hasVideo: false,
    videoPageUrl: "#",
    type: "Articles"
  },
  {
    id: 6,
    title: "Shopify Checkout A/B Testing: The Missing Link to Real Growth",
    excerpt: "Most brands obsess over homepage design and ignore checkout — where all the money is. We’ve seen massive gains by A/B testing checkout layouts, trust indicators, and copy variations. In this deep dive, we explain how to run meaningful tests in Shopify Plus checkout and what to avoid to prevent friction.",
    image: img10,
    categories: [
      "Checkout",
      "A/B Testing",
      "Growth"
    ],
    readTime: "17 min read",
    date: "March 12, 2025",
    featured: false,
    hasVideo: false,
    videoPageUrl: "#",
    type: "Articles"
  }
];

const popularTags = [
  'GrowthStrategy',
  'Retention',
  'Funnel Design',
  'Lean UX',
  'UX Audit',
  'ShopifyTips',
  'Liquid Code',
  'AI UX',
  'AI Insights',
  'CaseStudy',
  'Real Results'
];

const categories = [
  'All Types',
  'Articles',
  'Videos'
]

export default function BlogListingPage() {

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px]">
      {/* Hero Section */}
      <section>
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0">
          <div className="text-center text-text-dark">
            <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
              What's Actually Working<br />
              for Shopify Brands,<br />
              And How You Can Use It Too
            </h1>
            <p className="tracking-[0.04rem] leading-[1.5]">
              Smart ideas. Clean execution. No filler.<br className='hidden md:block' />
              Just what you need to move faster and grow better.
            </p>
          </div>
        </div>
      </section>

      <FeaturedBlogsSection posts={featuredPosts} />
      <BlogGridSection
        posts={posts}
        categories={categories}
        popularTags={popularTags}
      />
    </div>
  );
}