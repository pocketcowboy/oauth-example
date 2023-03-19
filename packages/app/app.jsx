import { render, Fragment } from "preact";

import { Header, AuthButton } from "common";

const App = () => {
  return (
    <Fragment>
      <Header title="App" />
      <main>
        <p>Give me access to your data please.</p>
        <form action="/begin-authorization" method="POST">
          <AuthButton>Login to authorize</AuthButton>
        </form>
      </main>
    </Fragment>
  );
};

render(<App />, document.body);
