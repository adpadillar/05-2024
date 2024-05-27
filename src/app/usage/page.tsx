import { api } from "~/trpc/server";
import ShowLatestPost from "../_components/show-latest-post";

export default async function Home() {
  // Server side data fetching example
  const data = await api.post.getLatest();

  return (
    <div>
      <h1>Hello from the server!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h2>Hello From the client!</h2>
      <ShowLatestPost />
    </div>
  );
}
