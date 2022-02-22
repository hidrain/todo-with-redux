export const InputField = ({ text, handleInput, handleSubmit }) => {
    return (
        <label className="form-label">
            <input
                className="form-input"
                value={text}
                onChange={(e) => { handleInput(e.target.value) }} />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}
