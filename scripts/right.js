/**
 * 右上 - 1
 */
let rightTop1Charts = echarts.init(document.getElementById('right-top-echarts-1'));
let rightTop1ChartsOptions = {
  title: {
    text: "1.56 \n 万人",
    left: "32%",
    top: "20%",
    textStyle: {
      color: "#fff",
      fontSize: 20,
      align: "center"
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '20%',
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
    itemStyle: {
    },
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '考生诚信',
      type: 'pie',
      width: '120',
      height: '120',
      left: '20%',
      radius: ['60%', '80%'],
      avoidLabelOverlap: false,
      labelLine: {
        show: true,
        length: 3,
        length2: 3,
      },
      label: {
        show: true,
        position: 'outside',
        color: '#fff',
        formatter: '{c} \n {d}%'
      },
      data: [
        { value: 3432, name: '一般违纪人数', itemStyle: {
          color: '#f39a2d'
        } },
        { value: 1560, name: '严重违纪人数', itemStyle: {
          color: '#f84849'
        } },
        { value: 12168, name: '非违纪违规人数', itemStyle: {
          color: '#00cdf9'
        } },
      ]
    }
  ]
};
rightTop1Charts.setOption(rightTop1ChartsOptions);

/**
 * 右下 - 1
 */
let rightBottom1Charts = echarts.init(document.getElementById('right-bottom-echarts-1'));
let rightBottom1ChartsOptions = {
  // 这个配置项似乎可以使echarts实例尽可能充满div
  grid: {
    top: '30%',
    bottom: '25%',
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
      { name: '监考人次' },
      { name: '监考经验值' },
    ]
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
    // 坐标轴刻度相关配置
    axisLabel: {
      color: '#fff',
      fontSize: 10
    }
  },
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
        color: '#fff',
         formatter: '{value}%',
         showMaxLabel: false
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
      name: '监考人次',
      data: [100, 200, 150, 300, 400, 600, 550, 800, 100, 300, 200, 250],
      type: 'line',
      smooth: true,
      // 折线拐点标志的样式
      itemStyle: {
        color: '53f0a4'
      },
      // 线条样式
      lineStyle: {
        color: '#53f0a4',
        width: 2,
      }
    },
    {
      name: '监考经验值',
      // data: ['20%', '30%', '25%', '50%', '80%', '70%', '40%', '10%', '60%', '90%', '30%', '10%'],
      data: [100, 200, 150, 300, 400, 600, 550, 800, 100, 300, 900, 250],
      type: 'line',
      smooth: true,
      symbol: 'none',
      yAxisIndex: 1,
      // 折线拐点标志的样式
      itemStyle: {
        color: '53f0a4',
      },
      // 线条样式
      lineStyle: {
        color: '#53f0a4',
        width: 2,
        type: 'dashed'
      }
    }
  ]
};
rightBottom1Charts.setOption(rightBottom1ChartsOptions);

/**
 * 右下 - 2
 */
let rightBottom2Charts = echarts.init(document.getElementById('right-bottom-echarts-2'));
let rightBottom2ChartsOptions = {
  tooltip: {
    trigger: 'item'
  },
  title: [
    {
      text: "性别分布",
      left: "15%",
      top: "15%",
      textStyle: {
        color: "#fff",
        fontSize: 10,
        align: "center"
      }
    },
    {
      text: "在编分布",
      left: "70%",
      top: "15%",
      textStyle: {
        color: "#fff",
        fontSize: 10,
        align: "center"
      }
    }
  ],
  legend: {
    bottom: '20%',
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
    itemStyle: {
    },
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '性别分布',
      type: 'pie',
      width: '80',
      height: '80',
      left: '10%',
      radius: ['60%', '80%'],
      avoidLabelOverlap: false,
      labelLine: {
        show: true,
        length: 2,
        length2: 2,
      },
      label: {
        show: true,
        position: 'outside',
        color: '#fff',
        formatter: (data) => `${data.name} \n ${data.percent.toFixed(0)}%`,
      },
      data: [
        { value: 3432, name: '男性', itemStyle: {
          color: '#074bc7'
        } },
        { value: 1560, name: '女性', itemStyle: {
          color: '#f86f2C'
        } },
      ]
    },
    {
      name: '在编分布',
      type: 'pie',
      width: '80',
      height: '80',
      left: '65%',
      radius: ['60%', '80%'],
      avoidLabelOverlap: false,
      labelLine: {
        show: true,
        length: 2,
        length2: 2,
      },
      label: {
        show: true,
        position: 'outside',
        color: '#fff',
        formatter: (data) => `${data.name} \n ${data.percent.toFixed(0)}%`,
      },
      data: [
        { value: 3432, name: '在编', itemStyle: {
          color: '#2cc1f8'
        } },
        { value: 1560, name: '不在编', itemStyle: {
          color: '#f8c12c'
        } },
      ]
    }
  ]
};
rightBottom2Charts.setOption(rightBottom2ChartsOptions);

