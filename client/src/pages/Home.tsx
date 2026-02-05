import { Navbar } from "@/components/Navbar";
import { JoinWaitlistForm } from "@/components/JoinWaitlistForm";
import { motion } from "framer-motion";
import { 
  FileText, 
  ShieldCheck, 
  MessageSquare, 
  Upload, 
  BrainCircuit, 
  FileCheck, 
  Check, 
  Sparkles 
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-mesh font-body text-slate-600">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Coming Soon: The Future of HOA Analysis</span>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Smart HOA Analysis for <br/>
            <span className="text-gradient">Confident Home Buying</span>
          </motion.h1>

          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Upload HOA documents and get AI-powered insights to make informed property investment decisions. Know exactly what you're getting into before you buy.
          </motion.p>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-center gap-4"
          >
            <JoinWaitlistForm />
          </motion.div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
              Why Choose HOAFAX?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Comprehensive analysis powered by advanced AI technology designed specifically for real estate documents.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeIn} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Format Support</h3>
              <p className="text-slate-500 leading-relaxed">
                Upload PDF, DOCX, and XLSX documents with ease. Our system handles all common HOA document formats instantly.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeIn} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 text-teal-600">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Risk Assessment</h3>
              <p className="text-slate-500 leading-relaxed">
                Get detailed risk analysis including financial health, legal issues, and upcoming assessments before you commit.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeIn} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 text-indigo-600">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Chat Support</h3>
              <p className="text-slate-500 leading-relaxed">
                Have questions about a specific bylaw? Ask our AI assistant follow-up questions and get instant, cited answers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-500">
              Get your property analysis in three simple steps
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {[
                { 
                  icon: Upload, 
                  title: "1. Upload Documents", 
                  desc: "Upload your HOA bylaws, financial reports, and meeting minutes safely and securely." 
                },
                { 
                  icon: BrainCircuit, 
                  title: "2. AI Analysis", 
                  desc: "Our advanced AI reads every page, cross-referencing financials and rules to find red flags." 
                },
                { 
                  icon: FileCheck, 
                  title: "3. Get Your Report", 
                  desc: "Receive a comprehensive report with clear 'Buy' or 'Don't Buy' recommendations." 
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-8">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / VALUE SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold text-sm mb-6 border border-teal-500/30">
                Early Access Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Free Property Analysis <br/>
                <span className="text-slate-400">For Early Adopters</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We're currently in beta and offering our full suite of analysis tools completely free of charge. No hidden fees, no credit card required. Just honest insights.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Comprehensive document analysis",
                  "Buy / Don't Buy recommendation engine",
                  "Detailed financial risk assessment",
                  "Unlimited AI chat support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-200">
                    <Check className="w-5 h-5 text-teal-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Card visual */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-500 rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 relative">
                <div className="text-center">
                  <span className="text-sm font-semibold tracking-wider text-teal-300 uppercase">Limited Time</span>
                  <div className="text-6xl font-display font-bold mt-2 mb-1">$0</div>
                  <div className="text-slate-300">Free forever for beta users</div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <button 
                    onClick={scrollToWaitlist}
                    className="w-full py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-lg"
                  >
                    Claim Free Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA / WAITLIST */}
      <section id="waitlist" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Ready to buy with confidence?
          </h2>
          <p className="text-xl text-slate-500 mb-10">
            Join the waitlist today and be the first to know when we launch.
          </p>
          <div className="flex justify-center">
            <JoinWaitlistForm className="w-full max-w-md bg-white p-2" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display font-bold text-lg text-slate-900">
              HOAFAX
            </span>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} HOAFAX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
