 import {useContext} from 'react'
 import DashboardMenuConfig from "@/config/dashboard-config.js"
     
     import {Link} from 'react-router-dom'
     

import {getFilteredDashboardMenuConfig} from "@/utils/session-utils.js"

import { 
  Web3StoreContext 
   } from '@/stores/stores-context.js';

function Main({
    children, customClass, clicked,  ...otherProps
    }) {



     const web3Store =  useContext(   Web3StoreContext  ) ; 
   
     const hasVendorRole =  web3Store.hasVendorRole

     let roles = hasVendorRole ? ['vendor'] : []


     const filteredDashboardMenuConfig = getFilteredDashboardMenuConfig(
      DashboardMenuConfig?.dashboardMenu , roles
     )


    return (
        <div className="flex flex-col  text-center  "> 
                    

          <div className="p-2 m-y flex flex-col   text-center ">
                 
             {filteredDashboardMenuConfig?.map((item, index) => 
                (item?.title   ) ? (

                  <div className="flex flex-col py-2">
                    <Link key={index} to={item.pathname} className="py-4 text-lg font-bold text-gray-200 hover:text-blue-500"> 
                        {item.title} {/* Assuming item is an object with a title property */}
                    </Link>

                    {item.children && item.children.length >0 && 
                     <div className="flex flex-col">
                    
                         { item.children.map((child_item, index) =>  (

                             <div className="py-2">

                              <Link key={index} to={child_item.pathname} className="py-2 text-md font-bold text-gray-400 hover:text-blue-500"> 
                                    {child_item.title} {/* Assuming item is an object with a title property */}
                                </Link>

                            </div>

                          ) ) }
                    </div>}

                  </div>


                ) : null
            )}
          
          </div>
                      
        </div>
  
    );
  }
   
  
  export default Main;
  