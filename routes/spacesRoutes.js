// const express = require('express');
// const router = express.Router();
// const Space = require('../models/Space');
// router.get('/spaces', async (req, res) => {
//   try {
//     const spaces = await Space.find();
//     res.json(spaces);
//   } catch (err) {
//     console.error('Error fetching spaces:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // POST /admin/spaces - Create a new space
// router.post('/spaces', async (req, res) => {
//   try {
//     const { name, location, capacity, amenities, description } = req.body;
//     const newSpace = new Space({
//       name,
//       location,
//       capacity,
//       amenities,
//       description,
//       date,
//       time
//     });
//     await newSpace.save();
//     res.status(201).json(newSpace);
//   } catch (err) {
//     console.error('Error creating space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // PUT /admin/spaces/:id - Update a space
// router.put('/spaces/:id', async (req, res) => {
//   try {
//     const { name, location, capacity, amenities, description,date,time } = req.body;
//     const updatedSpace = await Space.findByIdAndUpdate(
//       req.params.id,
//       { name, location, capacity, amenities, description,date,time },
//       { new: true }
//     );
//     if (!updatedSpace) {
//       return res.status(404).json({ message: 'Space not found' });
//     }
//     res.json(updatedSpace);
//   } catch (err) {
//     console.error('Error updating space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // DELETE /admin/spaces/:id - Delete a space
// router.delete('/spaces/:id', async (req, res) => {
//   try {
//     const deletedSpace = await Space.findByIdAndDelete(req.params.id);
//     if (!deletedSpace) {
//       return res.status(404).json({ message: 'Space not found' });
//     }
//     res.json({ message: 'Space deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = router;





const express = require('express');
const router = express.Router();
const Space = require('../models/Space');

// GET /spaces - Fetch all spaces
router.get('/spaces', async (req, res) => {
  try {
    const spaces = await Space.find();
    res.json(spaces);
  } catch (err) {
    console.error('Error fetching spaces:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /admin/spaces - Create a new space
// router.post('/spaces', async (req, res) => {
//   try {
//     const { name, location, capacity, amenities, description, date, times } = req.body;
//     const newSpace = new Space({
//       name,
//       location,
//       capacity,
//       amenities: amenities.split(',').map(item => item.trim()), // Convert comma-separated string to array
//       description,
//       date,
//       times
//     });
//     await newSpace.save();
//     res.status(201).json(newSpace);
//   } catch (err) {
//     console.error('Error creating space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
router.post('/spaces', async (req, res) => {
  try {
    const { name, location, capacity, amenities, description, date, times } = req.body;

    // Ensure amenities is an array
    const amenitiesArray = Array.isArray(amenities) ? amenities : amenities.split(',').map(item => item.trim());

    const newSpace = new Space({
      name,
      location,
      capacity,
      amenities: amenitiesArray,
      description,
      date,
      times
    });
    await newSpace.save();
    res.status(201).json(newSpace);
  } catch (err) {
    console.error('Error creating space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT /admin/spaces/:id - Update a space
// router.put('/spaces/:id', async (req, res) => {
//   try {
//     const { name, location, capacity, amenities, description, date, times } = req.body;
//     const updatedSpace = await Space.findByIdAndUpdate(
//       req.params.id,
//       {
//         name,
//         location,
//         capacity,
//         amenities: amenities.split(',').map(item => item.trim()), // Convert comma-separated string to array
//         description,
//         date,
//         times
//       },
//       { new: true }
//     );
//     if (!updatedSpace) {
//       return res.status(404).json({ message: 'Space not found' });
//     }
//     res.json(updatedSpace);
//   } catch (err) {
//     console.error('Error updating space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
router.put('/spaces/:id', async (req, res) => {
  try {
    const { name, location, capacity, amenities, description, date, times } = req.body;

    // Ensure amenities is an array
    const amenitiesArray = Array.isArray(amenities) ? amenities : amenities.split(',').map(item => item.trim());

    const updatedSpace = await Space.findByIdAndUpdate(
      req.params.id,
      { name, location, capacity, amenities: amenitiesArray, description, date, times },
      { new: true }
    );
    if (!updatedSpace) {
      return res.status(404).json({ message: 'Space not found' });
    }
    res.json(updatedSpace);
  } catch (err) {
    console.error('Error updating space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE /admin/spaces/:id - Delete a space
router.delete('/spaces/:id', async (req, res) => {
  try {
    const deletedSpace = await Space.findByIdAndDelete(req.params.id);
    if (!deletedSpace) {
      return res.status(404).json({ message: 'Space not found' });
    }
    res.json({ message: 'Space deleted successfully' });
  } catch (err) {
    console.error('Error deleting space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
