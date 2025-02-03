"use client";

import { useRouter } from "next/navigation";
import * as React from 'react';
import Button from '@mui/material/Button';

import { useContextDefault } from '../context/Context';

export default function TelaInicial() {
  const context = useContextDefault();
  const userType = {name: '', email: ''};
  const user = context && context.user ? context.user : userType;
  const router = useRouter();
  return (
    <div className="w-100 h-[100vh] bg-[#555D28] cursor-pointer" onClick={() => router.push("/menu")}>
      <Button variant="contained">{user.name}</Button>
    </div>
  );
}
