angular.module('dfimsApp',['ui.router', 'ui.bootstrap', 'ngMaterial']);
$(function(){
    $('#secArea').val('5');
    myMap(22.5735, 88.4331, 15);
	 setTimeout(function() {
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    timeOut: 4000
                };
                toastr.success('Disaster Management admin', 'Welcome to Bengalathon');

            }, 1300);
});
function myMap(latitude,longitude, zoomval) {
	 var myCenter = new google.maps.LatLng(22.5765, 88.4331);
            var mapProp = {
                center: new google.maps.LatLng(latitude,longitude),
                zoom: zoomval,
				mapTypeControlOptions: {
                     mapTypeIds: [google.maps.MapTypeId.ROADMAP]
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };			
            var map = new google.maps.Map(document.getElementById("map"), mapProp);
			var marker = new google.maps.Marker({position:myCenter});
			marker.setMap(map);
    }
var CONTEXT_ROOT = 'https://dfims-tstar.rhcloud.com';

angular.module('dfimsApp').constant('constants', {
    'SERVICE_URL': {
        'SOS_NOTIFICATION': CONTEXT_ROOT +'/notification',
        'HISTORIAL_TABLE_DATA': CONTEXT_ROOT +'/actionItems',
        'AUTHORISE_REJECT_NOTIFICATION': CONTEXT_ROOT +'/mapMultipleSOSToIncidents',
        'TRACK_SOS': '../../js/alertProgress.json',
        'NOTIFY_SUPPORT': CONTEXT_ROOT +'/notifySupport',
        'SEND_EMAIL_NOTIFICATION': CONTEXT_ROOT +'/sendNotification',
        'AUTHORISE_REJECT_SOS': CONTEXT_ROOT +'/createMapSos',
        'SOS_VICTIMS_DETAILS': CONTEXT_ROOT +'/incidentDetail?incidentId=',
		'CREATEINCIDENT' : CONTEXT_ROOT +'/reportIncident',
		'NOTIFY_CITIZEN' : CONTEXT_ROOT +'/notifycitizens',
		'CLOSE_EVENT': CONTEXT_ROOT +'/closeEvent',
        'AUTHENTICATE_USER': CONTEXT_ROOT +'/authenticateUser'
    }
}); 
function MainCtrlFunction($interval,ajaxService,$uibModal,$scope, constants){
	var self = this;
    var map= '', marker = [], sosTableFetchInterval, incidentDetailsFetchInterval, incidentDeialsObj= {},incidentDistType='';
    this.loginEnable = true;
    this.showNotification = false;
	this.showNotificationCitizen = false;
    this.showNotifySuppport = false;
	this.showNotificationDisasterLine = false;
	this.showNotificationChat = false;
	this.showNotificationMail = false;
	this.showCreateIncident = false;
    this.showDrpMenu = false;
	this.showCloseMsg = false;
    self.logInSubmit = function() {
        self.loginError = false;
        self.logInLoading = true;
        var userData = {
            "userName": self.userName,
            "userPassword": self.password
        };
        ajaxService.callService('POST',constants.SERVICE_URL.AUTHENTICATE_USER,userData).then(authenticateUser);
    };
    function authenticateUser(response){
        if(response.data.userId && response.data.roleName === 'Disaster Management Team'){
            self.loginError = false;
            self.userName = response.data.userName;
        sessionStorage.setItem('loggedIn', true);
        self.loginEnable = false;
        ajaxService.callService('GET',constants.SERVICE_URL.SOS_NOTIFICATION).then(success, error); 
        $interval(function(){
            ajaxService.callService('GET',constants.SERVICE_URL.SOS_NOTIFICATION).then(success, error);
        },30000);
        ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
        sosTableFetchInterval = $interval(function(){
                                ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
                           },120000);
        $scope.gridOptions = {
            data: [],
            urlSync: true
        };
        }
        else {
            self.loginError = true;
        }
        self.logInLoading = false;
    }
    if(sessionStorage.getItem('loggedIn')) {
        self.loginEnable = false;
        ajaxService.callService('GET',constants.SERVICE_URL.SOS_NOTIFICATION).then(success, error); 
        $interval(function(){
            ajaxService.callService('GET',constants.SERVICE_URL.SOS_NOTIFICATION).then(success, error);
        },30000);
        ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
        sosTableFetchInterval = $interval(function(){
                                ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
                           },120000);
        $scope.gridOptions = {
            data: [],
            urlSync: true
        };
    }
    function success(response) {
        if(response.data && response.data.sosVictimDetails){
            var modal = $uibModal.open({
			 windowClass: 'sos-modal-class',
             templateUrl: './sosDialogueBox.html',
             controller: 'sosDialogueCtrl',
             controllerAs: 'sosdlgctrl',
             clickOutsideToClose:true,
             keyboard: false,
             backdrop: 'static',
             resolve: {
                currentSOS: function(){
                    return response.data.sosVictimDetails;
                }
             }
            }); 
        }
		if(response.data){
			self.notifyDatas = response.data.victimNotificationDetails;
		}
        //plotMarkedCoordinates(response.data.markedCoordinates);
    }
    function error(response) {
        console.log(response);
    }
	self.timeSince = function(date) {
        var formattedDate = new Date(date);
        var seconds = Math.floor((new Date() - formattedDate)/ 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " Years Ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " Months Ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " Days Ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " Hours Ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " Minutes Ago";
        }
        return Math.floor(seconds) + " Seconds Ago";
    };
	function tableDataFetchSuccess(key,responseData){
		if(key === 'flood'){
			self.showFireTable = false;
			self.showFloodTable = true;
		}
		$scope.gridOptions = responseData.data;
        formatPrdeictionVulnerabilityData(responseData.data);
	}
    function formatPrdeictionVulnerabilityData(response){
       map = '';
       var predictionIncidentVulLatLong= [], i=0;
       for(i=0; i< response.length; i++) {
           if(response[i].lat && response[i].lng && response[i].itemType.toLowerCase() === 'incident') {
                if(response[i].disasterType.toLowerCase() === 'fire') {
                    predictionIncidentVulLatLong.push({'lat':parseFloat(response[i].lat), 'lng':parseFloat(response[i].lng), 'key':'fire'});
                }
                else if(response[i].disasterType.toLowerCase() === 'flood') {
                    predictionIncidentVulLatLong.push({'lat':parseFloat(response[i].lat), 'lng':parseFloat(response[i].lng),'key':'flood'});
                }
                else if(response[i].disasterType.toLowerCase() === 'earthquake') {
                    predictionIncidentVulLatLong.push({'lat':parseFloat(response[i].lat), 'lng':parseFloat(response[i].lng),'key':'earthquake'});
                }
           }
       }
       setPredicVulIncidentPointers(predictionIncidentVulLatLong);
    }
    function getUnique(data) {
        if(data.length >0) {
            var obj = {};

            for ( var i=0, len=data.length; i < len; i++ ) 
                obj[data[i]['lat']] = data[i];

            data = new Array();
            for ( var key in obj )
                data.push(obj[key]);
        }
        return data;
    }
    function setPredicVulIncidentPointers(data) {
        var myLatLng = data[0], i=0;
        marker= [];
		if( data[0] && data[0].lat && data[0].lng){
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: {'lat':data[0].lat, 'lng':data[0].lng}
        });
		}
        for(i =0; i< data.length; i++){
            marker = new google.maps.Marker({
                position: {'lat':data[i].lat, 'lng': data[i].lng},
                map: map,
                icon: data[i].key ==='fire'?'../../media/image/fire.png':data[i].key==='flood'?'../../media/image/flood.png':data[i].key==='earthquake'? '../../media/image/earthquake.png':''
            });
            marker.setMap(map);
        }
    }
	function tableDataFetchError(response){
		
	}
    self.getIncidentDetails = function(itemId, itemType, item) {
        incidentDeialsObj = {
            'eventType': itemType,
            'id': itemId
        };
        incidentDistType = item.disasterType;
        $interval.cancel(sosTableFetchInterval);
        ajaxService.callService('GET',constants.SERVICE_URL.SOS_VICTIMS_DETAILS+itemId).then(sosVictimDetailsSuccess);
        incidentDetailsFetchInterval = $interval(function(){
                                            ajaxService.callService('GET',constants.SERVICE_URL.SOS_VICTIMS_DETAILS+itemId).then(sosVictimDetailsSuccess);
                                       },120000);
    };
    function sosVictimDetailsSuccess(response) {
        var mappedData = [];
        marker = [], map=[];
        self.showEachIncidentTable = true;
        self.enableCloseNotifyButton = true;
		if(response.data){
        self.incidentMessage = response.data.message;
        self.sosVictimDetails = response.data.victims;		
        mappedData = formatBlockageData(response.data.blockages, mappedData);		
        if(response.data.evacuationData && response.data.evacuationData.emergencyExitPoints){
            response.data.evacuationData.emergencyExitPoints.map(function(obj, index){
                if(obj.latitude && obj.longitude) {
                    var individualObjects = {
                        "lat": parseFloat(obj.latitude),
                        "lng": parseFloat(obj.longitude),
                        "key": 'evacPoints'
                    };
                    mappedData.push(individualObjects);
                }
            });
        }
		
        mappedData.push({'lat':parseFloat(response.data.lat), 'lng': parseFloat(response.data.lng), 'key': incidentDistType.toLowerCase()})
        if(mappedData.length> 0){
            map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 14,
                    center: {'lat':mappedData[Math.floor(mappedData.length/2)].lat, 'lng': mappedData[Math.floor(mappedData.length/2)].lng}
                  });
            for(i =0; i< mappedData.length; i++){
                marker = new google.maps.Marker({
                    position: {'lat':mappedData[i].lat, 'lng': mappedData[i].lng},
                    map: map,
                    icon: mappedData[i].key==='evacPoints'?'../../media/image/evacuation.png':mappedData[i].key==='blockedPoints'?'../../media/image/blocked.png':mappedData[i].key ==='fire'?'../../media/image/fire.png':mappedData[i].key==='flood'?'../../media/image/flood.png':mappedData[i].key==='earthquake'? '../../media/image/earthquake.png':''
                });
                marker.setMap(map);
            }
        }
		}
        //plotMarkedCoordinates(response.data.blockages[0].blockageLocations);
    }
    function formatBlockageData(data, mappedData) {
        if(data) {
            data.map(function(obj, index){
                obj.blockageLocations.map(function(blockedLatsLngs){
                    if(blockedLatsLngs.latitude && blockedLatsLngs.longitude) {
                        mappedData.push({'lat':parseFloat(blockedLatsLngs.latitude), 'lng': parseFloat(blockedLatsLngs.longitude), 'key': 'blockedPoints'});
                    }
                });
            });
            return mappedData;
        }
    }
    /** function to plot polyline starts 
    function plotMarkedCoordinates(data) {
        var mappedData = [];
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: {lat: 22.5765, lng: 88.4331}
        });
        data.map(function(obj, index){
           var individualObjects = {
               "lat": parseFloat(obj.latitude),
               "lng": parseFloat(obj.longitude)
           };
           mappedData.push(individualObjects);
       });
        var flightPath = new google.maps.Polyline({
          path: mappedData,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
    }
    function to plot polyline ends **/

    self.showHideDrpMenu = function() {
        //event.stopPropagation();
        self.showDrpMenu = !self.showDrpMenu;
    };
    self.notifyCheckBox = function(flag) {
        var count = 0;
        if(!flag) {
            self.selectAllNot = false;
        }
        else {
            for(var i =0; i< self.notifyDatas.length; i++){
                if(self.notifyDatas[i].checked) {
                    count++;
                }
            }
            if(count === self.notifyDatas.length) {
                self.selectAllNot = true;
            }
        }
    }
    self.authAllNotification = function(data){
        self.showCloseMsg = false;
        var postData = [];
        for(var i =0; i<data.length; i++){
            if(data[i].checked) {
                postData.push({"id": data[i].sosId,"incidentId": self.incidentId, "status": "A"});
            }
        }
        ajaxService.callService('POST',constants.SERVICE_URL.AUTHORISE_REJECT_NOTIFICATION, postData).then(authriseRejectSuccessHandler.bind(this, 'Authorised'));
    };
    self.rejectAllNotification = function(data){
        self.showCloseMsg = false;
        var postData = [];
        for(var i =0; i<data.length; i++){
            if(data[i].checked) {
                postData.push({"id": data[i].sosId,"incidentId": self.incidentId, "status": "R"});
            }
        }
        ajaxService.callService('POST',constants.SERVICE_URL.AUTHORISE_REJECT_NOTIFICATION, postData).then(authriseRejectSuccessHandler.bind(this, 'Rejected'));
    };
    function authriseRejectSuccessHandler (key,data){
        self.showDrpMenu = false;
        self.incidentId = '';
        self.selectAllNot = false;
		alert("Notifications Successfully "+ key);
        ajaxService.callService('GET',constants.SERVICE_URL.SOS_NOTIFICATION).then(success, error);
    }
    self.navigateToNotify = function() {
        self.showCloseMsg = false;
        self.showNotification = true;
        self.showNotificationCitizen = false;
        self.showNotifySuppport = false;
        self.showNotificationDisasterLine = false;
	    self.showNotificationChat = false;
	    self.showNotificationMail = false;
		self.showCreateIncident = false;
        ajaxService.callService('GET',constants.SERVICE_URL.TRACK_SOS).then(alertProgressSuccess, alertProgressError);
    };
	self.navigateToNotifyCitizen = function() {
        self.showCloseMsg = false;
        self.showNotificationCitizen = true;
        self.showNotification = false;
        self.showNotifySuppport = false;
        self.showNotificationDisasterLine = false;
	    self.showNotificationChat = false;
	    self.showNotificationMail = false;
		self.showCreateIncident = false;
        $("body").addClass("mini-navbar");
    };
	self.navigateToDisasterLine = function() {
        self.showCloseMsg = false;
        self.showNotificationDisasterLine = true;
        self.showNotification = false;
        self.showNotifySuppport = false;
        self.showNotificationCitizen = false;
	    self.showNotificationChat = false;
	    self.showNotificationMail = false;
		self.showCreateIncident = false;
        $("body").addClass("mini-navbar");
    };
	self.navigateToChat = function() {
        self.showCloseMsg = false;
        self.showNotificationChat = true;
        self.showNotification = false;
        self.showNotificationCitizen = false;
        self.showNotifySuppport = false;
		self.showNotificationMail = false;
		self.showNotificationDisasterLine = false;
		self.showCreateIncident = false;
        $("body").addClass("mini-navbar");
    };
	self.navigateToMail = function() {
        self.showCloseMsg = false;
        self.showNotificationMail = true;
        self.showNotification = false;
        self.showNotificationCitizen = false;
        self.showNotifySuppport = false;
		self.showNotificationChat = false;
		self.showNotificationDisasterLine = false;
		self.showCreateIncident = false;
        $("body").addClass("mini-navbar");	
    };
	self.navigateToCreateIncident= function() {
        self.crtIncForm = {};
		self.showCloseMsg = false;
		self.showNotificationMail = false;
        self.showNotification = false;
        self.showNotificationCitizen = false; 
        self.showNotifySuppport = false; 
		self.showNotificationChat = false;
		self.showNotificationDisasterLine = false;
		self.showCreateIncident = true;
        $("body").addClass("mini-navbar");
		self.crtIncForm.areaId = "1";
		self.crtIncForm.disasterTypeId = "1";
	}
	self.createInc =function(fromObj){
        self.showCloseMsg = false;
		fromObj.status = "O";
		fromObj.userId = "1";
		console.log(fromObj);
		//crtIncForm
		ajaxService.callService('POST',constants.SERVICE_URL.CREATEINCIDENT,fromObj).then(createIncsuccess);
		
	}
	self.notifyCitizenSer =function(fromObjcitizen){
        self.showCloseMsg = false;
		ajaxService.callService('GET',constants.SERVICE_URL.NOTIFY_CITIZEN+'?message='+fromObjcitizen).then(notifySuccess);
	}
	self.closeIncident= function() {
        var postObj = {};
        self.showCloseMsg = false;
        if(self.showEachIncidentTable){
            incidentDeialsObj.closureComment = "Closing this Incident for USER1";
            postObj.id = parseInt(incidentDeialsObj.id);
            postObj.eventType= incidentDeialsObj.eventType;
            postObj.closureComment = incidentDeialsObj.closureComment;
        }
        else if($('input[name="incidentRadio"]:checked').val()){
            var itemValue = $('input[name="incidentRadio"]:checked').val();
            var id = itemValue.split('-')[0];
            var type =itemValue.split('-')[1].indexOf('(') >-1? itemValue.split('-')[1].split('(')[0]:itemValue.split('-')[1];
            $("body").addClass("mini-navbar");
            postObj = {
                "closureComment": "Closing this Incident for USER1",
                "eventType": type,
                "id": parseInt(id) 
            };
        }
        ajaxService.callService('POST',constants.SERVICE_URL.CLOSE_EVENT, postObj).then(closeSuccess);
    }
    function closeSuccess(response) {
        if(response.data === 'success'){
            self.showCloseMsg = true;
        }
        if(!self.showEachIncidentTable){
            ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
        }
        else {
            self.enableCloseNotifyButton = false;
        }
    }
	function createIncsuccess(response) {
		alert("Incident successfully created ");
        self.goToHome();
    }
	function notifySuccess(response) {
		alert("message successfully posted ");
        self.notifyCitiForm.message = '';
        self.goToHome();
    }
	
    function alertProgressSuccess(response) {
		if(response.data){
        self.trackAlertProgressData = response.data.alertDetails;
		}
		//alert("message successfully posted ");
        $("body").addClass("mini-navbar");
    }
    function alertProgressError() {
		
	}
    self.notifySupport = function() {
        var id, type;
        if(self.showEachIncidentTable){
            id = incidentDeialsObj.id;
            type = incidentDeialsObj.eventType;
        }
        else if($('input[name="incidentRadio"]:checked').val()){
            var itemValue = $('input[name="incidentRadio"]:checked').val();
            id = itemValue.split('-')[0];
            type =itemValue.split('-')[1].indexOf('(') >-1? itemValue.split('-')[1].split('(')[0]:itemValue.split('-')[1];
        }
        ajaxService.callService('GET',constants.SERVICE_URL.NOTIFY_SUPPORT+'?id='+id+'&type='+type).then(getNotifySprtSuccess);
    };
    function getNotifySprtSuccess(response) {
        self.notifySprtData = response.data;
        self.showNotification = false;
        self.showNotificationCitizen = false;
        self.showNotifySuppport = true;
        self.showNotificationMail = false;
        self.showNotificationChat = false;
		self.showNotificationDisasterLine = false;
		self.showCreateIncident = false;
		
        $("body").addClass("mini-navbar");
    }
    self.sendSupportMsg = function() {
        for(var i =0; i< self.notifySprtData.length; i++){
            ajaxService.callService('GET',constants.SERVICE_URL.SEND_EMAIL_NOTIFICATION+'?emailId='+self.notifySprtData[i].supportEmail+'&msg='+self.notifySprtData[i].supportMessage+'&phone='+self.notifySprtData[i].supportPhone);
        }
		alert("Notifications has been successfully sent");
		self.goToHome();
    };
    self.goToHome = function() {
        map = [], marker = [];
        self.showNotification = false;
        self.showNotificationCitizen = false;
        self.showNotifySuppport = false;
		self.showNotificationMail = false;
		self.showNotificationChat = false;
		self.showNotificationDisasterLine = false;
        self.showEachIncidentTable = false;
		self.showCreateIncident = false;
        $("body").addClass("mini-navbar");
        if($('input[name="incidentRadio"]:checked').length===0){
            self.enableCloseNotifyButton = false;
        }
        self.showCloseMsg = false;
        $interval.cancel(incidentDetailsFetchInterval);
        ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
        sosTableFetchInterval = $interval(function(){
                                    ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
                                },120000);
    };
    self.slectAll = function(isSelected) {
        if(isSelected) {
            self.notifyDatas.map(function(obj, index){
                obj.checked = true;
            });
        }
        else {
            self.notifyDatas.map(function(obj, index){
                obj.checked = false;
            });
        }
    };
    self.showEmailBox = function() {
        self.showDrpMenu = false;
    };
    self.incidentRadio = function () {
        self.enableCloseNotifyButton = true;
    }
    self.refreshData = function(flag) {
        if(flag){
            var itemId = incidentDeialsObj.id;
            ajaxService.callService('GET',constants.SERVICE_URL.SOS_VICTIMS_DETAILS+itemId).then(sosVictimDetailsSuccess);
        }
        else {
            ajaxService.callService('GET', constants.SERVICE_URL.HISTORIAL_TABLE_DATA).then(tableDataFetchSuccess.bind(self,"flood"), tableDataFetchError);
        }
    };
	// Add body-small class if window less than 768px
    if ($(window).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    function getLatLong(selectedArea) {
        if(selectedArea == "5"){
             return {'lat':22.5765, 'lng':88.4331};
		}
        else if(selectedArea == "3") {
            return {'lat':22.573342, 'lng':88.413728};
        }
        else if(selectedArea == "Bantala") {
            return {'lat':22.505720, 'lng':88.508176};
        }
         else if(selectedArea == "ParkStreet") {
            return {'lat':22.548152, 'lng':88.359060};
        }
         else if(selectedArea == "CamacStreet") {
            return {'lat':22.546028, 'lng':88.352908};
        }
    }

	//Area change 
	$(document).on("change", "#secArea", function() {
		var selectedArea= $(this).val();
        var coordinates = getLatLong(selectedArea);
		myMapFunc(coordinates.lat, coordinates.lng, 15);
	});
	
    // MetisMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
	 $(document).on("click", ".collapse-link", function() {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
	 $(document).on("click", ".close-link", function() {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Minimalize menu
	 $(document).on("click", ".navbar-minimalize", function() {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });


    // Open close right sidebar
	 $(document).on("click", ".right-sidebar-toggle", function() {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

  
    // Open close small chat
	 $(document).on("click", ".open-small-chat", function() {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });

   
    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarheight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarheight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarheight + "px");
        }

        if (navbarheight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarheight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarheight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }
    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

   
    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    });

    $(window).bind("resize", function () {
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    });
    // Minimalize menu when screen is less than 768px
    function SmoothlyMenu() {
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
             // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
            }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }

    function myMapFunc(latitude,longitude, zoomval) {
     var myCenter = ''
     marker= [];
	 myCenter = new google.maps.LatLng(latitude, longitude);
            var mapProp = {
                center: new google.maps.LatLng(latitude,longitude),
                zoom: zoomval,
				mapTypeControlOptions: {
                     mapTypeIds: [google.maps.MapTypeId.ROADMAP]
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };			
            map = new google.maps.Map(document.getElementById("map"), mapProp);
			marker = new google.maps.Marker({position:myCenter});
			marker.setMap(map);
    }

    /** Setting Map pointers starts */
     this.setMapPointers = function(position) {
          var pyrmont = getLatLong($('#secArea').val());
          map = new google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 15
          });

          infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: pyrmont,
                radius: 3000,
                type: [position]
            }, callback);
    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        marker = [];
        var placeLoc = place.geometry.location;
        marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: place.photos? place.photos[0].getUrl({'maxWidth': 30, 'maxHeight': 30}): ''
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        }); 
    }
    
