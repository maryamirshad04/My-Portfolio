'use client';
import { useState } from 'react';
import { MailIcon, PhoneIcon } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message');
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 mb-8"></div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-md border shadow-sm w-full md:w-1/2">
          <MailIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
          <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            maryambajwa1611@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-md border shadow-sm w-full md:w-1/2">
          <PhoneIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
          <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">+92 *** *******</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required
              className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required
              className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Message
            </label>
            <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required
              className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
              Send Message
            </button>
          </div>

          {status && <p className="text-center mt-4 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}
