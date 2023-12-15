import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div onClick={handleToggle}>
        {item.name}
        {item.children && (
          <span>{isExpanded ? " - Collapse" : " - Expand"}</span>
        )}
      </div>
      {isExpanded && item.children && (
        <ul>
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MultilevelMenu = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default MultilevelMenu;
