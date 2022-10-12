import { AccountRepository } from 'src/modules/account/repositories/AccountRepository'
import { IAccountRepository } from 'src/modules/account/repositories/IAccountRepository'
import { container } from 'tsyringe'

container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository
)
