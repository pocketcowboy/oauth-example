import "../style.css";

export const AuthButton = ({ to, children }) => (
  <a href={to} className="button auth-button">
    {children}
  </a>
);
