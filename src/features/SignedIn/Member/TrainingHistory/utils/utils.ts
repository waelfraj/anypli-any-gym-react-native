interface AgendaItems {
  [date: string]: any[];
}

interface FormattedAgendaItems {
  [date: string]: any[];
}

export const formatAgendaItemsData = (
  items: AgendaItems
): FormattedAgendaItems => {
  const result: FormattedAgendaItems = {};

  // Parcourir chaque date dans les données d'items
  for (const date in items) {
    if (items.hasOwnProperty(date)) {
      const itemList = items[date];

      // Initialiser la liste des objets pour cette date
      const formattedItemList: any[] = [];

      // Parcourir chaque objet dans la liste pour cette date
      for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i];

        // Ajouter l'objet à la liste des objets formatés
        formattedItemList.push(item);
      }

      // Ajouter la liste des objets formatés à la date correspondante dans le résultat
      result[date] = formattedItemList;
    }
  }

  return result;
};
