export default function UserInput({ labelName, onChangeInput, valueInput }) {

  return (
    <>
      <p>

        <label>{labelName}</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={valueInput}
          required
        ></input>
      </p>
    </>

  )
}