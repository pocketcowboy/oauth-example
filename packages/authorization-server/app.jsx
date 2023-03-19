import { Fragment, render } from "preact";

import { Header, LoginForm, UnknownUserBadge } from "common";

const App = () => (
  <Fragment>
    <Header title="Authorization Server" />
    <UnknownUserBadge />
    <main>
      <LoginForm onSubmit={(credentials) => console.log(credentials)} />
    </main>
  </Fragment>
);

render(<App />, document.body);
