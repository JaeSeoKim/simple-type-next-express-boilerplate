import { Request, Response } from 'express'

export default async (req: Request, res: Response) => {
  const userData: { [key: string]: string } = {
    jaeseo: 'https://github.com/JaeSeoKim'
  }
  setTimeout(() => {
    if (userData[req.params.id] === undefined) {
      res.send('Not Found!')
    } else {
      res.send(userData[req.params.id])
    }
  }, 1000)
}
