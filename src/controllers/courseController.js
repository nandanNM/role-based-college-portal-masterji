import Course from "../models/Course.js";
import Material from "../models/Material.js";

export const createCourse = async (req, res) => {
  try {
    const { name, code, faculty } = req.body;
    if (!name || !code || !faculty) {
      return res
        .status(400)
        .json({ message: "Name, code, and faculty are required." });
    }
    const course = new Course({ name, code, faculty });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("faculty", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const addMaterial = async (req, res) => {
  try {
    const { title, fileUrl } = req.body;
    const { courseId } = req.params;
    if (!title || !fileUrl) {
      return res
        .status(400)
        .json({ message: "Title and fileUrl are required." });
    }
    const material = new Material({
      course: courseId,
      title,
      fileUrl,
      uploadedBy: req.user.id,
    });
    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getMaterials = async (req, res) => {
  try {
    const { courseId } = req.params;
    const materials = await Material.find({ course: courseId }).populate(
      "uploadedBy",
      "name email"
    );
    res.json(materials);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
