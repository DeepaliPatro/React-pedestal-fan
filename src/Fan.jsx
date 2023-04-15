import { useState } from 'react';
import Head from './Head';
import Stand from './Stand';
import './Fan.css'

export default function Fan() {
    const [fanSpeed, setFanSpeed] = useState('paused')

    const handleClick = (speed) => {
        setFanSpeed(speed)
    }
    
    return (
        <div className='fan'>
            <Head spin={fanSpeed}/>
            <Stand onClick={handleClick}/>
        </div>
    )
}