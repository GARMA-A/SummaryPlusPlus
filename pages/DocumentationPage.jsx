
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import Summary from "../components/Summary";
import Error from '../components/Error';
import styles from '../components/DocumentationPage.module.css'

function DocumentationPage() {
       const [allsummary, setAllSummary] = useState([]);
       const [isLoading, setIsLoading] = useState(true);
       const [summaryItem, setSummaryItem] = useState({});
       const [error, setError] = useState(false);
          
       useEffect(function () { 
             
              document.title = "Documentation";
              const getData = async function () {
                     try {
                            const res = await fetch('https://raw.githubusercontent.com/GARMA-A/QuizData/main/documentation.json');
                            if (!res.ok) throw new Error();
                            const data = await res.json();
                            if (!data) throw new Error();
                            setAllSummary(() => data);
                     }
                     catch (err)
                     {
                            setError(true);
                            console.log(err.message);
                     }
                     finally{setIsLoading(false);}
              };
              
              const delay = setTimeout(()=>getData(), 500);
               
              return () => {
                     clearTimeout(delay);
                     
              };
             
       }, [setAllSummary, setIsLoading]);
       
        

     
       return (<div className={styles.all}>
              
              <Navbar />
              {isLoading&&!error&&<Loading/>}
              {error&&!isLoading&&<Error/>}
            {!isLoading&&!error &&<>
             
              <div style={{ display: "flex", justifyContent: "space-around" }}>
              
                     <Sidebar allsummary={allsummary} setSummaryItem={ setSummaryItem} />
                     <Summary summaryItem={ summaryItem} />
              
              </div></> } 
              
       </div>);
}

export default DocumentationPage;
