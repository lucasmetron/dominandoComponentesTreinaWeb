import React from 'react';


export default function VideoList(props) {

    return (

        <ul className='video-list'>

            {props.videos.map(item => {

                return (
                    <li className='video'>
                        <img src={item.img} alt={item.name} />
                        <div>{item.name}</div>
                    </li>
                )
            })}

        </ul>

    );
}