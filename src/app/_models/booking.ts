import { BookingClient } from './bookingClient';
import { BookingLocation } from './bookingLocation';
export class Booking {
    bookingId: number;    
    bookingTime: number;
    bookingPrice: number;    
    locationId: BookingLocation;
    tutenUserClient: BookingClient;
}