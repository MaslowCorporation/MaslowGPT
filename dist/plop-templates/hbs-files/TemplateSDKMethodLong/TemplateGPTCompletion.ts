import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

import { TestTemplateGPTCompletion } from "./pieces/TestTemplateGPTCompletion.js";
import { HandleError } from "./pieces/HandleError.js";
import { HandleFailedBackgroundWorkInit } from "./pieces/HandleFailedBackgroundWorkInit.js";
import { CheckBackgroundWork } from "./pieces/CheckBackgroundWork.js";
import { TemplateGPTCompletionStatus } from "./pieces/TemplateGPTCompletionStatus.js";

/**
 *  
 * Uncomment this code below, and run the 
 * 
 * npm run run-service TemplateGPTCompletion
 * 
 * command to test this SDK method quickly and dirty ;-)
 * 
 **
(async () => {
  await TestTemplateGPTCompletion();
})();
*/

/**
 * 
 * @param progressIntervalMs, 
 * how much time between each 
 * job progress callback update 
 * , in milliseconds
 * 
 * @param prompt, the question you want to ask to ChatGPT. A string.
 * 
 * @param apiKey, the API Key, a string.
 * 
 * @param params, an object of options, 
 * for your background job in the backend, 
 * if you need to customize the shizzle.
 * 
 * @param jobId, a job id, 
 * in order to keep polling for status of an existing job,
 * in case of a network disruption
 * 
 * @param onJobCreated, a callback that gives you the job id 
 * of the latest job you just created in the backend.
 * This job id allows you to check your background job, using 
 * the GetWorkStatus method, and also this method 
 * (using the jobId property).
 * 
 * @param onSuccess, a callback that gives you the fruit of your backend's  
 * hard work
 * 
 * @param onError, a callback when the shizzle got messy.
 *  
 * @param onProgress, a callback that gets called every progressIntervalMs
 * milliseconds, to give updates on the ongoing background job
 * 
 * @param print, do we print some basic logging info ?
 * 
 * @param model_chosen, the openai model you want to use.
 * "gpt-4", "gpt-3.5-turbo", etc...
 * 
 * @returns 
 */
export default async function TemplateGPTCompletion({
  model_chosen,
  prompt,
  apiKey,
  params,
  progressIntervalMs = 1000,
  onJobCreated,
  onSuccess,
  onError,
  onProgress,
  print = false,
  jobId,
}: {
  model_chosen?: string;
  prompt: string;
  apiKey: string;
  params?: any;
  progressIntervalMs: number,
  onProgress?: (progress: TemplateGPTCompletionStatus) => void;
  onSuccess?: (output: any) => void;
  onJobCreated?: (jobId: string) => void;
  onError?: (error: any) => void;
  print?: boolean;
  jobId?: string;
}): Promise<any> {
  try {
    print && console.log("Model chosen:", model_chosen);
    print && console.log("Let's start a HTTP request !");

    // if a jobId is given, then we go straight to the job checkup loop
    if (jobId) {

      print && console.log("Let's restart an ongoing job, amigo !");

      return CheckBackgroundWork({
        print,
        progressIntervalMs,
        apiKey,
        onSuccess,
        onError,
        onProgress,
        jobId
      });
    }

    // Do the initial HTTP request that starts the background work
    const response = await axios.post(
      `${Constants.api_base_url_local}/long_http_request_endpoint?apiKey=${apiKey}`,
      {
        prompt,
        params,
        model_chosen,
        test_timer_duration: params.test_timer_duration
      }
    );

    // if a background job was successfully started
    if (response.status >= 200 && response.status < 300) {
      // get the jobId of this freshly created job,
      // and run the job creation callback
      const freshJobIdResponse = response.data;
      const freshJobId = freshJobIdResponse.id;

      onJobCreated && await onJobCreated(freshJobId);

      // Periodically check for updates to handle the background job
      return CheckBackgroundWork({
        print,
        progressIntervalMs,
        apiKey,
        onSuccess,
        onError,
        onProgress,
        jobId: freshJobId
      });
    } else {
      // we ccouldn't create a background job for some reason.
      // Throw
      return HandleFailedBackgroundWorkInit(response, print, onError);
    }
  } catch (error: any) {
    // Handle network errors or exceptions
    return HandleError(print, error, onError);
  }
}

/**
 * 
 * @param apiKey, the API Key, a string.
 * 
 * @param params, an object of options, 
 * for your background job in the backend, 
 * if you need to customize the shizzle.
 * 
 * @param onSuccess, a callback that gives you the fruit of your backend's  
 * hard work
 * 
 * @param onError, a callback when the shizzle got messy.

 * @param print, do we print some basic logging info ?
 * 
 * @returns 
 *
 * Short version without background work
export default async function TemplateGPTCompletion({
  onSuccess,
  onError,
  apiKey,
  params,
  print = true,
}: {
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  apiKey: string;
  params?: any;
  print?: boolean;
}): Promise<string | null> {
  try {
    // 


    // Send the POST request with the FormData,
    // if your request uploads data to the server.
    //
    // otherwise, don't send the POST request with a FormData, 
    // but instead
    // send an object like this: { prop1, prop2, .... }
    const response = await axios.post(
      `${Constants.api_base_url_local}/long_http_request_endpoint?apiKey=${apiKey}`,

      // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
      // Uncomment the formData below, and remove the objet below it,
      // IF YOU WANT TO UPLOAD A FILE (photo, video, etc...)
      //formData

      // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
      // This objet is used if the request doesn't send a file
      // If your request sends a file to the server, 
      // remove the object below, and uncomment formData above
      { params }
    );

    const responseData = response.data;
    const prettyResponseData = JSON.stringify(responseData, null, 2);

    if (response.status >= 200 && response.status < 300) {
      const answer = responseData.answer;

      // Success (2xx response)
      print && console.log("Request succeeded!");

      print && console.log("Answer:", answer);

      if (onSuccess) {
        onSuccess(answer);
      }

      return answer;
    } else {
      // Handle error (non-2xx response)
      print && console.log("Request failed!");
      print && console.log("Status:", response.status);
      print && console.log("Response data:", prettyResponseData);

      if (onError) {
        onError(new Error("Request failed"));
      }

      return null;
    }
  } catch (error: any) {
    // Handle network errors or exceptions
    print && console.log("An error occurred:", error?.response?.data);

    if (onError) {
      onError(error);
    }

    return null;
  }
}
*/