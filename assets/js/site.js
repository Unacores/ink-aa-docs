(function () {
  "use strict";

  /* ---------- Theme toggle ---------- */
  var root = document.documentElement;
  var themeBtn = document.querySelector(".theme-toggle");
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("ink-theme", t); } catch (e) {}
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(current);
    });
  }

  /* ---------- Mobile sidebar toggle ---------- */
  var toggle = document.querySelector(".ink-menu-toggle");
  var sidebar = document.querySelector(".ink-sidebar");
  var overlay = document.querySelector(".ink-overlay");
  function openSidebar() { sidebar && sidebar.classList.add("is-open"); overlay && overlay.classList.add("is-open"); }
  function closeSidebar() { sidebar && sidebar.classList.remove("is-open"); overlay && overlay.classList.remove("is-open"); }
  if (toggle) toggle.addEventListener("click", openSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  /* ---------- Active link highlighting ---------- */
  var here = (window.location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".ink-sidebar__link, .ink-header__nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) a.classList.add("is-active");
  });

  /* ---------- Copy-to-clipboard on code blocks ---------- */
  var copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  document.querySelectorAll("article.ink-article pre").forEach(function (pre) {
    var btn = document.createElement("button");
    btn.className = "code-copy";
    btn.type = "button";
    btn.innerHTML = copyIcon + "<span>Copy</span>";
    btn.addEventListener("click", function () {
      var code = pre.querySelector("code");
      var text = code ? code.innerText : pre.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.querySelector("span").textContent = "Copied";
        btn.classList.add("copied");
        setTimeout(function () {
          btn.querySelector("span").textContent = "Copy";
          btn.classList.remove("copied");
        }, 1600);
      });
    });
    pre.appendChild(btn);
  });

  /* ---------- Build "On this page" TOC ---------- */
  var tocRoot = document.querySelector(".ink-toc");
  var article = document.querySelector("article.ink-article");
  if (tocRoot && article) {
    var headings = article.querySelectorAll("h2[id], h3[id]");
    if (headings.length) {
      var list = document.createElement("ul");
      headings.forEach(function (h) {
        var li = document.createElement("li");
        li.className = h.tagName.toLowerCase();
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent.replace(/\s*\u00b6\s*$/, "");
        li.appendChild(a);
        list.appendChild(li);
      });
      var title = document.createElement("div");
      title.className = "ink-toc__title";
      title.textContent = "On this page";
      tocRoot.appendChild(title);
      tocRoot.appendChild(list);

      var tocLinks = Array.prototype.slice.call(list.querySelectorAll("a"));
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var link = list.querySelector('a[href="#' + entry.target.id + '"]');
            if (!link) return;
            if (entry.isIntersecting) {
              tocLinks.forEach(function (l) { l.classList.remove("is-active"); });
              link.classList.add("is-active");
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      headings.forEach(function (h) { observer.observe(h); });
    } else {
      tocRoot.style.display = "none";
    }
  }

  /* ---------- Search ---------- */
  var searchInput = document.querySelector(".ink-search input");
  var resultsBox = document.querySelector(".ink-search__results");
  var searchIndex = null;

  function loadIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);
    return fetch("search-index.json")
      .then(function (r) { return r.json(); })
      .then(function (data) { searchIndex = data; return data; })
      .catch(function () { return []; });
  }

  function renderResults(items, query) {
    resultsBox.innerHTML = "";
    if (!items.length) {
      var empty = document.createElement("div");
      empty.className = "ink-search__empty";
      empty.textContent = 'No results for "' + query + '"';
      resultsBox.appendChild(empty);
      resultsBox.classList.add("is-open");
      return;
    }
    items.slice(0, 8).forEach(function (item) {
      var a = document.createElement("a");
      a.className = "ink-search__result";
      a.href = item.url;
      var t = document.createElement("span");
      t.className = "title";
      t.textContent = item.title;
      var p = document.createElement("span");
      p.className = "path";
      p.textContent = item.section || item.page;
      a.appendChild(t);
      a.appendChild(p);
      resultsBox.appendChild(a);
    });
    resultsBox.classList.add("is-open");
  }

  function search(query) {
    query = query.trim().toLowerCase();
    if (!query) { resultsBox.classList.remove("is-open"); return; }
    loadIndex().then(function (data) {
      var matches = data.filter(function (item) {
        return item.title.toLowerCase().indexOf(query) !== -1 || (item.text && item.text.toLowerCase().indexOf(query) !== -1);
      });
      renderResults(matches, query);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) { search(e.target.value); });
    searchInput.addEventListener("focus", function (e) { if (e.target.value) search(e.target.value); });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".ink-search")) resultsBox && resultsBox.classList.remove("is-open");
    });
    document.addEventListener("keydown", function (e) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); searchInput.focus(); }
      if (e.key === "Escape") { resultsBox && resultsBox.classList.remove("is-open"); searchInput.blur(); }
    });
  }
})();
