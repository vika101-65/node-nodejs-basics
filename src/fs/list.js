import { lstatSync, readdir } from "node:fs";
import { basename } from 'node:path';
import * as path from 'node:path';

export const list = async () => {
  findDir('src', 'files', []);

  async function findDir (startPath, nameDir, arr) {
    readdir(startPath, (err, files) => {
      if (err) {
        console.error(err)
      } else {
        for (let i = 0; i < files.length; i++) {
          let filePath = path.join(startPath, files[i]); 
          let stat = lstatSync(filePath); 
          
          if (stat.isDirectory()) {

            if (basename(filePath) === nameDir) {
              readdir(filePath, (err, filesInFounDir) => {
                if (err) {
                  console.error(err);
                } else {
                  // arr.push(filesInFounDir);
                  console.log(filesInFounDir)
                }
              })
            }
            findDir(filePath, nameDir, arr);
          } 
        }
      }//console.log('arr', arr);
    }); 
    
  } 
 
};

await list();