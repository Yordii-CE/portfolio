import './Option.css'

function Option({name, isActive, onClick}){
    return <div role='button' onClick={onClick} className={'option rounded px-4 py-1 ' + (isActive ? ' option-active':'')}>
        {name}
    </div>
}

export default Option