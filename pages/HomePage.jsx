/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ShotingStars from "../components/Bubbles";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import { useEffect } from "react";
function HomePage() {
       useEffect(function () { 
              document.title = "Summary++";
              () => document.title = "Summary++";
       }, []);
       return (
              <>
                    
                     <Navbar />
                     <Cover/>
              </>
       );
}

export default HomePage
