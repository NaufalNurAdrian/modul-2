import supabase from "@/services/supabase";

export const singInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  if (error) {
    console.error("error during Google sign-in", error.message);
  }
};

export const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
        
    })
}