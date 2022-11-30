import { Router } from 'express';
const router = Router();

router.get('', (req: any, res: any) => {
    const data = {
        title: "Home"
    };
    res.render('home/index', data);
})

export default router;