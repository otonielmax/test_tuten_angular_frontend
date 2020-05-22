import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    bookings = [];
    filterBookings = [];
    filter: string;
    sortAsc: boolean = false;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllBookings();
    }

    private loadAllBookings() {
        this.userService.getAll(this.currentUser.email, this.currentUser.sessionTokenBck)
            .pipe(first())
            .subscribe(data => 
                {
                    this.bookings = data;
                    this.assignCopy();
                });
    }

    assignCopy(){
        this.filterBookings = Object.assign([], this.bookings);
    }

    filterItem(value){
        if(!value){
            this.assignCopy();
        } // when nothing has typed
        this.filterBookings = Object.assign([], this.bookings).filter(
           item => item.bookingId.toString().toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }

    sortPrice() {
        this.sortAsc = !this.sortAsc;
        if (this.sortAsc) {
            this.filterBookings.sort((a, b) => a.bookingPrice -  b.bookingPrice);
        }
        else {
            this.filterBookings.sort((a, b) => b.bookingPrice - a.bookingPrice);
        }
    }
}