import { point } from '@prisma/client'
import { IPoint } from '../DTOs/IPoint'

export interface IRegisterUserPoints {
  createPoint({ name, section, date, hour }: IPoint): Promise<point>
  findAllPoints(): Promise<point[]>
  findAllPointByNameUser(id: string): Promise<point[]>
}
