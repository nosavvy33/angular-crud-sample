import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Client } from "src/app/models/client.model";
import { ClientsService } from "src/app/modules/shared/services/clients.service";

@Component({
    selector: 'add-dialog',
    templateUrl: 'add.dialog.html',
    styleUrls: ['add-dialog.styles.scss']
})
export class AddDialog {

    newClient: Client;

    constructor(
        private clientService: ClientsService,
        public dialogRef: MatDialogRef<AddDialog>,
        @Inject(MAT_DIALOG_DATA) public client: Client) { this.newClient = client ? client : new Client(); }

    onNoClick(): void {
        this.dialogRef.close();
    }

    confirmAdd(): void {
        this.newClient.edad = Math.abs(new Date(Date.now() - new Date(this.newClient.nacimiento).getTime()).getUTCFullYear() - 1970);
        console.log(this.newClient);
        if (this.newClient.id != null) {
            this.clientService
                .update(
                    JSON.parse(JSON.stringify(this.newClient)))
        } else {
            this.clientService
                .add(
                    {
                        nombres: this.newClient.nombres, apellidos: this.newClient.apellidos,
                        edad: this.newClient.edad, nacimiento: this.newClient.nacimiento
                    })
                .then(_ => { });
        }
    }

}