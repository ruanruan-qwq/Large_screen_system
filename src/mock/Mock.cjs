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

// 原材料日购进&消耗
Mock.mock("/mock/rawMaterialConsumption", "get", (options) => {
  return [
    {
      type: "石灰石",
      add: Mock.Random.integer(600, 800),
      decrease: Mock.Random.integer(500, 700),
      unitStandard: "T",
      english: "Lim es tone",
    },
    {
      type: "砂岩",
      add: Mock.Random.integer(600, 800),
      decrease: Mock.Random.integer(500, 700),
      unitStandard: "T",
      english: "Lim es tone",
    },
    {
      type: "铝矾土",
      add: Mock.Random.integer(600, 800),
      decrease: Mock.Random.integer(500, 700),
      unitStandard: "T",
      english: "Lim es tone",
    },
    {
      type: "铜粉",
      add: Mock.Random.integer(600, 800),
      decrease: Mock.Random.integer(500, 700),
      unitStandard: "T",
      english: "Lim es tone",
    },
  ];
});

// 原材料当月消耗
Mock.mock("/mock/monthlyCost", "get", (options) => {
  return [
    {
      value: "某某指标名称1",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称2",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称3",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称4",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称5",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称6",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称7",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称8",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称9",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称10",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称11",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称12",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称13",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称14",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      value: "某某指标名称15",
      encoding: "某某编码",
      number: Mock.Random.integer(1, 100) + "%",
    },
  ];
});

// 三班车间设备运转率
Mock.mock("/mock/productionSituation", "get", (options) => {
  const min = 100;
  const max = 500;
  return [
    {
      equipment: "设备 1: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 2: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 3: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 4: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 5: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 6: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 7: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 8: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 9: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 10: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 11: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 12: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 13: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 14: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 15: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 16: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 17: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 11: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 12: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 13: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 14: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 15: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 16: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
    {
      equipment: "设备 17: MK45551",
      name: Mock.Random.cname(),
      number: Mock.Random.integer(1, 100) + "%",
    },
  ];
});

// 三班白 中 晚产能
Mock.mock("/mock/thirdShiftCapacity", "get", (options) => {
  const min = 1000;
  const max = 8000;
  return [
    [
      {
        name: "熟料1产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
      {
        name: "熟料2产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
      {
        name: "熟料3产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
    ],
    [
      {
        name: "熟料1产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
      {
        name: "熟料2产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
      {
        name: "熟料3产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
    ],
    [
      {
        name: "熟料1产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
      {
        name: "熟料2产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
      {
        name: "熟料3产能",
        number: Mock.Random.integer(min, max),
        unitStandard: "kg",
        up: Mock.Random.integer(1, 100) + "%",
      },
    ],
  ];
});

// 柱状图比率
Mock.mock("/mock/ratio", "get", (options) => {
  const min = 0;
  const max = 1000;
  return [
    { name: "白班", number: Mock.Random.integer(min, max) },
    { name: "中班", number: Mock.Random.integer(min, max) },
    { name: "晚班", number: Mock.Random.integer(min, max) },
  ];
});

// 生产单位电耗
Mock.mock("/mock/powerConsumption", "get", (options) => {
  const min = 0;
  const max = 1000;
  return [
    { date: "01/01", expend: Mock.Random.integer(min, max) },
    { date: "02/02", expend: Mock.Random.integer(min, max) },
    { date: "03/03", expend: Mock.Random.integer(min, max) },
    { date: "04/04", expend: Mock.Random.integer(min, max) },
    { date: "05/05", expend: Mock.Random.integer(min, max) },
    { date: "06/06", expend: Mock.Random.integer(min, max) },
    { date: "07/07", expend: Mock.Random.integer(min, max) },
    { date: "08/08", expend: Mock.Random.integer(min, max) },
    { date: "09/09", expend: Mock.Random.integer(min, max) },
    { date: "10/10", expend: Mock.Random.integer(min, max) },
    { date: "11/11", expend: Mock.Random.integer(min, max) },
    { date: "12/12", expend: Mock.Random.integer(min, max) },
    { date: "01/01", expend: Mock.Random.integer(min, max) },
    { date: "02/02", expend: Mock.Random.integer(min, max) },
    { date: "03/03", expend: Mock.Random.integer(min, max) },
  ];
});

// 生产单位煤耗
Mock.mock("/mock/coalConsumption", "get", (options) => {
  const min = 0;
  const max = 1000;
  return [
    { date: "01/01", expend: Mock.Random.integer(min, max) },
    { date: "02/02", expend: Mock.Random.integer(min, max) },
    { date: "03/03", expend: Mock.Random.integer(min, max) },
    { date: "04/04", expend: Mock.Random.integer(min, max) },
    { date: "05/05", expend: Mock.Random.integer(min, max) },
    { date: "06/06", expend: Mock.Random.integer(min, max) },
    { date: "07/07", expend: Mock.Random.integer(min, max) },
    { date: "08/08", expend: Mock.Random.integer(min, max) },
    { date: "09/09", expend: Mock.Random.integer(min, max) },
    { date: "10/10", expend: Mock.Random.integer(min, max) },
    { date: "11/11", expend: Mock.Random.integer(min, max) },
    { date: "12/12", expend: Mock.Random.integer(min, max) },
    { date: "01/01", expend: Mock.Random.integer(min, max) },
    { date: "02/02", expend: Mock.Random.integer(min, max) },
    { date: "03/03", expend: Mock.Random.integer(min, max) },
  ];
});

// 运转时间
Mock.mock("/mock/runningTime", "get", (options) => {
  const min = 0;
  const max = 10;
  return [
    { name: "煤窑", time: Mock.Random.integer(min, max) + "h" },
    { name: "回转窑", time: Mock.Random.integer(min, max) + "h" },
    { name: "生料窑", time: Mock.Random.integer(min, max) + "h" },
    { name: "回转窑", time: Mock.Random.integer(min, max) + "h" },
    { name: "煤窑", time: Mock.Random.integer(min, max) + "h" },
  ];
});
export default Mock;
