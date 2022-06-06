/**
 * 左上 - 1
 */
let leftTop1Charts = echarts.init(document.getElementById('left-top-echarts-1'));
let leftTop1ChartsOptions = {
  // 这个配置项似乎可以使echarts实例尽可能充满div
  grid: {
    top: '40%',
    bottom: '10%',
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    right: 0,
    top: 0,
    textStyle: {
      color: '#fff'
    },
    data: [
      { name: '笔试' },
      { name: '面试' },
      { name: '机考' },
      { name: '' },
      { name: '公务员' },
      { name: '资格考试' },
      { name: '事业单位' },
    ]
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月'],
    // 隐藏坐标轴刻度
    axisTick: {
      show: false,
    },
    // 坐标轴颜色
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, .2)'
      }
    },
    // 坐标轴刻度颜色
    axisLabel: {
      color: '#fff'
    }
  },
  // 双Y轴
  yAxis: [
    {
      type: 'value',
      position: 'left',
      splitNumber: 4,
      // 隐藏坐标轴轴线
      axisLine: {
        show: false,
      },
      // 坐标轴刻度颜色
      axisLabel: {
        color: '#fff'
      },
      // 分隔线
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)',
          type: 'dashed'
        }
      }
    },
    {
      type: 'value',
      position: 'right',
      splitNumber: 4,
      // 隐藏坐标轴轴线
      axisLine: {
        show: false,
      },
      // 坐标轴刻度颜色
      axisLabel: {
        color: '#fff'
      },
      // 分隔线
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)',
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      name: '笔试',
      data: [120, 200, 150, 80],
      type: 'bar',
      stack: '考试次数', // 堆叠
      itemStyle: {
        color: '#1a55ff',
         borderRadius: [0, 0, 50, 50]
      }
    },
    {
      name: '面试',
      data: [120, 200, 150, 100],
      type: 'bar',
      stack: '考试次数', // 堆叠
      itemStyle: {
        color: '#199fff'
      }
    },
    {
      name: '机考',
      data: [120, 200, 150, 100],
      type: 'bar',
      stack: '考试次数', // 堆叠
      itemStyle: {
        color: '#19ecff',
        borderRadius: [50, 50, 0, 0]
      }
    },
    {
      name: '公务员',
      data: [120, 200, 150, 80],
      type: 'bar',
      stack: '考生人数', // 堆叠
      itemStyle: {
        color: '#fb5a2e',
        borderRadius: [0, 0, 50, 50]
      }
    },
    {
      name: '资格考试',
      data: [120, 200, 150, 80],
      type: 'bar',
      stack: '考生人数', // 堆叠
      itemStyle: {
        color: '#fa9e2d',
      }
    },
    {
      name: '事业单位',
      data: [120, 200, 150, 80],
      type: 'bar',
      stack: '考生人数', // 堆叠
      itemStyle: {
        color: '#fae22d',
        borderRadius: [50, 50, 0, 0]
      }
    },
    {
      name: '场次数',
      data: [100, 200, 150, 300, 400, 600, 550],
      type: 'line',
      yAxisIndex: 1,
      // 折线拐点标志的样式
      itemStyle: {
        color: '53f0a4'
      },
      // 线条样式
      lineStyle: {
        color: '#53f0a4',
        width: 2,
      }
    }
  ]
};
leftTop1Charts.setOption(leftTop1ChartsOptions);


/**
 * 左上 - 2
 */
let leftTop2Charts = echarts.init(document.getElementById('left-top-echarts-2'));
let leftTop2ChartsOptions = {
  grid: {
    // top: '20%',
    // bottom: 0
  },
  tooltip: {
    show: true,
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    // 坐标轴刻度颜色
    axisLabel: {
      color: '#fff'
    },
    // 隐藏坐标轴刻度
    axisTick: {
      show: false,
    },
    // 坐标轴颜色
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, .2)'
      }
    },
  },
  yAxis: {
    type: 'value',
    // 分隔线
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, .2)',
        type: 'dashed'
      }
    },
    // 坐标轴刻度颜色
    axisLabel: {
      color: '#fff'
    },
  },
  series: [
    {
      data: [5000, 6000, 7000, 5000, 10000, 8000, 4000],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#f0af53',
      },
      symbol: 'none', // 隐藏折线上的小点点
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, // 或许这个是代表从Y轴方向上的渐变
            [
              {
                offset: 0,
                color: 'rgba(255, 150, 0, .5)'
              }, 
              {
                offset: 1,
                color: 'rgba(7, 19, 47, 1)'
              }
            ]
          ),
        },
      }
    }
  ]
};
leftTop2Charts.setOption(leftTop2ChartsOptions);

/**
 * 左下 - 1
 */
