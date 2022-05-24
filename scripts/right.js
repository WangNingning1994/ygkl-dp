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
      data: [300, 400, 200, 300, 250, 600, 100, 800, 200, 300, 200, 400],
      type: 'line',
      smooth: true,
      symbol: 'none',
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
  // legend: {
  //   data: ['Allocated Budget', 'Actual Spending']
  // },
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
    }
  },
  series: [
    {
      name: 'Budget vs spending',
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
          // name: 'Allocated Budget'
        },
      ]
    }
  ]
};
rightBottom3Charts.setOption(rightBottom3ChartsOptions);
