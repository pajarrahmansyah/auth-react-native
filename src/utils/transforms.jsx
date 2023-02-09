export const camelToUnderscore = key => {
  return key.replace(/([A-Z])/g, '_$1').toLowerCase();
};

export const camelToDash = key => {
  return key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const capitalize = data => {
  return data && data.charAt(0).toUpperCase() + data.slice(1);
};

export const dashToCamel = key => {
  return key.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

export const dashToCapital = key => {
  return key
    .split('-')
    .map(key => key.replace(key.charAt(0), key.charAt(0).toUpperCase()))
    .join('');
};

export const underscoreToCamel = key => {
  return key.replace(/_([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

export const phoneToString = data => {
  return data.replace(/\D+/g, '');
};

export const stringToUnderscore = key => {
  return key.split(' ').join('_').toLowerCase();
};

export const underscoreToString = key => {
  return key.split('_').join(' ');
};

export const truncate = (data = '', count, ellipsis = false) => {
  return ellipsis && data.length >= count ? data.slice(0, count) + '...' : data.slice(0, count);
};
