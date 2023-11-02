
import { useState, useEffect, useContext } from "react";

import { useCallbackState, helper as $h } from "@/utils";
import { Link,  useNavigate } from "react-router-dom";
import { Lucide } from "@/base-components";
 

import classnames from "classnames";
import { observer } from "mobx-react";

 
import FrontendConfig from '@/config/frontend-config' 



function NavItem({  item , hasParent }) {

  
    const hasChildren = item.children && item.children.length > 0;
   // console.log({item, hasChildren})
   
   
   return (
      <li>
        {/* Render the icon and title */}
        <div className={
          `flex flex-row 
         py-1 px-2 bg-gray-200 
        border-gray-500 border-2 rounded 
        ${ hasChildren ? ` ` : `` } 
        ${ hasParent ? `  ` : `mt-2  font-bold py-2  ` }`
        
        }>
          {item.icon && 
            <div className=" pr-2 ">
            <Lucide icon={item.icon} />
          </div>
          }
          <span className="title">
            {item.pathname ? <Link to={item.pathname} className="hover:text-blue-500">{item.title}</Link> : item.title}
          </span>
        </div>
  
        {/* Recursively render children if they exist */}
        {hasChildren && (
          <div className="pl-2">
            {item.children.map((child, index) => (
              <NavItem key={`${item.title} - ${index}`} item={child} hasParent={true} />
            ))}
          </div>
        )}
      </li>
    );
  };
    
 


export default NavItem;