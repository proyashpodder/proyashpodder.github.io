/* ==========================================================================
   Renders the shared header/footer and the lists defined in data.js.
   You shouldn't need to edit this file for content updates (see data.js).
   ========================================================================== */
(function () {
  "use strict";

  const S = window.SITE;
  const P = S.profile;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ------------------------------------------------------------- icons */
  const ICONS = {
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    scholar: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    github: '<path fill="currentColor" stroke="none" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>',
  };
  function icon(name) {
    const vb = name === "github" ? "0 0 16 16" : "0 0 24 24";
    return `<svg class="icon" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  }

  /* ------------------------------------------------------------ helpers */
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = (ym) => { const [y, m] = ym.split("-"); return m ? `${MONTHS[parseInt(m, 10) - 1]} ${y}` : y; };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const me = P.authorName || P.name;
  const isStudent = (a) => a.endsWith("†");
  const bare = (a) => a.replace(/†$/, "");

  function authorsHTML(list) {
    return list.map((a) => {
      const name = esc(bare(a));
      const html = bare(a) === me ? `<span class="me">${name}</span>` : name;
      return isStudent(a) ? `${html}<sup class="dagger" title="Undergraduate student mentored at Muhlenberg College">†</sup>` : html;
    }).join(", ");
  }
  const pubWhen = (p) => `${p.pages ? `, pp. ${p.pages}` : ""}, ${p.when || p.year}`;
  const citation = (p) => `${p.authors.map(bare).join(", ")}. "${p.title}." ${p.venue}${pubWhen(p)}.`;
  const hasStudent = (p) => p.authors.some(isStudent);

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand("copy"); } catch (_) {}
      ta.remove(); return ok;
    }
  }
  function hideIfEmpty(el, empty) {
    const section = el.closest("[data-hide-empty]");
    if (empty && section) section.hidden = true;
    return empty;
  }

  /* ------------------------------------------------------ header/footer */
  function renderHeader() {
    const host = $("#site-header");
    if (!host) return;
    const page = document.body.dataset.page;
    host.innerHTML = `
      <div class="container header-inner">
        <a class="wordmark" href="index.html">${esc(P.name)}</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">${icon("menu")} Menu</button>
        <nav class="nav" id="site-nav" aria-label="Primary">
          ${S.nav.map((n) => `<a href="${n.href}"${n.page === page ? ' aria-current="page"' : ""}>${n.label}</a>`).join("")}
        </nav>
      </div>`;
    const btn = $(".menu-btn", host), nav = $(".nav", host);
    btn.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  function renderFooter() {
    const host = $("#site-footer");
    if (!host) return;
    const updated = new Date(document.lastModified);
    const updatedStr = isNaN(updated) ? "" : ` · Last updated ${MONTHS[updated.getMonth()]} ${updated.getFullYear()}`;
    host.innerHTML = `
      <div class="container footer-inner">
        <span>© ${new Date().getFullYear()} ${esc(P.name)} · ${esc(P.title)}, <a href="${P.institutionUrl}">${esc(P.institution)}</a></span>
        <span><a href="mailto:${P.email}">${P.email}</a>${updatedStr}</span>
      </div>`;
  }

  /* ------------------------------------------------------------ content */
  const R = {};

  R.contact = (el) => {
    el.innerHTML = `
      <li>${icon("mail")}<a href="mailto:${P.email}">${P.email}</a></li>
      <li>${icon("building")}<span>${esc(P.office)}</span></li>
      <li>${icon("pin")}<span>${esc(P.institution)}, ${esc(P.address)}</span></li>`;
  };

  R.profileLinks = (el) => {
    const L = P.links;
    el.innerHTML = [
      L.cv && `<a href="${L.cv}">${icon("file")} Curriculum Vitae</a>`,
      L.scholar && `<a href="${L.scholar}">${icon("scholar")} Google Scholar</a>`,
      L.github && `<a href="${L.github}">${icon("github")} GitHub</a>`,
      L.linkedin && `<a href="${L.linkedin}">${icon("linkedin")} LinkedIn</a>`,
    ].filter(Boolean).join("");
  };

  R.education = (el) => {
    el.innerHTML = S.education.map((e) => `
      <li>
        <div class="cv-head"><span class="cv-title">${e.degree}</span><span class="cv-when">${e.year}</span></div>
        <div class="cv-sub">${esc(e.school)}</div>
        ${e.details && e.details.length ? `<ul class="cv-details">${e.details.map((d) => `<li>${d}</li>`).join("")}</ul>` : ""}
      </li>`).join("");
  };

  R.areas = (el) => {
    el.innerHTML = S.areas.map((a, i) => `
      <div class="area">
        ${i === 0 ? '<span class="label">Primary focus</span>' : ""}
        <h3><a href="research.html#${a.id}">${a.title}</a></h3>
        <p>${i === 0 ? a.summary : a.short}</p>
      </div>`).join("");
  };

  const STATUS = {
    current: "Current project at Muhlenberg, with undergraduate researchers",
    phd: "Doctoral research, Florida International University",
  };
  R.research = (el) => {
    el.innerHTML = S.areas.map((a) => {
      const projects = S.projects.filter((p) => p.area === a.id);
      return `<section class="area-block" id="${a.id}">
        <h2>${a.title}</h2>
        <p class="prose">${a.summary}</p>
        ${projects.map((p) => {
          const papers = (p.papers || []).map((id) => S.publications.find((x) => x.id === id)).filter(Boolean);
          return `<div class="project">
            ${p.status ? `<span class="status status--${p.status}">${STATUS[p.status]}</span>` : ""}
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            ${p.bullets && p.bullets.length ? `<ul>${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
            <div class="meta">
              ${p.keywords && p.keywords.length ? `Keywords: ${p.keywords.map(esc).join(", ")}` : ""}
              ${papers.length ? `${p.keywords && p.keywords.length ? " · " : ""}Publications: ${papers.map((x) => `<a href="publications.html#${x.id}">${esc(x.short || x.year)}</a>`).join(", ")}` : ""}
            </div>
          </div>`;
        }).join("")}
      </section>`;
    }).join("");
  };

  R.currentProjects = (el) => {
    const list = S.projects.filter((p) => p.status === "current");
    if (hideIfEmpty(el, !list.length)) return;
    el.innerHTML = list.map((p) => {
      const papers = (p.papers || []).map((id) => S.publications.find((x) => x.id === id)).filter(Boolean);
      return `<li>
        <div class="cv-head"><span class="cv-title">${p.title}</span>${papers.length ? `<span class="cv-when">${papers.map((x) => `<a href="publications.html#${x.id}">${esc(x.short || x.year)}</a>`).join(", ")}</span>` : ""}</div>
        <div class="cv-sub">${(p.bullets && p.bullets[0]) || p.summary}</div>
      </li>`;
    }).join("");
  };

  R.grants = (el) => {
    el.innerHTML = S.grants.map((g) => `
      <li>
        <div class="cv-head"><span class="cv-title">${g.title}</span><span class="cv-when">${esc(g.when)}</span></div>
        ${g.text ? `<div class="cv-sub">${g.text}</div>` : ""}
      </li>`).join("");
  };

  const newsItem = (n) => `<li><span class="date">${esc(n.when || fmtDate(n.date))}</span><span class="text">${n.text}</span></li>`;

  R.news = (el) => {
    const limit = parseInt(el.dataset.limit || "0", 10);
    el.innerHTML = (limit ? S.news.slice(0, limit) : S.news).map(newsItem).join("");
  };

  R.newsByYear = (el) => {
    const years = [...new Set(S.news.map((n) => n.date.slice(0, 4)))];
    el.innerHTML = years.map((y) => `
      <h2 class="year-head">${y}</h2>
      <ul class="news">${S.news.filter((n) => n.date.startsWith(y)).map(newsItem).join("")}</ul>`).join("");
  };

  function pubHTML(p, num) {
    return `<li class="pub${num ? " pub--numbered" : ""}" id="${p.id}">
      ${num ? `<span class="num">${num}.</span>` : ""}
      <div>
        <div class="title">${esc(p.title)}</div>
        <div class="authors">${authorsHTML(p.authors)}</div>
        <div class="venue">${p.venueUrl ? `<a href="${p.venueUrl}">${esc(p.venue)}</a>` : esc(p.venue)}${pubWhen(p)}</div>
        <div class="links">
          ${p.url ? `<a href="${p.url}">PDF</a>` : ""}
          <button type="button" class="cite-btn" data-id="${p.id}">Copy citation</button>
        </div>
      </div>
    </li>`;
  }

  R.selectedPubs = (el) => {
    el.innerHTML = S.publications.filter((p) => p.selected).map((p) => pubHTML(p)).join("");
  };

  R.studentPubs = (el) => {
    const list = S.publications.filter(hasStudent);
    if (hideIfEmpty(el, !list.length)) return;
    el.innerHTML = list.map((p) => pubHTML(p)).join("");
  };

  R.publications = (el) => {
    let n = 0;
    el.innerHTML = S.pubTypes.map((t) => {
      const list = S.publications.filter((p) => p.type === t.id);
      if (!list.length) return "";
      return `<div class="pub-group">
        <h2 class="year-head">${t.title}</h2>
        <ul class="pubs">${list.map((p) => pubHTML(p, ++n)).join("")}</ul>
      </div>`;
    }).join("");
  };

  R.currentCourses = (el) => {
    const list = S.courses.filter((c) => c.terms.includes(S.currentTerm));
    if (hideIfEmpty(el, !list.length)) return;
    el.innerHTML = list.map((c) => `<li>${c.title}</li>`).join("");
  };
  R.currentTerm = (el) => { el.textContent = S.currentTerm; };
  R.courseCount = (el) => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    el.textContent = words[S.courses.length] || String(S.courses.length);
  };

  R.courses = (el) => {
    if (!S.courses.length) {
      if (hideIfEmpty(el, true)) return;
      el.outerHTML = `<div class="note"><p>Course information will be posted here.</p></div>`;
      return;
    }
    el.innerHTML = `<table class="table">
      <thead><tr><th>Course</th><th>Semesters taught</th></tr></thead>
      <tbody>${S.courses.map((c) => `<tr>
        <td>${c.url ? `<a href="${c.url}">${c.title}</a>` : c.title}${c.note ? `<div class="cell-note">${c.note}</div>` : ""}</td>
        <td>${c.terms.map(esc).join(", ")}</td>
      </tr>`).join("")}</tbody>
    </table>`;
  };

  R.mentoringSummary = (el) => { el.innerHTML = S.mentoringSummary; };
  R.mentoring = (el) => {
    if (hideIfEmpty(el, !S.mentoring.length)) return;
    el.innerHTML = S.mentoring.map(newsItem).join("");
  };

  R.students = (el) => {
    if (hideIfEmpty(el, !S.students.length)) return;
    el.innerHTML = S.students.map((s) => `
      <li class="person">
        <div class="name">${s.link ? `<a href="${s.link}">${esc(s.name)}</a>` : esc(s.name)}</div>
        ${s.detail ? `<div class="detail">${esc(s.detail)}</div>` : ""}
        ${s.project ? `<div class="proj">${s.project}</div>` : ""}
      </li>`).join("");
  };

  R.alumni = (el) => {
    if (hideIfEmpty(el, !S.alumni.length)) return;
    el.innerHTML = `<table class="table">
      <thead><tr><th>Name</th><th>Years</th><th>Project</th><th>Now</th></tr></thead>
      <tbody>${S.alumni.map((a) => `<tr><td>${esc(a.name)}</td><td>${esc(a.detail || "")}</td><td>${a.project || ""}</td><td>${a.now || ""}</td></tr>`).join("")}</tbody>
    </table>`;
  };

  R.email = (el) => { if (!el.textContent.trim()) el.textContent = P.email; el.href = `mailto:${P.email}`; };
  R.office = (el) => { el.textContent = P.office; };
  R.department = (el) => { el.textContent = P.department; };

  /* --------------------------------------------------------------- boot */
  function boot() {
    renderHeader();
    $$("[data-render]").forEach((el) => { const fn = R[el.dataset.render]; if (fn) fn(el); });
    renderFooter();

    document.addEventListener("click", async (e) => {
      const btn = e.target.closest(".cite-btn");
      if (!btn) return;
      const p = S.publications.find((x) => x.id === btn.dataset.id);
      const ok = await copyText(citation(p));
      btn.textContent = ok ? "Copied" : "Copy citation";
      setTimeout(() => { btn.textContent = "Copy citation"; }, 1600);
    });

    // Content renders after the browser's own jump to #hash, so jump again.
    if (location.hash) {
      const t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (t) requestAnimationFrame(() => t.scrollIntoView({ block: t.classList.contains("pub") ? "center" : "start" }));
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
