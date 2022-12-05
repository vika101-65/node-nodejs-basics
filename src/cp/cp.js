import { spawn } from 'node:child_process';
import { argv } from 'node:process';

const spawnChildProcess = async (args) => {
  const argForChild = argv.slice(2);
  const childProc = spawn("node", ["src/cp/files/script.js", ...argForChild]);

  childProc.stdout.on("data", (data) => {
    console.log(`Received chunk ${data}`);
  });

  childProc.on("error", (data) => {
    console.log(`Received chunk ${data}`);
  });

  process.stdin.pipe(childProc.stdin);
};

spawnChildProcess();