
// 表1 的数据  鼠标悬停展示的数据
const power_data=[
    
    { city: '北京', datas: [{ tradname: '社会用电量', num: '1142.38' },{ tradname: '发电总电量', num: '437' },{ tradname: '火电发电量', num: '422.8' },{ tradname: '水电发电量', num: '9.8' },{ tradname: '光伏总电量', num: '0.9027' },{ tradname: '风电总电量', num: '3.5' },{ tradname: '核电总电量', num: '0' }]},
        
    { city: '天津', datas: [{ tradname: '社会用电量', num: '961.44' },{ tradname: '发电总电量', num: '699.3' },{ tradname: '火电发电量', num: '692.6' },{ tradname: '水电发电量', num: '0' },{ tradname: '光伏总电量', num: '0.6806' },{ tradname: '风电总电量', num: '6' },{ tradname: '核电总电量', num: '0' }]},
        
    { city: '河北', datas: [{ tradname: '社会用电量', num: '3366.28' },{ tradname: '发电总电量', num: '3048.3' },{ tradname: '火电发电量', num: '2723.2' },{ tradname: '水电发电量', num: '6.8' },{ tradname: '光伏总电量', num: '56.5516' },{ tradname: '风电总电量', num: '261.8' },{ tradname: '核电总电量', num: '26' }]},
    { city: '山西', datas: [{ tradname: '社会用电量', num: '2160.53' },{ tradname: '发电总电量', num: '3041.7' },{ tradname: '火电发电量', num: '2787.5' },{ tradname: '水电发电量', num: '39.6' },{ tradname: '光伏总电量', num: '38.1587' },{ tradname: '风电总电量', num: '176.5' },{ tradname: '核电总电量', num: '0' }]},
    { city: '内蒙古', datas: [{ tradname: '社会用电量', num: '3353' },{ tradname: '发电总电量', num: '4828.3' },{ tradname: '火电发电量', num: '4138.4' },{ tradname: '水电发电量', num: '34.7' },{ tradname: '光伏总电量', num: '84.8788' },{ tradname: '风电总电量', num: '570.3' },{ tradname: '核电总电量', num: '0' }]},
    { city: '辽宁', datas: [{ tradname: '社会用电量', num: '2302.38' },{ tradname: '发电总电量', num: '1989' },{ tradname: '火电发电量', num: '1411.1' },{ tradname: '水电发电量', num: '27.6' },{ tradname: '光伏总电量', num: '5.9798' },{ tradname: '风电总电量', num: '151.7' },{ tradname: '核电总电量', num: '301.6' }]},
    { city: '吉林', datas: [{ tradname: '社会用电量', num: '750.57' },{ tradname: '发电总电量', num: '822.9' },{ tradname: '火电发电量', num: '671.2' },{ tradname: '水电发电量', num: '58.5' },{ tradname: '光伏总电量', num: '8.4534' },{ tradname: '风电总电量', num: '84.7' },{ tradname: '核电总电量', num: '0' }]},
    { city: '黑龙江', datas: [{ tradname: '社会用电量', num: '763.01' },{ tradname: '发电总电量', num: '1008.2' },{ tradname: '火电发电量', num: '873.9' },{ tradname: '水电发电量', num: '23' },{ tradname: '光伏总电量', num: '1.3078' },{ tradname: '风电总电量', num: '110' },{ tradname: '核电总电量', num: '0' }]},
    { city: '上海', datas: [{ tradname: '社会用电量', num: '1566.67' },{ tradname: '发电总电量', num: '824.7' },{ tradname: '火电发电量', num: '813.5' },{ tradname: '水电发电量', num: '0' },{ tradname: '光伏总电量', num: '0.5794' },{ tradname: '风电总电量', num: '176.5' },{ tradname: '核电总电量', num: '0' }]},
    { city: '江苏', datas: [{ tradname: '社会用电量', num: '6128' },{ tradname: '发电总电量', num: '4933.5' },{ tradname: '火电发电量', num: '4477.3' },{ tradname: '水电发电量', num: '32.6' },{ tradname: '光伏总电量', num: '46.2382' },{ tradname: '风电总电量', num: '135.2' },{ tradname: '核电总电量', num: '242.2' }]},
    { city: '浙江', datas: [{ tradname: '社会用电量', num: '4532.8' },{ tradname: '发电总电量', num: '3352.8' },{ tradname: '火电发电量', num: '2583.4' },{ tradname: '水电发电量', num: '129.3' },{ tradname: '光伏总电量', num: '26.94' },{ tradname: '风电总电量', num: '26.2' },{ tradname: '核电总电量', num: '0' }]},
    { city: '安徽', datas: [{ tradname: '社会用电量', num: '2135.07' },{ tradname: '发电总电量', num: '2622.8' },{ tradname: '火电发电量', num: '2491.3' },{ tradname: '水电发电量', num: '35.2' },{ tradname: '光伏总电量', num: '51.0746' },{ tradname: '风电总电量', num: '45.2' },{ tradname: '核电总电量', num: '0' }]},
    { city: '福建', datas: [{ tradname: '社会用电量', num: '2313.8' },{ tradname: '发电总电量', num: '2356.9' },{ tradname: '火电发电量', num: '1390.4' },{ tradname: '水电发电量', num: '254.2' },{ tradname: '光伏总电量', num: '3.0719' },{ tradname: '风电总电量', num: '65.6' },{ tradname: '核电总电量', num: '643.7' }]},
    { city: '江西', datas: [{ tradname: '社会用电量', num: '1428.77' },{ tradname: '发电总电量', num: '1192.5' },{ tradname: '火电发电量', num: '1056.3' },{ tradname: '水电发电量', num: '67.6' },{ tradname: '光伏总电量', num: '25.7231' },{ tradname: '风电总电量', num: '43' },{ tradname: '核电总电量', num: '0' }]},
    { city: '山东', datas: [{ tradname: '社会用电量', num: '6083.88' },{ tradname: '发电总电量', num: '5608.2' },{ tradname: '火电发电量', num: '5367.7' },{ tradname: '水电发电量', num: '4.3' },{ tradname: '光伏总电量', num: '30.7193' },{ tradname: '风电总电量', num: '166.8' },{ tradname: '核电总电量', num: '38.7' }]},
    { city: '河南', datas: [{ tradname: '社会用电量', num: '3417.68' },{ tradname: '发电总电量', num: '2916.2' },{ tradname: '火电发电量', num: '2708.3' },{ tradname: '水电发电量', num: '138.3' },{ tradname: '光伏总电量', num: '30.8337' },{ tradname: '风电总电量', num: '166.8' },{ tradname: '核电总电量', num: '38.7' }]},
    { city: '湖北', datas: [{ tradname: '社会用电量', num: '2071.63' },{ tradname: '发电总电量', num: '2773' },{ tradname: '火电发电量', num: '1237' },{ tradname: '水电发电量', num: '1449.8' },{ tradname: '光伏总电量', num: '31.919' },{ tradname: '风电总电量', num: '54.3' },{ tradname: '核电总电量', num: '0' }]},
    { city: '湖南', datas: [{ tradname: '社会用电量', num: '1745.24' },{ tradname: '发电总电量', num: '1418.8' },{ tradname: '火电发电量', num: '912.5' },{ tradname: '水电发电量', num: '447.8' },{ tradname: '光伏总电量', num: '7.4461' },{ tradname: '风电总电量', num: '51' },{ tradname: '核电总电量', num: '0' }]},
    { city: '广东', datas: [{ tradname: '社会用电量', num: '6323.35' },{ tradname: '发电总电量', num: '4369.6' },{ tradname: '火电发电量', num: '3260.1' },{ tradname: '水电发电量', num: '146.5' },{ tradname: '光伏总电量', num: '14.1087' },{ tradname: '风电总电量', num: '56.2' },{ tradname: '核电总电量', num: '892.4' }]},
    { city: '广西', datas: [{ tradname: '社会用电量', num: '1702.75' },{ tradname: '发电总电量', num: '1591.3' },{ tradname: '火电发电量', num: '825.7' },{ tradname: '水电发电量', num: '563.2' },{ tradname: '光伏总电量', num: '3.2059' },{ tradname: '风电总电量', num: '38.2' },{ tradname: '核电总电量', num: '161' }]},
    { city: '海南', datas: [{ tradname: '社会用电量', num: '326.78' },{ tradname: '发电总电量', num: '301.9' },{ tradname: '火电发电量', num: '210.3' },{ tradname: '水电发电量', num: '10.2' },{ tradname: '光伏总电量', num: '0' },{ tradname: '风电总电量', num: '4.3' },{ tradname: '核电总电量', num: '77.2' }]},
    { city: '重庆', datas: [{ tradname: '社会用电量', num: '1114' },{ tradname: '发电总电量', num: '756.6' },{ tradname: '火电发电量', num: '5367.7' },{ tradname: '水电发电量', num: '539.1' },{ tradname: '光伏总电量', num: '209.6' },{ tradname: '风电总电量', num: '0.613' },{ tradname: '核电总电量', num: '7.2' }]},
    { city: '四川', datas: [{ tradname: '社会用电量', num: '2459' },{ tradname: '发电总电量', num: '3498.6' },{ tradname: '火电发电量', num: '447.9' },{ tradname: '水电发电量', num: '2982.2' },{ tradname: '光伏总电量', num: '14.6815' },{ tradname: '风电总电量', num: '53.8' },{ tradname: '核电总电量', num: '0' }]},
    { city: '贵州', datas: [{ tradname: '社会用电量', num: '1482.12' },{ tradname: '发电总电量', num: '1945.3' },{ tradname: '火电发电量', num: '1217.6' },{ tradname: '水电发电量', num: '647.2' },{ tradname: '光伏总电量', num: '13.9989' },{ tradname: '风电总电量', num: '66.6' },{ tradname: '核电总电量', num: '0' }]},
    { city: '云南', datas: [{ tradname: '社会用电量', num: '1679.1' },{ tradname: '发电总电量', num: '3006.7' },{ tradname: '火电发电量', num: '287.3' },{ tradname: '水电发电量', num: '2476.8' },{ tradname: '光伏总电量', num: '22.9886' },{ tradname: '风电总电量', num: '219.6' },{ tradname: '核电总电量', num: '0' }]},
    { city: '西藏', datas: [{ tradname: '社会用电量', num: '69.02' },{ tradname: '发电总电量', num: '60.8' },{ tradname: '火电发电量', num: '2.2' },{ tradname: '水电发电量', num: '54.3' },{ tradname: '光伏总电量', num: '3.6974' },{ tradname: '风电总电量', num: '0' },{ tradname: '核电总电量', num: '0' }]},
    { city: '陕西', datas: [{ tradname: '社会用电量', num: '1384.84' },{ tradname: '发电总电量', num: '1782.2' },{ tradname: '火电发电量', num: '1566.6' },{ tradname: '水电发电量', num: '115.4' },{ tradname: '光伏总电量', num: '39.833' },{ tradname: '风电总电量', num: '60.4' },{ tradname: '核电总电量', num: '0' }]},
    { city: '甘肃', datas: [{ tradname: '社会用电量', num: '1289.52' },{ tradname: '发电总电量', num: '1427.3' },{ tradname: '火电发电量', num: '776.8' },{ tradname: '水电发电量', num: '348.4' },{ tradname: '光伏总电量', num: '76.1446' },{ tradname: '风电总电量', num: '226' },{ tradname: '核电总电量', num: '0' }]},
    { city: '青海', datas: [{ tradname: '社会用电量', num: '738.34' },{ tradname: '发电总电量', num: '717.4' },{ tradname: '火电发电量', num: '123.1' },{ tradname: '水电发电量', num: '478.2' },{ tradname: '光伏总电量', num: '94.7377' },{ tradname: '风电总电量', num: '21.3' },{ tradname: '核电总电量', num: '0' }]},
    { city: '宁夏', datas: [{ tradname: '社会用电量', num: '935.15' },{ tradname: '发电总电量', num: '1525.7' },{ tradname: '火电发电量', num: '1261.9' },{ tradname: '水电发电量', num: '19.7' },{ tradname: '光伏总电量', num: '73.6182' },{ tradname: '风电总电量', num: '170.5' },{ tradname: '核电总电量', num: '0' }]},
    { city: '新疆', datas: [{ tradname: '社会用电量', num: '2138.33' },{ tradname: '发电总电量', num: '3147.6' },{ tradname: '火电发电量', num: '2517.8' },{ tradname: '水电发电量', num: '216.7' },{ tradname: '光伏总电量', num: '85.3694' },{ tradname: '风电总电量', num: '327.7' },{ tradname: '核电总电量', num: '0' }]},
    
    ]

