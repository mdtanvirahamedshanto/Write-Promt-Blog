import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers";


const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({session}){
        
    },
    async signId({profile}){
        
    }
})

export { handler as GET, handler as POST };


