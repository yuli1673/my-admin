(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399327a4"],{2882:function(t,e,n){},"4b58":function(t,e,n){"use strict";n("2882")},e7a9:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart-line",attrs:{id:"main"}})},a=[],o=n("313e"),s=n("2c0b"),c={mixins:[s["a"]],props:{options:{type:Object,default:function(){return{}}}},data:function(){return{myChart:null,option:{title:{text:"堆叠区域图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{show:!0,position:"top"},data:[820,932,901,934,1290,1330,1320]}]}}},mounted:function(){this.init()},methods:{init:function(){this.myChart=o["init"](this.$el),this.setOption(this.options)},setOption:function(){this.myChart.setOption(this.option)}},watch:{options:{handler:function(){},deep:!0}}},l=c,r=(n("4b58"),n("2877")),p=Object(r["a"])(l,i,a,!1,null,"87177964",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-399327a4.6174ccea.js.map