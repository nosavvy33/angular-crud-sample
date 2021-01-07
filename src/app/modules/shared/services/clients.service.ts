import { Injectable } from "@angular/core";
import { Client } from "src/app/models/client.model";
import { Utils } from "src/app/Utils/utils";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ClientsService {

    permanentClients: Client[];

    constructor(private firestore: AngularFirestore) {
    }

    list() {
        return this.firestore.collection<Client>('clients').snapshotChanges();
    }

    add(client: Client) {
        return this.firestore.collection('clients').add(client);
    }

    delete(clientId: string) {
        this.firestore.doc('clients/' + clientId).delete();
    }

    update(client: Client) {
        this.firestore.doc('clients/' + client.id).update(client);
    }

    getAverage(): number {
        return Utils.getAverageFromValues(this.permanentClients.map(client => client.edad));
    }

    getStandardDeviation(): number {
        return Utils.getStandardDeviation(this.permanentClients.map(client => client.edad));
    }

}
