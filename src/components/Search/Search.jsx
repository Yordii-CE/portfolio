import './Search.css'
import Option from './Option'
function Search(){
    const options = [
        {
            name:"Project", 
            onClick:()=>alert("Hola mundo")
        },

        {
            isActive:true,
            name:"Samples", 
            onClick:()=>alert("Hola mundo")
        },
        {          
            name:"Others", 
            onClick:()=>alert("Hola mundo")
        }
    ]
    return <div className="search d-flex justify-content-end">
        <div className="options rounded d-flex justify-content-end">
            {options.map(({name, onClick,isActive}, i)=><Option key={i} name={name} onClick={onClick} isActive={isActive}></Option>)}
        </div>
    </div>
}
export default Search