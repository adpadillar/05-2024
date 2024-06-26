import { api } from "~/trpc/server";

export default async function Home() {
  // Server side data fetching example
  const data = await api.post.hello({ text: "from tRPC!" });

  return (
    <div>
      <h1>Hello from the server!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
