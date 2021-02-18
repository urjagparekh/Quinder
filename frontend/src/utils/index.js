export const getQueryArg = name => {
  let url = window.location.href;
  let url1 = url.split("?")[1];
  let dataarr = url1.split("&&");
  let data = dataarr.find(a => a.includes(name));
  return data.split("=")[1];
};
