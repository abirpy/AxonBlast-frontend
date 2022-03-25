const SomeBtn = ({ text, css }) => {
  return (
    <div>
      <button className={`btn ${css}`}>{text}</button>
    </div>
  )
}

export default SomeBtn