let leftBottom1Charts = echarts.init(document.getElementById('left-bottom-echarts-1'));
let leftBottom1ChartsOptions = {
  grid: {
    top: '40%',
    bottom: '10%',
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    right: 0,
    top: 0,
    textStyle: {
      color: '#fff'
    },
  },
  xAxis: {
    type: 'category',
    data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    // 隐藏坐标轴刻度
    axisTick: {
      show: false,
    },
    // 坐标轴颜色
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, .2)'
      }
    },
    // 坐标轴刻度颜色
    axisLabel: {
      color: '#fff'
    }
  },
  // 双Y轴
  yAxis: [
    {
      type: 'value',
      position: 'left',
      splitNumber: 4,
      // 隐藏坐标轴轴线
      axisLine: {
        show: false,
      },
      // 坐标轴刻度颜色
      axisLabel: {
        color: '#fff'
      },
      // 分隔线
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)',
          type: 'dashed'
        }
      }
    },
    {
      type: 'value',
      position: 'right',
      splitNumber: 4,
      // 隐藏坐标轴轴线
      axisLine: {
        show: false,
      },
      // 坐标轴刻度颜色
      axisLabel: {
        color: '#fff'
      },
      // 分隔线
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)',
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      name: '笔试',
      data: [1000, 2000, 1500, 3000, 4000, 6000],
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#00b7ff'},
              {offset: 1, color: 'rgba(34, 68, 172, .35)'},
            ]
          )
        },
      }
    },
    {
      name: '面试',
      data: [1000, 2000, 1500, 3000, 4000, 6000],
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#ff7200'},
              {offset: 1, color: 'rgba(172, 96, 34, .35)'},
            ]
          )
        },
      }
    },
    {
      name: '考录比',
      data: [100, 200, 150, 300, 400, 600, 550],
      type: 'line',
      yAxisIndex: 1,
      // 折线拐点标志的样式
      itemStyle: {
        color: '53f0a4'
      },
      // 线条样式
      lineStyle: {
        color: '#53f0a4',
        width: 2,
      }
    }
  ]
};
leftBottom1Charts.setOption(leftBottom1ChartsOptions);

/**
 * 左下 - 2
 */
let leftBottom2Charts = echarts.init(document.getElementById('left-bottom-echarts-2'));
let leftBottom2ChartsOptions = {
  grid: {
    top: '30%',
    bottom: '10%',
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    right: 0,
    top: 0,
    textStyle: {
      color: '#fff'
    },
  },
  xAxis: {
    type: 'category',
    data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    // 隐藏坐标轴刻度
    axisTick: {
      show: false,
    },
    // 坐标轴颜色
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, .2)'
      }
    },
    // 坐标轴刻度颜色
    axisLabel: {
      color: '#fff'
    }
  },
  // 双Y轴
  yAxis: [
    {
      type: 'value',
      position: 'left',
      // splitNumber: 4,
      // 隐藏坐标轴轴线
      axisLine: {
        show: false,
      },
      // 坐标轴刻度颜色
      axisLabel: {
        color: '#fff'
      },
      // 分隔线
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)',
          type: 'dashed'
        }
      }
    },
    {
      type: 'value',
      position: 'right',
      // splitNumber: 4,
      // 隐藏坐标轴轴线
      axisLine: {
        show: false,
      },
      // 坐标轴刻度颜色
      axisLabel: {
        color: '#fff',
        formatter: '{value}%',
      },
      // 分隔线
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)',
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      name: '考生人数',
      data: [1000, 2000, 1500, 3000, 4000, 6000],
      type: 'bar',
      itemStyle: {
        color: '#00a8ff',
      },
      barWidth: 30,
      stack: '人数'
    },
    {
      name: '合格人数',
      data: [1000, 2000, 1500, 3000, 4000, 6000],
      type: 'bar',
      itemStyle: {
        color: '#00ff90',
      },
      barWidth: 30,
      stack: '人数'
    },
    {
      name: '参考率',
      data: [100, 200, 150, 300, 400, 600, 550],
      type: 'line',
      yAxisIndex: 1,
      // 隐藏折线上的小点点
      symbol: 'none',
      smooth: true,
      // 线条样式
      lineStyle: {
        color: '#d7C933',
        width: 2,
      }
    }
  ]
};
leftBottom2Charts.setOption(leftBottom2ChartsOptions);

/**
 * 网络请求
 */

// 左上 - 1
// TODO: 场次数先空着

