import { Router } from 'express';

import { authenticate } from '../services/authentication_service';
import { redirectIfLoggedIn } from '../middleware/authenticated_middleware';
import { createUser } from '../services/user_service';

const router = Router();

router.get('/auth/signin', redirectIfLoggedIn, (req: any, res: any) => {
    const data: any = {
        title: "Sign In",
        message: req.query.message
    };

    res.render('auth/signin', data);
});

router.get('/auth/signup', redirectIfLoggedIn, (req: any, res: any) => {
    const data = {
        title: "Sign Up",
        message: req.query.message
    };
    res.render('auth/signup', data);
});

router.post('/auth/signup', async (req: any, res: any) => {
    const user: any = await createUser(req.body);

    const error: any = user.error;

    if (error == null) {
        res.redirect('/auth/signin');
    } else {
        const message = 'Could not create user';
        res.redirect(`/auth/signup?message=${message}`);
    }
});

router.post('/auth/signin', async (req: any, res: any) => {
    const authentication: any = await authenticate(req.body);
    req.session.authentication = authentication;

    if (authentication.authenticated) {
        res.redirect(`/users/${authentication.id}/bins`);
    } else {
        const message = `Something is wrong with your username and password combo`;
        res.redirect(`/auth/signin?message=${message}`);
    }
});

router.get(`/auth/signout`, (req: any, res: any) => {
    req.session.destroy();
    const message = `You have been logged out`;
    res.redirect(`/auth/signin?message=${message}`);
})

export default router;