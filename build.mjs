import {build} from 'esbuild';
import {mkdir,cp,readFile,writeFile,copyFile,readdir,rm} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
await mkdir('dist/assets',{recursive:true});
for(const folder of ['dist/assets','docs/assets']){
  for(const name of await readdir(folder).catch(()=>[])){
    if(/^(app|style)\.[a-f0-9]{12}\.(js|css)$/.test(name))await rm(`${folder}/${name}`);
  }
}
await cp('public','dist',{recursive:true});await cp('index.html','dist/index.html');
await build({entryPoints:['src/main.jsx'],outfile:'dist/assets/app.js',bundle:true,minify:true,format:'esm',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
execFileSync(process.execPath,['node_modules/@tailwindcss/cli/dist/index.mjs','-i','src/style.css','-o','dist/assets/style.css','--minify'],{stdio:'inherit'});

// Content hashes prevent browsers from retaining an earlier demo after an update.
let html=await readFile('dist/index.html','utf8');
for(const name of ['app.js','style.css']){
  const digest=createHash('sha256').update(await readFile('dist/assets/'+name)).digest('hex').slice(0,12);
  const dot=name.lastIndexOf('.');
  const hashed=name.slice(0,dot)+'.'+digest+name.slice(dot);
  await copyFile('dist/assets/'+name,'dist/assets/'+hashed);
  html=html.replaceAll('./assets/'+name,'./assets/'+hashed);
}
await writeFile('dist/index.html',html);
await mkdir('docs',{recursive:true});
await cp('dist','docs',{recursive:true});
await writeFile('docs/.nojekyll','');
