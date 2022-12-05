import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  let readableStream = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8');
  readableStream.pipe(process.stdout);
  process.stdout.on('data', (chunk) => {
    console.log(chunk)
  });
};


await read();