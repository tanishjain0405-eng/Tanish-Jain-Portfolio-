/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Zap, 
  BarChart3, 
  Download, 
  Mail,
  ChevronRight,
  Layers,
  ArrowLeft
} from 'lucide-react';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const MetricCard = ({ label, value }: { label: string, value: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-l border-zinc-800 pl-6 py-4"
  >
    <div className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-2">{label}</div>
    <div className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight">{value}</div>
  </motion.div>
);

const AboutSection = ({ title, children, delay = 0 }: { title: string, children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="mb-48 last:mb-0"
  >
    <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12">{title}</h2>
    <div className="max-w-3xl">
      {children}
    </div>
  </motion.div>
);

export default function App() {
  const [view, setView] = useState<'home' | 'about' | 'experience' | 'projects' | 'projectDetail' | 'activities' | 'certifications' | 'contact'>('home');
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const navigateTo = (newView: 'home' | 'about' | 'experience' | 'projects' | 'projectDetail' | 'activities' | 'certifications' | 'contact', projectId?: number) => {
    setView(newView);
    if (projectId !== undefined) setSelectedProject(projectId);
    setExpandedExp(null);
    window.scrollTo(0, 0);
  };

  const experiences = [
    {
      company: "ARHAM SHARE PRIVATE LIMITED",
      role: "Junior Technical Analyst",
      period: "May 2024 – June 2024",
      tagline: "Structured risk–reward analysis in volatile equity markets.",
      context: "Operated in a live market environment where timing and conviction directly influenced capital outcomes.",
      whatIDid: [
        "Designed structured research frameworks across tracked assets",
        "Analyzed sector rotation and momentum trends",
        "Evaluated RSI, MACD, volume indicators for entry calibration",
        "Standardized signal validation process"
      ],
      impact: [
        "Delivered 20%+ gains on selected positions",
        "Enabled 5% portfolio return contribution",
        "Improved signal accuracy by ~15%",
        "Reduced low-conviction entries by ~10%"
      ],
      strengthened: [
        "Discipline under volatility.",
        "Probability framing before exposure.",
        "Conviction must be structured — not emotional."
      ]
    },
    {
      company: "VENTURE CATALYSTS ACCELERATOR LLP",
      role: "Junior Investment Analyst",
      period: "May 2023 – June 2023",
      tagline: "Early-stage venture screening and term sheet contribution.",
      context: "Exposure to startup evaluation and capital deployment decisions in early-stage environments.",
      whatIDid: [
        "Evaluated 15+ early-stage startups across industries",
        "Conducted due diligence on business models, TAM, unit economics",
        "Built financial models for valuation and scenario analysis",
        "Partnered with founders to refine pitch decks",
        "Moderated investor pitch sessions"
      ],
      impact: [
        "Contributed to 2 investment term sheets",
        "Improved screening efficiency by ~25%",
        "Strengthened investment thesis clarity across multiple deals",
        "Enhanced progression for 10+ startups"
      ],
      strengthened: [
        "Assumption stress-testing.",
        "Capital discipline.",
        "Narrative-to-numbers translation."
      ]
    },
    {
      company: "STUDENT INVESTMENT FUND — CHRIST UNIVERSITY",
      role: "Contributor",
      period: "Ongoing",
      tagline: "Structured equity exposure and volatility analysis.",
      context: "Participated in equity market analysis within academic-investment environment.",
      whatIDid: [
        "Conducted regression and time-series modeling",
        "Analyzed sectoral impact on NIFTY50 volatility",
        "Studied cross-sector spillover effects",
        "Evaluated downside risk transmission patterns"
      ],
      impact: [
        "Identified Banking sector as primary volatility driver",
        "Translated findings into capital allocation insights",
        "Strengthened portfolio construction logic"
      ],
      strengthened: [
        "Data-backed decision-making.",
        "Quantitative reasoning.",
        "System-level pattern recognition."
      ]
    }
  ];

  const projects = [
    {
      id: 0,
      title: "Easelyfe",
      subtitle: "0→1 Revenue Execution | E-Commerce Build",
      description: "Generated ₹1L+ revenue within 30 days through structured pricing, supplier alignment, and margin optimization.",
      fullTitle: "Easelyfe: Data-Driven E-Commerce Venture | 0→1 Build",
      context: "Built and scaled a direct-to-consumer venture in ergonomic and massager products with no prior infrastructure. Objective: Validate demand, generate real revenue, and optimize unit economics.",
      approach: [
        "Conducted demand validation experiments",
        "Structured pricing models around contribution margin targets",
        "Negotiated supplier alignment with manufacturer of Frido",
        "Optimized acquisition channels based on performance data",
        "Refined product-market positioning"
      ],
      results: [
        "₹1L+ revenue generated within first month",
        "Improved unit profitability through pricing optimization",
        "Strengthened supply-side economics via vendor negotiation",
        "Validated early-stage demand model"
      ],
      demonstrated: [
        "Speed + structure.",
        "Revenue before storytelling.",
        "Execution under commercial pressure."
      ]
    },
    {
      id: 1,
      title: "Droolin",
      subtitle: "Pre-Seed F&B Platform Concept | VIP Top 25",
      description: "Built scalable unit economics and GTM positioning for a trend-driven F&B model.",
      fullTitle: "Droolin: Pre-Seed F&B Platform Concept | VIP Top 25 Recognition",
      context: "Conceptualized a trend-driven F&B platform enabling chefs to launch viral dessert formats across scalable units. Positioned as a structured experimentation in consumer leverage.",
      approach: [
        "Built unit economics models for scalable expansion",
        "Structured chef onboarding model",
        "Designed supply-side partnerships",
        "Developed GTM assets — pitch deck, website, Instagram",
        "Stress-tested margin sustainability"
      ],
      results: [
        "Selected Top 25 VIP Pre-Seed evaluation",
        "Demonstrated scalable economics viability",
        "Validated positioning with early engagement"
      ],
      demonstrated: [
        "Narrative must withstand numbers.",
        "Consumer brands scale only with disciplined unit economics.",
        "Structure attracts attention — not ideas alone."
      ]
    },
    {
      id: 2,
      title: "Blue Tokai Coffee Roasters",
      subtitle: "Gen-Z Growth & Unit Economics Strategy | First Runner-Up",
      description: "Projected ₹15L monthly revenue with ~5× ROI via structured pilot modeling.",
      fullTitle: "Blue Tokai Coffee Roasters: Gen-Z Growth & Unit Economics Strategy",
      context: "Strategic growth case focused on improving Gen-Z footfall and retention within physical retail format.",
      approach: [
        "Built unit-economics pilot model",
        "Projected ₹15L monthly revenue potential",
        "Modeled ~5× ROI with 4–6 week breakeven",
        "Conducted research with 250+ Gen-Z respondents",
        "Identified positioning and experience gaps"
      ],
      results: [
        "Projected +15% Gen-Z footfall",
        "Projected +20% repeat behavior",
        "First Runner-Up recognition"
      ],
      demonstrated: [
        "Growth must be measurable.",
        "Customer psychology + economics must align.",
        "Experience design affects contribution margins."
      ]
    },
    {
      id: 3,
      title: "FamPay",
      subtitle: "Gen-Z Onboarding & GTM Strategy | First Runner-Up",
      description: "Reduced onboarding time from 24 hours to under 2 minutes via structured flow redesign.",
      fullTitle: "FamPay: Gen-Z Onboarding & GTM Strategy",
      context: "Analyzed onboarding friction and conversion drop-offs in Gen-Z fintech environment.",
      approach: [
        "Diagnosed conversion friction via mixed-method research",
        "Redesigned onboarding with progressive KYC model",
        "Reduced trust barriers via UI restructuring",
        "Proposed segmentation-led positioning roadmap"
      ],
      results: [
        "Reduced onboarding from 24 hours to under 2 minutes",
        "Improved projected activation & retention flow",
        "First Runner-Up recognition"
      ],
      demonstrated: [
        "Friction kills growth.",
        "Trust architecture determines conversion.",
        "Flow design is strategic — not aesthetic."
      ]
    },
    {
      id: 4,
      title: "Sectoral Volatility Study",
      subtitle: "NIFTY50 Sectoral Influence Research",
      description: "Identified Banking as primary volatility driver through regression and time-series modeling.",
      fullTitle: "NIFTY50 Sectoral Influence Study: Quantitative Volatility Modeling",
      context: "Research study analyzing how Nifty Bank, IT, and Healthcare influence overall NIFTY50 volatility.",
      approach: [
        "Regression-based time-series modeling",
        "Cross-sector spillover analysis",
        "Correlation shift evaluation",
        "Downside risk transmission study"
      ],
      results: [
        "Identified Banking as primary volatility driver",
        "Quantified sectoral beta transmission",
        "Extracted portfolio hedging insights"
      ],
      demonstrated: [
        "Markets are interconnected systems.",
        "Sector weight matters more than narrative.",
        "Quantitative logic sharpens allocation."
      ]
    },
    {
      id: 5,
      title: "Mental Health Stigma in Gen Z",
      subtitle: "Behavioral Segmentation & Policy Insights",
      description: "Primary research + SPSS clustering to identify stigma drivers and behavioral response patterns.",
      fullTitle: "Mental Health Stigma in Gen Z: Behavioral Research & Statistical Segmentation",
      context: "Primary research project analyzing stigma drivers influencing help-seeking behavior among Gen-Z.",
      approach: [
        "Large-scale survey design",
        "SPSS-based cluster segmentation",
        "Behavioral attitudinal mapping",
        "Response-pattern classification"
      ],
      results: [
        "Identified core stigma drivers",
        "Segmented behavioral archetypes",
        "Developed actionable policy recommendations"
      ],
      demonstrated: [
        "Data reveals hidden drivers.",
        "Segmentation clarifies strategy.",
        "Behavioral insight informs structured intervention."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-bottom border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')}
            className="font-mono text-sm tracking-tighter text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
            TANISH JAIN
          </button>
          <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
            <button onClick={() => navigateTo('home')} className={`${view === 'home' ? 'text-white' : 'hover:text-white'} transition-colors`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`${view === 'about' ? 'text-white' : 'hover:text-white'} transition-colors`}>About</button>
            <button onClick={() => navigateTo('experience')} className={`${view === 'experience' ? 'text-white' : 'hover:text-white'} transition-colors`}>Experience</button>
            <button onClick={() => navigateTo('projects')} className={`${view === 'projects' || view === 'projectDetail' ? 'text-white' : 'hover:text-white'} transition-colors`}>Projects</button>
            <button onClick={() => navigateTo('activities')} className={`${view === 'activities' ? 'text-white' : 'hover:text-white'} transition-colors`}>Activities</button>
            <button onClick={() => navigateTo('certifications')} className={`${view === 'certifications' ? 'text-white' : 'hover:text-white'} transition-colors`}>Certifications</button>
            <button onClick={() => navigateTo('contact')} className={`${view === 'contact' ? 'text-white' : 'hover:text-white'} transition-colors`}>Contact</button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <Section className="pt-48 pb-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-12">
                    Structured Thinking.<br />
                    Commercial Execution.<br />
                    Measurable Outcomes.
                  </h1>
                  <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed mb-12">
                    I operate at the intersection of finance, strategy, and execution — 
                    building leverage in environments where decisions carry weight.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => navigateTo('experience')}
                      className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-all group"
                    >
                      View Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => navigateTo('projects')}
                      className="px-8 py-4 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-900 transition-all"
                    >
                      Explore Projects
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0"
                >
                  <div className="absolute inset-0 border border-zinc-800 rounded-2xl -m-4 z-0" />
                  <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                    <img 
                      src="/P1076548.JPG" 
                      alt="Profile" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="text-xs font-mono text-white/50 uppercase tracking-[0.3em] mb-1">Principal</div>
                      <div className="text-lg font-medium text-white tracking-tight">Strategic Execution</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Section>

            {/* Section 2 — The Through-Line */}
            <div className="bg-zinc-950 border-y border-zinc-900">
              <Section>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Heading Removed */}
                    <div className="text-4xl md:text-5xl text-white font-medium tracking-tight leading-tight">
                      I was never drawn to activity.<br />
                      <span className="text-zinc-500">I was drawn to leverage.</span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 text-lg leading-relaxed text-zinc-400"
                  >
                    <p>
                      Early exposure to markets showed me how discipline converts into returns. 
                      Venture evaluation showed me how unchecked assumptions break companies. 
                      Building small ventures showed me that speed without structure burns capital.
                    </p>
                    <p className="text-white">
                      Across every environment — trading desks, startup screening rooms, 0→1 builds — one pattern remained constant:
                    </p>
                    <div className="p-8 border border-zinc-800 rounded-2xl bg-black">
                      <div className="text-2xl text-white font-medium mb-2">Structure creates advantage.</div>
                      <p className="text-zinc-500">I don’t optimize for noise. I optimize for clarity, incentives, and execution.</p>
                    </div>
                  </motion.div>
                </div>
              </Section>
            </div>

            {/* Section 3 — Snapshot Metrics */}
            <Section>
              <div className="mb-16">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">Snapshot Metrics</h2>
                <p className="text-zinc-400">Measured exposure. Real stakes. Structured outcomes.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <MetricCard label="Revenue Generated" value="₹1L+ in 30 Days" />
                <MetricCard label="Trading Performance" value="20%+ Gains" />
                <MetricCard label="Venture Evaluation" value="15+ Startups" />
                <MetricCard label="Recognition" value="Top 25 VIP Pre-Seed" />
                <MetricCard label="Capital Raised" value="₹60K Sponsorship" />
              </div>
            </Section>

            {/* Section 4 — What I Do */}
            <div className="bg-zinc-950 border-y border-zinc-900">
              <Section>
                <div className="mb-16">
                  <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">What I Do</h2>
                  <p className="text-3xl text-white font-medium">I translate ambiguity into structured execution.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "Problem Decomposition", desc: "Break down complex problems into measurable drivers", icon: <Layers className="w-5 h-5" /> },
                    { title: "Incentive Alignment", desc: "Align incentives and execution pathways", icon: <Target className="w-5 h-5" /> },
                    { title: "Growth Modeling", desc: "Design financially disciplined growth models", icon: <BarChart3 className="w-5 h-5" /> },
                    { title: "Loop Closure", desc: "Close loops — not just propose ideas", icon: <Zap className="w-5 h-5" /> },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 border border-zinc-900 rounded-2xl hover:border-zinc-700 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-500">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-16 pt-16 border-t border-zinc-900">
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">I am comfortable in rooms where:</p>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="flex items-center gap-4 text-white font-medium">
                      <ChevronRight className="text-zinc-700" /> Decisions move capital
                    </div>
                    <div className="flex items-center gap-4 text-white font-medium">
                      <ChevronRight className="text-zinc-700" /> Execution determines growth
                    </div>
                    <div className="flex items-center gap-4 text-white font-medium">
                      <ChevronRight className="text-zinc-700" /> Accountability is visible
                    </div>
                  </div>
                </div>
              </Section>
            </div>

            {/* Section 5 — Current Direction */}
            <Section>
              <div className="max-w-3xl">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 mb-8">Current Direction</h2>
                <div className="space-y-8 text-2xl md:text-3xl text-zinc-400 leading-tight">
                  <p>
                    I am currently in a deliberate compounding phase — 
                    deepening <span className="text-white">financial rigor</span>, 
                    strategic <span className="text-white">problem structuring</span>, 
                    and <span className="text-white">commercial execution</span> capability.
                  </p>
                  <p>
                    Long-term, I am building toward <span className="text-white italic">ownership</span> — 
                    designing systems that scale and allocating capital with conviction.
                  </p>
                  <div className="pt-8">
                    <p className="text-sm font-mono uppercase tracking-widest text-zinc-600 mb-4">For now, I focus on one thing:</p>
                    <p className="text-4xl md:text-5xl text-white font-medium tracking-tighter">
                      Becoming the person trusted with leverage.
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </motion.div>
        ) : view === 'about' ? (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-48 pb-32"
          >
            <Section>
              <button 
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-24"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>

              <AboutSection title="Origin">
                <div className="space-y-8 text-2xl md:text-3xl text-zinc-400 leading-tight">
                  <p>I didn’t start with a title in mind.</p>
                  <p>I started with a question:</p>
                  <p className="text-white font-medium italic">Why do some decisions compound while others collapse?</p>
                  <p className="text-lg md:text-xl leading-relaxed mt-12">
                    My early curiosity wasn’t about entrepreneurship or finance as labels. 
                    It was about systems — how incentives shape behavior, how capital moves through markets, how structure determines survival.
                  </p>
                  <div className="grid gap-6 mt-12">
                    <div className="p-6 border-l border-zinc-800 bg-zinc-950/50">
                      <p className="text-lg text-white">Markets taught me discipline.</p>
                    </div>
                    <div className="p-6 border-l border-zinc-800 bg-zinc-950/50">
                      <p className="text-lg text-white">Venture evaluation taught me that assumptions kill faster than competition.</p>
                    </div>
                    <div className="p-6 border-l border-zinc-800 bg-zinc-950/50">
                      <p className="text-lg text-white">Building small ventures taught me that momentum without economics is fragility.</p>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed mt-12">
                    Over time, I stopped chasing experiences for variety. I started choosing environments for leverage.
                  </p>
                </div>
              </AboutSection>

              <AboutSection title="The Pattern I Keep Noticing">
                <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed">
                  <p>
                    Across trading desks, startup screening rooms, university strategy competitions, and early-stage builds — one pattern kept repeating:
                  </p>
                  <p className="text-3xl md:text-4xl text-white font-medium tracking-tight">Most failures are structural.</p>
                  <ul className="space-y-4 mt-8">
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" /> Incentives misaligned</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" /> Unit economics ignored</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" /> Growth pursued before stability</li>
                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" /> Decisions made emotionally</li>
                  </ul>
                  <p className="mt-12">
                    I became less interested in surface outcomes. More interested in underlying drivers.
                  </p>
                  <div className="pt-12 border-t border-zinc-900">
                    <p className="text-sm font-mono uppercase tracking-widest text-zinc-600 mb-8">I don’t just ask, “Will this work?” I ask:</p>
                    <div className="grid md:grid-cols-2 gap-8 text-white font-medium">
                      <p>What must go right?</p>
                      <p>What breaks first?</p>
                      <p>Where is the leverage?</p>
                      <p>Where is the hidden fragility?</p>
                    </div>
                  </div>
                  <p className="mt-12 italic text-zinc-500">That lens shapes how I think, build, and operate.</p>
                </div>
              </AboutSection>

              <AboutSection title="What Drives Me">
                <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed">
                  <p>I am not motivated by activity.</p>
                  <p className="text-3xl md:text-4xl text-white font-medium tracking-tight">I am motivated by control through competence.</p>
                  <p className="mt-12">I want to operate in environments where:</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white"><ChevronRight className="w-4 h-4 text-zinc-700" /> Decisions move capital</div>
                    <div className="flex items-center gap-4 text-white"><ChevronRight className="w-4 h-4 text-zinc-700" /> Execution has measurable stakes</div>
                    <div className="flex items-center gap-4 text-white"><ChevronRight className="w-4 h-4 text-zinc-700" /> Accountability is visible</div>
                  </div>
                  <p className="mt-12">
                    I am drawn to early or ambiguous situations — not because they are chaotic, but because they force clarity.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl">
                      <div className="text-white font-medium mb-2">Zero</div>
                      <p className="text-sm text-zinc-500">forces structure.</p>
                    </div>
                    <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl">
                      <div className="text-white font-medium mb-2">Constraint</div>
                      <p className="text-sm text-zinc-500">forces prioritization.</p>
                    </div>
                    <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl">
                      <div className="text-white font-medium mb-2">Pressure</div>
                      <p className="text-sm text-zinc-500">exposes weak thinking.</p>
                    </div>
                  </div>
                  <p className="mt-12 text-white font-medium">That is where I perform best.</p>
                </div>
              </AboutSection>

              <AboutSection title="My Philosophy">
                <div className="grid md:grid-cols-2 gap-12">
                  {[
                    { title: "On Capital", desc: "Capital amplifies structure. In disciplined systems, it accelerates dominance. In weak systems, it hides fragility temporarily." },
                    { title: "On Growth", desc: "Growth should follow strength, not ego. Scaling inefficiency only compounds weakness." },
                    { title: "On Risk", desc: "Risk is not avoided — it is calibrated. Exposure should be sized intelligently, not emotionally." },
                    { title: "On Execution", desc: "Strategy without execution is theory. Execution without structure is waste. The advantage lies in combining both." },
                  ].map((item, i) => (
                    <div key={i} className="space-y-4">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AboutSection>

              <AboutSection title="Where I’M Headed">
                <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed">
                  <p>Right now, I am intentionally compounding skill across five domains:</p>
                  <div className="flex flex-wrap gap-4">
                    {["Financial depth", "Strategic structuring", "Commercial alignment", "Execution authority", "AI-assisted leverage"].map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-zinc-900 text-zinc-300 rounded-full text-sm font-mono">{skill}</span>
                    ))}
                  </div>
                  <p className="mt-12">
                    Long-term, I aim to build and control scalable systems — not participate in them passively.
                  </p>
                  <p>But I am not in a rush to claim titles.</p>
                  <p className="text-3xl md:text-4xl text-white font-medium tracking-tight">I am in the phase of earning leverage.</p>
                </div>
              </AboutSection>

              <AboutSection title="The Standard I Hold">
                <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed">
                  <p>I never want my name associated with:</p>
                  <div className="grid md:grid-cols-2 gap-4 text-zinc-600">
                    <p>Average effort</p>
                    <p>Unstructured thinking</p>
                    <p>Hype without economics</p>
                    <p>Execution without accountability</p>
                  </div>
                  <div className="pt-12 space-y-4">
                    <p className="text-2xl text-white font-medium">If I am involved, I am accountable.</p>
                    <p className="text-2xl text-white font-medium">If I commit, I deliver.</p>
                  </div>
                  <p className="mt-12 text-zinc-500 italic">Reputation compounds slowly — and I treat it as capital.</p>
                </div>
              </AboutSection>
            </Section>
          </motion.div>
        ) : view === 'projects' ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-48 pb-32"
          >
            <Section>
              <div className="mb-24">
                <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8">
                  Structured Thinking.<br />Applied.
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                  These projects represent 0→1 builds, strategic modeling, growth experimentation, and research-backed analysis across finance, consumer, and digital environments.
                  <br /><br />
                  Each project is presented as a structured brief — not a summary.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 border border-zinc-900 rounded-2xl bg-zinc-950/30 hover:border-zinc-700 transition-all group flex flex-col h-full"
                  >
                    <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">0{i + 1}</div>
                    <h2 className="text-2xl font-medium text-white mb-2 group-hover:text-zinc-300 transition-colors">{project.title}</h2>
                    <div className="text-sm text-zinc-500 mb-6">{project.subtitle}</div>
                    <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
                    <button 
                      onClick={() => navigateTo('projectDetail', project.id)}
                      className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all"
                    >
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </Section>
          </motion.div>
        ) : view === 'projectDetail' && selectedProject !== null ? (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-48 pb-32"
          >
            <Section>
              <button 
                onClick={() => navigateTo('projects')}
                className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-24"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </button>

              <div className="mb-32">
                <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6">
                  {projects[selectedProject].fullTitle}
                </h1>
                <div className="h-px w-full bg-zinc-900" />
              </div>

              <div className="grid lg:grid-cols-3 gap-24">
                <div className="lg:col-span-2 space-y-24">
                  <div>
                    <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8">Context</h2>
                    <p className="text-2xl md:text-3xl text-zinc-300 leading-tight">
                      {projects[selectedProject].context}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8">Approach</h2>
                    <ul className="space-y-6">
                      {projects[selectedProject].approach.map((step, idx) => (
                        <li key={idx} className="flex gap-6 text-xl text-zinc-400 leading-relaxed">
                          <span className="text-zinc-700 font-mono">0{idx + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-24">
                  <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl">
                    <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8">Results</h2>
                    <ul className="space-y-4">
                      {projects[selectedProject].results.map((result, idx) => (
                        <li key={idx} className="flex gap-4 text-white font-medium">
                          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 border border-zinc-900 rounded-2xl">
                    <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8">What This Demonstrated</h2>
                    <ul className="space-y-4">
                      {projects[selectedProject].demonstrated.map((item, idx) => (
                        <li key={idx} className="text-zinc-400 italic">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full py-4 border border-zinc-800 text-zinc-500 font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-900 hover:text-white transition-all flex items-center justify-center gap-2">
                    <Download className="w-3 h-3" /> Export Case Brief (PDF)
                  </button>
                </div>
              </div>

              <div className="mt-48 pt-12 border-t border-zinc-900">
                <button 
                  onClick={() => navigateTo('projects')}
                  className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Projects
                </button>
              </div>
            </Section>
          </motion.div>
        ) : view === 'activities' ? (
          <motion.div
            key="activities"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-48 pb-32"
          >
            <Section>
              <div className="mb-24">
                <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8">
                  Signals Beyond Resume
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                  Performance is not built only in offices. 
                  Discipline, negotiation, resilience, and accountability are shaped in competitive, institutional, and service environments.
                  <br /><br />
                  These experiences reflect that layer.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    title: "Sponsorship Negotiation & Capital Raising",
                    subtitle: "Raised ₹60K for University Business Fest",
                    context: "University event required structured corporate sponsorship and deliverable alignment.",
                    whatIDid: [
                      "Identified potential sponsors",
                      "Structured value proposition",
                      "Negotiated deliverables",
                      "Managed execution accountability"
                    ],
                    outcome: "₹60K raised in sponsorship capital. Delivered commitments with institutional reliability.",
                    signals: "Selling is alignment — not pressure. Capital follows structured value. Negotiation requires preparation, not volume."
                  },
                  {
                    title: "Competitive Sports",
                    subtitle: "Football (State Representation – Gujarat) | District-Level Badminton & Chess",
                    context: "Participated in competitive team and individual sports environments.",
                    whatIDid: [
                      "Performance under pressure",
                      "Discipline in preparation",
                      "Accountability within team systems",
                      "Strategic thinking in fast-moving situations"
                    ],
                    outcome: "State and District level representation across multiple disciplines.",
                    signals: "I am comfortable in performance-based environments. Competition sharpens clarity."
                  },
                  {
                    title: "Student Investment Fund Contributor",
                    subtitle: "Equity Exposure & Structured Market Analysis",
                    context: "Participated in institutional-level equity discussions and structured capital evaluation.",
                    whatIDid: [
                      "Data-backed reasoning",
                      "Collaborative decision framing",
                      "Volatility analysis discipline"
                    ],
                    outcome: "Active contribution to fund strategy and sectoral analysis.",
                    signals: "Early exposure to capital logic. Comfort with measurable stakes."
                  },
                  {
                    title: "Youth Mentorship & Educational Sessions",
                    subtitle: "Vatsalyapuram Orphanage",
                    context: "Organized finance and structured learning sessions for youth programs.",
                    whatIDid: [
                      "Patience in communication",
                      "Simplification of complex ideas",
                      "Responsibility beyond performance environments"
                    ],
                    outcome: "Successful delivery of financial literacy programs for youth.",
                    signals: "Ambition without grounding is unstable. Contribution builds character."
                  }
                ].map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 border border-zinc-900 rounded-2xl bg-zinc-950/20 hover:border-zinc-800 transition-all"
                  >
                    <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">0{i + 1}</div>
                    <h2 className="text-2xl font-medium text-white mb-2">{activity.title}</h2>
                    <div className="text-sm text-zinc-500 mb-8">{activity.subtitle}</div>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Context</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{activity.context}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">What I Did / Built</h3>
                        <ul className="space-y-2">
                          {activity.whatIDid.map((item, idx) => (
                            <li key={idx} className="text-zinc-300 text-sm flex gap-3">
                              <span className="text-zinc-700">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-zinc-900">
                        <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">What This Signals</h3>
                        <p className="text-zinc-400 text-sm italic leading-relaxed">{activity.signals}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-32 pt-32 border-t border-zinc-900">
                <div className="max-w-3xl">
                  <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12">Personal Operating Standards</h2>
                  <div className="space-y-12">
                    <p className="text-2xl text-zinc-400 leading-tight">
                      Across environments — competitive, institutional, or service — my internal standard remains consistent:
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      {["Show up prepared", "Close what I commit to", "Compete with composure", "Improve through feedback"].map((standard, i) => (
                        <div key={i} className="flex items-center gap-4 text-white font-medium">
                          <ChevronRight className="w-4 h-4 text-zinc-700" /> {standard}
                        </div>
                      ))}
                    </div>
                    <div className="pt-12">
                      <p className="text-4xl md:text-5xl text-white font-medium tracking-tighter">
                        Performance is a habit.<br />
                        <span className="text-zinc-700 italic">Not a mood.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </motion.div>
        ) : view === 'certifications' ? (
          <motion.div
            key="certifications"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-48 pb-32"
          >
            <Section>
              <div className="mb-24">
                <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8">
                  Structured Skill Reinforcement
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                  Certifications are not identity. 
                  They are reinforcement layers — strengthening financial, analytical, and technical depth to support execution in high-stakes environments.
                </p>
              </div>

              <div className="max-w-4xl space-y-1">
                {[
                  {
                    title: "Financial Modeling & Valuation",
                    issuer: "The Wall Street School",
                    relevance: "Built institutional-grade financial modeling capability — including DCF, scenario modeling, valuation logic, and capital structure sensitivity.",
                    strengthened: "Strengthened ability to stress-test assumptions and evaluate downside–upside asymmetry."
                  },
                  {
                    title: "Fundamental Analysis",
                    issuer: "CA Rachna Ranade",
                    relevance: "Enhanced structured equity research capability — focusing on financial statements, margin evaluation, and long-term business viability.",
                    strengthened: "Strengthened narrative-to-numbers translation."
                  },
                  {
                    title: "Technical Analysis",
                    issuer: "Mukul Agarwal",
                    relevance: "Improved market timing discipline, signal validation logic, and probability framing in volatile environments.",
                    strengthened: "Reinforced structured risk–reward calibration."
                  },
                  {
                    title: "MS Excel (Advanced)",
                    issuer: "Udemy",
                    relevance: "Strengthened analytical efficiency through advanced formulas, data structuring, financial modeling speed, and dashboard logic.",
                    strengthened: "Execution leverage through technical precision."
                  },
                  {
                    title: "Bloomberg Terminal Exposure",
                    issuer: "Institutional Access",
                    relevance: "Improved real-time market data analysis, equity screening capability, and macro-sector monitoring.",
                    strengthened: "Enhanced capital decision awareness."
                  }
                ].map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="py-12 border-t border-zinc-900 first:border-t-0 group"
                  >
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      <div>
                        <h2 className="text-2xl font-medium text-white mb-2">{cert.title}</h2>
                        <div className="text-sm font-mono text-zinc-600 uppercase tracking-widest">{cert.issuer}</div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <div>
                          <h3 className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">Relevance</h3>
                          <p className="text-zinc-400 leading-relaxed">{cert.relevance}</p>
                        </div>
                        <p className="text-zinc-500 italic text-sm">{cert.strengthened}</p>
                        <div className="pt-4">
                          <button className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                            View Credential <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-32 pt-32 border-t border-zinc-900">
                <div className="max-w-3xl">
                  <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12">Skill Stack Integration</h2>
                  <div className="space-y-8">
                    <p className="text-2xl text-zinc-400 leading-tight">
                      Across finance, modeling, and technical analysis, the objective remains consistent:
                    </p>
                    <p className="text-4xl md:text-5xl text-white font-medium tracking-tighter">
                      Build institutional depth.
                    </p>
                    <div className="pt-8 space-y-4">
                      <p className="text-zinc-500 text-lg">I do not collect certifications for display.</p>
                      <p className="text-white text-2xl font-medium italic">I build capability for leverage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </motion.div>
        ) : view === 'contact' ? (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-48 pb-32"
          >
            <Section>
              <div className="mb-32">
                <h1 className="text-5xl md:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-12">
                  Let’s Build Something<br />That Compounds.
                </h1>
                <div className="max-w-2xl space-y-8 text-xl text-zinc-400 leading-relaxed">
                  <p>I am open to roles and conversations in environments where:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-white font-medium">
                      <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-2.5 shrink-0" />
                      Decisions carry measurable stakes
                    </li>
                    <li className="flex items-start gap-4 text-white font-medium">
                      <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-2.5 shrink-0" />
                      Execution matters more than optics
                    </li>
                    <li className="flex items-start gap-4 text-white font-medium">
                      <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-2.5 shrink-0" />
                      Capital, growth, and structure intersect
                    </li>
                  </ul>
                  <p className="pt-8">
                    If you’re building with discipline — and need someone who can translate clarity into execution — I’m open to a serious conversation.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-16">
                  <div>
                    <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] mb-8">Direct Contact</h2>
                    <div className="space-y-8">
                      <div>
                        <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">Email</div>
                        <a href="mailto:ylc27tanish.jain@mastersunion.org" className="text-2xl text-white hover:text-zinc-400 transition-colors">
                          ylc27tanish.jain@mastersunion.org
                        </a>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">Phone</div>
                        <a href="tel:+919328048812" className="text-2xl text-white hover:text-zinc-400 transition-colors">
                          +91 9328048812
                        </a>
                      </div>
                      <div className="flex gap-12">
                        <div>
                          <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">LinkedIn</div>
                          <a href="#" className="text-white hover:text-zinc-400 transition-colors flex items-center gap-2">
                            Profile <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">Resume</div>
                          <button className="text-white hover:text-zinc-400 transition-colors flex items-center gap-2">
                            Download PDF <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-12 border border-zinc-900 rounded-2xl bg-zinc-950/20">
                  <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] mb-12">Message</h2>
                  <form className="space-y-8">
                    <div>
                      <label className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest block mb-4">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest block mb-4">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest block mb-4">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                        placeholder="Briefly describe the context..."
                      />
                    </div>
                    <button className="w-full py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              <div className="mt-48 pt-32 border-t border-zinc-900">
                <p className="text-5xl md:text-8xl text-white font-medium tracking-tighter leading-none">
                  Reputation compounds.<br />
                  <span className="text-zinc-700 italic">So does leverage.</span>
                </p>
              </div>
            </Section>
          </motion.div>
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-48 pb-32"
          >
            <Section>
              <div className="mb-24">
                <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8">
                  Execution Under<br />Measurable Stakes
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                  I’ve intentionally placed myself in environments where decisions influence capital, growth, or strategic direction. 
                  Below are structured summaries of that exposure.
                </p>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, i) => (
                  <div key={i} className="border-t border-zinc-900">
                    <button 
                      onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                      className="w-full py-12 flex flex-col md:flex-row md:items-center justify-between text-left group"
                    >
                      <div className="max-w-xl">
                        <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">
                          {exp.role} | {exp.period}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium text-white group-hover:text-zinc-400 transition-colors mb-4">
                          {exp.company}
                        </h2>
                        <p className="text-zinc-500">{exp.tagline}</p>
                      </div>
                      <div className="mt-8 md:mt-0">
                        <div className={`w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-white transition-transform duration-500 ${expandedExp === i ? 'rotate-45 bg-white text-black border-white' : ''}`}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedExp === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-12 grid md:grid-cols-2 gap-12">
                            <div className="space-y-12">
                              <div>
                                <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">Context</h3>
                                <p className="text-zinc-300 leading-relaxed">{exp.context}</p>
                              </div>
                              <div>
                                <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">What I Did</h3>
                                <ul className="space-y-3">
                                  {exp.whatIDid.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-zinc-400">
                                      <span className="text-zinc-700">•</span> {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="space-y-12">
                              <div>
                                <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">Impact</h3>
                                <ul className="space-y-3">
                                  {exp.impact.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-white font-medium">
                                      <span className="text-zinc-700">•</span> {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">What It Strengthened</h3>
                                <ul className="space-y-3">
                                  {exp.strengthened.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-zinc-500 italic">
                                      <span className="text-zinc-700">•</span> {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-32 pt-32 border-t border-zinc-900">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12">Operating Lens</h2>
                <div className="max-w-3xl space-y-8">
                  <p className="text-2xl text-zinc-400">Across roles, my orientation has remained consistent:</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4 text-white font-medium">
                      <ChevronRight className="w-5 h-5 text-zinc-700 mt-1" /> Break complexity into structured drivers
                    </div>
                    <div className="flex items-start gap-4 text-white font-medium">
                      <ChevronRight className="w-5 h-5 text-zinc-700 mt-1" /> Validate assumptions before committing capital
                    </div>
                    <div className="flex items-start gap-4 text-white font-medium">
                      <ChevronRight className="w-5 h-5 text-zinc-700 mt-1" /> Align execution with measurable outcomes
                    </div>
                    <div className="flex items-start gap-4 text-white font-medium">
                      <ChevronRight className="w-5 h-5 text-zinc-700 mt-1" /> Prioritize leverage over activity
                    </div>
                  </div>
                  <p className="pt-8 text-xl text-white font-medium italic">I am comfortable operating where performance is visible.</p>
                </div>
              </div>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 6 — CTA (Common) */}
      <div className="bg-white text-black py-32">
        <Section>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none mb-8">
                Let's build something that matters.
              </h2>
              <p className="text-xl text-zinc-600 mb-12">
                If you’re building in an environment where clarity, execution, and discipline are the primary drivers — let’s connect.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="px-8 py-4 bg-black text-white font-medium rounded-full flex items-center gap-2 hover:bg-zinc-800 transition-all"
                >
                  Get In Touch <Mail className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 border border-zinc-300 text-black font-medium rounded-full hover:bg-zinc-100 transition-all flex items-center gap-2">
                  Download Resume <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-6 border-l border-zinc-200 pl-8">
              <div className="text-sm font-mono uppercase tracking-widest text-zinc-400">Environment Fit</div>
              <div className="text-2xl font-medium">Clarity {'>'} Noise</div>
              <div className="text-2xl font-medium">Execution {'>'} Optics</div>
              <div className="text-2xl font-medium">Discipline {'>'} Momentum</div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-600">
          © {new Date().getFullYear()} — Structured Thinking • Commercial Execution
        </div>
      </footer>
    </div>
  );
}
