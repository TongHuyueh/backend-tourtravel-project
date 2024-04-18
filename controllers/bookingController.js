import Booking from "../models/Booking.js"

//create new booking
export const createBooking = async(req, res) =>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()

        res.status(200).json({success: true, message: "Your tour is booked", data:savedBooking})

    }catch(err){
        res.status(500).json({success: false, message: "Failed to book, try again"})

    }
};
//delele booking
export const deleteBooking= async(req,res)=>{
    const id = req.params.id;

    try { 
        await Booking.findByIdAndDelete(id)        

        res.status(200).json({
            success: true,
            message:"Successfully deleted",            
        });
        
    }catch (err){
        res.status(500).json({
            success: false,
            message: "failed to delete",
        })
    }
}
//update booking
export const updateBooking = async(req,res)=>{

    const id = req.params.id;

    try { 
        const updatedBooking= await Booking.findByIdAndUpdate(id, {
            $set: req.body
        }, 
        {new:true})

        res.status(200).json({
            success: true,
            message:"Successfully updated",
            data: updatedBooking,
        });
        
    }catch (err){
        res.status(500).json({
            success: false,
            message: "failed to update",
        })
    }

};



//get single booking
export const getBooking = async(req, res) =>{
    const id =req.params.id

    try{
        const book = await Booking.findById(id);
        res.status(200).json({
            success: true,
            message: "Successful",
            data: book,
        });
    }catch (err) {
        res.status(404).json({success: false, message:"Not found"});
    }
}

//get all booking
export const getAllBooking = async(req, res) =>{ 
    
    try{
        const allbooking = await Booking.find({});
        res.status(200).json({
            success: true,
            message: "Successfully retrieved all bookings",
            data: allbooking,
        });

    }catch (err) {
        res.status(500).json({success: false, message:"Internal server error"});
    }
}