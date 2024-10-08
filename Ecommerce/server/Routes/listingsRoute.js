const express = require('express')
const router = express.Router()
const cors = require('cors');

const { createListing, getListings, deleteListing, updateListing, getOneListing, getAllListings, getFavorites,addToFavorites, removeFromFavorites } = require('../controllers/listingsController');
const { authMiddleware, verifyToken } = require('../middlewares/authMiddleware');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
        methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE']
    })
)

router.post('/create-listing', verifyToken, createListing);
router.get('/listings/:id', authMiddleware, getListings)
router.delete('/delete-listing/:id', authMiddleware, deleteListing)
router.post('/update-listing/:id', verifyToken, updateListing)
router.get('/get-listing-by-id/:id', getOneListing)
router.get('/explore', getAllListings)
router.get('/get-favorites', authMiddleware, getFavorites)
router.post('/add-to-favorites', authMiddleware, addToFavorites)
router.post('/remove-favorite', authMiddleware, removeFromFavorites)

module.exports = router