import React from 'react';
import { LiquidBackground } from './components/LiquidBackground';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Reveal } from './components/Reveal';
import { GlassCard } from './components/GlassCard';
import { ArrowRight, Shield, Activity, Award, CheckCircle2, MapPin, Car, Users, Clock, Star, Wind } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-white selection:bg-cyan-500/30 selection:text-white">
      <LiquidBackground />
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 z-10">
            <Reveal delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-l-2 border-l-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium tracking-wide text-cyan-100">The Future of Driver Training</span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight">
                Fluid <br />
                <span className="text-liquid filter drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">Motion</span> <br />
                Control.
              </h1>
            </Reveal>

            <Reveal delay={350}>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed">
                Master the art of driving with liquid smooth precision.
                We blend advanced vehicle dynamics with reactive safety psychology.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Start Driving <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className="px-8 py-4 rounded-full glass-card border border-white/20 hover:bg-white/5 transition-all font-medium flex items-center gap-2">
                  View Curriculum
                </button>
              </div>
            </Reveal>
          </div>

          {/* Abstract Hero Visual */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-1000">
            {/* The Floating Card Stack */}
            <div className="relative w-80 h-96">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[3rem] blur-[60px] opacity-40 animate-pulse" />

               <GlassCard className="absolute top-0 left-0 w-full h-full border-t border-l border-white/40 flex flex-col justify-between p-8 hero-card animate-float transition-transform duration-700">
                  <div className="flex justify-between items-start">
                    <Activity className="w-10 h-10 text-cyan-400" />
                    <span className="text-4xl font-display font-bold">A+</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Elite Rating</h3>
                    <p className="text-sm text-white/60">Top tier safety certification for all graduates.</p>
                  </div>
               </GlassCard>

               <div className="absolute -right-24 top-20 glass-card p-6 rounded-2xl animate-float-delayed backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Assessment Passed</div>
                      <div className="text-xs text-white/50">Just now</div>
                    </div>
                  </div>
               </div>

               <div className="absolute -left-16 bottom-8 glass-card p-4 rounded-2xl animate-float-delayed backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-black/50" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-black/50" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-black/50" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">2,400+ Graduates</div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
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
                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
                    <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features Grid */}
      <section id="method" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Transparent <span className="text-cyan-400">Process</span></h2>
              <p className="text-xl text-white/50 max-w-2xl">We strip away the complexity and focus on pure, flow-state driving techniques.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Defensive Flow',
                desc: 'Learn to anticipate hazards like water flowing around a rock. Smooth, reactive, safe.',
                delay: 0
              },
              {
                icon: Activity,
                title: 'Vehicle Physics',
                desc: 'Understand weight transfer, traction circles, and braking thresholds.',
                delay: 150
              },
              {
                icon: Award,
                title: 'Mastery Level',
                desc: 'Beyond passing the test. We aim for advanced car control skills.',
                delay: 300
              }
            ].map((item, i) => (
              <Reveal key={i} delay={item.delay}>
                <GlassCard className="p-10 min-h-[300px] flex flex-col justify-end group hover:bg-white/5">
                  <div className="mb-auto w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-8">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
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
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Our <span className="text-liquid">Fleet</span></h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">Modern, well-maintained dual-control vehicles equipped with the latest safety tech.</p>
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
                tag: 'Manual Specialists',
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
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Car className="w-7 h-7 text-cyan-400" />
                    </div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-400/10">{car.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{car.name}</h3>
                  <p className="text-white/50 text-sm mb-6">{car.type}</p>
                  <ul className="space-y-3">
                    {car.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> {f}
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
                <h2 className="text-5xl font-display font-bold mb-8">Invest in <br/><span className="text-liquid">Safety</span></h2>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                  Our packages are designed to take you from novice to expert with consistent, high-quality mentorship.
                </p>
                <ul className="space-y-4 mb-12">
                  {['ACT Accredited Instructors', 'Modern Dual Control Vehicles', 'Door-to-door Service', 'Online Progress Tracking'].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
                <button className="text-cyan-400 font-bold border-b border-cyan-400 pb-1 hover:text-white hover:border-white transition-colors">
                  Download Corporate Brochure
                </button>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-6">
                <GlassCard className="p-8 flex items-center justify-between hover:border-cyan-400/50 transition-colors cursor-pointer group">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">Single Lesson</h3>
                    <p className="text-white/50 text-sm">Pay as you go flexibility</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold">$100</div>
                    <div className="text-xs text-white/40">per hour</div>
                  </div>
                </GlassCard>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-40"></div>
                  <GlassCard className="relative p-8 flex items-center justify-between border-cyan-400/30 bg-white/5">
                    <div>
                      <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">Most Popular</div>
                      <h3 className="text-2xl font-bold">10 Hour Pack</h3>
                      <p className="text-white/50 text-sm">Complete logbook faster</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-display font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #00F0FF, white)' }}>$910</div>
                      <div className="text-xs text-white/40">save $90</div>
                    </div>
                  </GlassCard>
                </div>

                <GlassCard className="p-8 flex items-center justify-between hover:border-cyan-400/50 transition-colors cursor-pointer group">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">Test Package</h3>
                    <p className="text-white/50 text-sm">Warm up + Car Hire</p>
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
                <h2 className="text-4xl font-display font-bold mb-4">Start Your Engine</h2>
                <p className="text-white/60">Drop us a line to book your first session.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-cyan-400/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-cyan-400/50 transition-all"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-cyan-400/50 transition-all resize-none"
                />
                <button className="w-full py-5 rounded-xl text-white font-bold text-lg shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] transition-all transform hover:scale-[1.02]" style={{ background: 'linear-gradient(to right, #0055FF, #00F0FF)' }}>
                  Send Message
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
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Wind className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl">DrivingForce</span>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed">
                Canberra's premium driver training. Blending advanced vehicle dynamics with flow-state techniques since 2010.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="w-4 h-4" /> Canberra, ACT
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Method', 'Fleet', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li>hello@drivingforce.com.au</li>
                <li>(02) 6100 0000</li>
                <li>Mon – Sat, 7am – 6pm</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-white/30">&copy; 2026 DrivingForce. All rights reserved.</div>
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
