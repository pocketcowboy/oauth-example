import { Fragment, render } from "preact";

import { Header } from "common";

const App = () => (
  <Fragment>
    <Header title="Authorization Server" />
  </Fragment>
);

render(<App />, document.body);
