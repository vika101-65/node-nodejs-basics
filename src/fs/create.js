import { open, writeFile } from 'node:fs';

export const create = async () => {
  open('./src/fs/files/fresh.txt', 'wx', (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('FS operation failed'); 
        return;
      }
  
      throw err;
    }

    try {
      writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', (error) => {
        console.log(error)
      })
    } catch {
      console.log('err', err)
    }
  })
};
create();