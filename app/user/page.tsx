import { getAccessToken, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(async function User() {
  const { accessToken } = await getAccessToken({
    scopes: ["access:nestjs-auth0"],
  });

  const response = await fetch("http://localhost:3001/api/messages/protected", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();

  if (data === undefined) return <div>Loading...</div>;
  return (
    <div>
      <img src={data.picture} alt="" />
      <h1>
        {data.firstname} {data.lastname}
      </h1>
      <p>{data.email}</p>
      <p>{data.age}</p>
    </div>
  );
});
