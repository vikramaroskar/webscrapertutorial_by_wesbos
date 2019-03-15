import {getHTML, getTwitterFollowers, getInstagramFollowers} from './lib/scraper.js';

async function go() {
  // console.log(await getHTML('https://twitter.com/vikramaroskar'));
  //const html = await getHTML('https://twitter.com/vikramaroskar');
  //const twCount = await getTwitterFollowers(html);
  //console.log( `You have ${twCount} Twitter followers`);
  

  //const htmlinsta = await getHTML('https://www.instagram.com/wesbos/');
  //const instaFollowers = await getInstagramFollowers(htmlinsta);
  //console.log(instaFollowers);
  const tPromise = getHTML('https://twitter.com/vikramaroskar');
  const iPromise = getHTML('https://www.instagram.com/wesbos/');

  const [iHtml, tHtml] = await Promise.all([iPromise, tPromise]);
  const instaCount = await getInstagramFollowers(iHtml);
  const twCount = await getTwitterFollowers(tHtml);
  console.log( `You have ${twCount} Twitter followers`);
  console.log( `Wesbos has ${instaCount} Instagram followers`);
  
  

}

go();

