import React from 'react';
import CalendlyEmbed from './CalendlyEmbed';

export default function CTASection() {
  return (
      <div id="calendar" className='px-0 py-8 md:py-0 bg-white'>
        <CalendlyEmbed className="calendly-inline-widget overflow-hidden rounded-2xl md:rounded-[32px] h-[700px] min-w-[320px]" url="https://calendly.com/valardigital/30min?hide_landing_page_details=1&hide_gdpr_banner=1"/>
    </div>
  );
}