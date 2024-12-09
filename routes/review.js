const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utis/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const ExpressError = require("../utis/ExpressError.js");
const reviewController = require("../controllers/review.js");

// Post Review Route
router.post("/",validateReview,isLoggedIn, wrapAsync(reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destoryReview));

module.exports = router;