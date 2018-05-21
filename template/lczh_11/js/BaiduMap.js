
var slng = "";
var slat = "";

//创建和初始化地图函数：
function initMap() {
    createMap(); //创建地图
    setMapEvent(); //设置地图事件
    addMapControl(); //向地图添加控件
}

//创建地图函数：
function createMap() {
    var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
    var point = new BMap.Point(104.114129, 37.550339); //定义一个中心点坐标
    map.centerAndZoom(point, 5); //设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map; //将map变量存储在全局
    var marker = new BMap.Marker(point);  // 创建标注
    marker.enableDragging();    //可拖拽
    map.addOverlay(marker);              // 将标注添加到地图中  
    map.addEventListener("click", showInfo);
    slng = point.lng;
    slat = point.lat;
}

//创建地图函数(供前台展示调用、不允许鼠标点击定位)：
function createMap1() {
    var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
    var point = new BMap.Point(104.114129, 37.550339); //定义一个中心点坐标
    map.centerAndZoom(point, 5); //设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map; //将map变量存储在全局
}


//根据经纬度定位（前台页面调用展示企业地址）
function addAddress(lng, lat,info) {
    createMap1(); //创建地图
    setMapEvent(); //设置地图事件
    addMapControl(); //向地图添加控件
    map.clearOverlays();
    var point = new BMap.Point(lng, lat);
    var marker = new BMap.Marker(point);  // 创建标注
    map.centerAndZoom(point, 16);
    map.addOverlay(marker);              // 将标注添加到地图中     
    marker.addEventListener("click", function () {
        this.openInfoWindow(new BMap.InfoWindow(info, {
            width: 120,     // 信息窗口宽度
            height: 80,     // 信息窗口高度
            title: ""  // 信息窗口标题
        }));
    });
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    marker.openInfoWindow(new BMap.InfoWindow(info, {
        width: 120,     // 信息窗口宽度
        height: 80,     // 信息窗口高度
        title: ""  // 信息窗口标题
    }));
    slng = lng;
    slat = lat;
}

//根据输入的地址定位
function findAddress(address, city) {
//    createMap(); //创建地图
//    setMapEvent(); //设置地图事件
//    addMapControl(); //向地图添加控件
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(address, function (point) {
        if (point) {
            map.clearOverlays();
            map.centerAndZoom(point, 16);
            var marker = new BMap.Marker(point);  // 创建标注
            marker.enableDragging();    //可拖拽
            map.addOverlay(marker);              // 将标注添加到地图中 
            slng = point.lng;
            slat = point.lat;
        }
    }, city);
}

//鼠标点击定位
function showInfo(e) {
    map.clearOverlays();
    var point = new BMap.Point(e.point.lng, e.point.lat);
    var marker = new BMap.Marker(point);  // 创建标注
    marker.enableDragging();    //可拖拽
    map.addOverlay(marker);              // 将标注添加到地图中  
    slng = point.lng;
    slat = point.lat;
}

//地图事件设置函数：
function setMapEvent() {
    map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
    map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard(); //启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
//    var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 });
//    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
    map.addControl(ctrl_sca);
}