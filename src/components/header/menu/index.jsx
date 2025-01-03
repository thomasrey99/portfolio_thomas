const Menu = ({ handleOpenChange }) => {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="checkbox" onClick={handleOpenChange} />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
};

export default Menu;
