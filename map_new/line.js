// 基于准备好的dom，初始化echarts实例
var chart = echarts.init(document.getElementById('main'));

var series = [];//地图展现数据


var fromdata = '北京西';//默认飞线原点

var convertData1 = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];
        let fromCoord = geoCoordMap[dataItem[0].name];
        let toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name, toName: dataItem[1].name, coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var convertData2 = function (data) {
    let res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
const promise = new Promise(function (resolve, reject) {
    result = [{ city: '北京', datas: [{ tradname: '数据', price: '21', rise: '0.3' }] },{ city: '兰州', datas: [{ tradname: '数据', price: '21', rise: '-0.5' }] }]
    var resultdatas = [];
    for (var item of result) {
        var obj = {
            name: item.city,
            value: '<br/>'
        };
        for (var data of item.datas) {
            obj.value += data.tradname + "&emsp;电价" + data.price + "&emsp;" + (!isNaN(data.rise) ? (Number(data.rise) == 0 ? '--' : (Number(data.rise) > 0 ? "<span style='color:red'>增长率" + data.rise + "</span>" : "<span style='color:green'>增长率" + data.rise + "</span>")) : '--') + '<br/>';
        }
        resultdatas.push(obj);
    }
    [[fromdata, XAData]].forEach(function (item, i) {
        console.log('itm',item,geoCoordMap[item[0]])
        series.push({
            name: '西安',
            type: 'scatter',
            zlevel: 20,
            color: '#f00',
            coordinateSystem: 'geo',
            symbolSize: 10,
            itemStyle: {
                normal:{label:{
                    show:true,
                    formatter:'{b}',
                    
                }}
            },
            data: convertData2(resultdatas)
        },
        //同一份数据，实现跟虚线分开
            // {
            //     type: 'lines',
            //     smooth:false,//设置为false 允许画虚线
            //     zlevel: 15,
            //     effect: {
            //         show: true, period: 4, trailLength: 0, symbol: 'arrow', symbolSize: 7,
            //     },
            //     lineStyle: {
            //         normal: { 
            //             type:'solid',//线的类型
            //             width: 1.2, opacity: 0.6, curveness: 0.2, color: '#F19000' }
            //     },
            //     data: convertData1(item[1].slice(0,10))
            // },
            {
                type: 'lines',
                smooth:false,//设置为false 允许画虚线
                zlevel: 15,
                effect: {
                    show: true, period: 4, trailLength: 0, symbol: 'arrow', symbolSize: 7,
                },
                lineStyle: {
                    normal: { 
                        type:'dotted',//线的类型
                        width: 1.2, opacity: 0.6, curveness: 0.2, color: '#F19000' }
                },
                data: convertData1(item[1])
            },
            //出发点
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 15,
                rippleEffect: {
                    period: 4, brushType: 'stroke', scale: 4
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    return 4 + val[2] / 10;
                },
                itemStyle: {
                    normal: { show: true }
                },
                // tooltip: {
                //     show: true,
                // },
                data: [{
                    name: fromdata, value: geoCoordMap[item[0]].concat([100]),
                }],
            },
            /*到达点*/
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                    period: 4, brushType: 'stroke', scale: 4
                },
                zlevel: 15,
                
                tooltip: {
                    show: false,
                },
                symbol: 'circle',
                symbolSize: 15,
                
                itemStyle: {
                    //normal: { color: '#F19000' }
                    normal:{
                        color: '#F19000',
                        label:{
                        show:true,
                        formatter:'{b}',
                        
                    }}
                },
                data: item[1].map(function (dataItem) {
                    console.log('dataitem',dataItem)
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].name]),
                        tooltip: {
                            formatter: dataItem[0].name + "--" + dataItem[1].name + "：" + dataItem[1].value
                        }
                    };
                }),
            });
    });

    option = {
        title : {
            text: '国家电网特高压线路图',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        backgroundColor: "#123456",
        color: ['#fc5353', '#f4fc6c', '#e68b55', '#9a68ff', '#ff60c5'],
        legend: {
            orient: 'horizontal',//图例的排列方向
            textStyle: { color: '#fff' },
            x: 'left',//图例的位置
            y: '20',

            data: ['全国数据']
        },
        roamController: {//控制地图的上下左右放大缩小
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        }, 
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.value) {
                    return params.name + ' : ' + params.value[2];
                } else {
                    return params.name;
                }
            }
        },
        geo: {
            map: 'china',
            zlevel: 10,
            layoutCenter: ['48%', '43%'],
            roam: true,
            layoutSize: "100%",
            zoom: 1.08,
            label: {
                normal: {
                    show: true,//地图上的省份名称是否显示
                    textStyle: {
                        fontSize: 12,
                        color: '#43D0D6'//省份文字颜色
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#062031',
                    borderWidth: 1,
                    borderColor: '#404a59'//省份分界线颜色
                },
                emphasis: {
                    areaColor: '#90EE90'//省份块颜色
                }
            }
        },
        series: series
    };
    chart.setOption(option);
    chart.on('click', function (params) {
        //alert('地图点击事件~~~');
    });
});