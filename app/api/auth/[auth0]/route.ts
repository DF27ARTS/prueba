import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: "https://nextjs-auth0.com", // or AUTH0_AUDIENCE
      // Add the `offline_access` scope to also get a Refresh Token
      scope: "openid profile email access:nestjs-auth0", // or AUTH0_SCOPE
    },
  }),
});
