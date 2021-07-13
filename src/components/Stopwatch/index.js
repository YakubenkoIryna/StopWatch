import React from 'react';
import Button from '../Button';
import DisplayComponent from '../Display';

const Stopwatch = ({ label, time, buttonHandlers }) => {

    return (
        <div className='wrapper'>
            <DisplayComponent time={time}/>
            <div className='btn-wrapper'>
                <Button onClick={buttonHandlers.handleStart} label={label} />
                <Button onClick={buttonHandlers.handleReset} label='Reset' />
                <Button id='wait' onClick={buttonHandlers.handleWait} label='Wait' />
            </div>

        </div>
    );
};

export default Stopwatch;