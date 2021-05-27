import React from 'react'

interface Props {
  description: string
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm: React.FC<Props> = ({description, onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <input type="text" placeholder="enter todo here" value={description} onChange={onChange}></input>
        </label>
        <button>Add Todo</button>
      </form>
    </div>
    
  )
}

export default InputForm
