const LinkInput = ({ inputText, setInputText, message }) => {
  return (
    <input
      placeholder="Shorten a link here..."
      className="link-input"
      type="text"
      name="linkInput"
      onChange={(e) => setInputText(e.target.value)}
      value={inputText}
      style={{ outline: message && "3px solid var(--clr-secondary-400)" }}
    />
  );
};

export default LinkInput;
