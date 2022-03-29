Promise.protoType.MyAll = (...args) => {
  return new Promise((resolve, rejected) => {
    let len = args.length;
    let vaile = 0;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let promise = Promise.resolve(args[i]);

      promise.then((res) => {
        vaile += 1;
        arr.push(res);
        if (vaile === len) {
          resolve(arr);
        }
      });
      promise.catch((err) => {
        rejected(err);
      });
    }
  });
};
