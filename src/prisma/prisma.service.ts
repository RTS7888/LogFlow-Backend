import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
   
    constructor(){
        super({
          datasources: {
            db :{
              url : 'postgresql://postgres:Zayn.malik1@localhost:5432/logFlowDb?schema=public'
            }
          }
        })
      }
}