/** Setting Map pointers ends */
}

angular.module('dfimsApp').controller('mainController',['$interval', 'ajaxService', '$uibModal','$scope', 'constants',MainCtrlFunction]) 
    
function sosDialogueCtrlFunction(constants, currentSOS, $uibModalInstance, ajaxService){
	this.currentSosDetails = currentSOS;
    this.takeAuthCancelNotification = function(key , data) {
      if(key === 'close') {
        ajaxService.callService('GET',constants.SERVICE_URL.AUTHORISE_REJECT_SOS+'?sosId='+data.sosId+'&userId='+data.userId+'&authorize=false').then(authriseAllSuccessHandler);
    }
      else if(key === 'authorise') {
        ajaxService.callService('GET',constants.SERVICE_URL.AUTHORISE_REJECT_SOS+'?sosId='+data.sosId+'&userId='+data.userId+'&authorize=true').then(authriseAllSuccessHandler);
      }
    };
    function authriseAllSuccessHandler (data) {
      $uibModalInstance.dismiss();
    }
}
angular.module('dfimsApp').controller('sosDialogueCtrl',['constants','currentSOS', '$uibModalInstance', 'ajaxService',sosDialogueCtrlFunction]);
function AjaxServiceFunction($http, $q){
    this.callService = function(method, url, data) {
        var deferred = $q.defer();
        $http({
            method: method,
            url: url,
            dataType: 'JSON',
            data: data
        }).then(function successCallBack(response){
            deferred.resolve(response);
        }, function errorCallBack(response){
            deferred.resolve(response);
        });
        return deferred.promise;
    };
    
}
angular.module('dfimsApp').service('ajaxService',['$http', '$q',AjaxServiceFunction]);