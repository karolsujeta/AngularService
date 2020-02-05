import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../service/client-service.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {

  newName: string;
  newLastname: string;
  newAge: number;

  constructor(private clientservice: ClientServiceService) { }

  ngOnInit() {
  }

  addClient() {
    let newClient = {
      name: this.newName,
      lastname: this.newLastname,
      age: this.newAge,
    }
    this.clientservice.addClient(newClient);
  }

}
