import express from 'express';
const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
  try {
    // Your room fetching logic here
    res.json({ message: 'Rooms fetched successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single room
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Your single room fetching logic here
    res.json({ message: 'Room fetched successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 