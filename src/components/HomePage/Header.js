import logo from './ab_logo.png';

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="AxonBlast Logo" className="rounded-corners" />
      </header>
    </div>
  )
}

export default Header