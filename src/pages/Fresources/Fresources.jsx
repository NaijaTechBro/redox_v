import React from 'react'
import Footer from '../../components/Layout/Footer/Footer'
import './fresource.css'
import Navbar from '../../components/Layout/Navbar/Navbar'
import { useTheme } from '../../context/ThemeContext'

const Fresources = () => {
  const { darkMode, toggleTheme } = useTheme()
  
  return (
    <>
    <Navbar />
    <div className={darkMode ? "dark_mode free-resources" : "free-resources"}>
      <div className="content">
        <h1>Trading Tools</h1>
<h4>Last updated: March 21st, 2023</h4>
<div className="list">
<li>
I've curated all my recommendations into one place for you.
</li>
<li>1. If you enjoyed this, please share it with others😱
</li>
<li>You want to understand the risks involved with each investment on every of your assets.
</li>
<li>
You want to learn from someone that will share useful information and NOT dump coins on you and feed you wrong information.

</li>
</div>

<h4>My Twitter Threads</h4>

<div className="twitter-section">
<iframe className="airtable-embed" src="https://airtable.com/embed/shrHxvqP0LYgGhTTr?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>

<h4>Recommended Crypto Tools</h4>
<div className="subsection">
<iframe className="airtable-embed" src="https://airtable.com/embed/shr7qWrwMRNW9VZgx?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>
<h2>Skill Tree</h2>
<div className="subsection">
<iframe className="airtable-embed" src="https://airtable.com/embed/shrhIzH4tPZ3c6JuF?backgroundColor=purple&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>
<h2>Investing Principles</h2>
<div className="subsection">
<iframe class="airtable-embed" src="https://airtable.com/embed/shrsIDdbhcE001eyo?backgroundColor=purple&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>
<h2>Recommended Books</h2>
<div className="subsection">
<iframe class="airtable-embed" src="https://airtable.com/embed/shr2pdfCU1kxPIxO3?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>
<h2>Recommended Youtube Channels</h2>
<div className="subsection">
<iframe class="airtable-embed" src="https://airtable.com/embed/shrOR6wll0XXrJ3N1?backgroundColor=orange&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>
<h2>Recommended Podcast</h2>
<div className="subsection">
<iframe class="airtable-embed" src="https://airtable.com/embed/shrx8qph8Nl3FSe6U?backgroundColor=purple&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>
<h2>Glossary</h2>
<div className="subsection">
<iframe class="airtable-embed" src="https://airtable.com/embed/shrYT20rChJiv0DBu?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
</div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Fresources