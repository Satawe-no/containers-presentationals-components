// Angular
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Models
import { IUser } from '../models/user';

import { commonHttpHeaders } from './commonHttpHeaders';

/**
 * UserService s'occupe des requêtes vers le serveur
 */
@Injectable()
export class UserService {

    constructor (private http: Http) { }
    
    getUsers(): Observable<IUser[]> {
        return this.http.get('http://www.json-generator.com/api/json/get/cvhYDEubZu?indent=4', commonHttpHeaders)
            .map((res: Response) => res.json() as IUser[])
    }
}
