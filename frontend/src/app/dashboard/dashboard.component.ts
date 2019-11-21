import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../modelClasses/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

  constructor(
    public authenticationService: AuthenticationService,
        private userService: UserService
  ) { }

  ngOnInit() {
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.currentUserSubscription.unsubscribe();
}

}
