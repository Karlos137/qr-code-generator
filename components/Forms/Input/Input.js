const Input = ({
  type = "text",
  name,
  withColorForm = false,
  placeholder,
  id,
  label,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="mb-2 flex w-full shrink grow flex-col gap-1">
      <label className="text-sm font-light text-gray-500" htmlFor={id}>
        {label}
      </label>

      {withColorForm ? (
        <div className="flex w-full items-center gap-4">
          <input
            className="grow rounded-[20px] bg-gray-100 px-4 py-1.5 text-base placeholder:text-gray-500 focus:outline-sky-600"
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            {...rest}
          />
          <input type="color" value={value} onChange={onChange} name={name} />
        </div>
      ) : (
        <input
          className="rounded-[20px] bg-gray-100 px-4 py-1.5 text-base placeholder:text-gray-500 focus:outline-sky-600"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          {...rest}
        />
      )}
    </div>
  )
}
export default Input
