// Reusable component untuk input text
function InputField({ label, name, value, onChange, error, placeholder, type = "text" }) {
    return (
        <div className="field">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={error ? "error-input" : ""}
            />
            {error && <span className="error-msg">{error}</span>}
        </div>
    );
}

export default InputField;
