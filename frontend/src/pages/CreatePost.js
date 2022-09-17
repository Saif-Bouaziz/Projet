import React from 'react';
import "./CreatePost.css";
import SideMenu from "../component/SideMenu"
import { Container } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import bgImage from  "../video/background-img.mp4"





const CreatePost = () => {
    return (
  
            <div className='app'>  
        <video autoPlay loop muted>
<source src={bgImage} type="video/mp4" />
</video>  
           
        </div>
    );
};

export default CreatePost;