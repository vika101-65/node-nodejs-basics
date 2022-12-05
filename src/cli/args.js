import { argv } from 'node:process';

export const parseArgs = () => {
  const arr = [...argv];
  let result = '';

  for (let i = 2; i < arr.length; i++) {
    const newNameProp = arr[i];
    i % 2 == 0 ? result += ` ${newNameProp.slice(2)} is ` : result += `${newNameProp},` 
  };

  result = result.slice(1, result.length - 1);
  console.log(result);
};

parseArgs();