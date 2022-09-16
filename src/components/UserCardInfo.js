import React from "react";
import './UserCardInfo.css';
import {Link, Route} from 'wouter'

export default function UserCardInfo({id, identification, username, name, lastname, mail, type, is_vaccinated, vaccination_info, url}) {
    
    return (
        <div className="mb-4">
            <h6>{identification}</h6>
            <h6>{name.split(' ')[0]} {lastname.split(' ')[0]}</h6>
            <h6>{mail}</h6>
            <Link className={`btn m-1 ${is_vaccinated === "true" ? "btn-success" : "btn-danger"}`} to={`/employee/${is_vaccinated}`} role="button">{is_vaccinated === "true" ? "Vacunado" : "No Vacunado"}</Link>
            <Link className={`btn m-1 btn-${vaccination_info.vaccination_type} ${is_vaccinated ==="true" ? "" : "d-none"}` } to={`/vaccinate/${vaccination_info.vaccination_type}`} role="button">{vaccination_info.vaccination_type}</Link>
            <p><strong>Fecha última vacuna:</strong> 09/07/2022</p>
        </div> 
    )
}


