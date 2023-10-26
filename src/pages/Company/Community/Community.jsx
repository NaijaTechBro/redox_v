import React from 'react';
import Navbar from '../../../components/Layout/Navbar/Navbar';
import Footer from '../../../components/Layout/Footer/Footer';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import './community.css'; // Updated filename to match standard naming conventions

const Community = () => {
  return (
    <>
      <Navbar />
      <div className="community">
        <h1>Kindly do follow us on all social media platforms to engage</h1>
        <div className="community-list">
          <p>
            <a
              href="https://t.me/pymachine"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaTelegram className="icon" />
            </a>
            Join Telegram
          </p>
          <p>
            <a
              href="https://www.twitter.com/playlottong"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaTwitter className="icon" />
            </a>
            Follow Us on X
          </p>

          <p>
            <a
              href="mailto:info@playlotto.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <AiOutlineMail className="icon" />
            </a>
            Send Us a Mail
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;



