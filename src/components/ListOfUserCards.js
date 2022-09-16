import React , {useEffect, useState} from "react";
import UserCard from "./UserCard";
import getEmployees from "../services/getEmployees";
// import {useParams} from "react-router-dom";

export default function ListOfUserCards ({params}) {

    const [ employees, setEmployees ] = useState([])
    const { keyword, isVaccinated , vaccinationType } = params;

    useEffect(function() {
        getEmployees({keyword, isVaccinated, vaccinationType})
            .then(employees => setEmployees(employees))
    }, [keyword])

    return employees.map(({id, username, identification, name, lastname, mail, type, is_vaccinated, vaccination_info, url}) => 
        <UserCard
          key={id}
          id={id}
          username={username}
          identification = {identification}
          name={name}
          lastname={lastname}
          mail={mail}
          type={type}
          is_vaccinated = {is_vaccinated}
          vaccination_info = {vaccination_info}
          url={url}
        />)
}