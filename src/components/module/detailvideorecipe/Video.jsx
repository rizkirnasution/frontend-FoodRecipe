import React from 'react'
import VideoResources from "../../../assets/detailVideos/video.svg"
import './detailvideorecipe.css'

function Video (){
    return(
        <>
        <div className='container mt-5'>
            <img src={VideoResources} alt="Video"/>
        </div>
        </>
    );
}

export default Video