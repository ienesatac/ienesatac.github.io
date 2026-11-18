/* ==========================================================================
   Ibrahim Enes Atac — Site Renderer (assets/site.js)
   Reads window.SITE_CONTENT from content.js and renders accessible HTML
   ========================================================================== */

(function () {
  "use strict";

  const C = window.SITE_CONTENT;
  if (!C) return;

  // ------------------------------------------------------------------------
  // Inline SVG Icons (clean, lightweight, accessible aria-hidden="true")
  // ------------------------------------------------------------------------
  const ICONS = {
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    cv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    scholar: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>`,
    orcid: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM8.36 16.84H6.82V9.79h1.54zm-.77-8.03a.92.92 0 1 1 .92-.92.92.92 0 0 1-.92.92zm6.05 8.03h-3.13V9.79h3.17c2.3 0 3.63 1.45 3.63 3.52s-1.35 3.53-3.67 3.53zm-.09-5.73h-1.5v4.41h1.52c1.43 0 2.17-.86 2.17-2.21s-.74-2.2-2.19-2.2z"/></svg>`,
    bluesky: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`
  };

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatAuthors(authorsStr) {
    const escaped = escapeHtml(authorsStr);
    const self = escapeHtml(C.profile.authorHighlight);
    if (!self) return escaped;
    return escaped.split(self).join(`<span class="pub-self">${self}</span>`);
  }

  // ------------------------------------------------------------------------
  // Theme Handling (Light default, persistent Dark toggle)
  // ------------------------------------------------------------------------
  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("site-theme", theme);
    } catch (_) {}
    updateThemeButton();
  }

  function updateThemeButton() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const isDark = getCurrentTheme() === "dark";
    btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  // ------------------------------------------------------------------------
  // Render Header, Sidebar, and Footer
  // ------------------------------------------------------------------------
  const currentPage = document.body.getAttribute("data-page") || "home";

  function renderHeader() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const navItems = C.navigation
      .map((item) => {
        const currentAttr = item.id === currentPage ? ` aria-current="page"` : "";
        return `<li><a class="nav-link" href="${escapeHtml(item.href)}"${currentAttr}>${escapeHtml(item.label)}</a></li>`;
      })
      .join("");

    header.innerHTML = `
      <div class="header-inner">
        <a class="site-brand" href="index.html">${escapeHtml(C.profile.name)}</a>
        <div class="header-controls">
          <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
            <ul class="nav-list">${navItems}</ul>
          </nav>
          <button id="theme-toggle" class="icon-btn" type="button" aria-label="Switch to dark mode"></button>
          <button id="menu-toggle" class="icon-btn menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="site-nav">
            ${ICONS.menu}
          </button>
        </div>
      </div>
    `;

    updateThemeButton();

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        applyTheme(getCurrentTheme() === "dark" ? "light" : "dark");
      });
    }

    const menuBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("site-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () {
        const open = nav.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  function renderSidebar() {
    const aside = document.getElementById("profile-sidebar");
    if (!aside) return;

    const p = C.profile;
    const linksHtml = p.social
      .map((item) => {
        const icon = ICONS[item.icon] || ICONS.cv;
        const isExternal = /^https?:\/\//i.test(item.url) || /\.pdf$/i.test(item.url);
        const extAttrs = isExternal ? ` target="_blank" rel="noopener"` : "";
        const text = escapeHtml(item.display || item.label);

        if (item.icon === "email" && p.email) {
          return `
            <li class="profile-link-row">
              <a class="profile-link" href="${escapeHtml(item.url)}">${icon}<span>${text}</span></a>
              <button type="button" class="copy-email-btn" data-email="${escapeHtml(p.email)}" aria-label="Copy email address ${escapeHtml(p.email)}">Copy</button>
            </li>
          `;
        }

        return `
          <li class="profile-link-row">
            <a class="profile-link" href="${escapeHtml(item.url)}"${extAttrs}>${icon}<span>${text}</span></a>
          </li>
        `;
      })
      .join("");

    aside.innerHTML = `
      <div class="profile-card-inner">
        <div class="avatar-wrap">
          <img class="profile-avatar" src="${escapeHtml(p.avatar)}" alt="${escapeHtml(p.avatarAlt)}" width="164" height="164" />
        </div>
        <div>
          <h1 class="profile-name">${escapeHtml(p.name)}</h1>
          <p class="profile-role">${escapeHtml(p.role)}</p>
          <p class="profile-affiliation">
            <a href="${escapeHtml(p.departmentUrl)}" target="_blank" rel="noopener">${escapeHtml(p.department)}</a><br />
            <a href="${escapeHtml(p.institutionUrl)}" target="_blank" rel="noopener">${escapeHtml(p.institution)}</a>
          </p>
        </div>
      </div>
      <ul class="profile-links" aria-label="Academic and contact links">
        ${linksHtml}
      </ul>
    `;

    const copyBtn = aside.querySelector(".copy-email-btn");
    if (copyBtn && navigator.clipboard) {
      copyBtn.addEventListener("click", function () {
        const email = copyBtn.getAttribute("data-email");
        navigator.clipboard.writeText(email).then(function () {
          const prev = copyBtn.textContent;
          copyBtn.textContent = "Copied";
          setTimeout(function () {
            copyBtn.textContent = prev;
          }, 1800);
        });
      });
    }
  }

  function renderFooter() {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer-inner">
        <span>&copy; ${year} ${escapeHtml(C.profile.name)}</span>
        <span>Hosted on GitHub Pages</span>
      </div>
    `;
  }

  // ------------------------------------------------------------------------
  // News Item Formatter
  // ------------------------------------------------------------------------
  function renderNewsList(items) {
    return `
      <ul class="news-list">
        ${items
          .map((item) => {
            const moreLink = item.link
              ? ` <a class="news-more-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener">Read more &rarr;</a>`
              : "";
            return `
              <li class="news-item">
                <span class="news-date">${escapeHtml(item.date)}</span>
                <div class="news-body">${item.text}${moreLink}</div>
              </li>
            `;
          })
          .join("")}
      </ul>
    `;
  }

  // ------------------------------------------------------------------------
  // Page Renderers
  // ------------------------------------------------------------------------
  function renderHome(main) {
    const bioHtml = C.bioParagraphs.map((p) => `<p>${p}</p>`).join("");
    const recentNews = C.news.slice(0, C.homeNewsCount || 5);

    main.innerHTML = `
      <section aria-labelledby="about-heading">
        <h2 id="about-heading" class="page-title">${escapeHtml(C.aboutHeading)}</h2>
        <div class="bio-prose">${bioHtml}</div>
      </section>

      <section aria-labelledby="recent-news-heading">
        <h2 id="recent-news-heading" class="section-heading">${escapeHtml(C.homeNewsHeading)}</h2>
        ${renderNewsList(recentNews)}
        <div class="see-all-wrap">
          <a class="see-all-link" href="highlights.html">See all news &rarr;</a>
        </div>
      </section>
    `;
  }

  function renderPublications(main) {
    main.classList.add("wide");
    const filterGroups = C.publicationFilterGroups || [];
    const totalCount = C.publications.length;

    // Active selections keyed by group.key -> Set of selected option strings
    const activeFilters = {};
    filterGroups.forEach((g) => {
      activeFilters[g.key] = new Set();
    });

    const filterRowsHtml = filterGroups
      .map((group) => {
        const pillsHtml = (group.options || [])
          .map(
            (opt) =>
              `<button type="button" class="filter-chip" data-group="${escapeHtml(group.key)}" data-value="${escapeHtml(opt)}" aria-pressed="false">${escapeHtml(opt)}</button>`
          )
          .join("");
        return `
          <div class="filter-group-row" role="group" aria-label="Filter by ${escapeHtml(group.label)}">
            <span class="filter-group-label">${escapeHtml(group.label)}:</span>
            ${pillsHtml}
          </div>
        `;
      })
      .join("");

    main.innerHTML = `
      <h2 class="page-title">Publications</h2>
      <div class="pub-filter-panel" aria-label="Publication filters">
        ${filterRowsHtml}
        <div id="filter-status-bar" class="filter-status-bar" hidden>
          <span id="pub-status-live" role="status" aria-live="polite"></span>
          <button type="button" id="clear-filters-btn" class="clear-filters-btn">Clear filters</button>
        </div>
      </div>
      <div id="pub-groups-container"></div>
    `;

    const container = document.getElementById("pub-groups-container");
    const statusBar = document.getElementById("filter-status-bar");
    const liveRegion = document.getElementById("pub-status-live");
    const clearBtn = document.getElementById("clear-filters-btn");

    function hasAnyActiveFilter() {
      return filterGroups.some((g) => activeFilters[g.key].size > 0);
    }

    function matchesFilters(pub) {
      // OR within each active group, AND across active groups
      return filterGroups.every((g) => {
        const selected = activeFilters[g.key];
        if (selected.size === 0) return true;
        const pubValues = Array.isArray(pub[g.key]) ? pub[g.key] : [];
        return pubValues.some((v) => selected.has(v));
      });
    }

    function renderFiltered() {
      const anyActive = hasAnyActiveFilter();
      const filtered = C.publications.filter(matchesFilters);

      const groups = [
        { key: "published", label: "Peer-Reviewed Journal Articles" },
        { key: "forthcoming", label: "Forthcoming" },
        { key: "under_review", label: "Under Review" }
      ];

      let absCounter = 0;
      const groupsHtml = groups
        .map((group) => {
          const items = filtered.filter((p) => p.status === group.key);
          if (!items.length) return "";

          const listHtml = items
            .map((pub) => {
              absCounter += 1;
              const absId = `pub-abs-${absCounter}`;

              // Venue line
              const venueParts = [];
              if (pub.venue) venueParts.push(`<em>${escapeHtml(pub.venue)}</em>`);
              if (pub.details) venueParts.push(escapeHtml(pub.details));
              if (pub.year) venueParts.push(escapeHtml(pub.year));
              const venueHtml = venueParts.length
                ? `<p class="pub-venue">${venueParts.join(", ")}</p>`
                : "";

              // Awards
              const awardsHtml =
                Array.isArray(pub.awards) && pub.awards.length
                  ? `<div class="pub-awards">${pub.awards
                      .map((a) => `<span class="award-badge">&#9733; ${escapeHtml(a)}</span>`)
                      .join("")}</div>`
                  : "";

              // Action buttons
              const actions = [];
              if (pub.abstract) {
                actions.push(
                  `<button type="button" class="pub-btn abs-toggle" aria-expanded="false" aria-controls="${absId}">Abstract &#9656;</button>`
                );
              }
              if (pub.pdf) {
                actions.push(
                  `<a class="pub-btn" href="${escapeHtml(pub.pdf)}" target="_blank" rel="noopener" aria-label="PDF for ${escapeHtml(pub.title)}">PDF</a>`
                );
              }
              if (pub.doi) {
                actions.push(
                  `<a class="pub-btn" href="${escapeHtml(pub.doi)}" target="_blank" rel="noopener" aria-label="Journal DOI link for ${escapeHtml(pub.title)}">DOI</a>`
                );
              }
              if (pub.code) {
                actions.push(
                  `<a class="pub-btn" href="${escapeHtml(pub.code)}" target="_blank" rel="noopener">Code &amp; Data</a>`
                );
              }

              const actionsHtml = actions.length
                ? `<div class="pub-actions">${actions.join("")}</div>`
                : "";

              const abstractParagraphs = pub.abstract
                ? pub.abstract
                    .split(/\n\s*\n/)
                    .map((para) => `<p>${escapeHtml(para.trim())}</p>`)
                    .join("")
                : "";

              const abstractHtml = pub.abstract
                ? `<div id="${absId}" class="pub-abstract" hidden>${abstractParagraphs}</div>`
                : "";

              const primaryLink = pub.doi || pub.pdf || "";
              const titleHtml = primaryLink
                ? `<a href="${escapeHtml(primaryLink)}" target="_blank" rel="noopener">${escapeHtml(pub.title)}</a>`
                : escapeHtml(pub.title);

              return `
                <li class="pub-item">
                  <h4 class="pub-title">${titleHtml}</h4>
                  <p class="pub-authors">${formatAuthors(pub.authors)}</p>
                  ${venueHtml}
                  ${awardsHtml}
                  ${actionsHtml}
                  ${abstractHtml}
                </li>
              `;
            })
            .join("");

          return `
            <section class="pub-group" aria-label="${escapeHtml(group.label)}">
              <h3 class="pub-group-heading">${escapeHtml(group.label)}</h3>
              <ul class="pub-list">${listHtml}</ul>
            </section>
          `;
        })
        .join("");

      container.innerHTML = groupsHtml || `<p>No papers match all selected filters.</p>`;

      if (statusBar && liveRegion) {
        if (anyActive) {
          statusBar.hidden = false;
          liveRegion.textContent = `Showing ${filtered.length} of ${totalCount} papers`;
        } else {
          statusBar.hidden = true;
          liveRegion.textContent = "";
        }
      }

      // Wire abstract toggles
      container.querySelectorAll(".abs-toggle").forEach((btn) => {
        btn.addEventListener("click", function () {
          const targetId = btn.getAttribute("aria-controls");
          const panel = document.getElementById(targetId);
          if (!panel) return;
          const isOpen = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
          btn.innerHTML = isOpen ? "Abstract &#9656;" : "Abstract &#9662;";
          panel.hidden = isOpen;
        });
      });
    }

    renderFiltered();

    main.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", function () {
        const groupKey = chip.getAttribute("data-group");
        const val = chip.getAttribute("data-value");
        const set = activeFilters[groupKey];
        if (!set) return;

        if (set.has(val)) {
          set.delete(val);
          chip.setAttribute("aria-pressed", "false");
        } else {
          set.add(val);
          chip.setAttribute("aria-pressed", "true");
        }
        renderFiltered();
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        filterGroups.forEach((g) => activeFilters[g.key].clear());
        main.querySelectorAll(".filter-chip").forEach((chip) => {
          chip.setAttribute("aria-pressed", "false");
        });
        renderFiltered();
      });
    }
  }

  function renderTeaching(main) {
    const t = C.teaching;
    const coursesHtml = (t.courses || [])
      .map((course) => {
        const syllabusBtn = course.syllabus
          ? `<div class="pub-actions"><a class="pub-btn" href="${escapeHtml(course.syllabus)}" target="_blank" rel="noopener">Syllabus (PDF)</a></div>`
          : "";

        const evalsHtml =
          Array.isArray(course.evaluations) && course.evaluations.length
            ? `
              <h4 class="eval-heading">${escapeHtml(course.evaluationsHeading || "Student Evaluations")}</h4>
              <div class="eval-list">
                ${course.evaluations
                  .map((quote) => `<blockquote class="eval-quote">“${escapeHtml(quote)}”</blockquote>`)
                  .join("")}
              </div>
            `
            : "";

        return `
          <article class="course-card">
            <div class="course-header">
              <p class="course-role">${escapeHtml(course.role)}</p>
              <h3 class="course-title">${escapeHtml(course.code)}: ${escapeHtml(course.title)}</h3>
              <p class="course-meta">${escapeHtml(course.term)}${course.institution ? ` &middot; ${escapeHtml(course.institution)}` : ""}</p>
              ${syllabusBtn}
            </div>
            ${evalsHtml}
          </article>
        `;
      })
      .join("");

    main.innerHTML = `
      <h2 class="page-title">${escapeHtml(t.heading || "Teaching")}</h2>
      ${coursesHtml}
    `;
  }

  function renderPublicSociology(main) {
    const ps = C.publicSociology;
    const itemsHtml = (ps.items || [])
      .map((item) => {
        const titleHtml = item.articleUrl
          ? `<a href="${escapeHtml(item.articleUrl)}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a>`
          : escapeHtml(item.title);

        const videoHtml = item.youtubeEmbedUrl
          ? `
            <div class="video-responsive">
              <iframe
                src="${escapeHtml(item.youtubeEmbedUrl)}"
                title="${escapeHtml(item.youtubeTitle || item.title)}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>
            </div>
          `
          : "";

        return `
          <article class="media-card">
            <h3 class="media-title">${titleHtml}</h3>
            <p class="media-desc">${escapeHtml(item.description)}${item.date ? ` (${escapeHtml(item.date)})` : ""}</p>
            ${videoHtml}
          </article>
        `;
      })
      .join("");

    main.innerHTML = `
      <h2 class="page-title">${escapeHtml(ps.heading || "Public Sociology")}</h2>
      ${itemsHtml}
    `;
  }

  function renderHighlights(main) {
    main.innerHTML = `
      <h2 class="page-title">${escapeHtml(C.newsHeading || "News & Highlights")}</h2>
      ${renderNewsList(C.news)}
    `;
  }

  function renderCv(main) {
    main.classList.add("wide");
    const cvUrl = escapeHtml(C.profile.cvPdf);
    main.innerHTML = `
      <h2 class="page-title">Curriculum Vitae</h2>
      <div class="cv-toolbar">
        <a class="primary-btn" href="${cvUrl}" download="Ibrahim_Enes_Atac_CV.pdf">Download CV (PDF)</a>
        <a class="secondary-btn" href="${cvUrl}" target="_blank" rel="noopener">Open in New Tab &nearr;</a>
      </div>
      <div class="cv-frame-wrap">
        <iframe src="${cvUrl}#navpanes=0&amp;view=FitH" title="Curriculum Vitae of ${escapeHtml(C.profile.name)}">
          <p>Your browser cannot display embedded PDFs. <a href="${cvUrl}">Download the CV (PDF)</a>.</p>
        </iframe>
      </div>
    `;
  }

  // ------------------------------------------------------------------------
  // Initialize
  // ------------------------------------------------------------------------
  renderHeader();
  renderSidebar();
  renderFooter();

  const mainEl = document.getElementById("main-content");
  if (mainEl) {
    if (currentPage === "home") renderHome(mainEl);
    else if (currentPage === "publications") renderPublications(mainEl);
    else if (currentPage === "teaching") renderTeaching(mainEl);
    else if (currentPage === "public-sociology") renderPublicSociology(mainEl);
    else if (currentPage === "highlights") renderHighlights(mainEl);
    else if (currentPage === "cv") renderCv(mainEl);
  }
})();
