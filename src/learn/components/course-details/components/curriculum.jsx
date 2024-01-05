import React, {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import './styles.css'

const Curriculum = () => {

  const [expandedItems, setExpandedItems] = useState([]);

  const items = [
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet, consectetur',
      length: '2',
      children: [
        { id: 11, name: 'Sub-item 1.1' },
        { id: 12, name: 'Sub-item 1.2' },
      ],
    },
    {
      id: 2,
      name: 'Lorem ipsum dolor sit amet, consectetur',
      length: '1',
      children: [
        { id: 21, name: 'Sub-item 2.1' },
      ],
    },
  ];

  const handleItemClick = (itemId) => {
    setExpandedItems(
      expandedItems.includes(itemId)
        ? expandedItems.filter((id) => id !== itemId)
        : [...expandedItems, itemId]
    );
  };


  return (
    <div className='course--specific--curriculum'>
      <h3>Curriculum</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            <span>
              <p>{item.name}</p>
              <p>{item.length} Lectures</p>
              <FaChevronDown/>
            </span>
            {expandedItems.includes(item.id) && (
              <ul className='expanded--list'>
                {item.children.map((child) => (
                  <li key={child.id}>
                    <p>{child.name}</p>
                    <button>Download</button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
    </div>
  )
}

export default Curriculum
