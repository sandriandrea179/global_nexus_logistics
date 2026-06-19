/* ============================================================
   nav.js — Sidebar navigation for GlobalNexus Logistics
   ============================================================ */

(function ($) {
  'use strict';

  /* Set active nav link based on page key */
  window.setActiveNav = function (pageKey) {
    $('.nav-link').removeClass('active');
    $('.nav-link[data-page="' + pageKey + '"]').addClass('active');
  };

  /* Populate logged-in user name */
  window.initHeader = function () {
    var user = window.getCurrentUser ? window.getCurrentUser() : 'admin';
    $('#currentUser').text(user);
    $('#currentUserInitial').text(user.charAt(0).toUpperCase());
  };

  /* Sidebar toggle for mobile */
  $('#sidebarToggle').on('click', function () {
    $('#sidebar').toggleClass('open');
  });

  /* Close sidebar when clicking outside on mobile */
  $(document).on('click', function (e) {
    if (
      $(window).width() <= 900 &&
      !$(e.target).closest('#sidebar').length &&
      !$(e.target).closest('#sidebarToggle').length
    ) {
      $('#sidebar').removeClass('open');
    }
  });

  /* Logout button */
  $(document).on('click', '#logoutBtn', function () {
    window.doLogout();
  });

  /* Smooth scroll for dashboard anchor links */
  $(document).on('click', '.dash-anchor', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    if ($(target).length) {
      $('html, body').animate({ scrollTop: $(target).offset().top - 80 }, 400);
    }
  });

}(jQuery));
