import React from 'react';
import '../App.css';
import { Button } from '@mui/material';
import './video.css';

function Video() {
  return (
    <div>
    
    <div className='hero-container'>
    <h1>Project Management System</h1>
      <video src='/video.mp4' autoPlay loop muted />
     
      
      <div className='hero-btns'>
        
       
      </div>
    </div>
    </div>
  );
}

export default Video;