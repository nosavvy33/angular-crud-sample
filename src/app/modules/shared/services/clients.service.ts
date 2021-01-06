import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Client } from "src/app/models/client.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientsService implements Resolve<Client[]> {

    permanentClients: Client[];

    constructor(public http: HttpClient){

    }

    resolve(): Client[]{
        return new Array<Client>();
    }
}
