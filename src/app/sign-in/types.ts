import { z } from 'zod';
import { signInSchema } from './schemas';

export type SignInType = z.infer<typeof signInSchema>;
