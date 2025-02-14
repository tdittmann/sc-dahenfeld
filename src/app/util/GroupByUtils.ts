export class GroupByUtils {
  public static groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (collection) {
        collection.push(item);
      } else {
        map.set(key, [item]);
      }
    });
    return map;
  }
}