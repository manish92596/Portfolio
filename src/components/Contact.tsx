import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".contact-element", { opacity: 0, y: 30 });

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }).to(".contact-element", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      await emailjs.sendForm(
        'service_jom15fp',
        'template_7fongcn',
        formRef.current,
        'aDie60ttRp4IRHLJq'
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={containerRef} className="py-20 bg-[#030014]">
      <div className="max-w-2xl px-4 mx-auto">
        <div className="mb-16 text-center contact-element">
          <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </div>

        <div className="contact-element">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 border rounded-lg bg-white/5 border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 border rounded-lg bg-white/5 border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 border rounded-lg resize-none bg-white/5 border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`group w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 rounded-lg font-semibold relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <div className="absolute inset-0 transition-transform duration-300 transform translate-y-full bg-white/10 group-hover:translate-y-0" />
              <div className="relative flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Error Sending</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}