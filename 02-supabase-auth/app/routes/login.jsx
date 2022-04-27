import { Auth } from "@supabase/ui";
import supabase from "../utils/supabase";

export default () => {
  return <Auth supabaseClient={supabase} />;
};
