import React, { useState } from 'react';
import { ThemeType, Blog } from './types';
import { PROFILE, PAPERS, NEWS, STUDENTS, BLOGS, SHOW_BLOGS, SELECTED_PAPER_IDS } from '../constants';
import { ThemeSelector } from '../components/ThemeSelector';
import { ResearchChat } from '../components/ResearchChat';
import { 
  BookOpen, 
  GraduationCap, 
  Newspaper, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin,
  Users,
  PenTool,
  ArrowLeft,
  Clock,
  Tag
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.MODERN);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [showAllPublications, setShowAllPublications] = useState(false);

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    if (selectedBlog || showAllPublications) {
      setSelectedBlog(null);
      setShowAllPublications(false);
      // Wait for render to switch back to main view then scroll
      setTimeout(() => {
        doScroll(id);
      }, 50);
    } else {
      doScroll(id);
    }
  };

  const doScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  // Dynamic Styles based on Theme
  const getThemeStyles = () => {
    switch (theme) {
      case ThemeType.CYBER:
        return {
          bg: "bg-slate-950",
          text: "text-slate-300",
          heading: "text-emerald-400 font-mono",
          navBg: "bg-slate-900/90 border-b border-emerald-900",
          card: "bg-slate-900 border border-slate-800 hover:border-emerald-500/50",
          newsItem: "border-l-2 border-slate-800 hover:border-emerald-500 hover:bg-slate-900/50",
          accent: "text-emerald-400",
          button: "bg-emerald-600 hover:bg-emerald-500 text-black font-bold font-mono",
          navLinkActive: "text-emerald-400 border-b-2 border-emerald-400",
          heroGradient: "from-slate-900 via-slate-900 to-emerald-900/20",
          tag: "bg-emerald-900/30 text-emerald-300 border border-emerald-800"
        };
      case ThemeType.MINIMALIST:
        return {
          bg: "bg-stone-50",
          text: "text-stone-800",
          heading: "text-stone-900 font-serif",
          navBg: "bg-white/90 border-b border-stone-200",
          card: "bg-white border border-stone-200 shadow-sm hover:shadow-md",
          newsItem: "border-l-2 border-stone-200 hover:border-stone-800",
          accent: "text-stone-600",
          button: "bg-stone-900 hover:bg-stone-700 text-white font-sans",
          navLinkActive: "text-black font-semibold",
          heroGradient: "from-white via-stone-50 to-stone-100",
          tag: "bg-stone-100 text-stone-600 border border-stone-200"
        };
      case ThemeType.MODERN:
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          heading: "text-gray-900 font-sans tracking-tight",
          navBg: "bg-white/90 backdrop-blur-md shadow-sm",
          card: "bg-white shadow-lg shadow-gray-200/50 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all",
          newsItem: "border-l-4 border-transparent hover:border-blue-500 bg-white hover:bg-blue-50/30 rounded-r-lg shadow-sm",
          accent: "text-blue-600",
          button: "bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-lg shadow-gray-900/20 rounded-full",
          navLinkActive: "text-blue-600 font-medium bg-blue-50 rounded-full",
          heroGradient: "from-blue-50 via-white to-indigo-50",
          tag: "bg-blue-50 text-blue-600 border border-blue-100"
        };
    }
  };

  const s = getThemeStyles();

  // Navigation Component
  const NavLink = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => (
    <button 
      onClick={() => scrollTo(to)}
      className={`flex items-center gap-2 px-4 py-2 transition-all duration-200 ${activeSection === to && !selectedBlog ? s.navLinkActive : 'hover:opacity-70'}`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${s.bg} ${s.text}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 px-6 py-4 ${s.navBg}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className={`text-xl font-bold ${s.heading} cursor-pointer`} onClick={() => scrollTo('home')}>
            {PROFILE.name}
          </h1>
          <div className="hidden md:flex gap-2">
            <NavLink to="home" icon={BookOpen} label="About" />
            <NavLink to="research" icon={Sparkles} label="Research" />
            <NavLink to="students" icon={Users} label="Students" />
            <NavLink to="background" icon={Clock} label="Experiences" />
            {SHOW_BLOGS && <NavLink to="blogs" icon={PenTool} label="Blogs" />}
            <NavLink to="teaching" icon={GraduationCap} label="Teaching" />
            <NavLink to="contact" icon={Mail} label="Contact" />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-28 pb-12 px-6">
        
        {selectedBlog ? (
          /* Blog Detail View */
          <article className="max-w-3xl mx-auto animate-fade-in">
            <button 
              onClick={() => setSelectedBlog(null)}
              className={`mb-8 flex items-center gap-2 text-sm font-medium transition-colors ${s.accent} hover:opacity-70`}
            >
              <ArrowLeft size={16} /> Back to Home
            </button>
            
            {selectedBlog.coverImage && (
              <img 
                src={selectedBlog.coverImage} 
                alt={selectedBlog.title} 
                className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-md"
              />
            )}
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedBlog.tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 text-xs rounded-full ${s.tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className={`text-3xl md:text-4xl font-bold ${s.heading}`}>{selectedBlog.title}</h1>
              
              <div className="flex items-center gap-4 text-sm opacity-60 mb-8">
                <span className="flex items-center gap-1"><Clock size={14}/> {selectedBlog.date}</span>
                <span>•</span>
                <span>{selectedBlog.readTime}</span>
              </div>
              
              <div className={`prose prose-lg max-w-none ${theme === ThemeType.CYBER ? 'prose-invert' : ''}`}>
                <p className="whitespace-pre-line leading-loose opacity-90">
                  {selectedBlog.content}
                </p>
              </div>
            </div>
          </article>

        ) : showAllPublications ? (
          /* All Publications View */
          <div className="max-w-6xl mx-auto animate-fade-in">
            <button 
              onClick={() => setShowAllPublications(false)}
              className={`mb-8 flex items-center gap-2 text-sm font-medium transition-colors ${s.accent} hover:opacity-70`}
            >
              <ArrowLeft size={16} /> Back to Home
            </button>
            
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className={`text-4xl md:text-5xl font-bold ${s.heading}`}>All Publications</h1>
                <p className="text-lg opacity-70">Complete list of research papers grouped by topic</p>
              </div>

              {/* Category Navigation */}
              {(() => {
                // First, generate the grouped papers to get category names
                const papersByTopic = PAPERS.reduce((acc, paper) => {
                  let mainTopic = paper.tags[0] || 'Other';
                  
                  // Apply the same merging logic
                  if (mainTopic === 'Federated Learning' || mainTopic === 'Gossip Learning') {
                    mainTopic = 'Decentralized Learning';
                  } else if (mainTopic === 'Digital Biomarkers' || mainTopic === 'Mobile Health') {
                    mainTopic = 'Mobile Health';
                  } else if (mainTopic === 'Privacy' || mainTopic === 'Differential Privacy') {
                    mainTopic = 'Privacy';
                  } else if (mainTopic === 'Test-Time Adaptation' || mainTopic === 'Speech') {
                    mainTopic = 'Test-Time Adaptation';
                  } else if (mainTopic === 'Topology' || mainTopic === 'Trajectory Data' || mainTopic === 'COVID-19') {
                    mainTopic = 'Spatial Computing';
                  } else if (mainTopic === 'Activity Recognition' || mainTopic === 'Time Series') {
                    mainTopic = 'Temporal Analysis';
                  }
                  
                  if (!acc[mainTopic]) acc[mainTopic] = [];
                  acc[mainTopic].push(paper);
                  return acc;
                }, {} as Record<string, typeof PAPERS>);

                // Filter out PhD thesis category and sort by paper count (descending)
                const categories = Object.entries(papersByTopic)
                  .filter(([category]) => category !== 'PhD Thesis')
                  .sort(([, a], [, b]) => b.length - a.length)
                  .map(([category]) => category);

                return (
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          const element = document.getElementById(`category-${category.toLowerCase().replace(/\s+/g, '-')}`);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${s.button} hover:scale-105`}
                      >
                        {category} ({papersByTopic[category].length})
                      </button>
                    ))}
                  </div>
                );
              })()}

              {/* Group papers by keywords/topics */}
              {(() => {
                const papersByTopic = PAPERS.reduce((acc, paper) => {
                  let mainTopic = paper.tags[0] || 'Other';
                  
                  // Merge related topics
                  if (mainTopic === 'Federated Learning' || mainTopic === 'Gossip Learning') {
                    mainTopic = 'Decentralized Learning';
                  } else if (mainTopic === 'Digital Biomarkers' || mainTopic === 'Mobile Health') {
                    mainTopic = 'Mobile Health';
                  } else if (mainTopic === 'Privacy' || mainTopic === 'Differential Privacy') {
                    mainTopic = 'Privacy';
                  } else if (mainTopic === 'Test-Time Adaptation' || mainTopic === 'Speech') {
                    mainTopic = 'Test-Time Adaptation';
                  } else if (mainTopic === 'Topology' || mainTopic === 'Trajectory Data' || mainTopic === 'COVID-19') {
                    mainTopic = 'Spatial Computing';
                  } else if (mainTopic === 'Activity Recognition' || mainTopic === 'Time Series') {
                    mainTopic = 'Temporal Analysis';
                  }
                  
                  if (!acc[mainTopic]) acc[mainTopic] = [];
                  acc[mainTopic].push(paper);
                  return acc;
                }, {} as Record<string, typeof PAPERS>);

                return Object.entries(papersByTopic)
                  .filter(([topic]) => topic !== 'PhD Thesis')
                  .map(([topic, papers], index) => (
                  <div key={topic} id={`category-${topic.toLowerCase().replace(/\s+/g, '-')}`} className="space-y-4 scroll-mt-20">
                    <div className="flex items-center justify-between border-b pb-2 border-gray-200 dark:border-gray-800">
                      <h2 className={`text-2xl font-bold ${s.heading}`}>
                        {topic.charAt(0).toUpperCase() + topic.slice(1)}
                      </h2>
                      {index > 0 && (
                        <button
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${s.button} hover:scale-105 flex items-center gap-1`}
                        >
                          ↑ Back to Top
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {papers.map((paper) => (
                        <div key={paper.id} className={`p-6 transition-all ${s.card} ${theme === ThemeType.MINIMALIST ? 'border-l-4 border-l-stone-800 pl-6' : 'rounded-2xl'}`}>
                          <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">
                             <h4 className={`text-lg md:text-xl font-bold leading-tight ${theme === ThemeType.CYBER ? 'text-emerald-300' : 'text-gray-900'}`}>
                               {paper.title}
                             </h4>
                             <span className={`whitespace-nowrap px-3 py-1 text-xs font-bold rounded uppercase tracking-wider self-start ${theme === ThemeType.CYBER ? 'bg-emerald-900 text-emerald-400' : 'bg-gray-100 text-gray-600'}`}>
                               {paper.venue} {paper.year}
                             </span>
                          </div>
                          
                          <div className={`mb-3 text-sm font-medium ${s.accent}`}>
                            {paper.authors.map((auth, i) => (
                               <span key={i} className={auth.includes(PROFILE.name) ? "font-bold underline decoration-2 underline-offset-4" : ""}>
                                 {auth}{i < paper.authors.length - 1 ? ", " : ""}
                               </span>
                            ))}
                          </div>

                          <p className={`text-sm leading-relaxed mb-4 opacity-90`}>
                            {paper.abstract}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {paper.tags.map(tag => (
                                    <span key={tag} className="text-xs opacity-60">#{tag}</span>
                                ))}
                            </div>
                            <a href={paper.link} className={`text-sm font-semibold flex items-center gap-1 hover:opacity-70 ${s.accent}`}>
                              PDF <ChevronRight size={14} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>

        ) : (
          /* Standard Single Page View */
          <>
            {/* Top Section: Hero + News Grid */}
            <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12`}>
              
              {/* Left Column: Hero / Profile (8 cols) */}
              <section id="home" className={`lg:col-span-8 flex flex-col justify-center rounded-3xl p-8 md:p-12 bg-gradient-to-br ${s.heroGradient}`}>
                <div className="space-y-8 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="relative shrink-0 mx-auto md:mx-0">
                        <img 
                          src="/imgs/profile3.jpg" 
                          alt="Profile" 
                          className={`w-40 h-40 rounded-full object-cover border-4 ${theme === ThemeType.CYBER ? 'border-emerald-500/50' : 'border-white shadow-xl'}`} 
                        />
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <h2 className={`text-4xl md:text-5xl font-bold ${s.heading}`}>{PROFILE.name}</h2>
                      <p className={`text-xl font-light ${theme === ThemeType.CYBER ? 'text-emerald-200/80' : 'text-gray-500'}`}>
                        {PROFILE.title}
                      </p>
                      <div className={`flex items-center justify-center md:justify-start gap-2 ${s.accent}`}>
                         <MapPin size={18} />
                         <span>{PROFILE.affiliation}</span>
                      </div>
                      
                      {/* Links moved here */}
                      <div className="flex items-center justify-center md:justify-start gap-3 pt-2 flex-wrap">
                        <a href={PROFILE.scholarLink} target="_blank" rel="noreferrer" className={`${s.button} px-4 py-2 text-sm flex items-center gap-2 rounded-full transition-transform hover:scale-105`}>
                          <GraduationCap size={16} />
                          <span>Scholar</span>
                        </a>
                        <a href={PROFILE.linkedinLink} target="_blank" rel="noreferrer" className={`${s.button} px-4 py-2 text-sm flex items-center gap-2 rounded-full transition-transform hover:scale-105`}>
                          <Linkedin size={16} />
                          <span>LinkedIn</span>
                        </a>
                        <a href="mailto:a.ghosh.1@bham.ac.uk" className={`${s.button} px-4 py-2 text-sm flex items-center gap-2 rounded-full transition-transform hover:scale-105`}>
                          <Mail size={16} />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="text-lg leading-relaxed opacity-90 text-justify" dangerouslySetInnerHTML={{ __html: PROFILE.bio }} />

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {PROFILE.interests.map((interest, i) => (
                      <span key={i} className={`px-4 py-1.5 text-sm rounded-full border ${theme === ThemeType.CYBER ? 'border-emerald-800 bg-emerald-900/20 text-emerald-300' : 'border-gray-200 bg-white text-gray-700'}`}>
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Right Column: Compact News (4 cols) */}
              <section id="news" className="lg:col-span-4 flex flex-col">
                 <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                    <Newspaper className={s.accent} size={20} />
                    <h3 className={`text-xl font-bold ${s.heading}`}>News</h3>
                 </div>
                 
                 <div className="space-y-2 flex-1 overflow-y-auto max-h-[600px] pr-2 scrollbar-thin">
                    {NEWS.map((item) => (
                      <div key={item.id} className={`p-3 transition-all group ${s.newsItem}`}>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className={`text-xs font-bold opacity-50 uppercase tracking-wide`}>{item.date}</span>
                          {item.relatedPaperId && <ExternalLink size={10} className="opacity-40" />}
                        </div>
                        <div className="font-medium text-sm leading-snug group-hover:text-current">
                          {item.title} <span className="font-normal opacity-70 mx-1">-</span> <span className="font-light opacity-80">{item.content}</span>
                        </div>
                      </div>
                    ))}
                 </div>
              </section>
            </div>

            {/* Research / Publications */}
            <section id="research" className="py-8 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-baseline justify-between border-b pb-4 border-gray-200 dark:border-gray-800">
                  <h3 className={`text-3xl font-bold ${s.heading}`}>Selected Publications</h3>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => {
                        setShowAllPublications(true);
                        setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 0);
                      }}
                      className={`text-sm flex items-center gap-1 hover:underline ${s.accent}`}
                    >
                      All Publications <ChevronRight size={14} />
                    </button>
                    <a href={PROFILE.scholarLink} className={`text-sm flex items-center gap-1 hover:underline ${s.accent}`}>
                      View all on Scholar <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {PAPERS.filter(paper => SELECTED_PAPER_IDS.includes(paper.id)).map((paper) => (
                    <div key={paper.id} className={`p-6 transition-all ${s.card} ${theme === ThemeType.MINIMALIST ? 'border-l-4 border-l-stone-800 pl-6' : 'rounded-2xl'}`}>
                      <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">
                         <h4 className={`text-lg md:text-xl font-bold leading-tight ${theme === ThemeType.CYBER ? 'text-emerald-300' : 'text-gray-900'}`}>
                           {paper.title}
                         </h4>
                         <span className={`whitespace-nowrap px-3 py-1 text-xs font-bold rounded uppercase tracking-wider self-start ${theme === ThemeType.CYBER ? 'bg-emerald-900 text-emerald-400' : 'bg-gray-100 text-gray-600'}`}>
                           {paper.venue} {paper.year}
                         </span>
                      </div>
                      
                      <div className={`mb-3 text-sm font-medium ${s.accent}`}>
                        {paper.authors.map((auth, i) => (
                           <span key={i} className={auth.includes(PROFILE.name) ? "font-bold underline decoration-2 underline-offset-4" : ""}>
                             {auth}{i < paper.authors.length - 1 ? ", " : ""}
                           </span>
                        ))}
                      </div>

                      <p className={`text-sm leading-relaxed mb-4 opacity-90`}>
                        {paper.abstract}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            {paper.tags.map(tag => (
                                <span key={tag} className="text-xs opacity-60">#{tag}</span>
                            ))}
                        </div>
                        <a href={paper.link} className={`text-sm font-semibold flex items-center gap-1 hover:opacity-70 ${s.accent}`}>
                          PDF <ChevronRight size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PhD Students */}
            <section id="students" className="py-8 max-w-6xl mx-auto">
               <div className="flex items-baseline gap-3 border-b pb-4 mb-6 border-gray-200 dark:border-gray-800">
                  <Users className={s.accent} size={24} />
                  <h3 className={`text-3xl font-bold ${s.heading}`}>PhD Students</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {STUDENTS.map((student) => (
                    <div key={student.id} className={`p-6 flex items-center gap-4 ${s.card} ${theme === ThemeType.MINIMALIST ? 'border-t-4 border-t-stone-800' : 'rounded-xl'}`}>
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${theme === ThemeType.CYBER ? 'bg-slate-800 text-emerald-400' : 'bg-gray-100 text-gray-600'}`}>
                          {student.name.charAt(0)}
                       </div>
                       <div>
                          <h4 className="font-bold text-lg">{student.name}</h4>
                          <p className="text-sm opacity-70 italic">({student.topic})</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* Research Blogs */}
            
              {/* Alma Mater & Previous Employers */}
              <section id="background" className="py-8 max-w-6xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3 border-b pb-4 mb-6 border-gray-200 dark:border-gray-800">
                    <h3 className={`text-3xl font-bold ${s.heading}`}>Alma Mater & Previous Employers</h3>
                  </div>

                  <div className={`p-8 ${s.card} ${theme !== ThemeType.MINIMALIST ? 'rounded-2xl' : ''}`}>
                     <div className="space-y-4">
                       <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-bold">2023–2020 — University of Cambridge</h4>
                            <p className="opacity-70 text-sm">Senior Research Associate under Prof. Cecilia Mascolo</p>
                          </div>
                          <span className={`px-3 py-1 text-xs rounded-full ${theme === ThemeType.CYBER ? 'bg-slate-800' : 'bg-gray-100'}`}>Research</span>
                       </div>

                       <div className="border-t border-gray-100 dark:border-slate-800 pt-4 flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-bold">2019–2020 — Imperial College London</h4>
                            <p className="opacity-70 text-sm">Research Associate under Prof. Thomas Heinis</p>
                          </div>
                          <span className={`px-3 py-1 text-xs rounded-full ${theme === ThemeType.CYBER ? 'bg-slate-800' : 'bg-gray-100'}`}>Research</span>
                       </div>

                       <div className="border-t border-gray-100 dark:border-slate-800 pt-4 flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-bold">2015–2019 — PhD in Informatics, University of Edinburgh</h4>
                            <p className="opacity-70 text-sm">PhD under Dr. Rik Sarkar</p>
                          </div>
                          <span className={`px-3 py-1 text-xs rounded-full ${theme === ThemeType.CYBER ? 'bg-slate-800' : 'bg-gray-100'}`}>Education</span>
                       </div>

                       <div className="border-t border-gray-100 dark:border-slate-800 pt-4 flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-bold">2011–2015 — Senior Software Development Engineer, Intel India</h4>
                            <p className="opacity-70 text-sm">Professional software engineering role in industry</p>
                          </div>
                          <span className={`px-3 py-1 text-xs rounded-full ${theme === ThemeType.CYBER ? 'bg-slate-800' : 'bg-gray-100'}`}>Industry</span>
                       </div>

                       <div className="border-t border-gray-100 dark:border-slate-800 pt-4 flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-bold">2009–2011 — M.Tech in Computer Science, IIT Bombay</h4>
                            <p className="opacity-70 text-sm">Master of Technology in Computer Science</p>
                          </div>
                          <span className={`px-3 py-1 text-xs rounded-full ${theme === ThemeType.CYBER ? 'bg-slate-800' : 'bg-gray-100'}`}>Education</span>
                       </div>
                     </div>
                  </div>
                </div>
              </section>

        {SHOW_BLOGS && (
        <section id="blogs" className="py-8 max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 border-b pb-4 mb-6 border-gray-200 dark:border-gray-800">
           <PenTool className={s.accent} size={24} />
           <h3 className={`text-3xl font-bold ${s.heading}`}>Research Blog</h3>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BLOGS.map((blog) => (
             <div 
               key={blog.id} 
               onClick={() => { setSelectedBlog(blog); window.scrollTo({top: 0, behavior: 'smooth'}); }}
               className={`flex flex-col cursor-pointer group ${s.card} overflow-hidden ${theme !== ThemeType.MINIMALIST ? 'rounded-2xl' : ''}`}
             >
               {blog.coverImage && (
                <div className="h-40 overflow-hidden">
                  <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
               )}
               <div className="p-6 flex flex-col flex-1">
                 <div className="text-xs font-bold opacity-50 mb-2 flex justify-between">
                   <span>{blog.date}</span>
                   <span>{blog.readTime}</span>
                 </div>
                 <h4 className={`text-xl font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors ${s.heading}`}>{blog.title}</h4>
                 <p className="text-sm opacity-80 mb-4 line-clamp-3 flex-1">{blog.excerpt}</p>
                 <div className={`flex items-center gap-1 text-sm font-medium mt-auto ${s.accent}`}>
                   Read More <ChevronRight size={14} />
                 </div>
               </div>
             </div>
            ))}
          </div>
        </section>
        )}

            {/* Teaching */}
            <section id="teaching" className="py-8 max-w-6xl mx-auto mb-8">
              <div className="space-y-6">
                <h3 className={`text-3xl font-bold ${s.heading}`}>Teaching</h3>
                <div className={`p-8 ${s.card} ${theme !== ThemeType.MINIMALIST ? 'rounded-2xl' : ''}`}>
                   <div className="space-y-6">
                     <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold">Mobile and Ubiquitous Computing</h4>
                          <p className="opacity-70 text-sm">An optional module for MSc and 3rd year BSc. Teaching machine learning for embedded systems.</p>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full ${theme === ThemeType.CYBER ? 'bg-slate-800' : 'bg-gray-100'}`}>Undergraduate</span>
                     </div>
                     <div className="border-t border-gray-100 dark:border-slate-800 pt-4 flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold">Building Usable Systems</h4>
                          <p className="opacity-70 text-sm">A MSc module. Teaching software engineering.</p>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full ${theme === ThemeType.CYBER ? 'bg-slate-800' : 'bg-gray-100'}`}>Graduate</span>
                     </div>
                   </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className={`py-12 text-center rounded-3xl ${theme === ThemeType.CYBER ? 'bg-slate-900' : 'bg-white shadow-sm border border-gray-100'}`}>
              <div className="max-w-2xl mx-auto space-y-8 p-8">
                 <h3 className={`text-3xl font-bold ${s.heading}`}>Contact Me</h3>
                 <div className="space-y-6">
                   <div className="space-y-2">
                     <p className="opacity-80 text-sm font-medium">Office Address</p>
                     <p className="opacity-80">Room 211, School of Computer Science (Y9)<br/>University of Birmingham<br/>B15 2TT, Birmingham, UK</p>
                   </div>
                   <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
                     <p className="opacity-80 text-sm font-medium mb-2">Email</p>
                     <a href={`mailto:${PROFILE.email}`} className={`inline-flex items-center gap-2 text-lg font-medium hover:underline ${s.accent}`}>
                       <Mail size={20} /> {PROFILE.email}
                     </a>
                   </div>
                 </div>
              </div>
            </section>
          </>
        )}

      </main>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm opacity-50 ${s.bg} ${s.text} border-t ${theme === ThemeType.CYBER ? 'border-slate-900' : 'border-gray-200'}`}>
         <p>&copy; {new Date().getFullYear()} {PROFILE.name}. Built with React & Gemini.</p>
      </footer>

      {/* Interactive Elements */}
      <ResearchChat theme={theme} />
      
    </div>
  );
}