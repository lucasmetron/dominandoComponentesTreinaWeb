import React, { useState } from 'react';
import { VideoService } from '../services/VideoService';

export default function FormVideo(props) {

    const [nome, setNome] = useState('');
    const [img, setImg] = useState('');
    const [video, setVideo] = useState('');

    async function salvaVideo() {
        let newPostVideo = {
            img: img,
            name: nome,
            url: video
        }

        await VideoService.input(newPostVideo)
    }


    return (
        <div>
            <label >
                Nome do video:
                <input type="text" name='name' onChange={(event) => { setNome(event.target.value) }} />
            </label>

            <label >
                URL Thumnail:
                <input type="text" name='img' onChange={(event) => { setImg(event.target.value) }} />
            </label>

            <label >
                URL do video:
                <input type="text" name='video' onChange={(event) => { setVideo(event.target.value) }} />
            </label>

            <button onClick={salvaVideo}>Salvar</button>

        </div>
    );
}