/* ============================================================
   tables.js — Generic table loader for GlobalNexus Logistics
   Supporta sia modalità offline (window.GNL_DATA) sia online ($.getJSON)
   ============================================================ */

(function ($) {
  'use strict';

  /* ---- Utility: Status badge generator ---- */
  window.statusBadge = function (status) {
    if (!status || status === '-') return '<span class="badge badge-secondary">—</span>';

    var map = {
      /* Users */
      'Attivo'              : 'badge-success',
      'Inattivo'            : 'badge-danger',
      'Sospeso'             : 'badge-warning',
      /* Orders */
      'Consegnato'          : 'badge-success',
      'In transito'         : 'badge-info',
      'In preparazione'     : 'badge-warning',
      'In carico'           : 'badge-gold',
      'In attesa sdoganamento': 'badge-warning',
      'Bloccato dogana'     : 'badge-danger',
      /* Vehicles */
      'In servizio'         : 'badge-success',
      'In navigazione'      : 'badge-info',
      'In volo'             : 'badge-info',
      'In porto'            : 'badge-gold',
      'In manutenzione'     : 'badge-warning',
      'In hangar'           : 'badge-secondary',
      'Fermo'               : 'badge-secondary',
      /* Containers */
      'In viaggio'          : 'badge-info',
      'In deposito'         : 'badge-gold',
      'Sdoganamento'        : 'badge-warning',
      /* Departures / Destinations */
      'Partito'             : 'badge-success',
      'Arrivato'            : 'badge-success',
      'Programmato'         : 'badge-gold',
      'In attesa'           : 'badge-warning',
      'In avvicinamento'    : 'badge-info',
      'In ritardo'          : 'badge-danger'
    };

    var cls = map[status] || 'badge-secondary';
    return '<span class="badge ' + cls + '">' + status + '</span>';
  };

  /* ---- Utility: Boolean badge ---- */
  window.boolBadge = function (val, trueLabel, falseLabel) {
    trueLabel  = trueLabel  || 'Sì';
    falseLabel = falseLabel || 'No';
    if (val) return '<span class="badge badge-success">' + trueLabel + '</span>';
    return '<span class="badge badge-danger">' + falseLabel + '</span>';
  };

  /* ---- Utility: Progress bar ---- */
  window.progressBar = function (pct) {
    pct = parseInt(pct, 10) || 0;
    var fillClass = pct >= 90 ? 'high' : pct >= 70 ? 'mid' : '';
    return (
      '<div class="progress-bar-wrap">' +
      '<div class="progress-bar"><div class="progress-fill ' + fillClass + '" style="width:' + pct + '%"></div></div>' +
      '<span class="progress-label">' + pct + '%</span>' +
      '</div>'
    );
  };

  /* ---- Utility: Escape HTML ---- */
  function escapeHtml(str) {
    if (str === null || str === undefined) return '—';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  window.escapeHtml = escapeHtml;

  /* ---- Render table from data array ---- */
  function renderTable($wrapper, data, columns, statsCallback) {
    if (!data || data.length === 0) {
      $wrapper.html(
        '<div class="empty-state">' +
        '<span class="empty-icon">📭</span>' +
        '<p>Nessun dato disponibile</p>' +
        '</div>'
      );
      return;
    }

    var html = '<div class="table-wrapper"><table class="data-table"><thead><tr>';
    $.each(columns, function (_, col) {
      html += '<th>' + escapeHtml(col.label) + '</th>';
    });
    html += '</tr></thead><tbody>';

    $.each(data, function (_, row) {
      html += '<tr>';
      $.each(columns, function (_, col) {
        var val = row[col.key];
        if (typeof col.render === 'function') {
          html += '<td>' + col.render(val, row) + '</td>';
        } else {
          html += '<td>' + escapeHtml(val) + '</td>';
        }
      });
      html += '</tr>';
    });

    html += '</tbody></table></div>';
    $wrapper.html(html);

    $('#recordCount').html('<strong>' + data.length + '</strong> record');

    if (typeof statsCallback === 'function') {
      statsCallback(data);
    }

    /* Live search */
    $('#tableSearch').off('input').on('input', function () {
      var q = $(this).val().toLowerCase();
      $wrapper.find('tbody tr').each(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(q) !== -1);
      });
      var visible = $wrapper.find('tbody tr:visible').length;
      $('#recordCount').html('<strong>' + visible + '</strong> record');
    });
  }

  /* ---- Main table loader ----
   * Tenta prima di usare window.GNL_DATA (offline/locale),
   * poi come fallback usa $.getJSON (online/server).
   */
  window.loadTable = function (jsonPath, wrapperId, columns, statsCallback) {
    var $wrapper = $(wrapperId);

    $wrapper.html(
      '<div class="loading-state">' +
      '<div class="loading-spinner"></div>' +
      '<span>Caricamento dati in corso…</span>' +
      '</div>'
    );

    /* Estrae la chiave dal path es: '../data/users.json' -> 'users' */
    function keyFromPath(path) {
      var parts = path.split('/');
      var filename = parts[parts.length - 1];
      return filename.replace('.json', '');
    }

    var key = keyFromPath(jsonPath);

    /* MODALITÀ OFFLINE: dati già incorporati in window.GNL_DATA */
    if (window.GNL_DATA && window.GNL_DATA[key]) {
      setTimeout(function () {
        renderTable($wrapper, window.GNL_DATA[key], columns, statsCallback);
      }, 80); /* breve delay per mostrare l'animazione di caricamento */
      return;
    }

    /* MODALITÀ ONLINE: caricamento via AJAX (GitHub Pages / server locale) */
    $.getJSON(jsonPath)
      .done(function (data) {
        renderTable($wrapper, data, columns, statsCallback);
      })
      .fail(function () {
        $wrapper.html(
          '<div class="error-state">' +
          '⚠ Impossibile caricare i dati. ' +
          'Verificare che il file JSON sia accessibile.' +
          '</div>'
        );
      });
  };

}(jQuery));
