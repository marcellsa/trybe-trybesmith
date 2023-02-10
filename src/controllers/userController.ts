import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/userService';

dotenv.config();
const secret = process.env.JWT_SECRET; // refatorar o jwt levando para pasta separada

export default class UserController {
  constructor(private userService = new UserService()) { }

  async create(req: Request, res:Response): Promise<void> {
    const user = req.body;
    const data = await this.userService.create(user);
    const token = jwt.sign({ data }, String(secret));
    res.status(201).json({ token });
  }
}