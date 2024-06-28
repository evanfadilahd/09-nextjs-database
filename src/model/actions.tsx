// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';
 
// // ...
 
// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }

// actions.tsx

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const credentials = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const user = await signIn('credentials', credentials);

    if (!user) {
      throw new AuthError('CredentialsSignin', { message: 'Authentication failed.' });
    }

    return 'Authentication successful';
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }

    console.error('Authentication error:', error);
    return 'Authentication error';
  }
}
