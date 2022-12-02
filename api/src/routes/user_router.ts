import { Router } from 'express';

import { createUser } from '../services/user_service';

const router = Router();

router.post('/users', async (req: any, res: any) => {
    const user: any = await createUser(req.body);
    const error: any = user.error;

    if (error == null) {        
      res.status(201).json(user);
    } else {
      res.status(400).json(error);
    }
});

export default router;