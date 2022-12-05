import { existsSync, lstat, readdir, readFile } from 'node:fs';
import * as path from 'node:path';

export const read = async () => {

  const findFile = (startPath, filter) => {
    if (!existsSync(startPath)) {
      console.log("no dir ", startPath);
      return;
    }

    readdir(startPath, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }

      for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);

        lstat(filename, (err, stat) => {
          if (err) {
            console.error(err);
            return;
          }

          if (stat.isDirectory()) {
            findFile(filename, filter);
          }

          if (filename.endsWith(filter)) {
            // console.log('-- found: ', filename);
            readFile(filename, 'utf8', (err, data) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log(data);
            })
          };
        });
      }
    })
  };
  findFile('src', 'fileToRead.txt')

};

await read();