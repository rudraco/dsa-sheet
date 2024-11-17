const router = require('express').Router();
const healthRoute = require('./health-route');
const authRoutes = require('./auth');
const topicRoutes = require('./topic');

router.use('/health', healthRoute);
router.use('/auth', authRoutes);
router.use('/topics', topicRoutes);

module.exports = router;