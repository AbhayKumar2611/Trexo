import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="user-details-container">
        <div className="loading">Loading user details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-details-container">
        <div className="error">{error}</div>
        <button className="back-button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="user-details-container">
      <div className="user-details-card">
        <button className="back-button" onClick={handleGoBack}>
          ← Back to Users
        </button>

        <h1 className="user-name">{user.name}</h1>

        <div className="user-info-section">
          <h2>Contact Information</h2>
          <div className="info-row">
            <span className="info-label">Username:</span>
            <span className="info-value">{user.username}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email:</span>
            <span className="info-value">{user.email}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Phone:</span>
            <span className="info-value">{user.phone}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Website:</span>
            <span className="info-value">{user.website}</span>
          </div>
        </div>

        <div className="user-info-section">
          <h2>Address</h2>
          <div className="info-row">
            <span className="info-label">Street:</span>
            <span className="info-value">{user.address.street}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Suite:</span>
            <span className="info-value">{user.address.suite}</span>
          </div>
          <div className="info-row">
            <span className="info-label">City:</span>
            <span className="info-value">{user.address.city}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Zipcode:</span>
            <span className="info-value">{user.address.zipcode}</span>
          </div>
        </div>

        <div className="user-info-section">
          <h2>Company</h2>
          <div className="info-row">
            <span className="info-label">Name:</span>
            <span className="info-value">{user.company.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Catchphrase:</span>
            <span className="info-value">{user.company.catchPhrase}</span>
          </div>
          <div className="info-row">
            <span className="info-label">BS:</span>
            <span className="info-value">{user.company.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
