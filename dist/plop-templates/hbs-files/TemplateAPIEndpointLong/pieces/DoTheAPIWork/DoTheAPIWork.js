
import { long_http_request_endpointAICompletion } from "./pieces/long_http_request_endpointAICompletion.js";
import { long_http_request_endpointCustomJobLoop } from "./pieces/long_http_request_endpointCustomJobLoop.js";
import { long_http_request_endpointJobLoop } from "./pieces/long_http_request_endpointJobLoop.js";


export async function DoTheAPIWork(job) {
  // This is an example job that just slowly reports on progress
  // while doing no work. Replace this with your own job logic.
  // in this logic, progress is q percentage number varying between
  // 0 % and 100 %
  return long_http_request_endpointJobLoop(job);

  // This is a job that does some AI powered QNA stuff
  // return long_http_request_endpointAICompletion(job);

  // This is an empty job for you
  //return long_http_request_endpointCustomJobLoop(job);
}
