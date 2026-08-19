/* ==========================================================================
   PORTFOLIO SCRIPT
   1. Config — EDIT THIS to make the site yours
   2. Utilities
   3. Loader
   4. Theme toggle
   5. Custom cursor
   6. Navigation (scroll state, active link, mobile menu)
   7. Scroll progress + back to top
   8. Hero role typewriter + code editor typing
   9. Reveal-on-scroll (IntersectionObserver)
   10. Render: stats, bento skills, learning, timeline, projects, services,
       achievements, testimonials
   11. Project filtering
   12. Animated counters
   13. Contact form validation
   ========================================================================== */

/* ---------- 1. CONFIG ---------- */
const portfolioConfig = {
  name: "Devansh Maheshwari",
  shortName: "DM",
  role: "Python Developer",
  rolesRotating: ["Frontend Developer", "Full Stack Developer", "Python Developer"],
  location: "Bhilwara, Rajasthan",
  email: "devnyati2971@gmail.com",
  formspreeId: "YOUR_FORMSPREE_ID",   
  profileImage: "assets/images/profile.jpg",  
  resumePath: "assets/resume/resume.pdf",     

  bio: "👨‍💻 Aspiring developer learning, building, breaking, and fixing things while exploring 🐧 Linux, 🐍 Python, and 🌐 web development — 🚀 just getting started.",

  aboutTitle: 'A developer who loves <em>learning, building, and figuring things out.</em>',
  aboutParagraphs: [
    "I’m an aspiring developer currently exploring web development, Python, and Linux. I got into development because I enjoy understanding how things work and turning ideas into something real. I’m still at the beginning of my journey, but every project I build teaches me something new.",
    "I believe the best way to learn is by building, breaking, debugging, and trying again. I enjoy solving problems, experimenting with new technologies, and continuously improving my skills. Right now, I’m focused on building meaningful projects and growing into a well-rounded developer."

  ],
  aboutTraits: ["Curious learner", "Problem solver", "Detail oriented", "Always improving"],

  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/devansh-maheshwari-8ba378428",
    instagram: "https://instagram.com/deva_nyati"
  },

  stats: [
    { num: "1", label: "Projects shipped" },
    { num: "8", label: "Technologies" },
    { num: "2", label: "Years learning" },
    { num: "∞", label: "Cups of coffee" }
  ],

  skills: [
    { name: "JavaScript", level: 50, category: "Language", size: "lg" },
    { name: "HTML5", level: 70, category: "Markup", size: "sm" },
    { name: "CSS3", level: 70, category: "Styling", size: "sm" },
    { name: "AI Prompt Engineering", level: 90, category: "AI", size: "lg" },
    { name: "Python", level: 70, category: "Language", size: "sm" },
    { name: "Git & GitHub", level: 85, category: "Tooling", size: "sm" },
    { name: "MySQL", level: 70, category: "Database", size: "sm" }
  ],

  currentlyLearning: [
    { name: "Flask", badge: "in progress" },
    { name: "MongoDB", badge: "in progress" },
    { name: "System Design", badge: "exploring" }
  ],

  timeline: [
    { date: "2019 — 2020", role: "10th", org: "Govt. Senior Secondary School", desc: "Completed Matriculation (10th) grade" },
    { date: "2021 — 2022", role: "12th", org: "Govt. Senior Secondary School", desc: "Completed 12th grade in Commerce Stream" },
    { date: "2023 — Present", role: "BCA (Bachelor of Computer Applications)", org: "[Mewar University]", desc: "Coursework in data structures, algorithms, and software engineering fundamentals." }
  ],

  projects: [
    {
      title: "Personal Portfolio",
      desc: "A premium personal portfolio website built with HTML, CSS & Vanilla JS — fully customizable via a central config object.",
      image: "https://placehold.co/800x500/12151C/7C6FF0?text=Portfolio+Website",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      github: "https://github.com/yourusername/portfolio",
      demo: "#"
    },
    {
      title: "Coming Soon",
      desc: "Next project is in the works. Stay tuned!",
      image: "https://placehold.co/800x500/12151C/8A8F9C?text=Coming+Soon",
      tech: ["TBD"],
      category: "Frontend",
      github: "#",
      demo: "#"
    },
    {
      title: "Coming Soon",
      desc: "Another project is in the works. Stay tuned!",
      image: "https://placehold.co/800x500/12151C/8A8F9C?text=Coming+Soon",
      tech: ["TBD"],
      category: "Python",
      github: "#",
      demo: "#"
    }
  ],

  services: [
    { title: "Frontend Development", desc: "Building responsive, accessible interfaces from designs or from scratch." },
    { title: "Landing Pages", desc: "Fast, conversion-focused single pages for products or personal brands." },
    { title: "UI Bug Fixing & Polish", desc: "Cleaning up layout issues, animations, and cross-browser inconsistencies." }
  ],

  achievements: [
    { num: "1", label: "Projects completed" },
    { num: "2", label: "Certifications" },
    { num: "1", label: "Industrial training" },
    { num: "100%", label: "Curiosity" }
  ],
};

