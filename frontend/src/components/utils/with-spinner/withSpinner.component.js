import React from "react";
import "./withSpinner.style.js";
import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.style";
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
