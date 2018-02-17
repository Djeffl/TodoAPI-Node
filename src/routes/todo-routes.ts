import { BaseRouter } from './base-router';
export class ReservarionRoutes extends BaseRouter {
    constructor(private reservationService: ReservationService, private roomService: RoomService) {
        super();
        this.registerRoutes();
    }

    private registerRoutes() {

    }
}
