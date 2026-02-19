import React from 'react';
import { LiquidBackground } from './components/LiquidBackground';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Reveal } from './components/Reveal';
import { GlassCard } from './components/GlassCard';
import { NexDriveLogo } from './components/NexDriveLogo';
import { ArrowRight, Shield, Target, Award, CheckCircle2, MapPin, Car, Users, Clock, Star, Phone, Mail, GraduationCap, Route, Eye } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-white selection:bg-nex-blue/30 selection:text-white">
      <LiquidBackground />
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 z-10">
            <Reveal delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-l-2 border-l-nex-green">
                <span className="w-2 h-2 rounded-full bg-nex-green animate-pulse" />
                <span className="text-sm font-medium tracking-wide text-green-100">Now Enrolling — Limited Spots</span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black italic leading-[0.9] tracking-tight">
                Real Skills. <br />
                <span className="text-brand-gradient">Real Confidence.</span> <br />
                Real Drivers.
              </h1>
            </Reveal>

            <Reveal delay={350}>
              <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed font-light">
                NexDrive Academy builds confident, safe drivers through modern training methods
                and professional instruction. Your journey to the road starts here.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-primary group px-8 py-4 rounded-full text-white font-bold text-lg overflow-hidden">
                  <span className="flex items-center gap-2">
                    Book Your Lesson <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className="px-8 py-4 rounded-full glass-card border border-white/20 hover:bg-white/5 transition-all font-medium flex items-center gap-2">
                  View Courses
                </button>
              </div>
            </Reveal>
          </div>

          {/* Hero Visual */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-1000">
            <div className="relative w-80 h-96">
               <div className="absolute inset-0 bg-gradient-to-tr from-nex-blue to-nex-green rounded-[3rem] blur-[60px] opacity-30 animate-pulse" />

               <GlassCard className="absolute top-0 left-0 w-full h-full border-t border-l border-white/30 flex flex-col justify-between p-8 hero-card animate-float transition-transform duration-700">
                  <div className="flex justify-between items-start">
                    <GraduationCap className="w-10 h-10 text-nex-green" />
                    <span className="text-4xl font-display font-bold italic">98%</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Pass Rate</h3>
                    <p className="text-sm text-white/60">Industry-leading first-time pass rate for all students.</p>
                  </div>
               </GlassCard>

               <div className="absolute -right-24 top-20 glass-card p-6 rounded-2xl animate-float-delayed backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-nex-green/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-nex-green" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Test Passed!</div>
                      <div className="text-xs text-white/50">Congratulations</div>
                    </div>
                  </div>
               </div>

               <div className="absolute -left-16 bottom-8 glass-card p-4 rounded-2xl animate-float-delayed backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nex-blue to-blue-400 border-2 border-nex-navy" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nex-green to-green-300 border-2 border-nex-navy" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-nex-blue border-2 border-nex-navy" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">2,400+ Graduates</div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-nex-green fill-nex-green" />
                        ))}
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '2,400+', label: 'Graduates', icon: Users },
                  { value: '98%', label: 'Pass Rate', icon: Award },
                  { value: '15+', label: 'Years Experience', icon: Clock },
                  { value: '4.9', label: 'Google Rating', icon: Star },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <stat.icon className="w-6 h-6 text-nex-green mx-auto mb-2" />
                    <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
                    <div className="text-sm text-white/50 uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why NexDrive Section */}
      <section id="method" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-black italic mb-6">Why <span className="text-nex-blue">NexDrive</span> Academy?</h2>
              <p className="text-xl text-white/50 max-w-2xl font-light">We go beyond passing the test. Our approach builds real-world driving skills and lasting confidence.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'Defensive driving techniques and hazard perception built into every lesson. Your safety is our foundation.',
                delay: 0
              },
              {
                icon: Target,
                title: 'Structured Learning',
                desc: 'Clear milestones, progress tracking, and a curriculum designed around how people actually learn to drive.',
                delay: 150
              },
              {
                icon: Award,
                title: 'Certified Excellence',
                desc: 'ACT accredited instructors with advanced qualifications and years of professional teaching experience.',
                delay: 300
              }
            ].map((item, i) => (
              <Reveal key={i} delay={item.delay}>
                <GlassCard className="p-10 min-h-[300px] flex flex-col justify-end group hover:bg-white/5">
                  <div className="mb-auto w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-nex-blue/20 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-nex-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 mt-8">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-display font-black italic mb-6">Our <span className="text-shimmer">Courses</span></h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">From first-timers to test-ready drivers, we have a program built for every stage of your journey.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Route,
                title: 'Beginner Program',
                desc: 'Start from scratch with our comprehensive beginner course. Learn vehicle control, road rules, and core techniques.',
                features: ['Vehicle Familiarisation', 'Basic Manoeuvres', 'Road Rules & Signs', 'Suburb Driving'],
                delay: 0
              },
              {
                icon: Eye,
                title: 'Intermediate Skills',
                desc: 'Build on your foundation with complex road environments, highway driving, and hazard perception.',
                features: ['Highway & Merging', 'Night Driving', 'Hazard Perception', 'Parking Mastery'],
                delay: 150
              },
              {
                icon: GraduationCap,
                title: 'Test Preparation',
                desc: 'Intensive preparation for your driving test. Mock tests, route practice, and confidence-building sessions.',
                features: ['Mock Test Routes', 'Examiner Expectations', 'Confidence Building', 'Car Hire for Test'],
                delay: 300
              }
            ].map((course, i) => (
              <Reveal key={i} delay={course.delay}>
                <GlassCard className="p-8 group hover:bg-white/5 accent-card h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nex-green/20 transition-all duration-300">
                      <course.icon className="w-7 h-7 text-nex-green" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{course.title}</h3>
                  <p className="text-white/50 text-sm mb-6 font-light">{course.desc}</p>
                  <ul className="space-y-3 mt-auto">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-nex-green shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-display font-black italic mb-6">Our <span className="text-nex-blue">Fleet</span></h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">Modern, well-maintained dual-control vehicles equipped with the latest safety technology.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Toyota Corolla',
                type: 'Automatic',
                features: ['Dual Controls', 'Reverse Camera', 'Lane Assist'],
                tag: 'Most Popular',
                delay: 0
              },
              {
                name: 'Mazda 3',
                type: 'Manual',
                features: ['Dual Controls', 'Blind Spot Monitor', 'Hill Start Assist'],
                tag: 'Manual Option',
                delay: 150
              },
              {
                name: 'Hyundai i30',
                type: 'Automatic',
                features: ['Dual Controls', 'AEB System', 'Parking Sensors'],
                tag: 'Great for Beginners',
                delay: 300
              }
            ].map((car, i) => (
              <Reveal key={i} delay={car.delay}>
                <GlassCard className="p-8 group hover:bg-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nex-blue/20 transition-all duration-300">
                      <Car className="w-7 h-7 text-nex-blue" />
                    </div>
                    <span className="text-xs font-bold text-nex-green uppercase tracking-wider px-3 py-1 rounded-full bg-nex-green/10">{car.tag}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-1">{car.name}</h3>
                  <p className="text-white/50 text-sm mb-6">{car.type}</p>
                  <ul className="space-y-3">
                    {car.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-nex-green shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-black italic mb-8">Invest in Your <br/><span className="text-brand-gradient">Driving Future</span></h2>
                <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
                  Transparent pricing with no hidden fees. Choose the package that fits your learning pace and budget.
                </p>
                <ul className="space-y-4 mb-12">
                  {['ACT Accredited Instructors', 'Modern Dual Control Vehicles', 'Door-to-Door Pickup & Drop-off', 'Online Progress Tracking'].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-nex-green shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-6">
                <GlassCard className="p-8 flex items-center justify-between hover:border-nex-blue/50 transition-colors cursor-pointer group">
                  <div>
                    <h3 className="text-xl font-display font-bold group-hover:text-nex-blue transition-colors">Single Lesson</h3>
                    <p className="text-white/50 text-sm">Pay as you go flexibility</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold">$100</div>
                    <div className="text-xs text-white/40">per hour</div>
                  </div>
                </GlassCard>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-nex-blue to-nex-green rounded-[2rem] blur opacity-30"></div>
                  <GlassCard className="relative p-8 flex items-center justify-between border-nex-green/30 bg-white/5">
                    <div>
                      <div className="text-xs font-bold text-nex-green uppercase tracking-wider mb-1">Best Value</div>
                      <h3 className="text-2xl font-display font-bold">10 Hour Pack</h3>
                      <p className="text-white/50 text-sm">Build skills faster</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-display font-bold text-brand-gradient">$910</div>
                      <div className="text-xs text-nex-green">save $90</div>
                    </div>
                  </GlassCard>
                </div>

                <GlassCard className="p-8 flex items-center justify-between hover:border-nex-blue/50 transition-colors cursor-pointer group">
                  <div>
                    <h3 className="text-xl font-display font-bold group-hover:text-nex-blue transition-colors">Test Package</h3>
                    <p className="text-white/50 text-sm">Warm up lesson + Car Hire</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold">$220</div>
                    <div className="text-xs text-white/40">fixed price</div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <GlassCard className="p-10 md:p-16 rounded-[3rem]">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-black italic mb-4">Get In Touch</h2>
                <p className="text-white/60 font-light">Ready to start your driving journey? Book your first lesson or ask us anything.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-nex-blue/50 transition-all font-light"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-nex-blue/50 transition-all font-light"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-nex-blue/50 transition-all font-light"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your driving experience and goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-nex-blue/50 transition-all resize-none font-light"
                />
                <button className="btn-green w-full py-5 rounded-xl text-white font-bold text-lg">
                  Book Your First Lesson
                </button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <NexDriveLogo size="sm" showTagline />
              <p className="text-white/40 max-w-sm leading-relaxed font-light mt-4">
                Real Skills. Real Confidence. Real Drivers. Canberra's trusted driving academy since 2010.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="w-4 h-4" /> Canberra, ACT
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Courses', 'Fleet', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-nex-green transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-nex-blue" /> hello@nexdrive.com.au</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-nex-blue" /> (02) 6100 0000</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-nex-blue" /> Mon – Sat, 7am – 6pm</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-white/30">&copy; 2026 NexDrive Academy. All rights reserved.</div>
            <div className="flex gap-6 text-xs text-white/30">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
