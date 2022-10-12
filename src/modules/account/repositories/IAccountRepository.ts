import { user } from '@prisma/client'
import { IAccount } from '../DTOs/IAccount'

export interface IAccountRepository {
  createAccount({ name, email, password }: IAccount): Promise<user>
  findUserByEmail(email: string): Promise<user | null>
}
