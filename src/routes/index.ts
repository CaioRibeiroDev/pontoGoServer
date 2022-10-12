import { Router } from 'express'
import { CreateAccountController } from 'src/modules/account/useCases/CreateAccount/CreateAccountController'

export const routes: Router = Router()

const createAccount = new CreateAccountController()

routes.post('/create-user', createAccount.handle)
