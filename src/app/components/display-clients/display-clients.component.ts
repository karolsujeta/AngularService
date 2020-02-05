import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../service/client-service.service';

@Component({
  selector: 'app-display-clients',
  templateUrl: './display-clients.component.html',
  styleUrls: ['./display-clients.component.css']
})
export class DisplayClientsComponent implements OnInit {

  constructor(private clientservice: ClientServiceService) { }

  ngOnInit() {
  }

  getClients() {
    return this.clientservice.getClient();
  }
}
