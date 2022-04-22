import { useState, useEffect, useContext } from "react";
// import { AuthContext } from "./context/Auth.context.js";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import api from "../lib/appwrite";

export default function Home() {
  // const { state } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Appwrite app</h1>
    </div>
  );
}
