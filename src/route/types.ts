import { IncomingMessage, ServerResponse } from 'http'

export declare type Handle = (req: IncomingMessage, res: ServerResponse) => any;

export declare type Methods = {
  get?: Handle;
  post?: Handle;
  patch?: Handle;
  delete?: Handle;
};
