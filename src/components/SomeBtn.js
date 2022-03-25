const SomeBtn = ({ text, style }) => {
  return (
    <div>
      <button className={`btn ${style}`}>{text}</button>
    </div>
  )
}

export default SomeBtn