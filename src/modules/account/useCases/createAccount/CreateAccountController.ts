import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateAccountUseCase } from './CreateAccountUseCase'

export class CreateAccountController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const createAccountUseCase = container.resolve(CreateAccountUseCase)
    await createAccountUseCase.execute({
      name,
      email,
      password
    })

    return response.status(201).send()
  }
}
