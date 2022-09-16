import React, {Fragment, useState} from 'react';
// import UserCardActions from "./UserCardActions";
import UserCardImage from "./UserCardImage";
// import UserCardInfo from "./UserCardInfo";
import UserCard from "./UserCard";
import createEmployee from "../services/createEmployee";
import getEmployeesById from "../services/getEmployees";


export default function EditUser({params}) {
    
    const { id } = params;

    getEmployeesById({id})
            .then(employees => console.log("employee"))

    const [datos, setDatos] = useState({
        identification: '',
        name: '',
        lastname: '',
        email: '',
    })

    const handleInputchange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }


    const enviarDatos = (event) => {
        event.preventDefault();
        // createEmployee();
    }
    return (
        <Fragment>
            <div className="row d-flex justify-content-center">
                <UserCard
                    id="0"
                    username="sin username"
                    identification = { datos.identification != "" ? datos.identification : "sin identificación"}
                    name= {datos.name != "" ? datos.name.split(" ")[0] : "nombre"}
                    lastname= {datos.lastname != "" ? datos.lastname.split(" ")[0] : "apellido"}
                    mail={datos.email != "" ? datos.email : "sincorreo@correo.com"}
                    type="ninguno"
                    is_vaccinated ="false"
                    vaccination_info = "{}"
                    url= "https://avatars.dicebear.com/api/avataaars/7.svg"
                    />

<div className="col-12 col-xs-12 col-md-12 col-lg-9">
              <div className="card">
                  <form className="card-body py-5" onSubmit={enviarDatos}>
                      <div className="row mb-3 mx-3">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Cédula</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                              <input placeholder="Ingresar idenficación" type="text" className="form-control" name='identification' onChange={handleInputchange}></input>
                          </div>
                      </div>
                      <div className="row mb-3 mx-3">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Nombres</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                             <input placeholder="Ingresar nombres" type="text" className="form-control" name='name' onChange={handleInputchange}></input>
                          </div>
                      </div>
                      <div className="row mb-3 mx-3">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Apellidos</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input placeholder="Ingreser apellidos" type="text" className="form-control" name="lastname" onChange={handleInputchange}></input>
                          </div>
                      </div>
                      <div className="row mb-3 mx-3">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Correo</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input placeholder="Ingreser correo" type="text" className="form-control" name="email" onChange={handleInputchange}></input>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-3"></div>
                          <div className="col-sm-4 text-secondary">
                              <a className="btn btn-danger px-4" href="http://127.0.0.1:5500/Test4.html">Cancelar</a>
                          </div>
                          <div className="col-sm-4 text-secondary">
                            <button className="btn btn-success px-4" type='submit'>Guardar</button>
                              {/* <input type="button" className="btn btn-primary px-4" value="Guardar"/> */}
                          </div>
                      </div>
                  </form>
              </div>
        </div>
            </div>

           

        </Fragment>
    //     <div className="row d-flex justify-content-center">
    //     {/* <!-- Single Advisor--> */}
  

    
        )
}