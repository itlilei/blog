option = {
    title : {
        text: '全国不同种类发电地域分布',
        left: 'center'
    },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{b},{c}'
    // },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data:['火电','风电','光伏']
    // },
    // visualMap: {
    //     min: 0,
    //     max: 2500,
    //     left: 'left',
    //     top: 'bottom',
    //     text:['高','低'],           // 文本，默认为数值文本
    //     calculable : true
    // },
    dataRange: {
        x: 'left',
        y: 'top',
        splitList: [
            {start: 50, end: 60,color:'#99cccc',label:'核电'},
            {start: 40, end: 50,color:'#33ff99',label:'风电'},
            {start: 30, end: 40,color:'#99ffcc',label:'光电'},
            {start: 20, end: 30,color:'#66ccff',label:'水电'},
            {start: 0, end: 20,color:'#ff9999',label:'火电'},
            {end:10,color:'#ccc',label:' '}
        ]
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        left: 'right',
        top: 'center',
        feature : {
            mark : {show: true},
            //dataView : {show: true, readOnly: false},
            //restore : {show: true},
            //saveAsImage : {show: true}
        }
    },
    series : [
        {
            name: '火电',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            data:[
                {name: '山西',value: 15},
                //{name: '内蒙古',value:15},
                {name: '江苏',value:15},
                {name: '浙江',value: 15},
                {name: '安徽',value:15},
                {name: '河南',value:15},
                {name: '广东',value:15},
                // {name: '新疆',value:15},
            ]
        },
        {
            name: '水电',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            data:[
                {name: '湖北',value: 2},
                {name: '湖南',value:25},
                {name: '广西',value:25},
                {name: '四川',value: 25},
                {name: '云南',value:25},
                {name: '甘肃',value:25},
                {name: '青海',value:25},
            ]
        },
        {
            name: '光电',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            data:[
                {name: '新疆',value: 35},
                {name: '宁夏',value:35},
                {name: '甘肃',value:35},
                //{name: '青海',value:25},
            ]
        },
        {
            name: '风电',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            data:[
                {name: '河北',value: 45},
                {name: '内蒙古',value:45},
            ]
        },
        {
            name: '核电',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            data:[
                {name: '辽宁',value: 55},
                {name: '福建',value:55},
            ]
        }
    ]
};