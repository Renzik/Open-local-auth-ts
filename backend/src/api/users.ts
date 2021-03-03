import { Router } from 'express';
const router = Router();

router.get('/me', (req, res, next) => {
  try {
    // user gets attached to the req.user in the deserialize user function.
    res.status(200).json(req.user);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
