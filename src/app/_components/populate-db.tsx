"use client";

import React from "react";
import { api } from "~/trpc/react";

interface PopulateDBProps {
  children?: React.ReactNode;
}

const PopulateDB: React.FC<PopulateDBProps> = () => {
  const { mutate } = api.post._populateFakeUsers.useMutation({
    onSuccess: () => (window.location.href = "/"),
  });
  return (
    <button
      className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
      onClick={() => {
        const count = prompt("How many users do you want to create?");
        if (!count) return;
        const countNum = parseInt(count, 10);
        if (isNaN(countNum)) return;
        mutate({ count: countNum });
      }}
    >
      Click to Populate DB
    </button>
  );
};

export default PopulateDB;
