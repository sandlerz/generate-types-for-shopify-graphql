export const Button = ({ children, href, className, onClick, type }) => {
  const styles = `w-fit grid place-content-center px-6 py-2 mx-auto rounded-lg bg-gradient-to-r hover:bg-[100px] transition-all duration-20000 ease-out hover:ease-in from-indigo-500 via-pink-500 to-indigo-500 hover:scale-110 ${className}`
  switch (type) {
    case 'anchor':
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          download="Shopify-schema.ts"
          rel="noreferrer"
        >
          {children}
        </a>
      )
    case 'button':
    default:
      return (
        <button className={styles} onClick={onClick}>
          {children}
        </button>
      )
  }
}
