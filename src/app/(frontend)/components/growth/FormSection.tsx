'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import CalendlyPopup from './CalendlyPopup';
import CTASection from '../shared/CTASection';

interface FormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  budgetFrom: string;
  budgetTo: string;
  additionalInfo: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  websiteUrl?: string;
  budgetFrom?: string;
  budgetTo?: string;
}

export default function FormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    websiteUrl: '',
    budgetFrom: '',
    budgetTo: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const isFormComplete = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.websiteUrl.trim() !== '' &&
      formData.budgetFrom.trim() !== '' &&
      formData.budgetTo.trim() !== '' 
    );
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = 'Website URL is required';
    } else if (!formData.websiteUrl.includes('.')) {
      newErrors.websiteUrl = 'Please enter a valid website URL';
    }

    if (!formData.budgetFrom.trim() || !formData.budgetTo.trim()) {
      newErrors.budgetFrom = 'Budget range is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/growth-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          websiteUrl: '',
          budgetFrom: '',
          budgetTo: '',
          additionalInfo: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="growthReportForm" className="bg-background-muted md:py-10">
      <div className="container mx-auto px-0 tracking-[0.04rem] leading-[1.5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:rounded-3xl overflow-hidden md:border md:border-border">
          
          <div className="bg-primary text-white px-4 py-6 md:p-16 flex flex-col">
            <h2 className="text-[32px] md:text-4xl font-bold mb-2 md:mb-6 leading-[1.2]">
              Ready to grow your<br />
              Shopify store?
            </h2>
            
            <p className="mb-6 md:mb-8">
              Complete this form to receive your personalized growth report within 3 business days.
            </p>

            <div>
              <h6 className="font-medium mb-6">What clients say:</h6>
              <div className="border-l-2 border-white/50 pl-6">
                <blockquote className="mb-4">
                  "Shashi and his team have genuinely been a catalyst for our business. When we started working with them, our conversion rate sat at 2.5%. And after doing CRO and development work on our website for the last two years. It now sits at 5%. I can genuinely say they are a fantastic partner and will help transform your e-commerce business."
                </blockquote>
                <p >
                  — Jack Rubin, Co-Founder, Purdy & Figg
                </p>
              </div>
            </div>

            <div className="text-white flex-1 content-end mt-8">
              <p className="mb-2">Not sure a report is right for you?</p>
              <p>
                You can always{' '}
                <button 
                  className="underline hover:no-underline font-medium underline-offset-4 cursor-pointer"
                  onClick={handleOpenPopup}
                >
                  schedule a quick call
                </button>
                {' '}to talk things through.
              </p>
            </div>
          </div>

          <div className="bg-white px-4 py-6 md:p-16">
            <h3 className="text-2xl md:text-[32px] font-medium text-text-dark mb-6 leading-[1.2]">
              Request Your<br />
              Free Growth Report
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 tracking-[0.04rem]">
              <div>
                <label htmlFor="fullName" className="block text-text-dark  mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  className={`w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-text-dark  mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="websiteUrl" className="block text-text-dark  mb-2">
                  Current Website URL
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  placeholder="https://yourstore.com"
                  className={`w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                    errors.websiteUrl ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.websiteUrl && (
                  <p className="text-red-500 text-sm mt-1">{errors.websiteUrl}</p>
                )}
              </div>

              <div>
                <label className="block text-text-dark  mb-2">
                  Budget
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E2E2E]">$</span>
                    <input
                      type="number"
                      name="budgetFrom"
                      value={formData.budgetFrom}
                      onChange={handleInputChange}
                      placeholder="0"
                      className={`w-full pl-[27px] pr-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                        errors.budgetFrom ? 'border-red-500' : 'border-border'
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E2E2E]">$</span>
                    <input
                      type="number"
                      name="budgetTo"
                      value={formData.budgetTo}
                      onChange={handleInputChange}
                      placeholder="0"
                      className={`w-full pl-[27px] pr-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                        errors.budgetFrom ? 'border-red-500' : 'border-border'
                      }`}
                    />
                  </div>
                </div>
                {errors.budgetFrom && (
                  <p className="text-red-500 text-sm mt-1">{errors.budgetFrom}</p>
                )}
              </div>

              <div className='mb-6'>
                <label htmlFor="additionalInfo" className="block text-text-dark mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your specific goals, challenges or anything that we should keep in mind while preparing the report."
                  className="w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-text-light/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full ${isSubmitting || !isFormComplete() ? 'opacity-30' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Growth Report'}
                {!isSubmitting && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="size-5 mt-[1px]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 12h19m-6-6l6 6-6 6" 
                    />
                  </svg>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <CalendlyPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        calendlyComponent={<CTASection />}
      />
    </section>
  );
}