import { existsSync, lstatSync, readdirSync,  renameSync } from 'node:fs';
import * as path from 'node:path';

export function fromDir(startPath, filter, newNameFile, arr) {

    if (!existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    let files = readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]); 
        let stat = lstatSync(filename);

        if (stat.isDirectory()) {
            fromDir(filename, filter, newNameFile, arr); 
        } else

        if (filename.endsWith(filter)) {
            arr.push(filename);
        };

        if (filename.endsWith(newNameFile)) { 
          throw new Error('FS operation failed')
        }
    };
    return arr;
};



export const rename = async () => {
    const arrFilePath = fromDir('src', 'wrongFilename.txt', 'properFilename.md', []);

    if(arrFilePath.length === 0) {
      throw new Error('FS operation failed');
    };

    for (let i = 0; i < arrFilePath.length; i++) {
        const foundPathArr = arrFilePath[i].split('/');
        foundPathArr[foundPathArr.length - 1] = 'properFilename.md';  
        const newFileName = foundPathArr.join('/');  

        renameSync(arrFilePath[i], newFileName, (err) => {
            if (err) throw err;
                 console.log('Rename complete!');
        })
    }
};

await rename();