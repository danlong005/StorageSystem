import { Router } from 'express';

import { createUser } from '../services/user_service';

const router = Router();

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

export default router;