const purchase_data=[
    
        { city: '北京', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3598,unit:'元/千瓦时'},{name:'平均交易价差',num:0.045,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:173.04,unit:'亿千瓦时'},{name:'直接交易电量',num:34.59,unit:'亿千瓦时'},{name:'新能源交易电量',num:69.56,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:92,unit:'家'},{name:'发电厂数量',num:32,unit:'家'},{name:'售电公司数量',num:120,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '天津', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3655,unit:'元/千瓦时'},{name:'平均交易价差',num:0.055,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:171.34,unit:'亿千瓦时'},{name:'直接交易电量',num:128.27,unit:'亿千瓦时'},{name:'新能源交易电量',num:49.72,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:209,unit:'家'},{name:'发电厂数量',num:'32/19',unit:'家'},{name:'售电公司数量',num:91,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '冀北', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.372,unit:'元/千瓦时'},{name:'平均交易价差',num:0.013,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:254.19,unit:'亿千瓦时'},{name:'直接交易电量',num:195.88,unit:'亿千瓦时'},{name:'新能源交易电量',num:93.9,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:550,unit:'家'},{name:'发电厂数量',num:32,unit:'家'},{name:'售电公司数量',num:'参与40',unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:5,unit:'%'}]}
        
        ]},
        
        { city: '冀南', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.644,unit:'元/千瓦时'},{name:'平均交易价差',num:0.015,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:500.15,unit:'亿千瓦时'},{name:'直接交易电量',num:335.42,unit:'亿千瓦时'},{name:'新能源交易电量',num:357.24,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:279,unit:'家'},{name:'发电厂数量',num:28,unit:'家'},{name:'售电公司数量',num:64,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '山西', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.332,unit:'元/千瓦时'},{name:'平均交易价差',num:0.034,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:812.56,unit:'亿千瓦时'},{name:'直接交易电量',num:656,unit:'亿千瓦时'},{name:'新能源交易电量',num:292.59,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:208,unit:'家'},{name:'发电厂数量',num:'56/206',unit:'家'},{name:'售电公司数量',num:64,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:2,unit:'%'},{name:'负偏差',num:-2,unit:'%'}]}
        
        ]},
        
        { city: '山东', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3949,unit:'元/千瓦时'},{name:'平均交易价差',num:0.01,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:1769.35,unit:'亿千瓦时'},{name:'直接交易电量',num:1263.35,unit:'亿千瓦时'},{name:'新能源交易电量',num:379.07,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:10000,unit:'家'},{name:'发电厂数量',num:'48/159',unit:'家'},{name:'售电公司数量',num:'参与70',unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:6,unit:'%'},{name:'负偏差',num:-2,unit:'%'}]}
        
        ]},
        
        { city: '上海', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.4155,unit:'元/千瓦时'},{name:'平均交易价差',num:0.03,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:301.33,unit:'亿千瓦时'},{name:'直接交易电量',num:155.34,unit:'亿千瓦时'},{name:'新能源交易电量',num:32.41,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:84,unit:'家'},{name:'发电厂数量',num:'24/159',unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:2,unit:'%'},{name:'负偏差',num:-2,unit:'%'}]}
        
        ]},
        
        { city: '江苏', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.391,unit:'元/千瓦时'},{name:'平均交易价差',num:0.022,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:2757.51,unit:'亿千瓦时'},{name:'直接交易电量',num:2056.13,unit:'亿千瓦时'},{name:'新能源交易电量',num:288.76,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:3806,unit:'家'},{name:'发电厂数量',num:1040,unit:'家'},{name:'售电公司数量',num:212,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:3,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '浙江', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.4153,unit:'元/千瓦时'},{name:'平均交易价差',num:0.03,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:1299.31,unit:'亿千瓦时'},{name:'直接交易电量',num:992.35,unit:'亿千瓦时'},{name:'新能源交易电量',num:51.48,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:700,unit:'家'},{name:'发电厂数量',num:147,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '安徽', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3844,unit:'元/千瓦时'},{name:'平均交易价差',num:0.055,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:700.64,unit:'亿千瓦时'},{name:'直接交易电量',num:571.03,unit:'亿千瓦时'},{name:'新能源交易电量',num:129.07,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:6084,unit:'家'},{name:'发电厂数量',num:162,unit:'家'},{name:'售电公司数量',num:190,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '福建', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3932,unit:'元/千瓦时'},{name:'平均交易价差',num:0.03,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:635.28,unit:'亿千瓦时'},{name:'直接交易电量',num:526.45,unit:'亿千瓦时'},{name:'新能源交易电量',num:81.13,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:1520,unit:'家'},{name:'发电厂数量',num:'风135火48',unit:'家'},{name:'售电公司数量',num:'参与42',unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:3,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '湖北', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.4161,unit:'元/千瓦时'},{name:'平均交易价差',num:0.021,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:492.5,unit:'亿千瓦时'},{name:'直接交易电量',num:413.42,unit:'亿千瓦时'},{name:'新能源交易电量',num:256.16,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:'1239/1270',unit:'家'},{name:'发电厂数量',num:1417,unit:'家'},{name:'售电公司数量',num:68,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:3,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '湖南', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.45,unit:'元/千瓦时'},{name:'平均交易价差',num:0.0075,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:443.79,unit:'亿千瓦时'},{name:'直接交易电量',num:300.25,unit:'亿千瓦时'},{name:'新能源交易电量',num:115.08,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:6000,unit:'家'},{name:'发电厂数量',num:138,unit:'家'},{name:'售电公司数量',num:200,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:3,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '河南', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3779,unit:'元/千瓦时'},{name:'平均交易价差',num:0.01,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:1175.55,unit:'亿千瓦时'},{name:'直接交易电量',num:995.4,unit:'亿千瓦时'},{name:'新能源交易电量',num:144.7,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:9311,unit:'家'},{name:'发电厂数量',num:127,unit:'家'},{name:'售电公司数量',num:350,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '江西', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.4143,unit:'元/千瓦时'},{name:'平均交易价差',num:0.015,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:339.97,unit:'亿千瓦时'},{name:'直接交易电量',num:263.23,unit:'亿千瓦时'},{name:'新能源交易电量',num:94.61,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:3000,unit:'家'},{name:'发电厂数量',num:115,unit:'家'},{name:'售电公司数量',num:80,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '辽宁', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3749,unit:'元/千瓦时'},{name:'平均交易价差',num:0.012,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:833.03,unit:'亿千瓦时'},{name:'直接交易电量',num:785.09,unit:'亿千瓦时'},{name:'新能源交易电量',num:248.44,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:450,unit:'家'},{name:'发电厂数量',num:158,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '吉林', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3731,unit:'元/千瓦时'},{name:'平均交易价差',num:0.013,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:157.14,unit:'亿千瓦时'},{name:'直接交易电量',num:128.91,unit:'亿千瓦时'},{name:'新能源交易电量',num:119.94,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:170,unit:'家'},{name:'发电厂数量',num:'风158火47',unit:'家'},{name:'售电公司数量',num:62,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-10,unit:'%'}]}
        
        ]},
        
        { city: '黑龙江', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.374,unit:'元/千瓦时'},{name:'平均交易价差',num:0.03,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:170.46,unit:'亿千瓦时'},{name:'直接交易电量',num:105.62,unit:'亿千瓦时'},{name:'新能源交易电量',num:137.53,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:800,unit:'家'},{name:'发电厂数量',num:'风262火63',unit:'家'},{name:'售电公司数量',num:117,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '蒙东', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3035,unit:'元/千瓦时'},{name:'平均交易价差',num:0.045,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:93.24,unit:'亿千瓦时'},{name:'直接交易电量',num:92.44,unit:'亿千瓦时'},{name:'新能源交易电量',num:227.66,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:1200,unit:'家'},{name:'发电厂数量',num:'风13火152',unit:'家'},{name:'售电公司数量',num:43,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '蒙西', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.2829,unit:'元/千瓦时'},{name:'平均交易价差',num:0,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:0,unit:'亿千瓦时'},{name:'直接交易电量',num:0,unit:'亿千瓦时'},{name:'新能源交易电量',num:0,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:0,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '陕西', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3545,unit:'元/千瓦时'},{name:'平均交易价差',num:0.04,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:570.4,unit:'亿千瓦时'},{name:'直接交易电量',num:414.76,unit:'亿千瓦时'},{name:'新能源交易电量',num:122.28,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:363,unit:'家'},{name:'发电厂数量',num:221,unit:'家'},{name:'售电公司数量',num:'参与46',unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:5,unit:'%'},{name:'负偏差',num:-5,unit:'%'}]}
        
        ]},
        
        { city: '甘肃', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3078,unit:'元/千瓦时'},{name:'平均交易价差',num:0.03,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:406.11,unit:'亿千瓦时'},{name:'直接交易电量',num:341.76,unit:'亿千瓦时'},{name:'新能源交易电量',num:305.8,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:978,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '青海', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3247,unit:'元/千瓦时'},{name:'平均交易价差',num:0.05,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:255.17,unit:'亿千瓦时'},{name:'直接交易电量',num:175.84,unit:'亿千瓦时'},{name:'新能源交易电量',num:179.61,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:459,unit:'家'},{name:'售电公司数量',num:186,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:3,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '宁夏', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.2595,unit:'元/千瓦时'},{name:'平均交易价差',num:0.0075,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:366.22,unit:'亿千瓦时'},{name:'直接交易电量',num:310.6,unit:'亿千瓦时'},{name:'新能源交易电量',num:278.11,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:42,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-2,unit:'%'}]}
        
        ]},
        
        { city: '新疆', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.25,unit:'元/千瓦时'},{name:'平均交易价差',num:0.0898,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:487.54,unit:'亿千瓦时'},{name:'直接交易电量',num:286.59,unit:'亿千瓦时'},{name:'新能源交易电量',num:459.76,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:486,unit:'家'},{name:'发电厂数量',num:88,unit:'家'},{name:'售电公司数量',num:'估80',unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:3,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        { city: '四川', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:'火0.4012水0.288',unit:'元/千瓦时'},{name:'平均交易价差',num:0.02,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:685.74,unit:'亿千瓦时'},{name:'直接交易电量',num:592.02,unit:'亿千瓦时'},{name:'新能源交易电量',num:76.61,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:'火51水3267',unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:4,unit:'%'},{name:'负偏差',num:-4,unit:'%'}]}
        
        ]},
        
        
        { city: '重庆', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3964,unit:'元/千瓦时'},{name:'平均交易价差',num:0.002,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:300.07,unit:'亿千瓦时'},{name:'直接交易电量',num:218.85,unit:'亿千瓦时'},{name:'新能源交易电量',num:19.57,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:2881,unit:'家'},{name:'发电厂数量',num:'火8水1231',unit:'家'},{name:'售电公司数量',num:120,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:3,unit:'%'},{name:'负偏差',num:-3,unit:'%'}]}
        
        ]},
        
        
        { city: '广东', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.453,unit:'元/千瓦时'},{name:'平均交易价差',num:0.038,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:1600,unit:'亿千瓦时'},{name:'直接交易电量',num:1094,unit:'亿千瓦时'},{name:'新能源交易电量',num:180,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:5755,unit:'家'},{name:'发电厂数量',num:203,unit:'家'},{name:'售电公司数量',num:378,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:2,unit:'%'},{name:'负偏差',num:-2,unit:'%'}]}
        
        ]},
        
        { city: '贵州', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3515,unit:'元/千瓦时'},{name:'平均交易价差',num:0,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:0,unit:'亿千瓦时'},{name:'直接交易电量',num:0,unit:'亿千瓦时'},{name:'新能源交易电量',num:0,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:65,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-0,unit:'%'}]}
        
        ]},
        
        { city: '广西', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.4207,unit:'元/千瓦时'},{name:'平均交易价差',num:0,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:0,unit:'亿千瓦时'},{name:'直接交易电量',num:0,unit:'亿千瓦时'},{name:'新能源交易电量',num:0,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:0,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-0,unit:'%'}]}
        
        ]},
        
        { city: '云南', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.3358,unit:'元/千瓦时'},{name:'平均交易价差',num:0,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:0,unit:'亿千瓦时'},{name:'直接交易电量',num:0,unit:'亿千瓦时'},{name:'新能源交易电量',num:0,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:9624,unit:'家'},{name:'发电厂数量',num:453,unit:'家'},{name:'售电公司数量',num:120,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-0,unit:'%'}]}
        
        ]},
        
        
        { city: '海南', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.4298,unit:'元/千瓦时'},{name:'平均交易价差',num:0,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:0,unit:'亿千瓦时'},{name:'直接交易电量',num:0,unit:'亿千瓦时'},{name:'新能源交易电量',num:0,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:0,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-0,unit:'%'}]}
        
        ]},
        
        
        { city: '西藏', datas: [{ title: '电价情况', data:[{name:'燃煤标杆电价',num:0.4993,unit:'元/千瓦时'},{name:'平均交易价差',num:0,unit:'元/千瓦时'}] },{ title: '交易电量', data:[{name:'市场化交易电量',num:0,unit:'亿千瓦时'},{name:'直接交易电量',num:0,unit:'亿千瓦时'},{name:'新能源交易电量',num:0,unit:'亿千瓦时'}] },{ title: '参与市场主体', data:[{name:'电力用户数量',num:0,unit:'家'},{name:'发电厂数量',num:0,unit:'家'},{name:'售电公司数量',num:0,unit:'家'}]},{ title: '偏差考核范围', data:[{name:'正偏差',num:0,unit:'%'},{name:'负偏差',num:-0,unit:'%'}]}
        
        ]}
        ]

