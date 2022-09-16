export default function getEmployeesById ({id}) {
    

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

        if(Array.isArray(data)) {


          const employees = data
        //   .filter(employee.type === userType)
          .filter(employee => employee.id === id)
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