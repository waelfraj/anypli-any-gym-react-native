// Fonction pour formater une date en "dd-mm-yyyy"
export function formatDate(dateString: string | undefined) {
  // Créer un objet Date à partir de la chaîne de caractères de la date
  if (dateString === undefined) {
    return dateString;
  }
  const date = new Date(dateString);

  // Extraire les composantes de la date
  const day = date.getDate().toString().padStart(2, '0'); // Jour
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois (les mois commencent à 0)
  const year = date.getFullYear(); // Année

  // Concaténer les composantes de la date dans le format "dd-mm-yyyy"
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

export const concat = (string1: string, string2?: string) => {
  return string1 + ' ' + string2;
};
