/**
 * Paryatan Common Scripts
 * Handles Top Navbar State, Authentication Slot, Mobile Navigation, and Utilities
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarState();
  initUserSessionSlot();
  initMobileNav();
});

/**
 * 1. Constant Top Bar: Highlights active page
 */
function initNavbarState() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href").toLowerCase();
    // Match exact filename or root / index
    if (
      (currentPath.endsWith(href)) ||
      (href === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("/index.html") || currentPath === ""))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * 2. User Session Slot (Shared across all pages)
 * In PHP backend: Replace with `<?php if(isset($_SESSION['user'])): ?>...<?php endif; ?>`
 * In frontend simulation: checks `ParyatanAPI.getCurrentUser()` from localStorage
 */
function initUserSessionSlot() {
  const userSlot = document.getElementById("navUserSlot");
  if (!userSlot) return;

  const currentUser = typeof ParyatanAPI !== "undefined" ? ParyatanAPI.getCurrentUser() : null;

  if (currentUser && currentUser.name) {
    const firstName = currentUser.name.split(" ")[0];
    const initial = firstName.charAt(0).toUpperCase();

    // Logged in UI: Displays user's name badge with dropdown/logout
    userSlot.innerHTML = `
      <!-- BACKEND INTEGRATION NOTE: The backend PHP session swaps this slot with user name and logout -->
      <div style="position: relative; display: inline-flex; align-items: center; gap: 8px;">
        <button id="userMenuToggleBtn" class="user-badge-btn" title="Account Details">
          <span class="user-avatar-circle">${initial}</span>
          <span>${firstName}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <button id="navLogoutBtn" class="chip" style="color: var(--error); border-color: rgba(211,47,47,0.2);" title="Sign out">
          Logout
        </button>
      </div>
    `;

    const logoutBtn = document.getElementById("navLogoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (typeof ParyatanAPI !== "undefined") {
          ParyatanAPI.setCurrentUser(null);
        }
        showToast("Signed out successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
    }
  } else {
    // Guest UI: Regular "Login / Register" link
    userSlot.innerHTML = `
      <!-- BACKEND INTEGRATION NOTE: Default guest link to auth.html -->
      <a href="auth.html" class="nav-link" id="navAuthLink">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Login / Register
      </a>
    `;

    // Re-check active state for auth link if on auth.html
    const currentPath = window.location.pathname.toLowerCase();
    if (currentPath.endsWith("auth.html")) {
      const authLink = document.getElementById("navAuthLink");
      if (authLink) authLink.classList.add("active");
    }
  }
}

/**
 * 3. Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinksList");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }
}

/**
 * Global Toast Notification Helper
 */
function showToast(message, duration = 3000) {
  let toast = document.getElementById("paryatanToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "paryatanToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}
