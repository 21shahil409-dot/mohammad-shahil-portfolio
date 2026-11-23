import {
  ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Boxes, Download,
  GraduationCap, Linkedin, Mail, MapPin, Menu, MoveUpRight, Wrench
} from "lucide-react";

const experience = [
  {
    company: "RKQ Contracting",
    role: "Senior Procurement Specialist",
    period: "Current",
    location: "Saudi Arabia",
    summary:
      "Procurement professional supporting contracting operations. Role details and measurable contributions will be added after confirmation.",
    tags: ["Procurement", "Supplier Coordination", "Contracting"],
  },
  {
    company: "Volvo Group India",
    role: "Purchasing Associate",
    period: "2025",
    location: "Bengaluru, India",
    summary:
      "Supported purchasing operations within Group Trucks Purchasing, working with requisition and ordering workflows, handler processes, and purchasing documentation.",
    tags: ["Purchasing Operations", "Order Processing", "Stakeholder Support"],
  },
  {
    company: "Kennametal Shared Services",
    role: "Graduate Apprenticeship Trainee — Global Engineering Services",
    period: "2024 — 2025",
    location: "Bengaluru, India",
    summary:
      "Worked with the design team on metal-cutting tool applications, Siemens NX modelling and drafting, engineering documentation, and PLM workflows.",
    tags: ["Siemens NX", "Technical Drawings", "PLM / ECTR", "DFA / DFM"],
  },
  {
    company: "Abstract Studio",
    role: "Project Manager",
    period: "Project experience",
    location: "Remote",
    summary:
      "Contributed to project coordination and team operations at a digital product studio. Individual project contributions can be detailed and verified before publication.",
    tags: ["Project Coordination", "Team Collaboration", "Digital Products"],
  },
];

const skills = [
  "Procurement & Purchasing",
  "Supplier Coordination",
  "Supply Chain Support",
  "Project Coordination",
  "Mechanical Engineering",
  "Siemens NX",
  "Technical Drawing",
  "PLM / ECTR",
  "BOM / BOD",
  "DFA / DFM",
  "GD&T",
  "Engineering Documentation",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home">MS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">Let's connect <ArrowUpRight size={14} /></a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR PROFESSIONAL CONNECTIONS</div>
          <h1>Mohammad<br /><span>Shahil.</span></h1>
          <p className="hero-role">Mechanical Engineer <i>·</i> Procurement Professional <i>·</i> Project Manager</p>
          <p className="hero-intro">
            I bring together an engineering foundation, procurement experience
            and project coordination to help teams move work forward with clarity.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            <a className="button button-quiet" href="#experience">Explore my experience <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} /> Saudi Arabia</span>
            <span><BriefcaseBusiness size={14} /> Senior Procurement Specialist</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <span className="portrait-initials">MS</span>
              <span className="portrait-caption">YOUR PROFESSIONAL PHOTO</span>
            </div>
            <div className="portrait-index">01 / PROFILE</div>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-note"><span>BASED IN</span><strong>Saudi Arabia</strong></div>
        </div>
        <div className="hero-bottom"><span>PORTFOLIO / 2026</span><span>ENGINEERING · PROCUREMENT · PROJECTS</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="section shell" id="about">
        <div className="section-kicker">01 — INTRODUCTION</div>
        <div className="about-grid">
          <h2>Engineering perspective.<br /><em>Commercial mindset.</em></h2>
          <div className="about-text">
            <p>
              I’m Mohammad Shahil, a mechanical engineering graduate building
              my career across procurement, purchasing and project management.
              My experience spans engineering design support and purchasing
              operations, giving me an appreciation for both technical detail
              and business execution.
            </p>
            <p>
              Currently based in Saudi Arabia, I work as a Senior Procurement
              Specialist at RKQ Contracting while continuing my education
              through an online MBA at Dayananda Sagar University, Bengaluru.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-border shell" id="experience">
        <div className="section-heading">
          <div><div className="section-kicker">02 — CAREER</div><h2>Experience</h2></div>
          <p>A cross-functional background connecting engineering, purchasing and delivery.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-card" key={item.company}>
              <div className="experience-number">0{index + 1}</div>
              <div className="experience-main">
                <div className="experience-topline"><span>{item.location}</span><span>{item.period}</span></div>
                <h3>{item.role}</h3>
                <div className="company-name">{item.company}</div>
                <p>{item.summary}</p>
                <div className="tag-row">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
              <ArrowUpRight className="experience-arrow" size={20} />
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="education">
        <div className="section-kicker">03 — LEARNING</div>
        <h2>Education</h2>
        <div className="education-grid">
          <article className="education-card featured">
            <div className="edu-icon"><GraduationCap size={20} /></div>
            <span className="edu-status">CURRENTLY PURSUING</span>
            <h3>Master of Business Administration</h3>
            <p>Dayananda Sagar University (DSU)</p>
            <div className="edu-foot"><span>Online Mode</span><span>Bengaluru, India</span></div>
          </article>
          <article className="education-card">
            <div className="edu-icon"><Wrench size={20} /></div>
            <span className="edu-status">COMPLETED</span>
            <h3>Bachelor of Engineering</h3>
            <p>Mechanical Engineering · Dayananda Sagar Institute, Bengaluru</p>
            <div className="edu-foot"><span>CGPA 7.9</span><span>2024</span></div>
          </article>
          <article className="education-card">
            <div className="edu-icon"><Boxes size={20} /></div>
            <span className="edu-status">COMPLETED</span>
            <h3>Diploma</h3>
            <p>Mechanical Engineering</p>
            <div className="edu-foot"><span>79.3%</span><span>India</span></div>
          </article>
        </div>
      </section>

      <section className="section section-border shell" id="skills">
        <div className="section-heading">
          <div><div className="section-kicker">04 — CAPABILITIES</div><h2>Skills & focus</h2></div>
          <p>A combination of technical knowledge and operational capabilities.</p>
        </div>
        <div className="skills-wrap">{skills.map(skill => <span className="skill-pill" key={skill}>{skill}<ArrowUpRight size={13} /></span>)}</div>
      </section>

      <section className="section shell" id="focus">
        <div className="section-kicker">05 — PROFESSIONAL INTERESTS</div>
        <h2>Where I add value.</h2>
        <div className="focus-grid">
          <div><span>01</span><h3>Procurement & Supply Chain</h3><p>Purchasing processes, supplier coordination and operational support.</p></div>
          <div><span>02</span><h3>Mechanical Engineering</h3><p>Engineering fundamentals, CAD documentation and design-team collaboration.</p></div>
          <div><span>03</span><h3>Project Management</h3><p>Coordinating people, priorities and project activities toward shared outcomes.</p></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div className="section-kicker">06 — CONTACT</div>
          <h2>Let’s make<br /><em>things happen.</em></h2>
          <p>For professional opportunities, collaboration or a conversation, feel free to connect.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/mohammad-shahil-9b2991258/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <MoveUpRight size={15} /></a>
            <a href="mailto:YOUR_EMAIL_HERE"><Mail size={17} /> Email <MoveUpRight size={15} /></a>
          </div>
          <div className="footer-line"><span>MOHAMMAD SHAHIL © 2026</span><a href="#home">BACK TO TOP ↑</a><span>DESIGNED WITH INTENTION</span></div>
        </div>
      </section>
    </main>
  );
}
