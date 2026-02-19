import React from 'react';
import { NexDriveLogo } from './components/NexDriveLogo';
import { Navigation } from './components/Navigation';
import { Reveal } from './components/Reveal';
import { ArrowRight, Shield, Target, Award, CheckCircle2, MapPin, Car, Users, Clock, Star, Phone, Mail, GraduationCap, Route, Eye } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, #0066CC 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, #68C132 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8 z-10">
            <Reveal delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nex-green/30 bg-nex-green/5">
                <span className="w-1.5 h-1.5 rounded-full bg-nex-green" />
                <span className="text-sm font-medium text-nex-green">Now Enrolling</span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl font-display font-black italic leading-[0.95] tracking-tight">
                Real Skills.<br />
                <span className="text-brand-gradient">Real Confidence.</span><br />
                Real Drivers.
              </h1>
            </Reveal>

            <Reveal delay={350}>
              <p className="text-lg text-white/50 max-w-md leading-relaxed">
                NexDrive Academy builds confident, safe drivers through modern training methods and professional instruction.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="btn-primary px-8 py-4 rounded-full text-white font-bold text-base flex items-center gap-2 group">
                  Book Your Lesson <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-outline px-8 py-4 rounded-full text-white font-medium text-base">
                  View Courses
                </button>
              </div>
            </Reveal>
          </div>

          {/* Hero stats cards */}
          <div className="hidden lg:flex flex-col gap-5 z-10">
            <Reveal delay={300}>
              <div className="card p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-nex-green/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-nex-green" />
                </div>
                <div>
                  <div className="text-4xl font-display font-bold">98%</div>
                  <div className="text-white/50 text-sm mt-1">First-time pass rate across all students</div>
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-5">
              <Reveal delay={400}>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-display font-bold">2,400+</div>
                  <div className="text-white/40 text-sm mt-1">Graduates</div>
                </div>
              </Reveal>
              <Reveal delay={500}>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-display font-bold flex items-center justify-center gap-1">
                    4.9 <Star className="w-5 h-5 text-nex-green fill-nex-green" />
                  </div>
                  <div className="text-white/40 text-sm mt-1">Google Rating</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — mobile only shows here */}
      <section className="lg:hidden relative z-10 py-12 px-6">
        <Reveal>
          <div className="card p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { value: '2,400+', label: 'Graduates' },
                { value: '98%', label: 'Pass Rate' },
                { value: '15+', label: 'Years Exp.' },
                { value: '4.9', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-bold">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why NexDrive */}
      <section id="method" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Why <span style={{ color: '#0066CC' }}>NexDrive</span> Academy?
              </h2>
              <p className="text-lg text-white/40 max-w-xl">We go beyond passing the test. Our approach builds real-world driving skills and lasting confidence.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Safety First', desc: 'Defensive driving techniques and hazard perception built into every lesson.' },
              { icon: Target, title: 'Structured Learning', desc: 'Clear milestones, progress tracking, and a curriculum designed around how people actually learn.' },
              { icon: Award, title: 'Certified Excellence', desc: 'ACT accredited instructors with advanced qualifications and years of experience.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-nex-blue/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-nex-blue" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Courses</h2>
              <p className="text-lg text-white/40 max-w-xl mx-auto">From first-timers to test-ready drivers, a program for every stage of your journey.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Route,
                title: 'Beginner Program',
                desc: 'Learn vehicle control, road rules, and core driving techniques from scratch.',
                features: ['Vehicle Familiarisation', 'Basic Manoeuvres', 'Road Rules & Signs', 'Suburb Driving'],
              },
              {
                icon: Eye,
                title: 'Intermediate Skills',
                desc: 'Complex road environments, highway driving, and hazard perception.',
                features: ['Highway & Merging', 'Night Driving', 'Hazard Perception', 'Parking Mastery'],
              },
              {
                icon: GraduationCap,
                title: 'Test Preparation',
                desc: 'Intensive preparation with mock tests, route practice, and confidence building.',
                features: ['Mock Test Routes', 'Examiner Expectations', 'Confidence Building', 'Car Hire for Test'],
              },
            ].map((course, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card accent-left p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-nex-green/10 flex items-center justify-center mb-6">
                    <course.icon className="w-6 h-6 text-nex-green" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{course.title}</h3>
                  <p className="text-white/40 text-sm mb-6">{course.desc}</p>
                  <ul className="space-y-3 mt-auto">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle2 className="w-4 h-4 text-nex-green shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Fleet</h2>
              <p className="text-lg text-white/40 max-w-xl mx-auto">Modern, dual-control vehicles with the latest safety technology.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Toyota Corolla', type: 'Automatic', features: ['Dual Controls', 'Reverse Camera', 'Lane Assist'], tag: 'Most Popular' },
              { name: 'Mazda 3', type: 'Manual', features: ['Dual Controls', 'Blind Spot Monitor', 'Hill Start Assist'], tag: 'Manual Option' },
              { name: 'Hyundai i30', type: 'Automatic', features: ['Dual Controls', 'AEB System', 'Parking Sensors'], tag: 'Great for Beginners' },
            ].map((car, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-nex-blue/10 flex items-center justify-center">
                      <Car className="w-6 h-6 text-nex-blue" />
                    </div>
                    <span className="text-xs font-bold text-nex-green uppercase tracking-wider px-3 py-1 rounded-full bg-nex-green/10">{car.tag}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-1">{car.name}</h3>
                  <p className="text-white/40 text-sm mb-5">{car.type}</p>
                  <ul className="space-y-2.5">
                    {car.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle2 className="w-4 h-4 text-nex-green shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Invest in Your<br /><span className="text-brand-gradient">Driving Future</span>
                </h2>
                <p className="text-lg text-white/40 mb-8 leading-relaxed">
                  Transparent pricing with no hidden fees. Choose the package that fits your learning pace.
                </p>
                <ul className="space-y-4">
                  {['ACT Accredited Instructors', 'Modern Dual Control Vehicles', 'Door-to-Door Pickup & Drop-off', 'Online Progress Tracking'].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-nex-green shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-4">
                <div className="card p-6 flex items-center justify-between cursor-pointer group">
                  <div>
                    <h3 className="text-lg font-display font-bold group-hover:text-nex-blue transition-colors">Single Lesson</h3>
                    <p className="text-white/40 text-sm">Pay as you go</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold">$100</div>
                    <div className="text-xs text-white/30">per hour</div>
                  </div>
                </div>

                {/* Featured pricing */}
                <div className="relative">
                  <div className="absolute -inset-[1px] rounded-[17px] bg-gradient-to-r from-nex-blue to-nex-green opacity-50" />
                  <div className="relative bg-nex-navy p-6 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-nex-green uppercase tracking-wider mb-1">Best Value</div>
                      <h3 className="text-xl font-display font-bold">10 Hour Pack</h3>
                      <p className="text-white/40 text-sm">Build skills faster</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-display font-bold text-brand-gradient">$910</div>
                      <div className="text-xs text-nex-green">save $90</div>
                    </div>
                  </div>
                </div>

                <div className="card p-6 flex items-center justify-between cursor-pointer group">
                  <div>
                    <h3 className="text-lg font-display font-bold group-hover:text-nex-blue transition-colors">Test Package</h3>
                    <p className="text-white/40 text-sm">Warm up + Car Hire</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold">$220</div>
                    <div className="text-xs text-white/30">fixed price</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="card p-10 md:p-14">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Get In Touch</h2>
                <p className="text-white/40">Ready to start? Book your first lesson or ask us anything.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-nex-blue/50 transition-colors text-sm" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-nex-blue/50 transition-colors text-sm" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-nex-blue/50 transition-colors text-sm" />
                <textarea rows={4} placeholder="Tell us about your driving experience and goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-nex-blue/50 transition-colors resize-none text-sm" />
                <button className="btn-green w-full py-4 rounded-xl text-white font-bold text-base">
                  Book Your First Lesson
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2 space-y-4">
              <NexDriveLogo size="sm" showTagline />
              <p className="text-white/35 max-w-sm leading-relaxed text-sm mt-3">
                Real Skills. Real Confidence. Real Drivers. Canberra's trusted driving academy since 2010.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/35">
                <MapPin className="w-4 h-4" /> Canberra, ACT
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white/50 mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {['Courses', 'Fleet', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-white/35 hover:text-nex-green transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white/50 mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm text-white/35">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-nex-blue" /> hello@nexdrive.com.au</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-nex-blue" /> (02) 6100 0000</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-nex-blue" /> Mon – Sat, 7am – 6pm</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-white/25">&copy; 2026 NexDrive Academy. All rights reserved.</div>
            <div className="flex gap-6 text-xs text-white/25">
              <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
