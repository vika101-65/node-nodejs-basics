import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import os from 'os';


const performCalculations = async () => {
  const systemCpuCores = os.cpus().length;
  const resArr = [];

  for (let i = 0; i < systemCpuCores; i++) {

    const workerProm = new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', { workerData: i });
      worker.postMessage(i);

      worker.on('message', data => {
        resolve({
          status: 'resolved',
          data
        });
        worker.terminate()
      });

      worker.on('error', () => {
        reject({
          status: 'error',
          data:null
        });
        worker.terminate()
      });
    });
    resArr.push(workerProm);
  };
  Promise.all(resArr).then(res => console.log(res));
};


await performCalculations();