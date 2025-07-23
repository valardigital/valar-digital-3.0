import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#f4f7fb] text-gray-800 rounded-2xl max-w-7xl mx-auto p-10 mb-2 mt-4">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand and CTA */}
        <div className="md:col-span-1">
          <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
            </Link>
          <p className="text-sm text-gray-600 mb-6 mt-4">
            From custom builds to conversion strategy, we help ambitious ecommerce brands turn
            complexity into growth, and scale with confidence.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-md text-sm font-semibold"
          >
            Grow Your Business
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-blue-700 font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Works</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
            <li><Link href="#" className="hover:underline">Blogs</Link></li>
            <li><Link href="#" className="hover:underline">Our Team</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="md:col-span-2">
          <h4 className="text-blue-700 font-medium mb-3">Services</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm">
            {[
              'Shopify Design',
              'Ecommerce Audit',
              'Shopify Development',
              'Conversion Rate Optimization',
              'Shopify Apps',
              'Integration Services',
              'Shopify Migration',
              'Creative-and-Branding',
              'Shopify Marketing',
              'Headless Commerce',
            ].map((service, i) => (
              <Link key={i} href="#" className="hover:underline">
                {service}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>Copyright © 2025</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <span className="text-gray-400">|</span>
          <Link href="#" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
