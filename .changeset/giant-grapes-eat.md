---
"@remix-run/cloudflare": patch
"@remix-run/deno": patch
"@remix-run/node": patch
"@remix-run/react": patch
"@remix-run/server-runtime": patch
---

We enhanced the type signatures of `loader`/`action` and `useLoaderData`/`useActionData` to make it possible to infer the data type from return type of its related server function.

```tsx
import { LoaderArgs } from "@remix-run/node";

export async function loader(args: LoaderArgs) {
  return json({ greeting: "Hello!" }); // TypedResponse<{ greeting: string }>
}

export default function App() {
  let data = useLoaderData<typeof loader>(); // { greeting: string }
  return <div>{data.greeting}</div>;
}
```

See the discussion in #1254 for more context.