import { Transition } from "react-transition-group";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCallbackState, helper as $h } from "@/utils";
  
import { Lucide } from "@/base-components";
import dom from "@left4code/tw-starter/dist/js/dom";
import SimpleBar from "simplebar";
import logoUrl from "@/assets/images/degenbro.png";
import classnames from "classnames";
import Web3Sidebar from "@/views/components/web3-sidebar/Main.jsx";
 

import Header from '../views/partials/Header';
import Footer from '../views/partials/Footer';
import HeaderSidebar from '@/views/components/header-sidebar/Main.jsx'
 

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  
 
 

  return (
    <div className="bg-white">
         {/*  Site header */}
         <Header
           mode="docs"
          
         />

        <div   className="xl:hidden" >
          <HeaderSidebar
            mode="docs"
        
         />
          </div>

         <Web3Sidebar 
         
           slot={<div> </div>} 
         
         /> 
  
            
          <Outlet 
           
            />

 

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Main;
