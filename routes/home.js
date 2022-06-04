const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Click Integration",
    service_id: process.env.SERVICE_ID,
    merchant_id: process.env.MERCHANT_ID,
    secret_key: process.env.SECRET_KEY,
    amount: 1000,
    transaction_param: "Javokhir",
    merchant_user_id: process.env.MERCHANT_USER_ID,
    return_url: process.env.RETURN_URL,
    card_type: "uzcard",
  });
});

module.exports = router;
