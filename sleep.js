const sleep = async (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });
};
(async () => {
  let data = await sleep(1000);
  console.log("sleep", data);
})();
