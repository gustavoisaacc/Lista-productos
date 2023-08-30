function Campo({ type, label, text }) {
  return (
    <div className="campo">
      <label htmlFor={label}>{text}</label>
      <input type={type} name={label} id={label} placeholder={text} />
    </div>
  );
}

export default Campo;
