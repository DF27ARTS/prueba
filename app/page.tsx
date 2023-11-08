"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";


export default function Home() {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {

    return (
      <>
        <div>{user.name}</div>
        <img src={user.picture} alt="" />
        <a href="/api/auth/logout">Logout</a>
      </>
    );
  }

  return <a href="/api/auth/login">Log in</a>;
}
