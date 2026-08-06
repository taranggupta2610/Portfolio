// Progressive enhancement only — the site works fully without this file.

// Highlight the current section link in the header while scrolling.
(function () {
  var links = document.querySelectorAll('.site-nav a');
  var sections = Array.from(links)
    .map(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.style.color = '';
        });
        var active = document.querySelector('.site-nav a[href="#' + entry.target.id + '"]');
        if (active) active.style.color = '#DDBB78';
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
