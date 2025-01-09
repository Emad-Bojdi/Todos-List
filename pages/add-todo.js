import React from 'react'
import AddTodo from "../components/templates/AddTodo"
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { authOptions } from './api/auth/[...nextauth]';

function addtodo() {

  const status = getSession(authOptions);
  const router = useRouter();
  if (status === "unauthenticated")
    router.push("/signin");
  return (
    <AddTodo />
  )
}

export default addtodo;


