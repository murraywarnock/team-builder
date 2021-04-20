// import { useState, useEffect } from 'react';
import { useState } from 'react';
import Form from './Form'
import Member from './Member'

// const starterTeam = [{
//   name: "Captain Wonderful",
//   email: "cap@wonder.com",
//   role: "cowboy",
// }];

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: ''
}

function App() {
  // const [team, setTeam] = useState(starterTeam);
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
   setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    // new member object with values from form
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    // form validation
    if (!newMember.name || !newMember.email || !newMember.role) return
    // add member to team array
    setTeam([...team, newMember])
    // clear the form
    setFormValues(initialFormValues)
    
  }

  // useEffect(() => {
  //   setTeam([{
  //     name: "Captain Wonderful",
  //     email: "cap@wonder.com",
  //     role: "cowboy",
  // }]);
  // }, [])

  return (
    <div className="container">
      <h1>Team Builder</h1>
      <Form
        // props for Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        team.map(member => {
          return (
            <Member key={member.email} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