//表5 鼠标放上去展示的数据
const platform_data=[
       
    {city:'北京',num_1:'950%',num_2:'0.7783',num_3:'17.30',num_4:'13.91',num_5:'0.3598',num_6:'0.045',num_7:'174',num_8:'696',num_9:'50',num_10:'12',num_11:'35'},
      
    {city:'天津',num_1:'930%',num_2:'3.5274',num_3:'64.14',num_4:'9.94',num_5:'0.3655',num_6:'0.055',num_7:'135',num_8:'540',num_9:'112',num_10:'15',num_11:'31'},
      
    {city:'冀北',num_1:'890%',num_2:'1.2732',num_3:'97.94',num_4:'18.78',num_5:'0.372',num_6:'0.013', num_7:'201',num_8:'804',num_9:'182',num_10:'21',num_11:'28'},
    
    {city:'冀南',num_1:'960%',num_2:'2.5157',num_3:'167.71',num_4:'71.45',num_5:'0.3644',num_6:'0.015', num_7:'122',num_8:'488',num_9:'91',num_10:'11',num_11:'46'},
     
    {city:'山西',num_1:'840%',num_2:'11.1520',num_3:'328.00',num_4:'58.52',num_5:'0.332',num_6:'0.034', num_7:'216',num_8:'864',num_9:'86',num_10:'50',num_11:'56'},
     
    {city:'山东',num_1:'930%',num_2:'6.3168',num_3:'631.68',num_4:'75.81',num_5:'0.3949',num_6:'0.01', num_7:'189',num_8:'756',num_9:'335',num_10:'30',num_11:'33'},
     
    {city:'上海',num_1:'950%',num_2:'2.3301',num_3:'77.67',num_4:'6.48',num_5:'0.4155',num_6:'0.03', num_7:'23',num_8:'92',num_9:'84',num_10:'17',num_11:'0'},
     
    {city:'江苏',num_1:'910%',num_2:'22.6174',num_3:'1028.07',num_4:'57.75',num_5:'0.391',num_6:'0.022', num_7:'94',num_8:'376',num_9:'98',num_10:'26',num_11:'89'},
    
    {city:'浙江',num_1:'970%',num_2:'14.8853',num_3:'496.18',num_4:'10.30',num_5:'0.4153',num_6:'0.03', num_7:'140',num_8:'560',num_9:'125',num_10:'47',num_11:'0'},
    
    {city:'安徽',num_1:'940%',num_2:'15.7033',num_3:'285.52',num_4:'25.81',num_5:'0.3844',num_6:'0.055', num_7:'56',num_8:'224',num_9:'150',num_10:'65',num_11:'46'},
    
    {city:'福建',num_1:'970%',num_2:'7.8968',num_3:'263.23',num_4:'16.23',num_5:'0.3932',num_6:'0.03', num_7:'74',num_8:'296',num_9:'38',num_10:'54',num_11:'22'},
    
    {city:'湖北',num_1:'960%',num_2:'4.3409',num_3:'206.71',num_4:'51.23',num_5:'0.4161',num_6:'0.021', num_7:'45',num_8:'180',num_9:'500',num_10:'79',num_11:'38'},
    
    {city:'湖南',num_1:'970%',num_2:'1.1259',num_3:'150.13',num_4:'23.02',num_5:'0.45',num_6:'0.0075', num_7:'68',num_8:'272',num_9:'658',num_10:'34',num_11:'67'},
    
    {city:'河南',num_1:'990%',num_2:'4.9770',num_3:'497.70',num_4:'28.94',num_5:'0.3779',num_6:'0.01', num_7:'302',num_8:'1208',num_9:'331',num_10:'55',num_11:'124'},
    
    {city:'江西',num_1:'970%',num_2:'1.9742',num_3:'131.62',num_4:'18.92',num_5:'0.4143',num_6:'0.015', num_7:'15',num_8:'60',num_9:'165',num_10:'36',num_11:'41'},
    
    {city:'辽宁',num_1:'950%',num_2:'4.7105',num_3:'392.55',num_4:'49.69',num_5:'0.3749',num_6:'0.012', num_7:'36',num_8:'144',num_9:'133',num_10:'48',num_11:'15'},
    
    {city:'吉林',num_1:'900%',num_2:'0.8379',num_3:'64.46',num_4:'23.99',num_5:'0.3731',num_6:'0.013', num_7:'52',num_8:'208',num_9:'56',num_10:'26',num_11:'26'},

    {city:'黑龙江',num_1:'920%',num_2:'1.5843',num_3:'52.81',num_4:'27.51',num_5:'0.374',num_6:'0.03', num_7:'70',num_8:'280',num_9:'287',num_10:'37',num_11:'57'},
    
    {city:'蒙东',num_1:'970%',num_2:'2.0799',num_3:'46.22',num_4:'45.53',num_5:'0.3035',num_6:'0.045', num_7:'88',num_8:'352',num_9:'40',num_10:'6',num_11:'18'},
    
    {city:'蒙西',num_1:'950%',num_2:'0.0000',num_3:'0.00',num_4:'0.00',num_5:'0.2829',num_6:'0.00', num_7:'66',num_8:'264',num_9:'20',num_10:'0',num_11:'0'},
    
    {city:'陕西',num_1:'960%',num_2:'8.2952',num_3:'207.38',num_4:'24.46',num_5:'0.3545',num_6:'0.04', num_7:'178',num_8:'712',num_9:'79',num_10:'68',num_11:'55'},
    
    {city:'甘肃',num_1:'970%',num_2:'5.1264',num_3:'170.88',num_4:'61.16',num_5:'0.3078',num_6:'0.03', num_7:'63',num_8:'252',num_9:'99',num_10:'70',num_11:'18'},
    
    {city:'青海',num_1:'930%',num_2:'4.3960',num_3:'87.92',num_4:'35.92',num_5:'0.3247',num_6:'0.05', num_7:'45',num_8:'180',num_9:'62',num_10:'21',num_11:'71'},
    
    {city:'宁夏',num_1:'970%',num_2:'1.1648',num_3:'155.30',num_4:'55.62',num_5:'0.2595',num_6:'0.0075', num_7:'18',num_8:'72',num_9:'33',num_10:'15',num_11:'20'},
    
    {city:'新疆',num_1:'910%',num_2:'12.8679',num_3:'143.30',num_4:'91.95',num_5:'0.25',num_6:'0.0898', num_7:'54',num_8:'216',num_9:'123',num_10:'22',num_11:'39'},
    
    {city:'四川',num_1:'990%',num_2:'5.9202',num_3:'296.01',num_4:'15.32',num_5:'0.288',num_6:'0.02', num_7:'131',num_8:'524',num_9:'270',num_10:'334',num_11:'73'},
    
    {city:'重庆',num_1:'970%',num_2:'0.2189',num_3:'109.43',num_4:'3.91',num_5:'0.3964',num_6:'0.002', num_7:'88',num_8:'352',num_9:'40',num_10:'6',num_11:'18'},
    
    {city:'广东',num_1:'970%',num_2:'30.4',num_3:'800',num_4:'150',num_5:'0.453',num_6:'0.038', num_7:'275',num_8:'1100',num_9:'532',num_10:'91',num_11:'308'},
    
    {city:'贵州',num_1:'980%',num_2:'0',num_3:'0',num_4:'0',num_5:'0.3515',num_6:'0', num_7:'41',num_8:'164',num_9:'47',num_10:'23',num_11:'94'},
    
    {city:'广西',num_1:'960%',num_2:'0',num_3:'0',num_4:'0',num_5:'0.4207',num_6:'0', num_7:'37',num_8:'148',num_9:'63',num_10:'0',num_11:'36'},
    
    {city:'云南',num_1:'970%',num_2:'0',num_3:'0',num_4:'0',num_5:'0.3358',num_6:'0', num_7:'46',num_8:'184',num_9:'169',num_10:'113',num_11:'45'},
    
    {city:'海南',num_1:'000%',num_2:'0',num_3:'0',num_4:'0',num_5:'0.4298',num_6:'0', num_7:'0',num_8:'0',num_9:'0',num_10:'0',num_11:'0'},
    
    {city:'西藏',num_1:'000%',num_2:'0',num_3:'0',num_4:'0',num_5:'0.4993',num_6:'0', num_7:'0',num_8:'0',num_9:'0',num_10:'0',num_11:'0'}
    
   ]

