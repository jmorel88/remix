import { Headers, Request, Response } from "@remix-run/core";

export { Headers, Request, Response };

/**
 * A "Not Found" response (404).
 */
export function notFound() {
  return new Response("", { status: 404 });
}

// TODO: Make these global so people can just use them in their loaders w/out
// importing anything
// global.Headers = Headers;
// global.Request = Request;
// global.Response = Response;