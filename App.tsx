import React from 'react';
import { LiquidBackground } from './components/LiquidBackground';
import { Navigation } from './components/Navigation';
import { GlassCard } from './components/GlassCard';
import { ArrowRight, Shield, Activity, Award, CheckCircle2, MapPin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-white selection:bg-cyan-500/30 selection:text-white">
      <LiquidBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-l-2 border-l-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-cyan-100">The Future of Driver Training</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight">
              Fluid <br />
              <span className="text-liquid filter drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">Motion</span> <br />
              Control.
            </h1>
            
            <p className="text-xl text-white/60 max-w-lg leading-relaxed">
              Master the art of driving with liquid smooth precision. 
              We blend advanced vehicle dynamics with reactive safety psychology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Driving <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              
              <button className="px-8 py-4 rounded-full glass-card border border-white/20 hover:bg-white/5 transition-all font-medium flex items-center gap-2">
                View Curriculum
              </button>
            </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="method" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Transparent <span className="text-cyan-400">Process</span></h2>
            <p className="text-xl text-white/50 max-w-2xl">We strip away the complexity and focus on pure, flow-state driving techniques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield, 
                title: 'Defensive Flow', 
                desc: 'Learn to anticipate hazards like water flowing around a rock. Smooth, reactive, safe.' 
              },
              { 
                icon: Activity, 
                title: 'Vehicle Physics', 
                desc: 'Understand weight transfer, traction circles, and braking thresholds.' 
              },
              { 
                icon: Award, 
                title: 'Mastery Level', 
                desc: 'Beyond passing the test. We aim for advanced car control skills.' 
              }
            ].map((item, i) => (
              <GlassCard key={i} className="p-10 min-h-[300px] flex flex-col justify-end group hover:bg-white/5">
                <div className="mb-auto w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-8">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8">Invest in <br/><span className="text-liquid">Safety</span></h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Our packages are designed to take you from novice to expert with consistent, high-quality mentorship.
              </p>
              <ul className="space-y-4 mb-12">
                {['ACT Accredited Instructors', 'Modern Dual Control Vehicles', 'Door-to-door Service', 'Online Progress Tracking'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="text-cyan-400 font-bold border-b border-cyan-400 pb-1 hover:text-white hover:border-white transition-colors">
                Download Corporate Brochure
              </button>
            </div>

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
                    <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">$910</div>
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
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600" />
            <span className="font-display font-bold text-xl">DrivingForce</span>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/40">
             <MapPin className="w-4 h-4" /> Canberra, ACT
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;