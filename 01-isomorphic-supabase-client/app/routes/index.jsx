import supabase from "../utils/supabase";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const { data: posts } = await supabase.from("posts").select("*");
  return { posts };
};

export default function Index() {
  const { posts } = useLoaderData();
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}
