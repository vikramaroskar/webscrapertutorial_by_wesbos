import  {useContext} from 'react';
import  {ScrapeContext} from './ScrapeContext';
import Table from './Table';
import Chart from './Chart';

export default function Data() {
  const {scrapes} = useContext(ScrapeContext);
  console.log(scrapes);
  return (
  <div>
   <h2> Twitter: </h2>
   <Table scrapes= {scrapes.twitter} />
   <Chart scrapes= {scrapes.twitter} />

   <h2> Instagram: </h2>
   <Table scrapes= {scrapes.instagram} />
   <Chart scrapes= {scrapes.instagram} />
  </div>
  );
}
