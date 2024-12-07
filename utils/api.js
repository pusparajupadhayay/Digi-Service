// /utils/api.js
export const fetchData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch data');
  return await res.json();
};
