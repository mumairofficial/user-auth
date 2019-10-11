import React from 'react'

const navigationStyles = {
  width: '260px',
  height: 'calc(100vh - 58px)',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const menuItemsRender = (menuItems) => (
  <div>
    {menuItems.map(item => (
      <div key={item.key} 
        className="px-4 py-2 text-gray-700 font-semibold cursor-pointer hover:bg-gray-300">
        {item.label}
      </div>
    ))}
  </div>
)

const LeftNavigation = ({menuItems}) => {
  return (
    <div className="bg-gray-200" style={navigationStyles}>
      
      { menuItemsRender(menuItems) }

      <div className="px-4 pb-4">
        user and logout operation
      </div>
    </div>
  )
}

export default LeftNavigation;
