@echo off
REM Double-click this file to open the portfolio site in your browser.
REM It starts a small local web server, then opens http://localhost:8899

cd /d "%~dp0"

echo.
echo   Portfolio site
echo   --------------
echo   Starting the local server...

start "portfolio-server" /min py -m http.server 8899

REM give the server a moment to come up before opening the browser
timeout /t 2 /nobreak >nul

start "" "http://localhost:8899"

echo.
echo   Open at:  http://localhost:8899
echo.
echo   A small minimised window called "portfolio-server" is now running.
echo   Close that window when you are finished to stop the server.
echo.
echo   (If it says the port is in use, the server was already running -
echo    the site will still open fine.)
echo.
pause
