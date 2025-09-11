import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Privacy Policy | Valar Digital',
    description: 'Learn how Valar Digital collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white pt-16 md:pt-20 text-text-dark">
            <section className="bg-background-muted pt-6 pb-4 md:py-10 md:pb-8">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="text-[28px] md:text-[48px] font-medium mb-2 md:mb-4 tracking-[0.04rem]">
                            Privacy Policy
                        </h1>
                        <p className="text-primary leading-[1.5] italic tracking-[0.04rem] text-center">
                            We take privacy seriously — yours, ours,<br className='md:hidden block'/> and everyone else’s.
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
                        <p className="mb-4">
                            This privacy policy explains how Valar Digital uses and protects any information that you provide when you use our website (valardigital.com) or engage with our e-commerce development services
                        </p>
                        <p className="mb-4">Valar Digital is committed to ensuring your privacy is protected. When we ask you to provide information by which you can be identified, it will only be used in accordance with this privacy statement</p>
                        <p>We may update this privacy policy from time to time by making changes to this page. Please check this page periodically to ensure you are aware of any updates.</p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Information We Collect
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            We may collect the following information:
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Personal Information:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>
                                        Your name and contact information including email address and phone number
                                    </li>
                                    <li>
                                        Business information, including company name and designation
                                    </li>
                                    <li>
                                        Demographic information including location, preferences and interests
                                    </li>
                                    <li>
                                        Payment and billing information for service transactions
                                    </li>
                                    <li>
                                        Communication records and correspondence
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Technical Information:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>
                                        IP address and location data
                                    </li>
                                    <li>
                                        Browser type and version
                                    </li>
                                    <li>
                                        Pages visited and time spent on our website
                                    </li>
                                    <li>
                                        Referral sources and navigation patterns
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            How We Use This Information
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            We collect information to understand your requirements and provide better e-commerce development services. We may use your data for the following purposes:
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Service Delivery:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>
                                        To provide you with e-commerce development services
                                    </li>
                                    <li>
                                        To process and manage client accounts
                                    </li>
                                    <li>
                                        To deliver project milestones and technical support
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold  mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Business Operations:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>
                                        For our internal records and business operations
                                    </li>
                                    <li>
                                        To improve our products, services and website functionality
                                    </li>
                                    <li>
                                        To customize the website according to your interests
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold  mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Marketing Communications:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>
                                        To send promotional emails about our services, offers and updates we think might interest you
                                    </li>
                                    <li>
                                        To contact you via email, phone or mail for market research purposes
                                    </li>
                                    <li>
                                        To provide relevant content and service recommendations
                                    </li>
                                </ul>
                            </div>
                            <p className='tracking-[0.04rem]'>You can opt-out of marketing communications at any time by following unsubscribe instructions or contacting us directly.</p>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Our Use of Cookies
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            Cookies are small files placed on your computer's hard drive that help websites remember your preferences and improve your browsing experience. Most websites use cookies to enhance functionality.
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    We use cookies to:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>
                                        Analyze web traffic using analytics tools to improve our website structure and content
                                    </li>
                                    <li>
                                        Test different content versions to optimize user experience
                                    </li>
                                    <li>
                                        Store information about your preferences to show more relevant content
                                    </li>
                                    <li>
                                        Recognize when you return to our website and provide personalized functionality
                                    </li>
                                    <li>Ensure website security and prevent fraud</li>
                                </ul>
                            </div>

                            <p className="text-base mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]"><span className='font-bold'>Managing Cookies:</span> You can control cookies through your browser settings, though this may affect some website features. Cookies do not give us access to your computer or personal information beyond what you choose to share.</p>

                            <p>For more information about cookies, visit <Link href="#" className="text-primary underline decoration-[0.8px] underline-offset-4">All About Cookies</Link>.</p>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Information Sharing
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            <span className='font-bold'>We do not sell, distribute or lease your personal information to third parties</span> unless we have your permission or are required by law.
                        </p>

                        <p>We may share information with:</p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Service Providers:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>Payment processors and financial service providers</li>
                                    <li>Cloud hosting and data storage services</li>
                                    <li>Analytics and marketing tools</li>
                                    <li>Communication platforms and project management tools</li>
                                    <li>Technical support and maintenance providers</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Legal Requirements:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>When required by Indian law or legal proceedings</li>
                                    <li>To protect our rights, property, or safety</li>
                                    <li>In response to government investigations or court orders</li>
                                    <li>For compliance with regulatory obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2 md:mb-3 tracking-[0.04rem] leading-[1.5]">
                                    Business Transfers:
                                </h3>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>In connection with mergers, acquisitions, or sale of assets (with appropriate safeguards)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Data Security and Retention
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            We implement appropriate technical and organizational security measures to protect your information, including:
                        </p>

                        <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                            <li>
                                Encryption of sensitive data
                            </li>
                            <li>
                                Secure access controls and authentication
                            </li>
                            <li>
                                Regular security audits and assessments
                            </li>
                            <li>
                                Staff training on data protection
                            </li>
                        </ul>

                        <p className="leading-[1.5] tracking-[0.04rem]">
                            We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. When information is no longer needed, we securely delete or anonymize it.
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Your Rights
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                            Under Indian privacy laws, including the Information Technology Act, 2000, you have the right to:
                        </p>

                        <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                            <li>
                                <strong className="font-semibold">Access:</strong> Request details of personal information we hold about you
                            </li>
                            <li>
                                <strong className="font-semibold">Correction:</strong> Ask us to correct inaccurate or incomplete information
                            </li>
                            <li>
                                <strong className="font-semibold">Deletion:</strong> Request deletion of your personal information
                            </li>
                            <li>
                                <strong className="font-semibold">Opt-out:</strong> Unsubscribe from marketing communications
                            </li>
                        <li>
                                <strong className="font-semibold">Data Portability:</strong> Request a copy of your information in a portable format
                            </li>
                        </ul>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Links to Other Websites
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                           Our website may contain links to other websites outside the valardigital.com domain. We have no control over these external websites and are not responsible for their protection and privacy policies. Always review the privacy policies of websites before providing any information.
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            International Data Transfers
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                          If we transfer your information outside India, we ensure appropriate safeguards are in place through standard contractual clauses, adequacy decisions, or your explicit consent.
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Children's Privacy
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                          Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
                        </p>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-2xl lg:text-[28px] font-medium tracking-[0.04rem] leading-[1.5]">
                            Contact Us
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                           If you have questions about this privacy policy or how we handle your information, please contact us:
                        </p>

                            <div className="leading-[1.5] tracking-[0.04rem]">
                                <div>
                                    <h4 className="font-bold text-primary">
                                        Valar Digital
                                    </h4>
                                    <p >
                                        Email: <Link
                                            href="mailto:hello@valardigital.com"
                                            className="text-primary underline decoration-[0.8px] underline-offset-4"
                                        >
                                            hello@valardigital.com
                                        </Link>
                                    </p>
                                    <p>Address: Nyati Enthral, Pune, Maharashtra, India</p>
                                </div>
                            </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-2xl lg:text-[28px] font-medium tracking-[0.04rem] leading-[1.5]">
                            Governing Law
                        </h2>
                        <p className=" text-sm md:text-base leading-[1.5] tracking-[0.04rem]">
                           This privacy policy is governed by Indian law, and any disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra, India.
                        </p>

                            <div className="space-y-3 md:space-y-4 tracking-[0.04rem]">
                                <div>
                                    <h4 className="font-bold text-primary">
                                        Valar Digital
                                    </h4>
                                    <p className=" text-sm md:text-base leading-relaxed tracking-[0.035rem] md:tracking-[0.04rem]">
                                        Email: <Link
                                            href="mailto:hello@valardigital.com"
                                            className="text-primary underline decoration-[0.8px] underline-offset-4"
                                        >
                                            hello@valardigital.com
                                        </Link>
                                    </p>
                                    <p>Address: Nyati Enthral, Pune, Maharashtra, India</p>
                                </div>
                            </div>
                    </section>

                    <section className='space-y-3 md:space-y-4'>
                        <h2 className="text-xl md:text-[28px] font-medium tracking-[0.05rem] md:tracking-[0.07rem] leading-[1.5]">
                            Compliance
                        </h2>
                        <p className="leading-[1.5] tracking-[0.04rem]">
                           This policy complies with applicable Indian laws including:
                        </p>

                        <div className="space-y-4 md:space-y-4">
                            <div>
                                <ul className="list-disc list-outside space-y-1.5 md:space-y-2 ml-2 md:ml-4 leading-[1.5] tracking-[0.04rem] pl-1">
                                    <li>
                                       Information Technology Act, 2000
                                    </li>
                                    <li>
                                        Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
                                    </li>
                                    <li>
                                        Indian Contract Act, 1872
                                    </li>
                                </ul>
                            </div>

                            <p className="tracking-[0.04rem] leading-[1.5]">We monitor evolving data protection regulations and update our practices accordingly.</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}