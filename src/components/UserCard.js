import React from "react";
import './UserCard.css' 
import UserCardActions from "./UserCardActions";
import UserCardImage from "./UserCardImage";
import UserCardInfo from "./UserCardInfo";

export default function UserCard({id, username, identification,  name, lastname, mail, type, is_vaccinated, vaccination_info, url}) {
    
    return (
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s">
                <UserCardImage username={username} url={url}></UserCardImage>
                <div className="single_advisor_details_info">
                    <UserCardInfo id={id}
                        username={username}
                        identification= {identification}
                        name={name}
                        lastname={lastname}
                        mail={mail}
                        type={type}
                        is_vaccinated = {is_vaccinated}
                        vaccination_info = {vaccination_info}
                        url={url}/>
                    <UserCardActions id={id}/>
                </div>
            </div>
          </div>
        )
}