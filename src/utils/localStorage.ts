export const setAndPersistenceUserState = <T>(key: string, user: T) => {
  localStorage.setItem(key, JSON.stringify({ ...user }));
};

export const removeUserState = (key: string) => {
  localStorage.removeItem(key);
};
