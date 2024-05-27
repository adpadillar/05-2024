"use client";

import React from "react";
import { api } from "~/trpc/react";

interface ShowLatestPostProps {
  children?: React.ReactNode;
}

const ShowLatestPost: React.FC<ShowLatestPostProps> = () => {
  const { data, isLoading } = api.post.getLatest.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default ShowLatestPost;
