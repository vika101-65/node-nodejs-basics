import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  let writeableStream = createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), 'utf8');
  
  process.stdin.on('data', (chunk) => {
    writeableStream.write(chunk);
  })
};
await write();