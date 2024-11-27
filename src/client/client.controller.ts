import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('gateway/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  // Endpoint para obter todos os clientes
  @Get()
  async getAllClients() {
    return this.clientService.getAllClientsFromMicroservice();
  }

  // Endpoint para obter um cliente específico
  @Get(':id')
  async getClient(@Param('id') id: number) {
    return this.clientService.getClientDataFromMicroservice(id);
  }
}