//表3 城市数据
var geoCoordMap = {
    
    '扎鲁特':[120.889877,44.583173],
       
    '锡林浩特':[116.032676,43.926907],
       
    '锡林郭勒盟':[115.312747,44.583755],
      
    '承德':[117.967096,40.966355],
      
    '张北':[114.718905,41.159079],
      
    '北京西':[116.327811,39.900677],
     
    '北京东':[116.490672,39.908173],
     
    '天津南':[117.06566,39.062374],
     
    '雄安':[115.978733,38.945535],
     
    '青州':[118.496307,36.702686],
     
    '济南':[117.140197,36.65308],
     
    '潍坊':[119.155726,36.723527],
     
    '临沂':[118.360662,35.117522],
     
    '石家庄':[114.525553,38.051267],
     
    '晋中':[112.754994,37.699008],
     
    '陕北':[111.153657,37.54019],
     
    '榆横':[109.472661,38.251369],
     
    '宁东': [106.334939,38.113884],
    '西宁': [101.775247,36.630104],
    '酒泉': [98.500681,39.741353],
    '哈密南': [93.462175,42.778173],
    '晋东南': [113.009717,36.243802],
    '郑州': [113.642339,34.766014],
    '南阳': [112.52659,33.009466],
    '驻马店': [114.035941,33.034552],
    '淮南': [116.997906,32.646266],
    '南京': [118.809321,32.072317],
    '南通': [120.897414,31.995914],
    '泰州': [119.920372,32.466768],
    '苏南': [119.808834,31.338958],
    '浙北': [120.094161,30.894672],
    '皖南': [118.438874,31.372534],
    '上海': [121.479543,31.237996],
    '苏州': [120.591358,31.325165],
    '绍兴': [120.591358,30.041168],
    '金华': [119.648496,29.088182],
    '浙中': [120.064169,28.943167],
    '浙南': [119.804307,27.973717],
    '福州': [119.298948,26.080537],
    '荆门': [112.209673,31.051858],
    '武汉': [114.305815,30.596361],
    '湖北': [114.334561,29.860447],
    '南昌': [115.878784,28.700127],
    '长沙': [112.935217,28.253073],
    '锦屏': [114.334561,29.860447],
    '雅中': [108.684046,26.543584],
    '广州': [113.274172,23.161667],
    '深圳': [114.060656,22.552105],
    '云南': [103.054473,24.148861],
    '大理': [100.267283,25.875588],
    '糯扎渡': [100.277315,22.580939],
    '白鹤滩': [102.931709,26.918617],
    '向家坝': [104.424275,28.629393],
    '溪洛渡': [103.644131,28.234835],
    '准东':[87.89407,44.154947],
    '湘潭':[87.89407,44.154947],
    '成都': [104.042135,30.630387]
};

