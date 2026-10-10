@echo off
setlocal
pushd "%~dp0"
if errorlevel 1 exit /b 1
call npm run lint -- %*
set "lintExitCode=%errorlevel%"
popd
exit /b %lintExitCode%
