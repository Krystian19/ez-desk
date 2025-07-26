import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '..', '.env') });

export type NodeEnvs = 'production' | 'development' | 'test';

export const Env = {
  // general
  NODE_ENV: (process.env.NODE_ENV ?? 'development') as NodeEnvs,
};
