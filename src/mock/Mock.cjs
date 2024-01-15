import Mock from "mockjs";

// "/mock/login"为接口路径，get为请求方式，options内可获取相关参数
// 如果不需要传递参数的时候直接写成"/mock/login"形式即可
// 如果需要传递参数，则需要用正则处理，否则会因为路径问题出现404的问题
Mock.mock("/mock/test", "get", (options) => {
  // 这里通过options获取接口参数
  // 不同的请求方式，获取参数的方式不同，但是都在options内部
  // 根据自己的需求进行处理即可
  console.log(options);
  return { a: 1 };
});

// 每日、月 出库标准产量
Mock.mock("/mock/clinkerQty", "get", (options) => {
  return {
    // 生成指定范围内的整数
    dailyClinkerQty: Mock.Random.integer(1000, 5000),
    monthlyClinkerQty: Mock.Random.integer(5000, 10000),
    unitStandard: 127,
  };
});
export default Mock;
