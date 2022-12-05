import { env } from 'node:process';
console.log(env)
export const parseEnv = () => {
  const variablesEnv = Object.entries(env);
  const reg = /^RSS_/;
  let founVariables = [];

  for(let i = 0; i < variablesEnv.length; i++) {
    const [key, value] = variablesEnv[i];

    if (key.match(reg)) { 
     founVariables.push(`${key}=${value}`);
    };
  }
  const strFoundVariables = founVariables.join('; ');
  console.log(strFoundVariables);
};

parseEnv();