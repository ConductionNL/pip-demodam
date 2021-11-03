import React, {useEffect} from "react";
import "@utrecht/design-tokens/dist/theme/index.css";
import Layout from "./src/components/common/layout";
import {UrlContextWrapper} from "./src/context/urlContext";

export const wrapRootElement = ({ element }) => (
    <UrlContextWrapper>
      <div className="utrecht-document">
        <div class="utrecht-page">
          {element}
         </div>
      </div>
    </UrlContextWrapper>
)
