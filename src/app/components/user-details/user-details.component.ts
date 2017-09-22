// Angular
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

// Models
import { IUser } from '../../shared/models/user';

/**
 * UserDetailsComponent s'occupe de l'affichage des détails
 */
@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
    /** Reçoit les détails de l'utilisateur */
    @Input()
    details: IUser;  

    constructor() { }
}
