// main.js
import { loadScience } from "./modules/science.js";
import { loadFinance } from "./modules/finance.js";
import { loadPhilosophy } from "./modules/philosophy.js";
import { loadDaily } from "./modules/daily.js";

// Core router-like function
function loadModule(moduleName) {
  switch (moduleName) {
    case "science":
      loadScience();
      break;
    case "finance":
      loadFinance();
      break;
    case "philosophy":
      loadPhilosophy();
      break;
    case "daily":
      loadDaily();
      break;
    default:
      console.log("Module not found!");
  }
}

// Example usage (misalnya tombol klik)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-module]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      loadModule(btn.dataset.module);
    });
  });
});
