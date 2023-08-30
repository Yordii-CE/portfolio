import './Skills.css'
import Skill from "../../components/Skill/Skill"
import typescript from './../../assets/technologies/typescript.png'
import react from './../../assets/technologies/react.png'
import vue from './../../assets/technologies/vue.png'
import bootstrap from './../../assets/technologies/bootstrap.png'
import sass from './../../assets/technologies/sass.png'
import tailwind from './../../assets/technologies/tailwind.png'
import next from './../../assets/technologies/next.png'
import node from './../../assets/technologies/node.png'
import mongodb from './../../assets/technologies/mongodb.png'

function Skills() {
  return  <div className="skills">
    <p className="title">Development Frontend</p>
    <div className="d-flex">
      <Skill image={typescript} name="Typescript"></Skill>
      <Skill image={react} name="React"></Skill>
      <Skill image={vue} name="Vue"></Skill>
      <Skill image={bootstrap} name="Bootstrap"></Skill>
      <Skill image={tailwind} name="Tailwind"></Skill>
      <Skill image={sass} name="Sass"></Skill>
      <Skill image={next} name="Next"></Skill>
    </div>
    <p className="title mt-5">Development Backend</p>
    <div className="d-flex">
      <Skill image={node} name="Node"></Skill>
      <Skill image={react} name="React"></Skill>
    </div>
    
    <p className="title mt-5">Development Sql</p>
    <div className="d-flex">
      <Skill image={mongodb} name="Mongodb"></Skill>
      <Skill image={react} name="React"></Skill>
    </div>
  </div>
}

export default Skills
