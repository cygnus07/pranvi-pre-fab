// components/ContactForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  recaptchaToken: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  recaptcha?: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<Omit<FormData, 'recaptchaToken'>>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Validate individual field on blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name as keyof FormData, value);
  };

  const validateField = (fieldName: keyof FormData, value: string) => {
    let error = '';
    
    switch (fieldName) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone is required';
        } else if (!/^[0-9]{10}$/.test(value)) {
          error = 'Invalid phone number (10 digits required)';
        }
        break;
      case 'subject':
        if (!value.trim()) error = 'Subject is required';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
    }

    setErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate all fields
    validateField('name', formData.name);
    validateField('email', formData.email);
    validateField('phone', formData.phone);
    validateField('subject', formData.subject);
    validateField('message', formData.message);

    // Validate reCAPTCHA in production
    if (process.env.NODE_ENV === 'production' && !recaptchaToken) {
      newErrors.recaptcha = 'Please verify you are not a robot';
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.values(newErrors).every(error => !error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const submissionData = {
        ...formData,
        recaptchaToken: process.env.NODE_ENV === 'production' ? recaptchaToken : 'dev-mode'
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setRecaptchaToken(''); // Reset reCAPTCHA after successful submission
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Refresh reCAPTCHA token periodically
  useEffect(() => {
    if (recaptchaLoaded) {
      const timer = setInterval(() => {
        setRecaptchaToken(''); // Force reCAPTCHA refresh
      }, 120000); // Refresh every 2 minutes

      return () => clearInterval(timer);
    }
  }, [recaptchaLoaded]);

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-600">
          Your message has been sent successfully. We'll contact you shortly.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setRecaptchaToken('');
          }}
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isSubmitting}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            disabled={isSubmitting}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isSubmitting}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isSubmitting}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
        <div className="mb-4">
          <GoogleReCaptcha 
            onVerify={(token) => {
              setRecaptchaToken(token);
              if (errors.recaptcha) {
                setErrors(prev => ({ ...prev, recaptcha: undefined }));
              }
            }}
            action="contact"
            refreshReCaptcha={!recaptchaToken}
            onLoad={() => setRecaptchaLoaded(true)}
          />
          {errors.recaptcha && (
            <p className="mt-1 text-sm text-red-600">{errors.recaptcha}</p>
          )}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting || (process.env.NODE_ENV === 'production' && !recaptchaToken)}
          className={`w-full bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${
            isSubmitting ? 'opacity-75' : 'hover:bg-blue-900'
          } ${
            process.env.NODE_ENV === 'production' && !recaptchaToken ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;