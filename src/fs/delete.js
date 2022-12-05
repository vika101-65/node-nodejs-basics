import { unlink } from "node:fs";
import { fromDir } from "./rename.js";

export const remove = async () => {
  const arrFoundFile = fromDir('src', 'fileToRemove.txt','ppp', []);

  if (arrFoundFile.length) {
    arrFoundFile.forEach(element => {
      unlink(element, (err) => {
        console.error(err)
      })
    });
  } else throw new Error('FS operation failed');
};
await remove();