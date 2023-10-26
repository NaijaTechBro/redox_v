// // NotificationIcon.js

// import React, { useState } from 'react';
// import { FaBell } from 'react-icons/fa';
// import './notification.css';

// const NotificationIcon = () => {
//   const [notifications, setNotifications] = useState([]); // Store notifications
//   const [showNotifications, setShowNotifications] = useState(false);

//   // Function to handle a new notification
//   const handleNewNotification = () => {
//     // You can add your logic to push new notifications here
//     const newNotification = 'New Notification';
//     setNotifications([...notifications, newNotification]);
//   };

//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   };

//   return (
//     <div className="notification-icon-container">
//       <div className="notification-icon" onClick={toggleNotifications}>
//         <FaBell />
//         {notifications.length > 0 && (
//           <div className="notification-badge">{notifications.length}</div>
//         )}
//       </div>
//       {showNotifications && (
//         <div className="notification-dropdown">
//           {notifications.map((notification, index) => (
//             <div key={index} className="notification-message">
//               {notification}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationIcon;






import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import './notification.css';

const NotificationIcon = () => {
  const [notifications, setNotifications] = useState([]); // Store notifications

  // Function to handle a new notification
  const handleNewNotification = () => {
    // You can add your logic to push new notifications here
    const newNotification = 'New Notification';
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div className="notification-icon-container">
      <div className="notification-icon" onClick={handleNewNotification}>
        <FaBell />
      </div>
      {notifications.length > 0 && (
        <div className="notification-badge">{notifications.length}</div>
      )}
    </div>
  );
};

export default NotificationIcon;
