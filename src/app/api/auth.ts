// import NextAuth from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';
// import { sql } from '@vercel/postgres';
// import { z } from 'zod';
// import type { User } from '@/app/lib/definitions';
// import { authConfig } from './auth.config';
// import bcrypt from 'bcryptjs';

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const parsedCredentials = z
//           .object({ email: z.string().email(), password: z.string().min(6) })
//           .safeParse(credentials);

//         if (parsedCredentials.success) {
//           const { email, password } = parsedCredentials.data;

//           const user = await getUser(email);
//           if (!user) return null;

//           const passwordsMatch = await bcrypt.compare(password, user.password);
//           if (passwordsMatch) return user;
//         }

//         console.log('Invalid credentials');
//         return null;
//       },
//     }),
//   ],
// });

// actions.tsx

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import type { User } from '@/app/lib/definitions';

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    // Assuming formData contains email and password
    const credentials = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    // Perform authentication using signIn
    const user = await signIn('credentials', credentials);

    if (!user) {
      // Handle case where signIn returns null (authentication failed)
      return 'Invalid credentials.';
    }

    // Authentication successful, handle further logic if needed
    return 'Authentication successful'; // Example success message
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }

    // Handle other types of errors, if necessary
    console.error('Authentication error:', error);
    return 'Authentication error'; // Example generic error message
  }
}
