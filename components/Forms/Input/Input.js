const Input = ({ type = "text", placeholder, id, label, ...rest }) => {
  return (
    <div className="mb-2 flex flex-col gap-1">
      <label className="text-sm font-light text-gray-500" htmlFor={id}>
        {label}
      </label>
      <input
        className="rounded-[20px] bg-gray-100 px-4 py-1.5 text-base placeholder:text-gray-500 focus:outline-sky-600"
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}
export default Input
