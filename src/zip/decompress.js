import { createWriteStream, createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'node:path';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const gunzip = createGunzip();
  const readableStrea = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
  const writeableStream = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'), 'utf8');

  pipeline(readableStrea, gunzip, writeableStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    }
  });
};

await decompress();