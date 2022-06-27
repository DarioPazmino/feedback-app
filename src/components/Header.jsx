const Header = ({ text="Feedback App", bgColor="rgba(0,0,0,.4)", color='#ff6a95' }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: color,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header;