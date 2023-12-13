import React from "react";
import './Account.css'


const Account = () => {
  return (
    <div className="banking-info">
      <h1 className="title">Banking Info</h1>
      <p className="description">The name on your bank account should be the same as the one you filled in to ensure easy validation.</p>
      <div className="form-group">
        <label htmlFor="bankName">Bank Name:</label>
        <input
          type="text"
          id="bankName"
          name="bankName"
          placeholder="Enter Bank Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          placeholder="Enter Account Number"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="accountName">Account Name:</label>
        <input
          type="text"
          id="accountName"
          name="accountName"
          placeholder="Enter Account Name"
          required
        />
      </div>
      <button className="update-button" type="button">
        Update
      </button>
    </div>
  );
}

export default Account;
