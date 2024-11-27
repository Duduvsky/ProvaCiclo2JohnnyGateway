import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  constructor(private httpService: HttpService) {}

  // Função para pegar os dados do cliente do microserviço
  async getClientDataFromMicroservice(clientId: number) {
    const url = `http://localhost:3001/client/${clientId}`;  // A URL do microserviço
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  // Função para pegar todos os clientes do microserviço
  async getAllClientsFromMicroservice() {
    const url = `http://localhost:3001/client`;  // A URL do microserviço
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }
}
