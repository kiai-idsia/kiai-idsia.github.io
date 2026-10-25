/* Knowledge-Informed AI group website: progressive enhancements.
   Without JavaScript the menu is always visible and all projects and
   publications are listed; this file adds the mobile menu and the filters by
   research line and application domain. */
(function () {
  'use strict';

  /* Open new pages at the top. Some embedded viewers keep the scroll position
     of the previous page; a normal browser does this already. Back/forward
     navigation keeps the position restored by the browser. */
  try {
    var nav0 = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    if (!window.location.hash && (!nav0 || nav0.type === 'navigate')) window.scrollTo(0, 0);
  } catch (e) { /* ignore */ }

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var header = document.querySelector('.site-header');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    ['focusin', 'click'].forEach(function (evt) {
      document.addEventListener(evt, function (e) {
        if (nav.classList.contains('is-open') && header && !header.contains(e.target)) setOpen(false);
      });
    });
    /* Close the menu after choosing a link (also for anchors on the same page). */
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  /* ---- Filters by research line and application domain ----
     Markup: a [data-filter-scope] container with [data-filter-tools] (chips in
     [data-filter-group="lines|domains"], optional [data-filter-search] input,
     [data-filter-count]); items carry data-lines and data-domains; groups of
     items are wrapped in [data-filter-section] and hidden when empty.
     The URL parameters ?line= and ?domain= preselect a filter. */
  var PARAM = { lines: 'line', domains: 'domain' };

  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function has(list, value) {
    return (' ' + (list || '') + ' ').indexOf(' ' + value + ' ') > -1;
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-filter-scope]'), function (scope) {
    var tools = scope.querySelector('[data-filter-tools]');
    if (!tools) return;
    tools.hidden = false;

    var items = Array.prototype.slice.call(scope.querySelectorAll('[data-lines]'));
    var sections = Array.prototype.slice.call(scope.querySelectorAll('[data-filter-section]'));
    var groups = Array.prototype.slice.call(tools.querySelectorAll('[data-filter-group]'));
    var search = tools.querySelector('[data-filter-search]');
    var count = tools.querySelector('[data-filter-count]');
    var empty = scope.querySelector('.filter-empty');
    var noun = count ? count.getAttribute('data-noun') : 'items';
    var state = { lines: 'all', domains: 'all' };

    var params = new URLSearchParams(window.location.search);
    groups.forEach(function (g) {
      var key = g.getAttribute('data-filter-group');
      var v = params.get(PARAM[key]);
      if (v && g.querySelector('[data-filter="' + v + '"]')) state[key] = v;
    });
    if (search) items.forEach(function (it) { it._text = norm(it.textContent + ' ' + (it.getAttribute('data-year') || '')); });

    function setPressed(g) {
      var key = g.getAttribute('data-filter-group');
      Array.prototype.forEach.call(g.querySelectorAll('.chip'), function (c) {
        c.setAttribute('aria-pressed', String(c.getAttribute('data-filter') === state[key]));
      });
    }

    function apply() {
      var q = search ? norm(search.value.trim()) : '';
      var shown = 0;
      items.forEach(function (it) {
        var ok = (state.lines === 'all' || has(it.getAttribute('data-lines'), state.lines)) &&
                 (state.domains === 'all' || has(it.getAttribute('data-domains'), state.domains)) &&
                 (!q || it._text.indexOf(q) > -1);
        it.hidden = !ok;
        if (ok) shown++;
      });
      sections.forEach(function (s) {
        s.hidden = !s.querySelector('[data-lines]:not([hidden])');
      });
      if (count) {
        count.textContent = shown === items.length ? items.length + ' ' + noun : shown + ' of ' + items.length + ' ' + noun;
      }
      if (empty) empty.hidden = shown > 0;
    }

    function updateUrl() {
      var url = new URL(window.location.href);
      Object.keys(PARAM).forEach(function (key) {
        if (state[key] === 'all') url.searchParams.delete(PARAM[key]);
        else url.searchParams.set(PARAM[key], state[key]);
      });
      window.history.replaceState(null, '', url);
    }

    groups.forEach(function (g) {
      setPressed(g);
      g.addEventListener('click', function (e) {
        var btn = e.target.closest('.chip');
        if (!btn) return;
        state[g.getAttribute('data-filter-group')] = btn.getAttribute('data-filter');
        setPressed(g);
        updateUrl();
        apply();
      });
    });
    if (search) search.addEventListener('input', apply);
    apply();
  });
})();
