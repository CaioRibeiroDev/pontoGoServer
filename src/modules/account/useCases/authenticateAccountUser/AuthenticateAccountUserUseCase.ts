import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { AppError } from 'src/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { IAccountRepository } from '../../repositories/IAccountRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
  },
  token: string
}

@injectable()
export class AuthenticateAccountUserUseCase {
  constructor (
    @inject('AccountRepository')
    private accountRepository: IAccountRepository
  ) {}

  async execute ({ email, password }: IRequest) {
    const existsUser = await this.accountRepository.findUserByEmail(email)
    if (!existsUser) throw new AppError('User not does exists')

    const passwordMatch = await compare(password, existsUser.password)

    if (!passwordMatch) throw new AppError('Email or password incorrect')

    const token = sign({}, 'b0d54ee9d8c0140eb5e8209449d498f4', {
      subject: existsUser.id,
      expiresIn: '30'
    })

    const resultUser: IResponse = {
      user: {
        name: existsUser.name
      },
      token
    }

    return resultUser
  }
}
