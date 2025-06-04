export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};

export const splitNumber = (num: string): string => {
  let result = '';
  for (let i = 0; i < num.length; i++) {
    result += num[i];

    if ((i + 1) % 4 === 0 && i !== num.length - 1) {
      result += ' ';
    }
  }
  return result;
}