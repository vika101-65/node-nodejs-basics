import { createWriteStream, createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'node:path';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);


  const gzip = createGzip();
  const readableStrea = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'), 'utf8');
  const writeableStream = createWriteStream(path.join(__dirname, 'files', 'archive.gz'), 'utf8');

  pipeline(readableStrea, gzip, writeableStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    }
  });

};

await compress();