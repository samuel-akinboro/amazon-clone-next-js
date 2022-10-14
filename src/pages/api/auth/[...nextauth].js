import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: ''
    })
  ]
};

export default NextAuth(authOptions)