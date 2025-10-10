'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  websiteUrl?: string;
}

export default function FormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormComplete = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.company.trim() !== '' &&
      formData.subject.trim() !== ''
    );
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
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
      // Submit to contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
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
    <section id="contactForm">
      <div className="px-0 tracking-[0.04rem] leading-[1.5]">
        <h3 className="text-[28px] md:text-[32px] font-medium text-text-dark leading-[1.2]">
          Got something on your mind?
        </h3>
        <p className='mt-2 mb-6 md:my-6 tracking-[0.04rem] text-text-dark leading-[1.7]'>You can email us directly at <span className='font-bold text-primary'>hello@valardigital.com</span><br />
          or use the form below to reach out.<br />
          Either way, we’ll make sure to get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-4 tracking-[0.04rem]">
          <div>
            <label htmlFor="name" className="block text-text-dark  mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className={`w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.name ? 'border-red-500' : 'border-border'
                }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-text-dark  mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className={`w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.email ? 'border-red-500' : 'border-border'
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-text-dark  mb-2">
              Company / Organization (optional)
            </label>
            <input
              type="company"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              className={`w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.company ? 'border-red-500' : 'border-border'
                }`}
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-text-dark  mb-2">
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What’s this about?"
              className={`w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-[#A4B3CD] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.subject ? 'border-red-500' : 'border-border'
                }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div className='mb-6'>
            <label htmlFor="message" className="block text-text-dark mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Tell us about your project, question, or idea…"
              className="w-full px-3 py-[13px] border border-[#D7E2EB] rounded-[8px] text-text-dark placeholder:text-text-light/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !isFormComplete()}
            className={`w-full transition-opacity duration-200 ${!isFormComplete() || isSubmitting ? 'opacity-30' : 'opacity-100'
              }`}
          >
            {isSubmitting ? 'Submitting...' : 'Get in Touch'}
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
    </section>
  );
}