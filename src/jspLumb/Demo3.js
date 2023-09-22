import React, {Component} from 'react';
// import './TablePage.css';
import "./demo.less";
// import {Table,Row, Col,Button} from 'antd';
import $ from 'jquery';
import 'antd/dist/antd.css';
import jsplumb from 'jsplumb';
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import block0 from "./images/little-icon/screen.gif"
import block1 from "./images/little-icon/camera.gif"
import block2 from "./images/little-icon/print.gif"
import block3 from "./images/little-icon/firework.gif"
import logo from "./images/logo.gif"
import ModelChart from "./modelChart.js"

const jsPlumb = jsplumb.jsPlumb;
class TablePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            new_value:"",
            form_info:[{
                title: '工序号',
                dataIndex: 'tp_no',
                key: 'tp_no',
              }],
            conn_data :[
                [{
                "lineColor": "#61b7cf",
                "connectionLabel": "安装",
                "PageSourceId": "uiprint_0",
                "PageTargetId": "uiprint_1"
            },
            {
                "lineColor": "#2f8e00",
                "connectionLabel": "连接",
                "PageSourceId": "uiprint_0",
                "PageTargetId": "uicamera_0"
            },
            {
                "lineColor": "#0074b0",
                "connectionLabel": "冷备",
                "PageSourceId": "uiprint_0",
                "PageTargetId": "uiscreen_0"
            },
            {
                "lineColor": "#b267ce",
                "connectionLabel": "文档",
                "PageSourceId": "uiprint_0",
                "PageTargetId": "uicamera_1"
            },
            {
                "lineColor": "#7c4f2e",
                "connectionLabel": "使用",
                "PageSourceId": "uiprint_1",
                "PageTargetId": "uicamera_1"
            },
            {
                "lineColor": "#e28b1a",
                "connectionLabel": "依赖",
                "PageSourceId": "uiprint_1",
                "PageTargetId": "uicamera_0"
            },
            {
                "lineColor": "#0074b0",
                "connectionLabel": "冷备",
                "PageSourceId": "uicamera_0",
                "PageTargetId": "uicamera_1"
            }] , [{
                "BlockId": "uiscreen_0",
                'nodeType':4,
                "BlockClass": "uiscreen",
                "BlockImg": "images/big-icon/screen.gif",
                "BlockText": "显示器",
                "BlockX": 74,
                "BlockY": 125
            },
            {
                "BlockId": "uicamera_0",
                "BlockClass": "uicamera",
                "BlockImg": "images/big-icon/camera.gif",
                "BlockText": "摄像头",
                "BlockX": 517,
                "BlockY": 115
            },
            {
                "BlockId": "uicamera_1",
                'nodeType':4,
                "BlockClass": "uicamera",
                "BlockImg": "images/big-icon/camera.gif",
                "BlockText": "摄像头",
                "BlockX": 84,
                "BlockY": 448
            },
            {
                "BlockId": "uiprint_0",
                "BlockClass": "uiprint",
                "BlockImg": "images/big-icon/print.gif",
                "BlockText": "打印机",
                "BlockX": 400,
                "BlockY": 256
            },
            {
                "BlockId": "uiprint_1",
                "BlockClass": "uiprint",
                "BlockImg": "images/big-icon/print.gif",
                "BlockText": "打印机",
                "BlockX": 703,
                "BlockY": 476
            },
           ]
        ],
           model:{
               title:"新增",
               visible: false,
           },
           propsWatch:1,
        };
    }
   
    componentDidMount(){
            console.log(this.props);
            this.jsplumbIn()
        }
        componentWillUnmount(){

        }
    jsplumbIn(){
        //-------------------编辑(start)-------------------
        var topocontent = $('#topocontent'),
            lefticon = $('#lefticon'),
            linewrap = $('#linewrap');
        //连接样式
        var lineColorArr = ['#b267ce', '#7c4f2e', '#0074b0', '#b02929', '#e28b1a', '#48daff', '#61b7cf', '#2f8e00'],
            relationArr = ['文档', '使用', '冷备', '热备', '依赖', '父子', '安装', '连接'],
            instance = jsPlumb.getInstance({
                Endpoint : ["Dot", {radius:2}],
                ConnectionOverlays : [
                    [ "Arrow", {location: 1, id:"arrow", length:10, foldback:0.8, width: 10} ],
                    [ "Label", { label:"关系", id:"label", cssClass:"labelstyle" }]
                ],
                DragOptions : { zIndex:2000 },
                Container:"#topocontent"
            });
        window.jsp = instance;

        var labelTxt = relationArr[6],
            lineColor = lineColorArr[6],
            pstyle = {
                Endpoint: ["Dot", { radius: 2 }],
                paintStyle: {
                    stroke: lineColor,
                    fill: lineColor
                },
                connector: ["Flowchart", {stub: [0, 0], gap: 2, cornerRadius: 5, alwaysRespectStubs: true }],
                connectorStyle: {
                    lineWidth: 1,
                    stroke: lineColor
                },
                maxConnections: -1
            };

        //加载已有数据
        if(this.props.initData ==="3"){
                let response = this.state.conn_data;
                editData(response);
            
        };
        function editData(response){
            var list = eval(response[0]),
                blocks = eval(response[1]),
                htmlText = "",
                htmlSvg = "";
            //------------插入元素-------------
            for( let i in blocks){
                var viewstyle = 'left:'+blocks[i].BlockX+'px;top:'+blocks[i].BlockY+'px;',
                    viewid = blocks[i].BlockId,
                    viewClass = blocks[i].BlockClass,
                    // viewsrc = blocks[i].BlockImg,
                    viewType = blocks[i].nodeType,
                    viewTxt = blocks[i].BlockText;
                htmlText = htmlText + `<div class="elebox ${viewClass} ${viewType===4?"lin":""}" id=${viewid} style=${viewstyle}><span class="dragPoint"><div></div>${viewTxt}
               </span></div>`;
                // htmlSvg = htmlSvg + '<div class="elebox '+viewClass+'" id='+viewid+' style='+viewstyle+
                // '><svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M 50 0,L 100 30,L 50 60,L 0 30,Z" version="1.1" class="dragPoint" xmlns="http://www.w3.org/2000/xhtml" style={{ fill:"red",stroke:"#000",strokeWidth:1}} ></path>'
                //        +'</svg></div>' 
                // '><span class="dragPoint">'+viewTxt+'</span></div>';
                topocontent.html(htmlText);
            //    if(viewType === 4){
            //        $("#"+viewid).addClass("lin");
            //     };
            };

           
            
            //------------默认连接-------------
            var windowsDrag = jsPlumb.getSelector("#topocontent .elebox");
            renderConnect(windowsDrag);
            
            //------------更改样式-------------
            for(var i in list){
                var conor = instance.connect({ source: list[i].PageSourceId, target:list[i].PageTargetId});
                conor.getOverlay("label").setLabel(list[i].connectionLabel);
                conor.setPaintStyle({fillStyle : list[i].lineColor, stroke: list[i].lineColor});
                conor.bind('click',function(){
                    detachLine(this);
                });
            };
            // $("div.elebox").draggable({ containment: "parent" });
        }

        //自定义鼠标事件
        var rightkeyPop = $('#rightkeyPop'),
            relationWrap = $('#relationWrap'),
            relevanceBox = $('#relevanceBox');
        linewrap.find('span').each(function(i) {//点解切换关系
            var $this = $(this);
            $this.click(function(){
                linewrap.find('span').removeClass('focus');
                $this.addClass('focus');
                labelTxt = relationArr[i];
                lineColor = lineColorArr[i];
            });
        });
        $(document).on("contextmenu", function() { return false; }); 
        $(document).on('mousedown', '#topocontent div.elebox', function(event){
            if(event.which === 3){
                var $this = $(this),
                    event = event || window.event,
                    oLeft = parseInt(event.clientX),
                    oTop = parseInt(event.clientY),
                    // span = $this.children('span'),
                    idStr = $this.attr('id');
                rightkeyPop.css({left : oLeft, top : oTop, zIndex : 2999}).attr('rightkey_click_id', idStr).show();
            }
        });
        $(document).on('mouseout', '#topocontent div.elebox', function(){
            rightkeyPop.hide();
        });
        $(document).on('mouseover', '#topocontent div.elebox', function(){
            return false;
        });
        $(document).on('click', '#delEle', function(){
            let idStr = rightkeyPop.attr('rightkey_click_id');
            // $.confirmInfo({
            //     title : '删除元素及链接',
            //     text : '确认删除此元素及其链接吗？',
            //     sure : function(){
                    instance.removeAllEndpoints(idStr);
                    instance.remove(idStr);
            //     }
            // });
        });
        $(document).on('click', '#relationWrap a', function(){
            var txt = $(this).text(),
                idStr = rightkeyPop.attr('rightkey_click_id');
            $('#' + idStr).children('span').text(txt);
            relationWrap.hide();
            rightkeyPop.hide();
            instance.revalidate(idStr);
        });
        rightkeyPop.mouseover(function(){
            $(this).show();
            return false;
        });
        relevanceBox.hover(function(){
            relationWrap.show();
        }, function(){
            relationWrap.hide();
        });
        $('body').mouseover(function(){
            rightkeyPop.hide();
        });

        //jsPlumb事件
        instance.bind("click", function(info) {//点解连接线删除连接（bug,点击endpoint也能删除，但是点击label能提示不能删除）
                detachLine(info);
         });
        instance.bind("connection", function(info,originalEvent) {//更改label关系
            console.log(info)
            info.connection.getOverlay("label").setLabel(labelTxt);
        });
        instance.bind("connectionDrag", function(info) {//更改连接链颜色
            info.setPaintStyle({fillStyle : lineColor, stroke: lineColor});
        });
        instance.bind("connectionDragStop", function(info) {//点击连接线、overlay、label提示删除连线 + 不能以自己作为目标元素
            if(info.sourceId === info.targetId){
                // $.popupTips('不能以自己作为目标元素');
                instance.detach(info); 
            }else{
                info.unbind('click');
                info.bind('click',function(){
                    detachLine(info);
                });
            };
        });
        function detachLine(info){//删除连接
            // $.confirmInfo({
            //     title : '删除连接',
            //     text : '确认删除此链接吗？',
            //     sure : function(){
                instance.detach(info); 
                // }
            // });
        }
        function renderConnect(newid){//渲染
            instance.draggable(newid);
            instance.doWhileSuspended(function(){
                var isFilterSupported = instance.isDragSupported();
                if(isFilterSupported){
                    instance.makeSource(newid, {filter:".dragPoint",anchor:"Continuous"}, pstyle);
                }
                else{
                    var eps = jsPlumb.getSelector(".dragPoint");
                    for (var i = 0; i < eps.length; i++) {
                        var e = eps[i], p = e.parentNode;
                        instance.makeSource(e, {parent:p, anchor:"Continuous"}, pstyle);
                    }
                }    
            });
            instance.makeTarget(newid, {dropOptions:{hoverClass:"dragHover"}, anchor:"Continuous"}, pstyle);
        }

        //拖动创建元素
        lefticon.children('div.iconitems').draggable({
            helper: 'clone',
            scope: 'topo'
        });

        var mm = this.mOpen;
        // var {new_value} = this.state;
        topocontent.droppable({
            scope: 'topo',
            drop: function(event, ui){
                mm();
                //获取基本元素与参数
                var $this = $(this),
                    dragui = ui.draggable,
                    fatop = parseInt($this.offset().top),
                    faleft = parseInt($this.offset().left),
                    uitop = parseInt(ui.offset.top),
                    uileft = parseInt(ui.offset.left),
                    spantxt = dragui.children('span').text(),
                    uid = dragui.attr('icontype'),
                    alluid = topocontent.children('div.' + uid);
                //ID计算
                var allicon = alluid.length,
                    idnum = 0,
                    idArr  = [];
                alluid.each(function(i) {
                    idArr.push(parseInt($(this).attr('id').split('_')[1]));
                });
                idArr.sort(function(a,b){return a>b?1:-1});
                for(var i = 0; i < allicon; i++){
                var idArrOne = parseInt(idArr[i]);
                    if(i !== idArrOne){
                        idnum = idArrOne - 1;
                        break;
                    }else{
                        idnum = allicon;
                    } 
                }
                //插入元素组织
                var newstyle = 'left:' + (uileft - faleft) + 'px;top:' + (uitop - fatop) + 'px',
                    newid = uid + '_' + idnum,
                    str = '<div class="elebox '+uid+'" id='+newid+' style='+newstyle+'><span class="dragPoint">'+spantxt+'</span></div>';
                
                $this.append(str);
                renderConnect(newid);
                instance.revalidate(newid);
                // $("#" + newid).draggable({ containment: "parent" });
            }
});

//-------------------编辑(end)-------------------
        }

        mOpen=()=>{
            let newProps = parseInt(this.state.propsWatch);
            this.setState({ 
                model:{ 
                        title:"新增",
                        visible: true,
                        },
                propsWatch:newProps++
            })
            // return this.state.new_value
        }
        handleOk(){
            this.setState({
                model:{
                    visible:false,
                }
            })
        }
        handleCancel(){
            this.setState({
                model:{
                    visible:false,
                }
            })
        }
        //  modal中form表单验证失败函数
  onFinishFailed = (values) => {
    //  console.log('验证失败：', values);
  }
  //  modal中form表单验证成功函数
  onFinish = (values) => {
      console.log(values)
      this.setState({
        new_value:values.tp_no,
        model:{
          visible:false,
            },
      });
    //   document.getElementById("elebox").innerHTML = this.state.new_value;
    }
    viewClick(){
        $("#lefticon").css("background","green").toggle().slideUp(2000).slideDown(2000);; 
    }
    render() {
        return (
            <div>
            <div className="topocon">
            <div className="topoleft">
                <div className="companylogo"><img src={logo} alt="" /></div>
                <div className="lefticon" id="lefticon">
                    <div className="iconitems" icontype="uiscreen">
                        <img src={block0} alt="" />
                        <span>显示器</span>
                    </div>
                    <div className="iconitems" icontype="uicamera">
                        <img src={block1} alt="" />
                        <span>摄像头</span>
                    </div>
                    <div className="iconitems" icontype="uiprint">
                        <img src={block2} alt="" />
                        <span>打印机</span>
                    </div>
                    <div className="iconitems" icontype="uifirework">
                        <img src={block3} alt="" />
                        <span>防火墙</span>
                    </div>
                    <div className="iconitems lin" icontype="uifirework">
                         {/*<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
                            <path d="M 50 0,L 100 30,L 50 60,L 0 30,Z" version="1.1" xmlns="http://www.w3.org/2000/xhtml"
                                style={{ fill:"red",stroke:"#000",strokeWidth:1}} >
                            </path>
                        </svg>
                       */}
                        <span>防火墙</span>
                    </div> 
                </div>
            </div>
            <div className="toporight">
                <div className="funcbtn">
                    <div className="morebtn">
                        <span id="saveTopoBtn"><font>保存</font></span>
                        <span id="viewTopoBtn" onClick={this.viewClick.bind(this)}><font>预览</font></span>
                    </div>
                </div>
                <div className="topocontent" id="topocontent"></div>
            </div>
        </div>
        <div className="rightkeypop" id="rightkeyPop">
            <span className="delele" id="delEle">删除元素</span>
        </div>
        <ModelChart 
            propsWatch={this.state.new_value}
            model={this.state.model}
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)}
            onFinishFailed={this.onFinishFailed.bind(this)}
            onFinish={this.onFinish.bind(this)}
            formInfo={this.state.form_info}
        />
        </div>
        
        )
    }
}

export default TablePage;