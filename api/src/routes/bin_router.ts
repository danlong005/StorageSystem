import { getBins, getBinById, createBin, searchBins } from '../services/bins_service';
import { Router } from 'express';

const router = Router();

// return a list of bins
router.get('/users/:id/bins', async (req: any, res: any) => {
    const bins: any = await getBins();
    
    res.status(200).json(bins);
});

// submit the form for the new bin creation
router.post('/users/:id/bins', async (req: any, res: any) => {
    const newBin: any = await createBin(req.body);

    res.status(201).json(newBin);
});

// find the specific bin and display the contents
router.get('/users/:id/bins/:binId', async (req: any, res: any) => {
    const binId: string = req.params.binId;
    const bin: any = await getBinById(binId);
    
    res.status(200).json(bin);
});

export default router;