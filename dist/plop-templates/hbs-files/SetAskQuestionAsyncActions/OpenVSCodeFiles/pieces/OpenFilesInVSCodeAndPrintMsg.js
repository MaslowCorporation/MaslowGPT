import path from "path";
import { openVSCode } from "../../../../services/OpenVSCode/openVSCode.js";

function OpenFilesInVSCodeAndPrintMsg(answers, appRootPath) {
  const partyMsg = `🌞 🌼`;

  const maslowJSONPath = path.join(
    appRootPath,
    `${answers.GptQuestionName}`,
    `Maslow.json`
  );

  const question_txt_path = path.join(
    appRootPath,
    `${answers.GptQuestionName}`,
    `question.txt`
  );

  const answer_txt_path = path.join(
    appRootPath,
    `${answers.GptQuestionName}`,
    `${answers.AnswerFileName?.trim()}`
  );


  return partyMsg;
}
export { OpenFilesInVSCodeAndPrintMsg };