/* ---------- 2. UTILITIES ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
const isTouch = window.matchMedia ? window.matchMedia("(hover: none), (pointer: coarse)").matches : false;

document.addEventListener("DOMContentLoaded", () => {
  populateFromConfig();
  initLoader();
  initTheme();
  if (!isTouch) initCursor();
  initNav();
  initScrollProgress();
  initBackToTop();
  initHeroRoleTypewriter();
  initEditorTyping();
  renderAboutStats();
  renderSkillsBento();
  renderLearning();
  renderTimeline();
  renderProjects();
  renderServices();
  renderAchievements();

  initReveal();
  initProjectFilters();
  initCounters();
  initContactForm();
  $("#year").textContent = new Date().getFullYear();
});

/* ---------- 2b. POPULATE HTML FROM CONFIG ---------- */
function populateFromConfig() {
  const c = portfolioConfig;

  /* --- Text content via data-config attributes --- */
  $$("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    if (key === "name") el.textContent = c.name;
    if (key === "shortName") el.textContent = c.shortName;
    if (key === "bio") el.textContent = c.bio;
    if (key === "location") el.textContent = "based in " + c.location;
  });

  /* --- SEO: page title + meta tags --- */
  document.title = `${c.name} — ${c.role}`;
  const metaDesc = `Portfolio of ${c.name}, a ${c.role.toLowerCase()} building fast, thoughtful web experiences.`;
  const descEl = $('meta[name="description"]');
  if (descEl) descEl.setAttribute("content", metaDesc);
  const ogTitle = $('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", `${c.name} — ${c.role}`);
  const ogDesc = $('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", metaDesc);

  /* --- About photo --- */
  const aboutPhoto = $("#aboutPhoto");
  if (aboutPhoto) {
    aboutPhoto.alt = `Portrait of ${c.name}`;
    if (c.profileImage) aboutPhoto.src = c.profileImage;
  }

  /* --- About title --- */
  const aboutTitle = $("#aboutTitle");
  if (aboutTitle && c.aboutTitle) aboutTitle.innerHTML = c.aboutTitle;

  /* --- About bio paragraphs --- */
  const aboutBio = $("#aboutBio");
  if (aboutBio && c.aboutParagraphs && c.aboutParagraphs.length) {
    aboutBio.innerHTML = c.aboutParagraphs
      .map(p => `<p class="about__text">${p}</p>`)
      .join("");
  }

  /* --- About traits --- */
  const aboutTraits = $("#aboutTraits");
  if (aboutTraits && c.aboutTraits && c.aboutTraits.length) {
    aboutTraits.innerHTML = c.aboutTraits.map(t => `<li>${t}</li>`).join("");
  }

  /* --- Resume download button --- */
  if (c.resumePath) {
    const resumeBtn = $('a[download]');
    if (resumeBtn) resumeBtn.href = c.resumePath;
  }

  /* --- Email --- */
  const contactEmail = $("#contactEmail");
  if (contactEmail) {
    contactEmail.href = `https://mail.google.com/mail/?view=cm&to=${c.email}`;
    contactEmail.target = "_blank";
    contactEmail.rel = "noopener";
    contactEmail.textContent = c.email;
  }

  /* --- Footer logo --- */
  const footerLogo = $("#footerLogo");
  if (footerLogo) footerLogo.innerHTML = `&lt;${c.shortName}/&gt;`;

  /* --- Social links: hero, contact, footer, mobile nav --- */
  const socials = c.socialLinks;

  // Hero socials
  const heroSocials = $("#heroSocials");
  if (heroSocials) {
    heroSocials.innerHTML = `
      ${socials.github ? `<a href="${socials.github}" target="_blank" rel="noopener" aria-label="GitHub" data-cursor="link">GH</a>` : ""}
      ${socials.linkedin ? `<a href="${socials.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn" data-cursor="link">LI</a>` : ""}
      ${socials.twitter ? `<a href="${socials.twitter}" target="_blank" rel="noopener" aria-label="Twitter" data-cursor="link">TW</a>` : ""}
      ${socials.instagram ? `<a href="${socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram" data-cursor="link">IG</a>` : ""}
      ${c.email ? `<a href="https://mail.google.com/mail/?view=cm&to=${c.email}" target="_blank" rel="noopener" aria-label="Email" data-cursor="link">@</a>` : ""}
    `;
  }

  // Contact socials
  const contactSocials = $("#contactSocials");
  if (contactSocials) {
    contactSocials.innerHTML = `
      ${socials.github ? `<a href="${socials.github}" target="_blank" rel="noopener" data-cursor="link">GitHub</a>` : ""}
      ${socials.linkedin ? `<a href="${socials.linkedin}" target="_blank" rel="noopener" data-cursor="link">LinkedIn</a>` : ""}
      ${socials.twitter ? `<a href="${socials.twitter}" target="_blank" rel="noopener" data-cursor="link">Twitter</a>` : ""}
    `;
  }

  // Footer socials
  const footerSocials = $("#footerSocials");
  if (footerSocials) {
    footerSocials.innerHTML = `
      ${socials.github ? `<a href="${socials.github}" target="_blank" rel="noopener" data-cursor="link">GitHub</a>` : ""}
      ${socials.linkedin ? `<a href="${socials.linkedin}" target="_blank" rel="noopener" data-cursor="link">LinkedIn</a>` : ""}
      ${socials.twitter ? `<a href="${socials.twitter}" target="_blank" rel="noopener" data-cursor="link">Twitter</a>` : ""}
    `;
  }

  // Mobile nav socials
  const mobileSocialGH = $("#mobileSocialGH");
  if (mobileSocialGH && socials.github) mobileSocialGH.href = socials.github;
  const mobileSocialLI = $("#mobileSocialLI");
  if (mobileSocialLI && socials.linkedin) mobileSocialLI.href = socials.linkedin;
}

/* ---------- 3. LOADER ---------- */
function initLoader() {
  const loader = $("#loader");
  const bar = $("#loaderProgress");
  let progress = 0;
  const tick = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(tick);
      setTimeout(() => {
        loader.classList.add("is-hidden");
        document.body.style.overflow = "";
        triggerHeroReveal();
      }, 250);
    }
    bar.style.width = progress + "%";
  }, 120);
  document.body.style.overflow = "hidden";
}

