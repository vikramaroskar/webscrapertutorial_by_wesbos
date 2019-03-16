import cron from 'node-cron';
import {runCronForCount} from './scraper';


cron.schedule('* * * * *', ()=> {
  console.log('Running cron now');
  runCronForCount();


});
