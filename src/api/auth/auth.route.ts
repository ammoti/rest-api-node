import { Router } from 'express';
import Controller from './auth.controller';

const auth: Router = Router();
const controller = new Controller();

// Sign In
auth.post('/authenticate', controller.authenticate);

// Register New User
auth.post('/register', controller.register);

export default auth;
