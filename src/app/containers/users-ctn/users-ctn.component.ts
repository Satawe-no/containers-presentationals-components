// Angular
import { Component, OnInit } from '@angular/core';

// Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import "rxjs/add/operator/mergeMap";

// Externals packages
import * as _ from 'lodash';

// Models
import { IUser } from '../../shared/models/user';
import { IUserVM } from './user.vm';

// Services
import { UserService } from '../../shared/services/user.service';

/**
 * UsersCtnComponent a pour responsabilité : 
 * - D'appeler et de consommer les services
 * - De travailler les données et de les retourner aux components enfants 
 */
@Component({
    selector: 'users-ctn',
    templateUrl: './users-ctn.component.html',
    styleUrls: ['./users-ctn.component.css'],
    providers: [UserService]
})
export class UsersCtnComponent implements OnInit {

    /** [Observable] Résumé utilisateur pour l'affichage dans la liste (components/users-list) */
    private usersSummary$: Observable<IUserVM[]>;
    /** [Observable] L'ensemble des informations de l'utilisateur sélectionné (components/I-details) */
    private userInfo$: Observable<IUser>;
    /** */
    private currentUser: string;

    /** Appel UserService */
    constructor(private userService: UserService) { }
  
    /** A l'init le résumé utilisateur est chargé */
    ngOnInit() {
        this.usersSummary$ = this.userService.getUsers()
            .map(users => { console.log('users', users); return this.mapUserToUserVM(users)});
    }

    /** Endpoint de l'event venant de users-list. Appelle la fn qui permet de select les infos */
    private onSelectedUser (id: string): void {
        this.currentUser = id;
        this.getUserInfoForSelectedUser(id);
    }

    /** Retourne toutes les informations de l'utilisateur sélectionné grâce à son ID */
    getUserInfoForSelectedUser (id: string): void {
        this.userInfo$ = this.userService.getUsers()
            .mergeMap((response) =>response)
            .filter((user) => user._id === id)
    }

    /** Selecteur => Retourne l'_id et le nom de chaque utilisateur */
    private mapUserToUserVM (users: IUser[]): IUserVM[] {
        return _.map(users, u => _.pick(u, ['_id', 'name']));
    }

}