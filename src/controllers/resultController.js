import Result from "../models/Result.js";
import User from "../models/User.js";

export const createResult = async (req, res) => {
  try {
    const { student, subject, marks } = req.body;
    if (!student || !subject || marks == null) {
      return res
        .status(400)
        .json({ message: "Student, subject, and marks are required." });
    }
    const result = new Result({
      student,
      subject,
      marks,
      publishedBy: req.user.id,
    });
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getResult = async (req, res) => {
  try {
    const { studentId } = req.params;
    if (req.user.role === "student" && req.user.id !== studentId) {
      return res.status(403).json({ message: "Access denied." });
    }
    const results = await Result.find({ student: studentId }).populate(
      "student",
      "name email"
    );
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
