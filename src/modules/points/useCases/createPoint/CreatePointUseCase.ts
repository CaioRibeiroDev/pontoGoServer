import { inject, injectable } from 'tsyringe'
import { IPoint } from '../../DTOs/IPoint'
import { IRegisterUserPoints } from '../../repositories/IRegisterUserPoints'

@injectable()
export class CreatePointUseCase {
  constructor (
    @inject('RegisterUserPoints')
    private registerUserPoints: IRegisterUserPoints
  ) {}

  async execute ({ name, date, hour }: IPoint) {
    const section = '001'

    try {
      const point = await this.registerUserPoints.createPoint({ name, section, date, hour })
      return point
    } catch (error) {
      console.log(error)
    }
  }
}
