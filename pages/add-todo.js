import React from 'react'
import AddTodo from "../components/templates/AddTodo"
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { authOptions } from './api/auth/[...nextauth]';

function addtodo() {


  return (
    <AddTodo />
  )
}

export default addtodo;


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

