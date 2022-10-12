import { point } from '@prisma/client'
import { prisma } from 'src/database/prisma'
import { IPoint } from '../DTOs/IPoint'
import { IRegisterUserPoints } from './IRegisterUserPoints'

export class RegisterUserPoints implements IRegisterUserPoints {
  async createPoint ({ name, section, date, hour }: IPoint): Promise<point> {
    const point = await prisma.point.create({
      data: {
        name,
        section,
        date,
        hour
      }
    })

    return point
  }

  async findAllPoints (): Promise<point[]> {
    const points = await prisma.point.findMany()

    return points
  }

  async findAllPointByNameUser (id: string): Promise<point[]> {
    const points = await prisma.point.findMany({
      where: {
        id
      }
    })

    return points
  }
}
