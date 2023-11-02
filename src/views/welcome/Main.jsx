import React from 'react';

import Portfolio from '../partials/Portfolio'; 

import { observer } from "mobx-react";
 
function Home() {

 




  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
 
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Portfolio />

        {/*<FeatureCode />*/}

      <div>
 
        
 

      </div>


      </main>
 

     

    </div>
  );
}

export default observer(Home);