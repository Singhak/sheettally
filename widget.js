/**
 * US CNC Laser & CAD Quoting Engine — Universal Embeddable Widget Script
 * 
 * Drop directly onto WordPress, Wix, Squarespace, Webflow, or custom websites:
 * <script src="https://engine.yourdomain.com/widget.js" data-shop-id="midwest-precision" data-currency="USD"></script>
 */
(function () {
  'use strict';

  // Prevent multiple initializations of the same script
  if (window.__LASER_QUOTE_WIDGET_LOADED__) return;
  window.__LASER_QUOTE_WIDGET_LOADED__ = true;

  // Locate the current script tag
  var currentScript =
    document.currentScript ||
    document.querySelector('script[data-shop-id]') ||
    document.querySelector('script[src*="widget.js"]');

  if (!currentScript) {
    console.warn('[LaserQuoteWidget] Script element could not be located.');
    return;
  }

  // Parse configuration attributes
  var shopId = currentScript.getAttribute('data-shop-id') || 'midwest-precision';
  var shopName = currentScript.getAttribute('data-shop-name') || '';
  var shopEmail = currentScript.getAttribute('data-shop-email') || '';
  var hourlyRate = currentScript.getAttribute('data-hourly-rate') || '';
  var minOrder = currentScript.getAttribute('data-min-order') || '';
  var salesTax = currentScript.getAttribute('data-sales-tax') || '';
  var webhookUrl = currentScript.getAttribute('data-webhook-url') || '';
  var currency = currentScript.getAttribute('data-currency') || 'USD';
  var view = currentScript.getAttribute('data-view') || 'industrial';
  var theme = currentScript.getAttribute('data-theme') || 'dark';
  var mode = currentScript.getAttribute('data-mode') || 'inline'; // 'inline' or 'button' / 'floating'
  var targetSelector = currentScript.getAttribute('data-container') || currentScript.getAttribute('data-target');
  var height = currentScript.getAttribute('data-height') || '780px';
  var width = currentScript.getAttribute('data-width') || '100%';
  var buttonText = currentScript.getAttribute('data-button-text') || '⚡ Get Instant Laser Quote';
  var primaryColor = currentScript.getAttribute('data-primary-color') || '#0284c7';

  // Resolve base URL from the script source
  var scriptUrl = new URL(currentScript.src, window.location.href);
  var baseUrl = scriptUrl.origin;
  var hostOrigin = window.location.origin || (window.location.protocol + '//' + window.location.host);
  var widgetSrc =
    baseUrl +
    '/app?embed=true' +
    '&shopId=' + encodeURIComponent(shopId) +
    '&currency=' + encodeURIComponent(currency) +
    '&view=' + encodeURIComponent(view) +
    '&theme=' + encodeURIComponent(theme) +
    '&embedOrigin=' + encodeURIComponent(hostOrigin);

  if (shopName) widgetSrc += '&shopName=' + encodeURIComponent(shopName);
  if (shopEmail) widgetSrc += '&shopEmail=' + encodeURIComponent(shopEmail);
  if (hourlyRate) widgetSrc += '&hourlyRate=' + encodeURIComponent(hourlyRate);
  if (minOrder) widgetSrc += '&minOrder=' + encodeURIComponent(minOrder);
  if (salesTax) widgetSrc += '&salesTax=' + encodeURIComponent(salesTax);
  if (webhookUrl) widgetSrc += '&webhookUrl=' + encodeURIComponent(webhookUrl);

  // Injected CSS Styles for widget iframe, container, modal and floating launcher
  var styles = `
    .laser-widget-container {
      width: ${width};
      max-width: 100%;
      position: relative;
      margin: 1.5rem 0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.2);
      background: #0b0f19;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .laser-widget-iframe {
      width: 100%;
      height: ${height};
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      display: block;
      background: #0b0f19;
      color-scheme: dark;
    }
    .laser-widget-loader {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #0b0f19;
      color: #94a3b8;
      font-size: 14px;
      font-weight: 500;
      z-index: 10;
      transition: opacity 0.3s ease;
    }
    .laser-widget-spinner {
      width: 36px;
      height: 36px;
      border: 3px solid rgba(56, 189, 248, 0.2);
      border-top-color: #38bdf8;
      border-radius: 50%;
      animation: laser-spin 0.8s linear infinite;
      margin-bottom: 12px;
    }
    @keyframes laser-spin {
      to { transform: rotate(360deg); }
    }
    .laser-widget-badge {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 14px;
      background: #090d16;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 11px;
      color: #64748b;
    }
    .laser-widget-badge a {
      color: #38bdf8;
      text-decoration: none;
      font-weight: 600;
    }
    /* Floating Launcher Button */
    .laser-floating-launcher {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999990;
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      color: #ffffff;
      border: none;
      border-radius: 50px;
      padding: 14px 22px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 10px 25px -3px rgba(2, 132, 199, 0.5), 0 4px 6px -4px rgba(2, 132, 199, 0.3);
      display: flex;
      align-items: center;
      gap: 10px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .laser-floating-launcher:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 28px -3px rgba(2, 132, 199, 0.6), 0 6px 10px -4px rgba(2, 132, 199, 0.4);
    }
    /* Modal Overlay for Floating Mode */
    .laser-modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(3, 7, 18, 0.85);
      backdrop-filter: blur(8px);
      z-index: 999995;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .laser-modal-overlay.is-open {
      display: flex;
    }
    .laser-modal-window {
      width: 95%;
      max-width: 1280px;
      height: 90vh;
      max-height: 860px;
      background: #0b0f19;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }
    .laser-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      background: #0f172a;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      color: #f8fafc;
      font-size: 14px;
      font-weight: 600;
    }
    .laser-modal-close-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 20px;
      cursor: pointer;
      line-height: 1;
      padding: 4px 8px;
      border-radius: 4px;
    }
    .laser-modal-close-btn:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
    }
    .laser-modal-iframe {
      flex: 1;
      width: 100%;
      height: 100%;
      border: none;
      background: #0b0f19;
    }
  `;

  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);

  function createInlineWidget(targetEl) {
    var container = document.createElement('div');
    container.className = 'laser-widget-container';
    container.id = 'laser-quote-widget-' + shopId;

    var loader = document.createElement('div');
    loader.className = 'laser-widget-loader';
    loader.innerHTML = '<div class="laser-widget-spinner"></div><div>Loading Precision Quoting Canvas...</div>';
    container.appendChild(loader);

    var iframe = document.createElement('iframe');
    iframe.className = 'laser-widget-iframe';
    iframe.src = widgetSrc;
    iframe.title = 'Instant Laser Cutting Quoting & Nesting Widget';
    iframe.setAttribute('allow', 'clipboard-read; clipboard-write');
    iframe.setAttribute('loading', 'lazy');

    iframe.onload = function () {
      loader.style.opacity = '0';
      setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 300);
    };

    container.appendChild(iframe);

    // Optional footer badge
    var badge = document.createElement('div');
    badge.className = 'laser-widget-badge';
    badge.innerHTML = '<span>⚡ Instant 2D DXF Laser Nesting & Quoting Engine</span><span>Powered by <a href="' + baseUrl + '" target="_blank">LaserCPQ</a></span>';
    container.appendChild(badge);

    if (targetEl) {
      targetEl.appendChild(container);
    } else {
      currentScript.parentNode.insertBefore(container, currentScript.nextSibling);
    }

    return { container: container, iframe: iframe };
  }

  function createFloatingLauncher() {
    var launcher = document.createElement('button');
    launcher.className = 'laser-floating-launcher';
    launcher.innerHTML = '<span>' + buttonText + '</span>';
    document.body.appendChild(launcher);

    var modalOverlay = document.createElement('div');
    modalOverlay.className = 'laser-modal-overlay';
    modalOverlay.innerHTML = `
      <div class="laser-modal-window">
        <div class="laser-modal-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>⚡</span>
            <span>Instant CNC Laser Quoting & DXF Engine</span>
          </div>
          <button class="laser-modal-close-btn" title="Close Quotation Canvas">✕</button>
        </div>
        <iframe class="laser-modal-iframe" src="${widgetSrc}" allow="clipboard-read; clipboard-write"></iframe>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    var closeBtn = modalOverlay.querySelector('.laser-modal-close-btn');

    function openModal() {
      modalOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modalOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    launcher.onclick = openModal;
    closeBtn.onclick = closeModal;
    modalOverlay.onclick = function (e) {
      if (e.target === modalOverlay) closeModal();
    };

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
        closeModal();
      }
    });

    return { launcher: launcher, modalOverlay: modalOverlay, open: openModal, close: closeModal };
  }

  // Initialize according to configured mode
  if (mode === 'button' || mode === 'floating') {
    window.LaserQuoteWidget = createFloatingLauncher();
  } else {
    var targetEl = targetSelector ? document.querySelector(targetSelector) : null;
    window.LaserQuoteWidget = createInlineWidget(targetEl);
  }

  // postMessage event bridge for host-iframe communication
  window.addEventListener('message', function (event) {
    if (!event.data || typeof event.data !== 'object') return;
    if (event.data.type === 'LASER_QUOTE_RESIZE' && typeof event.data.height === 'number') {
      var widgetIframes = document.querySelectorAll('.laser-widget-iframe');
      widgetIframes.forEach(function (ifr) {
        ifr.style.height = event.data.height + 'px';
      });
    }
  });
})();
