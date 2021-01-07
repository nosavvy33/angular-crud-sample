import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from '../../../modules/shared/services/clients.service';
import { AddDialog } from './forms/add.dialog';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {

  clientToUpdate: Client;

  newClient: Client = new Client();

  editMode: boolean = false;

  constructor(public clientService: ClientsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.clientService.list().subscribe(_ => {
      this.clientService.permanentClients = _.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Client;
      })
    });
  }

  calculateFallecimiento(birthDate: Date) {
    const lifeExpectancyPeruInDays = 76.29 * 365;
    let date = new Date(birthDate);
    date.setDate(date.getDate() + lifeExpectancyPeruInDays);
    return date.toISOString().split("T")[0]
  }

  openDialog(client: Client = null) {
    this.dialog.open(AddDialog, {
      width: '500px',
      data: JSON.parse(JSON.stringify(client))
    });
  }
}
