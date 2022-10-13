import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreatePointUseCase } from './CreatePointUseCase'

export class CreatePointController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name, section, date, hour } = request.body

    const createPointUseCase = container.resolve(CreatePointUseCase)
    await createPointUseCase.execute({
      name,
      section,
      date,
      hour
    })

    return response.status(201).send()
  }
}
