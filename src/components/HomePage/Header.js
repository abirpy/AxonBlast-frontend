import logo from './ab_logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="AxonBlast Logo" className="rounded-corners" />
    </header>
  )
}

export default Header