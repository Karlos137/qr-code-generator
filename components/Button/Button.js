const Button = ({ children }) => {
  return (
    <button className="min-w-[120px] rounded-[20px] border-2 border-sky-600 bg-white py-2 px-8 text-sky-600 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
      {children}
    </button>
  )
}
export default Button
