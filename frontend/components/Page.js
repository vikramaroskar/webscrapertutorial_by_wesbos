import {useEffect, useState} from 'react';
import React from 'react';
import {ScrapeProvider} from './ScrapeContext';


//custom hook
function useScrapes() {
  const [scrapes, setScrapes] = useState({
    twitter: [],
    instagram: []

  });
  useEffect(function () {
  (async () => {
   console.log('Mounting or updating'); 
   const resp = await fetch ('http://127.0.0.1:3333/data');
   const data1 = await resp.json();
   console.log(data1);
   setScrapes(data1);
  })();
  }, []);
  return scrapes;
}


export default function Page({children}) {
  const scrapes = useScrapes();
  
  return (
    <ScrapeProvider value={{
      scrapes
    }}>
    <div className='page'>
      {children}
    </div>
    </ScrapeProvider>
  );
}
