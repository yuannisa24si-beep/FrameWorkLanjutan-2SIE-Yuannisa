function InputField({ label, name, value, onChange, error, placeholder }) {
    return (
        <div className='field'>
            <label>{label}</label>
            <input
                type='text'
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={error ? 'error-input' : ''}
            />
            {error && (
                <div className='error-alert'>
                    &#9888; {error}
                </div>
            )}
        </div>
    );
}

export default InputField;
