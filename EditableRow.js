import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter first name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Last Name..."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter Email..."
          name="Email"
          value={editFormData.Email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="passwor"
          required="required"
          placeholder="Enter an email..."
          name="Password"
          value={editFormData.Password}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;