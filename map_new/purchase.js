
formdata=[];
for(var item of purchase_data){
    var obj={
        name: item.city,
        value:'<br/>'
    }
    for(var data of item.datas){
        obj.value+='<h3 style="font-size:14px;">'+data.title+'</h3>'
        for(var item of data.data){
            obj.value+='<div style="height:20px;font-size:12px;">'+item.name+' <span style="padding-left:4px;color:'+(!isNaN(item.num) &&item.num>0?'rgb(117, 157, 36)':'red')+'">'+item.num+' </span><span style="color:green;">'+item.unit+'</span></div>'
        }
    }
    formdata.push(obj);
}
//console.log(formdata)
data=[{name: '北京'},{name: '天津'},{name: '冀北'},{name: '冀南'},{name: '山西'},{name: '山东'},{name: '上海'},{name: '江苏'},{name: '浙江'},{name: '安徽'},{name: '福建'},{name: '湖北'},{name: '湖南'},{name: '河南'},{name: '江西'},{name: '辽宁'},{name: '吉林'},{name: '黑龙江'},{name: '蒙东'},{name: '蒙西'},{name: '陕西'},{name: '甘肃'},{name: '青海'},{name: '宁夏'},{name: '新疆'},{name: '四川'},{name: '重庆'},{name: '广东'},{name: '贵州'},{name: '广西'},{name: '云南'},{name: '海南'},{name: '西藏'}];
let r=[];
for(var dt of data){
    
    let i=formdata.findIndex(function(value,index){
        //console.log(value,index)
        return value.name==dt.name
    })
    //console.log(i,dt)
    if(i>=0){
        r.push({
            name:dt.name,
            value:[dt.value,formdata[i].value]
        })
    }
}
option = {
    backgroundColor: "#123456",
    title : {
        text: '全国电力市场购售电交易',
        left: 'center',
        textStyle:{
            color:'#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if (params.data) {
                return params.name + ' : ' + params.data.value[1]+'<br/>';
            } else {
                return params.name;
            }
        }
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data:['area']
    // },
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
            name: 'area',
            type: 'map',
            mapType: 'china',
            roam: false,
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
                    areaColor: '#062031',
                    borderWidth: 1,
                    borderColor: '#404a59'//省份分界线颜色
                },
                emphasis: {
                    areaColor: '#90EE90'//省份块颜色
                }
            },
            /* data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
                {name: '天津',value: Math.round(Math.random()*1000)},
                {name: '上海',value: Math.round(Math.random()*1000)},
                {name: '重庆',value: Math.round(Math.random()*1000)},
                {name: '河北',value: Math.round(Math.random()*1000)},
                {name: '河南',value: Math.round(Math.random()*1000)},  
                {name: '澳门',value: Math.round(Math.random()*1000)}
            ], */
            data:r
        }
    ]
};