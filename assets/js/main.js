(function () {
  // Copy-to-clipboard buttons inside contact popovers
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var text = btn.getAttribute('data-copy');
      if (!text) {
        var user = btn.getAttribute('data-user');
        var domain = btn.getAttribute('data-domain');
        if (user && domain) text = user + '@' + domain;
      }
      text = text || '';
      var done = function () {
        btn.classList.add('copied');
        setTimeout(function () {
          btn.classList.remove('copied');
        }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });

  // Tap-to-toggle popovers on touch devices (hover handles desktop)
  document.querySelectorAll('.has-popover .contact-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = trigger.closest('.contact-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.contact-item.open').forEach(function (i) {
        i.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.contact-item')) {
      document.querySelectorAll('.contact-item.open').forEach(function (i) {
        i.classList.remove('open');
      });
    }
  });
})();
