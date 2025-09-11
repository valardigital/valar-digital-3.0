import Image from "next/image";
import bulbIcon from "@/assets/images/services/lightBulb.png";
import brain from "@/assets/images/growth/brain.svg";
import questionMark from "@/assets/images/caseStudy/question-mark.png";
import img1 from "@/assets/images/caseStudy/case-study-img-1.png";
import img2 from "@/assets/images/caseStudy/case-stufy-img-2.png";
import img3 from "@/assets/images/caseStudy/case-study-img-3.gif";
import img4 from "@/assets/images/caseStudy/case-study-img-4.gif";
import img5 from "@/assets/images/caseStudy/case-study-img-5.gif";
import img6 from "@/assets/images/caseStudy/case-study-img-6.png";
import img7 from "@/assets/images/caseStudy/case-study-img-7.png";
import img8 from "@/assets/images/caseStudy/case-study-img-8.png";
import img9 from "@/assets/images/caseStudy/case-study-img-9.gif";
import img10 from "@/assets/images/caseStudy/case-study-img-10.png";
import CTASection from "@/app/(frontend)/components/shared/CTASection";
import Link from "next/link";

export default function CaseStudyPage() {
  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
      <section className="py-4 md:py-16 md:px-0 px-4">
        <div className="container mx-auto">
          <Link href="/caseStudy" className="flex items-center gap-2 text-text-dark hover:font-medium hover:cursor-pointer mb-6 md:mb-10 tracking-[0.04rem] text-sm md:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[2px] rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
            </svg>
            Back to Case Studies
          </Link>

          <h1 className="font-medium text-text-dark leading-[1.2] md:leading-[1.6] text-[28px] md:text-[40px]">How We Helped Purdy & Figg <br className="hidden sm:block"/>
            Cut Subscription Churn by 23%</h1>

          <div className="flex gap-6 mt-6 md:mt-10 flex-col md:flex-row">
            <div className="bg-primary p-6 md:py-10 md:px-8 rounded-3xl space-y-4 md:space-y-[47px] line-height-[1.6] text-white sm:min-w-[408px]">
              <div className="space-y-2">
                <p>Client</p>
                <p className="font-medium tracking-[0.04rem]">Purdy & Figg</p>
              </div>
              <div className="space-y-2">
                <p>Industry</p>
                <p className="font-medium tracking-[0.04rem]">DTC · Wellness · Subscription Ecommerce</p>
              </div>
              <div className="space-y-2">
                <p>Scope</p>
                <p className="font-medium tracking-[0.04rem]">UX Strategy · UX/UI Design ·<br />
                  Front & Back-End Development</p>
              </div>
              <div className="space-y-2">
                <p>Timeframe</p>
                <p className="font-medium tracking-[0.04rem]">8 weeks (from strategy to launch)</p>
              </div>
            </div>
            <div className="border rounded-3xl space-y-4 p-6 md:py-10 md:px-8 bg-white">
              <div className="flex items-center justify-center size-13 bg-background-subtle rounded-[4px] border mb-4">
                <Image src={bulbIcon} alt="Icon 3" width={100} height={100} className="size-7" />
              </div>
              <h3 className="font-medium text-2xl leading-[1.3] mb-4">The Context</h3>
              <div className="space-y-2 tracking-[0.04rem] leading-[1.6]">
                <h4 className="text-primary font-medium">The challenge</h4>
                <p>Purdy & Figg is a fast-growing wellness brand with a loyal customer base and a strong subscription model at the heart of their business. But their existing customer portal felt cluttered, impersonal, and off-brand — leading to user confusion, friction at key touchpoints, and ultimately, increased churn.</p>
              </div>
              <div className="space-y-2 tracking-[0.04rem] leading-[1.6]">
                <h4 className="text-primary font-medium">What we did</h4>
                <p>We partnered with their team to completely rethink the experience — making it calmer, more intuitive, and emotionally aligned with the brand. Over the course of 8 weeks, we led strategy, UX, and front-end development to deliver a fully branded, mobile-first subscription flow that elevated the visual structure, simplified key actions, and gave users greater clarity and control.</p>
              </div>
            </div>
          </div>
          <div className="border rounded-3xl space-y-4 py-10 px-8 mt-6  bg-white">
            <div className="flex md:flex-row flex-col gap-4 md:gap-8 text-text-dark">
              <h3 className="text-2xl font-medium whitespace-nowrap leading-[1.3]">The Results</h3>
              <p className="leading-[1.6] tracking-[0.04rem]">The redesigned subscription experience delivered measurable improvements across retention, engagement, and customer satisfaction, highlighting how thoughtful UX and a brand-aligned interface can directly improve customer behavior and business performance.</p>
            </div>
            <hr className="bg-border my-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              <div>
                <h3 className="text-[28px] font-medium leading-[1.5] text-text-dark">23%</h3>
                <h3 className="text-xl text-text-dark">reduction in churn</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">Fewer users canceled their subscriptions.</p>
              </div>
              <div>
                <h3 className="text-[28px] font-medium leading-[1.5] text-text-dark">31%</h3>
                <h3 className="text-xl text-text-dark">increase in product swaps</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">More users switched products instead of leaving.</p>
              </div>
              <div>
                <h3 className="text-[28px] font-medium leading-[1.5] text-text-dark">5x</h3>
                <h3 className="text-xl text-text-dark">fewer support tickets</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">Self-serve tools replaced manual support.</p>
              </div>
              <div>
                <h3 className="text-[28px] font-medium leading-[1.5] text-text-dark">18%</h3>
                <h3 className="text-xl text-text-dark">increase in skip over cancel</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">Users paused or skipped instead of canceling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-16 px-4 md:px-0">
        <div className="container mx-auto">
          <h4 className="leading-[1.3] text-primary uppercase font-medium">Where we started</h4>
          <div className="flex md:flex-row flex-col mt-6 md:gap-12 gap-4">
            <h2 className="text-2xl md:text-[32px] leading-[1.3] flex-1 font-medium">To fix the experience, we had to understand what was broken</h2>
            <p className="text-text-light flex-1 tracking-[0.04rem] leading-[1.6]">The results didn’t happen by chance. Before we could <span className="text-text-dark font-medium">redesign the subscription flow,</span> we had to understand <span className="text-text-dark font-medium">why users were struggling</span> in the first place. That meant looking closely at <span className="text-text-dark font-medium">Skio’s current experience</span> — the <span className="text-text-dark font-medium">layout,</span> the <span className="text-text-dark font-medium">tone,</span> the <span className="text-text-dark font-medium">flow</span> — and identifying where it created  <span className="text-text-dark font-medium">confusion,</span> pressure, or <span className="text-text-dark font-medium">missed opportunities.</span> What we found  <span className="text-text-dark font-medium">shaped every decision that followed.</span></p>
          </div>
          <div className="mt-10 mx-auto">
            <Image src={img1} alt="" className="size-full" />
          </div>
          <p className="text-center tracking-[0.04rem] text-sm md:text-base mt-8 md:mt-0">
            Original landing screen from Skio’s portal, the starting point we set out to improve.
          </p>
          <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-6 mt-10">
            <div className="flex-1 p-6 md:py-10 md:px-8 bg-background-muted rounded-3xl border border-border space-y-4">
              <div className="flex items-center justify-center size-13 bg-white rounded-[4px] border mb-4">
                <Image src={brain} alt="Icon 3" width={100} height={100} className="size-7" />
              </div>
              <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">What We Already Knew</h3>
              <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2 text-text-dark">
                <li>Skio handled basic subscription functions reliably</li>
                <li>Customers often needed to swap, skip, or pause deliveries</li>
                <li>Subscription UX was a key driver of churn and support tickets</li>
                <li>The client wanted full control with a branded in-house solution</li>
              </ul>
            </div>
            <div className="flex-1 py-10 px-8 bg-background-muted rounded-3xl border border-border space-y-4">
              <div className="flex items-center justify-center size-13 bg-white rounded-[4px] border mb-4">
                <Image src={questionMark} alt="Icon 3" width={100} height={100} className="size-7" />
              </div>
              <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">What We Needed to Learn</h3>
              <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2 text-text-dark">
                <li>Where users were getting stuck or frustrated in Skio</li>
                <li>Which actions felt confusing, hidden, or risky</li>
                <li>What Skio lacked in tone, hierarchy, and flexibility</li>
                <li>How to structure flows that feel calmer, clearer, and more emotionally supportive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-muted">
        <div className="container mx-auto flex md:flex-row flex-col items-center gap-7 md:gap-10 py-8 md:py-10 px-4 md:px-0">
          <div className="flex-1">
            <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight 1</h5>
            <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">Layout lacked Visual Hierarchy</h3>
            <p className="text-text-light tracking-[0.04rem] leading-[1.6]"> Skio’s interface gave  <span className="text-text-dark font-medium">equal weight to every element</span> — from “Order History” to “Cancel Subscription.” There was no clear grouping, no prioritization, and no visual rhythm. This made the <span className="text-text-dark font-medium">interface feel dense and unfocused,</span> especially on mobile, where users struggled to quickly find what they needed. <span className="text-text-dark font-medium">Key retention-driving actions weren’t visually emphasized,</span> leading to missed opportunities and higher friction.</p>
          </div>
          <div>
            <Image src={img2} alt="" className="size-full" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto flex md:flex-row flex-col-reverse items-center gap-7 md:gap-10 py-8 md:py-10 px-4 md:px-0">
          <div className="border border-[#11322C] rounded-[10px] overflow-hidden w-[50%] shadow-[0px_15.76px_28.37px_0px_#8F9DAF40]">
            <Image src={img3} alt="" className="size-full" />
          </div>
          <div className="flex-1">
            <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight 2</h5>
            <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">The Journey Felt Disjointed</h3>
            <p className="text-text-light tracking-[0.04rem] leading-[1.6]"> In Skio, actions like “Swap” or “Add Product” opened a second modal with <span className="text-text-dark font-medium">no way to go back</span> — the only option was to close everything. Even after completing an action, the modal would close entirely, <span className="text-text-dark font-medium">forcing users to re-enter</span> the main editing view just to keep going. Worse, if users <span className="text-text-dark font-medium">had made edits beforehand</span> — like changing quantities or deleting items — <span className="text-text-dark font-medium">those changes were lost without warning.</span> This lack of continuity made editing feel <span className="text-text-dark font-medium">fragile, unpredictable, and easy to abandon.</span></p>
          </div>
        </div>
      </section>

      <section className="bg-background-muted">
        <div className="container mx-auto flex md:flex-row flex-col items-center gap-7 md:gap-10 py-8 md:py-10 px-4 md:px-0">
          <div className="flex-1">
            <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight 3</h5>
            <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">Missed Standards in UX & Retention</h3>
            <div className="tracking-[0.04rem] text-text-light leading-[1.6]">
              <p>The experience lacked polish in key areas:</p>
              <ul className="list-disc pl-4 space-y-2 my-2">
                <li>No <span className="text-text-dark font-medium">inline tooltips</span> or <span className="text-text-dark font-medium">guidance during edits</span></li>
                <li><span className="text-text-dark font-medium">Pause</span> or <span className="text-text-dark font-medium">skip actions</span> weren’t emotionally framed</li>
                <li>The <span className="text-text-dark font-medium">visual layout</span> made key actions <span className="text-text-dark font-medium">easy to miss</span></li>
              </ul>
              <p>While core features existed, the experience felt <span className="text-text-dark font-medium">xtransactional, not empathetic,</span> especially where <span className="text-text-dark font-medium">user trust mattered most.</span></p>
            </div>
          </div>
          <div className="border border-[#11322C] rounded-[10px] overflow-hidden w-[50%] shadow-[0px_15.76px_28.37px_0px_#8F9DAF40]">
            <Image src={img4} alt="" className="size-full" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto flex md:flex-row flex-col-reverse items-center gap-7 md:gap-10 py-8 md:py-10 px-4 md:px-0">
          <div className="border border-[#11322C] rounded-[10px] overflow-hidden w-[50%] shadow-[0px_15.76px_28.37px_0px_#8F9DAF40]">
            <Image src={img5} alt="" className="size-full" />
          </div>
          <div className="flex-1">
            <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight 4</h5>
            <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">Retention Logic Needed Refinement</h3>
            <p className="text-text-light tracking-[0.04rem] leading-[1.6]"> Skio did try to  <span className="text-text-dark font-medium">capture intent during cancellation,</span> but the path still felt <span className="text-text-dark font-medium">rigid and abrupt.</span> Users encountered generic surveys and limited flexibility. There was room to make the flow feel more <span className="text-text-dark font-medium">personal and adaptive —</span>by <span className="text-text-dark font-medium">tailoring alternatives </span>to the user’s reason and <span className="text-text-dark font-medium">softening the overall tone.</span></p>
          </div>
        </div>
      </section>

      <section className="bg-background-muted py-8 md:pt-16 px-4 md:px-8">
        <div className="container mx-auto bg-white p-6 md:py-10 md:px-8 rounded-3xl border">
          <h5 className="leading-[1.3] text-primary uppercase font-medium mb-4 md:mb-6">Turning insights into action</h5>
          <div className="flex md:flex-row flex-col gap-4 md:gap-12">
            <div className="flex-1">
              <h2 className="font-medium text-text-dark text-2xl md:text-[32px] leading-[1.3]">What we changed, and how it improved the experience</h2>
            </div>
            <div className="flex-1 leading-[1.6] tracking-[0.04rem]">
              <p>With a clearer understanding of where the friction lived, we set out to rebuild the subscription portal from the ground up. Every design decision — from layout structure to cancellation logic — was rooted in what we learned from the existing experience. Our goal wasn’t just to make it functional, but to make it feel better: more intuitive, more human, and more aligned with how people actually manage subscriptions.</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[2.5px] h-[80px] mx-auto bg-[linear-gradient(180deg,transparent_0%,rgba(7,80,153,0.08)_20%,rgba(7,80,153,0.2)_50%,rgba(7,80,153,0.08)_80%,transparent_100%)]" />
      </section>

      <section className="bg-white">
        <div className="container mx-auto py-8 md:py-16 px-4 md:px-0">
          <h2 className="text-left md:text-center font-medium leading-[1.3] text-text-dark text-2xl md:text-[32px]">A Warmer, More Structured<br />
            First Impression</h2>
          <div className="mt-6 md:mt-10 mx-auto text-center">
            <Image src={img6} alt="" className="size-full" />
          </div>
          <p className="tracking-[0.04rem] leading-[1.6] text-left md:text-center mt-4 md:mt-8">We rebuilt the subscription overview with warmth and clarity in mind. A personal welcome,<br className="hidden md:block"/> visual filters, and structured navigation make it easier for users to find what matters — while<br className="hidden md:block"/> soft styling and tone help the experience feel more human.</p>
          <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-6 mt-6 md:mt-10">
            <div className="flex-1 p-6 md:py-10 md:px-8 bg-background-muted rounded-3xl border border-border space-y-4">
              <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">Before</h3>
              <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2">
                <li>Generic greeting with no brand tone</li>
                <li>All subscriptions shown in one scroll, no filters</li>
                <li>Flat white background made sections blur together</li>
                <li>Action buttons (like Logout, Order History) looked the same</li>
                <li>Upsell section labeled generically: "You might also like"</li>
              </ul>
            </div>
            <div className="flex-1 p-6 md:py-10 md:px-8 bg-background-muted rounded-3xl border border-border space-y-4">
              <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">After</h3>
              <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2">
                <li>Personal, branded greeting with emotional reassurance</li>
                <li>Active/Inactive tabs separate subscriptions clearly</li>
                <li>Soft tinted background with card-based layout</li>
                <li>Clear hierarchy between primary and secondary actions</li>
                <li>Friendlier upsell section: "Add Something You'll Love"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-muted py-8 md:py-16 px-4 md:px-0">
        <div className="container mx-auto text-text-dark">
          <h2 className="font-medium leading-[1.3] text-2xl md:text-[32px]">Every Detail Rebuilt With Care</h2>
          <p className="mt-4 md:mt-6 leading-[1.6] tracking-[0.04rem]">From edit flows to upsells, we redesigned every part of the subscription experience to feel more intuitive, brand-aligned, and user-friendly. These aren’t just cosmetic upgrades — each change was made to reduce friction, improve trust, and increase subscriber retention.</p>
          <div className="flex md:flex-row flex-col gap-12 md:gap-14 mt-6 md:mt-14">
            <div className="text-center">
              <div className="relative border border-[#11322C] rounded-[10px] overflow-hidden shadow-[0px_15.76px_28.37px_0px_#8F9DAF40] h-max w-full md:w-max mx-auto">
                <Image src={img7} alt="" className="h-[350px] w-full md:w-auto" />
              </div>
              <p className="mt-6 tracking-[0.04rem]">We redesigned the subscription card to highlight key info and actions like “Get Now” and “Edit Products.” Secondary options like “Pause” and “Cancel” are tucked into a “More” menu, making the layout cleaner and easier to navigate.</p>
            </div>
            <div className="text-center">
              <div className="border border-[#11322C] rounded-[10px] overflow-hidden shadow-[0px_15.76px_28.37px_0px_#8F9DAF40] h-max w-max mx-auto">
                <Image src={img8} alt="" className="h-[350px] w-auto" />
              </div>
              <p className="mt-6 tracking-[0.04rem]">The upsell area now feels intentional and brand-aligned. A friendlier label — “Add Something You’ll Love” — replaces generic suggestions. Layout is tighter, actions are clearer, and it all fits seamlessly within the flow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto flex md:flex-row flex-col items-center gap-6 md:gap-10 py-8 md:py-10 px-4 md:px-0">
          <div className="flex-1">
            <h3 className="text-text-dark font-medium text-2xl mb-4 capitalize">Edit Products Modal</h3>
            <p className="text-text-dark tracking-[0.04rem] leading-[1.6]"> Editing a subscription is now safer and more intuitive. Users can make changes without fear of losing progress. A “Back” button lets them return from nested modals, and if they try to close mid-edit, we ask for confirmation. This gives users more control — especially when editing multiple items.</p>
          </div>
          <div className="border border-[#11322C] rounded-[10px] overflow-hidden shadow-[0px_15.76px_28.37px_0px_#8F9DAF40] md:w-[50%]">
            <Image src={img9} alt="" className="size-full" />
          </div>
        </div>
      </section>

      <section className="bg-background-muted">
        <div className="container mx-auto flex md:flex-row flex-col-reverse items-center gap-6 md:gap-10 py-8 md:py-10 md:px-0 px-4">
          <div className="md:w-[50%]">
            <Image src={img10} alt="" className="size-full" />
          </div>
          <div className="flex-1 text-text-dark">
            <h3 className="font-medium text-2xl mb-4 capitalize">Cancel Flow</h3>
            <p className="tracking-[0.04rem] leading-[1.6]">We replaced Skio’s rigid cancel path with a flow that’s softer and more adaptive. Users see options that match their reason for leaving — like pausing, skipping, or switching products — all delivered in a conversational tone. It reframes cancellation as a choice, not a dead end.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto py-8 md:py-16 px-4 md:px-0 space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="uppercase text-text-dark text-2xl md:text-[32px] font-medium">Outcome</h2>
            <p className="text-text-light tracking-[0.04rem] leading-[1.6]">The results didn’t happen by chance. Before we could <span className="text-text-dark font-medium">redesign the subscription flow,</span> we had to understand <span className="text-text-dark font-medium">why users were struggling</span> in the first place. That meant looking closely at <span className="text-text-dark font-medium">Skio’s current experience</span> — the <span className="text-text-dark font-medium">layout,</span> the <span className="text-text-dark font-medium">tone,</span> the <span className="text-text-dark font-medium">flow</span> — and identifying where it created <span className="text-text-dark font-medium">confusion,</span> pressure, or <span className="text-text-dark font-medium">missed opportunities.</span> What we found <span className="text-text-dark font-medium">shaped every decision that followed.</span></p>
          </div>

          <div className="border border-border rounded-3xl p-6 flex md:flex-row flex-col">
            <div>
              <div className="bg-primary/5 py-2 px-4 mb-4 rounded-[8px] leading-[1.5]">
                <h3 className="text-[28px] font-medium leading-8">23%<br/><span className="font-normal text-xl">reduction in churn</span></h3>
              </div>
              <p className="text-text-light tracking-[0.04rem] leading-[1.6]">More users chose to <span className="text-text-dark font-medium">skip</span> or <span className="text-text-dark font-medium">pause</span> instead of cancel, thanks to <span className="text-text-dark font-medium">clearer paths</span> and <span className="text-text-dark font-medium">softer decision points.</span></p>
            </div>
            <div className="my-[28px] md:mx-8 relative after:content-[''] after:absolute after:left-0 after:right-0 md:after:top-0 md:after:bottom-0 after:h-[1px] md:after:h-full after:w-full md:after:w-[1px] after:bg-border" />
            <div>
              <div className="bg-primary/5 py-2 px-4 mb-4 rounded-[8px] leading-[1.5]">
                <h3 className="text-[28px] font-medium leading-8">31%<br/><span className="font-normal text-xl">increase in product swaps</span></h3>
              </div>
              <p className="text-text-light tracking-[0.04rem] leading-[1.6]">Key actions like <span className="text-text-dark font-medium">“Edit,” “Add Product,”</span> and <span className="text-text-dark font-medium">“Swap”</span> saw higher interaction rates, driven by a <span className="text-text-dark font-medium">cleaner layout</span> and <span className="text-text-dark font-medium">persistent CTAs.</span></p>
            </div>
            <div className="my-[28px] md:mx-8 relative after:content-[''] after:absolute after:left-0 after:right-0 md:after:top-0 md:after:bottom-0 after:h-[1px] md:after:h-full after:w-full md:after:w-[1px] after:bg-border" />
            <div>
              <div className="bg-primary/5 py-2 px-4 mb-4 rounded-[8px] leading-[1.5]">
                <h3 className="text-[28px] font-medium leading-8">5x<br/><span className="font-normal text-xl">fewer support tickets</span></h3>
              </div>
              <p className="text-text-light tracking-[0.04rem] leading-[1.6]">With <span className="text-text-dark font-medium">more intuitive flows</span> and <span className="text-text-dark font-medium">in-context help</span> users needed less hand-holding <span className="text-text-dark font-medium">— reducing pressure</span> on the CX team.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="uppercase text-text-dark text-2xl md:text-[32px] font-medium">TAKEAWAYS</h2>
            <p className="text-text-dark tracking-[0.04rem] leading-[1.6]">A better subscription experience isn’t just about managing logistics — it’s about building trust. When users feel understood and in control, they’re far more likely to stay. The right design decisions — from tone to timing — turn friction into loyalty, and churn into retention.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}