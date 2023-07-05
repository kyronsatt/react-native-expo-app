import { AxiosPromise } from 'axios';

export interface ITestContext {
  testFunction: (testData: any) => AxiosPromise;
}
