import cookies from 'js-cookie';

export const setCookie = (name, value, ...rest) => {
  cookies.set(name, value, { ...rest });
}

export const getCookie = (name, ...rest) => {
  return cookies.get(name, { ...rest });
}

export const removeCookie = (name, ...rest) => {
  return cookies.remove(name, { ...rest });
}