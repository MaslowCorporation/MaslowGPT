import { MASLOW_API_KEY } from "../../../../../app_exports.js";
import { TerminalSpinner } from "../../../../services/TerminalSpinner/TerminalSpinner.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";

import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
import i18next from 'i18next';

// TODO: fix bug n°2

async function makeCHATGPTRequest(answers, appRootPath, printMsg = true) {
  const prompt = answers.AskQuestion;

  let error;

  const spinnerInstance = TerminalSpinner("Please wait... The work is going on.")

  const chat_gpt_output = await GetChatGPTOutput({
    model_chosen:
      getDataFromNPMMaslowJSON("ChooseAIModel") ?? "text-davinci-003",
    prompt:
      prompt,
    onSuccess: (chatGPTOutput) => { },
    onProgress: (progress) => {
      spinnerInstance.text = progress.progress;
    },
    onError: (e) => { error = e; },
    apiKey: MASLOW_API_KEY,
  });

  spinnerInstance.stop();


  if (chat_gpt_output) {
    answers.chat_gpt_output = chat_gpt_output.answer.result;

    return;
  } else {
    throw new Error(error?.response?.data ?? error?.message);
  }


}
export { makeCHATGPTRequest };