//表3 初始化飞线数据
var XAData = [
    [{ name: '扎鲁特' }, { name: '扎鲁特' }],
    [{ name: '扎鲁特' }, { name: '潍坊' }],
    [{ name: '济南' }, { name: '潍坊' }],
    [{ name: '承德' }, { name: '济南' }],
    [{ name: '石家庄' }, { name: '济南' }],
    [{ name: '张北' }, { name: '张北' }],
    [{ name: '张北' }, { name: '雄安' }],
    [{ name: '天津南' }, { name: '天津南' }],
    [{ name: '天津南' }, { name: '北京西' }],
    [{ name: '锡林郭勒盟' }, { name: '北京东' }],
    [{ name: '锡林浩特' }, { name: '锡林浩特' }],
    [{ name: '锡林浩特' }, { name: '泰州' }],
    [{ name: '临沂' }, { name: '临沂' }],
    [{ name: '临沂' }, { name: '上海' }],
    [{ name: '北京西' }, { name: '郑州' }],
    [{ name: '北京西' }, { name: '石家庄' }],

    [{ name: '晋中' }, { name: '石家庄' }],
    [{ name: '榆横' }, { name: '榆横' }],
    [{ name: '榆横' }, { name: '晋中' }],
    [{ name: '陕北' }, { name: '湖北' }],
    [{ name: '晋东南' }, { name: '南阳' }],
    [{ name: '哈密南' }, { name: '哈密南' }],
    [{ name: '哈密南' }, { name: '郑州' }],
    [{ name: '西宁' }, { name: '西宁' }],
    [{ name: '西宁' }, { name: '郑州' }],
    [{ name: '晋北' }, { name: '南京' }],
    [{ name: '白鹤滩' }, { name: '南京' }],
    [{ name: '南京' }, { name: '上海' }],
    [{ name: '溪洛渡' }, { name: '溪洛渡' }],
    [{ name: '溪洛渡' }, { name: '上海' }],
    [{ name: '锦屏' }, { name: '锦屏' }],
    [{ name: '锦屏' }, { name: '苏南' }],
    [{ name: '宁东' }, { name: '宁东' }],
    [{ name: '宁东' }, { name: '绍兴' }],
    [{ name: '向家坝' }, { name: '向家坝' }],
    [{ name: '向家坝' }, { name: '金华' }],
    [{ name: '浙南' }, { name: '浙中' }],
    [{ name: '浙中' }, { name: '浙北' }],
    [{ name: '浙南' }, { name: '福州' }],
    [{ name: '南昌' }, { name: '金华' }],
    [{ name: '雅中' }, { name: '雅中' }],
    [{ name: '雅中' }, { name: '南昌' }],
    [{ name: '湘潭' }, { name: '湘潭' }],
    [{ name: '湘潭' }, { name: '酒泉' }],
    [{ name: '长沙' }, { name: '长沙' }],
    [{ name: '长沙' }, { name: '荆门' }],
    [{ name: '南阳' }, { name: '荆门' }],
    [{ name: '晋东南' }, { name: '晋东南' }],
    [{ name: '晋东南' }, { name: '南阳' }],
    [{ name: '武汉' }, { name: '南昌' }],
    [{ name: '荆门' }, { name: '武汉' }],
    [{ name: '成都' }, { name: '武汉' }],
    [{ name: '准东' }, { name: '成都' }],
    [{ name: '准东' }, { name: '皖南' }],
    [{ name: '白鹤滩' }, { name: '白鹤滩' }],
    [{ name: '白鹤滩' }, { name: '上海' }],
    [{ name: '大理' }, { name: '大理' }],
    [{ name: '大理' }, { name: '深圳' }],
    
    [{ name: '云南' }, { name: '云南' }],
    [{ name: '云南' }, { name: '广州' }],
    [{ name: '糯扎渡' }, { name: '糯扎渡' }], 
    [{ name: '糯扎渡' }, { name: '广州' }], 
];

