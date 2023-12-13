import React, {useState} from "react";
import './Overview.css'
import { CountryDropdown } from 'react-country-region-selector';
import { RegionDropdown } from 'react-country-region-selector';

const Overview = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');


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
    <form onSubmit={handleSubmit} className="admin--overview">
      <h3>Contact Information</h3>
      <p>Provide your legal name, home address and work mail.</p>
      <div className="form--fields">
        <input
          type="email"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="admin--email"
        />
      
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="Home Address"
          required
          className="admin--home"
        />
      
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="City"
          required
          className="admin--city"
        />
      
        <input
          type="text"
          id="state"
          name="state"
          value={state}
          onChange={handleChange}
          placeholder="State"
          required
          className="admin--state"
        />
      
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          required
          className="admin--postal"
        />
      
        {/* <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={handleChange}
          placeholder="Country"
          required
          className="admin--country"
        /> */}
        <CountryDropdown
          value={selectedCountry}
          onChange={(country) => {
            setSelectedCountry(country)
            setSelectedState('')
          }}
          className="admin--country"
        />
      </div>
      <button type="submit" className="primary-button">
        Update
      </button>
    </form>
  );
}

export default Overview;
