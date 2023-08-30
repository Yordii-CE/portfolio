import './Skill.css'

function Skill({name, image}){
    return <div className="skill rounded d-flex flex-column align-items-center">
        <img src={image}/>
        <p>{name}</p>
    </div>
}


export default Skill