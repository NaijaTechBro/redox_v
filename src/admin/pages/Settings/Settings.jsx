import React, {useState} from 'react'
import './Settings.css'
import Overview from './Modals/Overview/Overview';
import Account from './Modals/Account/Account';

const Settings = ({sideMenuOpen}) => {
  const [settingModal, setSettingModal] = useState('Overview');

  return (
    <section className={sideMenuOpen ? 'admin--settings mobile--hidden' : 'admin--settings'}>
      <h2>Account Settings</h2>
      <ul>
        <li onClick={() => setSettingModal('Overview')} className={settingModal == 'Overview' ? 'active--modal' : ''}>Overview</li>
        <li onClick={() => setSettingModal('Account')} className={settingModal == 'Account' ? 'active--modal' : ''}>Account</li>
        <li onClick={() => setSettingModal('Security')} className={settingModal == 'Security' ? 'active--modal' : ''}>Security</li>
        <li onClick={() => setSettingModal('Preference')} className={settingModal == 'Preference' ? 'active--modal' : ''}>Preference</li>
      </ul>
      { settingModal == 'Overview' && <Overview/>}
      { settingModal == 'Account' && <Account/>}
      { settingModal == 'Security' && <article>
        Security
      </article>}
      { settingModal == 'Preference' && <article>
        Preference
      </article>}
    </section>
  )
}

export default Settings