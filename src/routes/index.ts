import { Router } from 'express'
import { AuthenticateAccountUserController } from 'src/modules/account/useCases/authenticateAccountUser/AuthenticateAccountUserController'
import { CreateAccountController } from 'src/modules/account/useCases/createAccount/CreateAccountController'
import { CreatePointController } from 'src/modules/points/useCases/createPoint/CreatePointController'

export const routes: Router = Router()

const createAccount = new CreateAccountController()
const authenticateAccount = new AuthenticateAccountUserController()
const createPoint = new CreatePointController()

routes.post('/create-user', createAccount.handle)
routes.post('/login', authenticateAccount.handle)
routes.post('/create-point', createPoint.handle)