const fetchDataTop1Charts = async () => {
  try {
    let res = await httpClient.post('/zsdp/kwfw/getKwzz');
    let res1 = await httpClient.post('/zsdp/kwfw/getZcc');
    console.log(res);
    if (res.code == 1 && res1.code == 1) {
      if (res.data && res1.data) {
        const { bs, ms, jk, gwy, zg, sy } = res.data;
        const changciArr = res1.data.zcc.map(item => item.NUM); // 场次数
        let yearsArr = bs.map(item => item.YEARS);
        let monthArr = mapYearArrToMonthArr(yearsArr);
        // 笔试数组
        let bsValArr = mapQuotaValuesObjArrToQuotaValArr(bs);
        // 面试数组
        let msValArr = mapQuotaValuesObjArrToQuotaValArr(ms);
        // 机考数组
        let jkValArr = mapQuotaValuesObjArrToQuotaValArr(jk);
        // 公务员数组
        let gwyValArr = mapQuotaValuesObjArrToQuotaValArr(gwy);
        // 资格数组
        let zgValArr = mapQuotaValuesObjArrToQuotaValArr(zg);
        // 事业单位数组
        let syValArr = mapQuotaValuesObjArrToQuotaValArr(sy);
        leftTop1ChartsOptions.xAxis.data = monthArr;
        leftTop1ChartsOptions.series[0].data = bsValArr;
        leftTop1ChartsOptions.series[1].data = msValArr;
        leftTop1ChartsOptions.series[2].data = jkValArr;
        leftTop1ChartsOptions.series[3].data = gwyValArr;
        leftTop1ChartsOptions.series[4].data = zgValArr;
        leftTop1ChartsOptions.series[5].data = syValArr;
        leftTop1ChartsOptions.series[6].data = changciArr;
        leftTop1Charts.setOption(leftTop1ChartsOptions);
      }
    }
  } catch (error) {
    console.log(error); 
  }
};
fetchDataTop1Charts();

// 左上 - 2
const fetchDataTop2ChartsOptions = async () => {
  try {
    let res = await httpClient.post('/zsdp/kwfw/getWtmt');
    console.log(res);
    if (res.code == 1) {
      if (res.data) {
        const { data1, gwzs, sjzs, wtdw } = res.data;
        // 年份数据
        let yearsArr = data1.map(item => item.YEARS);
        // 试卷数据
        let paperDataArr = mapQuotaValuesObjArrToQuotaValArr(data1);
        leftTop2ChartsOptions.xAxis.data = yearsArr;
        leftTop2ChartsOptions.series[0].data = paperDataArr;
        leftTop2Charts.setOption(leftTop2ChartsOptions);
        // 委托单位数
        $('.left-top-2 .num-0').html(wtdw[0].WT);
        // 命题岗位数
        $('.left-top-2 .num-1').html(gwzs[0].GW);
        // 试卷数
        $('.left-top-2 .num-2').html(sjzs[0].SJ);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchDataTop2ChartsOptions();

// 左下 - 1
const fetchDataBottom1Charts = async () => {
  try {
    let res = await httpClient.post('/zsdp/zlks/getZlks');
    console.log('左下 - 1 数据: ');
    console.log(res);
    if (res.code == 1) {
      if (res.data) {
        const { ms, bs, klb } = res.data;
        let yearsArr = bs.map(item => item.YEARS);
        // 笔试数据
        let bsValArr = mapQuotaValuesObjArrToQuotaValArr(bs);
        // 面试数据
        let msValArr = mapQuotaValuesObjArrToQuotaValArr(ms);
        // 考录比数据
        let klbValArr = mapQuotaValuesObjArrToQuotaValArr(klb);
        leftBottom1ChartsOptions.series[0].data = bsValArr;
        leftBottom1ChartsOptions.series[1].data = msValArr;
        leftBottom1ChartsOptions.series[2].data = klbValArr;
        leftBottom1ChartsOptions.xAxis.data = yearsArr;
        leftBottom1Charts.setOption(leftBottom1ChartsOptions);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchDataBottom1Charts();

// 左下 - 2
const fetchDataBottom2Charts = async () => {
  try {
    let res = await httpClient.post('/zsdp/zlks/getZgks');
    console.log('左下 - 2 数据: ');
    console.log(res);
    if (res.code == 1) {
      if (res.data) {
        const { ksrs, hgrs, ckl } = res.data;
        let yearsArr = ksrs.map(item => item.YEARS);
        // 考试人数
        let ksrsArr = mapQuotaValuesObjArrToQuotaValArr(ksrs);
        // 合格人数
        let hgrsArr = mapQuotaValuesObjArrToQuotaValArr(hgrs);
        // 参考率
        let cklArr = mapQuotaValuesObjArrToQuotaValArr(ckl);
        leftBottom2ChartsOptions.xAxis.data = yearsArr;
        leftBottom2ChartsOptions.series[0].data = ksrsArr;
        leftBottom2ChartsOptions.series[1].data = hgrsArr;
        leftBottom2ChartsOptions.series[2].data = mapPercentArrToNumArr(cklArr);
        leftBottom2Charts.setOption(leftBottom2ChartsOptions);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchDataBottom2Charts();
