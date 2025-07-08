import Image from 'next/image';

const tools = [
  { src: '/images/gorgias.png', alt: 'Gorgias' },
  { src: '/images/skio.png', alt: 'Skio' },
  { src: '/images/okendo.png', alt: 'Okendo' },
  { src: '/images/klavio.png', alt: 'Klaviyo' },
  { src: '/images/rebuy.png', alt: 'Rebuy' },
  { src: '/images/logoipsum.png', alt: 'Logoipsum' },
];

const TrustedTools = () => {
  return (
    <div className="bg-[#fafbfe] py-4">
      <section className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-[2rem] shadow-sm text-center">
        {/* Section Header */}
        <p className="text-blue-600 text-sm font-semibold uppercase mb-2">Tools we work with</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-snug">
          Trusted Technologies, <br className="sm:hidden" /> Seamlessly Integrated
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          We build with the best using proven tools that power Shopify Plus brands.
        </p>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#EDF2F930] rounded-xl py-8 flex items-center justify-center"
            >
              <Image src={tool.src} alt={tool.alt} width={100} height={32} className="h-8 w-auto" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrustedTools;
