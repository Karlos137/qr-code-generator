const Input = ({ type = "text", placeholder, ...rest }) => {
  return <input type={type} placeholder={placeholder} {...rest} />
}
export default Input
