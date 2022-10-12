import { prisma } from 'src/database/prisma'
import { IAccount } from '../DTOs/IAccount'
import { IAccountRepository } from './IAccountRepository'

export class AccountRepository implements IAccountRepository {
  async createAccount ({ email, name, password }: IAccount) {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password
      }
    })

    return user
  }

  async findUserByEmail (email: string) {
    const existsMail = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return existsMail
  }
}
