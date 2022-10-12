import { inject, injectable } from 'tsyringe'
import { IPoint } from '../../DTOs/IPoint'
import { IRegisterUserPoints } from '../../repositories/IRegisterUserPoints'

@injectable()
export class CreatePointUseCase {
  constructor (
    @inject('RegisterUserPoints')
    private registerUserPoints: IRegisterUserPoints
  ) {}

  async execute ({ name, section, date, hour }: IPoint) {
    const point = await this.registerUserPoints.createPoint({ name, section, date, hour })

    return point
  }
}
