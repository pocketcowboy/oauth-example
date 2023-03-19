import { render, Fragment } from "preact";

import { Header, AuthButton } from "common";

const App = () => {
  const authUri = "http://localhost:3000";
  return (
    <Fragment>
      <Header title="App" />
      <main>
        <p>Give me access to your data please.</p>
        <AuthButton to={authUri}>Login to authorize</AuthButton>
      </main>
    </Fragment>
  );
};

render(<App />, document.body);
