/**
 * HyperBridge Community Showcase — Left-Sidebar Filter Engine, Top-Navbar Styled Custom Dropdowns,
 * Adaptive Pagination, Responsive Drawer, Lightbox & Upvotes
 */
(function () {
  'use strict';

  const LIKES_STORAGE_KEY = 'hyperbridge_showcase_likes_v1';
  const CHEVRON_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>';

  function getLikedSet() {
    try {
      const raw = localStorage.getItem(LIKES_STORAGE_KEY);
      return new Set(raw ? JSON.parse(raw) : []);
    } catch (_) {
      return new Set();
    }
  }

  function saveLikedSet(set) {
    try {
      localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(Array.from(set)));
    } catch (_) {}
  }

  function setHidden(el, hide) {
    if (!el) return;
    el.classList.toggle('sc-hidden', hide);
    el.classList.toggle('hidden', hide);
  }

  /**
   * Progressive-enhances native <select class="sc-select"> elements into
   * top-navbar-styled frosted-glass dropdown menus (.sc-dropdown).
   */
  const customDropdownControllers = [];

  function initCustomDropdowns() {
    const selects = Array.from(document.querySelectorAll('select.sc-select'));
    if (!selects.length) return;

    function closeAllDropdowns(exceptWrap) {
      customDropdownControllers.forEach((ctrl) => {
        if (ctrl.wrap !== exceptWrap) {
          ctrl.wrap.classList.remove('is-open');
          ctrl.trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    selects.forEach((select) => {
      if (select.dataset.scDropdownEnhanced === 'true') return;
      select.dataset.scDropdownEnhanced = 'true';

      const isSmall = select.classList.contains('sc-select-sm');
      const wrap = document.createElement('div');
      wrap.className = 'sc-dropdown' + (isSmall ? ' sc-dropdown-sm' : '');

      select.parentNode.insertBefore(wrap, select);
      wrap.appendChild(select);
      select.classList.add('sc-select-native-hidden');

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'sc-dropdown-trigger';
      trigger.setAttribute('aria-haspopup', 'listbox');
      trigger.setAttribute('aria-expanded', 'false');

      const labelSpan = document.createElement('span');
      labelSpan.className = 'sc-dropdown-label';

      const chevronSpan = document.createElement('span');
      chevronSpan.className = 'sc-dropdown-chevron sc-icon';
      chevronSpan.innerHTML = CHEVRON_SVG;

      trigger.appendChild(labelSpan);
      trigger.appendChild(chevronSpan);

      const menu = document.createElement('div');
      menu.className = 'sc-dropdown-menu';
      menu.setAttribute('role', 'listbox');

      const menuBg = document.createElement('div');
      menuBg.className = 'sc-dropdown-menu-bg';
      menu.appendChild(menuBg);

      const list = document.createElement('div');
      list.className = 'sc-dropdown-list';
      menu.appendChild(list);

      wrap.appendChild(trigger);
      wrap.appendChild(menu);

      function rebuildOptions() {
        list.innerHTML = '';
        const options = Array.from(select.options);
        const selectedOpt = options[select.selectedIndex] || options[0];
        if (selectedOpt) {
          labelSpan.textContent = selectedOpt.textContent;
        }

        options.forEach((opt) => {
          const itemBtn = document.createElement('button');
          itemBtn.type = 'button';
          itemBtn.className = 'sc-dropdown-item';
          itemBtn.setAttribute('role', 'option');
          const isSelected = opt.value === select.value;
          itemBtn.classList.toggle('active', isSelected);
          itemBtn.setAttribute('aria-selected', isSelected ? 'true' : 'false');

          const textSpan = document.createElement('span');
          textSpan.className = 'sc-dropdown-item-text';
          textSpan.textContent = opt.textContent;

          const checkSpan = document.createElement('span');
          checkSpan.className = 'sc-dropdown-item-check';
          checkSpan.textContent = isSelected ? '✓' : '';

          itemBtn.appendChild(textSpan);
          itemBtn.appendChild(checkSpan);

          itemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (select.value !== opt.value) {
              select.value = opt.value;
              select.dispatchEvent(new Event('change', { bubbles: true }));
            }
            rebuildOptions();
            wrap.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
          });

          list.appendChild(itemBtn);
        });
      }

      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const willOpen = !wrap.classList.contains('is-open');
        closeAllDropdowns(wrap);
        wrap.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });

      rebuildOptions();
      customDropdownControllers.push({ wrap, trigger, select, refresh: rebuildOptions });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sc-dropdown')) {
        closeAllDropdowns(null);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns(null);
      }
    });
  }

  function refreshAllCustomDropdowns() {
    customDropdownControllers.forEach((ctrl) => ctrl.refresh());
  }

  let directoryResortCallback = null;
  const liveStatsCache = {};

  function getApiBaseUrl() {
    const wrap = document.querySelector('[data-api-url]');
    const raw =
      (wrap && wrap.getAttribute('data-api-url')) ||
      'https://hyperbridge-api.d4viddf.com';
    return raw.replace(/\/+$/, '');
  }

  function updateItemStatsInDom(itemId, serverVotes, serverDownloads) {
    if (!itemId) return;
    const key = itemId.toLowerCase();
    const likedSet = getLikedSet();
    const isLiked = likedSet.has(itemId) || likedSet.has(key);

    if (typeof serverVotes === 'number' || typeof serverDownloads === 'number') {
      liveStatsCache[key] = {
        votes:
          typeof serverVotes === 'number'
            ? Math.max(0, serverVotes)
            : (liveStatsCache[key]?.votes ?? undefined),
        downloads:
          typeof serverDownloads === 'number'
            ? Math.max(0, serverDownloads)
            : (liveStatsCache[key]?.downloads ?? undefined),
      };
    }

    document
      .querySelectorAll(`[data-like-button="${CSS.escape(itemId)}"]`)
      .forEach((b) => {
        const base = parseInt(b.getAttribute('data-base-votes') || '0', 10);
        const liveV = liveStatsCache[key]?.votes;
        let effectiveVotes =
          typeof liveV === 'number'
            ? Math.max(0, liveV)
            : Math.max(0, base + (isLiked ? 1 : 0));

        b.classList.toggle('is-liked', isLiked);
        const cEl = b.querySelector('[data-like-count]');
        if (cEl) cEl.textContent = String(effectiveVotes);

        const parentCard = b.closest('[data-showcase-card]');
        if (parentCard) {
          parentCard.setAttribute('data-votes', String(effectiveVotes));
        }
      });

    document
      .querySelectorAll(`[data-threshold-progress="${CSS.escape(itemId)}"]`)
      .forEach((el) => {
        const max = parseInt(el.getAttribute('data-threshold-max') || '15', 10);
        const btn = document.querySelector(`[data-like-button="${CSS.escape(itemId)}"]`);
        const base = btn ? parseInt(btn.getAttribute('data-base-votes') || '0', 10) : 0;
        const liveV = liveStatsCache[key]?.votes;
        const effectiveVotes =
          typeof liveV === 'number'
            ? Math.max(0, liveV)
            : Math.max(0, base + (isLiked ? 1 : 0));
        el.textContent = `${effectiveVotes} / ${max} likes`;
      });

    document
      .querySelectorAll(`[data-download-count="${CSS.escape(itemId)}"]`)
      .forEach((el) => {
        const baseDl = parseInt(el.getAttribute('data-base-downloads') || '0', 10);
        const liveDl = liveStatsCache[key]?.downloads;
        const effectiveDl = typeof liveDl === 'number' ? Math.max(baseDl, liveDl) : baseDl;
        el.textContent = String(effectiveDl);
      });

    document
      .querySelectorAll(`[data-showcase-card][data-showcase-id="${CSS.escape(itemId)}"]`)
      .forEach((card) => {
        const baseDl = parseInt(card.getAttribute('data-downloads') || '0', 10);
        const liveDl = liveStatsCache[key]?.downloads;
        if (typeof liveDl === 'number') {
          card.setAttribute('data-downloads', String(Math.max(baseDl, liveDl)));
        }
      });
  }

  async function fetchLiveStats() {
    const apiBase = getApiBaseUrl();
    if (!apiBase) return;

    try {
      const resp = await fetch(`${apiBase}/stats`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });
      if (!resp.ok) return;
      const data = await resp.json();
      if (!data || !data.items || typeof data.items !== 'object') return;

      const allIds = new Set();
      document.querySelectorAll('[data-like-button]').forEach((b) => {
        const id = b.getAttribute('data-like-button');
        if (id) allIds.add(id);
      });
      document.querySelectorAll('[data-download-count]').forEach((d) => {
        const id = d.getAttribute('data-download-count');
        if (id) allIds.add(id);
      });

      allIds.forEach((itemId) => {
        const entry = data.items[itemId] || data.items[itemId.toLowerCase()];
        if (entry) {
          updateItemStatsInDom(
            itemId,
            Number(entry.votes) || 0,
            Number(entry.downloads) || 0
          );
        }
      });

      if (typeof directoryResortCallback === 'function') {
        directoryResortCallback();
      }
    } catch (_) {
      // Offline or blocked; gracefully keep static build-time counts
    }
  }

  function initLikeButtons() {
    const likedSet = getLikedSet();
    const buttons = document.querySelectorAll('[data-like-button]');
    const apiBase = getApiBaseUrl();

    buttons.forEach((btn) => {
      const itemId = btn.getAttribute('data-like-button');
      if (!itemId) return;
      const baseVotes = parseInt(btn.getAttribute('data-base-votes') || '0', 10);
      const countEl = btn.querySelector('[data-like-count]');
      const isLiked = likedSet.has(itemId);

      if (isLiked) {
        btn.classList.add('is-liked');
        const initialVotes = Math.max(1, baseVotes);
        if (countEl) countEl.textContent = String(initialVotes);
        const card = btn.closest('[data-showcase-card]');
        if (card) card.setAttribute('data-votes', String(initialVotes));
      }

      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (btn.dataset.voting === 'true') return;
        btn.dataset.voting = 'true';

        const currentLiked = getLikedSet();
        const nowLiked = !currentLiked.has(itemId);

        if (nowLiked) {
          currentLiked.add(itemId);
        } else {
          currentLiked.delete(itemId);
        }
        saveLikedSet(currentLiked);

        const key = itemId.toLowerCase();
        const currentDisplayed = parseInt(
          btn.querySelector('[data-like-count]')?.textContent || String(baseVotes),
          10
        );
        const optimisticVotes = Math.max(0, currentDisplayed + (nowLiked ? 1 : -1));
        updateItemStatsInDom(
          itemId,
          optimisticVotes,
          liveStatsCache[key]?.downloads
        );

        try {
          const resp = await fetch(`${apiBase}/vote`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: itemId,
              action: nowLiked ? 'like' : 'unlike',
              baseVotes,
            }),
          });
          if (resp.ok) {
            const data = await resp.json();
            if (data && data.ok) {
              updateItemStatsInDom(itemId, Number(data.votes) || 0, Number(data.downloads) || 0);
              if (typeof directoryResortCallback === 'function') {
                directoryResortCallback();
              }
            }
          }
        } catch (_) {
          // Keep optimistic localStorage state if offline
        } finally {
          btn.dataset.voting = 'false';
        }
      });
    });
  }

  function initDownloadButtons() {
    const dlButtons = document.querySelectorAll('[data-download-btn]');
    const apiBase = getApiBaseUrl();

    dlButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const itemId = btn.getAttribute('data-download-btn');
        if (!itemId) return;

        const key = itemId.toLowerCase();
        const currentDl =
          liveStatsCache[key]?.downloads ??
          parseInt(
            document
              .querySelector(`[data-download-count="${CSS.escape(itemId)}"]`)
              ?.getAttribute('data-base-downloads') || '0',
            10
          );

        updateItemStatsInDom(itemId, liveStatsCache[key]?.votes, currentDl + 1);

        try {
          fetch(`${apiBase}/download`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: itemId }),
            keepalive: true,
          })
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
              if (data && data.ok) {
                updateItemStatsInDom(itemId, Number(data.votes) || 0, Number(data.downloads) || 0);
              }
            })
            .catch(() => {});
        } catch (_) {}
      });
    });
  }

  function initLightbox() {
    const lightbox = document.getElementById('sc-lightbox');
    const lightboxImg = document.getElementById('sc-lightbox-img');
    const lightboxCaption = document.getElementById('sc-lightbox-caption');
    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, title) {
      if (!src) return;
      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = title || 'Screenshot Preview';
      setHidden(lightbox, false);
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      setHidden(lightbox, true);
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-lightbox-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const src = trigger.getAttribute('data-lightbox-trigger');
        const title = trigger.getAttribute('data-lightbox-title') || '';
        openLightbox(src, title);
      });
    });

    document.querySelectorAll('[data-lightbox-close]').forEach((btn) => {
      btn.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('sc-hidden')) {
        closeLightbox();
      }
    });
  }

  function initDetailGallery() {
    const mainPreview = document.getElementById('detail-main-preview');
    const stageTrigger = document.getElementById('detail-stage-trigger');
    if (!mainPreview) return;

    const switchBtns = document.querySelectorAll('[data-detail-preview-src]');
    switchBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-detail-preview-src');
        if (src) {
          mainPreview.src = src;
          if (stageTrigger) stageTrigger.setAttribute('data-lightbox-trigger', src);
        }
        switchBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  function initMobileSidebarDrawer() {
    const sidebar = document.getElementById('sc-filter-sidebar');
    const backdrop = document.getElementById('sc-sidebar-backdrop');
    if (!sidebar) return;

    function openDrawer() {
      sidebar.classList.add('is-open');
      setHidden(backdrop, false);
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      sidebar.classList.remove('is-open');
      setHidden(backdrop, true);
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-open-filters]').forEach((btn) => {
      btn.addEventListener('click', openDrawer);
    });

    document.querySelectorAll('[data-close-filters]').forEach((btn) => {
      btn.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  function initDirectoryFilters() {
    const appRoot = document.getElementById('showcase-app');
    const grid = document.getElementById('showcase-grid');
    if (!appRoot || !grid) return;

    const cards = Array.from(grid.querySelectorAll('[data-showcase-card]'));
    const searchInput = document.getElementById('showcase-search-input');
    const typeBtns = Array.from(document.querySelectorAll('[data-filter-type]'));
    const badgeBtns = Array.from(document.querySelectorAll('[data-filter-badge]'));
    const notifSelect = document.getElementById('filter-notif-type');
    const scopeSelect = document.getElementById('filter-scope');
    const devSelect = document.getElementById('filter-developer');
    const appSelect = document.getElementById('filter-app');
    const sortSelect = document.getElementById('showcase-sort');
    const pageSizeSelect = document.getElementById('showcase-page-size');
    const autoSizeOpt = document.getElementById('sc-opt-auto-size');
    const visibleCountEl = document.getElementById('showcase-visible-count');
    const rangeLabelEl = document.getElementById('showcase-range-label');
    const resetBtn = document.getElementById('showcase-reset-btn');
    const emptyState = document.getElementById('showcase-empty-state');
    const emptyTitle = document.getElementById('sc-empty-title');
    const emptyResetBtn = document.getElementById('sc-empty-reset-btn');
    const paginationEl = document.getElementById('showcase-pagination');
    const activeFilterBadge = document.getElementById('sc-active-filter-count');
    const devSpotlightContainer = document.getElementById('showcase-dev-spotlights');
    const devSpotlights = Array.from(document.querySelectorAll('[data-dev-spotlight]'));

    // Populate static category counts
    const typeCounts = { all: cards.length, theme: 0, design: 0, translator: 0, scheme: 0 };
    cards.forEach((c) => {
      const t = c.getAttribute('data-type') || '';
      if (typeCounts[t] !== undefined) typeCounts[t]++;
    });
    Object.keys(typeCounts).forEach((k) => {
      const el = document.querySelector(`[data-count-type="${k}"]`);
      if (el) el.textContent = String(typeCounts[k]);
    });

    function computeAutoPageSize() {
      const gridWidth = grid.clientWidth || window.innerWidth;
      let cols = 2;
      if (gridWidth < 680) {
        cols = 1;
      } else if (gridWidth >= 1180) {
        cols = 3;
      } else {
        cols = 2;
      }

      const vh = window.innerHeight || 900;
      let rows = 3;
      if (cols === 1) {
        rows = 4;
      } else if (vh < 800) {
        rows = 2;
      } else if (vh >= 1200) {
        rows = 4;
      } else {
        rows = 3;
      }

      const count = cols * rows;
      if (autoSizeOpt) {
        autoSizeOpt.textContent = `Auto (${count} / page)`;
      }
      return count;
    }

    const initialTypeFromPage = (appRoot.getAttribute('data-initial-type') || 'all').toLowerCase();

    const state = {
      q: '',
      type: initialTypeFromPage !== 'developers' ? initialTypeFromPage : 'all',
      badges: [],
      notif: 'all',
      scope: 'all',
      dev: 'all',
      app: 'all',
      sort: 'popular',
      page: 1,
      pageSizeMode: 'auto',
      pageSize: computeAutoPageSize()
    };

    const params = new URLSearchParams(window.location.search);
    if (params.get('q')) state.q = params.get('q').trim();
    if (params.get('type')) state.type = params.get('type').toLowerCase();
    if (params.get('badge')) {
      state.badges = params
        .get('badge')
        .toLowerCase()
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s && s !== 'all');
    }
    if (params.get('notif')) state.notif = params.get('notif').toUpperCase();
    if (params.get('scope')) state.scope = params.get('scope').toUpperCase();
    if (params.get('dev')) state.dev = params.get('dev').toLowerCase();
    if (params.get('app')) state.app = params.get('app').toLowerCase();
    if (params.get('sort')) state.sort = params.get('sort').toLowerCase();
    if (params.get('page')) {
      const p = parseInt(params.get('page'), 10);
      if (p > 0) state.page = p;
    }
    if (params.get('per_page')) {
      const ps = parseInt(params.get('per_page'), 10);
      if ([4, 6, 8, 12].includes(ps)) {
        state.pageSizeMode = String(ps);
        state.pageSize = ps;
      }
    }

    function syncControlsFromState() {
      if (searchInput) searchInput.value = state.q;
      typeBtns.forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-filter-type') === state.type);
      });
      badgeBtns.forEach((input) => {
        const val = (input.value || input.getAttribute('data-filter-badge') || '').toLowerCase();
        const isChecked = state.badges.includes(val);
        input.checked = isChecked;
        const itemLabel = input.closest('.sc-check-item');
        if (itemLabel) {
          itemLabel.classList.toggle('active', isChecked);
        }
      });
      if (notifSelect) notifSelect.value = state.notif;
      if (scopeSelect) scopeSelect.value = state.scope;
      if (devSelect) devSelect.value = state.dev;
      if (appSelect) appSelect.value = state.app;
      if (sortSelect) sortSelect.value = state.sort;
      if (pageSizeSelect) pageSizeSelect.value = state.pageSizeMode;
      refreshAllCustomDropdowns();
    }

    function updateUrlQuery() {
      const next = new URLSearchParams();
      if (state.q) next.set('q', state.q);
      if (state.type !== 'all' && state.type !== initialTypeFromPage) next.set('type', state.type);
      if (state.badges.length > 0) next.set('badge', state.badges.join(','));
      if (state.notif !== 'all') next.set('notif', state.notif);
      if (state.scope !== 'all') next.set('scope', state.scope);
      if (state.dev !== 'all') next.set('dev', state.dev);
      if (state.app !== 'all') next.set('app', state.app);
      if (state.sort !== 'popular') next.set('sort', state.sort);
      if (state.page > 1) next.set('page', String(state.page));
      if (state.pageSizeMode !== 'auto') next.set('per_page', String(state.pageSize));

      const qs = next.toString();
      const newUrl = window.location.pathname + (qs ? `?${qs}` : '');
      window.history.replaceState(null, '', newUrl);
    }

    function renderPagination(totalItems, totalPages) {
      if (!paginationEl) return;
      if (totalPages <= 1) {
        setHidden(paginationEl, true);
        paginationEl.innerHTML = '';
        return;
      }

      setHidden(paginationEl, false);
      let html = '';

      html += `<button type="button" class="sc-page-btn" data-page="${state.page - 1}" ${
        state.page <= 1 ? 'disabled' : ''
      }>&larr; Prev</button>`;

      html += '<div class="sc-page-numbers">';
      for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === state.page ? 'active' : '';
        html += `<button type="button" class="sc-page-num ${activeClass}" data-page="${i}">${i}</button>`;
      }
      html += '</div>';

      html += `<button type="button" class="sc-page-btn" data-page="${state.page + 1}" ${
        state.page >= totalPages ? 'disabled' : ''
      }>Next &rarr;</button>`;

      paginationEl.innerHTML = html;

      paginationEl.querySelectorAll('[data-page]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          const targetPage = parseInt(btn.getAttribute('data-page'), 10);
          if (!targetPage || targetPage === state.page) return;
          state.page = targetPage;
          applyFiltersAndSort(true);
        });
      });
    }

    function applyFiltersAndSort(scrollToGrid) {
      if (state.pageSizeMode === 'auto') {
        state.pageSize = computeAutoPageSize();
        refreshAllCustomDropdowns();
      }

      const qLower = state.q.toLowerCase();
      const matchedCards = [];

      cards.forEach((card) => {
        const cType = card.getAttribute('data-type') || '';
        const cBadges = (card.getAttribute('data-badges') || '').split(',').filter(Boolean);
        const cNotifs = (card.getAttribute('data-notif-types') || '').split(',').filter(Boolean);
        const cScope = card.getAttribute('data-scope') || '';
        const cDev = card.getAttribute('data-developer') || '';
        const cApps = (card.getAttribute('data-apps') || '').split(',').filter(Boolean);
        const cPkgs = (card.getAttribute('data-packages') || '').split(',').filter(Boolean);
        const cSearch = card.getAttribute('data-search') || '';

        const matchType = state.type === 'all' || cType === state.type;
        const matchBadge =
          state.badges.length === 0 || state.badges.every((b) => cBadges.includes(b));
        const matchNotif = state.notif === 'all' || cNotifs.includes(state.notif);
        const matchScope = state.scope === 'all' || cScope === state.scope;
        const matchDev = state.dev === 'all' || cDev === state.dev;
        const matchApp =
          state.app === 'all' ||
          cApps.includes(state.app) ||
          cPkgs.includes(state.app);
        const matchQuery = !qLower || cSearch.includes(qLower);

        const isMatch =
          matchType &&
          matchBadge &&
          matchNotif &&
          matchScope &&
          matchDev &&
          matchApp &&
          matchQuery;

        if (isMatch) {
          matchedCards.push(card);
        } else {
          setHidden(card, true);
        }
      });

      matchedCards.sort((a, b) => {
        if (state.sort === 'newest') {
          return (
            parseInt(b.getAttribute('data-date') || '0', 10) -
            parseInt(a.getAttribute('data-date') || '0', 10)
          );
        }
        if (state.sort === 'az') {
          return (a.getAttribute('data-title') || '').localeCompare(
            b.getAttribute('data-title') || ''
          );
        }
        return (
          parseInt(b.getAttribute('data-votes') || '0', 10) -
          parseInt(a.getAttribute('data-votes') || '0', 10)
        );
      });

      matchedCards.forEach((card) => grid.appendChild(card));

      const totalMatches = matchedCards.length;
      const totalPages = Math.max(1, Math.ceil(totalMatches / state.pageSize));
      if (state.page > totalPages) state.page = totalPages;
      if (state.page < 1) state.page = 1;

      const startIdx = (state.page - 1) * state.pageSize;
      const endIdx = Math.min(startIdx + state.pageSize, totalMatches);

      matchedCards.forEach((card, idx) => {
        const onCurrentPage = idx >= startIdx && idx < endIdx;
        setHidden(card, !onCurrentPage);
      });

      if (visibleCountEl) visibleCountEl.textContent = String(totalMatches);
      if (rangeLabelEl) {
        rangeLabelEl.textContent =
          totalMatches === 0 ? '0' : `${startIdx + 1}–${endIdx}`;
      }

      setHidden(emptyState, totalMatches > 0);
      renderPagination(totalMatches, totalPages);

      let activeFilterCount = 0;
      if (state.q !== '') activeFilterCount++;
      if (state.type !== initialTypeFromPage && state.type !== 'all') activeFilterCount++;
      if (state.badges.length > 0) activeFilterCount += state.badges.length;
      if (state.notif !== 'all') activeFilterCount++;
      if (state.scope !== 'all') activeFilterCount++;
      if (state.dev !== 'all') activeFilterCount++;
      if (state.app !== 'all') activeFilterCount++;

      setHidden(resetBtn, activeFilterCount === 0);
      if (emptyTitle) {
        emptyTitle.textContent =
          activeFilterCount > 0 ? 'No search match found' : 'No items found';
      }
      setHidden(emptyResetBtn, !(totalMatches === 0 && activeFilterCount > 0));
      if (activeFilterBadge) {
        activeFilterBadge.textContent = String(activeFilterCount);
        activeFilterBadge.classList.toggle('is-active', activeFilterCount > 0);
      }

      if (devSpotlightContainer) {
        const showDevBanner = state.dev !== 'all';
        setHidden(devSpotlightContainer, !showDevBanner);
        devSpotlights.forEach((el) => {
          setHidden(el, el.getAttribute('data-dev-spotlight') !== state.dev);
        });
      }

      updateUrlQuery();

      if (scrollToGrid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function resetAll() {
      state.q = '';
      state.type = initialTypeFromPage !== 'developers' ? initialTypeFromPage : 'all';
      state.badges = [];
      state.notif = 'all';
      state.scope = 'all';
      state.dev = 'all';
      state.app = 'all';
      state.sort = 'popular';
      state.page = 1;
      syncControlsFromState();
      applyFiltersAndSort(false);
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.q = e.target.value.trim();
        state.page = 1;
        applyFiltersAndSort(false);
      });
    }

    typeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        state.type = btn.getAttribute('data-filter-type') || 'all';
        state.page = 1;
        syncControlsFromState();
        applyFiltersAndSort(false);
      });
    });

    badgeBtns.forEach((input) => {
      input.addEventListener('change', () => {
        const selected = [];
        badgeBtns.forEach((cb) => {
          if (cb.checked && cb.value) {
            selected.push(cb.value.toLowerCase());
          }
        });
        state.badges = selected;
        state.page = 1;
        syncControlsFromState();
        applyFiltersAndSort(false);
      });
    });

    if (notifSelect) {
      notifSelect.addEventListener('change', (e) => {
        state.notif = e.target.value;
        state.page = 1;
        applyFiltersAndSort(false);
      });
    }

    if (scopeSelect) {
      scopeSelect.addEventListener('change', (e) => {
        state.scope = e.target.value;
        state.page = 1;
        applyFiltersAndSort(false);
      });
    }

    if (devSelect) {
      devSelect.addEventListener('change', (e) => {
        state.dev = e.target.value;
        state.page = 1;
        applyFiltersAndSort(false);
      });
    }

    if (appSelect) {
      appSelect.addEventListener('change', (e) => {
        state.app = e.target.value;
        state.page = 1;
        applyFiltersAndSort(false);
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sort = e.target.value;
        state.page = 1;
        applyFiltersAndSort(false);
      });
    }

    if (pageSizeSelect) {
      pageSizeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        state.pageSizeMode = val;
        if (val === 'auto') {
          state.pageSize = computeAutoPageSize();
        } else {
          state.pageSize = parseInt(val, 10) || 6;
        }
        state.page = 1;
        applyFiltersAndSort(false);
      });
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (state.pageSizeMode !== 'auto') return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const nextSize = computeAutoPageSize();
        if (nextSize !== state.pageSize) {
          state.pageSize = nextSize;
          applyFiltersAndSort(false);
        } else {
          refreshAllCustomDropdowns();
        }
      }, 150);
    });

    document.querySelectorAll('[data-filter-developer]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const devId = btn.getAttribute('data-filter-developer');
        if (!devId) return;
        state.dev = devId.toLowerCase();
        state.page = 1;
        syncControlsFromState();
        applyFiltersAndSort(false);
        if (devSpotlightContainer) {
          devSpotlightContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    document.querySelectorAll('[data-clear-developer]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.dev = 'all';
        state.page = 1;
        syncControlsFromState();
        applyFiltersAndSort(false);
      });
    });

    if (resetBtn) resetBtn.addEventListener('click', resetAll);
    document.querySelectorAll('[data-empty-reset]').forEach((b) =>
      b.addEventListener('click', resetAll)
    );

    initCustomDropdowns();
    syncControlsFromState();
    applyFiltersAndSort(false);
    directoryResortCallback = () => applyFiltersAndSort(false);
  }

  function initCardNavigation() {
    document
      .querySelectorAll('[data-showcase-card][data-card-url], [data-dev-profile][data-card-url]')
      .forEach((card) => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('a, button')) return;
          const url = card.getAttribute('data-card-url');
          if (url) {
            window.location.href = url;
          }
        });
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLikeButtons();
    initDownloadButtons();
    initLightbox();
    initDetailGallery();
    initMobileSidebarDrawer();
    initDirectoryFilters();
    initCardNavigation();
    fetchLiveStats();
  });
})();
