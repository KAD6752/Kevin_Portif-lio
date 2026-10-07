import fs from 'node:fs';
import {campaigns} from './dist/content.js';
const origin='https://aura-visage-spa-preview.kdias6752.chatgpt.site';
const base=fs.readFileSync('dist/index.html','utf8');
for(const [slug,c] of Object.entries(campaigns)){const dir=`dist/campanhas/${slug}`;fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(`${dir}/index.html`,base.replace(/<title>.*?<\/title>/,`<title>${c.name} | Aura Visage Spa</title>`).replace(/(<meta name="description" content=")[^"]*/,`$1${c.text}`).replace(/(<meta property="og:title" content=")[^"]*/,`$1${c.name} | Aura Visage Spa`).replace(/(<meta property="og:description" content=")[^"]*/,`$1${c.text}`));}
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/',...Object.keys(campaigns).map(s=>`/campanhas/${s}/`)].map(p=>`<url><loc>${origin}${p}</loc></url>`).join('')}</urlset>`);
fs.writeFileSync('dist/robots.txt','User-agent: *\nDisallow: /\n');
console.log('Homepage e 8 rotas de campanha preparadas.');

