import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './gateway/gateway.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_NAME',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'client_data_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [GatewayController],
})
export class AppModule {}
