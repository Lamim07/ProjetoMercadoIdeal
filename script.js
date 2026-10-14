"use strict";

const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const menuIcon = menuButton?.querySelector("use");

function setMenu(open) {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  mobileNav.hidden = !open;
  menuIcon?.setAttribute("href", open ? "#close" : "#menu");
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});

const desktopQuery = window.matchMedia("(min-width: 901px)");
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear().toString();
