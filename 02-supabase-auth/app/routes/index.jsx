import supabase from "../utils/supabase";
import { useLoaderData } from "@remix-run/react";
import { Auth } from "@supabase/ui";

export const loader = async () => {
  console.log(supabase.auth.user());
  const { data: posts } = await supabase.from("posts").select("*");
  return { posts };
};

export default function Index() {
  const { posts } = useLoaderData();
  const { session, user } = Auth.useUser();
  console.log({ session, user });
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}
