import './Work.css'
function Work({image, name, content, technologiesName, urlToSite}){
    return <div className="work rounded d-flex justify-content-between">
        <div className='content'>
            <p>
                <span className='name'>{name}</span>
                <span className='description'> {content}</span>                       
            </p>
            <div className="technologies">
                {technologiesName.map((tech,i)=><span key={i}>{tech}</span>)}
            </div>
            <a className='url d-block' href={urlToSite}>View site</a>            
        </div>
        <img className='image' src={image}/>
    </div>
}


export default Work;