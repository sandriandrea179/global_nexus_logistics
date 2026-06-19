/* ============================================================
   auth.js — Authentication module for GlobalNexus Logistics
   ============================================================ */

(function () {
  'use strict';

  /* Hardcoded credentials */
  var VALID_USERNAME = 'admin';
  var VALID_PASSWORD = 'GNL2024!';
  var SESSION_KEY    = 'gnl_auth';
  var SESSION_USER   = 'gnl_user';

  /* Attempt login — returns true on success */
  window.attemptLogin = function (username, password) {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      sessionStorage.setItem(SESSION_USER, username);
      return true;
    }
    return false;
  };

  /* Require authentication — redirects to login if not authenticated */
  window.requireAuth = function () {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      window.location.href = 'login.html';
    }
  };

  /* Logout — clears session and redirects */
  window.doLogout = function () {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_USER);
    window.location.href = 'login.html';
  };

  /* Get current logged-in username */
  window.getCurrentUser = function () {
    return sessionStorage.getItem(SESSION_USER) || 'admin';
  };

}());
