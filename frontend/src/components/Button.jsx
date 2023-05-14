export const Button = ({ children, href, className, onClick }) => {
  const handleClick = () => {
    if (href) {
      window.open(href)
    } else {
      onClick()
    }
  }

  return (
    <button
      className={`w-fit grid place-content-center px-6 py-2 mx-auto rounded-lg bg-gradient-to-r hover:bg-[100px] transition-all duration-20000 ease-out hover:ease-in from-indigo-500 via-pink-500 to-indigo-500 hover:scale-110 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
