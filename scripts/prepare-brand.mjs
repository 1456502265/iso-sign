import sharp from 'sharp';
await sharp('public/yunshan-logo-original.png').extract({left:150,top:200,width:840,height:740}).resize(320).webp({quality:92}).toFile('src/assets/brand/yunshan-logo.webp');
await sharp('public/yunshan-logo-original.png').extract({left:150,top:200,width:840,height:740}).resize(650,500,{fit:'contain',background:'#ffffff'}).extend({top:65,bottom:65,left:275,right:275,background:'#ffffff'}).webp({quality:88}).toFile('public/social.webp');
console.log('Brand assets prepared');