import React from 'react'
import AddTodo from "../components/templates/AddTodo"
import { getSession } from 'next-auth/react';

function addtodo() {
  return (
    <AddTodo />
  )
}

export default addtodo;


