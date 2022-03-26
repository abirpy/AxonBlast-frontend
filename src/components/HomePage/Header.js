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

{/* <Box
  component="span"
  m={1}
  className="spreadBox classes.box"
>
  <Button 
    variant="contained" 
    color="primary" 
    style={{ height: 40 }}
  >
    Primary
  </Button>
  <Button 
    variant="contained" 
    color="secondary" 
    style={{ height: 40 }}
  >
    Secondary
  </Button>
</Box> */}