const Express = require('express');
const router = Express.Router();
const schemas=require('../models/schemas')

// router.get('/login', (req, res) => {
//     const str = [{
//         "name": "Maemoon"
//     }];
//     res.end(JSON.stringify(str));
// });

// module.exports = router;


// router.get('/login', async (req, res) => {
// const users=schemas.Users
// const userData=await users.find({}).exec
// if (userData){
//     res.send(JSON.stringify(userData))
// }
// });

// module.exports = router;
// Route handler for handling contact form submission
// router.post('/contact', async (req, res) => {
//   const { name, email, message } = req.body;
//   const contactData = { name, email, message };

//   try {
//     const newContact = new schemas.Contact(contactData);
//     await newContact.save();
//     res.send("Message sent successfully!");
//   } catch (err) {
//     console.error('Error saving contact:', err);
//     res.status(500).send("Failed to send message.");
//   }
// });

// Route handler for handling contact form submission
// Route handler for handling contact form submission
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const contactData = { name, email, message };

  try {
    const newContact = new schemas.Contact(contactData);
    await newContact.save();
    res.status(200).json({ success: true, message: 'Message sent' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});


router.get('/login', async (req, res) => {
    try {
      const users = schemas.Users; // Assuming Users is the correct model from schemas.js
      const userData = await users.find({}).exec();
      console.log('Retrieved data:', userData); // Log retrieved data
      if (userData) {
        res.json(userData); // Send data as JSON response
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

  router.get('/items', async (req, res) => {
    try {
      const Items=schemas.Item; 
      const items_data = await Items.find(); // Use the Item model to fetch items
      res.json(items_data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;