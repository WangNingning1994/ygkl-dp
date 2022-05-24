function showMap() {
  let option = {};
  let geoData = [];
  let zhoushanMap = null;

  let data = [
    {
      'name': '嵊泗县',
      'id': '1',
      'value': ['45']
    },
    {
      'name': '岱山县',
      'id': '2',
      'value': ['305']
    },
    {
      'name': '定海区',
      'id': '3',
      'value': ['372']
    },
    {
      'name': '普陀区',
      'id': '4',
      'value': ['372']
    }
  ];
  $.get('zhoushan.json', function (geoJson) {
    geoJson.features.forEach(item => {
      const centerPointArr = item.properties.cp;
      const city = data.filter(dataItem => dataItem.id === item.id)[0];

      if (city) {
        city.value = [...centerPointArr, ...city.value];
        geoData.push(city);
      }
    });
    echarts.registerMap('zhoushan', geoJson);
    option = {
        visualMap: {
          seriesIndex: 10,
          splitNumber: 5,
          color: ['rgba(74,245,255,0)', 'rgba(74,245,255,0)', 'rgba(74,245,255,0)', 'rgba(74,245,255,0)', 'rgba(74,245,255,0)'].reverse(),
          categories: ['', '', '', '', ''],
          orient: 'horizontal',
          itemHeight: 12,
          itemWidth: 12,
          right: 0,
          bottom: 30,
          itemSymbol: 'rect',
          textStyle: {
            color: '#fff',
            fontSize: 16,
            lineHeight: 28
          },
          opacity: 0.1
        },
        tooltip: {
          trigger: 'item',
          //自定义tooltip内容
          // TODO: 隐藏掉外层的 div
          formatter: function (param) { 
            console.log(param.data.value);
            hideDefaultToolTip();
            return;
          }
        },
        geo: {
            map: 'zhoushan',
            zoom: 1.225,
            itemStyle: {
                areaColor: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    areaColor: 'transparent'
                },
            }
        },
        series: [{
            type: 'map',
            map: 'zhoushan',
            zoom: 1.225,
            label: {
                show: false,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18
            },
            emphasis: {
                label: {
                    show: false,
                    color: 'rgba(74,245,255)',
                    fontWeight: 'bold',
                    fontSize: 18
                },
                itemStyle: {
                    opacity: .6,
                },
            },
            data: data.map(item => {
              return {
                ...item,
                itemStyle: {
                  areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: .6,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(74,245,255,0.1)' // 0% 处的颜色
                    }, {
                        offset: .8,
                        color: 'rgba(74,245,255,0.6)' // 100% 处的颜色
                    }],
                  },
                  //地图区域颜色
                  areaColor: 'rgba(74,245,255,0.33)',
                  //地图边框颜色
                  borderColor: 'rgba(74,245,255,0.33)',
                  borderWidth: 1,
                  //鼠标滑动到地区时显示的时候
                  emphasis: {
                      borderWidth: .10,
                      borderColor: 'rgb(74,245,255)',
                      areaColor: "rgb(74,245,255)",
                  }
                }
              }
            })
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            data: geoData,
            symbol: 'path://M298,278 C302.970563,278 307,282.029437 307,287 C307,291.970563 302.970563,296 298,296 C293.029437,296 289,291.970563 289,287 C289,282.029437 293.029437,278 298,278 Z M298,278.818182 C293.481307,278.818182 289.818182,282.481307 289.818182,287 C289.818182,291.518693 293.481307,295.181818 298,295.181818 C302.518693,295.181818 306.181818,291.518693 306.181818,287 C306.181818,282.481307 302.518693,278.818182 298,278.818182 Z M298,283 C300.209139,283 302,284.790861 302,287 C302,289.209139 300.209139,291 298,291 C295.790861,291 294,289.209139 294,287 C294,284.790861 295.790861,283 298,283 Z',
            symbolSize: 13,
            label: {
                show: true,
                position: 'right',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
                formatter: params => params.name
            },
            itemStyle: {
                color: params => {
                    // return colorList[params.data.value[2]]
                    //点的颜色
                    return '#FEDB25'
                },
                opacity: .8,
            },
            // animation: false,
            hoverAnimation: true,
        }]
    }
    zhoushanMap = echarts.init(document.getElementById('zhoushan-map'));
    zhoushanMap.setOption(option);

      var count = 0;
      var self = this;
      self.timeTicket = setInterval(function () {
          zhoushanMap.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
          });
          zhoushanMap.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: count
          });
          zhoushanMap.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: count
          });
          count++;
          if (count >= option.series[0].data.length) {
              count = 0;
          }
      }, 3000);
  })
};

function hideDefaultToolTip() {
  // 注意这个逻辑或许不是很严谨
  $('div[style*="z-index: 9999999"]').eq(0).remove()
}

showMap();

hideDefaultToolTip();