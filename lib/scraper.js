import axios from 'axios';
import cheerio from 'cheerio';
// const axios = require('axios');

async function getHTML(url) {
  const {data:html}= await axios.get(url);
  //console.log(data);
  return html;

}

async function getTwitterFollowers(html) {
  //load cheerio
  const $ = cheerio.load(html);
  //console.log($);
  //const span = $.find('.ProfileNav-value');
  //const span = $('.ProfileNav-value');
  //console.log(span);
  const span = $('[data-nav="followers"]');
  //console.log(span);
  //console.log('-----------show html---------------');
  //console.log(span.html());
  //console.log('-----------cascade like css---------------');
  const span1 = $('[data-nav="followers"] .ProfileNav-value');
  //console.log(span1.html());
  //console.log('--------------------------');
  const span2 = $('[data-nav="followers"] .ProfileNav-value');
  //console.log(span2.data());
  //console.log('----------- use count of data---------------');
  const span3 = $('[data-nav="followers"] .ProfileNav-value');
  //console.log(span3.data('count'));

  return span3.data('count');
}


async function getInstagramFollowers(html) { 

  const $ = cheerio.load(html);
  //console.log($('[type="application/ld+json"]').html());
  //console.log($('script'));
  //console.log($('script[type="application/ld+json"]'));
  //console.log($('script[type="application/ld+json"]').html());
  const dataInString = $('script[type="application/ld+json"]').html();
  //console.log(JSON.parse(dataInString));
  const pageObject = JSON.parse(dataInString);
  //console.log(pageObject.mainEntityofPage.interactionStatistic.userInteractionCount);
  const user = pageObject.mainEntityofPage.interactionStatistic.userInteractionCount;
  return user;


  //console.log(data);
  
}

export {getHTML, getTwitterFollowers, getInstagramFollowers};
