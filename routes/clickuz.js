const { Router } = require("express");
const Payment = require("../models/payment");
const router = Router();

router.post("/prepare", async (req, res) => {
  try {
    console.log(req.body);
    res.send({
      click_trans_id: req.body.click_trans_id,
      service_id: req.body.service_id,
      merchant_trans_id: req.body.merchant_trans_id,
      merchant_prepare_id: req.body.merchant_prepare_id,
      error: req.body.error,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/complete", async (req, res) => {
  try {
    if (req.body.error == 0) {
      const newPayment = new Payment({
        userId: "5sdaddsa45dsa64das5",
        click_trans_id: req.body.click_trans_id,
        merchant_trans_id: req.body.merchant_trans_id,
        merchant_prepare_id: req.body.merchant_prepare_id,
        sign_time: req.body.sign_time,
        sign_string: req.body.sign_string,
        click_paydoc_id: req.body.click_paydoc_id,
        amount: req.body.amount,
      });
      const payment = await newPayment.save();
      console.log(payment);
    }
    res.send({
      click_trans_id: req.body.click_trans_id,
      service_id: process.env.SERVICE_ID,
      merchant_trans_id: "Javokhir",
      merchant_prepare_id: 5,
      error: req.body.error,
      merchant_confirm_id: 5,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
