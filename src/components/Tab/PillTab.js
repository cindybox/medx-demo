import React from "react";
import classNames from "classnames";
import { ButtonStep } from "../globals/Button.js";

export const PillTab = ({ PatientTypes, isActive, toggleTab, style }) => (
  <div className="row mx-auto mt-5">
    <ul
      class="nav nav-pills mb-3 mx-auto d-flex justify-content-center"
      id="pills-tab"
      role="tablist"
    >
      {PatientTypes.map((type, index) => (
        <li class="nav-item">
          <ButtonStep
            isActive={isActive[index]}
            onClick={() => {
              toggleTab(type);
            }}
            fontsize={style.fontsize}
            width={style.width}
            background={style.background}
          >
            <a
              className={classNames("", { active: isActive[index] })}
              id={`${type}-tab`}
              data-toggle="pill"
              href={`#pills-${type}`}
              role="tab"
              aria-controls={type}
              aria-selected="true"
            >
              {type}
            </a>
          </ButtonStep>
        </li>
      ))}
    </ul>
  </div>
);
