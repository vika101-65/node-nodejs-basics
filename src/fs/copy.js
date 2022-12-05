import { mkdir, copyFile, readdir } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

export const copy = async () => {
  const folderPath = './src/fs/';

  readdir(folderPath, function (err, files) {
    if (err) {
      console.error('FS operation failed');
      return;
    }

    const isFiles = files.find(elem => elem === 'files');
    const isFiles_copy = files.find(elem => elem === 'files_copy'); 

    if (isFiles_copy) {
      console.error('FS operation failed');
    };

    if (isFiles && !isFiles_copy) {
    
      mkdir(path.join(__dirname, 'files_copy'), (err) => {
        if (err) {
          console.error('FS operation failed');
          return;
        }
      });

      readdir(path.join(__dirname, 'files'), function (err, filesInFiles) {
        if (err) {
          console.error('FS operation failed');
          return;
        } 
        
        filesInFiles.forEach(elem => {
          copyFile((path.join(__dirname, 'files', elem)), (path.join(__dirname, 'files_copy', elem)), (err) => {
            if (err) {
              console.error(err);
              return;
            }
          })
        })
      })
    };
  });
}

copy();