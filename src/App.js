import { useState, useEffect } from 'react';
import Form from './Form'
import Member from './Member'

const starterTeam = [{
  name: "Captain Wonderful",
  email: "cap@wonder.com",
  role: "cowboy",
}];

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {
  const [team, setTeam] = useState(starterTeam);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
   setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    // new member object with values from form
    console.log("submitForm called")
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    // form validation
    console.log("made newMember", newMember);
    if (!newMember.name || !newMember.email || !newMember.role) return
    // add member to team array
    setTeam([...team, newMember])
    console.log("setTeam executed:", team);
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
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
