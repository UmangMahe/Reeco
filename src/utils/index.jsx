class Utils {
  static updateTableWithId(table, data, setTable, key) {
    const newTable = table.map((item) => {
      if (item[key] === data[key]) {
        return data;
      }
      return item;
    });
    setTable(newTable);
  }
}

export default Utils;