function triggerHeroReveal() {
  $$(".hero .reveal-up, .hero .reveal-line").forEach((el, i) => {
    setTimeout(() => el.classList.add("is-in"), i * 90);
  });
}

/* ---------- 4. THEME TOGGLE ---------- */
function initTheme() {
  const root = document.documentElement;
  const toggle = $("#themeToggle");
  const stored = localStorage.getItem("portfolio-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (systemDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);
  toggle.setAttribute("aria-pressed", initial === "light");

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    toggle.setAttribute("aria-pressed", next === "light");
  });
}

/* ---------- 5. CUSTOM CURSOR ---------- */
function initCursor() {
  const dot = $("#cursorDot");
  const ring = $("#cursorRing");
  const label = $("#cursorLabel");
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
  });

  function raf() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
    requestAnimationFrame(raf);
  }
  raf();

  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-cursor='link'], a, button");
    if (target) {
      ring.classList.add("is-active");
      label.textContent = target.getAttribute("data-cursor-text") || "";
    }
  });
  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest("[data-cursor='link'], a, button");
    if (target) {
      ring.classList.remove("is-active");
      label.textContent = "";
    }
  });
}

/* ---------- 6. NAVIGATION ---------- */
function initNav() {
  const nav = $("#nav");
  const burger = $("#navBurger");
  const mobile = $("#navMobile");
  const links = $$(".nav__link");
  const sections = links.map((l) => document.getElementById(l.dataset.section)).filter(Boolean);

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });

  burger.addEventListener("click", () => {
    const isOpen = mobile.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  const allNavLinks = [...links, ...$$(".nav__mobile-link")];
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      if (mobile.classList.contains("is-open")) {
        mobile.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }

      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
        }
      }
    });
  });

  if ("IntersectionObserver" in window && sections.length) {
    const obs = new IntersectionObserver((entries) => {
      let intersectingEntry = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingEntry = entry;
        }
      });
      if (intersectingEntry) {
        links.forEach((l) => l.classList.remove("is-active"));
        const active = links.find((l) => l.dataset.section === intersectingEntry.target.id);
        if (active) active.classList.add("is-active");
      }
    }, { rootMargin: "-20% 0px -40% 0px" });
    sections.forEach((s) => obs.observe(s));
  }
}

