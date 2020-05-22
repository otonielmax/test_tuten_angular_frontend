import { Booking } from './../_models/booking';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(adminEmail, token) {
        return this.http.get<Booking[]>
            (`${config.apiUrl}user/contacto@tuten.cl/bookings?current=true`,             
            {
                headers: {
                    'Accept': 'application/json',
                    'App': 'APP_BCK',
                    'Adminemail': adminEmail,                  
                    'Token': token
                }
            }
        );
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}