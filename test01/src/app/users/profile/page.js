"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Inter, Roboto_Mono } from "next/font/google";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectAllUsers } from "@/redux/features/userSlice";

const inter = Inter({ subsets: ["greek-ext"], weight: "400" });

export const metadata = {
  title: "Users",
  description: "Generated by create next app",
};

export default function UsersProfile() {
  const dispatch = useDispatch();
  const userData = useSelector(selectAllUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //console.log("profile", userData);

  return (
    <>
      {userData.data &&
        userData.data.map((users) => (
          <h2 key={users.Eposta}>{users.Isim} Profil Hesabı</h2>
        ))}
    </>
  );
}
