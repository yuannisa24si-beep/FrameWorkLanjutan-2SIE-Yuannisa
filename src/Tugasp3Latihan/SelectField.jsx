// Reusable component untuk select dropdown
function SelectField({ label, name, value, onChange, error, options }) {
    return (
        <div className="field">
            <label>{label}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={error ? "error-input" : ""}
            >
                <option value="">-- Pilih --</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {error && <span className="error-msg">{error}</span>}
        </div>
    );
}

export default SelectField;
