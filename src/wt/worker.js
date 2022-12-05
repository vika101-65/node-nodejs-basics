import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';

parentPort.on('message', (data => {
  const result = 10 + data;
  parentPort.postMessage(result);
}))

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    
    parentPort.on('message', (data) => {
      const result = nthFibonacci(data);
      parentPort.postMessage(result);
    })
};

sendResult();