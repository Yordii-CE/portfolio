import { useContext} from 'react';
import './Works.css'
import Work from "../../components/Work/Work";
import Search from "../../components/Search/Search";
import { JobContext } from '../../Context';


function Works(){        
    const jobContext = useContext(JobContext)       
    
    return <div className="works rounded">  
        <Search />
        {jobContext.jobData.map((d, i)=>
            <Work 
                key={i}
                name={d.name}
                content={d.content}
                image={d.image}
                technologiesName={d.technologiesName}
                urlToSite={d.urlToSite}
                >            
            </Work>  
        )}               
    </div>
}

export default Works;