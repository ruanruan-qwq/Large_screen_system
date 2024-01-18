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

// 日产排行
Mock.mock("/mock/dailyClinkerQty", "get", (options) => {
  const min = 100;
  const max = 500;
  return [
    { value: Mock.Random.integer(min, max), name: "车间1# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间2# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间3# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间4# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间5# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间6# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间7# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间8# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间9# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间10# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间11# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间12# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间13# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间14# 混料车间2C" },
    { value: Mock.Random.integer(min, max), name: "车间15# 混料车间2C" },
  ];
});

// 车间历史产量
Mock.mock("/mock/historicalData", "get", (options) => {
  const min = 100;
  const max = 500;
  return [
    { year: 2020, value: Mock.Random.integer(min, max), unitStandard: "万吨" },
    { year: 2019, value: Mock.Random.integer(min, max), unitStandard: "万吨" },
    { year: 2021, value: Mock.Random.integer(min, max), unitStandard: "万吨" },
    { year: 2022, value: Mock.Random.integer(min, max), unitStandard: "万吨" },
  ];
});
export default Mock;
