/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Container, 
  Truck, 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight,
  Clock,
  CheckCircle2,
  ArrowRight,
  Globe
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-red p-1.5 rounded-lg">
            <Container className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-tight",
            isScrolled ? "text-brand-blue" : "text-white"
          )}>
            SHREE DURGA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-brand-blue" : "text-white"} /> : <Menu className={isScrolled ? "text-brand-blue" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 font-medium py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=2000" 
          alt="Container Crane Operation" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Established 2017</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            SHREE DURGA <br />
            <span className="text-brand-red">EMPTY PARK</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Premier Container Storage Yard and Repairing Services. Providing world-class logistics solutions with 10+ years of industry expertise.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="bg-brand-red text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-red-700 transition-all group"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-red/5 blur-3xl rounded-full -mr-20 -mb-20" />
    </section>
  );
};

const About = () => {
  const values = [
    { title: "Reliability", description: "Consistent performance and dependable service delivery in every operation." },
    { title: "Integrity", description: "Transparent business practices and ethical conduct at all levels." },
    { title: "Customer First", description: "Tailored solutions designed to meet and exceed client expectations." },
    { title: "Excellence", description: "Striving for the highest standards in container repair and logistics." }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
                alt="Container Vessel - Shree Durga Empty Park" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-blue text-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm text-blue-200 font-medium">Years of Industry<br />Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6 leading-tight">
              A Legacy of Excellence in Container Logistics
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              SHREE DURGA EMPTY PARK is a 100% privately-owned business established in July 2017 by Mr. Shivkumar B. Pillai. 
              Our journey began with a vision to revolutionize the container depot industry in India. With over 10 years of collective experience, we have mastered the art of efficient container handling.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We emphasize reliability and customer satisfaction above all else. Our team of experts is trained to handle complex logistics challenges, ensuring that your cargo is always in safe hands.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <CheckCircle2 className="text-brand-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Privately Owned</h4>
                  <p className="text-xs text-slate-500">100% Dedicated Service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-50 p-2 rounded-lg">
                  <Globe className="text-brand-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Pan-India Reach</h4>
                  <p className="text-xs text-slate-500">Seamless Coordination</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="bg-brand-blue p-8 rounded-3xl text-white h-full">
              <h4 className="text-2xl font-bold mb-6">Our Mission</h4>
              <p className="text-blue-100 leading-relaxed">
                To be the most reliable and efficient container service provider in India, offering world-class handling, storage, and repair solutions that empower global trade.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-2xl font-bold text-brand-blue mb-8">Our Core Values</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="w-1 h-12 bg-brand-red rounded-full flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">{value.title}</h5>
                    <p className="text-sm text-slate-600">{value.description}</p>
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

const Services = () => {
  const services = [
    {
      title: "Container Storage",
      description: "Secure, high-capacity storage yards in Mundra and Kandla with 24/7 surveillance and efficient stacking.",
      icon: Container,
      color: "bg-blue-600"
    },
    {
      title: "Container Repairs",
      description: "Intricate structural repairs, modifications, and electrical work to IICL standards by certified technicians.",
      icon: Wrench,
      color: "bg-slate-800"
    },
    {
      title: "Container Cleaning",
      description: "Professional high-pressure cleaning and chemical washing to ensure containers are food-grade ready.",
      icon: CheckCircle2,
      color: "bg-green-600"
    },
    {
      title: "Logistics & Transport",
      description: "Seamless movement of containers between ports and depots using our fleet of 30+ specialized trailers.",
      icon: Truck,
      color: "bg-red-600"
    },
    {
      title: "Container Inspections",
      description: "Detailed three-way grading by IICL5 certified inspectors with real-time digital photo reporting.",
      icon: ShieldCheck,
      color: "bg-orange-600"
    },
    {
      title: "EDI Reporting",
      description: "Advanced Electronic Data Interchange for daily reporting, ensuring transparency and real-time updates.",
      icon: Globe,
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-brand-blue mb-6">Comprehensive Container Solutions</h3>
          <p className="text-slate-600">
            We deliver end-to-end container logistics solutions with reliable operations and superior service standards. Our facilities are equipped to handle all your depot needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-all", service.color)}>
                <motion.div
                  whileHover={{ 
                    scale: [1, 1.2, 1.1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                >
                  <service.icon className="w-7 h-7" />
                </motion.div>
              </div>
              <h4 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-brand-red font-bold text-sm cursor-pointer group/link">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const facilities = [
    {
      location: "Mundra Facility",
      details: "Situated 7 km from Mundra port. Total area of 06 acres. Fully covered RCC wall with high-quality repair facility.",
      stats: ["06 Acres", "7km from Port", "RCC Wall"],
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000",
      mapLink: "https://www.google.com/maps/place/SHREE+DURGA+EMPTY+PARK/@22.8136906,69.671999,17z"
    },
    {
      location: "Kandla Facility",
      details: "Situated at Kandla, 7 km from Kict Terminal. Total area of 06 acres with complete handling equipment.",
      stats: ["06 Acres", "7km from Kict", "Full Equipment"],
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000",
      mapLink: "https://www.google.com/maps/place/Sree+Durga+Empty+Park/@23.0283663,70.1454215,17z"
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Our Portfolio</h2>
            <h3 className="text-4xl font-bold text-brand-blue">Strategic Locations & Facilities</h3>
          </div>
          <div className="flex gap-4">
            <div className="bg-slate-100 px-4 py-2 rounded-lg flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700">24/7 Operations</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.location}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={facility.image} 
                  alt={facility.location} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue">
                  {facility.location}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-brand-blue mb-4">{facility.location}</h4>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {facility.details}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {facility.stats.map(stat => (
                  <span key={stat} className="bg-slate-50 border border-slate-100 px-3 py-1 rounded-md text-xs font-semibold text-slate-600">
                    {stat}
                  </span>
                ))}
              </div>
              <a 
                href={facility.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-red font-bold text-sm hover:underline"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </motion.div>
          ))}
        </div>

        {/* Equipment Section */}
        <div className="mt-20 bg-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">Handling Power</h5>
              <p className="text-xl font-bold">3 Handling equipment with capacity to stack up to 3 high.</p>
            </div>
            <div>
              <h5 className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">Transportation</h5>
              <p className="text-xl font-bold">10 Owned trailers + 20 Sub-contracted trailers for port evacuation.</p>
            </div>
            <div>
              <h5 className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">Technology</h5>
              <p className="text-xl font-bold">EDI facility for daily reporting and real-time photo documentation.</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('sent');
        e.currentTarget.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('idle');
      alert('Failed to send message. Please try again or contact us directly via email.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <div>
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-brand-blue mb-8">Get in Touch</h3>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Call Us</p>
                  <p className="font-bold text-slate-900">+91 9426965641</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Email Us</p>
                  <p className="font-bold text-slate-900 text-sm">siva@shreedurgaemptypark.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-brand-blue mb-6">Send an Inquiry</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                </div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all resize-none"
                ></textarea>
                <button 
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg",
                    formStatus === 'sent' ? "bg-green-600" : "bg-brand-red hover:bg-red-700 shadow-brand-red/20"
                  )}
                >
                  {formStatus === 'idle' && "Send Message"}
                  {formStatus === 'sending' && "Sending..."}
                  {formStatus === 'sent' && "Message Sent Successfully!"}
                </button>
              </form>
            </div>
          </div>

          {/* Map & Locations */}
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.076646545129!2d70.0469444!3d22.8447222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950d5dba5ca6869%3A0x538ab4bfa62d579b!2sSHREE%20DURGA%20EMPTY%20PARK!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <a 
                href="https://www.google.com/maps/place/SHREE+DURGA+EMPTY+PARK/@22.8136906,69.671999,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-red transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-brand-red w-5 h-5" />
                  <h4 className="font-bold text-brand-blue">Mundra Depot</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Survey No- 229, Zarapra, Mundra, Gujarat 370421.
                </p>
                <span className="text-xs font-bold text-brand-red group-hover:underline">View on Maps →</span>
              </a>
              <a 
                href="https://www.google.com/maps/place/Sree+Durga+Empty+Park/@23.0283663,70.1454215,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-red transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-brand-red w-5 h-5" />
                  <h4 className="font-bold text-brand-blue">Kandla Depot</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  SURVEY NO. 155/2, Village Kidana, PIN: 370205.
                </p>
                <span className="text-xs font-bold text-brand-red group-hover:underline">View on Maps →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-red p-1.5 rounded-lg">
              <Container className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              SHREE DURGA EMPTY PARK
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Shree Durga Empty Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