/* ---------- 7. SCROLL PROGRESS + BACK TO TOP ---------- */
function initScrollProgress() {
  const bar = $("#scrollProgress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  }, { passive: true });
}

function initBackToTop() {
  const btn = $("#backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
}

/* ---------- 8. HERO TYPEWRITER + EDITOR TYPING ---------- */
function initHeroRoleTypewriter() {
  const el = $("#heroRole");
  if (!el || prefersReducedMotion) { el.textContent = portfolioConfig.role; return; }
  const roles = portfolioConfig.rolesRotating;
  let roleIndex = 0, charIndex = 0, deleting = false;

  function step() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(step, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(step, deleting ? 35 : 65);
  }
  step();
}

function initEditorTyping() {
  const codeEl = $("#editorCode code");
  const gutter = $("#editorGutter");
  if (!codeEl) return;

  const lines = [
    { indent: 0, html: `<span class="tok-comment"># Profile Created </span>` },
    { indent: 0, html: `<span class="tok-kw">profile</span> = {` },
    { indent: 1, html: `<span class="tok-key">"name"</span>: <span class="tok-str">"${portfolioConfig.name}"</span>,` },
    { indent: 1, html: `<span class="tok-key">"role"</span>: <span class="tok-str">"${portfolioConfig.role}"</span>,` },
    { indent: 1, html: `<span class="tok-key">"location"</span>: <span class="tok-str">"${portfolioConfig.location}"</span>,` },
    { indent: 1, html: `<span class="tok-key">"stack"</span>: [<span class="tok-str">"HTML"</span>, <span class="tok-str">"CSS"</span>, <span class="tok-str">"JS"</span>],` },
    { indent: 0, html: `}` },
    { indent: 0, html: `print("Hi, I'm", profile["name"])` },
    
  ];

  // build gutter
  gutter.innerHTML = lines.map((_, i) => `<div>${i + 1}</div>`).join("");

  if (prefersReducedMotion) {
    codeEl.innerHTML = lines.map((l) => "  ".repeat(l.indent) + l.html).join("\n");
    return;
  }

  let lineIdx = 0;
  function typeNextLine() {
    if (lineIdx >= lines.length) return;
    const line = lines[lineIdx];
    const prefix = "  ".repeat(line.indent);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = prefix + line.html;
    const plainLength = wrapper.textContent.length;
    let shown = 0;

    const interval = setInterval(() => {
      shown += 2;
      const ratio = Math.min(shown / plainLength, 1);
      renderPartial(line, prefix, ratio);
      if (ratio >= 1) {
        clearInterval(interval);
        lineIdx++;
        setTimeout(typeNextLine, 90);
      }
    }, 14);
  }

  function renderPartial(line, prefix, ratio) {
    // simplistic partial reveal: show full previous lines + partial current via width clip
    const completed = lines.slice(0, lineIdx).map((l) => "  ".repeat(l.indent) + l.html);
    const full = prefix + line.html;
    const tmp = document.createElement("div");
    tmp.innerHTML = full;
    const fullText = tmp.textContent;
    const charsToShow = Math.floor(fullText.length * ratio);
    const clipped = clipHtmlToLength(prefix + line.html, charsToShow);
    codeEl.innerHTML = completed.join("\n") + (lineIdx > 0 ? "\n" : "") + clipped + '<span class="type-cursor"></span>';
  }

  function clipHtmlToLength(html, maxChars) {
    const container = document.createElement("div");
    container.innerHTML = html;
    let count = 0;
    function walk(node) {
      for (const child of Array.from(node.childNodes)) {
        if (count >= maxChars) { child.remove(); continue; }
        if (child.nodeType === Node.TEXT_NODE) {
          const remaining = maxChars - count;
          if (child.textContent.length > remaining) {
            child.textContent = child.textContent.slice(0, remaining);
          }
          count += child.textContent.length;
        } else {
          walk(child);
        }
      }
    }
    walk(container);
    return container.innerHTML;
  }

  setTimeout(typeNextLine, 900);
}

/* ---------- 9. REVEAL ON SCROLL ---------- */
function initReveal() {
  const els = $$("[data-reveal]");
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => obs.observe(el));

  // timeline rail fill + item visibility
  const timelineEl = $(".timeline");
  const railFill = $("#railFill");
  if (timelineEl && railFill) {
    const items = $$(".timeline__item");
    const itemObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible"));
    }, { threshold: 0.4 });
    items.forEach((i) => itemObs.observe(i));

    window.addEventListener("scroll", () => {
      const rect = timelineEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = Math.min(Math.max(vh * 0.65 - rect.top, 0), rect.height);
      const pct = rect.height ? (visible / rect.height) * 100 : 0;
      railFill.style.height = Math.min(pct, 100) + "%";
    }, { passive: true });
  }
}

