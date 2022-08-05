import { useState } from 'react';

export default function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) => {
    name === errorMessages.name && (<div className="error">{errorMessages.message}</div>);
  }
  return (
    <h1>Login</h1>
  );
}