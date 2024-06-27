import { z } from 'zod';
import { signUpSchema } from './schemas';

export type SignUpType = z.infer<typeof signUpSchema>;
