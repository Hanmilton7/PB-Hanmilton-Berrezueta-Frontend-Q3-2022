export default function getEmployees ({keyword, isVaccinated="", vaccinationType=""}) {
    
    const apiURL = `../data.json`;
    return fetch(apiURL, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(res => res.json())
      .then(response => {
        const {data = [] } = response
              //   .filter(employee => userType ? employee.type === userType : employee.type === 'employee')
        //  employees
        if(Array.isArray(data)) {


          const employees = data
        //   .filter(employee.type === userType)
          .filter(employee => keyword ? employee.type === keyword: employee.type != keyword)
          .filter(employee => isVaccinated != "" ? employee.user.is_vaccinated == isVaccinated :  employee.user.is_vaccinated != isVaccinated)
          .filter(employee => vaccinationType ? employee.user.vaccination_info.vaccination_type == vaccinationType :  employee.user.vaccination_info.vaccination_type != vaccinationType)
          .map(employee => {    
            const {type, user,image, id} = employee
            let {url} = image
            const {username, name, lastname, mail, is_vaccinated, identification, vaccination_info} = user
            // just for radom avatars
            // url = `https://avatars.dicebear.com/api/avataaars/${Math.random()*9999999}.svg`
            return {id, type, identification, username, name, lastname, mail, url, is_vaccinated, vaccination_info}
          })
          return employees
        }
      })
}