import { authenticated } from '../services/jwt_service';

function authenticatedMiddleware(req: any, res: any, next: any): void {
    const jwt:string = req.header('Authorized').replace('Bearer ');

    if (authenticated(jwt)) {
        next();
    } else {
        res.status(401).json({});
    }
}

export {
    authenticatedMiddleware
}