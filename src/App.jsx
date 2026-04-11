import React from 'react';
import { Rocket, ShieldCheck, Zap, Code2, Globe, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070A] font-sans text-slate-200 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto sticky top-0 z-50 bg-[#05070A]/80 backdrop-blur-md">
        <div className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          4AM DEV
        </div>
        <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-blue-400 hover:text-white transition-all duration-300">
          START SCALING
        </a>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-2 pb-4 md:pb-8 max-w-6xl mx-auto text-center">
        {/* Responsive Hero Image Container */}
        <div className="flex max-w-md mx-auto group w-full justify-center">
          <img
            src="/hero.png"
            alt="Production Ready Interface"
            className="w-full h-auto "
          />
        </div>

        <h1 className="text-4xl md:text-8xl font-black mb-6 leading-[1.2] md:leading-[1.1] tracking-tight text-white">
          Your MVP works. <br className="block" />
          <span className="text-slate-500 text-3xl md:text-7xl italic">Now let's make it </span>
          <span className="underline decoration-blue-600 underline-offset-4 md:underline-offset-8 text-3xl md:text-7xl">Scale.</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          You used AI to build fast. We ensure you stay fast. We productionalize AI-built apps so they’re secure, stable, and ready for your first 10,000 users.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <a href="#contact" className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg hover:bg-blue-500 hover:-translate-y-1 transition-all shadow-lg shadow-blue-900/20">
            Get Your Roadmap <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </header>

      {/* Business Outcome Grid */}
      <section className="py-2 md:py-12 bg-slate-900/30 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">The Bridge from Prototype to Profit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <OutcomeCard
              icon={<Layers className="text-indigo-400" size={32} />}
              title="Any Tool, Any Stack"
              description="Whether you built with Claude, Gemini, ChatGPT, or custom LLM prompts, we handle the 'last mile.' We fix deployment blockers and launch hurdles that stop AI-generated apps in their tracks."
            />
            <OutcomeCard
              icon={<Zap className="text-yellow-400" size={32} />}
              title="Predictable Performance"
              description="Eliminate the 'AI lag.' We optimize your database and cloud infrastructure so your app responds instantly, no matter the load."
            />
            <OutcomeCard
              icon={<Rocket className="text-blue-400" size={32} />}
              title="Feature Velocity"
              description="Stop hitting prompt limits. We build the complex, custom features that give you a competitive edge over simple 'wrapper' apps."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-2 md:py-2 px-6 bg-[#05070A]">
        <div className="max-w-xl mx-auto border border-white/10 p-4 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-slate-900/50 to-transparent shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Let’s Launch This.</h2>
            <p className="text-slate-400 text-sm md:text-base">Tell us about your app. We'll reply within 24 hours with a plan to productionalize your vision.</p>
          </div>

          {/* Formspree Integration */}
          <form action="https://formspree.io/f/xvzvjeey" method="POST" className="space-y-4 md:space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
              <input type="text" name="name" placeholder="Jane Doe" className="w-full bg-black/50 border border-slate-800 p-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
              <input type="email" name="email" placeholder="jane@company.com" className="w-full bg-black/50 border border-slate-800 p-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
              <textarea name="message" placeholder="What did you build with AI, and where are you stuck?" rows="4" className="w-full bg-black/50 border border-slate-800 p-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required></textarea>
            </div>
            <button type="submit" className="w-full py-4 md:py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all shadow-lg shadow-blue-900/40">
              SEND PROJECT INQUIRY
            </button>
          </form>
        </div>
      </section>

      <footer className="py-6 text-center border-t border-white/5">
        <p className="text-slate-600 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
          &copy; {new Date().getFullYear()} 4AM DEV &bull; Bridging the AI-to-Production Gap
        </p>
      </footer>
    </div>
  );
}

function OutcomeCard({ icon, title, description }) {
  return (
<div className="p-2 md:p-10 bg-black/40 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group">
      {/* Flex container to hold icon and title on one line */}
      <div className="flex items-center gap-4 mb-6">
        <div className="transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white leading-tight">
          {title}
        </h3>
      </div>

      <p className="text-slate-400 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
}
