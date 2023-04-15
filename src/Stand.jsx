import './Stand.css'

export default function({onClick}) {
    const speed = ['paused', 'low', 'medium', 'high']
    
    const handleSwitch = e => {
        return onClick(speed[e.target.value])
    }

    return (
        <div className="stand">
            <div className="stem">
                <button className="switch" onClick={handleSwitch} value={0} >o</button>
                <button className="switch" onClick={handleSwitch} value={1} >1</button>
                <button className="switch" onClick={handleSwitch} value={2} >2</button>
                <button className="switch" onClick={handleSwitch} value={3} >3</button>
            </div>
            <div className="base"></div>
        </div>
    )
}