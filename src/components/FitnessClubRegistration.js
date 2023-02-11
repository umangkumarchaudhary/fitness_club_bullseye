import React, { useState } from "react";

function FitnessClubRegistration() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleInputChange = e => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleAddMember = () => {
    setMembers([...members, newMember]);
    setNewMember({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div>
      <h1>Fitness Club Registration</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newMember.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={newMember.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={newMember.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={newMember.address}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button onClick={handleAddMember}>Add Member</button>
      <button>
        <a href="#member-list">View Member List</a>
      </button>
      <h2 id="member-list">Member List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FitnessClubRegistration;
