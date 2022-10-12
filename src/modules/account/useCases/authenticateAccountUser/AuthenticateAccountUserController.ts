import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticateAccountUserUseCase } from './AuthenticateAccountUserUseCase'

export class AuthenticateAccountUserController {
  async handle (request: Request, response: Response) {
    const { email, password } = request.body

    const authenticateAccountUserUseCase = container.resolve(AuthenticateAccountUserUseCase)
    const result = await authenticateAccountUserUseCase.execute({
      email,
      password
    })

    return response.json(result)
  }
}
