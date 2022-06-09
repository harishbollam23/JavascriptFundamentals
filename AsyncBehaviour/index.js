let total = 0;
const fakeAPI = (data) => {
  data = data ?? 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      total += data;
      resolve(total);
    }, 1000);
  });
};
const synchronousCalls = [fakeAPI, fakeAPI, fakeAPI, fakeAPI, fakeAPI, fakeAPI];
const syncData = () => {
  return synchronousCalls.reduce((prev, next) => {
    return prev.then((data) => next(data));
  }, Promise.resolve());
};
(async () => {
  const result = await syncData();
  console.log("result data", result);
})();
