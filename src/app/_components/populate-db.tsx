"use client";

import React from "react";
import { api } from "~/trpc/react";

interface PopulateDBProps {
  children?: React.ReactNode;
}

const PopulateDB: React.FC<PopulateDBProps> = () => {
  const { mutate } = api.post._populateFakeUsers.useMutation();
  return (
    <button
      onClick={() => {
        const count = prompt("How many users do you want to create?");
        if (!count) return;
        const countNum = parseInt(count, 10);
        if (isNaN(countNum)) return;
        mutate({ count: countNum });
      }}
    >
      Populate DB
    </button>
  );
};

export default PopulateDB;
