/* PLOP_INJECT_IMPORT */

// un identifiant unique
import { GetUniqueID } from 'src/services/GetUniqueID/GetUniqueID';

// permet multilingue
import i18next from 'i18next';
import { SqliteReduxTutoriels } from 'src/reduxState/Tutoriels/TutorielsGetterSetter';

import { SqliteReduxTutorielsState } from 'src/reduxState/TutorielsState/TutorielsStateGetterSetter';

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * permet de donner un nom à notre item
 */
const GetTutorielsItemName = () => {
  /* PLOP_INJECT_CODE */
  const TypeSomePlz = i18next.t('TypeSomePlz');
  const TypeBabyName = i18next.t('TypeBabyName');

  // getter, contient le state actuel
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  const currentItemUniqueId = TutorielsState.itemUniqueId;
  const currentItem =
    SqliteReduxTutoriels.GetItemByUniqueID(currentItemUniqueId);

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: 'GetTutorielsItemName',

    type: 'text', //"text" || "number" || "choices" || "custom",

    // requis
    description: ({ answers, answer, answerIndex }) => {
      return TypeBabyName;
    },


    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: currentItem?.name ?? null,

    // la valeur par défaut a mettre dans le text input
    defaultValue: ({ answers, answer, answerIndex }) => {
      return answer?.value ?? currentItem?.name ?? undefined;
    },

    // les flex du message ou de la zone dinput
    messageFlex: 1,
    componentFlex: 1,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component dinput en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que linput est valide
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return answer?.value?.length > 0;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return TypeSomePlz;
    },
  };
};

export { GetTutorielsItemName };
