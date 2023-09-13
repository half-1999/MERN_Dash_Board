import React from "react";
import { useParams } from "react-router-dom";

const ViewProfile = ({ data }) => {
  const { id } = useParams();
  console.log(id);
  // Find the teacher profile with the matching ID
  const teacherProfile = data.find((teacher) => teacher.id === parseInt(id));
  console.log(teacherProfile);
  if (!teacherProfile) {
    return <div>Teacher Profile not found</div>;
  }

  // Now you can access the teacher's profile properties
  const {
    firstName,
    lastName,
    age,
    email,
    contact,
    address,
    gender,
    dob,
    idNo,
    bloodGroup,
    religion,
    class: teacherClass,
    section,
    shortBio,
    image,
  } = teacherProfile;

  return (
    <div>
      <h2>
        {firstName} {lastName}'s Profile
      </h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      {/* Display other teacher profile information here */}
    </div>
  );
};

export default ViewProfile;
