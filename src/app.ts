import { Router } from 'express';

const router = Router();

router.get('/hello', (req, res) => {
  res.send({
    data: 'Hello',
  });
});

export default router;
