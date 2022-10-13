import { inject, injectable } from 'tsyringe'
import { IRegisterUserPoints } from '../../repositories/IRegisterUserPoints'

@injectable()
export class FindAllPointsUseCase {
  constructor (
    @inject('RegisterUserPoints')
    private registerUserPoints: IRegisterUserPoints
  ) {}

  async execute () {
    const points = await this.registerUserPoints.findAllPoints()

    return points
  }
}
