const filterLanguage = (arr, key, lang) => {
  for (let i = 0; i < arr.length; i++) {
    const LANG = arr[i].language.name;
    const VALUE = arr[i][key];

    if (LANG === lang) {
      return VALUE;
    }
  }
};

export default filterLanguage;
