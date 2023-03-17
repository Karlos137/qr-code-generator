const MAX_LENGTH = 1010

const TextArea = ({ type = "text", placeholder, id, label, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-light text-gray-500" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="max-h-[400px] min-h-[54px] rounded-[20px] bg-gray-100 px-4 py-1.5 text-base placeholder:text-gray-500 focus:outline-sky-600"
        id={id}
        rows={4}
        type={type}
        placeholder={placeholder}
        maxLength={MAX_LENGTH}
        {...rest}
      />
    </div>
  )
}
export default TextArea
