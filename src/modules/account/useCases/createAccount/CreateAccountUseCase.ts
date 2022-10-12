import { hash } from 'bcrypt'
import { AppError } from 'src/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { IAccount } from '../../DTOs/IAccount'
import { IAccountRepository } from '../../repositories/IAccountRepository'

@injectable()
export class CreateAccountUseCase {
  constructor (
    @inject('AccountRepository')
    private accountRepository: IAccountRepository
  ) {}

  async execute ({ name, email, password }: IAccount) {
    const existsUser = await this.accountRepository.findUserByEmail(email)

    if (existsUser) throw new AppError('User already exists')

    const hashPassword = await hash(password, 10)

    const createUser = await this.accountRepository.createAccount({ name, email, password: hashPassword })

    return createUser
  }
}
