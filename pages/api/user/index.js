import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'
import onError from '@/middleware/errors'
import protect from '@/middleware/protect'
import { saveUser, getUser } from '@/routes/users/users.controller'

const router = nc({ onError });
dbConnect();

router.post(saveUser);

router
    .use(protect)
    .get(getUser);

export default router;