/* ---------- 10. RENDER FUNCTIONS ---------- */
function renderAboutStats() {
  $("#aboutStats").innerHTML = portfolioConfig.stats.map((s) => `
    <div class="stat">
      <div class="stat__num">${s.num}</div>
      <div class="stat__label">${s.label}</div>
    </div>
  `).join("");
}

function renderSkillsBento() {
  const sizeClass = { lg: "bento-card--lg", md: "bento-card--md", sm: "" };
  $("#skillsBento").innerHTML = portfolioConfig.skills.map((s, i) => `
    <div class="bento-card ${sizeClass[s.size] || ""}" data-reveal data-reveal-delay="${(i % 4) + 1}">
      <div>
        <div class="bento-card__sub">${s.category}</div>
        <div class="bento-card__title">${s.name}</div>
      </div>
      <div class="bento-card__bar" data-level="${s.level}"><span></span></div>
    </div>
  `).join("");
}

function renderLearning() {
  $("#learningGrid").innerHTML = portfolioConfig.currentlyLearning.map((l, i) => `
    <div class="learning-card" data-reveal data-reveal-delay="${(i % 4) + 1}">
      <div class="learning-card__badge">${l.badge}</div>
      <div class="bento-card__title">${l.name}</div>
    </div>
  `).join("");
}

function renderTimeline() {
  $("#timelineItems").innerHTML = portfolioConfig.timeline.map((t) => `
    <div class="timeline__item" data-reveal>
      <span class="timeline__dot"></span>
      <div class="timeline__date">${t.date}</div>
      <div class="timeline__role">${t.role}</div>
      <div class="timeline__org">${t.org}</div>
      <p class="timeline__desc">${t.desc}</p>
    </div>
  `).join("");
}

