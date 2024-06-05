// AddCourseForm.js
import { useState } from "react";
import "./AddForm.css";

const AddCourseForm = ({ onSave, onClose }) => {
  const [course, setCourse] = useState({
    name: "",
    description: "",
    image: null,
  });

  const { name, description, image } = course;

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setCourse({ ...course, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    // Convert course object to JSON string and append to formData
    formData.append("course", JSON.stringify({ name, description }));

    onSave(formData); // Call onSave callback with the form data

    // Clear form data after saving
    setCourse({
      name: "",
      description: "",
      image: null,
    });
  };

  const handleCancel = () => {
    onClose(); // Close the dialog on cancel
  };

  return (
    <div className="modal-body">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
            placeholder="Enter course name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            required
            placeholder="Enter course description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn add-btn me-2">
            <i className="bi bi-check2-circle me-1"></i>Save
          </button>
          <button type="button" className="btn add-btn" onClick={handleCancel}>
            <i className="bi bi-x-circle me-1"></i>Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
