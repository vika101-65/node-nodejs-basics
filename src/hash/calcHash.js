const { createHash } = await import('node:crypto');
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'node:path'; 

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename); 
  const data = readFileSync(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
  const hash = createHash('sha256').update(data).digest('hex');
  console.log('hex', hash);
  return hash;
};

await calculateHash();