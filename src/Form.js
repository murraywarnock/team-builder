import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
      console.log("submit called")
    evt.preventDefault();
    submit();
    console.log("submit was called");
    console.log(submit);

  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
              <input 
                type="text"
                value={values.name}
                placeholder="type a team member name"
                onChange={onChange}
                name="name"
              />
        </label>

        <label>Email
          <input 
            type="email"
            name="email"
            value={values.email}
            placeholder="email address"
            onChange={onChange}
          />
        </label>

        <label>Role
          {/* dropdown for role. */}
          <select name="role" onChange={onChange}>
            <option value="">select member role!</option>
            <option value="astronaut">Astronaut</option>
            <option value="cowboy">Cowboy</option>
            <option value="archaeologist">Archaeologist</option>
            <option value="cop">Cop</option>
            <option value="robber">Robber</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
