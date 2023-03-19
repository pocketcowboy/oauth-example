import { render, Fragment } from "preact";
import qs from "query-string";

import {
  Header,
  AuthButton,
  SharedConfiguration,
  ClientConfiguration,
} from "common";

const { app_client_id, app_redirect_uri } = ClientConfiguration;
const { auth_server_authorize_endpoint } = SharedConfiguration;

const authUri = `${auth_server_authorize_endpoint}?${qs.stringify({
  client_id: app_client_id,
  redirect_uri: app_redirect_uri,
})}`;

const App = () => {
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
