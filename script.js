// Navigation behaviour: active-section underline
// and the clear-over-photo state of the bar while the hero is on screen.
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var nav = document.querySelector(".nav");
  var list = document.querySelector(".nav__list");
  var hero = document.querySelector(".hero");
  var links = Array.prototype.slice.call(list.querySelectorAll("a[href^='#']"));
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
    .filter(Boolean);

  var current = -1;
  var ticking = false;

  function setActive(index) {
    if (index === current) return;
    current = index;
    links.forEach(function (a, i) {
      if (i === index) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    // Keep the active link visible when the bar scrolls sideways on small screens.
    if (index >= 0 && list.scrollWidth > list.clientWidth) {
      var a = links[index];
      var target = a.offsetLeft - (list.clientWidth - a.offsetWidth) / 2;
      list.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    }
  }

  function update() {
    ticking = false;
    var navH = nav.offsetHeight;
    var vh = window.innerHeight;
    var doc = document.documentElement;
    var max = doc.scrollHeight - vh;
    var y = window.scrollY || doc.scrollTop;

    nav.classList.toggle("is-scrollable", list.scrollWidth > list.clientWidth + 1);

    // Bar is clear while the hero still fills the space behind it.
    nav.classList.toggle("is-clear", hero.getBoundingClientRect().bottom > navH);

    // A section becomes current once its top passes the upper third of the window.
    var line = navH + vh * 0.3;
    var index = -1;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= line) index = i;
    }
    if (max > 0 && y >= max - 2) index = sections.length - 1;
    setActive(index);
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", requestUpdate);
  update();
})();
