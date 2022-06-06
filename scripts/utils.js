// 将形如 ['202202', '202203', '202204'] 的数组变成 ['2月', '3月', '4月']
const mapYearArrToMonthArr = yearArr => yearArr.map(item => item.slice(-2))
  .map(item => `${parseInt(item)}月`);

// 将形如 ['30%', '25.5%', '46%'] 的数组变成 [ 30, 25.5, 46]
const mapPercentArrToNumArr = percentArr => percentArr.map(item => parseFloat(item));

// 从包含指标值key的数组中取出指标值，组成新数组, 
// 例如 [ { xx: 'XX1', 'QUOTA_VALUES': 20 }, { xx: 'XX2', 'QUOTA_VALUES': 30 } ]
// 经此变换后会变成 [ 20, 30 ]
const mapQuotaValuesObjArrToQuotaValArr = quotaValuesObjArr => quotaValuesObjArr.map(item => item.QUOTA_VALUES);
