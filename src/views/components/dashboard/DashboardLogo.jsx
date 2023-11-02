
import { useState, useEffect, useContext } from "react";

import { useCallbackState, helper as $h } from "@/utils";
import { Link,  useNavigate } from "react-router-dom";
import { Lucide } from "@/base-components";
 

import classnames from "classnames";
import { observer } from "mobx-react";

 
import FrontendConfig from '@/config/frontend-config' 

function Main({   }) {



 return (
        <>

<Link to="/" className="intro-x flex items-center">
<img
  alt="Header"
  className="side-nav__header__logo"
  src={FrontendConfig.favicon}
  width="40"
  height="40"
/>
<span className="side-nav__header__text text-white pt-0.5 text-lg ml-2.5">
 {FrontendConfig.title}
</span>
</Link>

</> ) 

}


export default Main;