import './Search.css'
import Option from './Option'
import { useContext } from 'react'
import { JobContext } from '../../Context'
function Search(){
    const {option, setOption} = useContext(JobContext)
    const options = [
        {
            isActive:option == 'Projects',
            name:"Projects", 
            onClick:()=>setOption('Projects')
        },

        {
            isActive:option == 'Samples',
            name:"Samples", 
            onClick:()=>setOption('Samples')
        },
        {          
            isActive:option == 'Others',
            name:"Others", 
            onClick:()=>setOption('Others')
        }
    ]
    return <div className="search d-flex justify-content-end">
        <div className="options rounded d-flex justify-content-end">
            {options.map(({name, onClick,isActive}, i)=><Option key={i} name={name} onClick={onClick} isActive={isActive}></Option>)}
        </div>
    </div>
}
export default Search