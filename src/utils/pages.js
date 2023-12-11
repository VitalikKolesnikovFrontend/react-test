export const getPageCount = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};

export const getPagesArray = (totalPages) => {
  const result = [];
  for (i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
