import React from "react";
import { createContext } from "use-context-selector";
import axios, { AxiosPromise } from "axios";

import { API_HOST } from "@env";

import { parseTest } from "./parser";
import { ITestContext } from "./types";

export const TestContext = createContext({} as ITestContext);

interface Provider {
  children: React.ReactNode;
}

const TestProvider: React.FC<Provider> = ({ children }) => {
  const testApiClient = axios.create({
    baseURL: API_HOST,
  });

  function testFunction(testData: any): AxiosPromise {
    const testPayload = parseTest(testData);
    return testApiClient.post("/api/test", testPayload);
  }

  return (
    <TestContext.Provider
      value={{
        testFunction,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
