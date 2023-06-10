import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


export default class MiPrimerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){
        console.log(`Esto lo escribió el middleware1: ${req.method} - ${req.url} - Fecha: ${new Date().toUTCString()}`)
        next();
    }
}