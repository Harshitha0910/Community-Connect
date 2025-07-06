import Complaint from "../models/Complaint.js";

// POST /api/complaints
// export const createComplaint = async (req, res) => {
//   const { title, description, category, image } = req.body;

//   try {
//     const complaint = await Complaint.create({
//       user: req.user._id,
//       title,
//       description,
//       category,
//       image,
//     });

//     res.status(201).json(complaint);
//   } catch (err) {
//     res.status(500).json({ message: "Server error while creating complaint." });
//   }
// };

export const createComplaint = async (req, res) => {
  const { title, description, category } = req.body;

  try {
    const complaint = await Complaint.create({
      user: req.user._id,
      title,
      description,
      category,
      image: req.file ? req.file.path : null, // store file path
    });

    res.status(201).json(complaint);
  } catch (err) {
    console.error("Complaint error:", err.message);
    res.status(500).json({ message: "Server error while creating complaint." });
  }
};


// GET /api/complaints/mine
export const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch your complaints." });
  }
};

// GET /api/complaints (admin only)
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({}).populate("user", "name email").sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch all complaints." });
  }
};

// PUT /api/complaints/:id/status
export const updateComplaintStatus = async (req, res) => {
  const { id } = req.params;
  const { statusStep } = req.body;

  try {
    const complaint = await Complaint.findById(id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found." });
    }

    complaint.statusStep = statusStep;
    await complaint.save();

    res.json({ message: "Status updated successfully", complaint });
  } catch (err) {
    res.status(500).json({ message: "Error updating complaint status." });
  }
};
