import { z } from 'zod';
import { confirmSignUpSchema } from './shemas';

export type ConfirmSignUpType = z.infer<typeof confirmSignUpSchema>;
