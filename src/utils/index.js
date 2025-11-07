// src/utils/index.js

// Verbindet Tailwind CSS Klassen sicher
export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  // Erstellt eine URL aus einem Seitennamen, z. B. "Regeln" -> "/regeln"
  export function createPageUrl(name) {
    if (!name) return "/";
    return "/" + name.trim().toLowerCase().replace(/\s+/g, "-");
  }
  