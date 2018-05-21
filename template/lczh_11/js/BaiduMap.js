
var slng = "";
var slat = "";

//�����ͳ�ʼ����ͼ������
function initMap() {
    createMap(); //������ͼ
    setMapEvent(); //���õ�ͼ�¼�
    addMapControl(); //���ͼ��ӿؼ�
}

//������ͼ������
function createMap() {
    var map = new BMap.Map("dituContent"); //�ڰٶȵ�ͼ�����д���һ����ͼ
    var point = new BMap.Point(104.114129, 37.550339); //����һ�����ĵ�����
    map.centerAndZoom(point, 5); //�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
    window.map = map; //��map�����洢��ȫ��
    var marker = new BMap.Marker(point);  // ������ע
    marker.enableDragging();    //����ק
    map.addOverlay(marker);              // ����ע��ӵ���ͼ��  
    map.addEventListener("click", showInfo);
    slng = point.lng;
    slat = point.lat;
}

//������ͼ����(��ǰ̨չʾ���á��������������λ)��
function createMap1() {
    var map = new BMap.Map("dituContent"); //�ڰٶȵ�ͼ�����д���һ����ͼ
    var point = new BMap.Point(104.114129, 37.550339); //����һ�����ĵ�����
    map.centerAndZoom(point, 5); //�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
    window.map = map; //��map�����洢��ȫ��
}


//���ݾ�γ�ȶ�λ��ǰ̨ҳ�����չʾ��ҵ��ַ��
function addAddress(lng, lat,info) {
    createMap1(); //������ͼ
    setMapEvent(); //���õ�ͼ�¼�
    addMapControl(); //���ͼ��ӿؼ�
    map.clearOverlays();
    var point = new BMap.Point(lng, lat);
    var marker = new BMap.Marker(point);  // ������ע
    map.centerAndZoom(point, 16);
    map.addOverlay(marker);              // ����ע��ӵ���ͼ��     
    marker.addEventListener("click", function () {
        this.openInfoWindow(new BMap.InfoWindow(info, {
            width: 120,     // ��Ϣ���ڿ��
            height: 80,     // ��Ϣ���ڸ߶�
            title: ""  // ��Ϣ���ڱ���
        }));
    });
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //�����Ķ���
    marker.openInfoWindow(new BMap.InfoWindow(info, {
        width: 120,     // ��Ϣ���ڿ��
        height: 80,     // ��Ϣ���ڸ߶�
        title: ""  // ��Ϣ���ڱ���
    }));
    slng = lng;
    slat = lat;
}

//��������ĵ�ַ��λ
function findAddress(address, city) {
//    createMap(); //������ͼ
//    setMapEvent(); //���õ�ͼ�¼�
//    addMapControl(); //���ͼ��ӿؼ�
    // ������ַ������ʵ��
    var myGeo = new BMap.Geocoder();
    // ����ַ���������ʾ�ڵ�ͼ��,��������ͼ��Ұ
    myGeo.getPoint(address, function (point) {
        if (point) {
            map.clearOverlays();
            map.centerAndZoom(point, 16);
            var marker = new BMap.Marker(point);  // ������ע
            marker.enableDragging();    //����ק
            map.addOverlay(marker);              // ����ע��ӵ���ͼ�� 
            slng = point.lng;
            slat = point.lat;
        }
    }, city);
}

//�������λ
function showInfo(e) {
    map.clearOverlays();
    var point = new BMap.Point(e.point.lng, e.point.lat);
    var marker = new BMap.Marker(point);  // ������ע
    marker.enableDragging();    //����ק
    map.addOverlay(marker);              // ����ע��ӵ���ͼ��  
    slng = point.lng;
    slat = point.lat;
}

//��ͼ�¼����ú�����
function setMapEvent() {
    map.enableDragging(); //���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
    map.enableScrollWheelZoom(); //���õ�ͼ���ַŴ���С
    map.enableDoubleClickZoom(); //�������˫���Ŵ�Ĭ������(�ɲ�д)
    map.enableKeyboard(); //���ü����������Ҽ��ƶ���ͼ
}

//��ͼ�ؼ���Ӻ�����
function addMapControl() {
    //���ͼ��������ſؼ�
    var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
    map.addControl(ctrl_nav);
    //���ͼ���������ͼ�ؼ�
//    var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 });
//    map.addControl(ctrl_ove);
    //���ͼ����ӱ����߿ؼ�
    var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
    map.addControl(ctrl_sca);
}