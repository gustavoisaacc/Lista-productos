function Campo({ type, label, text, value, setValue }) {
  return (
    <div className="campo">
      <label htmlFor={label}>{text}</label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Campo;
