import { strings } from '../../../../../locales/i18n';

export function showDate(date: string): string {
  const moisAbbr = [
    strings('date.Jan'),
    strings('date.Feb'),
    strings('date.Mar'),
    strings('date.Apr'),
    strings('date.May'),
    strings('date.Jun'),
    strings('date.Jul'),
    strings('date.Aug'),
    strings('date.Sep'),
    strings('date.Oct'),
    strings('date.Nov'),
    strings('date.Dec')
  ];

  // Utilisation d'une expression régulière pour extraire le jour, le mois et l'année
  const match = date?.match(/(\d{2})-(\d{2})-(\d{4})/);

  if (!match) {
    throw new Error(
      'Format de date invalide. Le format attendu est JJ-MM-AAAA.'
    );
  }

  const [, jourStr, moisStr, anneeStr] = match;

  // Conversion en nombre entier
  const jour = parseInt(jourStr, 10);
  const mois = parseInt(moisStr, 10);
  const annee = parseInt(anneeStr, 10);

  // Création d'un objet Date avec les valeurs extraites
  const parsedDate = new Date(annee, mois - 1, jour);

  // Récupération des éléments formatés
  const jourFormatted = ('0' + parsedDate.getDate()).slice(-2);
  const moisFormatted = moisAbbr[parsedDate.getMonth()];
  const anneeFormatted = parsedDate.getFullYear();

  return jourFormatted + ' ' + moisFormatted + ' ' + anneeFormatted;
}

export function showDateWithoutYear(date: string): string {
  const moisAbbr = [
    strings('date.Jan').slice(0, 3),
    strings('date.Feb').slice(0, 3),
    strings('date.Mar').slice(0, 3),
    strings('date.Apr').slice(0, 3),
    strings('date.May').slice(0, 3),
    strings('date.Jun').slice(0, 3),
    strings('date.Jul').slice(0, 3),
    strings('date.Aug').slice(0, 3),
    strings('date.Sep').slice(0, 3),
    strings('date.Oct').slice(0, 3),
    strings('date.Nov').slice(0, 3),
    strings('date.Dec').slice(0, 3)
  ];

  // Utilisation d'une expression régulière pour extraire le jour, le mois et l'année
  const match = date?.match(/(\d{2})-(\d{2})-(\d{4})/);

  if (!match) {
    throw new Error(
      'Format de date invalide. Le format attendu est JJ-MM-AAAA.'
    );
  }

  const [, jourStr, moisStr, anneeStr] = match;

  // Conversion en nombre entier
  const jour = parseInt(jourStr, 10);
  const mois = parseInt(moisStr, 10);
  const annee = parseInt(anneeStr, 10);

  // Création d'un objet Date avec les valeurs extraites
  const parsedDate = new Date(annee, mois - 1, jour);

  // Récupération des éléments formatés
  const jourFormatted = ('0' + parsedDate.getDate()).slice(-2);
  const moisFormatted = moisAbbr[parsedDate.getMonth()];

  return jourFormatted + ' ' + moisFormatted;
}
