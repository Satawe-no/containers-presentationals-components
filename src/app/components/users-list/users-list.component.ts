// Angular
import { Component, OnInit, Input, Output, ViewChild, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

// Models
import { IUserVM } from '../../containers/users-ctn/user.vm';

/**
 * UsersListComponent a pour responsabilité : 
 * - L'affichage des résumés d'information des utilisteurs
 * - De prévenir le container (users-vm) du chagement d'état (click sur le nom pour afficher les détails de l'user)
 */
@Component({
    selector: 'users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  
    /** Reçoit la liste des utilisateurs */
    @Input()
    users: IUserVM[] = [];

    /** Est utilisé pour marquer l'utilisateur sélectionné */
    @Input()
    currentSelectedUserId: string;

    /** Permet d'envoyer au parent l'utilisateur sélectionné */
    @Output()
    selectedUser: EventEmitter<any> = new EventEmitter();

    constructor() {}

    /** Envoie l'id du user sélectionné */
    selectUser (userId: string): void {
        this.selectedUser.next(userId);
    }

}
