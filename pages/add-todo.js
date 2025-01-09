import React from 'react'
import AddTodo from "../components/templates/AddTodo"
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function addtodo() {

  const status = getSession();
  const router = useRouter();
  if (status === "unauthenticated")
    router.push("/signin");
  return (
    <AddTodo />
  )
}

export default addtodo;


