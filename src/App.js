import './App.css';
import { useState } from 'react';
import ListOfUserCards from './components/ListOfUserCards';
// import MenuFilters from './components/MenuFilters';
import {Link, Route} from 'wouter';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser'


function App() {
  
  const [keyword, setKeyword] = useState('employee')

  return (  
    <section className="align-items-center background-radial-gradient">
      <div className='container mt-4'>
        <div className='row'>
          <div className="row justify-content-center">
              <Link className="btn btn-primary btn-block mb-2" to="/employee/new">Registrar Nuevo Empleado</Link>
          </div>

          <div className="row justify-content-center">
            <Link className="btn btn-primary btn-block m-5 col-3" to="/inventory/admin">Admin</Link>
            <Link className="btn btn-primary btn-block m-5 col-3" to="/inventory/employee">Empleados</Link>
          </div>

          <Route 
            component={ListOfUserCards}
            path="/inventory/:keyword"
          />

          <Route 
            component={ListOfUserCards}
            path="/employee/:isVaccinated"
          />

          <Route 
            component={ListOfUserCards}
            path="/vaccinate/:vaccinationType"
          />

          <Route 
            component={NewUser}
            path="/employee/new"
          />

          <Route 
            component={EditUser}
            path="/employee/edit/:id"
          />



        </div>
      </div>
    </section>
  );
}

export default App;



