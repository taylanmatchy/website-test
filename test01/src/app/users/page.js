import React from "react";
import getAllUsers from "../../../lib/getAllUsers";
import Link from "next/link";

import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["greek-ext"], weight: "400" });

export const metadata = {
  title: "Users",
  description: "Generated by create next app",
};

export default async function UsersPage() {
  const usersData = await getAllUsers();
  //console.log(usersData);

  return usersData.map((users) => (
    <>
      <p key={users.id} className={inter.className}>
        <Link href={`/users/${users.id}`}>{users.name}</Link>
      </p>
    </>
  ));
}
