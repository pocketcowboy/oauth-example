import { Fragment, render } from "preact";

import { AuthenticatedUserBadge, AuthorizationForm, Header } from "common";
import { extractQueryParams } from "./helpers";

const AuthorizationNotice = () => (
  <AuthorizationForm
    endpoint="/grant-authorization"
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

const App = () => (
  <Fragment>
    <Header title="Authorization Server" />
    {/* <UnknownUserBadge /> */}
    <AuthenticatedUserBadge />
    <main>
      {/* <LoginForm /> */}
      <AuthorizationNotice />
    </main>
  </Fragment>
);

render(<App />, document.body);
