// Breadcrumb.js

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItems = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 5px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
`;

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <Items>
          {items.map((item, index) => (
            <ListItems className="breadcrumb-item" key={index}>
              {item.link ? (
                <>
                  <LinkTo to={item.link}>{item.text}</LinkTo>
                  {index < items.length - 1 && (
                    //   (
                    //     <GoChevronRight style={{ top: "5px" }} />
                    //   )
                    <>/</>
                  )}
                </>
              ) : (
                <span>{item.text}</span>
              )}
            </ListItems>
          ))}
        </Items>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
