export default function Menu({ isOpen, onToggle }) {
  return (
    <button onClick={onToggle} className={`toggle ${isOpen ? "open" : ""}`}>
      <div className="bars" />
      <div className="bars" />
      <div className="bars" />
    </button>
  );
}
