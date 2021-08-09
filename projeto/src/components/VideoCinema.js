import React from 'react';

export default function VideoCinema(props) {
    const style = {
        display: props.isActive ? 'inline-block' : 'none'
    }

    return (
        <div className='video-cinema' style={style}>
            {props.children}
        </div>
    );
}