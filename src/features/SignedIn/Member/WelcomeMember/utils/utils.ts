import i18n from '../../../../../locales/i18n';

export const getToday = () => {
  const currentDate = new Date();

  // Options pour formater la date avec le jour de la semaine et le mois en forme longue
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  };
  const language = i18n.language;

  // Formater la date selon les options spécifiées
  const dateFormatter = new Intl.DateTimeFormat(language, options);
  const formattedDate = dateFormatter.format(currentDate);

  // Mettre en majuscule la première lettre du jour de la semaine et du mois
  const firstUpperFormattedDate = formattedDate.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  return firstUpperFormattedDate;
};
