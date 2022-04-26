/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Powered by </span>
        <a key="website" href="https://sortium.com">
          Sortium | Blockchain Studio
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
