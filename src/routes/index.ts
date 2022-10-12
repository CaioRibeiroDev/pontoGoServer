import { Router } from 'express'
import { AuthenticateAccountUserController } from 'src/modules/account/useCases/authenticateAccountUser/AuthenticateAccountUserController'
import { CreateAccountController } from 'src/modules/account/useCases/createAccount/CreateAccountController'

export const routes: Router = Router()

const createAccount = new CreateAccountController()
const authenticateAccount = new AuthenticateAccountUserController()

routes.post('/create-user', createAccount.handle)
routes.post('/login', authenticateAccount.handle)
