import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppController } from 'src/app.controller';

@Controller('gateway')
export class GatewayController {
 
  private client: ClientProxy;

  private logger = new Logger(AppController.name)

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
       urls: ['amqp://admin:123456@localhost:5672/lightdb'],
       queue: 'admin-backend'
      }
       })
  }

  @Get('client-data')
  getClientData(): Observable<any> {
    return this.client.send({ cmd: 'get-client-data' }, {});
  }
}
