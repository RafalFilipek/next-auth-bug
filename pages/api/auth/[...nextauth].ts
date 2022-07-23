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
      authorization: "my-gitlab.com",
      token: "my-gitlab.com",
      userinfo: "my-gitlab.com",
    }),
  ],
};

export default NextAuth(authOptions);
