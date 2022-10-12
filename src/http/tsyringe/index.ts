import { AccountRepository } from 'src/modules/account/repositories/AccountRepository'
import { IAccountRepository } from 'src/modules/account/repositories/IAccountRepository'
import { IRegisterUserPoints } from 'src/modules/points/repositories/IRegisterUserPoints'
import { RegisterUserPoints } from 'src/modules/points/repositories/RegisterUserPoints'
import { container } from 'tsyringe'

container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository
)

container.registerSingleton<IRegisterUserPoints>(
  'RegisterUserPoints',
  RegisterUserPoints
)