function renderProjects() {
  const grid = $("#workGrid");
  grid.innerHTML = portfolioConfig.projects.map((p, i) => `
    <article class="project-card" data-category="${p.category}" data-reveal data-reveal-delay="${(i % 4) + 1}">
      <div class="project-card__media">
        <img src="${p.image}" alt="Preview of ${p.title}" loading="lazy">
        <div class="project-card__overlay">
          <div class="project-card__tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
        </div>
      </div>
      <div class="project-card__body">
        <div>
          <div class="project-card__title">${p.title}</div>
          <p class="project-card__desc">${p.desc}</p>
        </div>
        <div class="project-card__links">
          <a href="${p.github}" aria-label="${p.title} GitHub repository" data-cursor="link" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>
          </a>
          <a href="${p.demo}" aria-label="${p.title} live demo" data-cursor="link" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join("");

  const categories = ["All", ...new Set(portfolioConfig.projects.map((p) => p.category))];
  $("#filters").innerHTML = categories.map((c, i) => `
    <button class="filter-btn ${i === 0 ? "is-active" : ""}" data-filter="${c}" role="tab" aria-selected="${i === 0}">${c}</button>
  `).join("");
}

function renderServices() {
  $("#servicesGrid").innerHTML = portfolioConfig.services.map((s, i) => `
    <div class="service-card" data-reveal data-reveal-delay="${i + 1}">
      <div class="service-card__index">0${i + 1}</div>
      <div class="service-card__title">${s.title}</div>
      <p class="service-card__desc">${s.desc}</p>
    </div>
  `).join("");
}

function renderAchievements() {
  $("#achievementsGrid").innerHTML = portfolioConfig.achievements.map((a, i) => `
    <div data-reveal data-reveal-delay="${(i % 4) + 1}">
      <div class="achieve__num" data-count-target="${a.num}">0</div>
      <div class="achieve__label">${a.label}</div>
    </div>
  `).join("");
}



/* ---------- 11. PROJECT FILTERING ---------- */
function initProjectFilters() {
  const filterBtns = $$(".filter-btn");
  const cards = $$(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const match = filter === "All" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
}

/* ---------- 12. ANIMATED COUNTERS ---------- */
function initCounters() {
  const bars = $$(".bento-card__bar");
  const counters = $$("[data-count-target]");
  if (!("IntersectionObserver" in window)) return;

  const barObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.dataset.level;
        bar.querySelector("span").style.width = level + "%";
        barObs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach((b) => barObs.observe(b));

  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        countObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => countObs.observe(c));
}

function animateCounter(el) {
  const target = el.dataset.countTarget;
  const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9.]/g, "");
  if (isNaN(numeric) || prefersReducedMotion) { el.textContent = target; return; }

  const duration = 1400;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * numeric) + suffix;
    if (progress < 1) requestAnimationFrame(frame);
    else el.textContent = target;
  }
  requestAnimationFrame(frame);
}

/* ---------- 13. CONTACT FORM VALIDATION ---------- */
function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  const submitBtn = $("#formSubmit");
  const successMsg = $("#formSuccess");

  const validators = {
    name: (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email address.",
    subject: (v) => v.trim().length >= 3 || "Subject should be at least 3 characters.",
    message: (v) => v.trim().length >= 10 || "Message should be at least 10 characters."
  };

  Object.keys(validators).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener("blur", () => validateField(name));
    input.addEventListener("input", () => {
      const field = input.closest(".field");
      if (field.classList.contains("has-error")) validateField(name);
    });
  });

  function validateField(name) {
    const input = form.elements[name];
    const field = input.closest(".field");
    const errorEl = $(`#f${capitalize(name)}Error`);
    const result = validators[name](input.value);
    if (result === true) {
      field.classList.remove("has-error");
      errorEl.textContent = "";
      return true;
    } else {
      field.classList.add("has-error");
      errorEl.textContent = result;
      return false;
    }
  }

  function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.classList.remove("is-visible");
    const results = Object.keys(validators).map(validateField);
    if (results.some((r) => !r)) return;

    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;

    const formspreeId = portfolioConfig.formspreeId;

    // If Formspree ID is set, send via Formspree
    if (formspreeId && formspreeId !== "YOUR_FORMSPREE_ID") {
      const { name, email, subject, message } = form.elements;
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value
        })
      })
        .then(res => {
          submitBtn.classList.remove("is-loading");
          submitBtn.disabled = false;
          if (res.ok) {
            successMsg.classList.add("is-visible");
            form.reset();
          } else {
            alert("Something went wrong. Please try again or email me directly.");
          }
        })
        .catch(() => {
          submitBtn.classList.remove("is-loading");
          submitBtn.disabled = false;
          alert("Network error. Please try again or email me directly.");
        });
    } else {
      // Fallback: open Gmail compose
      const { name, email, subject, message } = form.elements;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${portfolioConfig.email}&su=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(`From: ${name.value} (${email.value})\n\n${message.value}`)}`;
      setTimeout(() => {
        submitBtn.classList.remove("is-loading");
        submitBtn.disabled = false;
        successMsg.classList.add("is-visible");
        window.open(gmailUrl, "_blank");
        form.reset();
      }, 600);
    }
  });
}