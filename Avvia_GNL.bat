@echo off
:: ============================================================
:: GlobalNexus Logistics S.A. — Launcher locale
:: Apre il sito direttamente nel browser predefinito
:: Nessuna installazione richiesta
:: ============================================================

set "SCRIPT_DIR=%~dp0"
set "LOGIN_PAGE=%SCRIPT_DIR%pages\login.html"

echo.
echo  ============================================
echo    GlobalNexus Logistics S.A.
echo    Avvio portale interno...
echo  ============================================
echo.
echo  Credenziali: admin / GNL2024!
echo.

start "" "%LOGIN_PAGE%"

timeout /t 2 /nobreak >nul
exit
