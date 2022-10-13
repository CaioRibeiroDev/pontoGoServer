import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindAllPointsUseCase } from './FindAllPointsUseCase'

export class FindAllPointsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const findAllPointsUseCase = container.resolve(FindAllPointsUseCase)
    const result = await findAllPointsUseCase.execute()

    return response.json(result)
  }
}
