import { Transform } from 'node:stream';

export const transform = async () => {
  const reversesText = new Transform({
    transform(chunk, utf8, callback) { 
      const data = chunk.toString().split('').reverse().join('');
      callback(null, data);
    },
  });
  process.stdin.pipe(reversesText).pipe(process.stdout);
 
}
await transform();