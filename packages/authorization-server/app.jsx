import { Fragment, render } from "preact";
import { useState } from "preact/hooks";

import {
  AuthenticatedUserBadge,
  AuthorizationForm,
  Header,
  LoginForm,
  UnknownUserBadge,
} from "common";
import { extractQueryParams } from "./helpers";

const AuthorizationNotice = () => (
  <AuthorizationForm
    endpoint="/approve"
    request={extractQueryParams(window.location)}
  >
    <fieldset>
      <legend>
        The app wants access to your data. It's asking for access to:
      </legend>
      <div>
        <input type="checkbox" name="scope" id="personal" value="personal" />
        <label htmlFor="personal">Your personal details</label>
      </div>

      <div>
        <input type="checkbox" name="scope" id="bank" value="bank" />
        <label htmlFor="bank">Your bank details</label>
      </div>

      <div>
        <input type="checkbox" name="scope" id="food" value="food" />
        <label htmlFor="food">Your favourite foods</label>
      </div>
    </fieldset>
  </AuthorizationForm>
);

const App = () => {
  [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Fragment>
      <Header title="Authorization Server" />
      {isAuthenticated ? <AuthenticatedUserBadge /> : <UnknownUserBadge />}
      <main>
        {isAuthenticated ? (
          <AuthorizationNotice />
        ) : (
          <LoginForm onSubmit={() => setIsAuthenticated(true)} />
        )}
      </main>
    </Fragment>
  );
};

render(<App />, document.body);
