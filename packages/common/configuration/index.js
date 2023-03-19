const app_port = 8080;
const auth_server_port = 3000;
const protected_datastore_port = 4000;

export const ClientConfiguration = {
  app_port,
  app_client_id: "1234567890",
  app_redirect_uri: `http://localhost:${app_port}/callback`,
};

export const SharedConfiguration = {
  auth_server_port,
  auth_server_authorize_endpoint: `http://localhost:${auth_server_port}/authorize`,
  auth_server_token_endpoint: `http://localhost:${auth_server_port}/token`,
  protected_datastore_port,
  protected_datastore_endpoint: `http://localhost:${protected_datastore_port}/data`,
};

// For the purposes of demonstration, we use Base64 encoding to encrypt and decrypt secrets
const encode = btoa;
const decode = atob;

export const Secrets = {
  app: {
    client_secret: encode(SharedConfiguration.app_client_id),
  },
  user: {
    username: "cookie.monster",
    password: "cookies",
  },
};
