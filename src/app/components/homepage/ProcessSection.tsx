"use client"

import React, { useEffect, useState } from 'react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: '01',
      title: 'Strategy & Planning',
      description: 'We align around your goals and stack from tech choices to customer journey mapping.'
    },
    {
      number: '02',
      title: 'Shopify Plus Development',
      description: 'High-performance builds tailored for growth, with clean code and custom integrations.'
    },
    {
      number: '03',
      title: 'Automation & AI Integration',
      description: 'Smarter systems that reduce friction, save time, and increase operational efficiency.'
    },
    {
      number: '04',
      title: 'Conversion Optimization',
      description: 'CRO-focused design and testing that turns visitors into high-value customers.'
    },
    {
      number: '05',
      title: 'Continuous Growth',
      description: 'We stay embedded - helping you iterate, scale, and stay ahead of the curve.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('process-section');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const startProgress = sectionTop - windowHeight * 0.5;
      const endProgress = sectionTop + sectionHeight - windowHeight * 0.5;
      const progress = Math.max(0, Math.min(1, (scrollY - startProgress) / (endProgress - startProgress)));

      const stepProgress = progress * processSteps.length;
      const newActiveStep = Math.min(Math.floor(stepProgress), processSteps.length - 1);
      
      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process-section" className="py-8 md:py-10 bg-background-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem] text-center md:text-left">
              HOW WE DELIVER
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium text-text-dark leading-[1.2] mb-4 md:mb-6 text-center md:text-left">
              A Proven Process.
              <br />
              Built for Growth.
            </h2>
            <p className="text-text-dark tracking-[0.04rem] text-center md:text-left">
              Our process combines structure and speed, supporting you from strategy to scale with clear communication, focused execution, and room to adapt as you grow.
            </p>
          </div>

          {/* Right Side - Process Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-5 top-0 w-1 h-[90%] bg-border z-20">
              <div 
                className="w-full bg-primary transition-all duration-500 ease-out"
                style={{ 
                  height: `${((activeStep + 1) / processSteps.length) * 100}%`
                }}
              />
            </div>

            {/* Process Steps */}
            <div className="flex flex-col gap-25 md:gap-37">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Step Number Circle */}
                  <div className="relative z-40 flex-shrink-0">
                    <div 
                      className={`
                        w-11 h-11 rounded-full border flex items-center justify-center bg-white font-medium border-primary/10 transition-all duration-500
                        ${index <= activeStep 
                          ? 'text-primary' 
                          : 'text-text-dark'
                        }
                      `}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pb-8 text-text-dark last:pb-0">
                    <h3 
                      className="text-2xl font-medium mb-2 text-text-dark">
                      {step.title}
                    </h3>
                    <p className="leading-[1.5] tracking-[0.04rem]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;