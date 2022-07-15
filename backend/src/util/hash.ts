import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function hashCode(password: string) {
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
}

export async function matchCode(password: string, hashPassword: string) {
  return await bcrypt.compare(password, hashPassword);
}
