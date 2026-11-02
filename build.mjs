import {build} from 'esbuild';
import {mkdir,cp,readFile,writeFile,copyFile,readdir,rm} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {business,services,faqs} from './src/content.js';
await mkdir('dist/assets',{recursive:true});
for(const folder of ['dist/assets','docs/assets']){
  for(const name of await readdir(folder).catch(()=>[])){
    if(/^(app|style)\.[a-f0-9]{12}\.(js|css)$/.test(name))await rm(`${folder}/${name}`);
  }
}
await cp('public','dist',{recursive:true});
await mkdir('.sites-runtime',{recursive:true});
const ssrPath=path.resolve('.sites-runtime/app-ssr.mjs');
await build({entryPoints:['src/App.jsx'],outfile:ssrPath,bundle:true,platform:'node',packages:'external',format:'esm',jsx:'automatic'});
const {default:App}=await import(pathToFileURL(ssrPath).href);
const semanticHtml=renderToString(createElement(App));
const localBusiness={
  '@context':'https://schema.org','@type':'LocalBusiness',
  '@id':business.siteUrl+'#negozio',
  name:business.name,description:'Scodinzolindo di Marta Negri, toelettatura in Via Valentino Carrera 5 a Torino.',
  url:business.siteUrl,telephone:business.phoneHref.slice(4),
  image:business.siteUrl+'assets/hero.jpg',sameAs:[business.facebook],
  address:{'@type':'PostalAddress',streetAddress:business.street,postalCode:business.postalCode,addressLocality:'Torino',addressRegion:'TO',addressCountry:'IT'},
  geo:{'@type':'GeoCoordinates',latitude:business.latitude,longitude:business.longitude},hasMap:business.maps,
  areaServed:['Torino'],
  hasOfferCatalog:{'@type':'OfferCatalog',name:'Piccoli rituali di benessere',itemListElement:services.map(([name,description])=>({'@type':'Offer',itemOffered:{'@type':'Service',name,description}}))}
};
const faqPage={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))};
const structuredData=[localBusiness,faqPage].map(value=>'<script type="application/ld+json">'+JSON.stringify(value).replaceAll('<','\\u003c')+'</script>').join('\n');
let html=(await readFile('src/document.html','utf8')).replace('<!--app-html-->',semanticHtml).replace('<!--structured-data-->',structuredData);
await build({entryPoints:['src/main.jsx'],outfile:'dist/assets/app.js',bundle:true,minify:true,format:'esm',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
execFileSync(process.execPath,['node_modules/@tailwindcss/cli/dist/index.mjs','-i','src/style.css','-o','dist/assets/style.css','--minify'],{stdio:'inherit'});

// Content hashes prevent browsers from retaining an earlier demo after an update.
for(const name of ['app.js','style.css']){
  const digest=createHash('sha256').update(await readFile('dist/assets/'+name)).digest('hex').slice(0,12);
  const dot=name.lastIndexOf('.');
  const hashed=name.slice(0,dot)+'.'+digest+name.slice(dot);
  await copyFile('dist/assets/'+name,'dist/assets/'+hashed);
  html=html.replaceAll('./assets/'+name,'./assets/'+hashed);
}
await writeFile('dist/index.html',html);
await writeFile('index.html',html);
await mkdir('docs',{recursive:true});
await cp('dist','docs',{recursive:true});
await writeFile('docs/.nojekyll','');
