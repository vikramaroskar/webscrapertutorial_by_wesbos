import cron from 'node-cron';
import {runCronForCount} from './scraper';


cron.schedule('0,30 * * * *', ()=> {
  console.log('Running cron now');
  runCronForCount();


});
