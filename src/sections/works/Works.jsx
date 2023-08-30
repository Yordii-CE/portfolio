import './Works.css'
import Work from "../../components/Work/Work";
import Search from "../../components/Search/Search";

import apalworkflow from './../../assets/work_screenshots/apalworkflow.png'
function Works(){
 
    return <div className="works rounded">  
    <Search />
    <Work 
        name={"Apalworkflow"} 
        content={"Lorem ipsum, dolor sit amet consectesa vtur rerum, pariatur aut consectetur i"}
        image={apalworkflow}
        technologiesName={["React", "Javascript"]}
        urlToSite={"https:://youtube.com"}
        >            
    </Work>  
    <Work 
        name={"Apalworkflow"} 
        content={"Lorem ipsum, dolor sit amet consectesa vtur rerum, pariatur aut consectetur i"}
        image={apalworkflow}
        technologiesName={["React", "Javascript"]}
        urlToSite={"https:://youtube.com"}
        >            
    </Work>  
    <Work 
        name={"Apalworkflow"} 
        content={"Lorem ipsum, dolor sit amet consectesa vtur rerum, pariatur aut consectetur i"}
        image={apalworkflow}
        technologiesName={["React", "Javascript"]}
        urlToSite={"https:://youtube.com"}
        >            
    </Work>  
    </div>
}

export default Works;