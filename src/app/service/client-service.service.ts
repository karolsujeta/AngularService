import { Injectable } from '@angular/core';

export interface ClientData {
  name: string;
  lastname: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})

export class ClientServiceService {
  data = [{
    name: "Jan",
    lastname: "Kowalski",
    age: 22,
  },

  {
    name: "Jakub",
    lastname: "Mróz",
    age: 14,
  }]

  getClient() {
    return this.data;
  }

  addClient(e) {
    this.data.push(e);
  }

  constructor() { }
}
