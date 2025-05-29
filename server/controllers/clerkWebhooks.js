import User from '../models/User.js';
import {Webhook} from "svix";

const clerkWebHooks = async (req, res) => {
  try {
    // create a svix instance with clerk webhook secret
    const wbook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    
    // getting headers 
    const headers  = {
      "svix-id": req.headers['svix-id'],
      "svix-timestamp": req.headers['svix-timestamp'],
      "svix-signature": req.headers['svix-signature']
    };

    // Verify the headers 
    await wbook.verify(JSON.stringify(req.body), headers);

    // getting data from request body 

    const {data , type } = req.body;

    const userData = {
      id: data.id,
      email: data.emailAddresses[0].emailAddress,
      username :data.firstName + ' ' + data.lastName,      
      imageUrl: data.imageUrl,
    };
    // switch cases for different events 
    switch (type) {
      case 'user.created':
        // create a new user in the database
        const newUser = new User(userData);
        await newUser.save();
        break;
      case 'user.updated':
        // update the user in the database
        await User.findOneAndUpdate({ id: data.id }, userData, { new: true });
        break;
      case 'user.deleted':
        // delete the user from the database
        await User.findOneAndDelete({ id: data.id });
        break;
      default:
        console.log('Unhandled event type:', type);
    }
    res.JSON({success: true, message: 'Webhook processed successfully'});



  }catch (error) {
    console.error('Error processing webhook:', error);
    res.json(500).json({success: false, message: 'Internal Server Error'});

  }
}

export default clerkWebHooks;
// This code handles Clerk webhooks for user creation, update, and deletion.
    