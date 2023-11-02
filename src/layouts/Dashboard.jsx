import { Transition } from "react-transition-group";
import { useState, useEffect , useContext} from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
 
import { Lucide } from "@/base-components";

import dom from "@left4code/tw-starter/dist/js/dom";
import SimpleBar from "simplebar";
 
import classnames from "classnames";
import TopBar from "@/views/components/top-bar/Main";
 
import Web3Sidebar from "@/views/components/web3-sidebar/Main.jsx";
 
import { observer } from "mobx-react";

import { Web3SidebarStore } from '@/stores/web3-side-bar.js';
import { Web3Store } from '@/stores/web3-store-mobx.js';
   
import { SideMenuStore } from '@/stores/side-menu-mobx.js';
   
import FrontendConfig from '@/config/frontend-config'
 
 import SideMenu from '@/views/components/side-menu/Main.jsx'
 
 

 import {
  Web3StoreContext, 
  SideMenuStoreContext,
  SideBarStoreContext
} from '@/stores/stores-context';
/*
https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwilo-3H4LP9AhVyElkFHVlID8EQFnoECAwQAQ&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F62336340%2Fcannot-update-a-component-while-rendering-a-different-component-warning&usg=AOvVaw0qVeI0E9QBjWxTnsx7CAZG
*/


function Main() {
  const navigate = useNavigate();
  const location = useLocation();

 
  const sideMenuStore = useContext(SideMenuStoreContext);
  
    
  return (


    <div className="flex">


      <Web3Sidebar 
          
           
           slot={<div> </div>} 
         
         /> 
  


     
      {/* BEGIN: Side Menu */}
    
      {sideMenuStore.active &&
          <SideMenu 
         
          />
        }
      {/* END: Side Menu */}





      {/* BEGIN: Content */}
      <div
          className="flex-grow"
      >
        <div className="flex-flex-col">
         
        <TopBar
 
        
        
        />
      </div>


        <div className="content">
          <Outlet 
           
          />
        </div>
      </div>
      {/* END: Content */}
    </div>
  );
}

export default observer(Main);
