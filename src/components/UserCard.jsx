// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./UserCard.css";

// const UserCard = ({ user }) => {
//   return (
//     <div className="user-card">
//       <h3>{user.name}</h3>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Website: {user.website}</p>
//     </div>
//   );
// };

// const UserCardsSection = ({ users }) => {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "tab1":
//         return (
//           <div className="tab-content">
//             <h2>Level 1: Customer Support</h2>
//             <div className="customer-details">
//               <div className="detail-row">
//                 <span className="detail-label">Name:</span>
//                 <span className="detail-value">Leanne Graham</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Email:</span>
//                 <span className="detail-value">Sincere@april.biz</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Phone:</span>
//                 <span className="detail-value">1-770-736-8031 x56442</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Website:</span>
//                 <span className="detail-value">hildegard.org</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Company:</span>
//                 <span className="detail-value">
//                   Romaguera-Crona (Multi-layered client-server
//                   neural-net)harness real-time e-markets
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       case "tab2":
//         return (
//           <div className="tab-content">
//             <h2>Level 2: Customer Support</h2>
//             <div className="customer-details">
//               <div className="detail-row">
//                 <span className="detail-label">Name:</span>
//                 <span className="detail-value">Chelsey Dietrich</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Email:</span>
//                 <span className="detail-value">Lucio_Hettinger@annie.ca</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Phone:</span>
//                 <span className="detail-value">(254)954-1289</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Website:</span>
//                 <span className="detail-value">demarco.info</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Company:</span>
//                 <span className="detail-value">
//                   Keebler LLC (User-centric fault-tolerant solution),
//                   revolutionize end-to-end systems
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       case "tab3":
//         return (
//           <div className="tab-content">
//             <h2>Level 3: Customer Support</h2>
//             <div className="customer-details">
//               <div className="detail-row">
//                 <span className="detail-label">Name:</span>
//                 <span className="detail-value">Mrs. Dennis Schulist</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Email:</span>
//                 <span className="detail-value">Karley_Dach@jasper.info</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Phone:</span>
//                 <span className="detail-value">1-477-935-8478 x6430</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Website:</span>
//                 <span className="detail-value">ola.org</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Company:</span>
//                 <span className="detail-value">
//                   Considine-Lockman (Synchronised bottom-line interface),
//                   e-enable innovative applications
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="user-cards-section">
//       <div className="section-header">
//         <h2>How can I register a complaint?</h2>
//         <h3>User Cards:</h3>
//       </div>

//       <div className="carousel-container">
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           autoPlay={true}
//           autoPlaySpeed={3000}
//           keyBoardControl={true}
//           customTransition="all .5s"
//           transitionDuration={500}
//         >
//           {users.map((user) => (
//             <UserCard key={user.id} user={user} />
//           ))}
//         </Carousel>
//       </div>

//       <div className="bank-account-section">
//         <h2>Your NSDL Payments Bank account</h2>
//         <p>This includes saving, corporate, and salary accounts.</p>

//         <div className="tabs-container">
//           <div className="tab-buttons">
//             <button
//               className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
//               onClick={() => setActiveTab("tab1")}
//             >
//               NSD
//             </button>
//             <button
//               className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
//               onClick={() => setActiveTab("tab2")}
//             >
//               Credit Card
//             </button>
//             <button
//               className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
//               onClick={() => setActiveTab("tab3")}
//             >
//               Loans
//             </button>
//           </div>

//           <div className="tab-content-container">{renderTabContent()}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCardsSection;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/userDetails/${user.id}`);
  };

  return (
    <div className="user-card" onClick={handleCardClick}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

const UserCardsSection = ({ users }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5, // Changed to show exactly 5 cards in desktop view
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div className="tab-content">
            <h2>Level 1: Customer Support</h2>
            <div className="customer-details">
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Leanne Graham</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">Sincere@april.biz</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">1-770-736-8031 x56442</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Website:</span>
                <span className="detail-value">hildegard.org</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Company:</span>
                <span className="detail-value">
                  Romaguera-Crona (Multi-layered client-server
                  neural-net)harness real-time e-markets
                </span>
              </div>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className="tab-content">
            <h2>Level 2: Customer Support</h2>
            <div className="customer-details">
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Chelsey Dietrich</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">Lucio_Hettinger@annie.ca</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">(254)954-1289</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Website:</span>
                <span className="detail-value">demarco.info</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Company:</span>
                <span className="detail-value">
                  Keebler LLC (User-centric fault-tolerant solution),
                  revolutionize end-to-end systems
                </span>
              </div>
            </div>
          </div>
        );
      case "tab3":
        return (
          <div className="tab-content">
            <h2>Level 3: Customer Support</h2>
            <div className="customer-details">
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Mrs. Dennis Schulist</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">Karley_Dach@jasper.info</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">1-477-935-8478 x6430</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Website:</span>
                <span className="detail-value">ola.org</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Company:</span>
                <span className="detail-value">
                  Considine-Lockman (Synchronised bottom-line interface),
                  e-enable innovative applications
                </span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="user-cards-section">
      <div className="section-header">
        <h2>How can I register a complaint?</h2>
        <h3>User Cards:</h3>
      </div>

      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          itemClass="carousel-item"
        >
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Carousel>
      </div>

      <div className="bank-account-section">
        <h2>Your NSDL Payments Bank account</h2>
        <p>This includes saving, corporate, and salary accounts.</p>

        <div className="tabs-container">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => setActiveTab("tab1")}
            >
              NSD
            </button>
            <button
              className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => setActiveTab("tab2")}
            >
              Credit Card
            </button>
            <button
              className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
              onClick={() => setActiveTab("tab3")}
            >
              Loans
            </button>
          </div>

          <div className="tab-content-container">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCardsSection;
