@echo off
setlocal
cd /d "%~dp0"
set "taskNode=node"
where node >nul 2>nul
if errorlevel 1 (
  if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
    set "taskNode=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
  ) else (
    echo Please install Node.js 22.13 or newer.
    pause
    exit /b 1
  )
)
echo Open http://127.0.0.1:4173/ in your browser.
echo Press Ctrl+C to stop the preview.
"%taskNode%" scripts\serve.mjs
if errorlevel 1 pause
