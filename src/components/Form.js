export default function Form({ children, ...rest }) {
  return (
    <form className="signup form" action="#" {...rest}>
      {children}
    </form>
  );
}
