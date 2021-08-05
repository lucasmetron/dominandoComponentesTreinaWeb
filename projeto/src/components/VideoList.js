import React from 'react';


export default function VideoList(props) {
    const videos = props.videos || [];

    return (

        <ul className='video-list'>

            {videos.map(item => {

                return (
                    <li className='video' key={item.id} >
                        <img src={item.img} alt={item.name} />
                        <div>{item.name}</div>
                    </li>
                )
            })}

        </ul>

    );
}