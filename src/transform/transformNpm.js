export const tranformItemsData = list =>
  list.map((item) => ({
    ...item,
    avatar: item.owner.avatar,
}));
export const tranformInfoVersion = list => ` ${list[list.length-1]} - ${list[0]}`;
export const transformTotal = ( total, showItems ) =>  (total * showItems) - 10;
