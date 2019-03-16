import express from 'express';
import {getHTML, getTwitterCount, getInstagramCount} from './lib/scraper.js';
import db from './lib/db';
import './lib/cron.js';



//create new express app
const app = new express();

console.log(db);


app.get('/scrape', async (request, response, next) =>  {
  console.log('scraping !!');
  const twitterCount = await getTwitterCount();
  const instaCount = await getInstagramCount();
  console.log(twitterCount, instaCount);
  /* the scrape url will now not save to the db, it will be just be to give live count in GET call
  db
    .get('twitter').push({
      date: Date.now(),
      count: twitterCount
    })
    .write();
  db
    .get('instagram').push({
      date: Date.now(),
      count: instaCount
    })
    .write();
  */
  response.json({twitterCount, instaCount});
  

});


app.listen(3333, () => {
  console.log('Example App Started');
  console.log('Example App Running for webscraping on port 3333');
});


/*
async function go() {
  // console.log(await getHTML('https://twitter.com/vikramaroskar'));
  //const html = await getHTML('https://twitter.com/vikramaroskar');
  //const twCount = await getTwitterFollowers(html);
  //console.log( `You have ${twCount} Twitter followers`);
  

  //const htmlinsta = await getHTML('https://www.instagram.com/wesbos/');
  //const instaFollowers = await getInstagramFollowers(htmlinsta);
  //console.log(instaFollowers);

  //SECOND METHOD 
  //const tPromise = getHTML('https://twitter.com/vikramaroskar'); 
  //const iPromise = getHTML('https://www.instagram.com/wesbos/');
  //const [iHtml, tHtml] = await Promise.all([iPromise, tPromise]);
  //const instaCount = await getInstagramFollowers(iHtml);
  //const twCount = await getTwitterFollowers(tHtml);
  //console.log( `You have ${twCount} Twitter followers`);
  //console.log( `Wesbos has ${instaCount} Instagram followers`);

  //THIRD METHOD
  //const twitterCount = await getTwitterCount();
  //const instaCount = await getInstagramCount();
  //console.log(twitterCount, instaCount);
  
  

}

go();
*/
