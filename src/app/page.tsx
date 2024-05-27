import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.post.hello({ text: "From tRPC" });

  return (
    <div>
      <h1>Hello world!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
