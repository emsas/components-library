import React from "react";
import PropTypes from "prop-types";
import {
  Article,
  Aside,
  Footer,
  Header,
  Main,
  Nav,
  Section,
  Div,
} from "../../quarks/semantic/content";

function Content({
  is_article,
  is_aside,
  is_footer,
  is_header,
  is_main,
  is_nav,
  is_section,
  children,
}) {
  if (is_article) {
    return <Article>{children}</Article>;
  }
  if (is_aside) {
    return <Aside>{children}</Aside>;
  }
  if (is_footer) {
    return <Footer>{children}</Footer>;
  }
  if (is_header) {
    return <Header>{children}</Header>;
  }
  if (is_main) {
    return <Main>{children}</Main>;
  }
  if (is_nav) {
    return <Nav>{children}</Nav>;
  }
  if (is_section) {
    return <Section>{children}</Section>;
  }
  return <Div>{children}</Div>;
}

Content.propTypes = {
  is_article: PropTypes.bool,
  is_aside: PropTypes.bool,
  is_footer: PropTypes.bool,
  is_header: PropTypes.bool,
  is_main: PropTypes.bool,
  is_nav: PropTypes.bool,
  is_section: PropTypes.bool,
};

Content.defaultProps = {
  is_article: false,
  is_aside: false,
  is_footer: false,
  is_header: false,
  is_main: false,
  is_nav: false,
  is_section: false,
};

export default Content;
