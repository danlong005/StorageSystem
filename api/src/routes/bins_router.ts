import { getBins, getBinById, createBin, searchBins } from '../services/bins_service';
import { Router } from 'express';

const router = Router();

// return a list of bins
router.get('/users/:id/bins', async (req: any, res: any) => {
    const bins: any = await getBins();
    const data: any = {
        bins,
        title: "List Bins",
        authentication: req.session.authentication
    };

    res.render('bins/index', data);
});

// show the page for entering the new bin
router.get('/users/:id/bins/new', (req: any, res: any) => {
    const data: any = {
        title: "Create Bin",
        id: req.params.id,
        authentication: req.session.authentication
    };
    res.render('bins/new', data);
});

// submit the form for the new bin creation
router.post('/users/:id/bins/new', async (req: any, res: any) => {
    const newBin: any = await createBin(req.body);

    const data: any = {
        title: "Bin Created",
        bin: newBin,
        id: req.params.id,
        authentication: req.session.authentication
    };

    res.render("bins/create", data);
});

// find the specific bin and display the contents
router.get('/users/:id/bins/:binId', async (req: any, res: any) => {
    const binId: string = req.params.binId;
    const bin: any = await getBinById(binId);
    const data: any = {
        bin,
        title: `List Bin ${bin.name}`,
        authentication: req.session.authentication
    };

    res.render('bins/show', data);
});

export default router;