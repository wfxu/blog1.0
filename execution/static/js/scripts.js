// 基于准备好的dom，初始化echarts实例
var myChart12 = echarts.init(document.getElementById('echarts12'),'shine');
var myChart13 = echarts.init(document.getElementById('echarts13'),'shine');
var myChart22 = echarts.init(document.getElementById('echarts22'),'shine');

// 指定图表的配置项和数据
var option12 = {
	title:{
		text:'全省年度执行偏差对比分析',
		x: 'center'
	},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
    	show:true,
    	itemSize:16,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        },
    },
    legend: {
        data:['预算','发生额','执行率'],
       	y:'bottom',
    },
    xAxis: [
        {
            type: 'category',
            data: ['合肥','安庆','芜湖','马鞍山','阜阳','蚌埠','铜陵','淮南','淮北','滁州','黄山','宿州'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '金额（单位：万元）',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 万元'
            }
        },
        {
            type: 'value',
            name: '执行率（单位：%）',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'预算',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'发生额',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'执行率',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};

var option13 = {
	title:{
		text:'年度执行偏差执行率趋势分析',
		subtext:'某某区域',
		x:'center'
	},
	tooltip:{
		trigger:'item',
		formatter:'{b}<br />{c}%'
	},
	toolbox:{
		show:true,
		feature : {
             dataView : {show: true, readOnly: false},
            dataZoom:{show:true},
            magicType:{show:true},
            saveAsImage : {show: true},
            restore : {show: true},
            myTool2: {
                show: true,
                title: '自定义扩展方法',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function (){
                    alert('这是一个徐文汾自定义的工具箱，您想干嘛就干嘛')
                }
            }
        },
        y:25,
	},
    xAxis: {
        type: 'category',
        name:'月份',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        type: 'value',
        name:'执行率（单位：%）',
    },
    series: [{
        data: [0, 0, 8, 10, 20, 40, 45, 48, 55, 68, 77, 89],
        type: 'line'
    }]
};

// 地图
var option22 = {
    title : {
        text: '年度执行偏差执行率分布监测',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter:'{b}<br />{c}%'
    },
    dataRange: {
        min: 0,
        max: 100,
        x: 'left',
        y: 'bottom',
        text:['执行率过高','执行率过低'],           // 文本，默认为数值文本
        calculable : true,
        color:['#CD0000',"#f0ffff",'#76EE00']
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            dataView : {show: true, readOnly: false},
            dataZoom:{show:true},
            magicType:{show:true},
            saveAsImage : {show: true},
            restore : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            type: 'map',
            mapType: '安徽',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '合肥市',value: Math.round(Math.random()*100)},
                {name: '阜阳市',value: Math.round(Math.random()*100)},
                {name: '安庆市',value: Math.round(Math.random()*100)},
                {name: '蚌埠市',value: Math.round(Math.random()*100)},
                {name: '芜湖市',value: Math.round(Math.random()*100)},
                {name: '马鞍山市',value: Math.round(Math.random()*100)},
                {name: '淮南市',value: Math.round(Math.random()*100)},
                {name: '淮北市',value: Math.round(Math.random()*100)},
                {name: '滁州市',value: Math.round(Math.random()*100)},
                {name: '铜陵市',value: Math.round(Math.random()*100)},
                {name: '宣城市',value: Math.round(Math.random()*100)},
                {name: '六安市',value: Math.round(Math.random()*100)},
                {name: '宿州市',value: Math.round(Math.random()*100)},
                {name: '亳州市',value: Math.round(Math.random()*100)},
                {name: '黄山市',value: Math.round(Math.random()*100)},
                {name: '池州市',value: Math.round(Math.random()*100)}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart12.setOption(option12);
myChart13.setOption(option13);
myChart22.setOption(option22);