/**
 * 右下 - 3
 */
let rightBottom3Charts = echarts.init(document.getElementById('right-bottom-echarts-3'));
let rightBottom3ChartsOptions = {
  textStyle: {
    fontSize: 10
  },
  radar: {
    indicator: [
      { name: '已造册', max: 6500, color: '#fff' },
      { name: '未发', max: 16000, color: '#fff' },
      { name: '已发', max: 30000, color: '#fff' },
    ],
    axisLine: {
      show: false,
    },
    splitArea: {
      show: false,
    },
    radius: 60,
  },
  series: [
    {
      name: '',
      type: 'radar',
      lineStyle: {
        width: 0
      },
      areaStyle: {
        color: '#2f49a3',
        opacity: 0.7
      },
      data: [
        {
          value: [4200, 3000, 20000],
        },
      ]
    }
  ]
};
rightBottom3Charts.setOption(rightBottom3ChartsOptions);

/**
 * 网络请求
 */

// 右上的请求
const fetchRightTopData = async () => {
  try {
    // 绩效考评
    let res1 = await httpClient.post('/zsdp/kfjc/getJxkp');
    console.log('右上 - 数据');
    console.log(res1);
    if (res1.code == 1) {
      if (res1.data) {
        console.log(res1.data);
        let tableData = res1.data.data1;
        $('.right-top-1 .item-1 .content .data')
        .add('.right-top-1 .item-2 .content .data')
        .each((idx, item) => {
          // 标准值
          let index = $(item).find('.value:last-child').html();
          // 将标准值转变为数字
          index = parseFloat(index.replace(/[^0-9$.]/g, ''));
          let currentVal = mapQuotaValuesObjArrToQuotaValArr(tableData)[idx];
          let currentValNum = parseFloat(currentVal.replace(/[^0-9$.]/g, ''));
          console.log(index, currentValNum);
          // 拼接html
          let valHtml = `<div class="value">${currentVal}</div>`;
          if (idx == 0 || idx == 4) {
            valHtml = `<div class="value ${ currentValNum < index ? 'error' : '' }">${currentVal}</div>`;
          }
          if (idx == 1 || idx == 2 || idx == 3 || idx == 5 || idx == 6) {
            valHtml = `<div class="value ${ currentValNum > index ? 'error' : '' }">${currentVal}</div>`;
          }
          $(valHtml).insertAfter($(item).find('.title'));
        });
        // 绩效考评 - 表格右边
      }
    }
  } catch (error) {
    console.log(error);
  }
};
fetchRightTopData();

