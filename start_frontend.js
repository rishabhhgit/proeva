const { spawn } = require('child_process');
const s = spawn('npx', ['vite', '--host'], {
  cwd: 'C:\\Users\\DELL\\Desktop\\devcart\\devCertAi_frontend-main\\devCertAi_frontend-main',
  detached: true,
  stdio: 'ignore',
  shell: true
});
s.unref();
console.log('Frontend PID:', s.pid);
