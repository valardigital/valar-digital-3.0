import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Cookie Policy | Valar Digital',
    description: 'Learn about how Valar Digital uses cookies to improve your browsing experience and website functionality.',
};

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-white pt-16 md:pt-20 text-text-dark">
            <section className="bg-background-muted pt-6 pb-4 md:py-10 md:pb-8">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="text-[28px] md:text-[48px] font-medium mb-2 md:mb-4 tracking-[0.04rem]">
                            Cookie Policy
                        </h1>
                        <p className="text-primary leading-[1.5] italic tracking-[0.04rem] text-center">
                            Clear, simple, and built for mutual respect.
                        </p>
                    </div>
                </div>
            </section>

            <div className="bg-background-muted px-4 md:pb-10 pb-6">
                <div className="container mx-auto rounded-2xl space-y-6 md:space-y-8 px-4 py-6 md:px-14 md:py-10 bg-white border-border">

                    <section className='leading-[1.5] tracking-[0.04rem]'>
                        <h2 className="italic font-medium mb-6 md:mb-8">
                            Effective Date: September 11, 2025
                        </h2>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            1. Introduction
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            Valar Digital ("we," "us," "our," or "Company") operates the website valardigital.com (the "Website"). This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our Website.
                        </p>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            By using our Website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or refrain from using our Website.
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            2. What Are Cookies
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. Cookies are widely used by website owners to make their websites work more efficiently, as well as to provide reporting information.
                        </p>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            Cookies set by the website owner (in this case, Valar Digital) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            3. Types of Cookies We Use
                        </h2>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    3.1 Essential Cookies:
                                </h3>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                                    These cookies are strictly necessary for the operation of our Website. They enable you to navigate around our Website and use its features. Without these cookies, services you have asked for cannot be provided.
                                </p>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2 font-bold">Examples include:</p>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>Session management cookies</li>
                                    <li>Security cookies</li>
                                    <li>Load balancing cookies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    3.2 Performance and Analytics Cookies:
                                </h3>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                                    These cookies collect information about how visitors use our Website, such as which pages are visited most often and if users receive error messages. This information helps us improve how our Website works.
                                </p>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2 font-medium">Examples include:</p>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>Google Analytics cookies</li>
                                    <li>Page load performance cookies</li>
                                    <li>User behavior tracking cookies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    3.3 Functionality Cookies:
                                </h3>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                                    These cookies allow our Website to remember choices you make and provide enhanced, more personalized features. They may set be by us or by third-party providers whose services we have added to our pages.
                                </p>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2 font-bold">Examples include:</p>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>Language preference cookies</li>
                                    <li>Region selection cookies</li>
                                    <li>User interface customization cookies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    3.4 Marketing and Advertising Cookies:
                                </h3>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                                    These cookies are used to deliver advertisements more relevant to you and your interests. They may be used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                                </p>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2 font-bold">Examples include:</p>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>Social media cookies (Facebook, LinkedIn, Twitter)</li>
                                    <li>Advertising networks cookies</li>
                                    <li>Retargeting cookies</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            4. Third-Party Cookies
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our Website, deliver advertisements on and through our Website, and so on. These third-party cookies include:
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li><strong className="font-semibold">Google Analytics:</strong> For website analytics and performance measurement</li>
                                    <li><strong className="font-semibold">Social Media Platforms:</strong> Including but not limited to Facebook, LinkedIn, Twitter for social sharing and advertising</li>
                                    <li><strong className="font-semibold">Customer Support Tools:</strong> For chat and customer service functionality</li>
                                    <li><strong className="font-semibold">Marketing Platforms:</strong> For email marketing, lead generation, and conversion tracking</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            5. How Long Do Cookies Last
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                            The length of time cookies remain on your device depends on whether they are "persistent" or "session" cookies:
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li><strong className="font-semibold">Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser</li>
                                    <li><strong className="font-semibold">Persistent Cookies:</strong> These remain on your device for a set period or until you delete them manually</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                           6. Your Cookie Choices
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                            You have several options for managing cookies:
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    6.1 Browser Settings:
                                </h3>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                                    Most web browsers allow you to control cookies through their settings preferences. You can set your browser to:
                                </p>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>Accept all cookies</li>
                                    <li>Accept only first-party cookies</li>
                                    <li>Reject all cookies</li>
                                    <li>Notify you before a cookie is set</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    6.2 Opt-Out Tools:
                                </h3>
                                <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                                    You can also opt out of certain cookies using these tools:
                                </p>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li><strong className="font-semibold">Google Analytics:</strong> Use the Google Analytics Opt-out Browser Add-on</li>
                                    <li><strong className="font-semibold">Advertising Cookies:</strong> Visit the Digital Advertising Alliance opt-out page</li>
                                    <li><strong className="font-semibold">Social Media Cookies:</strong> Adjust settings directly in your social media accounts</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    6.3 Website Cookie Preferences:
                                </h3>
                                <p className="leading-[1.5] tracking-[0.04rem]">
                                    When available, you can manage your cookie preferences through our cookie consent banner or privacy settings on our Website.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            7. Consequences of Disabling Cookies
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            Please note that if you choose to block or delete cookies, some features of our Website may not function properly or may become inaccessible. This may affect your user experience and our ability to provide certain services.
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            8. Updates to This Cookie Policy
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                            We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the updated Cookie Policy on our Website and update the "Last Updated" date.
                        </p>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            9. Contact Information
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem] mb-4">
                            If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                        </p>

                        <div className="leading-[1.5] tracking-[0.04rem]">
                            <div>
                                <h4 className="font-bold text-primary">
                                    Valar Digital
                                </h4>
                                <p>
                                    Email: <Link
                                        href="mailto:hello@valardigital.com"
                                        className="text-primary underline decoration-[0.8px] underline-offset-4"
                                    >
                                        hello@valardigital.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            10. Legal Compliance
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem] mb-2">
                            This Cookie Policy is designed to comply with applicable privacy laws, including:
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>General Data Protection Regulation (GDPR)</li>
                                    <li>California Consumer Privacy Act (CCPA)</li>
                                    <li>Other applicable data protection and privacy laws</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            11. Consent
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            By continuing to use our Website, you acknowledge that you have read and understand this Cookie Policy and consent to our use of cookies as described herein.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}