// 右上的请求 - 2 风险化解
const fetchRightTopData2 = async () => {
  try {
    let res = await httpClient.post('/zsdp/kfjc/getFxhj');
    if (res.code == 1) {
      if (res.data) {
        if (res.data.data1) {
          console.log('风险化解数据：');
          console.log(res.data.data1);
          const resDataArr = mapQuotaValuesObjArrToQuotaValArr(res.data.data1);
          $('.right-top-2 .wave').each((idx, item) => {
            $(item).find('.num').html(resDataArr[idx]);
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchRightTopData2();

// 右上角的请求 - 3 考生诚信
const fetchRightTopData3 = async () => {
  try {
    let res = await httpClient.post('/zsdp/kfjc/getKscx');
    if (res.code == 1) {
      if (res.data) {
        console.log('考生诚信数据');
        console.log(res.data);
        let resDataArr = mapQuotaValuesObjArrToQuotaValArr(res.data.data1);
        console.log(resDataArr);
        let total = resDataArr.map(numStr => parseFloat(numStr)).reduce((prev, curr) => prev + curr, 0);
        total = total / 10000;
        rightTop1ChartsOptions.series[0].data[0].value = resDataArr[0];
        rightTop1ChartsOptions.series[0].data[1].value = resDataArr[1];
        rightTop1ChartsOptions.series[0].data[2].value = resDataArr[2];
        rightTop1ChartsOptions.title.text = `${total} \n 万人`;

        rightTop1Charts.setOption(rightTop1ChartsOptions);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
fetchRightTopData3();

// 右下的请求
const fetchRightBottomData = async () => {
  try {
    // 折线图
    let res = await httpClient.post('/zsdp/kwbz/getJkry');
    // 月份
    let monthArr = mapYearArrToMonthArr(res.data.data1.map(item => item.YEARS));
    // 监考人数
    let jkNumArr = res.data.data1.map(item => item.QUOTA_VALUES);
    // 经验值
    let jyNumArr = res.data.data2.map(item => item.QUOTA_VALUES);
    jyNumArr = mapPercentArrToNumArr(jyNumArr);

    rightBottom1ChartsOptions.xAxis.data = monthArr;
    rightBottom1ChartsOptions.series[0].data = jkNumArr;
    rightBottom1ChartsOptions.series[1].data = jyNumArr;

    rightBottom1Charts.setOption(rightBottom1ChartsOptions);
  } catch (error) {
    console.log(error);
  }

  try {
    // 饼图和雷达图 
    let res2 = await httpClient.post('/zsdp/kwbz/getRyfb');
    let data = res2.data;
    let { sex, zb, ff, zcc } = data; // 性别，在编/不在编 发放/未发放 已造册

    // 性别饼图数据
    let maleNum = sex.filter(item => item.KW0104 == 1)[0].QUOTA_VALUES;
    let femalNum = sex.filter(item => item.KW0104 == 2)[0].QUOTA_VALUES;

    // 在编/非在编饼图数据
    // 在编数量
    let zbNum = zb.filter(item => item.KW0116 == 1)[0].QUOTA_VALUES;
    // 非在编数量
    let fzbNum = zb.filter(item => item.KW0116 == 2)[0].QUOTA_VALUES;

    rightBottom2ChartsOptions.series[0].data = rightBottom2ChartsOptions.series[0].data.map(item => ({
      ...item,
      value: item.name == '男性' ? maleNum : femalNum
    }))

    rightBottom2ChartsOptions.series[1].data = rightBottom2ChartsOptions.series[1].data.map(item => ({
      ...item,
      value: item.name == '在编' ? zbNum : fzbNum
    }))

    rightBottom2Charts.setOption(rightBottom2ChartsOptions);

    // 右下角雷达图
    // 已造册数据
    let yzcNum = zcc[0].QUOTA_VALUES;
    // 发放数据
    let ffNum = ff.filter(item => item.FF == 1)[0].QUOTA_VALUES;
    // 未发放数据
    let wffNum = ff.filter(item => item.FF == 0)[0].QUOTA_VALUES;
    // 三个值中的最大者
    let maxNum =Math.max(yzcNum, wffNum, ffNum);
    rightBottom3ChartsOptions.series[0].data[0] = {
      value: [ yzcNum, wffNum, ffNum ]
    };
    rightBottom3ChartsOptions.radar.indicator = [
      { name: `已造册(${yzcNum})`, max: maxNum, color: '#fff' },
      { name: `未发(${wffNum})`, max: maxNum, color: '#fff' },
      { name: `已发(${ffNum})`, max: maxNum, color: '#fff' }
    ];
    rightBottom3Charts.setOption(rightBottom3ChartsOptions);
  } catch (error) {
    console.log(error);
  }
};
fetchRightBottomData();

