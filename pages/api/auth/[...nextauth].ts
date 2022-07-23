import NextAuth, { type NextAuthOptions } from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  theme: {
    colorScheme: "light",
  },

  providers: [
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID || "unknown-client-id",
      clientSecret: process.env.GITLAB_CLIENT_SECRET || "unknown-client-secret",
      authorization: "https://git.d00b.pl/oauth/authorize?scope=read_user",
      token: "https://git.d00b.pl/oauth/token",
      userinfo: "https://git.d00b.pl/api/v4/user",
    }),
  ],
};

export default NextAuth(authOptions);
