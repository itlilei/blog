formdata=[];
data=[];
for(var item of power_data){
    data.push({name:item.city});
    var obj={
        name: item.city,
        value:'<h3 font-size:14px;>发电情况</h3>'
    }
    for(var d of item.datas){
        obj.value+='<div style="height:20px;font-size:12px;padding-right:20px;">'+d.tradname+' :    <span style="color:rgb(117, 157, 36)">'+d.num+'</span>     <span style="color:green;"> 亿千瓦时</span></div>';
    }
    obj.value+='<h3>发电种类百分比</h3><img style="width:200px;height:150px;" src="img/pie.png"/>'
    formdata.push(obj);
}


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
        text: '全国发用电数据统计',
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