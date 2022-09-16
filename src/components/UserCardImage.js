import React from "react";
import './UserCardImage.css' 

export default function UserCardImage({username, url}) {
    
    return (
        <div className="advisor_thumb">
            <img alt={username} src={url}/>
        </div>  
    )
}