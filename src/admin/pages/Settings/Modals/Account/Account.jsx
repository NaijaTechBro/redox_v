import React from "react";
import './Account.css'


const Account = () => {
  return (
    <div className="admin--account">
      <h3 >Banking Info</h3>
      <p>The name on your bank account should be the same as the one you filled in to ensure easy validation.</p>
      <div className="form--fields">
        <input
          type="text"
          id="bankName"
          name="bankName"
          placeholder="Enter Bank Name"
          required
        />
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          placeholder="Enter Account Number"
          required
        />
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
