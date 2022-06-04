const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('payed', {
        title: 'After Paid page'
    });
})

module.exports = router;