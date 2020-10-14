import React from "react";
import PropTypes from "prop-types";
import { Ul, Ol, Dl, Li, DT, Dd } from "../../quarks/semantic/list";

function List({ is_order, is_description, children }) {
  console.log(children);
  if (is_order) {
    return (
      <Ol>
        {React.Children.map(children, (element) => (
          <Li>{element}</Li>
        ))}
      </Ol>
    );
  }
  if (is_description) {
    return (
      <Dl>
        {React.Children.map(children, (element) => (
          <>
            <DT>{element[0]}</DT>
            <Dd>{element[1]}</Dd>
          </>
        ))}
      </Dl>
    );
  }
  return (
    <Ul>
      {React.Children.map(children, (element) => (
        <Li>{element}</Li>
      ))}
    </Ul>
  );
}

List.propTypes = {
  is_order: PropTypes.bool,
  is_description: PropTypes.bool,
};

List.defaultProps = {
  is_order: false,
  is_description: false,
};

export default List;
