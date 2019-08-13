import React from "react";
import classNames from "classnames";
import { PillContent } from "./PillContent";

export const PillContentContainer = ({ PatientTypes, Steps, isActive }) => (
  <div class="tab-content" id="pills-tabContent">
    {PatientTypes.map((type, index) => (
      <div
        className={classNames("tab-pane", "pane", {
          active: isActive[index],
          show: isActive[index]
        })}
        id={`#pills-${type}`}
        role="tabpanel"
        aria-labelledby={`${type}-tab`}
      >
        {PillContent(Steps[PatientTypes[index]])}
      </div>
    ))}
  </div>
);
