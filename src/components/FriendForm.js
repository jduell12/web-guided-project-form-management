import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  // 🔥 STEP 3 - MAKE SURE THE PARENT IS INJECTING ALL NECESSARY PROPS
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    // 🔥 STEP 4 - Give the form an `onSubmit` event handler
    <form onSubmit={onSubmit} className='form container'>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        <button>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label htmlFor="usernameInput">Username:&nbsp;
          {/* 🔥 STEP 5 - Make an input of type `text` for username.
              Controlled inputs also need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler should fire to change app state. */}
          <input 
            id="usernameInput"
            type="text" 
            name="username" 
            maxLength="100"
            value={values.username} 
            onChange={onInputChange} 
          />
        </label>

        <label htmlFor="emailInput">Email:&nbsp;
          {/* 🔥 STEP 6 - Make an input of type `text` for email. */}
          <input 
            id="emailInput"
            type="email" 
            name="email" 
            value={values.email} 
            onChange={onInputChange} 
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label htmlFor="roleInput">Role:&nbsp;
          {/* 🔥 STEP 7 - Make dropdown for role. */}
          <select value={values.role} onChange={onInputChange} id="roleInput" name="role">
              <option value=''>-- Select an option --</option>
              <option value='Student'>Student</option>
              <option value='Alumni'>Alumni</option>
              <option value='Instructor'>Instructor</option>
              <option value='Team Lead'>Team Lead</option>
          </select>
        </label>
      </div>
    </form>
  )
}
