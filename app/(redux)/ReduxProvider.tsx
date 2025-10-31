"use client";
import React from "react";
import { Provider } from "react-redux";
import Store from "./store";

type ReduxProviderType = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<ReduxProviderType> = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default ReduxProvider;
