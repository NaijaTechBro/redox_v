import React, {useState} from "react";
import './Overview.css'

const Overview = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'state':
        setState(value);
        break;
      case 'postalCode':
        setPostalCode(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
    alert(`
      Name: ${name}
      Address: ${address}
      City: ${city}
      State: ${state}
      Postal Code: ${postalCode}
      Country: ${country}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Contact Information</h3>
      <p>Provide your legal name, home address and work mail.</p>
      <div className="form-group">
        <label htmlFor="name">Email Address</label>
        <input
          type="email"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="yourname@example.com"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Home Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="Street Address"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="City"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={state}
          onChange={handleChange}
          placeholder="State"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
      </div>
      <button type="submit" className="primary-button">
        Update
      </button>
    </form>
  );
}

export default Overview;
