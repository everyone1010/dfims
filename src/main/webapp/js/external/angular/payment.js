/*! Delta Air Lines : cart - v4.7.0 - 2017-06-29T17:37:21Z */

/*** default address fields are the same as US ***/

var CountryAddressFields = {
		US : { AddressFields :
			[
				{ id : "addr1", label : "Address Line 1", name : "addrLine1StreetName", isVisible : true },
				{ id : "addr2", label : "Address Line 2", name : "addrLine2RoomApartment", isVisible : true },
				{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : true },
				{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : true },
				{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : false },
				{ id : "areaTerritoryPrefecture", label : "Area/Territory/Prefecture", name : "areaTerritoryPrefecture", isVisible : false },
				{ id : "postal", label : "Zip Code", name : "postalCode", isVisible : true }
			]
		},
		JP : { AddressFields :
			[
				{ id : "addr1", label : "Chome/Banchi", name : "addrLine1StreetName", isVisible : true },
				{ id : "addr2", label : "Company/Building/Apartment", name : "addrLine2RoomApartment", isVisible : true },
				{ id : "cityCountyWard", label : "City/Ward", name : "cityCountyWard", isVisible : true },
				{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
				{ id : "areaTerritoryPrefecture", label : "Prefecture", name : "areaTerritoryPrefecture", isVisible : true }
			]
		},
		KR : { AddressFields :
			[
				{ id : "cityCountyWard", label : "County/City", name : "cityCountyWard", isVisible : true },
				{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
				{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : true }
			]
		},
		TW : { AddressFields :
			[
					{ id : "cityCountyWard", label : "County/City", name : "cityCountyWard", isVisible : true },
			        { id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
					{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : true }
			]
		},
		HK : { AddressFields :
			[
					{ id : "addr1", label : "Street", name : "addrLine1StreetName", isVisible : true },
					{ id : "addr2", label : "Building/Apartment", name : "addrLine2RoomApartment", isVisible : true },
					{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : false },
			        { id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
					{ id : "districtTownVillage", label : "City/Town/Village", name : "districtTownVillage", isVisible : true },
					{ id : "areaTerritoryPrefecture", label : "District", name : "areaTerritoryPrefecture", isVisible : true },
					{ id : "postal", label : "Postal Code", name : "postalCode", isVisible : false }
			]
		},
		CN : { AddressFields :
			[
			        { id : "addr1", label : "Address", name : "addrLine1StreetName", isVisible : true },
					{ id : "addr2", label : "Room/Building", name : "addrLine2RoomApartment", isVisible : true },
					{ id : "cityCountyWard", label : "City/County/District", name : "cityCountyWard", isVisible : true },
			        { id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
					{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : false },
					{ id : "areaTerritoryPrefecture", label : "Province/City", name : "areaTerritoryPrefecture", isVisible : true },
			        { id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
			]
		},
		SG : { AddressFields :
			[
			        { id : "addr1", label : "Address", name : "addrLine1StreetName", isVisible : true },
					{ id : "addr2", label : "Room/Building", name : "addrLine2RoomApartment", isVisible : true },
					{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : false },
			        { id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
					{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : false },
					{ id : "areaTerritoryPrefecture", label : "Area/Territory/Prefecture", name : "areaTerritoryPrefecture", isVisible : false }
			]
		},
		PH : { AddressFields :
			[
			        { id : "addr1", label : "Street/Road", name : "addrLine1StreetName", isVisible : true },
					{ id : "addr2", label : "Apartment/Building/Block", name : "addrLine2RoomApartment", isVisible : true },
			        { id : "stateProv", label : "State", name : "stateProvCode", isVisible : false }
			]
		},
		TH : { AddressFields :
			[
				{ id : "addr1", label : "Street/Road", name : "addrLine1StreetName", isVisible : true },
				{ id : "addr2", label : "Room/Apartment", name : "addrLine2RoomApartment", isVisible : true },
				{ id : "cityCountyWard", label : "Village/City", name : "cityCountyWard", isVisible : true },
				{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
				{ id : "areaTerritoryPrefecture", label : "Area/Territory/Prefecture", name : "areaTerritoryPrefecture", isVisible : false }
			]
		},
		MY : { AddressFields :
			[
					{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : true },
			        { id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			        { id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
			]
		},
		ID : { AddressFields :
			[
					{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : true },
			        { id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			        { id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
			]
		},
		AU : { AddressFields :
			[
					{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : false },
			        { id : "stateProv", label : "Province/State", name : "stateProvCode", isVisible : true},
			        { id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
			]
		},
		NZ : { AddressFields :
			[
					{ id : "areaTerritoryPrefecture", label : "Province/State", name : "areaTerritoryPrefecture", isVisible : true },
					{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
			        { id : "postal", label : "Postal Code", name : "postalCode", isVisible : true }
			]
		},

		NA : { AddressFields :

			[

				{ id : "addr1", label : "Street Address", name : "addrLine1StreetName", isVisible : true },

				{ id : "addr2", label : "Street Address 2", name : "addrLine2RoomApartment", isVisible : true },

				{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : true },

				{ id : "stateProv", label : "State/Province", name : "stateProvCode", isVisible : true },

				{ id : "districtTownVillage", label : "City/Town/Village", name : "districtTownVillage", isVisible : true },

				{ id : "postal", label : "Zip/Postal Code", name : "postalCode", isVisible : true }

			]

		},

		NR : { AddressFields :

			[

				{ id : "addr1", label : "Street Address", name : "addrLine1StreetName", isVisible : true },

				{ id : "addr2", label : "Street Address 2", name : "addrLine2RoomApartment", isVisible : true },

				{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : true },

				{ id : "stateProv", label : "State/Province", name : "stateProvCode", isVisible : true },

				{ id : "districtTownVillage", label : "City/Town/Village", name : "districtTownVillage", isVisible : true },

				{ id : "postal", label : "Zip/Postal Code", name : "postalCode", isVisible : true }

			]

		},

		SC : { AddressFields :

			[

				{ id : "addr1", label : "Street Address", name : "addrLine1StreetName", isVisible : true },

				{ id : "addr2", label : "Street Address 2", name : "addrLine2RoomApartment", isVisible : true },

				{ id : "cityCountyWard", label : "City", name : "cityCountyWard", isVisible : true },

				{ id : "stateProv", label : "State/Province", name : "stateProvCode", isVisible : true },

				{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : true },

				{ id : "postal", label : "Zip/Postal Code", name : "postalCode", isVisible : true }

			]

		},

		MX : { AddressFields :
			[
				{ id : "stateProv", label : "Province/State", name : "stateProvCode", isVisible : true }
			]
		},
		CA : { AddressFields :
			[
				{ id : "stateProv", label : "Province", name : "stateProvCode", isVisible : true }
			]
		},
		KP : { AddressFields :
			[
				{ id : "cityCountyWard", label : "City/County", name : "cityCountyWard", isVisible : true },
				{ id : "stateProv", label : "State", name : "stateProvCode", isVisible : false },
				{ id : "districtTownVillage", label : "District/Town/Village", name : "districtTownVillage", isVisible : true }
			]
		}
	}

var fieldValidationMapping = {

		"addr1" : { "field_desc" : "addrLine1StreetName", "class_required" : "emptyField", "class_validate" : "isHashPresent" },

		"addr2" : { "field_desc" : "addrLine2RoomApartment", "class_required" : "required", "class_validate" : "isHashPresent" },

		"districtTownVillage" : { "field_desc" : "districtTownVillage", "class_required" : "emptyField", "class_validate" : "" },

		"cityCountyWard" :  { "field_desc" : "cityCountyWard", "class_required" : "emptyField", "class_validate" : "" },

		"areaTerritoryPrefecture" : { "field_desc" : "areaTerritoryPrefecture", "class_required" : "emptyField", "class_validate" : "" },

		"districtCode" :  { "field_desc" : "districtCode", "class_required" : "emptyField", "class_validate" : "" },

		"stateProv" :  { "field_desc" : "stateProvCode", "class_required" : "emptyField", "class_validate" : "" },

		"postal" :  { "field_desc" : "postalCode", "class_required" : "emptyField", "class_validate" : "" }

};
var addressMap = {

		reqAddrObj : {},

		langObj : [],

		langCode: '',

		langDropDown : [],

		createLabel : function(Definition,suffix) {


			var country=$("#countryCode"+suffix).val();


			var prefix = "* ";

			if(suffix.indexOf("disp") != -1){
				prefix = "";
			}


			if (country == "US") {

				addressMap.reqAddrObj = {

					"addrLine1StreetName" : true,

					"addrLine2RoomApartment" : false,

					"districtTownVillage" : false,

					"cityCountyWard" : true,

					"areaTerritoryPrefecture" : false,

					"districtCode" : false,

					"stateProvCode" : true,

					"postalCode" : true

				};

			}

			if (country == "CA") {

				addressMap.reqAddrObj = {

					"addrLine1StreetName" : true,

					"addrLine2RoomApartment" : false,

					"districtTownVillage" : false,

					"cityCountyWard" : true,

					"areaTerritoryPrefecture" : false,

					"districtCode" : false,

					"stateProvCode" : true,

					"postalCode" : true

				};

			}

			if (country == "AU") {

				addressMap.reqAddrObj = {

					"addrLine1StreetName" : true,

					"addrLine2RoomApartment" : false,

					"districtTownVillage" : false,

					"cityCountyWard" : true,

					"areaTerritoryPrefecture" : false,

					"districtCode" : false,

					"stateProvCode" : true,

					"postalCode" : true

				};

			}

			switch(Definition.name) {

			case "addrLine1StreetName":

				if (addressMap.reqAddrObj.addrLine1StreetName == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

			case "addrLine2RoomApartment":

				if (addressMap.reqAddrObj.addrLine2RoomApartment == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

			case "districtTownVillage":

				if (addressMap.reqAddrObj.districtTownVillage == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

			case "cityCountyWard":

				if (addressMap.reqAddrObj.cityCountyWard == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

			case "areaTerritoryPrefecture":

				if (addressMap.reqAddrObj.areaTerritoryPrefecture == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

			case "districtCode":

				if (addressMap.reqAddrObj.districtCode == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

			case "stateProvCode":

				if (addressMap.reqAddrObj.stateProvCode == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

			case "postalCode":

				if (addressMap.reqAddrObj.postalCode == true) {

					return (prefix + Definition.label);

				} else {

					return Definition.label;

				}

				break;

		}

	},



	addressFields : function(index) {

		var suffix;

		if(index==null || index==""){
			suffix="";
		}
		else{
			suffix="-"+index;
		}

		if(arguments.length != 2) {

			countryCode = $("#countryCode"+suffix).val();


		}


		if(countryCode != "US" && countryCode != "CA") {

			var countryObj = { "countryCode":countryCode };

			jQuery.ajax({
				url  : "/utils/addressValid_setAddressValidation",
				type : "POST",
				data : countryObj,
				async: false,
				dataType : "json",
				headers: { "cache-control": "no-cache" },
				success : function(data) {
					if (data != null) {
						addressMap.reqAddrObj = {
							"addrLine1StreetName" : data.addrLine1StreetNameRequired,
							"addrLine2RoomApartment" : data.addrLine2RoomApartmentRequired,
							"districtTownVillage" : data.districtTownVillageRequired,
							"cityCountyWard" : data.cityCountyWardRequired,
							"areaTerritoryPrefecture" : data.areaTerritoryPrefectureRequired,
							"districtCode" : data.districtCodeRequired,
							"stateProvCode" : data.stateProvCodeRequired,
							"postalCode" : data.postalCodeRequired
						};
						addressMap.displayAddressFields(countryCode,suffix);
					}
				}
			}).fail(function(jqXHR, textStatus, error){
				try{
					delta.utils.logger.ajaxError(jqXHR, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
			});
		}else {
			/*
			 * Fix for defect 61841
			 */
			addressMap.reqAddrObj = {
					"addrLine1StreetName" : true,
					"addrLine2RoomApartment" : true,
					"districtTownVillage" : true,
					"cityCountyWard" : false,
					"areaTerritoryPrefecture" : false,
					"districtCode" : false,
					"stateProvCode" : false,
					"postalCode" : true
				};
			 $("#stateList").show();
	         $("#stateList select").attr({id:"stateProv",name:"stateProvCode"});
	         $("#stateText").hide();
	         $("#stateText input").attr({id:"stateProv1",name:"stateProvCode1"});
			addressMap.displayAddressFields(countryCode,suffix);
		}
	},
	displayAddressFields : function(countryCode,suffix){

		var Country = '';
			if(CountryAddressFields[countryCode]) {
			Country = CountryAddressFields[countryCode].AddressFields;
		} else {
			Country =  CountryAddressFields["US"].AddressFields;
		}
		var DefaultState = CountryAddressFields["US"].AddressFields;
		for(var i=0; i < DefaultState.length; i++) {
			var isFound = false;
			for(var j=0; j < Country.length; j++) {
				if(DefaultState[i].id == Country[j].id) {
					if(Country[j].isVisible) {

						if(DefaultState[i].id == "areaTerritoryPrefecture" || DefaultState[i].id == "districtTownVillage" || DefaultState[i].id == "postal" || DefaultState[i].id == "stateProv"){
							$("#"+DefaultState[i].id +suffix+ "_label").parent().show();
					}
						$("#"+DefaultState[i].id +suffix + "_label").html(addressMap.createLabel(Country[j],suffix));
						$("#"+DefaultState[i].id +suffix+ "_label").show();
						$("#"+DefaultState[i].id+suffix).show();
						var fieldDesc = fieldValidationMapping[DefaultState[i].id].field_desc;

						if(addressMap.reqAddrObj[fieldDesc])
						$("#"+DefaultState[i].id+suffix).addClass(fieldValidationMapping[DefaultState[i].id].class_required);
						else
						$("#"+DefaultState[i].id+suffix).removeClass(fieldValidationMapping[DefaultState[i].id].class_required);
						if(fieldValidationMapping[DefaultState[i].id].class_validate != "")
							$("#"+DefaultState[i].id+suffix).addClass(fieldValidationMapping[DefaultState[i].id].class_validate);

						$("#"+DefaultState[i].id+"Wrapper").show();

					} else {
						if(DefaultState[i].id == "areaTerritoryPrefecture" || DefaultState[i].id == "districtTownVillage" || DefaultState[i].id == "postal" || DefaultState[i].id == "stateProv"){
							$("#"+DefaultState[i].id +suffix+ "_label").parent().hide();
					}
						$("#"+DefaultState[i].id +suffix+ "_label").hide();
						$("#"+DefaultState[i].id+suffix).hide();
						$("#"+DefaultState[i].id+suffix).val("");
						$("#"+DefaultState[i].id+suffix).removeClass(fieldValidationMapping[DefaultState[i].id].class_required);
						$("#"+DefaultState[i].id+suffix).removeClass(fieldValidationMapping[DefaultState[i].id].class_validate);

						$("#"+DefaultState[i].id+"Wrapper").hide();
						}

				isFound = true;
				break;
				}
			}
			if(!isFound) {
				if(DefaultState[i].isVisible) {

					if(DefaultState[i].id == "areaTerritoryPrefecture" || DefaultState[i].id == "districtTownVillage" || DefaultState[i].id == "postal" || DefaultState[i].id == "stateProv"){
						$("#"+DefaultState[i].id +suffix+ "_label").parent().show();
				}
					$("#"+DefaultState[i].id +suffix + "_label").html(addressMap.createLabel(DefaultState[i],suffix));

					$("#"+DefaultState[i].id +suffix+ "_label").show();
					$("#"+DefaultState[i].id+suffix).show();
					var fieldDesc = fieldValidationMapping[DefaultState[i].id].field_desc;
					if(addressMap.reqAddrObj[fieldDesc])
					$("#"+DefaultState[i].id+suffix).addClass(fieldValidationMapping[DefaultState[i].id].class_required);
					else
						$("#"+DefaultState[i].id+suffix).removeClass(fieldValidationMapping[DefaultState[i].id].class_required);

					if(fieldValidationMapping[DefaultState[i].id].class_validate != "")
				$("#"+DefaultState[i].id+suffix).addClass(fieldValidationMapping[DefaultState[i].id].class_validate);

					$("#"+DefaultState[i].id+"Wrapper").show();

				} else {

					if(DefaultState[i].id == "areaTerritoryPrefecture" || DefaultState[i].id == "districtTownVillage" || DefaultState[i].id == "postal" || DefaultState[i].id == "stateProv"){
						$("#"+DefaultState[i].id +suffix+ "_label").parent().hide();
				}
					$("#"+DefaultState[i].id +suffix+ "_label").hide();
					$("#"+DefaultState[i].id+suffix).hide();
					$("#"+DefaultState[i].id+suffix).val("");
					$("#"+DefaultState[i].id+suffix).removeClass(fieldValidationMapping[DefaultState[i].id].class_required);

					$("#"+DefaultState[i].id+suffix).removeClass(fieldValidationMapping[DefaultState[i].id].class_validate);
					$("#"+DefaultState[i].id+"Wrapper").hide();
				}
			}
		}
	},

		languageOptions : function(selectedCountry){
			CountryDetailsProcessor.getCountryDetail(selectedCountry.val(),this.handleCntryResponse);
			return false;
		},

		handleCntryResponse : function(data) {
				var langArray = [];
				var langData = {};
				var dropOption=[];
				var langDropDownLength = 0;

				if(data != null) {
					for(var i=data.languageDtls.length-1; i>=0; i--) {
						langData = {
							"languageCode" : data.languageDtls[i].languageCode,
							"languageName" : data.languageDtls[i].languageName,
							"primaryLanguageIndicator" : data.languageDtls[i].primaryLanguageIndicator
						};
						langArray.push(langData);
					}
					addressMap.langObj = langArray;

					var selIdx = 0;
					if(addressMap.langObj != null) {

						for(var i=0; i<addressMap.langObj.length; i++) {
							var selValue = addressMap.langObj[i].languageCode;
							if(addressMap.langCode == 'name') {
								selValue = addressMap.langObj[i].languageName;
							}
							langDropDownLength ++;
							dropOption[i]="<option value='"+selValue+"'>"+addressMap.langObj[i].languageName +"</option>";

							if(addressMap.langObj[i].primaryLanguageIndicator == 'Y'){
								selIdx = i;
							}
					}
					$('#language').html(dropOption.join(''));
					$('#language option').get(selIdx).selected = true;;
				}
			}else{
				// Default English language to set
				langDropDownLength ++;
				dropOption[0]="<option value='en'>English</option>";
				$('#language').html(dropOption.join(''));
			}

		},

		setAddressType : function(indexType) {

			if(indexType==null || indexType=="")
			{
				 suffix="";
			}
			else{
				 suffix="-"+indexType;
			}
			var atype = $("#aType"+suffix).val();

			if(atype == 'B') {
				$("#bname"+suffix).show();
				$("#bname"+suffix+ "_label").show();
			} else {
				$("#bname"+suffix).hide();
				$("#bname"+suffix+ "_label").hide();
			}
		},
		/*validateAddressFields : function() {
			var error = false;
			if(addressMap.reqAddrObj.addrLine1StreetName) {
				if(valObj.validateStreet("addr1") == false) { error = true;}
			}
			if(addressMap.reqAddrObj.addrLine2RoomApartment) {
				if(valObj.validateStreet("addr2") == false) { error = true;}
			}

			if(addressMap.reqAddrObj.cityCountyWard) {
				if(valObj.validateCity("cityCountyWard") == false) { error = true;}
			}
			if(addressMap.reqAddrObj.stateProvCode) {
				if(valObj.validateCity("stateProv") == false) { error = true;}
			}
			if(addressMap.reqAddrObj.districtTownVillage) {
				if(valObj.validateCity("districtTownVillage") == false) { error = true;}
			}
			if(addressMap.reqAddrObj.areaTerritoryPrefecture) {
				if(valObj.validateStreet("areaTerritoryPrefecture") == false) { error = true;}
			}
			if(addressMap.reqAddrObj.postalCode) {
				if(valObj.validatePostalCode("postal") == false) { error = true;}
			}
			if(error == true) {
				return false;
			}
		}*/
		addRemoveRules : function(){
			/* Fix for defect #57599 */
			if($.isEmptyObject(addressMap.reqAddrObj)) return false;
			if (addressMap.reqAddrObj.addrLine1StreetName && $("#addr1").size()) {
			    $("#addr1").rules("add", "emptyField");
			    $("#addr1").rules("add", "isHashPresent");
			    /* For CPM-817 */
			    $('#addr1').rules('add', {
			        "validAddressLine1": true   // overwrite an existing rule
			    });
			    if(CustomerInfo.isLoggedIn() && !addAddressCheck){
			    $("#addr1").blur();
				}
			} else if ($("#addr1").size()) {
			    $("#addr1").rules("remove", "emptyField");
			    $("#addr1").rules("remove", "isHashPresent");
			    /* For CPM-817 */
			    $('#addr1').rules('add', {
			        "validAddressLine1": false   // overwrite an existing rule
			    });
				$("#addr1").valid();
				$("#addr1_label").removeClass("errIcon");
				$("#addr1").parent().siblings(".errorTooltip").remove();
			}
			if (addressMap.reqAddrObj.addrLine1StreetName && $("#addr2").size()) {
				$("#addr2").rules("add", "isHashPresent");
				if(CustomerInfo.isLoggedIn() && !addAddressCheck){
				$("#addr2").blur();
				}
			} else if ($("#addr2").size()) {
				$("#addr2").rules("remove", "isHashPresent");
				$("#addr2").valid();
				$("#addr2_label").removeClass("errIcon");
				$("#addr2").parent().siblings(".errorTooltip").remove();
			}
			if (addressMap.reqAddrObj.cityCountyWard && $("#cityCountyWard").size()) {
			    $("#cityCountyWard").rules("add", "emptyField");
			    if(CustomerInfo.isLoggedIn() && !addAddressCheck){
			    $("#cityCountyWard").blur();
			    }
			} else if ($("#cityCountyWard").size()) {
			    $("#cityCountyWard").rules("remove", "emptyField");
				$("#cityCountyWard").valid();
				$("#cityCountyWard_label").removeClass("errIcon");
				$("#cityCountyWard").parent().siblings(".errorTooltip").remove();
			}
			if (addressMap.reqAddrObj.stateProvCode && $("#stateProv").size()) {
			    $("#stateProv").rules("add", "emptyField");
			    if(CustomerInfo.isLoggedIn() && !addAddressCheck){
			    $("#stateProv").blur();
			    }
			} else if ($("#stateProv").size()) {
				$("#stateProv").rules("remove", "emptyField");
				$("#stateProv").valid();
			    $("#stateProv_label").removeClass("labelError");
				$("#stateProv_label").removeClass("errIcon");
				$("#stateProv").parent().siblings(".errorTooltip").remove();
			}
			if (addressMap.reqAddrObj.postalCode && $("#postal").size()) {
			    /*$("#postal").rules("add", "isNumeric");*/
			    $("#postal").rules("add", "emptyField");
			    if(CustomerInfo.isLoggedIn() && !addAddressCheck){
			    $("#postal").blur();
			    }
			} else if ($("#postal").size()) {
			   /* $("#postal").rules("remove", "isNumeric");*/
			    $("#postal").rules("remove", "emptyField");
			    $("#postal").valid();
			    $("#postal_label").removeClass("errIcon");
			    $("#postal").parent().siblings(".errorTooltip").remove();
			}
			if (addressMap.reqAddrObj.areaTerritoryPrefecture && $("#areaTerritoryPrefecture").size()) {
			    $("#areaTerritoryPrefecture").rules("add", "emptyField");
			/*  Changes for CPM 890
			    if(CustomerInfo.isLoggedIn()){
			    $("#areaTerritoryPrefecture").blur();
			    }
			 */
			} else if ($("#areaTerritoryPrefecture").size()) {
			    $("#areaTerritoryPrefecture").rules("remove", "emptyField");
				$("#areaTerritoryPrefecture").valid();
				$("#areaTerritoryPrefecture_label").removeClass("errIcon");
				$("#areaTerritoryPrefecture").parent().siblings(".errorTooltip").remove();

			}
			if (addressMap.reqAddrObj.districtTownVillage && $("#districtTownVillage").size()) {
			    $("#districtTownVillage").rules("add", "emptyField");
			    if(CustomerInfo.isLoggedIn()){
			    $("#districtTownVillage").blur();
			    }
			} else if ($("#districtTownVillage").size()) {
			    $("#districtTownVillage").rules("remove", "emptyField");
				$("#districtTownVillage").valid();
				$("#districtTownVillage_label").removeClass("errIcon");
				$("#districtTownVillage").parent().siblings(".errorTooltip").remove();
			}
			/* Fix for defect #57599 */
		}
}

/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.66; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();
var eDocUtils = {
		eGiftHTML : "",
	    toatalAmountOfEdocUsed : "0.00",
	    totalRemainingVoucherBalance : "0.00",
	    totalResidualVoucherBalance : "0.00",
		removeTravelVoucher : false,
		disableFindVoucherAndEGift : false,
		eGiftWrongSearchError :  "",
		applyGiftBtnClicked : false,
		eDocAjaxComplete : false,
		displayZeroAmountDueAdvisory: false,
		eDocDataObj : {},
		   setData : function (eDocData,rowHTML) {
			     //  "use strict";
			    this.eDocDataObj = eDocData;
			    this.render(rowHTML);
		   },
		   render: function(rowHTML) {
			   eDocUtils.eDocDataObj.allPaxEodcArr = [];
			   eDocUtils.eDocDataObj.totalCertValue = "0.00";
			   var isEgift = (eDocUtils.eDocDataObj.giftCertExist != undefined)?eDocUtils.eDocDataObj.giftCertExist: false;
			   eDocUtils.disableFindVoucherAndEGift = (msg.edocSelectedInd == "N" || (msg.edocSelectedInd == "Y" && (msg.companionCert == true || (undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECert == true) || (undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECoupon == true))))? true : false;
			   eDocUtils.eDocDataObj.giftCardSelected = isEgift;
			   eDocUtils.eDocDataObj.remainingBal = "0.00";
			   eDocUtils.toatalAmountOfEdocUsed = "0.00";
			   eDocUtils.eDocDataObj.tripCostCovered = false;
			   eDocUtils.totalRemainingVoucherBalance = "0.00";
			   eDocUtils.totalResidualVoucherBalance = "0.00";
			   eDocUtils.isAnyEdocPresent = false;
			   eDocUtils.totalCertUsageBean = 0;
			   if(eDocUtils.eDocDataObj.paxEdocMap != null){
				   var paxCount = 0;
			   $.each(eDocUtils.eDocDataObj.paxEdocMap,function(passengerName,edocData){
				   paxCount++;
				   edocData.paxNameUnformatted = passengerName;
				   edocData.tripCostCovered = false;
				   edocData.toatalAmountOfEdocUsed = "0.00";
				   edocData.residualBalance = "0.00";
				   edocData.dataPresent = false;
				   edocData.isLastItem = (paxCount == ($(eDocUtils.eDocDataObj.paxEdocMap).objLength()));
				   if(edocData.certUsageBean != undefined && edocData.certUsageBean != null && !$.isEmptyObject(edocData.certUsageBean)){
					   edocData.dataPresent = true;
					   eDocUtils.isAnyEdocPresent = true;
					   edocData.paxCertTotal = 0;
					   $.each(edocData.certUsageBean,function(i,docData){
						   docData.dispDocNum = "#"+docData.documentNumber;
						   edocData.paxCertTotal += parseInt(docData.certValue);
						   docData.isEgift = isEgift;
						   docData.isMoreEDocReq = true;
						   docData.tripCostCovered = false;
						   docData.isLastItem = false;
						   eDocUtils.totalCertUsageBean++;
				   			if(isEgift){
					   			searchBtn = false;
					   			}
					   			if(!isEgift){
						   			var reassignMapArr =[];
						   			if(docData.reassignMap != undefined && docData.reassignMap != null &&  !$.isEmptyObject(docData.reassignMap) ){
						   				colCount = "sixCol";
						   				$.each(docData.reassignMap,function(unformattedName,formattedName){
						   					reassignMapArr.push(
						   							{
						   								"formattedName" : formattedName,
						   								"unformattedName" : unformattedName
						   							});
						   					});
						   				docData.assignMap = reassignMapArr;
						   			}
					   			}

					   			docData.isLastItem = (i == (edocData.certUsageBean.length - 1));

					   			if(i==2){
					   				edocData.showCloseButton = true;
					   				eDocUtils.eDocDataObj.openGiftSearch = false;
					   			}else{
					   				edocData.showCloseButton = false;
					   				eDocUtils.eDocDataObj.openGiftSearch = true;
					   			}

					   			if(docData.isMoreEDocReq){
						   		    if(parseFloat(docData.certBalance) > parseFloat(0)){
						   		    	docData.isMoreEDocReq = false;
							   				docData.tripCostCovered = true;
							   				eDocUtils.eDocDataObj.tripCostCovered = docData.tripCostCovered;
							   		    edocData.tripCostCovered = docData.tripCostCovered;
							   		    edocData.residualBalance = (parseFloat(edocData.residualBalance) + parseFloat(docData.certBalance)).toFixed(flightUtil.currentPriceDecimalLength);
							   		    docData.residualBalance = edocData.residualBalance;
							   		    eDocUtils.eDocDataObj.openGiftSearch = false;
							   			}
						   		    }

					   			docData.certBalance = (parseFloat(docData.certBalance).toFixed(flightUtil.currentPriceDecimalLength)).toString();
					   			docData.certValue = (parseFloat(docData.certValue).toFixed(flightUtil.currentPriceDecimalLength)).toString();

					   			if(docData.isLastItem){
					   				docData.remainingBal = (parseFloat(edocData.dueAmount)).toFixed(flightUtil.currentPriceDecimalLength);
					   			}
					   			if(parseFloat(docData.remainingBal) < 0){
					   			 docData.remainingBal = "0.00";
					   			}

					   			if(!msg.companionCert || !(undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECert == true)){
					   			eDocUtils.toatalAmountOfEdocUsed = (parseFloat(eDocUtils.toatalAmountOfEdocUsed)+parseFloat(docData.certValue)).toFixed(flightUtil.currentPriceDecimalLength);
					   			    edocData.toatalAmountOfEdocUsed = (parseFloat(edocData.toatalAmountOfEdocUsed)+parseFloat(docData.certValue)).toFixed(flightUtil.currentPriceDecimalLength);
					   				eDocUtils.eDocDataObj.totalCertValue = (parseFloat( eDocUtils.eDocDataObj.totalCertValue) + parseFloat(docData.certValue)).toFixed(flightUtil.currentPriceDecimalLength);
					   				eDocUtils.totalRemainingVoucherBalance = (parseFloat(eDocUtils.totalRemainingVoucherBalance)+parseFloat(docData.remainingBal)).toFixed(flightUtil.currentPriceDecimalLength);
					   				eDocUtils.totalResidualVoucherBalance = (parseFloat(eDocUtils.totalResidualVoucherBalance) + parseFloat(docData.certBalance)).toFixed(flightUtil.currentPriceDecimalLength);
					   			}
					   		});

					   edocData.paxCertValue = (this.paxCertTotal.toFixed(flightUtil.currentPriceDecimalLength)).toString();
					   edocData.giftCertExist = isEgift;
					   eDocUtils.eDocDataObj.disableFindVoucherAndEGift =  eDocUtils.disableFindVoucherAndEGift;
					   if(!isEgift){
                    	   msg.edocSelectedInd = "Y";
					   }
					   $("#nextGenHeader").html($("#_flight_checkout_header_tmpl").render(msg,pageName));
					   flightUtil.renderDiscountDiv(msg, "reviewPurchse");
					   if(!(msg.payWithMilesInd == "Y" || (undefined != msg.upgradeWithMilesInd && msg.upgradeWithMilesInd == "Y")) && !msg.companionCert && !(undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECert == true)){
						   if(msg.fopRule.payPal != Payment.fopConstants.viewMore){
					     msg.fopRule.payPal = "Disabled";
						   isFopRuleModified = true;
					   }
						   if(msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
				         msg.fopRule.payPalCredit = "Disabled";
				       isFopRuleModified = true;
					   }
					   if(undefined !== msg.fopRule.rtbt && msg.fopRule.rtbt != Payment.fopConstants.viewMore) {
							msg.fopRule.rtbt = "Disabled";
							isFopRuleModified = true;
						}
					     $(".fopTypes .paypal,.fopTypes .billMeLater, .fopTypes .onlineBanking").addClass("labelTxtDisabled");
					   }
				   }else{
					   edocData.dataPresent = false;
					   eDocUtils.removeTravelVoucher = false;
					   msg.totalFare.grandTotal = msg.secDisplayInfo.ItineraryDO.grandTotal;
                       if(!eDocUtils.isAnyEdocPresent &&  msg.edocSelectedInd == "Y"){
                    	   msg.edocSelectedInd = "N";
					   }
                       $("#nextGenHeader").html($("#_flight_checkout_header_tmpl").render(msg,pageName));
                       flightUtil.renderDiscountDiv(msg, "reviewPurchse");
				   	 }
				       eDocUtils.eDocDataObj.toatalAmountOfEdocUsed = eDocUtils.toatalAmountOfEdocUsed;
				       eDocUtils.eDocDataObj.totalRemainingVoucherBalance = eDocUtils.totalRemainingVoucherBalance;
				       eDocUtils.eDocDataObj.totalResidualVoucherBalance = eDocUtils.totalResidualVoucherBalance;

				      if(!(msg.payWithMilesInd == "Y" || (undefined != msg.upgradeWithMilesInd && msg.upgradeWithMilesInd == "Y"))){
					   if(parseFloat(edocData.dueAmount) > 0 || (parseFloat(totalSeatVal) + parseFloat(tripExtraTotalAmount) + parseFloat(addedInsPrice)) > 0){
						   if(msg.tripExtrasMultiCurr && edocData.isLastItem){
							   eDocUtils.eDocDataObj.remainingBal =(parseFloat(eDocUtils.eDocDataObj.remainingBal) + parseFloat(edocData.dueAmount) + parseFloat(totalSeatVal) + parseFloat(addedInsPrice)).toFixed(flightUtil.currentPriceDecimalLength);
						   }else if(parseFloat(edocData.dueAmount) > 0 && edocData.isLastItem){
							   eDocUtils.eDocDataObj.remainingBal =(parseFloat(eDocUtils.eDocDataObj.remainingBal) + parseFloat(edocData.dueAmount) + parseFloat(totalSeatVal) + parseFloat(tripExtraTotalAmount) + parseFloat(addedInsPrice)).toFixed(flightUtil.currentPriceDecimalLength);
						   }else if(parseFloat(edocData.dueAmount) == 0 && edocData.isLastItem){
							   eDocUtils.eDocDataObj.remainingBal = (parseFloat(eDocUtils.eDocDataObj.remainingBal) + parseFloat(totalSeatVal) + parseFloat(tripExtraTotalAmount) + parseFloat(addedInsPrice)).toFixed(flightUtil.currentPriceDecimalLength);
						   }else{
							   eDocUtils.eDocDataObj.remainingBal =(parseFloat(eDocUtils.eDocDataObj.remainingBal) + parseFloat(edocData.dueAmount)).toFixed(flightUtil.currentPriceDecimalLength);
						   }
						   if(msg.fopRule.alipay != Payment.fopConstants.viewMore && msg.fopRule.alipay != Payment.fopConstants.notApplicable && msg.isUSorChinaOriginFlight &&  msg.fopRule.alipay != "Selected" && (parseFloat(totalSeatVal) > 0 || parseFloat(edocData.dueAmount) > 0)){
				    			  /* msg.fopRule.alipay = "Enabled";
						    fopRuleJSON = $.extend({}, msg.fopRule);
				    			  Payment.reloadFopRules(msg.fopRule); */ //code commemted for CPM-626
				    			
							    if(Payment.selectedFop == "payGC"){
						    $(".cardLogos #AP").show();
						    $(".cardLogos").find("label[for=AP]").show();
							$("#creditCardType option[value='AP']").show();
						   }
						   }else if(msg.fopRule.alipay != Payment.fopConstants.viewMore && msg.fopRule.alipay != Payment.fopConstants.notApplicable && msg.isUSorChinaOriginFlight &&  msg.fopRule.alipay != "Selected" && parseFloat(edocData.dueAmount) == 0 && parseFloat(totalSeatVal) == 0){
							   msg.fopRule.alipay = "Disabled";
							   isFopRuleModified = true;
							   $(".fopTypes .alipay ").addClass("labelTxtDisabled");
							   $(".cardLogos #AP").hide();
							   $(".cardLogos").find("label[for=AP]").hide();
							   $("#creditCardType option[value='AP']").hide();
						   }
						   $(".zeroAmountDueAdvisory").hide();
						   eDocUtils.displayZeroAmountDueAdvisory=false;
						   }else if(!parseFloat(eDocUtils.eDocDataObj.remainingBal) > 0){
						   eDocUtils.eDocDataObj.remainingBal = (parseFloat(eDocUtils.eDocDataObj.remainingBal)).toFixed(flightUtil.currentPriceDecimalLength);
						   if(msg.fopRule.alipay != Payment.fopConstants.viewMore) {
						   msg.fopRule.alipay = "Disabled";
						   isFopRuleModified = true;
						   $(".fopTypes .alipay ").addClass("labelTxtDisabled");
						   $(".zeroAmountDueAdvisory").show();
						   eDocUtils.displayZeroAmountDueAdvisory=true;
						   $(".cardLogos #AP").hide();
						   $(".cardLogos").find("label[for=AP]").hide();
						   $("#creditCardType option[value='AP']").hide();
					   }
					   }
				      }
					   eDocUtils.eDocDataObj.currCode = edocData.currCode;
					   eDocUtils.eDocDataObj.currencySymbol = edocData.currencySymbol;
					   eDocUtils.eDocDataObj.tripExtrasMultiCurr = msg.tripExtrasMultiCurr;
					   eDocUtils.eDocDataObj.tripExtraCurrSymbol = msg.tripExtraCurrSymbol;
					   eDocUtils.eDocDataObj.tripExtra = msg.tripExtra;
					   eDocUtils.eDocDataObj.tripExtraCurrCode = msg.tripExtraCurrCode;
					   eDocUtils.eDocDataObj.allPaxEodcArr.push(edocData);
			   });

			   if(msg.edocSelectedInd == "N" && $("#hdnTotalCertUsageBean").val() > 0 && eDocUtils.totalCertUsageBean == 0) {
				   TripInsurance.init();
			   }
			   $("#hdnTotalCertUsageBean").val(eDocUtils.totalCertUsageBean);


			   if(!(msg.payWithMilesInd == "Y" || (undefined != msg.upgradeWithMilesInd && msg.upgradeWithMilesInd == "Y")) && !eDocUtils.isAnyEdocPresent && !msg.companionCert && !(undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECert == true)) {

				   if(msg.fopRule.payPal != Payment.fopConstants.viewMore && msg.fopRule.payPal != Payment.fopConstants.notApplicable && !msg.cubaMarketInItin && msg.USOrginFlight && msg.fopRule.payPal != "Selected") {
				            msg.fopRule.payPal = "Enabled";
		   		}
					   if(msg.fopRule.payPalCredit != Payment.fopConstants.viewMore && msg.fopRule.payPalCredit != Payment.fopConstants.notApplicable && !msg.cubaMarketInItin && msg.USOrginFlight && !greaterThanBMLamt && msg.fopRule.payPalCredit != "Selected") {
		    	            msg.fopRule.payPalCredit = "Enabled";
					   }
					   if(msg.fopRule.alipay != Payment.fopConstants.viewMore && msg.fopRule.alipay != Payment.fopConstants.notApplicable && msg.isUSorChinaOriginFlight && msg.fopRule.alipay != "Selected") {
						    msg.fopRule.alipay = "Enabled";
					   }
					   if(undefined !== msg.fopRule.rtbt && msg.fopRule.rtbt != Payment.fopConstants.viewMore && msg.fopRule.rtbt != Payment.fopConstants.notApplicable && !msg.USOrginFlight && msg.fopRule.rtbt != "Selected") {
		    	            msg.fopRule.rtbt = "Enabled";
					   }
						if(msg.fopRule.giftCard != "Selected"){
			                msg.fopRule.giftCard = "Enabled";
			           }
					   fopRuleJSON = $.extend({}, msg.fopRule);
			           Payment.reloadFopRules(msg.fopRule);
			   	}
		   }

			       if(rowHTML == ""){
	   		           $("#eGiftFOPSection").html($("#_payment_egift_section_tmpl").render(eDocUtils.eDocDataObj));
					   //if($(".showGiftCardInlineTripCostCoveredError").val()==="true"){
					   if($("#eGiftFOPSection .paymentLeftCol .paymentInfoSection").length>2){
						  $(".giftCardInlineTripCostCoveredError").show();
					   }else{
						  $(".giftCardInlineTripCostCoveredError").hide();
					   }
					   var eGiftRowHTML = $('<div>').append($("#eGiftNotSelectedSection").html());
			   		   $(eGiftRowHTML).find(".paxInputWrapper4,.moreEGiftLink").hide();
			   		   eDocUtils.eGiftHTML = $(eGiftRowHTML).html();
				   		if(Payment.selectedFop == "payGC"){
	                 	   $(".fopTypes .eGift,.fopTypes #payGC").click();
						   if($("#eGiftFOPSection .paymentInfoSection").is(":visible")){ $("#amex-express-checkout").css("top","161px"); }
						   msg.amexExpCkoInd? $(".giftCardInfo").hide():$(".giftCardInfo").show();
	                    }
			       }else if($(rowHTML).html() == ""){
					   $(rowHTML).html($("#_payment_egift_section_tmpl").render(eDocUtils.eDocDataObj));
					   //if($(".showGiftCardInlineTripCostCoveredError").val()==="true" || $("#eGiftFOPSection .paymentLeftCol .paymentInfoSection").length===3){
					   if($("#eGiftFOPSection .paymentLeftCol .paymentInfoSection").length>2){
						  $(".giftCardInlineTripCostCoveredError").show();
					   }else{
						  $(".giftCardInlineTripCostCoveredError").hide();
					   }
				   }
			       if($("#eGiftFOPSection  .eCreditPaymentInfo").length >= 2){
			    	   $(".moreEGiftLink").hide();
			       }
			       if(isEgift){
					   $("#eGiftTotalSection").html($("#_egift_total_section_tmpl").render(eDocUtils.eDocDataObj));
					   //58477 gift to gift card copy change - needs to be moved to tmpl
					   if($('#eGiftTotalSection .priceRow  .sheadsize') && $('#eGiftTotalSection .priceRow  .sheadsize').text()==='Gift') $('#eGiftTotalSection .priceRow  .sheadsize').text('Gift Card');
					   
					   flightUtil.reduceLargerCurFont();
					   $("#eGiftTotalSection").removeClass('hide');
					   $("#paymentAmountDueHolder").find(".sameLine").addClass("hide");
					   $("#eGiftTotalSection .giftCardAmountDue").css("padding-top",$("#eGiftFOPSection").height()+ 20);
			       }else if(!eDocUtils.removeTravelVoucher && !msg.companionCert && !(msg.edocSelectedInd == "Y" && undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECert == true)&& !(msg.payWithMilesInd == "Y" || (undefined != msg.upgradeWithMilesInd && msg.upgradeWithMilesInd == "Y"))){
			    	   $("#eDocAmountDueSection").html($("#_egift_total_section_tmpl").render(eDocUtils.eDocDataObj));
					   //58477 gift to gift card copy change - needs to be moved to tmpl
					   if($('#eGiftTotalSection .priceRow  .sheadsize') && $('#eGiftTotalSection .priceRow  .sheadsize').text()==='Gift') $('#eGiftTotalSection .priceRow  .sheadsize').text('Gift Card');
					   
			    	   flightUtil.reduceLargerCurFont();
					   $("#eDocAmountDueSection").removeClass('hide');
					   $("#paymentAmountDueHolder .sameLine:first").addClass("hide");
			       }
			       $(".eGiftInlineWrongValError").hide();
			       $("#eGiftNotSelectedSection .eGiftSearchRow:first,#eGiftFOPSection .paymentInfoSection:first").css("border-top","none");
			       //msg.upgradeWithMilesInd = "Y";
			       if(!(msg.payWithMilesInd == "Y" || (undefined != msg.upgradeWithMilesInd && msg.upgradeWithMilesInd == "Y")) && !eDocUtils.removeTravelVoucher && !msg.companionCert){
			       $("#paymentEdocHldr").html($("#_payment_edoc_tmpl").render(eDocUtils.eDocDataObj));
				   if(eDocUtils.displayZeroAmountDueAdvisory){
					  $(".zeroAmountDueAdvisory").show();
					  if($(".giftCardHeaderTab").is(":visible")){
						  $(".giftCardInlineTripCostCoveredError").text("You are unable to add more Gift Cards because you have already covered the total cost of your trip.")
						  $(".giftCardInlineTripCostCoveredError").show();
					  }
				   }else{
					   $(".zeroAmountDueAdvisory").hide();
					   $(".giftCardInlineTripCostCoveredError").text("You've reached the maximum number of Gift Cards per transaction")
				   }
			       flightUtil.reduceLargerCurFont();
			       }else{
			    	   msg.fopRule = $.extend({}, fopRuleJSON);
					   Payment.reloadFopRules(msg.fopRule);
			       }

			       if($("#eGiftNotSelectedSection .eGiftRow").length == 1 && $("#eGiftFOPSection .eCreditPaymentInfo").length == 0){
			    	   $("#eGiftTotalSection").addClass('hide');
			    	   eDocUtils.disableFindVoucherAndEGift = true;
			    	   $("#paymentTotalAmountSection").html($("#_payment_total_amount_tmpl").render(msg));
			    	   flightUtil.reduceLargerCurFont();
			       }
			       if(!eDocUtils.disableFindVoucherAndEGift){
			    	   $("#paymentTotalAmountSection").html($("#_payment_total_amount_edoc_tmpl").render(eDocUtils.eDocDataObj));
			    	   flightUtil.reduceLargerCurFont();
			       }
			       $("select").selectmenu({
				        change: function(event, ui) {
				            $(this).trigger('change');
				        },
				        create: function( event, ui ) {
				                $(this).addClass('custom-select');
				        }
				    });
			       /*if(!parseInt(Number(eDocUtils.totalRemainingVoucherBalance))){
			    	   $("#eDocAmountDueSection").find(".totalRemainingBalanceDiv").css("padding-top","0");
			       }*/
				   //58477 changes - begin
					if($('.paymentHeaderPrice .txtDecimal ')){
						$('.paymentHeaderPrice .txtDecimal ').text($('.paymentHeaderPrice .txtDecimal ').text().concat(" ").concat($('.paymentHeaderPrice .txtCurrency').text()));
					}
					if($('.paymentHeaderPrice .txtCurrency')) $('.paymentHeaderPrice .txtCurrency').text("");	
					if($("#paymentChooseSection")) $("#paymentChooseSection").remove();
					if($("#amex-express-checkout") && $("#amex-express-checkout").css("top")==="146") $("#amex-express-checkout").css("top", "161px");
					if($('.edocNumber')) $('.edocNumber').remove();
					if($('.residualBalRow')) $('.residualBalRow').remove();
					if($('#eGiftTotalSection .priceRow  .sheadsize') && $('#eGiftTotalSection .priceRow  .sheadsize').text()==='Gift') $('#eGiftTotalSection .priceRow  .sheadsize').text('Gift Card');
					if($(".eCreditPaymentInfo .paymentColMiddle .txtSymbol:last-child")) $(".eCreditPaymentInfo .paymentColMiddle .txtSymbol:last-child").remove();
					if($('.zeroAmountDueAdvisory') && $('.zerAmountDueAdvisoryRuler').length===0) $('.zeroAmountDueAdvisory').prepend("<hr class='zerAmountDueAdvisoryRuler'>");
					//58477 changes - end 
		   },
		   init: function() {
			   if(msg.shopType == "Revenue"){
			   $.ajax({
				      type : 'POST',
				      dataType : "json",
				      data : "cacheKeySuffix=" + cacheKeySuffix,
				      url : 'EDocSearchJSONAction' ,// url for eDoc
				      headers : {
				         "cache-control" : "no-cache"
				      },
				      success : function (eDocRes) {
				    	  //console.log(eDocRes);
						  delta.utils.logger.logMessage(eDocRes, "log");
				    	  eDocUtils.removeTravelVoucher = (msg.edocSelectedInd == "Y" && !msg.companionCert && undefined != msg.edocumentDetailList[0] && (msg.edocumentDetailList[0].ECert == true || msg.edocumentDetailList[0].ECoupon == true) && msg.edocumentDetailList[0].giftCert == false);
				    	  if(eDocUtils.removeTravelVoucher){
				    		  eDocRes.paxEdocMap = {};
				    	  }
				    	  $(".zeroAmountDueAdvisory").hide();
						  eDocUtils.displayZeroAmountDueAdvisory=false;
				    	  eDocRes.openGiftSearch = true;
				    	  eDocUtils.setData(eDocRes,"");
                          if(msg.companionCert || (undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECert == true)){
                        	  msg.fopRule = $.extend({}, fopRuleJSON);
  							  Payment.reloadFopRules(msg.fopRule);
                          }
				    	  if(eDocRes.giftCertExist == true){
				    		  $(".fopTypes .eGift,.fopTypes #payGC").click();
				    		  $(".istructionLabel .ecredit").find(".travelVoucherAdvisory").remove();
				    	  	  $(".istructionLabel .ecredit").append("<ul class ='travelVoucherAdvisory'><li>eCredits cannot be used with Gift Cards.</li></ul>");
				    	  }else if(eDocUtils.removeTravelVoucher){
				    		  $(".istructionLabel .ecredit").find(".travelVoucherAdvisory").remove();
				    		  $(".istructionLabel .ecredit").append("<ul class ='travelVoucherAdvisory'><li>eCredits cannot be used with certificates.</li></ul>");
				    	  }else{
				    		  $(".istructionLabel").find(".travelVoucherAdvisory").remove();
				    	  }
				    	  var enableGiftCard = (eDocUtils.eDocDataObj.giftCertExist && $("#paymentEdocHldr").find(".paymentInfoSection").length == 0 && msg.fopRule.giftCard == "Disabled" && !msg.companionCert && !eDocUtils.removeTravelVoucher && !(undefined != msg.payWithMilesInd && msg.payWithMilesInd == "Y")) ? true : false;
				    	  if(enableGiftCard && msg.fopRule.giftCard != "Selected"){
			     				 msg.fopRule.giftCard = "Enabled";
			     				 $(".fopTypes .eGift").removeClass("labelTxtDisabled");
			     		  }
				      }/*,
				      errors : function (error) {}*/
				   }).fail(function(jqXHR, textStatus, error){
						try{
							delta.utils.logger.ajaxError(jqXHR, textStatus, error);
							delta.utils.logger.logMessage("Request Failed: " + error, "error");
						}catch(err){
							if (window.console && window.console.error) {
								console.error('Error logging to delta.utils.logger:' + err);
							}
						}
					});
			   }
		   },

   applyRules : function () {
     //  "use strict";
			   /*Code will be used for eDoc implementation*/
	/*  if (msg.paxEdocAppliedMap !== undefined && msg.paxEdocAppliedMap !== null) {
         var eDocWithSeat = false;
         $.each(msg.paxEdocAppliedMap, function (key, element) {
            if (element.seatDetail !== undefined) {
               eDocWithSeat = true;
            }
            paxEdocAppliedList.push({
               "name" : key,
               "certAmtUsed" : parseFloat(element.certAmtUsed).toFixed(flightUtil.currentPriceDecimalLength),
               "certBalance" : parseFloat(element.certBalance).toFixed(flightUtil.currentPriceDecimalLength),
               "dueAmount" : parseFloat(element.dueAmount).toFixed(flightUtil.currentPriceDecimalLength),
               "paxTotal" : parseFloat(element.paxTotal).toFixed(flightUtil.currentPriceDecimalLength),
               "totalValOfCertSelected" : element.totalValOfCertSelected,
               "currCode" : msg.currCode,
               "currencySymbol" : msg.currencySymbol,
               "seatDetail" : (element.seatDetail !== undefined) ? element.seatDetail : "",
               "seatAmount" : (element.seatAmount !== undefined) ? parseFloat(element.seatAmount).toFixed(flightUtil.currentPriceDecimalLength) : ""
            });
            eDocDueTotalAmount = parseFloat(eDocDueTotalAmount) + parseFloat(element.dueAmount);
            if (element.seatAmount !== undefined && element.seatAmount > 0 && !seatPriceAdded) {
               seatPriceAdded = true;
            }
            edocSpentAmount = edocSpentAmount + parseFloat(element.certAmtUsed);
         });
         msg.eDocDueTotalAmount = eDocDueTotalAmount;
         msg.paxEdocAppliedList = paxEdocAppliedList;
         msg.eDocWithSeat = eDocWithSeat;
      }*/
      },
      showErrorBasedOnErrorMap : function(eGiftRowRemove,errorMap,bothErrorAndGiftPresent){
    	  var docIndex = 0;
    	  $.each(errorMap,function(docNumber,errObj){
    		  if(bothErrorAndGiftPresent){
    			  $.each(errObj,function(index,errorList){
    				  if($(errorMap).objLength() > 1){
    					  $("#eGiftFOPSection").find(".eGiftRow").eq(0).find(".moreEGiftLink").trigger("click");
    				  }
    				  var errorHTML = "<div class='backEnderrorMsgWrapper' role='alert' aria-atomic='true' aria-live='polite'>"+errorList.errorMessage+"</div>";
    				  var errorField = errorList.uiErrorField.toLowerCase();
    				  $("#eGiftFOPSection").find(".eGiftRow").eq(docIndex).find("#giftcard_number").attr("value",$.trim(docNumber));
    				  $("#eGiftFOPSection").find(".eGiftRow").eq(docIndex).find("#redemption_code").attr("value",$.trim(errorList.redemptionCode));
    				  $("#eGiftFOPSection").find(".eGiftRow").eq(docIndex).find("#"+errorField).addClass("backEnderrorMsgWrapper").parents(".eGiftSearchRow").prepend(errorHTML);
    				  docIndex++;
    			  });
    		  }else{

			      /* Fix done for defect #57284 */
    			  var errorRow = $("#eGiftFOPSection").find("input[id^=giftcard_number][value = "+docNumber+"]").parents(".eGiftRow");
    			  $.each(errObj,function(index,errorList){

    				  var errorHTML = "<div class='backEnderrorMsgWrapper' role='alert' aria-atomic='true' aria-live='polite'>"+errorList.errorMessage+"</div>";
    				  var errorField = errorList.uiErrorField.toLowerCase();
    				  $(errorRow).find("input[id^="+errorField+"]").addClass("errorInput").parents(".eGiftSearchRow").prepend(errorHTML);
    				  $(errorRow).find("input[id^="+errorField+"]").parent(".paxInputWrapper").find("label").addClass("errIcon");
    			  });
    		  }
    	  });
      },
      performEDocVoucherOperation : function (paxName,reassignPaxName,docNum,orderNo,operationName) {
		   $.ajax({
			      type : 'POST',
			      dataType : "json",
		      data : { "paxKey":paxName,"reassignPaxKey":reassignPaxName,"documentNumber":docNum,"orderNumber":orderNo,"cacheKeySuffix" : cacheKeySuffix,"operation" : operationName},
			      url : 'FindEdocVoucherJSONAction' ,
			      headers : {
			         "cache-control" : "no-cache"
			      },
			      success : function (eDocRes) {
	     	      if(operationName == "newSearch"){
		     	    	$('#EdocModalHolder').dialog({
		  	               autoOpen: false,
		  	               modal: true,
		  	               width: "91.819em",/*CPM-1003*/
		  	               height:612,
		  	               scrollable : false,
		  	               resizable: false,
		  	               draggable: false,
		  	               closeOnEscape: true,
		  	               create: function (event, ui) {
		  	                   var $this = $(this);
		  	                   var ele = $(event.target).parent();
		  	                  /* $($this).on('click','.closeBtn', function (e) {
		  	                       e.preventDefault();
		  	                       $this.dialog('close');
		  	                       $('#EdocModalHolder').dialog("destroy");
		  	                       $(".edoCIframe").prop('src', $(".edoCIframe").prop('src'));

	  	                       eDocUtils.init();
	  	                           if(eDocRes.giftCertExist == true){
	  					    		   $(".fopTypes .eGift,.fopTypes #payGC").click();
	  					    	   }
		  	                   });*/
		  	               }
		      	    	});
		     	    	$('#EdocModalHolder').dialog("open");
		     	    	$(".ui-dialog").addClass("nextGenModal");
						$(".ui-dialog-titlebar").addClass("eDocModalTitlebar");
						$("#EdocModalHolder").parent('div').addClass("eDocIframe");
						$(".ui-dialog-titlebar-close").remove();
                        var height = $('#EdocModalHolder').parent(".nextGenModal.ui-dialog").height();
                        $('#EdocModalHolder').parent(".nextGenModal.ui-dialog").css({ top:"30%",marginTop:-((height/3)-30), zIndex: "1001" });
                        $('#EdocModalHolder').siblings(".ui-dialog-titlebar").css("display","block");
                        $('#EdocModalHolder').css({marginTop : 0});
                        $('.edoCIframe').attr('src', function ( i, val ) { return val; });
		     	    	$(".ui-widget-overlay").css({ zIndex: 1000});
		     	    	//$(".ui-dialog:visible button").focus();
						$('.edoCIframe').on('load', function(){
							$('#EdocModalHolder').css('-webkit-overflow-scrolling','touch');
							/*$(document).on('scroll', function (event) {
								if($('#EdocModalHolder').is(":visible")){
									//$('#EdocModalHolder')[0].style='width: auto; min-height: 0px; max-height: none; height: 565px; margin-top: 0px;';
									$('#EdocModalHolder')[0].style='width: auto; min-height: 0px; max-height: 565px; height: 98%; margin-top: 0px; -webkit-overflow-scrolling: touch;';
								}
							});*/
						});

	     	      }else{
	     	    	  //change for CPM-1074
	     	    	  if(operationName == "reassign" && eDocRes.reassignError){
	     	    		var nameStr = "";
	     	    	    var nameArr = reassignPaxName.split("_");
	     	    	    for(i=0; i<nameArr.length;i++){
	     	    	    	nameStr = nameStr + " " +  nameArr[i];
	     	    	    }	  
	     	    		$('input[value="'+reassignPaxName+'"]').parent().find(".reassignErrorHolder").html('<div class="inlineReassignError">The eCredit you are attempting to reassign is not combinable with ['+nameStr+'] applied eCredit(s). Please view Terms and Conditions.</div>');

	     	      }else{
	     	    	 eDocUtils.init();
	     	    	 if(eDocRes.giftCertExist == true){
			    		  $(".fopTypes .eGift,.fopTypes #payGC").click();
			    	 }
	     	      }
	     	    	
	     	      }
			      }/*,
			      errors : function (error) {}*/
			   }).fail(function(jqXHR, textStatus, error){
					try{
						delta.utils.logger.ajaxError(jqXHR, textStatus, error);
						delta.utils.logger.logMessage("Request Failed: " + error, "error");
					}catch(err){
						if (window.console && window.console.error) {
							console.error('Error logging to delta.utils.logger:' + err);
						}
					}
				});
      }
};

	   /**
	    * Defining View register functions
	    */
$.views.registerTags({
	paxNameFormatter: function(data,content){
    var name = data;
    var nameStr = "";
    nameArr = name.split("_");
    for(i=0; i<nameArr.length;i++){
    nameStr = nameStr + " " +  nameArr[i];
    }
    return nameStr; // .trim(); // IE8 does not support trim
	}
});

$(function(){
	$(document).on("click",".searchEdoc",function() {
		checkoutOmnitureUtil.registerClick($(this));
		var paxName = $(this).siblings(".paxUnformattedName").prop("value");
		eDocUtils.performEDocVoucherOperation(paxName,"","","","newSearch");
	  });

	 $('#nextGenBooking').on('click', '.paymentInfoSectionHeader  .edocToggle:not(.inactive)', function(){
		var $eDocDetail =  $(this).parents('.paymentPaxRow').find('.paymentInfoDetailsWrapper'); // for iframe commented on 13/mar/2015
		 if(!$eDocDetail.hasClass("hide")){
			 $eDocDetail.addClass("hide");
			 $(this).html("Open");

		 }else{
			 $eDocDetail.removeClass("hide");
			 $(this).html("Close");
   }
		 });

	 $(document).on("click",".eGiftContinue",function() {
		 if(!eDocUtils.applyGiftBtnClicked){
			 eDocUtils.applyGiftBtnClicked = true;
		 var multiGiftRequestString = "";
		 var validDocNumber,validRedemptionCode = "";
		 $("#eGiftFOPSection").find("div.backEnderrorMsgWrapper").remove();
		 $("#eGiftFOPSection").find("input").removeClass("errorInput");
		 $(".eGiftSearchRow").each(function(index,value){
			 if($(this).find(".giftCardNo").val() != "" && $(this).find(".redemptionCode").val() != ""){
				 validDocNumber = /^[0-9]+$/.test($.trim($(this).find(".giftCardNo").val()));
				 validRedemptionCode = /([0-9])([a-zA-Z])/.test($.trim($(this).find(".redemptionCode").val()));
				 $(this).find(".giftCardNo").attr("value",$.trim($(this).find(".giftCardNo").val()));
				 $(this).find(".redemptionCode").attr("value",$.trim($(this).find(".redemptionCode").val()));
				 if(validDocNumber == true && validRedemptionCode == true){
				 multiGiftRequestString += $.trim($(this).find(".giftCardNo").val())+ "-" +$.trim($(this).find(".redemptionCode").val())+",";
			 }
			 }else if($(this).find(".giftCardNo").val() == "" && $(this).find(".redemptionCode").val() != ""){
				 $(this).find(".giftCardNo").attr("value","");
			 }else if($(this).find(".giftCardNo").val() != "" && $(this).find(".redemptionCode").val() == ""){
				 $(this).find(".redemptionCode").attr("value","");
			 }else{
				 $(this).find(".giftCardNo").attr("value","");
				 $(this).find(".redemptionCode").attr("value","");
			 }
			 /* Error handling for gift-card number and redemption code start */
			 $(this).find(".giftCardNo").prop("id","giftcard_number"+index);
			 $(this).find(".giftCardNo").prop("name","giftCard_number"+index);
			 $(this).find(".giftCardNo").siblings(".paymentLbl").prop("for","giftcard_number"+index);
			 $(this).find(".giftCardNo").siblings(".errorTooltip").remove();
			 $(this).find(".redemptionCode").prop("id","redemption_code"+index);
			 $(this).find(".redemptionCode").prop("name","redemption_code"+index);
			 $(this).find(".redemptionCode").siblings(".paymentLbl").prop("for","redemption_code"+index);
			 $(this).find(".redemptionCode").siblings(".errorTooltip").remove();
			 /* Error handling for gift-card number and redemption code end */

			/* $(this).find(".giftCardNo").rules("add",{
 		        	emptyField: true,
 		        	invalidGiftCardNumber:true
			 });
		 	 $(this).find(".redemptionCode").rules("add",{
			        	emptyField: true,
			        	invalidRedemptionCode:true
			 });*/
		 });

		 var giftRequest = multiGiftRequestString.slice(0,-1);
		 var eGiftRowRemove = $(this).parents("#eGiftFOPSection");
		 var eGiftSearchRow = $(this).parents(".eGiftRow");
		 /* dynamically adding rules for giftcard-no and redemption-code for defect #57178 */
		 /*$("input[name=giftCard_number]").rules("add", "emptyField");
		 $("input[name=redemption_code]").rules("add", "emptyField");
		 $("input[name=giftCard_number]").rules("add", "invalidGiftCardNumber");
		 $("input[name=redemption_code]").rules("add", "invalidRedemptionCode");*/
		/* $("#redemptionTextBox ").valid();*/

          if(multiGiftRequestString != ""){
		 $.ajax({
		      type : 'POST',
		      dataType : "json",
		      data : { "giftCardNo":giftRequest,"cacheKeySuffix" : cacheKeySuffix,"dueAmountFromUI":eDocUtils.eDocDataObj.remainingBal},
		      url : 'RetrieveEGiftJSONAction' ,// url for eDoc
		      headers : {
		         "cache-control" : "no-cache"
		      },
		      success : function (eGiftRes) {
		    	  if(undefined != eGiftRes.giftCertExist && eGiftRes.giftCertExist != null && eGiftRes.giftCertExist == true){
		    	  		msg.edocSelectedInd = "Y";
								msg.giftCardAppliedInd = true;
			    	  		$(eGiftRowRemove).html("");
		    	  		if($.isEmptyObject(eGiftRes.errorMap)){
		    	  			if(parseFloat(eDocUtils.totalResidualVoucherBalance) > 0){
		    	  				eGiftRes.openGiftSearch = false;
		    	  			 }
		    	  				eDocUtils.setData(eGiftRes,eGiftRowRemove);
		    	  			 if(eGiftRes.giftCertExist == true){
		    	  				  msg.fopRule.giftCard = "Selected";
					    		  $(".fopTypes .eGift,.fopTypes #payGC").click();
					    		  if(undefined != msg.loggedInInd && msg.loggedInInd == "Y"){
					    			  msg.fopRule.myWallet = "Enabled";
					    		  }else{
					    			  msg.fopRule.creditDebit = "Enabled";
					    		  }
					    		  fopRuleJSON = $.extend({}, msg.fopRule);
							      Payment.reloadFopRules(msg.fopRule);
							      $(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
					    	  	  $(".istructionLabel ecredit").append("<ul class ='travelVoucherAdvisory'><li>eCredits cannot be used with Gift Cards.</li></ul>");
					    	  }else if(eDocUtils.removeTravelVoucher){
					    		  $(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
					    		  $(".istructionLabel ecredit").append("<ul class ='travelVoucherAdvisory'><li>eCredits cannot be used with certificates.</li></ul>");
					    	  }else{
					    		  $(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
					    	  }
					    	  var enableGiftCard = (eDocUtils.eDocDataObj.giftCertExist && $("#paymentEdocHldr").find(".paymentInfoSection").length == 0 && msg.fopRule.giftCard == "Disabled" && !msg.companionCert && !eDocUtils.removeTravelVoucher && !(undefined != msg.payWithMilesInd && msg.payWithMilesInd == "Y")) ? true : false;
					    	  if(enableGiftCard){
				     				 msg.fopRule.giftCard = "Enabled";
				     				 $(".fopTypes .eGift").removeClass("labelTxtDisabled");
				     		  }
									// Amex checkout flow
									if(msg.amexExpCkoInd){
										$("#billingAddressContainer").hide();
										Payment.renderAmexExpCko();
									}
		    	  		}else{
			    	  			eGiftRes.openGiftSearch = true;
			    	  			eDocUtils.setData(eGiftRes,eGiftRowRemove);
		    	  			    eDocUtils.showErrorBasedOnErrorMap(eGiftRowRemove,eGiftRes.errorMap,true);
		    	  		}
		    	  	}else{
		    	  		if($.isEmptyObject(eGiftRes.errorMap)){
		    	  			$(".eGiftInlineWrongValError").show();
		    	  		}else{
		    	  			eDocUtils.showErrorBasedOnErrorMap(eGiftRowRemove,eGiftRes.errorMap,false);
		    	  		}
		    	  	}
			    	  eDocUtils.applyGiftBtnClicked = false;
		      }/*,
			      errors : function (error) {
			    	  eDocUtils.applyGiftBtnClicked = false;
			      }*/
		   }).fail(function(jqXHR, textStatus, error){
				try{
					delta.utils.logger.ajaxError(jqXHR, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
			});
		 }else{
				 eDocUtils.applyGiftBtnClicked = false;
			  }
	       }else{
	    	   return false;
	       }
		 $(".redemptionTextBox").valid();

		 // changes for #58451
		 if(Object.keys(Payment.validator.invalid).length > 0){
			 //$('[aria-invalid=true]:eq(0)').focus();
	    	$(".toolTipErrorMessageContainer").attr({
				"tabindex": "0",
				"role": "alert",
				"aria-live": "polite"
			});
		  //$(".toolTipErrorMessageContainer").focus();

		 //15-04-2016 #58642
		 //if(Payment.validator.errorList.length > 0){
			 $("#cartPayment .toolTipErrorMessageContainer").show().focus();
		 //}
		 }


	 });

     $(document).on("click",".removeButton",function(e) {
    	 e.preventDefault();
		 checkoutOmnitureUtil.registerClick($(this));
    	 if(eDocUtils.eDocDataObj.giftCardSelected){
    		 var paxName = eDocUtils.eDocDataObj.allPaxEodcArr[0].paxNameUnformatted;
    		 var docNum = ($(this).parents(".eCreditPaymentInfo").find(".docNumber").text()).split("#")[1];
    	 }else{
    		 var paxName = $(this).parents(".paymentInfoDetailsWrapper").siblings().find(".paxUnformattedName").prop("value");
    		 var docNum = ($(this).parents(".paymentInfoDetailsWrapper").find(".skyMilesNumber").text()).split("#")[1];
    	 }
		 eDocUtils.performEDocVoucherOperation(paxName,"",docNum,"","remove");
	 });

     $(document).on("change",".reassignDropdown",function(e) {
    	 var reassignPaxName = $(this).find("option:selected").prop("id");
    	 var paxName = $(this).parents(".paymentInfoDetailsWrapper").siblings().find(".paxUnformattedName").prop("value");
    	 var docNum = ($(this).parents(".paymentInfoDetailsWrapper").find(".skyMilesNumber").text()).split("#")[1];
		 eDocUtils.performEDocVoucherOperation(paxName,reassignPaxName,docNum,"","reassign");
	 });

     $(document).on("click",".eDocOrderArrow",function(e) {
    	 var paxName = $(this).parents(".paymentInfoDetailsWrapper").siblings().find(".paxUnformattedName").prop("value");
    	 var docNum = ($(this).parents(".paymentInfoDetailsWrapper").find(".skyMilesNumber").text()).split("#")[1];
    	 var orderNum = $(this).siblings(".eDocOrder").text();
		 eDocUtils.performEDocVoucherOperation(paxName,"",docNum,orderNum,"orderOfUse");
		 checkoutOmnitureUtil.registerClick($(this));
	 });

     $(document).on("click",".moreEGiftLink",function(e) {
    	 var noOfEgiftPresent = $("#eGiftFOPSection .eCreditPaymentInfo").length;
    	 var searchEgift = $("#eGiftNotSelectedSection .eGiftRow").length;
    	 var noOfMoreGiftReq = 3-(noOfEgiftPresent + searchEgift);
    	 if(noOfMoreGiftReq > 0){
    		 //change for CPM-773
    		 if(noOfMoreGiftReq==2){
    		 $("#eGiftNotSelectedSection").append('<div class="eGiftRow"> <div class="eGiftSearchRow"> <div class="paxInputWrapper glance_masked"> <label class="paymentLbl" for="giftcard_number1">GIFT CARD NUMBER</label> <input type="text" id="giftcard_number1" name="giftCard_number" class="redemptionTextBox giftCardNo" value=""> </div> <div class="paxInputWrapper"> <label class="paymentLbl" for="redemption_code1">REDEMPTION CODE</label> <input type="text" id="redemption_code1" name="redemption_code" class="redemptionTextBox redemptionCode" value=""> </div> <div class="paxInputWrapper4" style="display: none;"> <button id="eGift_continue" class="primary eGiftContinue" type="button">Apply <span class="nextGenHiddenField">payment</span></button> </div> <div class="addEgiftLink"> <a class="moreEGiftLink" href="javascript:void(0)" style="display: none;">Add More Gift Cards<span class="nextGenHiddenField">Add More eGift</span></a> </div> </div> </div>');
    		 }
    		 if(noOfMoreGiftReq==1){
    			 $("#eGiftNotSelectedSection").append('<div class="eGiftRow"> <div class="eGiftSearchRow"> <div class="paxInputWrapper glance_masked"> <label class="paymentLbl" for="giftcard_number2">GIFT CARD NUMBER</label> <input type="text" id="giftcard_number2" name="giftCard_number" class="redemptionTextBox giftCardNo" value=""> </div> <div class="paxInputWrapper"> <label class="paymentLbl" for="redemption_code2">REDEMPTION CODE</label> <input type="text" id="redemption_code2" name="redemption_code" class="redemptionTextBox redemptionCode" value=""> </div> <div class="paxInputWrapper4" style="display: none;"> <button id="eGift_continue" class="primary eGiftContinue" type="button">Apply <span class="nextGenHiddenField">payment</span></button> </div> <div class="addEgiftLink"> <a class="moreEGiftLink" href="javascript:void(0)" style="display: none;">Add More Gift Cards<span class="nextGenHiddenField">Add More eGift</span></a> </div> </div> </div>');
    		 }
    		

    		 $("#eGiftNotSelectedSection").find(".eGiftRow").last().find("input:eq(0)").focus();
    		 if(noOfMoreGiftReq == 1){
    		    $(this).hide();
				$(".useVucherLabel").text("");
    		 }else{
    			 $("#eGiftFOPSection").find(".moreEGiftLink").show();
    			 $("#eGiftFOPSection").find(".moreEGiftLink").not(":last").hide();
				 /* $(".useVucherLabel").text("Use up to 3 eCredits per passenger"); */
    		 }
    	 }

     });
     /* function for new edoc view terms popup */
     $(document).on("click", ".edocTC", function (e) {
             var urlToPost = "/edoc/displayEdocTnC.action";
             var locationHost = window.location.host;
     		 var localUrl = locationHost.split(":");
     		 if(localUrl[0]=="localhost"){
     			urlToPost = "http://dvl7.delta.com/edoc/displayEdocTnC.action";
     		 }
             var tktDesignator = ($(this).data("tktdesignator"));
             var edocNumber = ($(this).data("edocnum"));
             var postData = {
            		 "certificateNumber": edocNumber,
  					 "ticketDesignator": tktDesignator,
  					 "displayPopUp": 'Y'
         		};
             $("#edocTnCContent").html("");
             $.ajax({
 				url: urlToPost,
 				data: postData,
 				type: 'POST',
 				beforeSend: function() {
 					$.blockUI(blockUIOptions);
 				},
 				success: function (data) {
 					var dialogContent = $("#edocTnCContent").html(data);
 					//flightUtil.showDialogBox(dialogContent, 'auto', 400, 'center center', 'center center', '', 'fixed-dialog', 'ui-modal-dialog');
 				},
 				complete: function() {
					$.unblockUI();
	            }/*,
 				error: function (error) {
	            	$.unblockUI();
 				}*/
 			}).fail(function(jqXHR, textStatus, error){
				try{
					delta.utils.logger.ajaxError(jqXHR, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
				$.unblockUI();
			});

	});

     $(document).on("click", ".findCertNum", function (e) {
			e.preventDefault();
			DeltaUtils.openPopup('/components/help/apps/eCredits/certificate_number_popup.jsp','WhereCanIFindMyCertificate',480,700,'yes');
	});
});

/*!
	Colorbox v1.5.4 - 2014-03-07
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		// data sources
		html: false,
		photo: false,
		iframe: false,
		inline: false,

		// behavior and appearance
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		opacity: 0.9,
		preloading: true,
		className: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true,
		fastIframe: true,
		open: false,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		// accessbility
		returnFocus: true,
		trapFocus: true,

		// callbacks
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		rel: function() {
			return this.rel;
		},
		href: function() {
			// Using .attr() so that the href can also be used to provide a selector for inline content
			return $(this).attr('href');
		},
		title: function() {
			return this.title;
		}
	},


	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	function Settings(element, options) {
		if (options !== Object(options)) {
			options = {};
		}

		this.cache = {};
		this.el = element;

		this.value = function(key) {
			var dataAttr;

			if (this.cache[key] === undefined) {
				dataAttr = $(this.el).attr('data-cbox-'+key);

				if (dataAttr !== undefined) {
					this.cache[key] = dataAttr;
				} else if (options[key] !== undefined) {
					this.cache[key] = options[key];
				} else if (defaults[key] !== undefined) {
					this.cache[key] = defaults[key];
				}
			}

			return this.cache[key];
		};

		this.get = function(key) {
			var value = this.value(key);
			return $.isFunction(value) ? value.call(this.el, this) : value;
		};
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.get('photo') || settings.get('photoRegex').test(url);
	}

	function retinaUrl(settings, url) {
		return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
			e.stopPropagation();
			$box.focus();
		}
	}

	function setClass(str) {
		if (setClass.str !== str) {
			$box.add($overlay).removeClass(setClass.str).addClass(str);
			setClass.str = str;
		}
	}

	function getRelated() {
		index = 0;
		
		if (rel && rel !== 'nofollow') {
			$related = $('.' + boxElement).filter(function () {
				var options = $.data(this, colorbox);
				var settings = new Settings(this, options);
				return (settings.get('rel') === rel);
			});
			index = $related.index(settings.el);
			
			// Check direct calls to Colorbox.
			if (index === -1) {
				$related = $related.add(settings.el);
				index = $related.length - 1;
			}
		} else {
			$related = $(settings.el);
		}
	}

	function trigger(event) {
		// for external use
		$(document).trigger(event);
		// for internal use
		$events.triggerHandler(event);
	}

	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.get('loop') || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
			}
		}

		function start() {
			$slideshow
				.html(settings.get('slideshowStop'))
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();
			
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.get('slideshowStart'))
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.get('slideshow')) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.get('slideshow') && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.get('slideshowAuto')) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(element) {
		var options;

		if (!closing) {

			options = $(element).data('colorbox');

			settings = new Settings(element, options);

			rel = settings.get('rel');
			
			getRelated();

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

				setClass(settings.get('className'));
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block'});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				settings.w = setSize(settings.get('initialWidth'), 'x');
				settings.h = setSize(settings.get('initialHeight'), 'y');
				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open);
				settings.get('onOpen');

				$groupControls.add($title).hide();

				$box.focus();
				
				if (settings.get('trapFocus')) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);
						
						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.get('returnFocus')) {
					$events.one(event_closed, function () {
						$(settings.el).focus();
					});
				}
			}

			$overlay.css({
				opacity: parseFloat(settings.get('opacity')),
				cursor: settings.get('overlayClose') ? "pointer" : "auto",
				visibility: 'visible'
			}).show();
			
			if (settings.get('closeButton')) {
				$close.html(settings.get('close')).appendTo($content);
			} else {
				$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
			}

			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.get('overlayClose')) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.get('escKey') && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var settings;
		var $obj = this;

		options = options || {};

		if ($.isFunction($obj)) { // assume a call to $.colorbox
			$obj = $('<a/>');
			options.open = true;
		} else if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}


		if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}
		
		appendHTML();

		if (addBindings()) {

			if (callback) {
				options.onComplete = callback;
			}

			$obj.each(function () {
				var old = $.data(this, colorbox) || {};
				$.data(this, colorbox, $.extend(old, options));
			}).addClass(boxElement);

			settings = new Settings($obj[0], options);
			
			if (settings.get('open')) {
				launch($obj[0]);
			}
		}
		
		return $obj;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.get('fixed')) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.get('right') !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
		} else if (settings.get('left') !== false) {
			left += setSize(settings.get('left'), 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.get('bottom') !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
		} else if (settings.get('top') !== false) {
			top += setSize(settings.get('top'), 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.get('reposition')) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;
		
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}
			
			publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

		$loaded.remove();

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		setClass(settings.get('className'));

		callback = function () {
			var total = $related.length,
				iframe,
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete);
				settings.get('onComplete');
			};

			
			$title.html(settings.get('title')).show();
			$loaded.show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.get('current') === "string") {
					$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
				$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));
				
				slideshow();
				
				// Preloads images within a rel group
				if (settings.get('preloading')) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var img,
							i = $related[this],
							settings = new Settings(i, $.data(i, colorbox)),
							src = settings.get('href');

						if (src && isImage(settings, src)) {
							src = retinaUrl(settings, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.get('iframe')) {
				iframe = document.createElement('iframe');
				
				if ('frameBorder' in iframe) {
					iframe.frameBorder = 0;
				}
				
				if ('allowTransparency' in iframe) {
					iframe.allowTransparency = "true";
				}

				if (!settings.get('scrolling')) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.get('href'),
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true // allow HTML5 video to go fullscreen
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.get('fastIframe')) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.get('transition') === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.get('transition') === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		trigger(event_purge);
		trigger(event_load);
		settings.get('onLoad');
		
		settings.h = settings.get('height') ?
				setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
				settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');
		
		settings.w = settings.get('width') ?
				setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
				settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.get('maxWidth')) {
			settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.get('maxHeight')) {
			settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.get('href');
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.get('inline')) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $tag(div).hide().insertBefore($(href)[0]);

			$events.one(event_purge, function () {
				$inline.replaceWith($loaded.children());
			});

			prep($(href));
		} else if (settings.get('iframe')) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.get('html')) {
			prep(settings.get('html'));
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = document.createElement('img');

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				prep($tag(div, 'Error').html(settings.get('imgError')));
			})
			.one('load', function () {
				var percent;

				if (request !== requests) {
					return;
				}

				$.each(['alt', 'longdesc', 'aria-describedby'], function(i,val){
					var attr = $(settings.el).attr(val) || $(settings.el).attr('data-'+val);
					if (attr) {
						photo.setAttribute(val, attr);
					}
				});

				if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
					photo.height = photo.height / window.devicePixelRatio;
					photo.width = photo.width / window.devicePixelRatio;
				}

				if (settings.get('scalePhotos')) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.get('loop') || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}

				photo.style.width = photo.width + 'px';
				photo.style.height = photo.height + 'px';

				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.get('data'), function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.get('loop') || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup);
			settings.get('onCleanup');
			
			$window.unbind('.' + prefix);
			
			$overlay.fadeTo(settings.get('fadeOut') || 0, 0);
			
			$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
			
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed);
					settings.get('onClosed');
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$.colorbox.close();
		$box.stop().remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(settings.el);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));

var seatPrice = 0.00;
var msg = "";
var currCode = "";
var currencySymbol = "";
var coPayPerPax = "";
var grandTotal = "";
var finalPrice = "";
var loggedInInd = "";
var totalInsPrice = "";
var addedInsPrice = "0.00";
var totalPriceDue = "";
var totalSeatVal = "0.00";
var totalFinalAmountDue = "0.00";
var tripExtraTotalAmount = "0.00";
var newPaymentAction = "";
var editFOPAction = "";
var addEditAddrAction = "";
var addEmailOpr = "";
var selFlex="";
var seatJSON = {};
var greaterThanBMLamt = false;
var pageName = "payment";
var tripExtraPrice = {
	curSymbol : "$",
	currCode : "USD",
	integerValue : "0",
	decimalValue : "00"
};
var insurancePurchase = "";
var fopRuleJSON = {};
var isFopRuleModified = false;
//For RTBT
var currencyConvertStatus = "N";
var isEcreditDisableFop = false;
//Changes added for Acculynk : Start
var acculynkAlipayCard = {};
var stateListJSONComplete = false;
var statesLoaded = false;
var addAddressCheck = false;
var amexExpCKOSelectedForCompletePurchase = "N";
//Changes added for Acculynk : End
/*
 * For communicating with eDoc iFrame
 */
window.onmessage = function (e) {
	if(e.data == 'MessageFromRedeemCertificateWindow') {
	   $('#EdocModalHolder').dialog("close");
	}
};
/*
 * Ends Here
 */
var Payment = {
   data : {},
   selectedFop : "",
   selectedCard: "",
   typedCard: "",
   chosenFop: "",
   countryOfDeparture : "",
   manuallySelectedCard : "AX",
   setCardFirstDigit : "",
   cardAlreadySelected : false,//change for CPM-882
   fopConstants: {
		viewMore: "ViewMore",
		notApplicable: "NA"
   },
   insuranceText : "",
   isPaypalPrimary : true,
   isPaypalCreditPrimary : true,
   isAlipayPrimary : true,
   //For RTBT
   isOnlineBankingPrimary : true,
   //Changes added for Acculynk : Start
   acculynkCardNumber : "",
   acculynkLastCardDigit : "",
   acculynkCheckBinStatus : "",
   acculynkSavedFopId : "",
   acculynkPinpadFlag: "",
   isAcculynkCheckBinCalled : false,
   isAcculynkCombinedCall : false,
   acculynkInvalidPinErrorCount : 0,
   acculynkInvalidThirdTime : "N",
   acculynkCardName : "",
   acculynkEligibleFops : ["payACCU","payUN"],// CPM-1137: Disable pin check for VI/MC cards 
   acculynkEligibleCards : ["ATM","UP","UPB"],// CPM-1137: Disable pin check for VI/MC cards
   doubleMilesPromotionFops : ["payWL","payCC","payGC","payAP","payUN"],
   amexExpCheckoutEligibleFops : ["payWL","payCC","payGC"],
   validator : null,
   countryCode : "US",
   countryCodeResponse : {},
   addFopToViewMore:[],
   selectedCardForAEC : "",
   loggedInAddress : {}, // Fix for defect 61841
   //Changes added for Acculynk : End
   setData : function (paymentRes) {
     //  "use strict";
	  mealServiceInd = paymentRes.mealServiceInd;
      this.data = paymentRes;
      $(this).trigger("success");
   },
   upgradeBannerBtnClicked : function (id, ref){
		if(id == "ecoComfortBoxBtn"){
			ref.addClass("active");
			ref.html("&nbsp;ADDED");
			ref.siblings("button").show();
		}else{
			ref.closest(".banner").find("input[type=radio]:checked").prop("checked",false);
			ref.siblings("button").removeClass("active");
			ref.siblings("button").html("Upgrade");
			ref.hide();
		}

	},
   getData : function () {
     //  "use strict";
      var res = this.data;
      var tripExtraErrorInd = "";
      res.reviewFlight = true;
      var grandTotal = "";
      var paxEdocAppliedList = [];
      tradeMarkSymbol = res.tradeMarkSymbol;
      virginAtlOprFlt = res.virginAtlOprFlt;
      window.onbeforeunload = null;
      if (res.amexStmntCredit != undefined) {
         res.amexStmntCredit = Number(res.amexStmntCredit);
      }
      if (res.displayCobrandInd == "Y") {
         displayCobrandInd = res.displayCobrandInd;
      }

      if (res.pwmNetAmount && !isNaN(res.pwmNetAmount)) {
         res.pwmNetAmount = Number(res.pwmNetAmount);
      }
      if(res.pwmOption){
      var pwmArray = res.pwmOption.split('_');
         res.pwmSelectedAmountValue = parseFloat(pwmArray[0]).toFixed(flightUtil.currentPriceDecimalLength);
         res.pwmSelectedMilesValue = parseInt(pwmArray[1]);
         res.payWithMilesFinalMiles = res.pwmSelectedMilesValue*res.paxCount;
      }

      if (undefined == res.hyperLinkHostName) {
         res.hyperLinkHostName = "";
      }
      // For 74258
      try{
			res.secDisplayInfo=JSON.parse(res.secDisplayInfo);
		}catch(e){
			//if caught, res.secDisplayInfo is already parsed to a JSON or it is not present
		}
      msg = flightUtil.populateTripSummary(res, "reviewPurchse");

      SeatUtils.ecAvailable = msg.secDisplayInfo.ItineraryDO.ecAvailable;

      var countryOfDepartureCode =  msg.secDisplayInfo.ItineraryDO.slices[0].sliceOrigin.nearByCities.country.code;
      var countryRegionCode =  msg.secDisplayInfo.ItineraryDO.slices[0].sliceOrigin.nearByCities.country.region.code;
      /*if(msg.isUSOrCanadaFlight){
    	  $.each(msg.countries,function(index,country){
    		  if(Payment.countryOfDepartureCode == country.countryCode){
    			  Payment.countryOfDeparture = country.countryName;
    			  return false;
    		  }
    	  });*/
      if(countryOfDepartureCode == "US") {
    	  if(countryRegionCode == "PR"){
    		  Payment.countryOfDeparture = "Puerto Rico";
    	  }else if(countryRegionCode == "VI"){
    		  Payment.countryOfDeparture = "Virgin Islands";
      }else{
            Payment.countryOfDeparture = "United States";
    	  }
      }else if(countryOfDepartureCode == "CA"){
    	  Payment.countryOfDeparture = "Canada";
      }else{
    	  Payment.countryOfDeparture = countryRegionCode;
      }

      if( msg.payWithMilesInd == "Y"){
    	//CPM-900 changes
          /*msg.secDisplayInfo.ItineraryDO.grandTotal = (parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal) -
                                        parseFloat(msg.pwmSelectedAmountValue*msg.paxCount)).toFixed(flightUtil.currentPriceDecimalLength);*/
          msg.flightSectionTotal = (parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal) -
                  parseFloat(msg.pwmSelectedAmountValue*msg.paxCount)).toFixed(flightUtil.currentPriceDecimalLength);;
      }
      loggedInInd = msg.loggedInInd;

      if (msg.upgradeWithMilesInd != undefined && msg.upgradeWithMilesInd == "Y") {
         msg.totalFare = msg.secDisplayInfo.ItineraryDO.totalFare[msg.custSelFareIndex];
      } else {
         msg.totalFare = msg.secDisplayInfo.ItineraryDO.totalFare[msg.selFareIndex];
      }
      if (msg.totalInsurancePrice != null && msg.insurancePricePerPax != null) {
         msg.insurancePricePerPax = msg.insurancePricePerPax.toFixed(flightUtil.currentPriceDecimalLength);
         msg.totalInsurancePrice = msg.totalInsurancePrice.toFixed(flightUtil.currentPriceDecimalLength);
         totalInsPrice = msg.totalInsurancePrice;
      }

      if (msg.pricingDiscountMiceInd) {

         msg.minPricePerPax = msg.secDisplayInfo.ItineraryDO.totalFare[msg.selFareIndex].total;
      }
      eDocUtils.applyRules();

      if (msg.awardTcktMiles != null && msg.awardTcktMiles == "Y") {
         if (msg.shopType == "Award") {
            //msg.totalFare.subTotal = parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal);
            //grandTotal = msg.totalFare.subTotal;
            //msg.totalFare.grandTotal = parseFloat(grandTotal).toFixed(flightUtil.currentPriceDecimalLength);
            finalPrice = msg.totalFare.total * msg.paxCount;

         } else {
            msg.totalFare.subTotal = flightUtil.formatNumber(flightUtil.fetchTotalMiles(msg.totalFare));
            grandTotal = flightUtil.fetchTotalMiles(msg.totalFare) * msg.paxCount;
            msg.totalFare.grandTotal = flightUtil.formatNumber(grandTotal);
            finalPrice = msg.secDisplayInfo.ItineraryDO.grandTaxImposed;

         }
      } else {
         if (msg.companionCert) {
            msg.totalFare.subTotal = parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal);
            grandTotal = msg.totalFare.subTotal;
            msg.totalFare.grandTotal = parseFloat(grandTotal).toFixed(flightUtil.currentPriceDecimalLength);
            finalPrice = grandTotal;
         } else if (msg.paxEdocAppliedMap != undefined && !$.isEmptyObject(msg.paxEdocAppliedMap)) {
           // msg.totalFare.subTotal = parseFloat(eDocDueTotalAmount).toFixed(flightUtil.currentPriceDecimalLength);
           // msg.totalFare.grandTotal = msg.totalFare.subTotal;
           // finalPrice = msg.totalFare.grandTotal;
        	 msg.totalFare.subTotal = parseFloat(msg.totalFare.total).toFixed(flightUtil.currentPriceDecimalLength);
             grandTotal = (msg.totalFare.subTotal * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);
             msg.totalFare.grandTotal = parseFloat(grandTotal).toFixed(flightUtil.currentPriceDecimalLength);
             finalPrice = grandTotal;
         }
         else {
            msg.totalFare.subTotal = parseFloat(msg.totalFare.total).toFixed(flightUtil.currentPriceDecimalLength);
            grandTotal = (msg.totalFare.subTotal * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);
            if( msg.payWithMilesInd == "Y"){
               grandTotal = parseFloat(grandTotal) - parseFloat(msg.pwmSelectedAmountValue*msg.paxCount);
            }
            msg.totalFare.grandTotal = parseFloat(grandTotal).toFixed(flightUtil.currentPriceDecimalLength);
            finalPrice = grandTotal;
         }
      }
      // formatting currency symbol from ASCI code to respective symbol
      msg.currencySymbol = (msg.currencySymbol != null || msg.currencySymbol != "") ? $("<span/>").html(msg.currencySymbol).html() : "";
      currCode = msg.currCode;
      currencySymbol = msg.currencySymbol;
      if(msg.MCflag){
    	  finalPrice = msg.totalCopayAllPassenger;
      }

      if (msg.displayNameSBList != null) {
         var displayPaxDtls = [],
         totalFare = msg.totalFare;
         msg.totalMileageActual = 0;
         msg.totalChargesActual = 0.00;
         msg.totalSeatAmountActual = 0.00;
         var hasECSeat = false;
         if (msg.paxSeatInfoMap != null && !$.isEmptyObject(msg.paxSeatInfoMap)) {
            /* checking if EC seat available for at least 1 passenger */
            $.each(msg.displayNameSBList, function (index, name) {
               name = $.trim(name);
               hasECSeat = (!hasECSeat) ? (msg.paxSeatInfoMap[name].econmySeatCount > 0) : true;
               if (hasECSeat)
                  return false;

            });
         }
         $.each(msg.displayNameSBList, function (index, name) {
            name = $.trim(name);
            var obj = {
               coPayPerPax : msg.totalFare.total,
               milesPerPaxVal : msg.milesPerPax,
               subTotalPriceVal : (msg.shopType == "Award" && msg.priceType == "MC") ? (parseFloat(totalFare.taxesFees) + parseFloat(msg.totalFare.subTotal) + parseFloat(msg.taxDetails[msg.selFareIndex].baseFare)) : parseFloat(totalFare.taxesFees) + parseFloat(msg.taxDetails[msg.selFareIndex].baseFare),
               //subTotalPriceVal : (msg.shopType == "Award" && msg.priceType == "MC") ? (parseFloat(totalFare.taxesFees) + parseFloat(msg.totalFare.subTotal) + parseFloat(msg.taxDetails[msg.selFareIndex].baseFare)) : parseFloat(totalFare.taxesFees),
               displayname : name, //.toLowerCase(),
               subTotal : msg.totalFare.subTotal,
               total : parseFloat(msg.totalFare.total).toFixed(flightUtil.currentPriceDecimalLength),
               currCode : msg.currCode,
               baseFareNonZero : (msg.taxDetails[msg.selFareIndex].baseFare > 0) ? true : false,
               currencySymbol : msg.currencySymbol,
               baseFare : msg.taxDetails[(msg.upgradeWithMilesInd == "Y") ? msg.custSelFareIndex : msg.selFareIndex].baseFare,
               awardTcktMiles : msg.awardTcktMiles,
               totalMileageActual : parseFloat(flightUtil.fetchTotalMiles(totalFare)),
               totalMileage : flightUtil.formatCostMiles(flightUtil.fetchTotalMiles(totalFare)),
               taxesFeesActual : parseFloat(totalFare.taxesFees),
               taxesFees : flightUtil.formatCostAmount(parseFloat(totalFare.taxesFees), msg),
               showMilesPurchased : (index == (msg.displayNameSBList.length - 1) && msg.buyMilesPrdt != null) ? true : null
            };
            /* For AMEX companion Certificate*/
            if (msg.companionCert) {
               if (index == 0) {
                  obj.PricePerPax = msg.secDisplayInfo.ItineraryDO.pricePPassenger;
                  obj.taxPerPax = msg.secDisplayInfo.ItineraryDO.taxImposed;
                  obj.total = parseFloat(msg.secDisplayInfo.ItineraryDO.taxImposed) + parseFloat(msg.secDisplayInfo.ItineraryDO.pricePPassenger);

               } else {
                  obj.PricePerPax = msg.secDisplayInfo.ItineraryDO.companionPrice;
                  obj.taxPerPax = msg.secDisplayInfo.ItineraryDO.companionTax;
                  obj.total = parseFloat(msg.secDisplayInfo.ItineraryDO.companionPrice) + parseFloat(msg.secDisplayInfo.ItineraryDO.companionTax);
               }
            }
            if (obj.showMilesPurchased) {
               obj.purchasedMilesAmountActual = parseFloat(buyMilesProduct.totalBasePrice);
               obj.purchasedMilesAmount = flightUtil.formatCostAmount(obj.purchasedMilesAmountActual, msg);
               obj.purchasedMilesTaxesActual = parseFloat(buyMilesProduct.taxAmount);
               obj.purchasedMilesTaxes = flightUtil.formatCostAmount(obj.purchasedMilesTaxesActual, msg);
               obj.purchasedMilesTotalActual = obj.purchasedMilesTaxesActual + obj.purchasedMilesAmountActual;
               obj.purchasedMilesTotal = flightUtil.formatCostAmount(obj.purchasedMilesTotalActual, msg);
            }
            if (msg.paxSeatInfoMap != null && (name in msg.paxSeatInfoMap)) {
               obj.hasECSeat = hasECSeat;
               obj.ecTotalPriceActual = parseFloat(msg.paxSeatInfoMap[name].totalAmount);
               seatPrice = seatPrice + obj.ecTotalPriceActual;
               obj.ecTotalPrice = flightUtil.formatCostAmount(obj.ecTotalPriceActual, msg);
               obj.ecTotalTaxActual = parseFloat(msg.paxSeatInfoMap[name].taxAmount);
               obj.ecTotalTax = flightUtil.formatCostAmount(obj.ecTotalTaxActual, msg);
               obj.ecPriceAmountActual = parseFloat(msg.paxSeatInfoMap[name].priceAmount);
               obj.ecPriceAmount = flightUtil.formatCostAmount(obj.ecPriceAmountActual, msg);
               obj.econmySeatCount = msg.paxSeatInfoMap[name].econmySeatCount;
               if ("payWithMilesInd" in msg && msg.payWithMilesInd == "Y") {
                  obj.seatTotal = ((msg.pwmNetAmount) ? msg.pwmNetAmount : 0) + parseFloat(obj.ecTotalPriceActual);
               } else if (msg.shopType == "Award") {
                  if (msg.priceType == "MC") {
                     obj.seatTotal = parseFloat(obj.taxesFeesActual) + parseFloat(obj.coPayPerPax) + parseFloat(obj.ecTotalPriceActual) + parseFloat(obj.baseFare);
                  } else {
                     obj.seatTotal = parseFloat(obj.total) + parseFloat(obj.ecTotalPriceActual);
                  }

               } else {
                  obj.seatTotal = parseFloat(obj.total) + parseFloat(obj.ecTotalPriceActual);
               }
               if (msg.paxSeatInfoMap[name].productCategory != null && msg.paxSeatInfoMap[name].productCategory != "") {
                  obj.productCategory = msg.paxSeatInfoMap[name].productCategory;
               } else {
                  obj.productCategory = "Seats";
               }
               if (msg.paxSeatInfoMap[name].pricePerSeatCategory != null && msg.paxSeatInfoMap[name].pricePerSeatCategory != "") {
                  obj.pricePerSeatCategory = msg.paxSeatInfoMap[name].pricePerSeatCategory;
               } else {
                  obj.pricePerSeatCategory = "0.00";
               }
            } else if (hasECSeat) {
               obj.paxSeatInd = "N";
            }
            if (msg.upgradeWithMilesInd) {
               obj.upgradeFareInMiles = Number(msg.upgradeFareInMiles);
               obj.upgradeWithMilesInd = msg.upgradeWithMilesInd;
            }
            obj.totalfarePerPax = Number(obj.subTotal);
            if ("payWithMilesInd" in msg && msg.payWithMilesInd == "Y") {
               obj.payWithMilesAmount = (msg.pwmNetAmount) ? msg.pwmNetAmount : 0;
               //obj.payWithMilesValue = (msg.pwmAmountInMiles)?msg.pwmAmountInMiles:0;
               //obj.netTotalPerPax = parseFloat(obj.totalfarePerPax) - parseFloat(obj.payWithMilesAmount);
               var pwmArray = msg.pwmOption.split("_");
               obj.equivallentDollar = parseFloat(pwmArray[0]);
               obj.milesUsed = pwmArray[1];
            }
            displayPaxDtls.push(obj);

            /*** calculating cost details total section ***/
            msg.totalMileageActual += parseInt(obj.totalMileageActual);
            msg.totalChargesActual += (obj.taxesFeesActual +
               (obj.showMilesPurchased != null ? (obj.purchasedMilesTaxesActual + obj.purchasedMilesAmountActual) : 0.00) +
               (obj.hasECSeat != null ? obj.ecTotalPriceActual : 0.00));
            msg.totalSeatAmountActual += (obj.hasECSeat != null ? obj.ecTotalPriceActual : 0.00);

         });
         msg.totalMileageActual = flightUtil.formatNumber(msg.totalMileageActual);
         msg.totalMileageCost = flightUtil.formatCostMiles(msg.totalMileageActual);
         msg.totalChargesAmnt = flightUtil.formatCostAmount(msg.totalChargesActual, msg);
      }
      if (msg.upgradeWithMilesInd) {
         msg.totalUpgradeFareInMiles = Number(msg.upgradeFareInMiles) * msg.paxCount;
      }
      msg.displayPaxDtls = displayPaxDtls;
      /*if(msg.edocumentDetailList && msg.edocumentDetailList.length>0){
      $.each(msg.edocumentDetailList,function(index,element){
      element.nameOnpax = paxEdocAppliedList[index].name;
      });
      }*/

      if (msg.paxEdocSelectedMap != undefined || msg.paxEdocSelectedMap != null) {
         $.each(msg.paxEdocSelectedMap, function (eDocPaxName, edocNumber) {
            $.each(msg.edocumentDetailList, function (i, document) {
               $.each(edocNumber, function (index, docNbr) {
                  if (docNbr == document.documentInfo.documentNumber) {
                     document.paxNameOnTop = eDocPaxName;
                     return false;
                  }
               });
            });
         });
      }
      if (msg.shopType == "Award") {
         msg.equliMiles = flightUtil.formatNumber(msg.totalFare.equivalentAwardsValue.totalMiles);
         msg.equliCashInMiles = flightUtil.formatNumber(msg.totalFare.equivalentAwardsValue.cashValueInMiles);
         msg.coPayPerPaxForSummary = msg.totalFare.total;
      }
      msg.headFlightCount = (msg.secDisplayInfo.ItineraryDO.slices[0].flights).length;

      if (typeof msg.edocumentDetailList != 'undefined') {
         $.each(msg.edocumentDetailList, function (index, edocdata) {
            if (index == 0) {
               edocdata.isUniqueName = true;
            } else {
               $.each(msg.edocumentDetailList, function (i, docdata) {
                  if ((edocdata.paxNameOnTop).toLowerCase() == (docdata.nameOnDocument).toLowerCase()) {
                     edocdata.isUniqueName = false;
                     return false;
                  } else {
                     edocdata.isUniqueName = true;
                  }
               });
            }
         });
      }
      if (msg.companionMsgs != null && msg.companionMsgs != undefined) {
         var companionMsgsStr = msg.companionMsgs.join("");
         var companionMsgsList = companionMsgsStr.split("&acirc;\u0080&cent;");
         msg.companionMsgsList = companionMsgsList;
      }
      $.each(msg.secDisplayInfo.ItineraryDO.slices, function (index, obj) {
          obj.nonStop = false;
          if (obj.operatedByCarrier.length < 2) {
             obj.nonStop = true;
          }
       });
      if (msg.shopType == "Award") {
          msg.skyMileNumber = CustomerInfo.custData.smNumber;
      }
      if (msg.displayCobrandInd != "Y" && msg.skyPaymentList != undefined && msg.skyPaymentList != null && msg.skyPaymentList.length) {
          $.each(msg.skyPaymentList, function (i, card) {
             smCardList.push({
                optionValue : card.type,
                optionLabel : card.cardDesc
             });
             card = flightUtil.pushCardImage(card);
          });
       } else if (msg.displayCobrandInd != "Y") {
          msg.skyPaymentList = null;
       }
       if (msg.creditPaymentList != undefined && msg.creditPaymentList != null && msg.creditPaymentList.length) {
          $.each(msg.creditPaymentList, function (i, card) {
             creditCardList.push({
                optionValue : card.type,
                optionLabel : card.cardDesc
             });
             card = flightUtil.pushCardImage(card);
             //Changes added for Acculynk : Start
             if(card.type === "AP"){
            	 acculynkAlipayCard = card;
             }
             //Changes added for Acculynk : End
             if (msg.displayCobrandInd == "Y" && msg.cobrandCardList != undefined && msg.cobrandCardList != null && msg.cobrandCardList.length) {
                if ($.inArray(card.type, msg.cobrandCardList) != -1) {
                   smCardList.push({
                      optionValue : card.type,
                      optionLabel : card.cardDesc
                   });
                }
             }
          });
       } else {
          msg.creditPaymentList = null;
       }
       if (smCardList != undefined && smCardList.length == 0 && msg.cobrandCardList != undefined) {
          $.each(msg.cobrandCardList, function (i, card) {
             var cardDesc = "";
             switch (card) {
             case "VI":
                cardDesc = "VISA";
                break;
             case "DS":
                cardDesc = "Discover Network";
                break;
             case "JC":
                cardDesc = "Japan Credit Bureau";
                break;
             case "AX":
                cardDesc = "American Express";
                break;
             default:
                break;
             }
             smCardList.push({
                optionValue : card,
                optionLabel : cardDesc
             });
          });
       }
       if (msg.debitPaymentList != undefined && msg.debitPaymentList != null && msg.debitPaymentList.length) {
          $.each(msg.debitPaymentList, function (i, card) {
             debitCardList.push({
                optionValue : card.type,
                optionLabel : card.cardDesc
             });
             card = flightUtil.pushCardImage(card);
          });
       } else {
          msg.debitPaymentList = null;
       }
       if (msg.billLaterPayementList == undefined || $.isEmptyObject(msg.billLaterPayementList)) {
          msg.billLaterPayementList = null;
       }
       if (msg.payPalPaymentList == undefined || $.isEmptyObject(msg.payPalPaymentList)) {
          msg.payPalPaymentList = null;
		}
		// Changes added for Acculynk : Start
       if( msg.accuDebitPaymentList !== null && msg.accuDebitPaymentList !== undefined && msg.accuDebitPaymentList.length ){
    	   $.each(msg.accuDebitPaymentList, function(i, card){
    		   accuDebitCardList.push({
    			   optionValue : card.type,
    			   optionLabel : card.cardDesc
    		   });

    		   card = flightUtil.pushCardImage(card);
    		   if(card.type === "ATM" && msg.fopRule.acculynk !== Payment.fopConstants.notApplicable){
    			   if(!$.isEmptyObject(acculynkAlipayCard)){
    			   msg.creditPaymentList.pop();
    			   }
    			   msg.creditPaymentList.push(card);
    			   if(!$.isEmptyObject(acculynkAlipayCard)){
    			   msg.creditPaymentList.push(acculynkAlipayCard);
    		   }
    		   }
    	   });
       }else{
    	   msg.accuDebitPaymentList = null;
       }
		if( msg.unionpayPaymentList !== null && msg.unionpayPaymentList !== undefined && msg.unionpayPaymentList.length ){
    	   $.each(msg.unionpayPaymentList, function(i, card){
    		   unionPayCardList.push({
    			   optionValue : card.type,
    			   optionLabel : card.cardDesc
    		   });
    		});
    	   /* Fix for unionPay card chiclet appearing for Gift Card tab*/
			if(msg.fopRule.unionPay !== Payment.fopConstants.notApplicable && msg.fopRule.unionPay !== "Disabled"){
				unionpayPaymentType = {
				   type : "UP",
				   cardDesc : "UnionPay"
				};
			unionpayPaymentType = flightUtil.pushCardImage(unionpayPaymentType);
			msg.creditPaymentList.push(unionpayPaymentType);
			}
       }else{
    	   msg.unionpayPaymentList = null;
       }
       // Changes added for Acculynk : End
       //For RTBT

        if (msg.rtbtBankProviderMap !== null && msg.rtbtBankProviderMap !== undefined && !$.isEmptyObject(msg.rtbtBankProviderMap)) {
    	   msg.rtbtDetailList = [];
    	   $.each(msg.rtbtBankProviderMap, function(keyIndex, value){
    		   var rtbtObj = {}, i;
    		   rtbtObj.countryCode = value[0].countryCode;
               rtbtObj.countryName = value[0].country;
               rtbtObj.currency = value[0].currency;
               rtbtObj.providerList = [];

               for(i=0; i<value.length; i++){
				   var providerObj = {};

				   providerObj.providerId = value[i].paymentProductID;
            	   providerObj.providerName = value[i].product;
            	   rtbtObj.providerList.push(providerObj);
               }
               msg.rtbtDetailList.push(rtbtObj);

    	   });
       }
      return msg;
   },
   render : function () {

     //  "use strict";
      var msg = this.getData();

      //CPM-900 changes Start
      if( msg.payWithMilesInd == "Y"){
    	  msg.payWithMilesFinalMiles = msg.pwmSelectedMilesValue * msg.paxCount;
    	  msg.payWithMilesDiscountValue = (parseFloat(msg.pwmSelectedAmountValue * msg.paxCount)).toFixed(flightUtil.currentPriceDecimalLength);
      }//CPM-900 changes End
      
	  //BEGIN - Changes for Defect#62581/JIRA CPM-529
		var decimalLength;
		if(msg.secDisplayInfo.ItineraryDO){
			for(eachObj in msg.secDisplayInfo.ItineraryDO.totalFare){
				if(msg.secDisplayInfo.ItineraryDO.totalFare[eachObj].selectedFare){
					decimalLength=msg.secDisplayInfo.ItineraryDO.totalFare[eachObj].numOfDecimalsInBaseFare;
				}
			}
			flightUtil.currentPriceDecimalLength=decimalLength;
			if(decimalLength){
				if(msg.secDisplayInfo.ItineraryDO.grandTaxImposed) msg.secDisplayInfo.ItineraryDO.grandTaxImposed=parseFloat(msg.secDisplayInfo.ItineraryDO.grandTaxImposed).toFixed(decimalLength);
				if(msg.secDisplayInfo.ItineraryDO.grandTotal) msg.secDisplayInfo.ItineraryDO.grandTotal=parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal).toFixed(decimalLength);
				if(msg.secDisplayInfo.ItineraryDO.pricePPassenger) msg.secDisplayInfo.ItineraryDO.pricePPassenger=parseFloat(msg.secDisplayInfo.ItineraryDO.pricePPassenger).toFixed(decimalLength);
				if(msg.secDisplayInfo.ItineraryDO.subTotal) msg.secDisplayInfo.ItineraryDO.subTotal=parseFloat(msg.secDisplayInfo.ItineraryDO.subTotal).toFixed(decimalLength);
				if(msg.secDisplayInfo.ItineraryDO.taxImposed) msg.secDisplayInfo.ItineraryDO.taxImposed=parseFloat(msg.secDisplayInfo.ItineraryDO.taxImposed).toFixed(decimalLength);
				if(msg.totalFare.grandTotal) msg.totalFare.grandTotal=parseFloat(msg.totalFare.grandTotal).toFixed(decimalLength);
				if(msg.totalFare.subTotal) msg.totalFare.subTotal=parseFloat(msg.totalFare.subTotal).toFixed(decimalLength);
				if(msg.flightSectionTotal) msg.flightSectionTotal=parseFloat(msg.flightSectionTotal).toFixed(decimalLength);
			}
		}
	//END - Changes for Defect#62581/JIRA CPM-529

      msg.tripExtrasMultiCurr = false;
      msg.tripExtra = 0.00;
      msg.tripExtraCurrSymbol = tripExtraPrice.curSymbol;
  	  msg.tripExtraCurrCode = tripExtraPrice.currCode;
      //checking if upgrade with miles selected
      if( msg.upgradeFareInMiles!= null && msg.upgradeFareInMiles != undefined){
    	  var numOfSlices = flightUtil.formatNumber($(msg.secDisplayInfo.ItineraryDO.slices).size());
    	  msg.perPassUpgradeFirstClassMiles = msg.upgradeFareInMiles;
    	  msg.selFareInMiles = "Y";
    	  var grandUpgradeFirstClassMiles = (msg.upgradeFareInMiles * msg.paxCount);
    	  msg.secDisplayInfo.ItineraryDO.grandUpgradeFirstClassMiles = grandUpgradeFirstClassMiles;
       }
      $("#bookATrip").html($("#_review_flight_info_display_tmpl").render(msg));
	  $("#paymentTotalAmountSection").html($("#_payment_total_amount_tmpl").render(msg));
      flightUtil.reduceLargerCurFont();
      $("#paymentHeaderPriceContainer").html($("#_payment_header_price_display_tmpl").render(msg));
      flightUtil.reduceLargerCurFont();
      $("#paymentAmountDueHolder").html($("#_payment_selected_fop_total_amount_tmpl").render(msg));
      flightUtil.reduceLargerCurFont();
      SeatUtils.init(msg);
      if(!msg.MAflag){
		eDocUtils.init();
      }
      //flightUtil.seatPopulation(seatJSON);
      tripExtraUtil.init();
      var farePerPerson = (parseFloat((msg.taxDetails[msg.totalFareIndex]).baseFare).toFixed(flightUtil.currentPriceDecimalLength));
      var taxesFees = (parseFloat((msg.taxDetails[msg.totalFareIndex]).taxesFees).toFixed(flightUtil.currentPriceDecimalLength));
      var carrierImposedSurcharge = (parseFloat((msg.taxDetails[msg.totalFareIndex]).carrierImposedSurcharge).toFixed(flightUtil.currentPriceDecimalLength));
      if (!isNaN(carrierImposedSurcharge)) {
         farePerPerson = (parseFloat(farePerPerson) + parseFloat(carrierImposedSurcharge)).toFixed(flightUtil.currentPriceDecimalLength);
         taxesFees = (parseFloat(taxesFees) - parseFloat(carrierImposedSurcharge)).toFixed(flightUtil.currentPriceDecimalLength);
      }
      $("#fare_per_person").html("<span>" + msg.currencySymbol + flightUtil.formatNumber(farePerPerson) + "</span>(" + msg.currCode + ")");
      $("#tax_Fees").html("<span>" + msg.currencySymbol + taxesFees + "</span>(" + msg.currCode + ")");
      //tableCellEqualizer();
      //$("#mileageInfo").html($("#_mileage_info_display_tmpl").render());
      $('#tripExtraintegerAmmount,#tripExtradecimelAmmount').bind("DOMSubtreeModified", function () {
         populateBuyMiles.updateDisplayTotal();
      });

      TripInsurance.init();
      flightUtil.renderDiscountDiv(msg, "reviewPurchse");
      //$("#flightContainer").html($("#_flight_display_trip_summary_tmpl").render(msg.secDisplayInfo.ItineraryDO.slices));
      $("#nextGenHeader").html($("#_flight_checkout_header_tmpl").render(msg,pageName));
      $("#flightContainer").html($("#_trip_summary_display").render(msg));
      flightUtil.renderDiscountDiv(msg, "reviewPurchse");
      $("#tripRowDetailsDisplay").html($("#_flight_rowContainer_display").render(msg.secDisplayInfo.ItineraryDO.slices));

      $("#tripPriceDetails").html($("#_flight_Price_Details_display").render(msg));
      flightUtil.reduceLargerCurFont();
   	$("#tripPriceTotals").html($("#_flight_Price_Total_display").render(msg));
   	flightUtil.reduceLargerCurFont();
   	 $("#nextGenFooter").html($("#_terms_and_conditions_tmpl").render(msg));
   //Trip Extra template rendering
     /*if(msg.isTripExtraElligiable){
     $("#tripExtraHeader").html($("#_trip_extra_header_tmpl").render());
     $("#tripExtraContent").html($("#_trip_extra_tmpl").render(msg));
     }*/

   	// Pay With Miles Select Box Render
     $("#tripExtraTermsModalHolder").html($("#_trip_extra_terms_modal_tmpl").render());
   	 if(!msg.MAflag){
   	 $("#payWithMilesInfoContainer").html($("#_pay_with_miles_info_row").render(msg));
   	 $("#payWithMilesSlctBxHldr").html($("#_pay_with_miles_slct_bx").render(msg));
   		 if(msg.loggedInInd == "Y") {
   	 $("#mileageInfo").html($("#_mileage_info_display_tmpl").render(msg));
   		 }
   	 }
   	 $(".tripRowDetails").each(function (index) {
   		$(this).html(msg.secDisplayInfo.ItineraryDO.sliceDetailInfo[index]);
   	 });

   	// Store Tax description in msgObj
   	 taxFeesDesc = msg.taxFeesDescMap;

   	 /* Commented out as same line below again */
         //flightFlyOut.init(msg.secDisplayInfo.ItineraryDO.slices);

   	 /* Commented out as same line below again */
         //flightUtil.initCurrencyCalcModal();
   	 flightFlyOut.displayTotalFareModal(msg);
   	 flightFlyOut.showTripExtrasTermsModal();

   	 $(".fopTypes").customRadio({isFop : true});
   	  /* tripSummary Right coloum total bottom adjustment  */
     if($(".tripSummaryRightCol").length >0 ){
   		var rightColPriceHeight = $(".tripSummaryRightCol .tripPriceTotals").height();
   		$(".tripSummaryRightCol").css("padding-bottom",rightColPriceHeight+"!important");
   	  }

   	 //Mileage Estimator AJAX invocation.
   	 $("#mileageEstimator,.earnedMQMLink,.totalMilesLink,.earnedMQDLink").click(function(e){
   		e.preventDefault();
         if($(this).find('span').html()=="0")
            return false;
   		MileageEstimatorUtil.displayModal(msg);
   	  });

      if (msg.paxTravellingInd == "Y" || msg.paxTravellingInd == undefined || msg.paxTravellingInd == null) {
         $(".eligible_link").hide();
      }
      if (!msg.basicEcoUpgrdInd) {
         $("#selectSeats").show();
      }

      $("#totalMilesChargesContainer").html($("#_total_miles_charges_review_purchase_tmpl").render(msg));
      var seatUpgradePrice = (msg.paxSeatInfoMap != null) ? parseFloat(msg.totalECSeatPrice) : 0.00;
      if (msg.companionCert) {
         totalPriceDue = parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal).toFixed(flightUtil.currentPriceDecimalLength);
         var totalItineraryAmt = totalPriceDue;
      } else if (msg.paxEdocAppliedMap != undefined && !$.isEmptyObject(msg.paxEdocAppliedMap)) {
         //totalPriceDue = parseFloat(eDocDueTotalAmount).toFixed(flightUtil.currentPriceDecimalLength);
       //  totalPriceDue = parseFloat(msg.totalFare.total * msg.paxCount - edocSpentAmount).toFixed(flightUtil.currentPriceDecimalLength);
         var totalItineraryAmt = totalPriceDue;
      } else if (msg.shopType == "Award") {
         totalAwdPrice = msg.milesPerPax * msg.paxCount; //+ parseFloat(msg.totalFare.total).toFixed(flightUtil.currentPriceDecimalLength);
         //totalPriceDue = parseFloat(totalPriceDue * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength) ;
         // var totalItineraryAmt = (msg.totalFare.total* msg.paxCount);
         $("#total_per_person_award").html(flightUtil.formatNumber(msg.milesPerPax) + " Miles");

         if (msg.priceType == "MC") {
            totalPriceDue = msg.totalFare.total * msg.paxCount + msg.totalFare.taxesFees * msg.paxCount;
            $(".ttlTktValPerPaxVal").html(flightUtil.formatNumber(parseInt(msg.milesPerPax) + parseInt(msg.totalFare.equivalentAwardsValue.cashValueInMiles)) + " Miles + " + currencySymbol + flightUtil.formatNumber(msg.totalFare.taxesFees.toFixed(flightUtil.currentPriceDecimalLength)) + " (" + msg.currCode + ")");
         } else {
            totalPriceDue = msg.totalFare.total * msg.paxCount;
         }
         var totalItineraryAmt = totalPriceDue;

      } else {
         totalPriceDue = parseFloat(msg.totalFare.total).toFixed(flightUtil.currentPriceDecimalLength);
         totalPriceDue = parseFloat(totalPriceDue * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);
         var totalItineraryAmt = (msg.totalFare.total * msg.paxCount);
      }

      if (totalItineraryAmt > 5000) {
         greaterThanBMLamt = true;
      }

      var totalFlightPurchaseFare = 0,
      totalAmountDue = 0,
      totalPerPerson = 0,
      summaryAmountDue = 0;
      totalFlightPurchaseFare = parseFloat(msg.totalFare.total).toFixed(flightUtil.currentPriceDecimalLength);
      totalPerPerson = flightUtil.formatNumber(totalPriceDue);
      var isEQGCouponApplied = false;
      if (msg.edocumentDetailList && msg.edocumentDetailList.length > 0 &&
         msg.edocumentDetailList[0].documentInfo && msg.edocumentDetailList[0].documentInfo.ticketDesignator &&
         msg.edocumentDetailList[0].documentInfo.ticketDesignator.indexOf("EQG") != -1) {
         isEQGCouponApplied = true;
      }

      fopRuleJSON = $.extend({}, msg.fopRule);

      this.attachCommonEvents(msg);

      if (msg.loggedInInd != null && msg.loggedInInd == "Y") {
   	   this.attachLoggedInEvents(msg);
   	   //populateBuyMiles.loadBuyMiles(msg);
         if ((msg.savedFOPInd != null && msg.savedFOPInd != undefined && msg.savedFOPInd == "Y") || (msg.addressMap != null && msg.addressMap != undefined && !$.isEmptyObject(msg.addressMap))) {
            var savedFOPArr = [];
            if (msg.savedFOPMap && !$.isEmptyObject(msg.savedFOPMap)) {
               $.each(msg.savedFOPMap, function (i, savedFOP) {
                  savedFOPArr.push({
                     "savedFOPDesc" : savedFOP,
                     "ccFOPIndex" : i
                  });
               });
            } else {
               msg.isSavedFOPEmpty = true;
            	//<START> Fix for CPM-454
            	stateListJSONComplete = true;
            	$(Payment).trigger("ajaxCompleteCko");
            	//<START> Fix for CPM-458
            }
            msg.savedFOPList = savedFOPArr;
            this.loadCheckOutSec(msg);
            //$("#billPayment").html($("#_loggedin_review_flight_bill_payment_tmpl").render(msg));

            if (msg.savedFOPInd == null || msg.savedFOPInd == undefined || msg.savedFOPInd != "Y" || isEQGCouponApplied ||
               msg.savedFOPList == null || msg.savedFOPList == undefined || msg.savedFOPList.length == 0) {
               $("#bookATrip .useNewPaymentType").show();
               if (isEQGCouponApplied) {
                  $(".CardImageContainer #TP").click();
               } else {
                  if ((smCardList != undefined && smCardList.length != 0) && (debitCardList != undefined && debitCardList.length != 0) && (creditCardList != undefined && creditCardList.length != 0)) {
                     $("#PaymentOptionWrap #paySAE").trigger("click");
   	     	    		}

   		     	    else if ((debitCardList != undefined && debitCardList.length != 0) || (creditCardList != undefined && creditCardList.length != 0)  ){
                     if (debitCardList != undefined && debitCardList.length != 0) {
                        $("#PaymentOptionWrap #payDC").trigger("click");
                     }
                     if (creditCardList != undefined && creditCardList.length != 0) {
                        $("#PaymentOptionWrap #payCC").trigger("click");
                     }

                  } else if (smCardList != undefined && smCardList.length != 0) {
                     $("#PaymentOptionWrap #paySAE").trigger("click");

                  }
                  if (msg.displayCobrandInd == "Y") {
                     $("#PaymentOptionWrap").hide();
                  }
               }
            } else {
               var strFOP = $("#savedCardInfo #storedCCList :selected").val();
               if (strFOP != undefined && (strFOP.indexOf("TP") > -1 || strFOP.indexOf("JC") > -1)) {
                  hideTripProtection();
               }
            }

            var pwmOption = msg.pwmOption;

            //	$("#ancillary_total").html((parseFloat(msg.tripExtra)).toFixed(flightUtil.currentPriceDecimalLength));

            if (msg.payWithMilesInd == "Y") {
               var dollarValueofMiles = parseFloat((msg.pwmOption).split("_")[0]);
               var milesused = ((msg.pwmOption).split("_")[1]);
               dollarValueofMiles = (dollarValueofMiles * msg.paxCount);
               milesused = flightUtil.formatNumber(milesused * msg.paxCount);
               totalFlightPurchaseFare = parseFloat(msg.pwmNetAmount).toFixed(flightUtil.currentPriceDecimalLength);
               finalPrice = totalFlightPurchaseFare * msg.paxCount;
               $("#remainBalance #miles_used").html("<span class='discountMiles'> (" + milesused + ")</span><span> - </span>" + "<span>" + msg.currencySymbol + flightUtil.formatNumber(dollarValueofMiles.toFixed(flightUtil.currentPriceDecimalLength)) + "</span> (" + msg.currCode + ")");
            }
            totalFlightPurchaseFare = parseFloat(totalFlightPurchaseFare * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);

            //    	$("#summary_amount_due").html( msg.currencySymbol+"<span>"+flightUtil.formatNumber(totalFlightPurchaseFare)+"</span> ("+msg.currCode+")");

            if (msg.upgradeWithMilesInd == "Y") {
               msg.selFareInMiles = "Y";
               var upgradeFareInMiles = flightUtil.formatNumber(msg.upgradeFareInMiles * msg.paxCount);
               $("#remainBalance #miles_used").html("<span>" + upgradeFareInMiles + "</span>");
               $("#upgradeMiles").html("+" + upgradeFareInMiles + " Miles");

             //Details charges render
      		 msg.taxDetails[custSelFareIndex].currencySymbol = msg.currencySymbol;
      		 msg.taxDetails[custSelFareIndex].currCode = msg.currCode;
      		 msg.taxDetails[custSelFareIndex].selFareInMiles = "Y";
      		 msg.taxDetails[custSelFareIndex].perPassUpgradeFirstClassMiles = msg.perPassUpgradeFirstClassMiles;

            }
            if(msg.payWithMilesInd == "Y"){
       		 msg.selectedPwm = "Y";
       		 msg.payWithMilesPerPassenger = msg.pwmSelectedMilesValue;
       		 /*msg.pwmSelectedAmountValue   =  msg.pwmSelectedAmountValue/msg.paxCount;
       		 msg.pwmSelectedMilesValue		=  msg.pwmSelectedMilesValue/msg.paxCount;*/
       		 msg.secDisplayInfo.ItineraryDO.subTotal = (parseFloat(msg.actualSubTotal)- parseFloat(msg.pwmSelectedAmountValue)).toFixed(flightUtil.currentPriceDecimalLength);
       		 //msg.secDisplayInfo.ItineraryDO.grandTotal = (parseFloat(msg.secDisplayInfo.ItineraryDO.subTotal)*msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);
       		 msg.flightSectionTotal = (msg.secDisplayInfo.ItineraryDO.subTotal * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);
       		 //Details charges render
       		 msg.taxDetails[mileageEstFareIndx].currencySymbol = msg.currencySymbol;
       		 msg.taxDetails[mileageEstFareIndx].currCode = msg.currCode;
       		 msg.taxDetails[mileageEstFareIndx].pwmSelectedMilesValue = msg.pwmSelectedMilesValue;
       		 msg.taxDetails[mileageEstFareIndx].payWithMilesRemAmtPerPax = msg.secDisplayInfo.ItineraryDO.subTotal;
       		 msg.taxDetails[mileageEstFareIndx].selectedPwm = "Y";
       		 msg.taxDetails[mileageEstFareIndx].pwmDollarAmnt = (parseFloat(msg.pwmSelectedAmountValue)).toFixed(flightUtil.currentPriceDecimalLength);

             $("#tripPriceDetails").html($("#_flight_Price_Details_display").render(msg));
             flightUtil.reduceLargerCurFont();
             $("#tripPriceTotals").html($("#_flight_Price_Total_display").render(msg));
             flightUtil.reduceLargerCurFont();
            	// CPM-900 
            	if(msg.paxCount > 1 && msg.secDisplayInfo.ItineraryDO.slices.length == 1){
             		$("#flightRightRail").addClass("pwmPaddingMultiPaxOW");//("padding-bottom", "175px !important");
            	}else if(msg.paxCount > 1 && msg.secDisplayInfo.ItineraryDO.slices.length == 2){
             		$("#flightRightRail").addClass("pwmPaddingMultiPaxRT");//css("padding-bottom", "289px !important");
            	}else if(msg.paxCount == 1  && msg.secDisplayInfo.ItineraryDO.slices.length == 1){
             		$("#flightRightRail").addClass("pwmPaddingSinglePaxOW");//css("padding-bottom", "210px !important");
            	}  
       	 }
            // 	    	$("#totalAmntDuePerPerson").html("<span> "+totalFlightPurchaseFare+"&nbsp;&nbsp;</span>("+msg.currCode+")");

            //$("#storedCCList option:eq(0)").attr("selected","selected");
            //$("#storedCCList").change();
            $("#cardFromProfile,#addrRadio").prop("checked", true);

            var populateYearArray = [];
            var currentYear = (new Date).getFullYear();
            var lastYear = currentYear + 14;
            populateYearArray.push({
               optionValue : "",
               optionLabel : "Year"
            });
            for (; currentYear <= lastYear; currentYear++) {
               populateYearArray.push({
                  optionValue : currentYear,
                  optionLabel : currentYear
               });
            }
            $("#ccExpiryYear,#newCcExpiryYear").FlightDropdown("populateSelectBox", $("#ccExpiryYear,#newCcExpiryYear"), populateYearArray);
            if (msg.addressMap && !$.isEmptyObject(msg.addressMap)) {
               loggedInAddressMap = msg.addressMap;
            }
            if (!msg.savedFOPMap || $.isEmptyObject(msg.savedFOPMap)) {
               $("#useStoredCard").click();
               $(".profileCard, .useACard").hide();
               $("#loggedInCardInf").css("padding-left", "0px");
            } else {
               $("#storedCCList").trigger("change");
            }
            if (msg.addressMap || !$.isEmptyObject(msg.addressMap)) {
               $("#selectExistingAddr,#specifyNewAddrs").show();
               $("#selectExistingAddr input[type=radio]").click();
            }
            if (msg.savedFOPInd && !$.isEmptyObject(msg.savedFOPInd)) {
               $("#useCreditFrmProf,#usenewPayment").show();
               $("#useCreditFrmProf input[type=radio]").click();
            }

            if ((msg.loggedInInd != null && msg.loggedInInd == "Y") && ($("#paySAE").is(":checked") || $("#biling_radio-new").is(":checked") ||
                  (msg.savedFOPList != null && msg.savedFOPList.length < 4 && msg.saveToWalletEligible == "Y"))) { //changes for #62257
               $("#saveToProfileHolder").show();
            }
         } else {
            //$("#billPayment").html($("#_notloggedin_review_flight_bill_payment_tmpl").render(msg));
       	    /*$("#billPayment").html($("#_not_loggedIn_payment_card_section").render(msg));

            yearCount.getIncrementYear();
            $("#paySAE").prop("checked", true);*/
            newPaymentAction = "Y";
			this.loadNotLoggedInTemplate(msg);
			$("#hdnSavedFopId").val("");
			/*if(msg.addressIdMap && !$.isEmptyObject(msg.addressIdMap)){
				$("#addrAlias").change();
			}*/
			 if ($("#insuranceOfferHTML").html() == "") {
		            $("#insuranceOfferHTML").parent().hide();
	         }
            $("#paySAE").prop("checked", true);
	         yearCount.getIncrementYear();

	         if (msg.paxEdocAppliedMap != undefined && !$.isEmptyObject(msg.paxEdocAppliedMap)) {
	            totalFlightPurchaseFare = totalItineraryAmt;

	         } else if (msg.companionCert) {
	            totalFlightPurchaseFare = parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal);
	         } else {
	            totalFlightPurchaseFare = parseFloat(totalFlightPurchaseFare * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);
	         }
	         if (isEQGCouponApplied) {
	            $(".CardImageContainer #TP").click();
	         }

         }

         if ($("#insuranceOfferHTML").html() == "") {
            $("#insuranceOfferHTML").parent().hide();
            $("#billPayment .passengerName").last().css("border-bottom", "none");
         }
         if (msg.skyMilesMemberInd) {
            $("#mileageInfo").html($("#_mileage_info_display_tmpl").render(msg));
         }

         if (msg.paxEdocAppliedMap != undefined && !$.isEmptyObject(msg.paxEdocAppliedMap)) {
            totalFlightPurchaseFare = totalItineraryAmt;
         }
      } else {
    	  //this.fetchStatesFromCountry("US");
    	  $.ajax({
			  type: "POST",
			  dataType: "json",
			  url: "StatesListJSONAction",
			  data : {"countryCode": Payment.countryCode, "cacheKeySuffix" : cacheKeySuffix},
			  headers: { "cache-control": "no-cache" },
			  success: function (jsonResponse) {
				Payment.countryCodeResponse = jsonResponse;
				  msg.stateList = jsonResponse.statesList;
			   	   Payment.loadNotLoggedInTemplate(msg);
			   	Payment.loadCheckOutSec(msg);
			   	Payment.acculynkCardTemplateDisplay(); 
			   	/*Fix for the Alipay FOP + eDoc issue start*/
			   	Payment.processFopRules();
			   	Payment.attachCommonEvents(msg);
			   	Payment.attachPaymentEventHandlers();
			   	Payment.attachBankingEvents(msg);
			   	/*Fix for the Alipay FOP + eDoc issue end*/
         if ($("#insuranceOfferHTML").html() == "") {
            $("#insuranceOfferHTML").parent().hide();
         }
         $("#paySAE").prop("checked", true);
         yearCount.getIncrementYear();

         if (msg.paxEdocAppliedMap != undefined && !$.isEmptyObject(msg.paxEdocAppliedMap)) {
            totalFlightPurchaseFare = totalItineraryAmt;

         } else if (msg.companionCert) {
            totalFlightPurchaseFare = parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal);
         } else {
            totalFlightPurchaseFare = parseFloat(totalFlightPurchaseFare * msg.paxCount).toFixed(flightUtil.currentPriceDecimalLength);
         }
         if (isEQGCouponApplied) {
            $(".CardImageContainer #TP").click();
         }
         stateListJSONComplete = true;
         statesLoaded = true;
         $(Payment).trigger("ajaxCompleteCko");
			  },
			  error: function(jqXHR, textStatus, error) {
				  //console.log("error");
				try{
					delta.utils.logger.ajaxError(jqxhr, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
			  }
		  });

      }
      this.processFopRules();
      hideBML();
      //totalSeatVal = msg.totalSeatAmountActual;
      if (msg.shopType != "Award") {
         $("#total_per_person").html(msg.currencySymbol + "<span>" + flightUtil.formatNumber(totalPriceDue) + "</span> (" + msg.currCode + ")");
      }
      if (msg.shopType == "Award") {
         if (msg.priceType == "MC") {
            $("#total_Amnt_Due").html(flightUtil.formatNumber(parseFloat(msg.milesPerPax * msg.paxCount)) + " Miles +" + "<span> " + msg.currencySymbol + flightUtil.formatNumber((parseFloat(totalFlightPurchaseFare) + parseFloat(msg.totalSeatAmountActual) + parseFloat(msg.totalFare.taxesFees * msg.paxCount) + parseFloat(msg.taxDetails[msg.selFareIndex].baseFare * msg.paxCount)).toFixed(flightUtil.currentPriceDecimalLength)) + "&nbsp;&nbsp;</span>(" + msg.currCode + ")");
         } else {
            $("#total_Amnt_Due").html(flightUtil.formatNumber(parseFloat(msg.milesPerPax * msg.paxCount)) + " Miles +" + "<span> " + msg.currencySymbol + flightUtil.formatNumber((parseFloat(totalFlightPurchaseFare) + parseFloat(msg.totalSeatAmountActual)).toFixed(flightUtil.currentPriceDecimalLength)) + "&nbsp;&nbsp;</span>(" + msg.currCode + ")");
         }
      } else {
         $("#total_Amnt_Due").html("<span> " + msg.currencySymbol + flightUtil.formatNumber((parseFloat(totalFlightPurchaseFare) + parseFloat(msg.totalSeatAmountActual)).toFixed(flightUtil.currentPriceDecimalLength)) + "&nbsp;</span>(" + msg.currCode + ")");
      }

      if (msg.payWithMilesInd == "Y") {
         $("#summary_amount_due").html(msg.currencySymbol + "<span>" + flightUtil.formatNumber(((parseFloat(msg.pwmNetAmount) * msg.paxCount) + parseFloat(totalSeatVal)).toFixed(flightUtil.currentPriceDecimalLength)) + "</span> (" + msg.currCode + ")");

      } else if (msg.shopType == "Award") {
         if (msg.priceType == "MC") {
            $("#summary_amount_due").html(flightUtil.formatNumber(parseFloat(totalAwdPrice)) + " Miles + " + msg.currencySymbol + (parseFloat(totalPriceDue) + parseFloat(totalSeatVal) + parseFloat(msg.taxDetails[msg.selFareIndex].baseFare * msg.paxCount)).toFixed(flightUtil.currentPriceDecimalLength) + "</span> (" + msg.currCode + ")");
         } else {
            $("#summary_amount_due").html(flightUtil.formatNumber(parseFloat(totalAwdPrice)) + " Miles + " + msg.currencySymbol + (parseFloat(totalPriceDue) + parseFloat(totalSeatVal)).toFixed(flightUtil.currentPriceDecimalLength) + "</span> (" + msg.currCode + ")");
         }
      } else {
         $("#summary_amount_due").html(msg.currencySymbol + "<span>" + flightUtil.formatNumber((parseFloat(totalPriceDue) + parseFloat(totalSeatVal)).toFixed(flightUtil.currentPriceDecimalLength)) + "</span> (" + msg.currCode + ")");
      }
      if (msg.companionCert) {
         $("#paySAE").click();
         $(".cardRowBlock").hide();
         $(".cardRowBlock:first").show();
         $(".BMLcont").remove();
      }

      $("#isInternationalFlight").val((msg.internationalFlight) ? "Y" : "N");

      if (msg.amexApprovedInd) {
    	  this.performAmexRules();
      }
      /*
       * Moved to ajaxCompleteCko Handler to scroll to appropriate offset on bds error
       *
      if (msg.bdsErrorMsgMap != null) {
        displayBDSErr(msg.bdsErrorMsgMap, "", "nextGenErrorText", null);
      }
      */
      /*if(msg.errorMap != null){
      displayFormError(msg.errorMap,".errorMsgContainer","errorMsg",null);
      }*/
      // $("#paySAE").trigger("click"); // commented by Kathir, causing page submit.
      if (msg.displayNameSBList != null) {
         $("#cost_detail_content_wrapper").html($("#_review_purchase_passenger_tmpl").render(msg.displayPaxDtls));
      }
      if (msg.persistFormData == null) {
         $("#countryCode option[value='US']").detach().prependTo($("#countryCode"));
         //$("#countryCode option[value='US']").after('<option value=""></option>');
         $("#countryCode").val("US");
         $("#countryCode option[value='US']").attr("selected", "selected");
      } else {
         if (msg.persistFormData.country != undefined) {
            $("#countryCode option[value='US']").detach().prependTo($("#countryCode"));
            $("#countryCode option[value='US']").after('<option value=""></option>');
            $("#countryCode").val(msg.persistFormData.country);
         }
      }

      $(".sliceDetailInfo").each(function (index) {
         $(this).html(msg.secDisplayInfo.ItineraryDO.sliceDetailInfo[index]);
      });

      taxFeesDesc = msg.taxFeesDescMap;
      if (msg.shopType == "Award") {
         //msg.taxDetails[msg.totalFareIndex].baseFare = msg.milesPerPax;
         msg.taxDetails[msg.totalFareIndex].baseFare = msg.secDisplayInfo.ItineraryDO.totalFare[msg.totalFareIndex].baseFare;
         msg.taxDetails[msg.totalFareIndex].shopType = msg.shopType;
         msg.taxDetails[msg.totalFareIndex].currencySymbol = msg.currencySymbol;
         msg.taxDetails[msg.totalFareIndex].currCode = msg.currCode;
         msg.taxDetails[msg.totalFareIndex].priceType = msg.priceType;
         msg.taxDetails[msg.totalFareIndex].taxesFees = msg.totalFare.taxesFees;
         msg.taxDetails[msg.totalFareIndex].equliCashInMiles = flightUtil.formatNumber(msg.totalFare.equivalentAwardsValue.cashValueInMiles);
         msg.taxDetails[msg.totalFareIndex].equliMiles = msg.totalFare.total;
         $.each(msg.taxDetails[msg.totalFareIndex].taxBreakDowns, function (index, element) {
            element.currencySymbol = msg.currencySymbol;
            // element.currCode = msg.currCode;
         });
      }

      $('#taxBreakDownModal').html($("#_tax_breakdown_container_tmpl").render(msg.taxDetails[(msg.upgradeWithMilesInd == "Y") ? msg.custSelFareIndex : msg.selFareIndex]));
      $('#hazMatModal').load("/content/dam/delta-applications/templates/cart/hazardousMaterials.html");
      //$("#securityCodeToolTip").html($("#_security_code_tooltip_tmpl").render());
      handlePurchaseBtnClick();
      flightUtil.initCurrencyCalcModal();
      flightUtil.initTaxBreakDownModal();
      flightUtil.initHazMatModal();
      //flightUtil.adjustFlightDisplayCellHeight();
      $('#teTermsNConditions .body').load("/content/www/en_US/traveling-with-us/planning-a-trip/trip-extras/terms-and-conditions/_jcr_content/mainPar.html", function () {
         $('#teTermsNConditions').dialog({
            autoOpen : false,
            modal : true,
            width : 515,
            position : "fixed",
            resizable : false,
            draggable : false,
            closeOnEscape : true,
            create : function (event, ui) {
               var $this = $(this);
               var ele = $(event.target).parent();
               $($this).on('click', '.closeBtn', function (e) {
                  e.preventDefault();
                  $this.dialog('close');
                  $(".tripOverlay").removeClass("tripOverlay");

               });
            }
         });
      });

      // Airport code flyout
      flightFlyOut.init(msg.secDisplayInfo.ItineraryDO.slices);
      $(".noBorderRadius:eq(0)").removeClass("noBorderRadius");
      $("#departureDateTime").val(msg.travelStartDate);
      $("#arrivalDateTime").val(msg.travelEndDate);

      $("#finalAmnt").html(currencySymbol + finalPrice + " (" + currCode + ")");
      /**
       * 	Handling "change event on country dropdown to show country specific tax message
       */
    /*  $("#billing_address-fields").change(function (event) {
         var cCode = loggedInAddressMap[$(this).val()].addressLine8;
         var messageText = (msg.extraTktMsgMap && cCode in msg.extraTktMsgMap) ? msg.extraTktMsgMap[cCode] : "";
         if (messageText != "") {
            $("#extraFeesMessage").show().find(".table_footer_text").html(messageText);
         } else {
            $("#extraFeesMessage").hide();
         }
      }).trigger("change"); */
      /**
       *	persisting customer inputs on fulfillment fail
       */
      //this.persistFormData(msg);
      this.attachPaymentEventHandlers();

      //Display hide for PayPal & Bill Me Later option on svaed non US address changes.
      /*$("#bookATrip").on("change", "#billing_address-fields", function (event) {
         if (loggedInAddressMap[$(this).val()].addressLine8 != "US") {
            $(".BMLcont").hide();
            $(".payPalcont").hide();
            if ($("#payBL").is(":checked") || $("#payPP").is(":checked") || $("[name=payOpt]:checked").length == 0) {
               $("#paySAE").click();
            }
         } else if (!greaterThanBMLamt && loggedInAddressMap[$(this).val()].addressLine8 == "US") {

            //$(".payPalcont, .BMLcont").hide();
            if (($("#payBL").is(":checked") || $("#payPP").is(":checked")) && seatPrice > 0) {
               $("#critical, #fopTripsCheckBoxMsg").show();
            }
            $(".BMLcont").show();
            $(".payPalcont").show();

         }

      }).trigger("change");*/
      /*$(document).on('click', '.fopTypes input', function () {
    	  //msg.totalSeatPrice = 10;

      });*/

      $(document) .on('click', '#fopTripsCheckBoxMsg #fopTrips', function () {
          removePaxSeat();
      });

      $(document) .on('click', '#fopMsgCont #removeAllTripExtraBtn', function () {
    	  checkoutOmnitureUtil.registerClick($(this));
    	  removePaxTripAdditions();
    	  if(Payment.selectedFop == "payGC" && $("#amex-express-checkout").length != undefined && $("#amex-express-checkout").is(':visible')){
    		  //$("#amex-express-checkout").css("top","161px");
			  if($('#fopMsgCont').is(':visible')){
					$("#amex-express-checkout").css("top","211px"); 
				}else{
					if(Payment.selectedFop == "payCC"){
						$("#amex-express-checkout").css("top","56px");
					}else{
					$("#amex-express-checkout").css("top","146px"); 
				}
    	  }
    	  }
      });

      if (msg.errorMap != null) {
         //displayFormError(msg.errorMap, ".errorMsgContainer", "errorMsg", null);
      }
      //Mileage Estimator AJAX invocation.
      $("#mileageEstimator,.earnedMQMLink,.totalMilesLink,.earnedMQDLink").on("click", function (e) {
         e.preventDefault();
         if($(this).find('span').html()=="0")
            return false;
     	checkoutOmnitureUtil.registerClick($(this));
         MileageEstimatorUtil.displayModal(msg);
      });
      $("#countryCode").trigger("change");
      /* Pixel Tracking */
      //checkoutPixelTracking.setReviewPurchaseTracking(msg);// ADARA removed
      // Data Layer Tracking
      try {
         var attr = {"ticketType":msg.shopType};
         var cartProductInfo = [],
            cartDateFormatArr = [],
            cartDateFormatDep = [];
         for(i=0;i<msg.secDisplayInfo.ItineraryDO.slices.length;i++){
            cartDateFormatArr = [];
            cartDateFormatDep = [];
            cartDateFormatArr = msg.secDisplayInfo.ItineraryDO.slices[i].flights[0].flightArrivalDate.split('-');
            cartDateFormatDep = msg.secDisplayInfo.ItineraryDO.slices[i].flights[0].flightDepartureDate.split('-');
            cartProductInfo[i] = {productInfo:{"productType":"Flight","flightType": msg.secDisplayInfo.ItineraryDO.slices[i].flightType,"fareClass":msg.secDisplayInfo.ItineraryDO.slices[i].cabinInfo[0].bookingCode,"cabinType":msg.secDisplayInfo.ItineraryDO.slices[i].cabinInfo[0].cabinName,"departureDate": cartDateFormatDep[1]+"/"+cartDateFormatDep[2]+"/"+cartDateFormatDep[0],"arrivalDate": cartDateFormatArr[1]+"/"+cartDateFormatArr[2]+"/"+cartDateFormatArr[0],"originAirportCode": msg.secDisplayInfo.ItineraryDO.slices[i].flights[0].flightOrigin.code,"destinationAirportCode": msg.secDisplayInfo.ItineraryDO.slices[i].flights[0].flightDestination.code,"numberOfTravellers": msg.paxCount}};
         }
         var cartPrice = {"cartID":msg.cartId,"basePrice":msg.secDisplayInfo.ItineraryDO.pricePPassenger,"currency":msg.currCode,"taxRate":msg.secDisplayInfo.ItineraryDO.taxImposed,"priceWithTax":msg.secDisplayInfo.ItineraryDO.subTotal,"cartTotal":msg.secDisplayInfo.ItineraryDO.grandTotal};
          delta.dataLayer.setData({
              "ticketTypeDataPoints": attr,
              "cartDetailDataPoints": cartProductInfo,
              "cartDataPoints": cartPrice
          });
      }catch (e) {
        //console.log("R&P : Data Layer Exception");
		delta.utils.logger.logMessage("R&P : Data Layer Exception", "error");
      }
      // Data Layer Tracking END
      this.requestUpgrade(msg);

      //Render Advisory message/modal for selected trip extras.
      if ((msg.hasOwnProperty('ascendPackageRemovalInd') &&  msg.ascendPackageRemovalInd === "Y") ||
    		  (msg.hasOwnProperty('liftPackageRemovalInd') && msg.liftPackageRemovalInd === "Y")) {
    	  $("#tripExtraRemovalModalHolder").html($("#_trip_extra_removal_msg_display").render(msg));
          $('#tripExtraRemovalModalHolder').dialog({
        	  modal: true,
              resizable: false,
              draggable: false,
              closeOnEscape: true,
          	  top: 137,
              width: 460,
          	  left: 402,
              create: function (event, ui) {
	              var $this = $(this);
	              $($this).on("click", "#removeTripExtraYesBtn, #removeTripExtraNoBtn", function (e) {
	            	  e.preventDefault();
	            	  var btnVal = $(this).val();
	            	  if (btnVal === "Y") {
	            		  $this.dialog("close");
	            	  } else {
	            		  $.ajax({
	            			  type: "POST",
	            			  dataType: "json",
	            			  url: "TripExtraRemovalJSONAction",
	            			  data : {"cacheKeySuffix" : cacheKeySuffix},
	            			  headers: { "cache-control": "no-cache" },
	            			  /**
	            			   * success block of the ajax call
	            			   */
	            			  success: function (jsonResponse) {
	    	            		  $this.dialog("close");
	            			  },
	            			  /**
	            			   * Error block of the ajax call
	            			   */
	            			  error: function(jqXHR, textStatus, errorThrown) {
	    	            		try{
									delta.utils.logger.ajaxError(jqXHR, textStatus, error);
									delta.utils.logger.logMessage("Request Failed: " + error, "error");
								}catch(err){
									if (window.console && window.console.error) {
										console.error('Error logging to delta.utils.logger:' + err);
									}
								}
								  $this.dialog("close");
	            			  }
	            		  });
	            	  }
	              });
	          },
    	  });
      }
      $("#addBannerHtmlContainer").load("/utils/Cart/EnhanceBooking/eb-promo/payment-ad-banner.html", function( response, status, xhr){
    	  if ( status == "error" || response == "" || response == null) {
    		  $("#billMeLaterWrapperElm").hide();
    	  }
      });
      $(".cardLogos #AP").hide();
      $(".cardLogos").find("label[for=AP]").hide();
      if (!msg.loggedInInd) {
		   	try{
					$("#walletLoginContent").load("/custlogin/awardsLogin.action", function(response, status, xhr) {
					//$("#walletLoginContent").load("https://dvl7.delta.com/custlogin/awardsLogin.action", function() {
						$('#walletLoginContent > link[rel=stylesheet]').remove();
				    //w3c validation changes
				    $('#walletLoginContent > title').replaceWith('<span class="nextGenHiddenField">Log In to My Delta</span>')
				    $("#loginPage").hide();
			    	$("label[for=usernm_LoginPage]").html("SkyMiles#, *Email or Username");
						$("label[for=pwd_LoginPage]").html("*Password");
						$("#submit1_LoginPage,#lastnameSubmitBtn_LoginPage").removeClass("primary").addClass("secondary").text("Continue");
					  if (msg.myWalletLoginClickInd != undefined && msg.myWalletLoginClickInd == "Y" && $("#openLoginContainer").length > 0) {
						  	$("#openLoginContainer").click();
				  	}
					});
				}catch(e){
					delta.utils.logger.logMessage(e, "error");
				}
      }
      //amex congratulation banner display
      if(msg.amexApprovedInd){
         var amexConfBannerType = msg.amexBannerTypeCode;
          if(amexConfBannerType !== null && amexConfBannerType !== undefined){
              amexCongratsBanner.display(amexConfBannerType);
          }
      }
      //For RTBT
      this.attachBankingEvents(msg);
	//   this.persistCheckOutsData(msg);
      Payment.setFirstAndLastNameInputLabel();
	   /*if($.ui.ie) {
        		flightUtil.fixDropDownForIE();
        	}*/
		/* Alipay reposition */
	  /*if(msg.fopRule.acculynk == "NA"){
		  if(msg.fopRule.alipay == "Enabled"){
			$("#defaultFopHldr a.viewMoreLink").before('<label for="payAP">'+$("#alternetFopHldr label[for='payAP']").html()+'</label>');
			$("#alternetFopHldr label[for='payAP']").remove();
		  }
	  }*/
	  /* Credit/Debit Text Toggle based on Acculynk ON/OFF toogle */
		// ACCULYNK ERROR MESSAGE Display
		if(msg.acculynkResponseCode !== undefined && msg.acculynkResponseCode !== null){
			if(msg.acculynkResponseCode != "ACCU000" && msg.acculynkResponseCode != "ACCU200"){
				Payment.acculynkShowErrorMsgs(msg.acculynkResponseCode);
			}
		}
		/* Amex Express Checkout Core File Load */
		jQuery.cachedScript = function( url, options ){
			options = $.extend( options || {}, {
				dataType: "script",
				cache: true,
				url: url
			});
			return jQuery.ajax( options ).fail(function(jqXHR, textStatus, error){
				try{
					delta.utils.logger.ajaxError(jqXHR, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
			});
		};
		$.cachedScript("https://icm.aexp-static.com/Internet/IMDC/US_en/RegisteredCard/AmexExpressCheckout/js/AmexExpressCheckout.js").done(function( script, textStatus ) {
		  /* script load */
		});
   },
	resetPaymentTabValidation: function(){
	   if(Payment.validator != null){
		   Payment.validator.resetForm();
		   Payment.validator.init();
		   $(Payment.validator.currentForm).find('legend').removeClass('errIcon');
		   $(Payment.validator.currentForm).find('select').removeClass('errorInput');
		}
   },
	//For RTBT common events
	attachBankingEvents: function(data){
	   var selectedCountry, selectedCurrency, selectedProviderID, selectedBankID, selectedBankName,
	   	   countryDepartureCode =  msg.secDisplayInfo.ItineraryDO.slices[0].sliceOrigin.nearByCities.country.code;
	   /* Added for Custom Radio Button of Instant Bank Transfer */
	   $(document).on("click", ".radioBtnhld label", function(){
	   		var radioName = $(this).prev().attr("name");
	   		if(!$(this).prev().is(":checked")){
	   			$("input[name="+radioName+"]").next().removeClass("selected");
	   			$(this).addClass("selected");
	   		}
	   	});

	   $(document).on("change", "input[name=cardType]", function(){
		   $(this).prev().find('.card-logo').trigger('click');
	   });

      $(document).on("change", "#onlineCountry", function(){
          $("#onlineBank, #onlineCurrencyConvertHldr").html("");
          $(".oneClickPaymentSection").show();
			selectedCountry = $(this).find("option:selected").val();
			$("#hdnrtbtSelectedCountryCd").val(selectedCountry);
         $("#hdnrtbtSelectedProviderId").val('');
         $("#hdnrtbtSelectedBankId").val('');
         $("#hdnrtbtSelectedBankName").val('');
			if($(this).find("option:selected").index() != 0){
				for(var i=0; i<msg.rtbtDetailList.length; i++){
					if(msg.rtbtDetailList[i].countryCode == selectedCountry){
						selectedCurrency = msg.rtbtDetailList[i].currency;
						//for provider list rendering
						$("#onlineProvider").html($("#_online_provider_template").render(msg.rtbtDetailList[i]));						/* Fix for CPM-508 start */
						if(selectedCountry == "DE" || selectedCountry == "CH"){
							$("#onlineProvider .radioBtnhld").find("label").addClass("SOFORT-BANKING");
						}
						/* Fix for CPM-508 end */
						if(msg.rtbtDetailList[i].providerList.length === 1){
							$("#onlineProvider .radioBtn").trigger("click");
							$("#onlineProvider .radioBtn").next("label").addClass("selected");
						}
						//for currency conversion part
						if(msg.currCode != msg.rtbtDetailList[i].currency){
							$.ajax({
								type: "POST",
								dataType : "json",
								data: {
									"cacheKeySuffix" : cacheKeySuffix,
									pointOfOriginCountryCurrencyCode: msg.currCode,
									pointOfOriginCountryCode: countryDepartureCode,
									selectedBankingCountryCurrencyCode: selectedCurrency,
									selectedBankingCountryCode: selectedCountry,
									totalAmount: msg.secDisplayInfo.ItineraryDO.grandTotal
								},
								url : 'RTBTCurrencyConverterJSONAction',
					            headers : {"cache-control" : "no-cache"},
					            success: function(response){
                              if(response.convertedTotalAmount != undefined && response.convertedTotalAmount != null){
                                 $(".oneClickPaymentSection").hide();
                                 $("#onlineCurrencyConvertHldr").html($("#_online_currency_convert_template").render(response));
                                 if($("#continue_button").prop('disabled') === true){
                                	 $("#convert_continue_button").prop('disabled', true);
                                 }
									 currencyConvertStatus = "Y";
	                                 $("#hdnrtbtConvertCurrency").val(currencyConvertStatus);

                              }
					            }/*,
					            error: function(jqXHR, textStatus, errorThrown) {}*/
							}).fail(function(jqXHR, textStatus, error){
								try{
									delta.utils.logger.ajaxError(jqXHR, textStatus, error);
									delta.utils.logger.logMessage("Request Failed: " + error, "error");
								}catch(err){
									if (window.console && window.console.error) {
										console.error('Error logging to delta.utils.logger:' + err);
									}
								}
							});
						}else{
							currencyConvertStatus = "N";
							$("#hdnrtbtConvertCurrency").val(currencyConvertStatus);
						}
					}
				}
			}else{
				$("#onlineProvider").html("");
			}
		});

		$(document).on("click", "#onlineProvider .radioBtn", function(){
			if($("#onlineProvider fieldset legend").hasClass("errIcon")){
				$("#onlineProvider fieldset legend").removeClass("errIcon");
				}
			 $("#onlineBank").html("");
			 selectedProviderID = $(this).attr("id");
			 $("#hdnrtbtSelectedProviderId").val(selectedProviderID);
	         if(selectedCountry == "NL" && selectedProviderID == "809"){
	            $("#onlineBank").html($("#_online_bank_template").render(msg));
	         }
		});

		$(document).on("click", "#onlineBank .radioBtn", function(){
			selectedBankID = $(this).attr("id");
			$("#hdnrtbtSelectedBankId").val(selectedBankID);
			selectedBankName = $(this).val();
			$("#hdnrtbtSelectedBankName").val(selectedBankName);
		});

   },
   //For RTBT Convert Currency section display based on FOP
   toggleConvertCurrencyHldr: function(){
      if (Payment.selectedFop != "payRTBT" && $("#onlineCurrencyConvertHldr").html() != ""){
            $("#onlineCurrencyConvertHldr").hide();
            $(".oneClickPaymentSection").show();
       }else if(Payment.selectedFop == "payRTBT" && $("#onlineCurrencyConvertHldr").html() != ""){
         $("#onlineCurrencyConvertHldr").show();
         $(".oneClickPaymentSection").hide();
       }
   },
   // Changes added for Acculynk : Start
   acculynkCardTemplateDisplay: function(){
	   if(Payment.selectedFop === "payCC" || Payment.selectedFop === "payGC"){
		   $("#creditCardType").html($("#_CreditCardType_template").render(msg));
		   $("#cardTypeLogo").html($("#_CreditCardTypeImage_template").render(msg));
		   $("[for='creditCardType']").text("*Payment Type");
		   if(Payment.selectedFop === "payCC"){
			   $(".cardLogos #AP,.cardLogos #UP, .cardLogos #UPB").hide();
			   $(".cardLogos").find("label[for=AP], label[for=UP], label[for=UPB]").hide();
			   $("#creditCardType option[value='AP'], #creditCardType option[value='UP'], #creditCardType option[value='UPB']").remove();
		   }else if(Payment.selectedFop === "payGC"){
			   if ($(".zeroAmountDueAdvisory").is(':visible') || msg.fopRule.alipay === "Disabled" || msg.fopRule.alipay === Payment.fopConstants.viewMore || msg.fopRule.alipay === Payment.fopConstants.notApplicable || (parseFloat(eDocUtils.eDocDataObj.remainingBal) <= 0 && parseFloat(totalSeatVal) <= 0)) {
					$(".cardLogos #AP").hide();
					$(".cardLogos").find("label[for=AP]").hide();
					$("#creditCardType option[value='AP']").remove();
				}
		   }
	   }else if(Payment.selectedFop === "payACCU"){
		   $("#creditCardType").html($("#_accuDebitCardType_template").render(msg));
		   $("#cardTypeLogo").html($("#_accuDebitCardTypeImage_template").render(msg));
		   $("[for='creditCardType']").text("*Select Card Type");
	   }else if(Payment.selectedFop === "payUN"){
		   $("#creditCardType").html($("#_unionPayCardType_template").render(msg));
		   //$("#cardTypeLogo").html($("#_unionPayCardTypeImage_template").render(msg));
		   $("[for='creditCardType']").text("*Choose credit or debit");
	   }
	   $("#creditCardType").trigger("change");
   },
   acculynkCheckBinCall : function(){
	   	var acculynkCardLength, payOptChange = "N" /*acculynkNineDigitNumber,*/;
		acculynkCardLength = Payment.acculynkCardNumber.length;
		if(msg.persistFormData){
			if(msg.persistFormData.cardType !== Payment.selectedCard || msg.persistFormData.payOpt !== Payment.selectedFop){
				payOptChange = "Y";
			}
		}
		if(Payment.acculynkCardNumber != "" && acculynkCardLength >= 13){
			if(Payment.isAcculynkCombinedCall === true){
				$.blockUI(blockUIOptions);
			}
			//acculynkNineDigitNumber = Payment.acculynkCardNumber.slice(0, 9);
			Payment.acculynkLastCardDigit = Payment.acculynkCardNumber.slice(-4);
			$.ajax({
				type: "POST",
				dataType: "Json",
				data: {acculynkCardNumber: Payment.acculynkCardNumber,
					   acculynkCardType: Payment.selectedCard,
					   payOptChange : payOptChange,
					   hdnSavedFopId: Payment.acculynkSavedFopId,
					   selectedFop : Payment.selectedFop,
					   "cacheKeySuffix": cacheKeySuffix
					   },
				url : 'AcculynkUnionPayCheckBinJSONAction',
				headers : {"cache-control" : "no-cache"},
				success: function(response) {
					if(response.pinEligibleInd !== undefined){
						Payment.acculynkCheckBinStatus = response.pinEligibleInd;
						Payment.acculynkInvalidPinErrorCount = response.sameCardNoCount;
						Payment.isAcculynkCheckBinCalled = true;
						Payment.acculynkPinpadFlag = response.acculynkPinpadFlag;
				    	$("#hdnPinEligibleInd").val(Payment.acculynkCheckBinStatus);
						if(Payment.acculynkCheckBinStatus === "N" && (Payment.selectedCard === "ATM" || Payment.selectedCard === "UP" || Payment.selectedCard === "UPB")){
							//$("#fopErrorMsg p").html("We're sorry. We can't process your " +Payment.acculynkCardName+ " card right now. Please select a different form of payment to continue or try again later.");
							//$("#fopErrorMsg").removeClass("hide");
							Payment.acculynkShowErrorMsgs("ACCU200");
						}else{
							if(Payment.acculynkInvalidThirdTime !== "Y"){
								Payment.removeFopErrorMsg();
							}
						}

						if(Payment.isAcculynkCombinedCall === true){
							/*if(Payment.acculynkPinpadFlag === "OFF"){
								Payment.acculynkDataRetention();
							}else{
								Payment.acculynkRetrivePinPadCall();
							}*/
							Payment.acculynkRetrivePinPadCall();
							Payment.isAcculynkCombinedCall = false;
						}

					}
				}/*,
				error: function(jqXHR, textStatus, errorThrown) {}*/
			}).fail(function(jqXHR, textStatus, error){
				try{
					delta.utils.logger.ajaxError(jqXHR, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
			});
		}else{
			Payment.acculynkCardNumber = "";
			Payment.acculynkLastCardDigit = "";
			Payment.acculynkCheckBinStatus = "";
			Payment.acculynkInvalidThirdTime = "N";
			Payment.isAcculynkCheckBinCalled = false;
		}
   },
   acculynkRetrivePinPadCall : function(){
	   if(Payment.acculynkCheckBinStatus === "Y" && Payment.acculynkInvalidPinErrorCount < 2){
	   if(Payment.isAcculynkCombinedCall !== true){
			$.blockUI(blockUIOptions);
	   }
	   /*if(Payment.acculynkCardNumber.indexOf("*")=== -1){
		   var acculynkMaskedCardNumber = this.acculynkCardMasking(Payment.acculynkCardNumber);
		   $("#notLogInAccNumber").val(acculynkMaskedCardNumber);
			   	$("#notLogInAccNumber").rules("remove", "emptyField");
				$("#notLogInAccNumber").rules("remove","validateCardNumber");
				$("#notLogInAccNumber").rules("remove","isNumeric");
				$("#notLogInAccNumber").rules("remove","validateCardNumberLeadingChars");
				$("#notLogInAccNumber").valid();
	   }*/
	   $("#cartPayment").submit();
	   /*$.ajax({
			type : "POST",
			url	: "AcculynkUnionPayRetrievePinPadJSONAction",
			dataType : "Json",
			data : {
			   		"cacheKeySuffix": cacheKeySuffix,
				acculynkCardNumber : Payment.acculynkCardNumber,
				acculynkCardType : Payment.selectedCard,
					pinEligibleInd : Payment.acculynkCheckBinStatus
			},
			headers : {"cache-control" : "no-cache"},
			success : function(response){
				$.unblockUI(blockUIOptions);
				if(response.globallyUniqueID !== undefined && response.exponent !== undefined && response.modulus !== undefined){
					if(Payment.acculynkPinpadFlag === "OFF"){
						if(response.acculynkReturnURL !== undefined){
					if(Acculynk.browserCheck()){
						Acculynk.createForm(response.globallyUniqueID, Payment.acculynkLastCardDigit, response.modulus, response.exponent, response.acculynkReturnURL);
		    			Acculynk.PINPadLoad();
					}
						}
					}else{
						if(Acculynk.browserCheck()){
							Acculynk.createForm(response.globallyUniqueID, Payment.acculynkLastCardDigit, response.modulus, response.exponent);
			    			Acculynk.PINPadLoad();
						}
					}
				}else{
						if(Payment.selectedCard === "ATM" || Payment.selectedCard === "UP" || Payment.selectedCard === "UPB"){
							//$("#fopErrorMsg p").html("We're sorry. We can't process your " +Payment.acculynkCardName+ " card right now. Please select a different form of payment to continue or try again later.");
							//$("#fopErrorMsg").removeClass("hide");
							Payment.acculynkShowErrorMsgs("ACCU200");
						}else{
							if(Payment.selectedFop === "payACCU"){
							Payment.selectedFop = "payCC";
							}
							$("#cartPayment").submit();
						}
				}
			},
			error : function(jqXHR, textStatus, errorThrown){}
		});*/
		}else if(Payment.acculynkCheckBinStatus === "Y" && Payment.acculynkInvalidPinErrorCount >= 2){
		   $.unblockUI(blockUIOptions);
		   //$("#fopErrorMsg p").html("We're sorry. We can't process your " +Payment.acculynkCardName+ " card right now. Please select a different form of payment to continue or try again later.");
		   //$("#fopErrorMsg").removeClass("hide");
		   Payment.acculynkShowErrorMsgs("ACCUPAYSECURE");
		   Payment.acculynkInvalidThirdTime = "Y";
	   }else{
		   if(Payment.selectedCard === "ATM" || Payment.selectedCard === "UP" || Payment.selectedCard === "UPB"){
			//$("#fopErrorMsg p").html("We're sorry. We can't process your " +Payment.acculynkCardName+ " card right now. Please select a different form of payment to continue or try again later.");
			//$("#fopErrorMsg").removeClass("hide");
			Payment.acculynkShowErrorMsgs("ACCU200");
			// For CPM -811
			$.unblockUI(blockUIOptions);
	   }else{
		   if(Payment.selectedFop === "payACCU" && (Payment.selectedCard === "VI" || Payment.selectedCard === "CA")){
			   Payment.selectedFop = "payCC";
		   }
		   $("#cartPayment").submit();
	   }
	   }
   },
	acculynkCardMasking: function(number){
		var fristCardDigits, maskString, maskedCardNumber;
	   fristCardDigits = number.slice(0, -4);
	   maskString = fristCardDigits.replace(/[0-9]/gi, "*");
	   maskedCardNumber = number.replace(fristCardDigits, maskString);
	   return maskedCardNumber;
   },
   /*acculynkDataRetention: function(){
	   var FOPFields = {};
	   if (CustomerInfo.isLoggedIn()) {
		   if (newPaymentAction == "Y") {
			   $("#hdnPaymentOprType").val("loggedInNewPayment");
		   } else if (editFOPAction == "Y" && addEditAddrAction == "Y") {
			   $("#hdnPaymentOprType").val("loggedInAddEditAddr");
		   } else if (editFOPAction == "Y" && addEditAddrAction != "Y") {
			   $("#hdnPaymentOprType").val("loggedInEditFOP");
		   } else {
			   $("#hdnPaymentOprType").val("loggedInPayment");
		   }
	   } else {
		   $("#hdnPaymentOprType").val("notLoggedInPayment");
	   }
	   //Setting value of hidden field payOpt to post to DataRetentionJSONAction
	   $("#hdnPayOpt").val(Payment.selectedFop);
	   $('#hdnTotalTripExtraPrice').val(tripExtraTotalAmount);
	   $("#hdnTotalSeatPricePayment").val(SeatUtils.totalSeatPrice);
	   if(!(msg.selectedPwm == "Y" || msg.edocSelectedInd == "Y" || msg.USOrCanadaFlight == false || msg.payWithMilesInd == "Y") && !msg.pricingDiscountTypeInd){
		   $("#hdnBestFareLogoShowingFlag").val("Y");
	   } else{
		   $("#hdnBestFareLogoShowingFlag").val("N");
	   }
	   $.each($("#cartPayment").serialize().split("&"),function(fieldIndx,fields){
		   var fieldsArr = fields.split("=");
		   if(fieldsArr[0] == "cvv"){
			   return true;
		   }
		   FOPFields[fieldsArr[0]] = fieldsArr[1];
	   });
	   if(msg.companionCert){
		   FOPFields.country = "US";
	   }
	   $.ajax({
	   		type: 'POST',
	           dataType: "json",
	           url: 'DataRetentionJSONAction',
	           headers : {"cache-control" : "no-cache"},
	           data: FOPFields,
	           success: function(data) {
	        	   Payment.acculynkRetrivePinPadCall();
	   		},
	   		error : function (xhr, ajaxOptions, thrownError) {
	   		}
	   });
   },*/
   acculynkShowErrorMsgs : function(errorCode){
	   acculynkErrorObject = {
		   //user pressed 'cancel' button so merchant may process as credit
		   "ACCU200": "We're sorry. We can't process your " +Payment.acculynkCardName+ " card right now. Please select a different form of payment to continue or try again later.",
		   //user was inactive
		   "ACCU400": "Your Session has expired. Please try again",
		   //invalid data was posted to Acculynk
		   "ACCU600": "We're sorry. We can't process your request right now.",
		   //general catch all error
		   "ACCU800": "We're sorry. We can't process your request right now.",
		   //new errors
		   "ACCU002": "We're sorry. We can't process your request right now.",
		   "ACCU004": "We're sorry. We can't process your request right now.",
		   "ACCU006": "We're sorry. We can't process your request right now.",
		   "ACCU008": "We're sorry. We can't process your request right now.",
		   "ACCUPAYSECURE": "We're sorry. Your PIN number is invalid. Please select a different form of payment to continue."
	   }
	   acculynkErrorMsg = acculynkErrorObject[errorCode];
	   $("#fopErrorMsg p").html(acculynkErrorMsg);
	   $("#fopErrorMsg").removeClass("hide");
	   $("#fopErrorMsg p").attr({role: "alert", tabindex: 0}).focus();
	   /*$("#notLogInExpMonth").closest('fieldset').find('legend').removeClass('errIcon');
	   $("#notLogInExpMonth").rules("remove", "validMonth");
	   $("#notLogInExpMonth").rules("remove","requiredMonthYear");
	   $("#notLogInExpMonth").rules("remove","expiredMonthYear");
	   $("#notLogInExpMonth").valid();*/
   },
   acculynkExpDateDisplay: function(){
	   if(Payment.selectedCard == "UP"){
			$(".expDateLabel").text("Expiration Date");
			/* Start Fix for 68502 */
			$(".expDateMonthLabel").text("Expiration Month");
			$(".expDateYearLabel").text("Expiration Year");
			
			$(".expDateMonthLabel1").text("Expiration Month");
			$(".expDateYearLabel1").text("Expiration Year");
			/* End Fix for 68502 */
		}else{
			$(".expDateLabel").text("*Expiration Date");
			/* Start Fix for 68502 */
			$(".expDateMonthLabel").text("*Expiration Month");
			$(".expDateYearLabel").text("*Expiration Year");
			
			$(".expDateMonthLabel1").text("*Expiration Month");
			$(".expDateYearLabel1").text("*Expiration Year");
			/* End Fix for 68502 */
		}
	   if(Payment.selectedCard == "ATM" || Payment.selectedCard == "UP"){
			$("#expMonthDropDown,#expYearDropDown").hide();
			if($("#expMonthDropDown,#expYearDropDown").hasClass("nextGenErrorText")){
				$("#expMonthDropDown,#expYearDropDown").removeClass("nextGenErrorText");
			}
			$("#expMonthDropDown select").attr({id:"notLogInExpMonth1",name:"expMonth1"});
			$("#expMonthDropDown label").attr("for", "notLogInExpMonth1");
			$("#expYearDropDown select").attr({id:"notLogInExpYear1",name:"expYear1"});
			$("#expYearDropDown label").attr("for", "notLogInExpYear1");

			$("#expMonthText,#expYearText").show();
			$("#expMonthText input").attr({id:"notLogInExpMonth",name:"expMonth"});
			$("#expMonthText label").attr("for", "notLogInExpMonth");
			$("#expYearText input").attr({id:"notLogInExpYear",name:"expYear"});
			$("#expYearText label").attr("for", "notLogInExpYear");
			/* Start Fix for 68502 */
			if(Payment.selectedCard == "UP"){
				$("#expMonthText input,#expYearText input").removeAttr("aria-required");
			}else{
				$("#expMonthText input,#expYearText input").attr("aria-required","true");
			}
			/* End Fix for 68502 */
		}else{
			$("#expMonthText,#expYearText").hide();
			if($("#expMonthText,#expYearText").hasClass("nextGenErrorText")){
				$("#expMonthText,#expYearText").removeClass("nextGenErrorText");
			}
			$("#expMonthText input").attr({id:"notLogInExpMonth1",name:"expMonth1"});
			$("#expMonthText label").attr("for", "notLogInExpMonth1");
			$("#expYearText input").attr({id:"notLogInExpYear1",name:"expYear1"});
			$("#expYearText label").attr("for", "notLogInExpYear1");

			$("#expMonthDropDown,#expYearDropDown").show();
			$("#expMonthDropDown select").attr({id:"notLogInExpMonth",name:"expMonth"});
			$("#expMonthDropDown label").attr("for", "notLogInExpMonth");
			$("#expYearDropDown select").attr({id:"notLogInExpYear",name:"expYear"});
			$("#expYearDropDown label").attr("for", "notLogInExpYear");
		}
	   /* For CPM-837 */
	   if(Payment.selectedCard == "UP"){
		   $("#expMonthText,#expYearText").hide();
		   $("#expMonthText").parent(".expDate").find(".expDateLabel").css("display", "none");//change for CPM-1023
	   }else{
		   $("#expMonthText").parent(".expDate").find(".expDateLabel").css("display", "block");//change for CPM-1023
	   }
	   if($(".expDate").find("span:visible").hasClass("nextGenErrorText")){
			$("[name=expYear]").valid();
	   }
	   if($.browser.msie == true){
		   $(".expDate").find("span.nextGenPlaceHolder").remove();
		   placeHolderForIE();
	   }
   },
   // Changes added for Acculynk : End
   renderPriceHeader: function(calculatedTotalPrice){
	   msg.secDisplayInfo.ItineraryDO.grandTotal = calculatedTotalPrice;
	   if(msg.MCflag){
           msg.totalCopayAllPassenger = calculatedTotalPrice;
       }
	   totalFinalAmountDue = calculatedTotalPrice;
	   $("#paymentHeaderPriceContainer").html($("#_payment_header_price_display_tmpl").render(msg));
	   flightUtil.reduceLargerCurFont();
        //Updates selected fop total amount to be paid in right rail section
        msg.totalFare.grandTotal = parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal).toFixed(flightUtil.currentPriceDecimalLength);
        $("#paymentAmountDueHolder").html($("#_payment_selected_fop_total_amount_tmpl").render(msg));
        flightUtil.reduceLargerCurFont();
         var amountToBePaid = (parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal) - parseFloat(eDocUtils.toatalAmountOfEdocUsed) + parseFloat(eDocUtils.totalResidualVoucherBalance)).toFixed(flightUtil.currentPriceDecimalLength);
         if(parseFloat(amountToBePaid) < 0){
        	 amountToBePaid = "0.00";
         }
         if(eDocUtils.eDocDataObj.giftCertExist){
        	 eDocUtils.eDocDataObj.remainingBal = amountToBePaid;
             $("#eGiftTotalSection").html($("#_egift_total_section_tmpl").render(eDocUtils.eDocDataObj));
			 //58477 gift to gift card copy change - needs to be moved to tmpl
			if($('#eGiftTotalSection .priceRow  .sheadsize') && $('#eGiftTotalSection .priceRow  .sheadsize').text()==='Gift') $('#eGiftTotalSection .priceRow  .sheadsize').text('Gift Card');

             flightUtil.reduceLargerCurFont();
             $("#eGiftTotalSection").removeClass('hide');
             $("#eGiftTotalSection .giftCardAmountDue").css("padding-top",$("#eGiftFOPSection").height()+ 40);
         }
         else if(!eDocUtils.removeTravelVoucher && msg.edocSelectedInd == "Y" && undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECredit == true && msg.edocumentDetailList[0].giftCert == false){
             eDocUtils.eDocDataObj.remainingBal = amountToBePaid;
             eDocUtils.eDocDataObj.currCode = msg.currCode;
			 eDocUtils.eDocDataObj.currencySymbol = msg.currencySymbol;
             $("#eDocAmountDueSection").html($("#_egift_total_section_tmpl").render(eDocUtils.eDocDataObj));
			 //58477 gift to gift card copy change - needs to be moved to tmpl
			 if($('#eGiftTotalSection .priceRow  .sheadsize') && $('#eGiftTotalSection .priceRow  .sheadsize').text()==='Gift') $('#eGiftTotalSection .priceRow  .sheadsize').text('Gift Card');

             flightUtil.reduceLargerCurFont();
             $("#eDocAmountDueSection").removeClass('hide');
             $("#paymentAmountDueHolder .sameLine:first").addClass("hide");
         }
         /*if(!parseInt(Number(eDocUtils.totalRemainingVoucherBalance))){
	    	   $("#eDocAmountDueSection").find(".totalRemainingBalanceDiv").css("padding-top","0");
	     }*/
         //Updates total amount to be paid in right rail section
         msg.totalFare.grandTotal = amountToBePaid;
         if(msg.edocSelectedInd == "Y" && undefined != msg.edocumentDetailList[0] && msg.edocumentDetailList[0].ECredit == true){
        	 $("#paymentTotalAmountSection").html($("#_payment_total_amount_edoc_tmpl").render(eDocUtils.eDocDataObj));
         }else{
         $("#paymentTotalAmountSection").html($("#_payment_total_amount_tmpl").render(msg));
         flightUtil.reduceLargerCurFont();
         }

   },
   performAmexRules: function() {
         if(msg.amexApprovedInd && msg.amexCCMailOptionSelected){
         if (msg.loggedInInd != null && msg.loggedInInd == "Y") {
            $("#useStoredCard").click();
            $("#paySAE").closest(".cardRowBlock").find(".CardImageContainer img").click();
            $("#cardDetailWrap").hide();
            $("#loggedInPaxInfo").hide();
            $("#cardFromProfile").parent().hide();
            $("#useStoredCard").parent().hide();
            $("#billingAddressHolder").hide();
            if (msg.edocSelectedInd != "Y") {
               $(".amexEnrollEcertHldr").removeClass("hideme");
            }
            $(".useCertificates").addClass("hideme");
            $(".reviewPurchaseAmexEnrolled").show();
            $("#hdnAmexApplInd").val("Y");
            $("#billPayment").removeClass("loggedInAmexAdjust");
         } else {
            $("#paySAE").closest(".cardRowBlock").find(".CardImageContainer img").click();
            $("#cardDetailWrap").hide();
            $("#billingAddressHolder").hide();
            if (msg.edocSelectedInd != "Y") {
               $(".amexEnrollEcertHldr").removeClass("hideme");
            }
            $(".useCertificates").addClass("hideme");
            //$("#paxNameholder").hide();
            $("#paxNameholder #paymentCardWrap #cardDetailWrap").hide();
            $("#paxNameholder > .labelContainer").hide();
            $(".reviewPurchaseAmexEnrolled").show();
            $("#hdnAmexApplInd").val("Y");
         }
         var cardNumber = $(".reviewPurchaseAmexEnrolled .amexAprCardNumber").text().replace(/S/gi, "*");
         var cvvNumber = $(".reviewPurchaseAmexEnrolled .amexAprCardCVV").text().replace(/S/gi, "*");
         $(".reviewPurchaseAmexEnrolled .amexAprCardNumber").text(cardNumber);
         $(".reviewPurchaseAmexEnrolled .amexAprCardCVV").text(cvvNumber);
            $("#cardInfoHldr, #cardPrintNameHldr, #billingContainerWrapper").hide();
         }
         // common for amex
         var totalStmntCredit = parseFloat(msg.amexStmntCredit);
         if (totalStmntCredit < 0) {
            totalStmntCredit = 0.00
         }
         var totalAfterStmntCredit = parseFloat(msg.secDisplayInfo.ItineraryDO.grandTotal) - parseFloat(msg.amexStmntCredit);
         if (totalAfterStmntCredit < 0) {
            totalAfterStmntCredit = 0.00
         }
         $("#amexConfStmtCredit .txtInteger").text(flightUtil.formatNumber(totalCalculationUtility.integerPart(totalStmntCredit.toFixed(flightUtil.currentPriceDecimalLength))));
         $("#amexConfStmtCredit .txtDecimal").text(flightUtil.formatNumber(totalCalculationUtility.decimalPart(totalStmntCredit.toFixed(flightUtil.currentPriceDecimalLength))));
         $("#amexConfPriceTotals .txtInteger").text(flightUtil.formatNumber(totalCalculationUtility.integerPart(totalAfterStmntCredit.toFixed(flightUtil.currentPriceDecimalLength))));
         $("#amexConfPriceTotals .txtDecimal").text(flightUtil.formatNumber(totalCalculationUtility.decimalPart(totalAfterStmntCredit.toFixed(flightUtil.currentPriceDecimalLength))));
   },
   persistFormData: function( msg ){
	   if (msg.persistFormData != null) {
		   var expYearId = "",
	         expMonthID = "";
//	         if (msg.persistFormData.insurancePurchase) {
//	            if (msg.persistFormData.insurancePurchase == "Y") {
//	               $("#radio_yes").attr("checked", "checked").click();
//	            } else if (msg.persistFormData.insurancePurchase == "N") {
//	               $("#radio_no").attr("checked", "checked").click();
//	            }
//	         }
	         if (!msg.persistFormData.selectedFOPId) {
	            $("#useStoredCard").trigger("click");
	            if (msg.persistFormData.payOpt != null && msg.persistFormData.payOpt != undefined) {
	               if (!msg.amexApprovedInd) {
	                  $("#" + msg.persistFormData.payOpt).trigger("click");
	               }
	            }
	            if (msg.persistFormData.cardType != null) {
	               $("#creditCardType").val(msg.persistFormData.cardType).trigger("change");
	            }
	            expYearId = "#notLogInExpYear";
	            expMonthID = "#notLogInExpMonth";
	            if (msg.persistFormData.cardNumber != null) {
	               $("#notLogInAccNumber").val(msg.persistFormData.cardNumber.replace(/S/gi, "*"));
	            }
                    $(expYearId).val(msg.persistFormData.expYear);
                    $(expMonthID).val(msg.persistFormData.expMonth);
	         } else {
	            // selected from saved cards
	            $("#storedCCList").val(msg.persistFormData.cardType + "_" + msg.persistFormData.selectedFOPId).trigger("change");
	            persistFormDone = true;
	         }
	         // for both saved cards and add new card
	         if (msg.persistFormData.firstName != null) {
	            $("#notLogInFirstName").val(msg.persistFormData.firstName);
	         }
	         if (msg.persistFormData.lastName != null) {
	            $("#notLogInLastName").val(msg.persistFormData.lastName);
	         }
	         // for both saved cards and add new card

	         if (!msg.persistFormData.selectedAddrId) {
	            $("#biling_radio-new").trigger("click");
	            $("#countryCode").val(msg.persistFormData.country);
	            $("#addr1").val(flightUtil.htmlSymbolParse(msg.persistFormData.addressLine1));
	            $("#addr2").val(msg.persistFormData.addressLine2);
	            $("#districtTownVillage").val(msg.persistFormData.districtTownVillage);
	            $("#cityCountyWard").val(msg.persistFormData.city);
	            $("#areaTerritoryPrefecture").val(msg.persistFormData.areaTerritoryPrefecture);
	            $("#postal").val(msg.persistFormData.zipCode);
	            $("#stateProv").val(msg.persistFormData.state);

	         } else {
	            // selected from saved address
	            if (msg.persistFormData.selectedAddrId != "") {
	               $("#billing_address-fields").val(msg.persistFormData.selectedAddrId);
	            }
	         }
//	         if (msg.shopType != "Award") {
//	            if (msg.edocumentDetailList[0] != undefined && msg.edocumentDetailList[0].documentInfo.ticketDesignator.indexOf("NN") == 0) {
//	               $("#countryCode").attr("disabled", "disabled");
//	               $(".compCertCountMsg").show();
//	               $(".areaTerritoryPrefecture-wrapper,.district-wrapper").hide();
//	               $("#countryCode option[value='US']").attr("selected", true);
//	               $("#hdnCntryCd").val($("#countryCode").val());
//	            }
//	         }
	      }
   },
   requestUpgrade: function(msg) {
	   /* calling UpgradeRequestJSONAction */
	   if (null != msg.requestUpgrade && msg.requestUpgrade == "Y") {
	         $.ajax({
	            type : 'POST',
	            dataType : "json",
	            data : {
	               "cacheKeySuffix" : cacheKeySuffix,
	               basicEcoUpgrdInd : msg.basicEcoUpgrdInd,
	               reviewPgInd : true
	            },
	            url : 'UpgradeRequestJSONAction',
	            headers : {
	               "cache-control" : "no-cache"
	            },
	            success : function (upgAjaRes) {
	            	$.each(msg.secDisplayInfo.ItineraryDO.slices,  function (slicesIndex, sliceData){

	            		$.each(sliceData.cabinInfo,  function (index, cabin){
	            			if(cabin.cabinName == "First" || cabin.cabinName == "Business" || cabin.cabinName.indexOf("Delta One") == 0){
	            				sliceData.hideUpgradeLink = true;
	            			}else{
	            				sliceData.hideUpgradeLink = false;
	            			}
		            	});
		            	
	            		$.each(sliceData.upgradeElgList,  function (upgradeElgListIndex, upgradeElgListData){
	            			$.each(upgAjaRes.upgradeRequestDataMap,  function (upgradeRequestDataMapIndex, upgradeRequestDataMapData){
		            			if(upgradeRequestDataMapIndex == upgradeElgListData.fltNbr){
		            				upgradeElgListData.upgradeRequestDesc = upgradeRequestDataMapData;
		            				if(upgradeElgListData.upgradeRequestDesc.indexOf(":")){
		            					var upgradeRequestDesc = upgradeElgListData.upgradeRequestDesc.split(":");
		            					upgradeElgListData.upgradeRequestDesc = upgradeRequestDesc;
		            					//Fix for defect #55232
		            					upgradeElgListData.otherAirlineFlightPresent = (upgradeRequestDesc[upgradeRequestDesc.length - 2] == "Y")?true:false;
		            					upgradeElgListData.internationalFlight = (upgradeRequestDesc[upgradeRequestDesc.length - 1] == "Y")?true:false;
		            				}

		            			}
		            		});
	            		});
	            		var checkSliceNumber = slicesIndex+1;
	            		if(!sliceData.hideUpgradeLink){
	            		$("#showViewUpgradeElg_"+checkSliceNumber).html($("#_flight_view_upgrade_eligible_display").render(sliceData));
	            			$("#showViewUpgradeElg_"+checkSliceNumber).parent(".rowLink").removeClass("oneLine");
	            		}
	               });
	            }/*,
	            error: function(jqXHR, textStatus, errorThrown) {}*/
	         }).fail(function(jqXHR, textStatus, error){
				try{
					delta.utils.logger.ajaxError(jqXHR, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
			});
	      }
   },
		populateSavedFOP : function(ccTypeAddrId,msgData){
			var ccType = ccTypeAddrId.split("_")[0];
			var addrId = msgData.addressIdMap[ccTypeAddrId];
			var ccDesc = "";
			for(var i=0;i<msgData.creditPaymentList.length; i++){
				if(msgData.creditPaymentList[i].type == ccType){
					ccDesc = msgData.creditPaymentList[i].cardDesc;
					break;
				}
			}
			//$("#accountAlias").val(msgData.acctAliasMap[ccTypeAddrId]);
			$("#notLogInFirstName").val(msgData.nameOnFOPMap[ccTypeAddrId].split("*")[0]);
			$("#notLogInLastName").val(msgData.nameOnFOPMap[ccTypeAddrId].split("*")[1]);
			$("#notLogInExpMonth").val(msgData.expDateMap[ccTypeAddrId].match(/\d{2}/)[0]);
			$("#notLogInExpYear").val(msgData.expDateMap[ccTypeAddrId].match(/\d{4}/)[0]);
			$("#notLogInAccNumber").val(msgData.savedFOPMap[ccTypeAddrId].split(",")[1]);
			//$("#displayCardType").html(ccDesc+" Instant Account");
			//$("#cardDescription").html(ccDesc+" Instant Account");
			//$("#addrAlias").val(addrId);
			placeHolderForIE();
		},
		/* fix for enhancement CPM-656 start */
                //change for CPM-882
		detectCardType : function(number) {
		    if(/^4[0-9]{0,}$/.test(number)){
		    	return "VI";
		    }else if(/^1[0-9]{0,}$/.test(number)){
		    	return "TP";
		    }else if(/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/.test(number)){
		    	return "CA";
		    }else if(/^3[47][0-9]{0,}$/.test(number)){
		    	return "AX";
		    }else if(/^3([0689])[0-9]{0,}$/.test(number)){
		    	return "DC";
		    }/*else if(/^3(?:0[0-59]{1}|[689])[0-9]{0,}$/.test(number)){
		    	return "DC";
		    }else if(/^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$/.test(number)){
		    	return "DS";
		    }*/else if(/^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$/.test(number)){
		    	return "DS";
		    }/*else if(/^(?:2131|1800|35)[0-9]{0,}$/.test(number)){
		    	return "JC";
		    }*/else if(/^(35)[0-9]{0,}$/.test(number)){
		    	return "JC";
			    }
		    
		},
		/* fix for enhancement CPM-656 end */
		/* Fix for enhancement CPM-720 payment page UI change for card section start */
		selectedCardIcon : function(selectedCard) {
			document.getElementById("notLogInAccNumber").className = "nameField glance_masked autoSelectedCard floatLeft";
			document.getElementById("notLogInAccNumber").removeAttribute("style");
			switch(selectedCard){
			case "SM":
				document.getElementById("notLogInAccNumber").className += ' SM';//.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.SM+") !important";
				//$("#creditCardType").val("SM").trigger("change");
			break;
			case "AX":
				document.getElementById("notLogInAccNumber").className += ' AX';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.AX+") !important";
				//$("#creditCardType").val("AX").trigger("change");
			break;
			case "VI":
				document.getElementById("notLogInAccNumber").className += ' VI';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.VI+") !important";
				//$("#creditCardType").val("VI").trigger("change");
			break;
			case "CA":
				document.getElementById("notLogInAccNumber").className += ' CA';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.CA+") !important";
				//$("#creditCardType").val("CA").trigger("change");
			break;
			case "DC":
				document.getElementById("notLogInAccNumber").className += ' DC';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.DC+") !important";
				//$("#creditCardType").val("DC").trigger("change");
			break;
			case "DS":
				document.getElementById("notLogInAccNumber").className += ' DS';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.DS+") !important";
				//$("#creditCardType").val("DS").trigger("change");
			break;
			case "JC":
				document.getElementById("notLogInAccNumber").className += ' JC';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.JC+") !important";
				//$("#creditCardType").val("JC").trigger("change");
			break;
			case "TP":
				document.getElementById("notLogInAccNumber").className += ' TP';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.TP+") !important";
				//$("#creditCardType").val("TP").trigger("change");
			break;
			case "ATM":
				document.getElementById("notLogInAccNumber").className += ' ATM';//style.cssText = "background-image:url("+msg.hyperLinkHostName+msg.walletCardImgUrl.ATM+") !important";
				//$("#creditCardType").val("ATM").trigger("change");
			break;
			default:
				document.getElementById("notLogInAccNumber").style.cssText = "text-indent:0;background-image:none !important";
				$("#creditCardType").val("AX").trigger("change");
			}
		},
		/* Fix for enhancement CPM-720 payment page UI change for card section end */
		handleExpiredFOP: function(selectedVal){
			$(".expFopError").remove();
			var date = new Date();
			var currentMonth = "0"+(date.getMonth() + 1);
			var currentYear = date.getFullYear();
			var expiryMonth = selectedVal.split("/")[0];
			var expiryYear = selectedVal.split("/")[1];
			var populateExpYearDropdown = msg.expYears.split(",");
			var savedExpYearArr = [];
			if(populateExpYearDropdown && !$.isEmptyObject(populateExpYearDropdown)) {
				$.each(populateExpYearDropdown, function(index,value){
					savedExpYearArr.push({"index":index,"year":value});
				});
			}
			savedExpYearArr.pop();
			msg.expYearList = savedExpYearArr;
			if((parseInt(currentYear) > parseInt(expiryYear)) || ((parseInt(currentYear) == parseInt(expiryYear)) && (parseInt(currentMonth) > parseInt(expiryMonth)))){
				$(".cardSelectionRow .securityCodeWrapper label").hide();
				//removing the loggedin hidden value from the form
				if($("#hdnExpYear").length > 0 ) {
					$("#hdnExpYear").hide();
				}
				if($("#hdnExpMonth").length > 0 ) {
					$("#hdnExpMonth").hide();
				}
				if($("#securityCode").length > 0 ) {
					$("#securityCode").hide();
				}

				$("#expiredFopContainer").html($("#_one_click_expired_fop_tmpl").render(msg)); // call the expired FOP template
				//var selectedTextObj = $("#storedCCList").parent().find('.styledSelect');
				$("select").selectmenu({
			        change: function(event, ui) {
			            $(this).trigger('change');
			        },
			        create: function( event, ui ) {
			                $(this).addClass('custom-select');
			        }
			    });
				var selectedTextObj = $("#storedCCList").next("span").find(".ui-selectmenu-text");
				/*if(selectedTextObj.length == 0) {
					$("#storedCCList").after("<div class='styledSelect'>"+$("#storedCCList option:selected").html()+"</div>");
					selectedTextObj = $("#storedCCList").parent().find('.styledSelect');
				}else{
					selectedTextObj.html($("#storedCCList option:selected").html());
				}*/

				var classname =  " class = 'expFopError expiredCardText'",
				    tag = 'span',
			        regex = RegExp([selectedVal].join('|'), 'gi'),
			        replacement = '<'+ tag + classname +'>$&</'+ tag +'>';
				var html = selectedTextObj.html();
				var newHTML = html.replace(regex, replacement);
				selectedTextObj.html(newHTML);
				//$("#storedCCList").parent().after("<span class='expFopError'>This card is expired. Please update your card info below.</span>");
				$("label[for=storedCCList]").before("<div class='expFopError backEnderrorMsgWrapper'>This card is expired. Please update your card info below.</div>");
				$("#hdnIsExpiredCard").val("Y");
				if($("#placeHolder_securityCode").length > 0){
					$("#placeHolder_securityCode").hide();
				}

			}else{
				$("#expiredFopContainer").html("");
				$(".cardSelectionRow .securityCodeWrapper").show();
				$("#storedCCList").parent().siblings(".expFopError").remove();
				if($("#securityCode").length > 0 ) {
					$("#securityCode").show();
				}
				if($('.styledSelect').length > 0 ){
					$('.styledSelect').remove();
				}
				$("#hdnIsExpiredCard").val("N");
				//$("label").show();
				$(".cardSelectionRow .securityCodeWrapper label").show();
			}
		},
		populateSavedAddress : function(addrId,msgData){
			if(!$("#editBillAddress").hasClass("disable")){
				if(msg.addressMap != null && msg.addressMap != undefined && !$.isEmptyObject(msg.addressMap)) {
					var address = msg.addressMap[addrId];
					if(undefined !== address){
						Payment.loggedInAddress = msg.addressMap[addrId]; // Fix for defect 61841
						//$("#addrAliasInput").val(msg.addressAliasMap[addrId]); // ALIAS to be mapped latter
						$("#postal").val(address.addressLine9).blur();
						$("#countryCode").val(address.addressLine8).change().blur();
						//$("#stateProv").val(address.addressLine7).blur(); // Fix for defect 61841
						$("#addr2").val(address.addressLine2).blur();
						$("#addr1").val(address.addressLine1).blur();
						$("#cityCountyWard").val(address.addressLine4).blur();
						$("#errorSavedAddressFopMsg").html("");
						$("#addrAlias").parent().removeClass("nextGenErrorText");
					}
				}
				$("#hdnAddIds").val(addrId);
				placeHolderForIE();
			}
		},
		displayConcatAddr : function(addressMap, addrId) {
			if(addressMap != null && addressMap != undefined && !$.isEmptyObject(addressMap)) {
			$("#displaySelectedAddress").html(addressMap[addrId].addressLine1+", "
					 +((newPaymentAction == "Y")?"":"<br />")
					 +((addressMap[addrId].addressLine4)?addressMap[addrId].addressLine4+", ":"")
					 +((addressMap[addrId].addressLine7)?(addressMap[addrId].addressLine7+", "):"")
					 +((addressMap[addrId].addressLine8)?(addressMap[addrId].addressLine8+", "):"")
					 +((addressMap[addrId].addressLine9)?(addressMap[addrId].addressLine9):""));
			}
		//this.populateSavedAddress(addrId, msg);
		},
		loadCheckOutSec : function(msg){
			if(msg.loggedInInd && msg.loggedInInd == "Y"){
			this.loadLoggedInTemplate(msg);
			}
		//this.persistCheckOutsData(msg);
			placeHolderForIE();
		},
		loadNotLoggedInTemplate : function(msgRes){
			var expYearsList = msg.expYears.split(",");
			msg.expYearsList = expYearsList;
			var savedFopLength = 0;
			if(msg.savedFOPList){
				savedFopLength = msg.savedFOPList.length;
			}
			/* start fix for CPM-610 */
			msg.visacardPresent = false;
			msg.masterCardPresent = false;
			if(msg.creditPaymentList != undefined && msg.creditPaymentList != null && msg.creditPaymentList.length) {
		          $.each(msg.creditPaymentList, function (i, card) {
		        	  if(card.type == "VI"){
		        		  msg.visacardPresent = true;
		        	  }else if(card.type == "CA"||card.type == "MC"){
		        		  msg.masterCardPresent = true;
		        	  }
		          });
			}
			/* end fix for CPM-610 */
			msg.savedFopLength = savedFopLength;
			$("#billPayment").html($("#_not_loggedIn_payment_card_section").render(msg));
			
			if(msg.amexExpCkoEnabled){
					if(Payment.selectedFop == "payCC") {
						$("#amexExpressCko").detach().insertBefore('.cardSeparator');
						if($("#billPayment p.doubleMilesContainer").is(":visible")){
							$("#amex-express-checkout").css("top","57px");
						}else{
							$("#amex-express-checkout").css("top","28px");
						}
					}else{
						$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
						if($("#billPayment p.doubleMilesContainer").is(":visible")){
							if(Payment.selectedFop == "payCC"){
								$("#amex-express-checkout").css("top","56px");
							}else{
								$("#amex-express-checkout").css("top","146px");
							}
						}else{
							$("#amex-express-checkout").css("top","117px");
						}
					}
			}
			// Changes added for Acculynk : Start
			$("#creditCardType").html($("#_CreditCardType_template").render(msg));
			$("#cardTypeLogo").html($("#_CreditCardTypeImage_template").render(msg));
			// Changes added for Acculynk : End
			//For RTBT
			$("#onlineBankHldr").hide();
			if(msg.rtbtDetailList !== null && msg.rtbtDetailList !== undefined){
				$("#onlineCountry").append($("#_online_country_template").render(msg.rtbtDetailList));
	        }
		//$("#commonPriceDisp").html($("#_upsell_common_total_price_display").render(msgRes.upsellProduct));
		    //$("#cartPayment").removeAttr("novalidate");
			 //For logged in user having no saved FOP
			if( newPaymentAction=="Y" ){
				$("#billingAddressContainer").html($("#_payment_loggedin_billing_address").render(msgRes));
				if(msgRes.emailDOList && !$.isEmptyObject(msgRes.emailDOList)){
				$("#emailContainer").html($("#_loggedin_saved_email_display").render(msgRes));
				} else {
					addEmailOpr = "Y";
					//$("#countryCode").val("US").change();
					$("#countryCode").val("US").trigger("change");
				}
			}
			else {
				//$("#countryCode").val("US").change();
				$("#countryCode").val("US").trigger("change");
			//$("#countryCode").trigger("change");
			}
			
			$(".cardLogos").find("input:eq(0)").prop("checked",true);
			$(".card-logo").eq(0).removeClass("active").addClass("active");
			var cardType = $("#creditCardType").val();
			if($(Payment.data.creditPaymentList).searchValueinObj(cardType) || (Payment.data.unionpayPaymentList && $(Payment.data.unionpayPaymentList).searchValueinObj(cardType))){
			if(cardType == "TP" || cardType == "ATM" || cardType == "UP" || cardType == "AP"){
				$(".CVVHolder").hide();
				$("#cvv").val("");
			}else{
				$(".CVVHolder").show();
			}
			}

			/* For CPM - 762 */
			
			if($(".VBVHolder").length > 0){
				$(".VBVHolder").hide();
				$(".paymentLearnMore").hide();
				if(cardType == "VI" || (msg.creditPaymentList != undefined && msg.creditPaymentList != null && $(msg.creditPaymentList).searchValueinObj("VI") && msg.creditPaymentList.length == 1)){
					if(Payment.selectedFop == "payCC"){
						$("#VBVisa2").show();
						$("#VBVisaLearnMore2").show();
					}else{
						$("#VBVisa").show();
						$("#VBVisaLearnMore").show();
					}
				} 
			}
			
			/* For CPM - 762 */
			
			if($.inArray(Payment.selectedFop, Payment.doubleMilesPromotionFops) != -1){
				$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
				// Start Fix for Union Pay advisory message getting removed CPM - 787 
				if(Payment.selectedFop == "payUN"){
					$("#billPayment p.doubleMilesContainer").html("<span class='aria-offscreen'>Information</span>If your UnionPay card has an Amex, Visa, or MasterCard logo, please choose the Credit Card tab to make your purchase.");
				}else if(Payment.selectedFop == "payAP"){
					$("#billPayment p.doubleMilesContainer").html("<span class='aria-offscreen'>Information</span>You will be redirected to AliPay to complete your purchase. This third-party website may not be fully accessible for customers with disabilities.");
				}
				/* End Fix for CPM - 787 */
			}else{
				$("#billPayment p.doubleMilesContainer").addClass("dmNoIcon").hide();
			}
			
			if(Payment.selectedFop !== "payCC"){
				$("#notLogInAccNumber").parent().removeClass("accNumber");
			}else{
				$("#notLogInAccNumber").parent().addClass("accNumber");
			}

			// Changes added for Acculynk : End
			/*--------------------------------------------------*/
			if(!msgRes.persistFormData){
				$("#notLogInAccNumber,#cvv").val("");
			}
			placeHolderForIE();

			// Defect 57528(CPM 408) fix start
			var country_language = CookieUtils.get('pref');
			if(!country_language){
				country_language = 'en-us';
			}
			var strCountry = country_language.split('-')[1];
			if(strCountry != undefined && ("us" == strCountry || "US" == strCountry) && msg.USOrginFlight){
				if($("#updateProfileInd").length){
					$("#updateProfileInd").prop("checked", true);
					$(".lblSaveInfo").html("Store my card & use for Express Checkout");
				}
			}
			/* fix for CPM-631 */
			if(msg.saveToWalletEligible == "N"){
				$("#saveToProfileWrapper").hide();
			}
			
			$("select").selectmenu({
		        change: function(event, ui) {
		            $(this).trigger('change');
		        },
		        create: function( event, ui ) {
		                $(this).addClass('custom-select');
		                $("#stateProvWrapper").find("label").attr("id","stateProv_label");
		        }
		    });
			// Defect 57528(CPM 408) fix end
		},
		loadLoggedInTemplate : function(msgRes){
			if( (msg.savedFOPInd != null && msg.savedFOPInd == "Y") && (msg.addressIdMap && !$.isEmptyObject(msg.addressIdMap))) {
     	    	$("#billPayment").html($("#_loggedIn_payment_section").render(msg));
     	    	$("select").selectmenu({
			        change: function(event, ui) {
			            $(this).trigger('change');
			        },
			        create: function( event, ui ) {
			                $(this).addClass('custom-select');
			        }
			    });
     	    	//Payment.displayCardImage($("#storedCCList option:first").val().split("_")[0],msg);
     	    	//Payment.handleExpiredFOP($("#storedCCList option:selected").text().split(",")[2]);
				//$("#emailContainer").html($("#_loggedin_saved_email_display").render(msg));
				$("input[name=payOpt][value=payWL]").prop('checked', true);
				Payment.selectedFop = "payWL";
				if($("#storedCCList").length > 0){
					$("#storedCCList").trigger("change");
					/*var selectedCard = $("#storedCCList").val();
					var ccType = selectedCard.split("_")[0];
					if(ccType == "TP"){
						$(".securityCodeWrapper, .securityCodeBox").hide();
					} else {
						$(".securityCodeWrapper, .securityCodeBox").show();
					}*/
					//$("#hdnSavedFopId").val(msg.fopIdMap[selectedCard]);
				}
				var addressMap = msg.addressMap;
				if(addressMap != null && addressMap != undefined && !$.isEmptyObject(addressMap)) {
					if($(addressMap).objLength) {
						for (addrId in addressMap) {
							var primaryAddress = addressMap[addrId];
							$("#hdnCountryCode").val(primaryAddress.addressLine8);
							break;
						}
					}
				}
				newPaymentAction = "N";
				if(msg.addNewCardToWalletFlag != undefined && msg.addNewCardToWalletFlag == "Y"){
					$('.newPaymentLink').click();
					$("html, body").animate({ scrollTop: $('#billingAddressContainer').offset().top }, 1000);
    			}else{
					$("#amex-express-checkout,#amexCKOErrorMsg").hide();
				}
				stateListJSONComplete = true;
				$(Payment).trigger("ajaxCompleteCko");
			} else {
				newPaymentAction = "Y";
			this.loadNotLoggedInTemplate(msg);
				$("#hdnSavedFopId").val("");
				if(msg.addressIdMap && !$.isEmptyObject(msg.addressIdMap)){
					$("#addrAlias").change();
				}
			}
			$("select").selectmenu({
		        change: function(event, ui) {
		            $(this).trigger('change');
		        },
		        create: function( event, ui ) {
		                $(this).addClass('custom-select');
		        }
		    });
		},
		persistCheckOutsData : function(msgRes){
			if(msgRes.persistFormData) {
				var persistFormData = msgRes.persistFormData;
			//Changes added for Acculynk : Start
			if(persistFormData.fopSelectedTab){
			if(persistFormData.fopSelectedTab === "tabCC"){
 				$("#payCC").prop("checked", true);
 				$(".fopTypes input[type='radio']").next("span").removeClass("labelTxtSelected");
 				$("#payCC").next('span').addClass('labelTxtSelected');
 				$("#payCC").trigger("click");
 			}else if(persistFormData.fopSelectedTab === "tabACCU"){
 				$("#payACCU").prop("checked", true);
 				$(".fopTypes input[type='radio']").next("span").removeClass("labelTxtSelected");
 				$("#payACCU").next('span').addClass('labelTxtSelected');
 				$("#payACCU").trigger("click");
 			}else if(persistFormData.fopSelectedTab === "tabWL"){
 				$("#payWL").prop("checked", true);
 				$(".fopTypes input[type='radio']").next("span").removeClass("labelTxtSelected");
 				$("#payWL").next('span').addClass('labelTxtSelected');
 				$("#payWL").trigger("click");
 			}else if(persistFormData.fopSelectedTab === "tabGC"){
 				$("#payGC").prop("checked", true);
 				$(".fopTypes input[type='radio']").next("span").removeClass("labelTxtSelected");
 				$("#payGC").next('span').addClass('labelTxtSelected');
 				$("#payGC").trigger("click");
 			}else if(persistFormData.fopSelectedTab === "tabUN"){
 				$("#payUN").prop("checked", true);
 				$(".fopTypes input[type='radio']").next("span").removeClass("labelTxtSelected");
 				$("#payUN").next('span').addClass('labelTxtSelected');
				$(".viewMoreLink").trigger("click");
 				$("#payUN").trigger("click");
 			}
				$("#hdnFopSelectedTab").val(persistFormData.fopSelectedTab);
			}
			//Changes added for Acculynk : End
			if(persistFormData.cardNumber) {
				persistFormData.cardNumber = (persistFormData.cardNumber).replace(/S/gi, "*");
			}
			if( persistFormData.paymentOprType == "notLoggedInPayment" ){ // Not Logged in customer
				if($("#creditCardType").is(':visible')){
					$("#creditCardType").val(persistFormData.cardType).trigger("change");
				}
				$("#notLogInAccNumber").val(persistFormData.cardNumber);
				$("#notLogInExpMonth").val(persistFormData.expMonth);
				$("#notLogInExpYear").val(persistFormData.expYear);
				$("#notLogInFirstName").val(persistFormData.firstName);
				$("#notLogInLastName").val(persistFormData.lastName);
                $("#countryCode").val(persistFormData.country).change();
				$("#addr1").val(flightUtil.htmlSymbolParse(persistFormData.addressLine1));
				$("#addr2").val(persistFormData.addressLine2);
				$("#cityCountyWard").val(persistFormData.city);
				$("#stateProv").val(persistFormData.state);
				$("#postal").val(persistFormData.zipCode);
			} else if( persistFormData.paymentOprType == "loggedInNewPayment" ){ // Use new payment - normal
				// Fix for Amex Express Checkout error/success display in case of Add new form of payment from Wallet tab
				// amexExpCkoInd will be true on first time page load after successful amex interaction only
				if(msgRes.amexExpCkoInd && msgRes.amexExpCkoData.success === false){
					$(".newPaymentLink").click();
				}/*else if(!msgRes.amexExpCkoInd){ // Fix for Defect #63345
					$(".newPaymentLink").click();
				}*/
				/*  fix for #64264 */
				else if(!msg.amexExpCkoInd && Payment.selectedFop!="payGC" && (msg.fareChangeInd !== undefined && msg.fareChangeInd == "Y")){
					if($('.newPaymentLink').length > 0){
						$('.newPaymentLink').click();
					}else{
						$('.noSavedFOPLink a').click();
					}
				}
				if($("#creditCardType").is(':visible')){
					$("#creditCardType").val(persistFormData.cardType).change();
				}
				$("#notLogInAccNumber").val(persistFormData.cardNumber);
				$("#notLogInExpMonth").val(persistFormData.expMonth);
				$("#notLogInExpYear").val(persistFormData.expYear);
				$("#notLogInFirstName").val(persistFormData.firstName);
				$("#notLogInLastName").val(persistFormData.lastName);
				$("#addrAlias").val(persistFormData.selectedAddrId).change();
                if( persistFormData.isEditSavedAddress == "Y" || persistFormData.isAddNewAddress == "Y"){
                	if (persistFormData.isEditSavedAddress == "Y") {
					$("#editBillAddress").click();
					//$("#addrAliasInput").val(persistFormData.addrAlias);
				} else {
					$("#addBillAddress").click();
				}
                $("#countryCode").val(persistFormData.country).change();
                $("#addr1").val(flightUtil.htmlSymbolParse(persistFormData.addressLine1));
                $("#addr2").val(persistFormData.addressLine2);
                $("#cityCountyWard").val(persistFormData.city);
								// Timeout added as value will be set after StatesListAJAX call is complete
								setTimeout(function(){
									$("#stateProv").val(persistFormData.state).selectmenu('refresh');
								},3000);
                $("#postal").val(persistFormData.zipCode);
                }
			} else if( persistFormData.paymentOprType == "loggedInPayment" ){ // Oneclick payment - normal
				$("#storedCCList").val(persistFormData.cardType+"_"+persistFormData.selectedFOPId).change();
				persistFormDone = true;
			}
			if($("#notLogInAccNumber").size()){
		   		var maskedCardNmbr = $("#notLogInAccNumber").val();
		   		if(maskedCardNmbr.indexOf("*")!= -1){
		   			$("#notLogInAccNumber").rules("remove", "emptyField");
		   			$("#notLogInAccNumber").rules("remove","validateCardNumber");
		   			$("#notLogInAccNumber").rules("remove","isNumeric");
		   			$("#notLogInAccNumber").rules("remove","validateCardNumberLeadingChars");
		   			$("#notLogInAccNumber").valid();
		   		}
		   	}
			//Changes added for Acculynk : Start
			if(persistFormData.pinEligibleInd) {
				Payment.acculynkCheckBinStatus = persistFormData.pinEligibleInd;
				Payment.isAcculynkCheckBinCalled = true;
				$("#hdnPinEligibleInd").val(Payment.acculynkCheckBinStatus);
			}
			if(persistFormData.cardNumber){
				Payment.acculynkCardNumber = persistFormData.cardNumber;
				Payment.acculynkLastCardDigit = Payment.acculynkCardNumber.slice(-4);
			}
			
			if(persistFormData.fopSelectedTab && persistFormData.fopSelectedTab === "tabCC" && persistFormData.maskCreditCardNum !== ""){
				//if(!Payment.data.creditPaymentList || (Payment.data.cobrandCardList && $.inArray(Payment.selectedCard, Payment.data.cobrandCardList) != -1)){
				Payment.selectedCardIcon(Payment.selectedCard);
			    //}
			}
			if(persistFormData.InvalidPinErrorCount){
				Payment.acculynkInvalidPinErrorCount = persistFormData.InvalidPinErrorCount;
				/* Fix for CPM-659 wrong pin error scenario*/
				if(Payment.acculynkCheckBinStatus === "Y" && Payment.acculynkInvalidPinErrorCount >= 2){
					   Payment.acculynkShowErrorMsgs("ACCUPAYSECURE");
					   Payment.acculynkInvalidThirdTime = "Y";
				}
			}
			//Changes added for Acculynk : End
				//For RTBT
				if(persistFormData.payOpt == "payRTBT"){
					 if (persistFormData.RTBTSelectedCountryCode !== undefined) {
			        	 $("#onlineCountry").val(persistFormData.RTBTSelectedCountryCode).change();
				     }

			         if (persistFormData.RTBTSelectedProviderID !== undefined) {
			        	 $("#"+persistFormData.RTBTSelectedProviderID).attr("checked", true).click();
				         $("#"+persistFormData.RTBTSelectedProviderID).next("label").addClass("selected");
				     }

			         if (persistFormData.RTBTSelectedBankID !== undefined) {
				            $("#"+persistFormData.RTBTSelectedBankID).attr("checked", true).click();
				            $("#"+persistFormData.RTBTSelectedBankID).next("label").addClass("selected");
				     }
				}

				Payment.showCardSpecificErrorMsg(persistFormData.cardType);
				placeHolderForIE();
			}else{
				  if (msg.myWalletLoginClickInd != undefined && msg.myWalletLoginClickInd == "Y" && $("#openLoginContainer").length > 0) {
					  $("#openLoginContainer").click();
			       }
			}
			$("select").selectmenu( "refresh" );
		},
		attachLoggedInEvents : function(msg){
			/**
			 * CREDIT/DEBIT CARD TYPE drop down change
			 */
			$("body").on("change","#storedCCList",function(){
				var selectedVal = $(this).val();
				if(selectedVal != undefined && selectedVal != ""){
					Payment.resetPaymentTabValidation();
					var cardType = $(this).val().split("_")[0];
					if(msg.amexExpCkoInd){
						cardType = msg.persistFormData.cardType;
					}
					// Changes added for Acculynk : Start
				//var selectedStoredNumber = msg.savedFOPMap[selectedVal].split(",")[1];
				var selectedStoredNumber = "";
				var savedFopMapArr = msg.savedFOPMap[selectedVal].split(",");
				if(savedFopMapArr.length > 3){
					selectedStoredNumber = savedFopMapArr[2];
				}else{
					selectedStoredNumber = savedFopMapArr[1];
				}
					// Changes added for Acculynk : End
					//var cardName = "";
					if(cardType == "AP"){
						$("#cardInfoHldr").hide();
						$("#hdnIsAlipayPaymentSelected").val("Y");
					}else{
						$("#cardInfoHldr").show();
						$("#hdnIsAlipayPaymentSelected").val("N");
					}
					var fullName = function(selectedVal){
							if(msg.nameOnFOPMap[selectedVal] != undefined)	{
								var fn = msg.nameOnFOPMap[selectedVal].split("*");
								return (fn.length>1)?fn:[fn[0],""];
							} else {
								return ["",""];
							}
						   }(selectedVal);
						  var expDate = function(selectedVal){
							if(msg.expDateMap[selectedVal] != undefined)	{
								var expD = unescape(msg.expDateMap[selectedVal]);
								var exp = expD.split("/");
								return (exp.length>1)?exp:[exp[0],"year"];
							} else {
								return ["01","year"];
							}
						   }(selectedVal);
						   if(msg.walletCardImgUrl && !$.isEmptyObject(msg.walletCardImgUrl)){
						  Payment.displayCardImage(cardType,msg);
						   }
					 /**
					  * Populating the Corresponding values of the selected FOP from the drop down in hidden fields.
					  */
					 //var typeId = $(this).val().split("_")[1];
					 var addressMapId = msg.addressIdMap[selectedVal];

					 if(!addressMapId){
						$.each(msg.addressIdMap, function(addressId, address){
							addressMapId = address;
							return false;
						});
					 }
				 //Payment.displayConcatAddr(msg.addressMap, addressMapId);
				 Payment.populateSavedAddress(addressMapId, msg);
					 /*$("#billing_address_fields option").removeAttr("selected");
					 $("#billing_address_fields option[value="+addressMapId +"]").attr("selected","selected");*/
					 $("#hdnExpMonth").val(expDate[0]);
					 $("#hdnExpYear").val(expDate[1]);
					 $("#hdnFirstName").val(fullName[0]);
					 $("#hdnLastName").val(fullName[1]);
					 $("#hdnCCTypes").val(cardType);
					 $("#hdnAddIds").val(msg.addressIdMap[selectedVal]);
					 //$("#hdnAccNumber").val(msg.accountNumberMap[selectedVal]);
					 $("#hdnSavedFopId").val(msg.fopIdMap[selectedVal]);
					 $("#hdnNameAsOnFOP").val(msg.nameOnFOPMap[selectedVal]);
					 // Changes added for Acculynk : Start
					 Payment.acculynkCardNumber = selectedStoredNumber;
					 Payment.acculynkLastCardDigit = "";
					 Payment.acculynkCheckBinStatus = "";
					 Payment.acculynkInvalidThirdTime = "N";
					 Payment.acculynkSavedFopId = msg.fopIdMap[selectedVal];
					 Payment.isAcculynkCheckBinCalled = false;
					 Payment.isAcculynkCombinedCall = false;
					 Payment.removeFopErrorMsg();
					 // Changes added for Acculynk : End
					 setTimeout(function(){
					  if(cardType == "AX" || cardType == "SM"){
						$("[name=cvv]").prop("maxlength",4);
					 }else {
						$("[name=cvv]").prop("maxlength",3);
					 }
					 },100);
				 Payment.populateSavedFOP($(this).val(), msg);
				 var selectedCardKey = $("#storedCCList").val();
				 var selectedExpDate = "";
				 $.each(msg.expDateMap, function (key, value) {
					 if(selectedCardKey == key){
						 selectedExpDate = value;
						 return false;
					 }
				 });
				 Payment.handleExpiredFOP(selectedExpDate);
					if(cardType == "TP" || cardType == "ATM" || cardType == "UP"){// Changes added for Acculynk : Start
						$(".securityCodeWrapper, .securityCodeBox, .paymentTypeDetailSection .backEnderrorMsgWrapper").hide();

						//cardName = "UATP";
					 } else {
						$(".securityCodeWrapper, .securityCodeBox, .paymentTypeDetailSection .backEnderrorMsgWrapper").show();
						if(msg.USOrginFlight && msg.tripExtraPresent == "N"){
							var selectedCardKey = $("#storedCCList").val();
							$.each(msg.savedFOPPVIMap, function (key, value) {
								 if(selectedCardKey == key && value == "Y"){
									 $(".securityCodeWrapper, .securityCodeBox, .paymentTypeDetailSection .backEnderrorMsgWrapper").hide();
									 return false;
								 }
							 });
						}
					 }
					 $("[name=cvv]").val("");
					Payment.hideFOPTripAdditionErrorMsg();
					Payment.selectedCard = cardType;
					Payment.showCardSpecificErrorMsg (cardType);
					Payment.toggleTripExtraSelection();
					Payment.toggleTripInsuranceSelection();
					if (cardType == "JC" || cardType == "DC" || cardType == "TP") {
						if ((parseFloat(tripExtraTotalAmount) > 0)  && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi)) {
							var errCode = Payment.getCardSpecificErrorCode(),
								tripExtraErrCode = errCode.tripExtraErrCode,
								fopErrCode = errCode.fopErrorCode;
							Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
						}
					}
				}
				//setTimeout(function(){$("select").selectmenu( "refresh" )}, 100);
			});
			$(document).on("click",".newPaymentLink,.newPayment,.paymentTypeOptionText",function(e){
    			e.preventDefault();
    			var cardLength = msg.savedFOPMap.length;
    			if(cardLength === 4){
    				$("#exceedCardLimit").show();
    				if(msg.saveToWalletEligible == "N"){
    				$("#saveToProfileWrapper").hide();
    			}
    			}
    			newPaymentAction = "Y";
    			$("#hdnNewPaymentType").val("Y");
    			Payment.loadNotLoggedInTemplate(msg);
    			$("#creditCardType").trigger("change");
    			// Changes added for Acculynk : Start
				$("#billPayment p.doubleMilesContainer").html("<span class='nextGenHiddenField'>Information</span>Earn up to an additional 2 miles per dollar on this purchase when you use your Delta SkyMiles Credit Card. <a href='/content/www/en_US/skymiles/program-rules-conditions/amex-popup.html' class='newWindow ' data-rel='0'>(Terms and Conditions) <span class='nextGenHiddenField'>opens in new window</span></a>.");
				$("#billPayment p.doubleMilesContainer").css({"margin-top": "10px","min-height": "19px"});
				$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
				// Changes added for Acculynk : End
    			$("#creditCardType").focus();
    			/*
    			 * Hide alipay on clicking new form of payment from My Wallet
    			 */
    			if(Payment.selectedFop != "payGC"){
					//Changes added for Acculynk : Start
    				$(".cardLogos #AP, .cardLogos #UP, .cardLogos #UPB").hide();
					$(".cardLogos").find("label[for=AP], label[for=UP], label[for=UPB]").hide();
					$("#creditCardType option[value='AP'], #creditCardType option[value='UP'], #creditCardType option[value='UPB']").remove();
					//Changes added for Acculynk : End
    			}

				// Defect 57528(CPM-318) fix start
				var country_language = CookieUtils.get('pref');
				if(!country_language){
					country_language = 'en-us';
				}
				var strCountry = country_language.split('-')[1];
				if(strCountry != undefined && ("us" == strCountry || "US" == strCountry) && msg.USOrginFlight){
					if($("#updateProfileInd").length){
						$("#updateProfileInd").prop("checked", true);
						$(".lblSaveInfo").html("Store my card & use for Express Checkout");
					}
				}
				var cardTypeSeleAmex = $("#cardTypeLogo").find("input[name=cardType]:checked").prop("id");
				if(cardTypeSeleAmex == "SM" || cardTypeSeleAmex == "AX"){
					$("#amex-express-checkout,#amexExpressCko").show();
					$('#amexExpCkoPayment').html("");
				}
				
				// Defect 57528(CPM-318) fix end
				// Defect CPM-1164 fix start
				$("#notLogInAccNumber").parent().addClass("accNumber");
				$("#selectCardTypeDropdownHolder").css({'position': 'absolute','left' : '-9999px'});
				$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").show();
				$("#amexExpressCko").detach().insertBefore('.cardSeparator');
				$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
				if($("#billPayment p.doubleMilesContainer").is(":visible")){
					$("#amex-express-checkout").css("top","57px");
				}else{
					$("#amex-express-checkout").css("top","28px");
				}
				$("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder").addClass("autoSelectionClass");
				// Defect CPM-1164 fix end

    			 /*if($.ui.ie) {
			 		flightUtil.fixDropDownForIE();
			 	 } */
			});
			/*
			 * Open/Close Add New Email Section
			 */
			$("body").on("click","#addNewEmail",function(){
				var $arrow = $("span",$(this));
			if($arrow.hasClass("cartRightArrow")){ // OPEN
				$arrow.removeClass("cartRightArrow").addClass("cartDownArrow");
				//$("#newEmailFormHolder").html($("#_upsell_loggedin_new_email_display").render()).show();
					addEmailOpr = "Y";
					//$("#saveToProfileWrapper").show();
					//$("#saveInfo").attr("checked","checked");
				} else { //Close
				$arrow.removeClass("cartDownArrow").addClass("cartRightArrow");
					$("#newEmailFormHolder").html("").hide();
					addEmailOpr = "N";
					/*if($("#storedCCList").is(":visible") && $("#editCardFormHolder").is(":hidden")){
						$("#saveToProfileWrapper").hide();
						$("#saveInfo").removeAttr("checked");
					}*/
				}
			});
			/*
			 * Open/Close Edit Card Info Section
			 */
			$("body").on("click","#editCard",function(){
				var $arrow = $("span",$(this));
				var ccTypeSelected = $("#storedCCList").val();
			if($arrow.hasClass("cartRightArrow")){ //OPEN
				$arrow.removeClass("cartRightArrow").addClass("cartDownArrow");
				//$("#editCardFormHolder").html($("#_upsell_loggedin_edit_card_display").render(msg)).show();
				$("#billingAddressContainer").html($("#_payment_loggedin_billing_address").render(msg));
					yearCount.getIncrementYear();
					editFOPAction = "Y";
				Payment.populateSavedFOP(ccTypeSelected, msg);
                    var selAddrId = msg.addressIdMap[ccTypeSelected];
                    if(!selAddrId){
    	 				$.each(msg.addressIdMap, function(addressId, address){
    	 					selAddrId = address;
    	 					return false;
    	 			 	});
    				}
              // Payment.displayConcatAddr(msg.addressMap, selAddrId);
               Payment.populateSavedAddress(selAddrId, msg);
                   if(msg.savedFOPList != null && msg.savedFOPList.length < 4 && msg.saveToWalletEligible == "Y"){ //for #62257
                    $("#saveToProfileWrapper").show();
                   }
                    $("#saveInfo").attr("checked","checked");
				} else { //CLOSE
				$arrow.removeClass("cartDownArrow").addClass("cartRightArrow");
					$("#editCardFormHolder").html("").hide();
					if(msg.saveToWalletEligible == "N"){
					$("#saveToProfileWrapper").hide();
					}
					$("#saveInfo").removeAttr("checked");
					editFOPAction = "N";
				}
			});
			/*
			 * Open/Close Add Billing Address Section
			 */
			$("body").on("click","#addBillAddress",function(){
				var $arrow = $("span",$(this));
			$("#editBillAddress .cartDownArrow").removeClass("cartDownArrow").addClass("cartRightArrow");
			$("#extraFeesMessage").addClass("hide");
			if($arrow.hasClass("cartRightArrow")){ //OPEN
			Payment.countryCode = "";
				$arrow.removeClass("cartRightArrow").addClass("cartDownArrow");
				// Fix for Defect 65414	
				$(this).attr("aria-expanded","true");
				$("#editBillAddress").attr("aria-expanded","false");
					$("#billingAddressFormHolder").show();
					$("#editBillAddress").addClass("disable");
					addEditAddrAction = "Y";
					$("#hdnAddNewAddress").val("Y");
					$("#hdnAddEditAddress").val("N");
					$("#hdnBillAddrId").val("");
					if(msg.companionCert){
						$("#countryCode.paymentSelect").prop("disabled",true);
						$(".disabledCountryMsg").removeClass("hide");
					}
					$("#errorSavedAddressFopMsg").html("");
					$("#addrAlias").parent().removeClass("nextGenErrorText");
				} else { //CLOSE
				$arrow.removeClass("cartDownArrow").addClass("cartRightArrow");
				// Fix for Defect 65414	
				$(this).attr("aria-expanded","false");
					$("#editBillAddress").removeClass("disable");
					$("#billingAddressFormHolder").hide();
					addEditAddrAction = "N";
					$("#hdnAddNewAddress").val("N");
					$("#addrAlias").change();
					$("#countryCode.paymentSelect").prop("disabled",false);
					$(".disabledCountryMsg").addClass("hide");
				}
				// Resetting form data
				$("#billingAddressFormHolder label.labelError").removeClass("labelError");
				$("[name=addrAliasInput], [name=addrLine1StreetName], [name=addrLine2RoomApartment], [name=cityCountyWard], [name=stateProvCode], [name=postalCode]").removeClass("errorMsg").val("");
				addAddressCheck = true;
				$("[name=country]").val("US").trigger("change");

				placeHolderForIE();
				$("select").selectmenu( "refresh" );
			});
			/*
			 * Open/Close Edit Billing Address Section
			 */
			$("body").on("click","#editBillAddress",function(){
				if($(this).hasClass("disable")) return false;
				var $arrow = $("span",$(this));
			$("#addBillAddress .cartDownArrow").removeClass("cartDownArrow").addClass("cartRightArrow");
			if($arrow.hasClass("cartRightArrow")){ //OPEN
				Payment.countryCode = "";
				$arrow.removeClass("cartRightArrow").addClass("cartDownArrow");
				// Fix for Defect 65414	
				$(this).attr("aria-expanded","true");
				$("#addBillAddress").attr("aria-expanded","false");
					$("#billingAddressFormHolder").show();
					addEditAddrAction = "Y";
				Payment.populateSavedAddress($("#addrAlias").val(), msg);
				$("#hdnAddEditAddress").val("Y");
				$("#hdnAddNewAddress").val("N");
				if(msg.companionCert && $("#countryCode.paymentSelect").val() == "US"){
					$("#countryCode.paymentSelect").prop("disabled",true);
					$(".disabledCountryMsg").removeClass("hide");
				}
				} else {//CLOSE
				$arrow.removeClass("cartDownArrow").addClass("cartRightArrow");
				// Fix for Defect 65414
				$(this).attr("aria-expanded","false");
					$("#billingAddressFormHolder").hide();
					addEditAddrAction = "N";
					$("#hdnAddEditAddress").val("N");
					$("#countryCode.paymentSelect").prop("disabled",false);
					$(".disabledCountryMsg").addClass("hide");
				}
				$("#billingAddressFormHolder label.labelError").removeClass("labelError");
				$("[name=addrAliasInput], [name=addrLine1StreetName], [name=addrLine2RoomApartment], [name=cityCountyWard], [name=stateProvCode], [name=postalCode]").removeClass("nextGenErrorText");
				placeHolderForIE();

				$("select").selectmenu( "refresh" );
			});

			$("body").on("change", "#addrAlias", function(){
			//Payment.displayConcatAddr(msg.addressMap, $(this).val());
			Payment.populateSavedAddress($(this).val(), msg);
			});

		},
                removeInsuranceSelection : function(disableInsurance){
                    if(disableInsurance){
											if(Payment.selectedFop == "payGC" && msg.amexExpCkoInd && TripInsurance.isInsuranceSelected()){
												//$('#removeInsurance').click();
											}else{
												$(".tripChildRight").html("");
											}
//                    	if(TripInsurance.isInsuranceSelected()) {
//                    		$('#removeInsurance').click();
//                    	}
						//Payment.insuranceText = $(Payment.insuranceText);
                    	//Payment.insuranceText.find("#removeInsurance").addClass('active');
                    	$("#tripInsuranceAdvisoryText").hide();

                    	$("[name=insurancePurchase]").val("");
                    	addedInsPrice = "0.00";
   		        	 	$('#tripProtectorRightColPrice').addClass('hide');
//	   		        	 if(isFopRuleModified) {
//	   							//isFopRuleModified = false;
//	   							msg.fopRule = $.extend({}, fopRuleJSON);
//	   							Payment.reloadFopRules(msg.fopRule);
//	   					 }
   	        			if (tripExtraPrice.currCode == currCode) {
   	        				totalPriceDue = parseFloat(parseFloat(finalPrice) + parseFloat(addedInsPrice) + parseFloat(tripExtraTotalAmount) + parseFloat(totalSeatVal)).toFixed(flightUtil.currentPriceDecimalLength);
   	        			} else {
   	        				totalPriceDue = parseFloat(parseFloat(finalPrice) + parseFloat(addedInsPrice) + parseFloat(totalSeatVal)).toFixed(flightUtil.currentPriceDecimalLength);
   	        				if(parseFloat(tripExtraTotalAmount) > 0){
   		        				msg.tripExtrasMultiCurr = true;
   		        			}
   	        			}
   	        			Payment.renderPriceHeader(totalPriceDue);
                    	var insErrMsg = '<span class="insuranceMsg"><span class="blueInfoIcon"></span>Uh-oh! We\'re sorry, but Trip Insurance cannot be purchased with the form of payment you selected. Please select another form of payment.</span>';
                        $('#tripInsuranceError').html(insErrMsg);
                        // Fix for defect #58296
                        $("#insuranceError").removeClass("backEnderrorMsgWrapper").html("");
                    }
                    else{
                    	$('#tripInsuranceError').html("");
                    	$(".tripChildRight").show();
                       //insuranceText = $("#tripInsuranceSection").find(".tripChildRight").html();
                    	$("#tripInsuranceAdvisoryText").show();
                    	if($('.tripChildRight').html() !== Payment.insuranceText){
                      $('.tripChildRight').html(Payment.insuranceText);
                    	}
                      if($('#addInsurance[type=radio]').length > 0)
                          $("label[for=addInsurance]").addClass("buttonStyle");
                          if($('#removeInsurance[type=radio]').length > 0)
                          $("label[for=removeInsurance]").addClass("buttonStyle");
//                      if(TripInsurance.isInsuranceSelected()) {
//                  		$('#addInsurance').click();
//                      }
//                      else if( TripInsurance.isInsuranceNotSelected()){
//                    	  $('#removeInsurance').click();
//                      }
                    }
                },
                //Show/hide Add Extra button for FOPs. (If not TE selected).
                toggleTripExtraSelection: function () {
                	if (parseFloat(tripExtraTotalAmount) <= 0) {
                		var fopType = Payment.selectedFop,
             	   	   	isPaypalEnabled = false,
             	   	   	isTpJcDcCardSelected = false
             	   	   	errorCode = "";
	             	   if (fopType == "payPP" || fopType == "payBL" || fopType == "payAP" || fopType == "payRTBT" || fopType == "payUN") {//For RTBT // Changes added for Acculynk : Start
                			isPaypalEnabled = true;
                			if (fopType == "payPP" || fopType == "payBL") {
                				errorCode = "PAYPAL_0001";
                			} else if(fopType == "payRTBT") {//For RTBT
                				errorCode = "RTBT_0001";
                				isPaypalEnabled = false; //fix for defect# 58491
                			} else if(fopType == "payUN") {// Changes added for Acculynk : Start
                				errorCode = "UNPAY_0001";
                			} else {
                				errorCode = "ALIPAY_0001";
                			}
  	             	   } else if (fopType == "payCC" || fopType == "payWL" || fopType == "payGC" || fopType == "payACCU") {// Changes added for Acculynk : Start
  	             		   	var cardType = Payment.selectedCard,
  								cardName = flightUtil.displayCardName(cardType);

									if(msg.amexExpCkoInd){
										cardType = msg.persistFormData.cardType;
									}


  							if (cardType == "DC" || cardType == "JC" || cardType == "TP") {
  								isTpJcDcCardSelected = true;
  							} else if (cardType == "AP") {
  	                			isPaypalEnabled = true;
                				errorCode = "ALIPAY_0001";
  							}else if(cardType == "ATM"){// Changes added for Acculynk : Start
  								isPaypalEnabled = true;
  								errorCode = "ATM_0001";
  							}else if(cardType == "UP" || cardType == "UPB"){
  								isPaypalEnabled = true;
  								errorCode = "UNPAY_0001";
  							}// Changes added for Acculynk : End
  	             	   }
                		if (isPaypalEnabled && !msg.internationalFlight) {
                			$("#delCardError").html("");
                			$("#delCardError").hide();
                			$(".tripExtrasImgLftSection .tripExtrasAddExtraButton").hide();
                			var errorMsg = errorCodeObj.getError(errorCode);
                			// Fix for Defect 68502
                			var paypalMsg = '<span class="tripExtraMsg" aria-live="polite" role="alert"><span class="blueInfoIcon"><span class="nextGenHiddenField">Information</span></span>' + errorMsg + '</span>';
                			$(".tripExtraAdvmsgHolder").html(paypalMsg);
                		} else if(isTpJcDcCardSelected){
  	             		  	$(".tripExtrasImgLftSection .tripExtrasAddExtraButton").show();
                			$(".tripExtraAdvmsgHolder").html("");
                			var cardMsg = 'A '+cardName+' card cannot be used  to purchase the Delta Domestic Day Pass or Ascend Package. Please change your payment type to purchase them now, or buy later in My Trips.';
                			$("#delCardError").show();
                			$("#delCardError").html(cardMsg);
	             	   } else{
	             		  $(".tripExtrasImgLftSection .tripExtrasAddExtraButton").show();
	             		  $("#delCardError").html("");
	             		 $("#delCardError").hide();
	             		  $(".tripExtraAdvmsgHolder").html("");
	             	   }
									 if(msg.USOrginFlight){
										 var selectedCardKey = $("#storedCCList").val();
										 if(selectedCardKey !== undefined){
											$.each(msg.savedFOPPVIMap, function (key, value) {
												 if(selectedCardKey == key && value == "Y"){
													 $(".securityCodeWrapper, .securityCodeBox, .paymentTypeDetailSection .backEnderrorMsgWrapper").hide();
													 return false;
												 }
											 });
										 }
									 }
	             	  /* if (fopType == "payPP" || fopType == "payBL" || fopType == "payAP") {
	             		  isEnabled = false;
	             	   } else if (fopType == "payCC" || fopType == "payWL") {
	             		   	var cardType = "";
								if ($('#creditCardType').is(':visible')) {
									cardType = $('#creditCardType').val();
								} else if ($('#storedCCList').is(':visible')) {
								cardType = $('#storedCCList').val().split("_")[0];
							}
							if (cardType == "DC" || cardType == "JC" || cardType == "TP") {
								isEnabled = false;
							}
	             	   }
	             	   if (isEnabled) {
		               		$(".tripExtrasImgLftSection .tripExtrasAddExtraButton").show();
		            		$("#delCardError").html("");
	             	   } else {
                		$(".tripExtrasImgLftSection .tripExtrasAddExtraButton").hide();
	                		//var msg = '<span class="tripExtraMsg"><span class="blueInfoIcon"></span>Trip Extras cannot be purchased with the form of payment you selected.</span>';
                		var msg = 'A UATP card cannot be used  to purchase the Delta 24 Hour Wi-Fi  Pass or Ascend Package. Please change your payment type to purchase them now, or buy later in My Trips.';
                		$("#delComfortError").hide();
                		$("#delCardError").show();
                		$("#delCardError").html(msg);
	             	   }*/
                	}
                	$(tripExtraUtil).trigger("tripExtraRemove");
                	//$("#addTripExtra").focus();
                },
                toggleTripInsuranceSelection: function () {
            		Payment.removeInsuranceSelection(false);
            		var fopType = Payment.selectedFop,
                		showFOPErrMsg = false,
                		fopErrorCode = "";
                	/*changes done for CPM-81*/
                	if (fopType == "payPP" || fopType == "payBL" || fopType == "payGC" || fopType == "payAP" || fopType == "payRTBT" || fopType == "payUN") {//For RTBT // Changes added for Acculynk : Start
                		if (TripInsurance.isInsuranceSelected()) {
                			showFOPErrMsg = true;
                			//fopErrorCode = (fopType == "payPP" || fopType == "payBL") ? "PAYPAL_0002" : "ALIPAY_0002";
                			if(fopType == "payPP" || fopType == "payBL"){
                				fopErrorCode = "PAYPAL_0002";
                			}else if(fopType == "payAP"){
                				fopErrorCode = "ALIPAY_0002";
                			}else if(fopType == "payRTBT"){
                				fopErrorCode = "RTBT_0002";
                			}else if(fopType == "payUN"){// Changes added for Acculynk : Start
                				fopErrorCode = "UNPAY_0002";
                			}
                		} else if (TripInsurance.isInsuranceNotSelected()) {
                			showFOPErrMsg = false;
                		} else {
                			if(msg.persistFormData) {
              				   if(msg.persistFormData.insurancePurchase == "Y" || msg.persistFormData.insurancePurchase == "N"){
              					  TripInsurance.persistInsuranceSelection();
              				   }else if(msg.persistFormData.insurancePurchase == null && (fopType == "payRTBT" || fopType == "payUN" || (fopType == "payGC" && msg.amexExpCkoInd))){// Changes added for Acculynk : Start
              					 Payment.removeInsuranceSelection(true);
              				   }else if(!!msg.persistFormData.insurancePurchase == false && (fopType == "payGC" || fopType == "payRTBT" || fopType == "payUN" || fopType == "payAP" || fopType == "payPP")){ //fix for #63284 and CPM-717 start
              					 Payment.removeInsuranceSelection(true); 
              				   }//fix for #63284 and CPM-717 end
              			   } else {
                			Payment.removeInsuranceSelection(true);
                		}
                		}
                	} else if (fopType == "payCC" || fopType == "payWL" || fopType == "payACCU") {// Changes added for Acculynk : Start
                		var cardType = Payment.selectedCard;
										if(msg.amexExpCkoInd){
											cardType = msg.persistFormData.cardType;
										}
                		if (cardType == "JC" || cardType == "TP" || cardType == "AP" || cardType == "ATM" || cardType == "UP" || cardType == "UPB") {// Changes added for Acculynk : Start
                			if (TripInsurance.isInsuranceSelected()) {
                    			showFOPErrMsg = true;
                    			var errCode = Payment.getCardSpecificErrorCode();
                    			fopErrorCode = errCode.fopErrorCode;
                    			/*if(cardType == "JC" || cardType == "AT
                    			 * .M" || cardType == "UP" || cardType == "UPB"){// defect# 52077 fix

               					  Payment.removeInsuranceSelection(true);
               				   } */
                    		} else if (TripInsurance.isInsuranceNotSelected()) {
                    			showFOPErrMsg = false;

                    		} else {
                    			if(msg.persistFormData) {
                 				   if(msg.persistFormData.insurancePurchase == "Y" || msg.persistFormData.insurancePurchase == "N"){
                 					  TripInsurance.persistInsuranceSelection();
                 				   }else if(cardType == "TP" ||cardType == "JC" || cardType == "ATM" || cardType == "UP" || cardType == "UPB"){// Changes added for Acculynk : Start


										Payment.removeInsuranceSelection(true);
                 				   }
                 			   } else {
                 				   Payment.removeInsuranceSelection(true);
                 			   }
                    		}
                		} else {
                			Payment.removeInsuranceSelection(false);
                		}
                	}
                	if (showFOPErrMsg) {
            			Payment.showFOPTripAdditionErrorMsg("", fopErrorCode);
						if(fopType == "payGC" && !msg.amexExpCkoInd){ 
							$("#amex-express-checkout").css("top","211px"); 
						}
                	} else {
                		if(parseFloat(tripExtraTotalAmount) <= 0 && SeatUtils.seatDataObj.totalSeatPrice <= 0) {
                			Payment.hideFOPTripAdditionErrorMsg();
                		}
						if(fopType == "payGC" && !msg.amexExpCkoInd){
							//$("#amex-express-checkout").css("top","161px");
							if($('#fopMsgCont').is(':visible')){
								$("#amex-express-checkout").css("top","211px"); 
							}else{
								if(Payment.selectedFop == "payCC"){
									$("#amex-express-checkout").css("top","56px");
								}else{
								$("#amex-express-checkout").css("top","146px"); 
							}
						}
						}


						if(fopType=="payGC" && msg.amexExpCkoInd && msg.amexExpCkoData.success === false){
							if(Payment.selectedFop == "payCC"){
								$("#amex-express-checkout").css("top","56px");
							}else{
							$("#amex-express-checkout").css("top","146px");
						}
                	}
                	}
                },
		attachCommonEvents : function(msg){
			/**
			 * click handler of the "Use new payment type" link
			 * // For CPM -768
			 */                
			$("body").off("click change",".fopTypes input[type=radio]").on("click",".fopTypes input[type=radio]",function(e) {
				var paymentType = $(this).prop("id");
				// no action if selected fop tab clicked
				if(paymentType == Payment.selectedFop){
					return false;
				}
				if ($(".noSavedFOPLink").css("display", "block"));
				$(".noSavedFOPLink").hide();
				if (paymentType != "payWL" && $("#loginPage").is(':visible')) {
					$("#loginPage").hide();
				}
				$(".giftCardPayPalMsg").addClass("hide");
				$(".reviewPurchaseAmexEnrolled").hide();
				Payment.hideFOPTripAdditionErrorMsg();
				// Changes added for Acculynk : Start
				Payment.acculynkInvalidThirdTime = "N";
				Payment.acculynkCheckBinStatus = "";
				$("#hdnFopSelectedTab").val("");
				// Changes added for Acculynk : End
				//AMEX Exp Cko Block Start
				if(!$(this).next('span').hasClass('labelTxtDisabled')){
					$('#amexExpCkoPayment').html("");
					$('#billingContainerWrapper, #cardPrintNameHldr').show();
					if(msg.loggedInInd != null && msg.loggedInInd == "Y"){
						$("#billingAddressContainer").show();
						$("select").selectmenu( "refresh" );
					}
				}
				// Amex Exp Cko Block End
				$("#amexExpCKOSelected").val("N");
				switch (paymentType) {
				case "payPP":
					if (msg.fopRule.payPal != "Disabled" && msg.fopRule.payPal != Payment.fopConstants.viewMore) {
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						$("#paymentEdocHldr").addClass("hide");
						isEcreditDisableFop = true;
						if(!(msg.edocSelectedInd == "Y" && msg.edocumentDetailList[0] != undefined && msg.edocumentDetailList[0].ECert == true)){
						$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						$(".istructionLabel ecredit").append("<ul class ='travelVoucherAdvisory'><li>eCredits cannot be used with PayPal or PayPal Credit.</li></ul>");
						}
						if (Payment.selectedFop != "payPP" || Payment.chosenFop != "payPP") {
							if (newPaymentAction != "Y") {
								Payment.useNewPayment(msg, paymentType);
							}
							$("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr").hide();//For RTBT
							//$("#cardPrintNameHldr").show();//For RTBT
							if(msg.saveToWalletEligible == "N"){
							$("#saveToProfileWrapper").hide();
							}
							Payment.selectedFop = "payPP";
							Payment.setFirstAndLastNameInputLabel();
							$(this).prop("checked", true);
							Payment.updateFopRuleOnSelection();
							//$(this).next("span").addClass('labelTxtSelected');
							$("#hdnNewPaymentType").val("Y");
							$("[name=insurancePurchase]").val("N");
							if (parseFloat(tripExtraTotalAmount) > 0 || SeatUtils.seatDataObj.totalSeatPrice > 0) {
								Payment.showFOPTripAdditionErrorMsg("PAYPAL_0001", "PAYPAL_0002");
							}
//							else {
//								Payment.hideFOPTripAdditionErrorMsg();
//							}
							$(".paypalMsg").show();
							Payment.removeFopErrorMsg();
							//Payment.removeInsuranceSelection(true);
							$("#countryCode").change();
						}
						if (parseFloat(tripExtraTotalAmount) > 0 || SeatUtils.seatDataObj.totalSeatPrice > 0) {
							Payment.showFOPTripAdditionErrorMsg("PAYPAL_0001", "PAYPAL_0002");
						}
						$(".paypalMsg").show();
						Payment.removeFopErrorMsg();
						$("#billPayment p.doubleMilesContainer").html("");
						$("#billPayment p.doubleMilesContainer").css({"margin-top": "0","min-height": "0"});
						//setTimeout(function(){
						$("#billPayment p.doubleMilesContainer").addClass("dmNoIcon").hide();
						//},1000);
						Payment.resetPaymentTabValidation();
						$("#amex-express-checkout").css("top","").hide();
						$("#amexExpressCko,#amexCKOErrorMsg").hide();
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
						var originalFopRule = $.extend({}, fopRuleJSON);
						if (originalFopRule.payPal == Payment.fopConstants.viewMore) {
							$("#fopErrorMsg p").html("PayPal cannot be used for trips originating from " + Payment.countryOfDeparture).attr({role: "alert"});
							$("#fopErrorMsg").removeClass("hide");
						}
					}					
					// Fix for CPM-720 start
					$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					$(".giftCardHeaderTab").hide();
					break;
				case "payBL":
					if (msg.fopRule.payPalCredit != "Disabled" && msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						$("#paymentEdocHldr").addClass("hide");
						isEcreditDisableFop = true;
						if(!(msg.edocSelectedInd == "Y" && msg.edocumentDetailList[0] != undefined && msg.edocumentDetailList[0].ECert == true)){
						$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						$(".istructionLabel ecredit").append("<ul class ='travelVoucherAdvisory'><li>eCredits cannot be used with PayPal or PayPal Credit.</li></ul>");
						}
						if (Payment.selectedFop != "payBL" || Payment.chosenFop != "payBL") {
							if (newPaymentAction != "Y") {
								Payment.useNewPayment(msg, paymentType);
							}
							$("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr").hide();//For RTBT
							//$("#cardPrintNameHldr").show();//For RTBT
							Payment.selectedFop = "payBL";
							Payment.setFirstAndLastNameInputLabel();
							$(this).prop("checked", true);
							Payment.updateFopRuleOnSelection();
							//$(this).next("span").addClass('labelTxtSelected');
							$("#hdnNewPaymentType").val("Y");
							$("[name=insurancePurchase]").val("N");
							if(msg.saveToWalletEligible == "N"){
							$("#saveToProfileWrapper").hide();
							}
							Payment.removeFopErrorMsg();
							$(".paypalMsg").show();
							if (parseFloat(tripExtraTotalAmount) > 0 || SeatUtils.seatDataObj.totalSeatPrice > 0) {
								Payment.showFOPTripAdditionErrorMsg("PAYPAL_0001", "PAYPAL_0002");
							}
//							else {
//								Payment.hideFOPTripAdditionErrorMsg();
//							}
							//Payment.removeInsuranceSelection(true);
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
						}
						Payment.removeFopErrorMsg();
						$(".paypalMsg").show();
						if (parseFloat(tripExtraTotalAmount) > 0 || SeatUtils.seatDataObj.totalSeatPrice > 0) {
							Payment.showFOPTripAdditionErrorMsg("PAYPAL_0001", "PAYPAL_0002");
						}
						$("#billPayment p.doubleMilesContainer").html("");
						$("#billPayment p.doubleMilesContainer").css({"margin-top": "0","min-height": "0"});
						//setTimeout(function(){
						$("#billPayment p.doubleMilesContainer").addClass("dmNoIcon").hide();
						//},1000);
						$("#amex-express-checkout").css("top","").hide();
						$("#amexExpressCko,#amexCKOErrorMsg").hide();
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
						var originalFopRule = $.extend({}, fopRuleJSON);
						if (originalFopRule.payPalCredit == Payment.fopConstants.viewMore) {
							$("#fopErrorMsg p").html("PayPal Credit cannot be used for trips originating from " + Payment.countryOfDeparture).attr({role: "alert"});
							$("#fopErrorMsg").removeClass("hide");
						}
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					$(".giftCardHeaderTab").hide();
					break;
				case "payCC":
					if (msg.fopRule.creditDebit != "Disabled") {
						Payment.amexExpTabTrack = 'payCC';
						$("#billPayment").removeClass("hide");
						$("#cardInfoHldr,#cardLogoHldr,#amexExpressCko,#amex-express-checkout, #billingContainerWrapper, #cardPrintNameHldr,#saveToProfileWrapper").show();
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						if(!TripInsurance.isInsuranceSelected()){
							$("#paymentEdocHldr").removeClass("hide");
							isEcreditDisableFop = false;
						}
						if (!(eDocUtils.eDocDataObj.giftCardSelected == true) && !eDocUtils.removeTravelVoucher) {
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						}
						if (Payment.selectedFop != "payCC" || Payment.chosenFop != "payCC") {
							if(Payment.chosenFop != ""){
								msg.amexExpCkoInd = false;
							}
							if (newPaymentAction != "Y") {
								Payment.useNewPayment(msg, paymentType);
							}
							// Changes added for Acculynk : Start
							Payment.selectedFop = "payCC";
							$("#hdnFopSelectedTab").val("tabCC");
							$("#onlineBankHldr").hide();//For RTBT
							Payment.acculynkCardTemplateDisplay();
							// Changes added for Acculynk : End
							$("#cardInfoHldr,#cardLogoHldr").show();
							if(msg.saveToWalletEligible == "N"){
								$("#saveToProfileWrapper").hide();
							}
							Payment.setFirstAndLastNameInputLabel();
							$(this).prop("checked", true);
							Payment.updateFopRuleOnSelection();
							/* Clear out fields PCI compliance */
							$("#notLogInAccNumber").val("");
							$("#notLogInExpMonth").val("");
							$("#notLogInExpYear").val("");
							$("#cvv").val("");
							//$(this).next("span").addClass('labelTxtSelected');
							$("#hdnNewPaymentType").val("Y");
							$(".paypalMsg").hide();
							Payment.removeFopErrorMsg();
							if (isFopRuleModified) {
								//isFopRuleModified = false;
								msg.fopRule = $.extend({}, fopRuleJSON);
								Payment.reloadFopRules(msg.fopRule);
							}

							//Show/Hide FOP and Trip addition related Error message.
							var cardType = Payment.selectedCard;
							if (cardType == "JC" || cardType == "DC" || cardType == "TP") {
								if ((parseFloat(tripExtraTotalAmount) > 0)  && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi)) {
									var errCode = Payment.getCardSpecificErrorCode(),
										tripExtraErrCode = errCode.tripExtraErrCode,
										fopErrCode = errCode.fopErrorCode;
									Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
								}
//								else {
//									Payment.hideFOPTripAdditionErrorMsg();
//								}
								//Payment.removeInsuranceSelection(true);
							} else {
								//Payment.removeInsuranceSelection(false);
							}
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
							 /* Fix for CPM-720 start */
							$("#notLogInAccNumber").parent().addClass("accNumber");
							$("#selectCardTypeDropdownHolder").css({'position': 'absolute','left' : '-9999px'});
							$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").show();
							$("#amexExpressCko").detach().insertBefore('.cardSeparator');
							$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
							if($("#billPayment p.doubleMilesContainer").is(":visible")){
								$("#amex-express-checkout").css("top","57px");
							}else{
								$("#amex-express-checkout").css("top","28px");
							}
							$("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder").addClass("autoSelectionClass");
							 /* Fix for CPM-720 end */
						}
						// Changes added for Acculynk
						if($(".cardLogos").find("label[for=AP]").find("img").hasClass("active")){
							$(".cardLogos").find("label[for=SM]").find("img").addClass("active");
							$(".cardLogos").find("label[for=AP]").find("img").removeClass("active");
						}
						if (($("#eGiftFOPSection  .eCreditPaymentInfo").length > 0) || ($("#paymentEdocHldr  .eCreditPaymentInfo").length > 0)) {
							if (msg.fopRule.payPal != Payment.fopConstants.viewMore) {
							msg.fopRule.payPal = "Disabled";
								$(".fopTypes .paypal").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
							if (msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
							msg.fopRule.payPalCredit = "Disabled";
								$(".fopTypes .billMeLater").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
							//For RTBT
							if (msg.fopRule.rtbt !== Payment.fopConstants.viewMore) {
								msg.fopRule.rtbt = "Disabled";
								$(".fopTypes .onlineBanking").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
						}
						// Changes added for Acculynk : Start
						$("#billPayment p.doubleMilesContainer").html("<span class='nextGenHiddenField'>Information</span>Earn up to an additional 2 miles per dollar on this purchase when you use your Delta SkyMiles Credit Card. <a href='/content/www/en_US/skymiles/program-rules-conditions/amex-popup.html' class='newWindow ' data-rel='0'>(Terms and Conditions) <span class='nextGenHiddenField'>opens in new window</span></a>.");
						// Changes added for Acculynk : End
						$("#billPayment p.doubleMilesContainer").css({"margin-top": "10px","min-height": "19px"});
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this)); 
					}
					//$("#amex-express-checkout").css("top","161px");
					$(".giftCardHeaderTab").hide();
					break;
				// Changes added for Acculynk : Start
				case "payACCU":
					if(msg.fopRule.acculynk !== "Disabled"){
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						if(!TripInsurance.isInsuranceSelected()){
							$("#paymentEdocHldr").removeClass("hide");
							isEcreditDisableFop = false;
						}
						if (!(eDocUtils.eDocDataObj.giftCardSelected == true) && !eDocUtils.removeTravelVoucher) {
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						}
						if (Payment.selectedFop != "payACCU" || Payment.chosenFop != "payACCU") {
							if (newPaymentAction != "Y") {
								Payment.useNewPayment(msg, paymentType);
							}
							Payment.selectedFop = "payACCU";
							$("#hdnFopSelectedTab").val("tabACCU");
							$("#onlineBankHldr").hide();
							Payment.acculynkCardTemplateDisplay();
							$("#cardInfoHldr,#cardLogoHldr").show();
							Payment.setFirstAndLastNameInputLabel();
							$(this).prop("checked", true);
							Payment.updateFopRuleOnSelection();
							/* Clear out fields PCI compliance */
							$("#notLogInAccNumber").val("");
							$("#notLogInExpMonth").val("");
							$("#notLogInExpYear").val("");
							$("#cvv").val("");

							$("#hdnNewPaymentType").val("Y");
							if(msg.saveToWalletEligible == "N"){
							$("#saveToProfileWrapper").hide();
							}
							$(".paypalMsg").hide();
							Payment.removeFopErrorMsg();
							if (isFopRuleModified) {
								//isFopRuleModified = false;
								msg.fopRule = $.extend({}, fopRuleJSON);
								Payment.reloadFopRules(msg.fopRule);
							}
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
						}
						if (($("#eGiftFOPSection  .eCreditPaymentInfo").length > 0) || ($("#paymentEdocHldr  .eCreditPaymentInfo").length > 0)) {
							if (msg.fopRule.payPal != Payment.fopConstants.viewMore) {
							msg.fopRule.payPal = "Disabled";
								$(".fopTypes .paypal").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
							if (msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
							msg.fopRule.payPalCredit = "Disabled";
								$(".fopTypes .billMeLater").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
							//For RTBT
							if (msg.fopRule.rtbt !== Payment.fopConstants.viewMore) {
								msg.fopRule.rtbt = "Disabled";
								$(".fopTypes .onlineBanking").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
						}
						$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").hide();
						$("#amex-express-checkout").css("top","").hide();
						$("#amexExpressCko,#amexCKOErrorMsg").hide();
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					$(".giftCardHeaderTab").hide();
					break;
				case "payUN":
					if(msg.fopRule.unionPay !== "Disabled" && msg.fopRule.unionPay !== Payment.fopConstants.viewMore){//change for CPM-735
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						if(!TripInsurance.isInsuranceSelected()){
							$("#paymentEdocHldr").removeClass("hide");
							isEcreditDisableFop = false;
						}
						if (!(eDocUtils.eDocDataObj.giftCardSelected == true) && !eDocUtils.removeTravelVoucher) {
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						}
						if (Payment.selectedFop != "payUN" || Payment.chosenFop != "payUN") {
							if (newPaymentAction != "Y") {
								Payment.useNewPayment(msg, paymentType);
							}
							/* For CPM-720 */                            
							$("#notLogInAccNumber").removeClass("autoSelectedCard").removeAttr("style");
							/* For CPM-720 */
							Payment.selectedFop = "payUN";
							$("#hdnFopSelectedTab").val("tabUN");
							$("#onlineBankHldr,#cardLogoHldr").hide();
							$("#billPayment p.doubleMilesContainer").hide();
							Payment.acculynkCardTemplateDisplay();
							$("#cardInfoHldr").show();
							Payment.setFirstAndLastNameInputLabel();
							$(this).prop("checked", true);
							Payment.updateFopRuleOnSelection();
							/* Clear out fields PCI compliance */
							$("#notLogInAccNumber").val("");
							$("#notLogInExpMonth").val("");
							$("#notLogInExpYear").val("");
							$("#cvv").val("");

							$("#hdnNewPaymentType").val("Y");
							$("[name=insurancePurchase]").val("N");
							if(msg.saveToWalletEligible == "N"){
							$("#saveToProfileWrapper").hide();
							}
							$(".paypalMsg").hide();
							Payment.removeFopErrorMsg();
							if (parseFloat(tripExtraTotalAmount) > 0) {
								Payment.showFOPTripAdditionErrorMsg("UNPAY_0001", "UNPAY_0002");
							}
							if (isFopRuleModified) {
								//isFopRuleModified = false;
								msg.fopRule = $.extend({}, fopRuleJSON);
								Payment.reloadFopRules(msg.fopRule);
							}
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
						}
						if (($("#eGiftFOPSection  .eCreditPaymentInfo").length > 0) || ($("#paymentEdocHldr  .eCreditPaymentInfo").length > 0)) {
							if (msg.fopRule.payPal != Payment.fopConstants.viewMore) {
							msg.fopRule.payPal = "Disabled";
								$(".fopTypes .paypal").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
							if (msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
							msg.fopRule.payPalCredit = "Disabled";
								$(".fopTypes .billMeLater").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
							//For RTBT
							if (msg.fopRule.rtbt !== Payment.fopConstants.viewMore) {
								msg.fopRule.rtbt = "Disabled";
								$(".fopTypes .onlineBanking").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
						}
						 /* Fix for CPM-720 start */
						$("#selectCardTypeDropdownHolder").removeAttr( 'style' );
						$("#notLogInAccNumber").parent().removeClass("accNumber");
						$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
						$("#amexExpressCko").detach().insertAfter('#cardLogoHldr');
						$("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder,#nextGenBooking .chooseCreditCardHeading").removeClass("autoSelectionClass");
						 /* Fix for CPM-720 end */
						$("#billPayment p.doubleMilesContainer").html("<span class='nextGenHiddenField'>Information</span>If your UnionPay card has an Amex, Visa, or MasterCard logo, please choose the Credit Card tab to make your purchase.");
						$("#billPayment p.doubleMilesContainer").css({"margin-top": "10px","min-height": "19px"});
						$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
						$("#amex-express-checkout").css("top","").hide();
						$("#amexExpressCko,#amexCKOErrorMsg").hide();
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
						//change for CPM-735
						var originalFopRule = $.extend({}, fopRuleJSON);
						if (originalFopRule.unionPay == "Disabled" || originalFopRule.unionPay == Payment.fopConstants.viewMore) {
							$("#fopErrorMsg p").html("UnionPay cannot be used for trips originating from " + Payment.countryOfDeparture).attr({role: "alert"});
							$("#fopErrorMsg").removeClass("hide");
						}
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					$(".giftCardHeaderTab").hide();
					break;
				// Changes added for Acculynk : End
				case "payWL":
					if (msg.fopRule.myWallet != "Disabled") {
						Payment.amexExpTabTrack = 'payWL';
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						if(!TripInsurance.isInsuranceSelected()){
						$("#paymentEdocHldr").removeClass("hide");
						isEcreditDisableFop = false;
						}
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						if (!(eDocUtils.eDocDataObj.giftCardSelected == true) && !eDocUtils.removeTravelVoucher) {
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						}
						if (Payment.selectedFop != "payWL" || Payment.chosenFop != "payWL") {
							if(Payment.chosenFop != ""){
									msg.amexExpCkoInd = false;
							}
							Payment.selectedFop = "payWL";
							Payment.loadCheckOutSec(msg);
							/* For CPM-720 */                            
							$("#notLogInAccNumber").removeClass("autoSelectedCard").removeAttr("style");
							/* For CPM-720 */
							newPaymentAction = "N";
							$("#onlineBankHldr").hide();//For RTBT
							$("#cardInfoHldr,#cardLogoHldr").show();
							// Changes added for Acculynk : Start
							$("#hdnFopSelectedTab").val("tabWL");
							// Changes added for Acculynk : End
							$("#payWL").prop("checked", true);
							Payment.updateFopRuleOnSelection();
							/* Clear out fields PCI compliance */
							$("#notLogInAccNumber").val("");
							$("#notLogInExpMonth").val("");
							$("#notLogInExpYear").val("");
							$("#cvv").val("");
							//$(this).next("span").addClass('labelTxtSelected');
							$("#hdnNewPaymentType").val("");
							$(".paypalMsg").hide();
							Payment.removeFopErrorMsg();
							if (isFopRuleModified) {
								//isFopRuleModified = false;
								msg.fopRule = $.extend({}, fopRuleJSON);
								Payment.reloadFopRules(msg.fopRule);
							}
							//Hide FOP and Trip addition related Error message.
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
							$("#billPayment p.doubleMilesContainer").html("<span class='nextGenHiddenField'>Information</span>Earn up to an additional 2 miles per dollar on this purchase when you use your Delta SkyMiles Credit Card. <a href='/content/www/en_US/skymiles/program-rules-conditions/amex-popup.html' class='newWindow ' data-rel='0'>(Terms and Conditions) <span class='nextGenHiddenField'>opens in new window</span></a>.");
							$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
							var cardTypeSeleAmex = $("#cardTypeLogo").find("input[name=cardType]:checked").prop("id");
							if($('#cardTypeLogo').is(':visible') && (cardTypeSeleAmex == "SM" || cardTypeSeleAmex == "AX")){
								$("#amex-express-checkout,#amexExpressCko").show();
								$('#loggedPaymentSection').hide();
							}else{
								$("#amex-express-checkout").css("top","").hide();
								$("#amexExpressCko,#amexCKOErrorMsg").hide();
								$('#loggedPaymentSection').show();
							}
							$(".giftCardHeaderTab").hide();
							$("#eGiftFOPSection,#eGiftTotalSection").addClass("hide");
							$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
							$("#amexExpressCko").detach().insertAfter('#cardLogoHldr');
						}
						if (msg.loggedInInd == "Y" && !msg.savedFOPInd) {
							$(".fopTypes span").removeClass("labelTxtSelected");
							$(this).next(".myWallet").addClass("labelTxtSelected");
							$("#billPayment").addClass("hide");
							$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
							$(".noSavedFOPLink").show();
						}
						$(".cardLogos #AP").hide();
						$(".cardLogos").find("label[for=AP]").hide();
						$("#creditCardType option[value='AP']").remove();
						if (($("#eGiftFOPSection  .eCreditPaymentInfo").length > 0) || ($("#paymentEdocHldr  .eCreditPaymentInfo").length > 0)) {
							if (msg.fopRule.payPal != Payment.fopConstants.viewMore) {
							msg.fopRule.payPal = "Disabled";
								$(".fopTypes .paypal").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
							if (msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
							msg.fopRule.payPalCredit = "Disabled";
								$(".fopTypes .billMeLater").addClass("labelTxtDisabled");
							isFopRuleModified = true;
							}
							//For RTBT
							if (msg.fopRule.rtbt !== Payment.fopConstants.viewMore) {
								msg.fopRule.rtbt = "Disabled";
								$(".fopTypes .onlineBanking").addClass("labelTxtDisabled");
								isFopRuleModified = true;
							}
						}
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					break;
				case "payGC":
					if (msg.fopRule.giftCard != "Disabled") {
						$(".giftCardHeaderTab").show();
						Payment.amexExpTabTrack = 'payGC';
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection").removeClass('hide');
						$(".giftCardPayPalMsg").removeClass("hide");
						$("#paymentEdocHldr").addClass("hide");
						isEcreditDisableFop = true;
						if (!(eDocUtils.eDocDataObj.giftCardSelected == true) && !eDocUtils.removeTravelVoucher) {
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						}
						if (Payment.selectedFop != "payGC" || Payment.chosenFop != "payGC") {
							/* For CPM-720 */                            
							$("#notLogInAccNumber").removeClass("autoSelectedCard").removeAttr("style");
							/* For CPM-720 */
							if(Payment.chosenFop != ""){
								msg.amexExpCkoInd = false;
							}else{
								if(Payment.selectedFop == "payWL" && msg.loggedInInd != null && msg.loggedInInd == "Y"){
									$("#loggedPaymentSection").show();
									$("select").selectmenu( "refresh" );
								}
							}
							if ($("#eGiftFOPSection .paymentInfoSection").length > 0 && !$("#eGiftFOPSection").hasClass("hide")) {
								$("#eGiftTotalSection").removeClass('hide');
							}

							if($("#eGiftFOPSection .paymentInfoSection").length == 0){
								$("#eGiftFOPSection").html($("#_payment_egift_section_tmpl").render(eDocUtils.eDocDataObj));
						    	   var eGiftRowHTML = $('<div>').append($("#eGiftNotSelectedSection").html());
						   		   $(eGiftRowHTML).find(".paxInputWrapper4,.moreEGiftLink").hide();
						   		   eDocUtils.eGiftHTML = $(eGiftRowHTML).html();
								   $(".giftCardHeaderTab").show();
								   if($(".showGiftCardInlineTripCostCoveredError").val()==="true"){
									  $(".giftCardInlineTripCostCoveredError").show();
								   }else{
									  $(".giftCardInlineTripCostCoveredError").hide();
								   }
							}
							//newPaymentAction = "Y";
							//Hide FOP and Trip addition related Error message.
							//Payment.hideFOPTripAdditionErrorMsg();
							// Changes added for Acculynk : Start
							Payment.selectedFop = "payGC";
							$("#hdnFopSelectedTab").val("tabGC");
							$("#onlineBankHldr").hide();//For RTBT
							Payment.acculynkCardTemplateDisplay();
							// Changes added for Acculynk : End
							$("#cardInfoHldr,#cardLogoHldr,#billingAddressContainer,#saveToProfileWrapper,.giftCardInfo").show();
							Payment.setFirstAndLastNameInputLabel();
							$("#payGC").prop("checked", true);
							Payment.updateFopRuleOnSelection();
							/* Clear out fields PCI compliance */
							$("#notLogInAccNumber").val("");
							$("#notLogInExpMonth").val("");
							$("#notLogInExpYear").val("");
							$("#cvv").val("");
							//$(this).next("span").addClass('labelTxtSelected');
							$("#hdnNewPaymentType").val("Y");
							$("[name=insurancePurchase]").val("N");
							$("#storedCCList").trigger("change");
							$(".paypalMsg").hide();

							//Payment.removeInsuranceSelection(true);
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
							// Changes added for Acculynk : Start
							$("#billPayment p.doubleMilesContainer").html("<span class='nextGenHiddenField'>Information</span>Earn up to an additional 2 miles per dollar on this purchase when you use your Delta SkyMiles Credit Card. <a href='/content/www/en_US/skymiles/program-rules-conditions/amex-popup.html' class='newWindow ' data-rel='0'>(Terms and Conditions) <span class='nextGenHiddenField'>opens in new window</span></a>.");
							// Changes added for Acculynk : End
							$("#billPayment p.doubleMilesContainer").css({"margin-top": "10px","min-height": "19px"});
							$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
							if($("#fopMsgCont p.fopRemoveMsg").is(":visible")){
								$("#amex-express-checkout").css("top","226px");
							}else if($("#billPayment p.doubleMilesContainer").is(":visible")){
								if(Payment.selectedFop == "payCC"){
									$("#amex-express-checkout").css("top","56px");
								}else{
								$("#amex-express-checkout").css("top","146px");
								}
							}else{
								$("#amex-express-checkout").css("top","117px");
							}
						}
						// Changes added for Acculynk
						if ((!$(".zeroAmountDueAdvisory").is(':visible')) && msg.fopRule.alipay != "Disabled" && msg.fopRule.alipay != Payment.fopConstants.viewMore && msg.fopRule.alipay != Payment.fopConstants.notApplicable && (parseFloat(eDocUtils.eDocDataObj.remainingBal) > 0 || parseFloat(totalSeatVal) > 0)) {
							$(".cardLogos #AP").show();
							$(".cardLogos").find("label[for=AP]").show();
							/*
							 * Fix for Defect #51551
							 */
							if(!$("#creditCardType option[value='AP']").length){
								$("#creditCardType").append("<option value='AP'>Alipay</option>");
							}
						}
						//$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").hide();
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					 /* Fix for CPM-720 start */
					$("#selectCardTypeDropdownHolder").removeAttr( 'style' );
					$("#notLogInAccNumber").parent().removeClass("accNumber");
					$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
					$("#amexExpressCko").detach().insertAfter('#cardLogoHldr');
					$("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder,#nextGenBooking .chooseCreditCardHeading").removeClass("autoSelectionClass");
					 /* Fix for CPM-720 end */
					break;
				case "payAP":
					if (msg.fopRule.alipay != "Disabled" && msg.fopRule.alipay != Payment.fopConstants.viewMore) {
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						$("#paymentEdocHldr").removeClass("hide");
						isEcreditDisableFop = false;
						if (!(eDocUtils.eDocDataObj.giftCardSelected == true) && !eDocUtils.removeTravelVoucher) {
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						}
						if (Payment.selectedFop != "payAP" || Payment.chosenFop != "payAP") {
							if (newPaymentAction != "Y") {
								Payment.useNewPayment(msg, paymentType);
							}

							$("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr").hide();//For RTBT
							//$("#cardPrintNameHldr").show();//For RTBT
							Payment.selectedFop = "payAP";
							Payment.setFirstAndLastNameInputLabel();
							$(this).prop("checked", true);
							Payment.updateFopRuleOnSelection();
							//if (isFopRuleModified) {
								//isFopRuleModified = false;
								//msg.fopRule = $.extend({}, fopRuleJSON);
								//Payment.reloadFopRules(msg.fopRule);
							//}
							//$(this).next("span").addClass('labelTxtSelected');
							$("#hdnNewPaymentType").val("Y");
							$("[name=insurancePurchase]").val("N");
							if(msg.saveToWalletEligible == "N"){
							$("#saveToProfileWrapper").hide();
							}
							$(".paypalMsg").hide();
							Payment.removeFopErrorMsg();
							if (parseFloat(tripExtraTotalAmount) > 0) {
								Payment.showFOPTripAdditionErrorMsg("ALIPAY_0001", "ALIPAY_0002");
							}
//							else {
//								//Hide FOP and Trip addition related Error message.
//								Payment.hideFOPTripAdditionErrorMsg();
//							}
							//Payment.removeInsuranceSelection(true);
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
						}
						$(".paypalMsg").hide();
						Payment.removeFopErrorMsg();
						if (parseFloat(tripExtraTotalAmount) > 0) {
							Payment.showFOPTripAdditionErrorMsg("ALIPAY_0001", "ALIPAY_0002");
						}
						$("#billPayment p.doubleMilesContainer").html("<span class='nextGenHiddenField'>Information</span>You will be redirected to AliPay to complete your purchase. This third-party website may not be fully accessible for customers with disabilities.");
						$("#billPayment p.doubleMilesContainer").css({"margin-top": "10px","min-height": "19px"});
						//setTimeout(function(){
							$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").show();
						//},1000);
						$("#amex-express-checkout").css("top","").hide();
						$("#amexExpressCko,#amexCKOErrorMsg").hide();
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
						var originalFopRule = $.extend({}, fopRuleJSON);
						if (originalFopRule.alipay == Payment.fopConstants.viewMore) {
							$("#fopErrorMsg p").html("AliPay cannot be used for trips originating from " + Payment.countryOfDeparture).attr({role: "alert"});
							$("#fopErrorMsg").removeClass("hide");
						}
					}
					// Fix for CPM-720 start
					$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
					if (($("#eGiftFOPSection  .eCreditPaymentInfo").length > 0) || ($("#paymentEdocHldr  .eCreditPaymentInfo").length > 0)) {
						if (msg.fopRule.payPal != Payment.fopConstants.viewMore) {
						msg.fopRule.payPal = "Disabled";
							$(".fopTypes .paypal").addClass("labelTxtDisabled");
							isFopRuleModified = true;
						}
						if (msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
						msg.fopRule.payPalCredit = "Disabled";
							$(".fopTypes .billMeLater").addClass("labelTxtDisabled");
							isFopRuleModified = true;
						}
						//For RTBT
						if (msg.fopRule.rtbt !== Payment.fopConstants.viewMore) {
							msg.fopRule.rtbt = "Disabled";
							$(".fopTypes .onlineBanking").addClass("labelTxtDisabled");
							isFopRuleModified = true;
						}
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					$(".giftCardHeaderTab").hide();
					break;
			//For RTBT
            case "payRTBT":
					if (msg.fopRule.rtbt != "Disabled" && msg.fopRule.rtbt !== Payment.fopConstants.viewMore) {
						$("#billPayment").removeClass("hide");
						$(".loginContainer").hide();
						$(".loginContainer2").hide();
						$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
						$("#paymentEdocHldr").addClass("hide");
						isEcreditDisableFop = true;
						if (!(eDocUtils.eDocDataObj.giftCardSelected === true) && !eDocUtils.removeTravelVoucher) {
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
						}
						if(!(msg.edocSelectedInd == "Y" && msg.edocumentDetailList[0] !== undefined && msg.edocumentDetailList[0].ECert === true)){
							$(".istructionLabel ecredit").find(".travelVoucherAdvisory").remove();
							$(".istructionLabel ecredit").append("<ul class ='travelVoucherAdvisory'><li>eCredits cannot be used with Instant Bank Transfer.</li></ul>");
							}
						if (Payment.selectedFop != "payRTBT" || Payment.chosenFop != "payRTBT") {
							if (newPaymentAction != "Y") {
								Payment.useNewPayment(msg, paymentType);
							}

							$("#cardInfoHldr,#cardLogoHldr").hide();
							$("#onlineBankHldr").show();
							Payment.selectedFop = "payRTBT";
							Payment.setFirstAndLastNameInputLabel();
							$(this).prop("checked", true);
							Payment.updateFopRuleOnSelection();
							//if (isFopRuleModified) {
								//isFopRuleModified = false;
								//msg.fopRule = $.extend({}, fopRuleJSON);
								//Payment.reloadFopRules(msg.fopRule);
							//}
							//$(this).next("span").addClass('labelTxtSelected');
							$("#hdnNewPaymentType").val("Y");
							$("[name=insurancePurchase]").val("N");
							if(msg.saveToWalletEligible == "N"){
							$("#saveToProfileWrapper").hide();
							}
							$(".paypalMsg").hide();
							Payment.removeFopErrorMsg();
							if (parseFloat(tripExtraTotalAmount) > 0) {
								Payment.showFOPTripAdditionErrorMsg("RTBT_0001", "RTBT_0002");
							} //else {
								//Hide FOP and Trip addition related Error message.
								//Payment.hideFOPTripAdditionErrorMsg();
							//}
							//Payment.removeInsuranceSelection(true);
							$("#countryCode").change();
							Payment.resetPaymentTabValidation();
							$("select").selectmenu( "refresh" );
						}
						$("#billPayment p.doubleMilesContainer").removeClass("dmNoIcon").hide();
						$("#amex-express-checkout").css("top","").hide();
						$("#amexExpressCko,#amexCKOErrorMsg").hide();
						$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
					} else {
						$(this).next('span').removeClass('labelTxtSelected').addClass('labelTxtDisabled');
						var originalFopRule = $.extend({}, fopRuleJSON);
						if (originalFopRule.rtbt === Payment.fopConstants.viewMore) {
							var gcBnkCntry = "";
							$("#fopErrorMsg p").html("Instant Bank Transfer cannot be used for trips originating from " + Payment.countryOfDeparture).attr({role: "alert"});
							$("#fopErrorMsg").removeClass("hide");
						}
					}
					if (($("#eGiftFOPSection  .eCreditPaymentInfo").length > 0) || ($("#paymentEdocHldr  .eCreditPaymentInfo").length > 0)) {
						if (msg.fopRule.payPal !== Payment.fopConstants.viewMore) {
							msg.fopRule.payPal = "Disabled";
							$(".fopTypes .paypal").addClass("labelTxtDisabled");
							isFopRuleModified = true;
						}
						if (msg.fopRule.payPalCredit !== Payment.fopConstants.viewMore) {
							msg.fopRule.payPalCredit = "Disabled";
							$(".fopTypes .billMeLater").addClass("labelTxtDisabled");
							isFopRuleModified = true;
						}
					}
					if (e.originalEvent !== undefined){
						checkoutOmnitureUtil.registerClick($(this));
					}
					$(".giftCardHeaderTab").hide();
					break;
				};
				Payment.chosenFop = paymentType;
				//For RTBT
				//Handle all FOP scenarios for Convert Currency Display.
				Payment.toggleConvertCurrencyHldr();

				//Handle all FOP scenarios for Trip extras.
				Payment.toggleTripExtraSelection();
				Payment.toggleTripInsuranceSelection();
				//Code commented as this is handled inside each swtich case.
//								if (SeatUtils.seatDataObj.totalSeatPrice > 0) {
//									if (paymentType == 'payPP' || paymentType == 'payBL' /* || paymentType == 'payAP'*/
//									)
//									{
//										var warning = $("#billPaymentWarning");
//										warning.show();
//										warning.find($(".critical")).hide();
				//
//										if (paymentType == 'payPP' || paymentType == 'payBL') {
//											warning.find($(".critical")).hide();
//											warning.find($(".critical.paypal")).show();
//											$("#continue_button").prop("disabled", true);
//										}
//										/*else if (paymentType == 'payAP') {
//										warning.find($(".critical")).hide();
//										warning.find($(".critical.alipay")).show();
//										}*/
//										else {
//											warning.hide();
//										}
//									}
//								}
				/*if(!parseInt(Number(eDocUtils.totalRemainingVoucherBalance))){
				$("#eDocAmountDueSection").find(".totalRemainingBalanceDiv").css("padding-top","0");
				}*/
				/*if($.ui.ie) {
				   flightUtil.fixDropDownForIE();
		        }*/
				//58477 changes - begin
					if($('.paymentHeaderPrice .txtDecimal ')){
						$('.paymentHeaderPrice .txtDecimal ').text($('.paymentHeaderPrice .txtDecimal ').text().concat(" ").concat($('.paymentHeaderPrice .txtCurrency').text()));
					}
					if($('.paymentHeaderPrice .txtCurrency')) $('.paymentHeaderPrice .txtCurrency').text("");
					if($("#paymentChooseSection")) $("#paymentChooseSection").remove();
					if($("#amex-express-checkout") && $("#amex-express-checkout").css("top")==="146") $("#amex-express-checkout").css("top", "146px");
					if($('.edocNumber')) $('.edocNumber').remove();
					if($('.residualBalRow')) $('.residualBalRow').remove();
					if($('#eGiftTotalSection .priceRow  .sheadsize') && $('#eGiftTotalSection .priceRow  .sheadsize').text()==='Gift') $('#eGiftTotalSection .priceRow  .sheadsize').text('Gift Card');
					if($(".eCreditPaymentInfo .paymentColMiddle .txtSymbol:last-child")) $(".eCreditPaymentInfo .paymentColMiddle .txtSymbol:last-child").remove();
					if($('.zeroAmountDueAdvisory') && $('.zerAmountDueAdvisoryRuler').length===0) $('.zeroAmountDueAdvisory').prepend("<hr class='zerAmountDueAdvisoryRuler'>");
					//58477 changes - end
			});
			$(document).on("keydown",".fopTypes input[type=radio]",function(e) {
				if(e.originalEvent !== undefined){
					var keyCode = e.keyCode || e.which;
					if(keyCode === 39 && $("#defaultFopHldr label:visible").last().attr("for") === $(this).prop("id") && $(".viewMoreLink").is(":visible")){
											e.preventDefault();
						// For CPM -768
						$("#defaultFopHldr span:visible").not(".labelTxtDisabled").first().trigger("change");
					}
					if(keyCode == 9 && e.shiftKey == false){
						if(Payment.selectedFop == "payPP" || Payment.selectedFop == "payBL" || Payment.selectedFop == "payAP" ||
								Payment.selectedFop == "payRTBT" || Payment.selectedFop == "payUN"){
							if($("#removeAllTripExtraBtn").is(":visible")){
								e.preventDefault();
								$("#removeAllTripExtraBtn").focus();
							}
						}
					}
				}
			});

			$(document).on("keydown",".cardLogos input[type=radio]",function(e) {

				if(e.originalEvent !== undefined){
					var keyCode = e.keyCode || e.which;
					if(keyCode == 9  && e.shiftKey == false){
						if(Payment.selectedCard == "JC" || Payment.selectedCard == "DC" || Payment.selectedCard == "TP" ||
								Payment.selectedCard == "ATM" || Payment.selectedCard == "AP" || Payment.selectedCard == "UP"){
							if($("#removeAllTripExtraBtn").is(":visible")){
								e.preventDefault();
								$("#removeAllTripExtraBtn").focus();
							}
						}
					}
				}
			});

			/*
			 * Commented as per req of Defect 65446
			$(document).on("keydown","#removeAllTripExtraBtn",function(e) {
				if(e.originalEvent !== undefined){
					var keyCode = e.keyCode || e.which;
					if(keyCode == 9 && e.shiftKey ) {
						e.preventDefault();
						$("#"+Payment.selectedFop).focus();
					}
				}
			});
			*/
			$(document).off("keydown","#creditCardType-button").on("keydown","#creditCardType-button",function(e) {
				if(e.originalEvent !== undefined){
					var keyCode = e.keyCode || e.which;
					if(keyCode == 9 && $("#removeAllTripExtraBtn").is(":visible")) {
						//e.preventDefault();
						//$("#removeAllTripExtraBtn").focus();
					}
				}
			});
			/*$("#nextGenBooking").on("click","#ecoComfortBoxBtn,#ecoComfortBoxRemove",function(){
				if(!$("#ecoComfortBox").prop("disabled")) {
					$("#ecoComfortBox").prop("checked",true);
				}
				if($("#ecoComfortBox").prop("checked")) {
					var id = $(this).attr("id");
					var radioId = $(this).closest(".banner").find("input[type=radio]:checked").attr("id");
					Payment.upgradeBannerBtnClicked(id, $(this));
					if(id == "ecoComfortBoxBtn"){
							// code for upgrading to eco-comfort
					}else{
							// code for removing upgrade from eco-comfort
					}
				}
			});*/
				$(document).off("blur","#notLogInAccNumber").on("blur","#notLogInAccNumber",function(e){
				// Changes added for Acculynk : Start
					($(this).val() != "")?$(this).val($(this).val().replace(/\s/g,'')):$(this).val();
					Payment.acculynkCardNumber = $(this).val();
					$("#hdnPinEligibleInd").val("");//CPM-1071 fix: reset pin eligibility after entering a new card
					if($(this).val() != "" && $(this).val().length > 5 && Payment.selectedFop == "payCC"){
						var cardDetected = Payment.detectCardType($(this).val()) || "ATM";
			    		/* Showing Amex card instead of SkyMiles Amex */
			    		//(Payment.manuallySelectedCard == "SM" && cardDetected == "AX") ? cardDetected = Payment.manuallySelectedCard : cardDetected = cardDetected;
			    		 $("#notLogInAccNumber").addClass("autoSelectedCard");
			    		 Payment.typedCard = cardDetected;
			    		 if((Payment.data.creditPaymentList != undefined && Payment.data.creditPaymentList != null && $(Payment.data.creditPaymentList).searchValueinObj(cardDetected)) ||
			    				 (Payment.data.unionpayPaymentList != undefined && Payment.data.unionpayPaymentList != null && $(Payment.data.unionpayPaymentList).searchValueinObj(cardDetected))){
						 Payment.selectedCardIcon(cardDetected);
						 /* changes done for CPM-720 */
						 if(cardDetected != Payment.selectedCard){
							$("#creditCardType").val(cardDetected).trigger("change",["autoDetectionEvent"]);
							//$("#creditCardType option[value="+cardDetected+"]").prop("selected",true).trigger("change",["autoDetectionEvent"]);
			    		}
			    		 }else{
			    			 Payment.selectedCardIcon("");
			    		 }
					}else if($(this).val() != "" && $(this).val().length > 5 && Payment.selectedFop == "payWL"){
						var cardDetected = Payment.detectCardType($(this).val()) || "ATM";
						//CPM -1164 start
						$("#notLogInAccNumber").addClass("autoSelectedCard");
			    		 Payment.typedCard = cardDetected;
			    		 if((Payment.data.creditPaymentList != undefined && Payment.data.creditPaymentList != null && $(Payment.data.creditPaymentList).searchValueinObj(cardDetected)) ||
			    				 (Payment.data.unionpayPaymentList != undefined && Payment.data.unionpayPaymentList != null && $(Payment.data.unionpayPaymentList).searchValueinObj(cardDetected))){
						 Payment.selectedCardIcon(cardDetected);
						 /* changes done for CPM-720 */
						 if(cardDetected != Payment.selectedCard){
							$("#creditCardType").val(cardDetected).trigger("change",["autoDetectionEvent"]);
							//$("#creditCardType option[value="+cardDetected+"]").prop("selected",true).trigger("change",["autoDetectionEvent"]);
			    		}
			    		 }else{
			    			 Payment.selectedCardIcon("");
			    		 }
						
					}
					//CPM -1164 end
					if($("#notLogInAccNumber").valid() && $.inArray(Payment.selectedFop, Payment.acculynkEligibleFops) != -1){
						if(Payment.selectedCard === "ATM" || Payment.selectedCard === "UP" || Payment.selectedCard === "UPB"){
							/*Fix for CPM-470*/
							if(msg.USOrginFlight || msg.isUSorChinaOriginFlight){
							Payment.acculynkCheckBinCall();
							}
						}else if((Payment.selectedCard === "VI" || Payment.selectedCard === "CA") && parseFloat(tripExtraTotalAmount) <= 0 && !TripInsurance.isInsuranceSelected() && msg.shopType === "Revenue" && msg.EDocNonDebitInd === "N"){
							/*Fix for CPM-470*/
							if(msg.USOrginFlight || msg.isUSorChinaOriginFlight){
							Payment.acculynkCheckBinCall();
						}
					}
				}
				// Changes added for Acculynk : End
				if(editFOPAction == "Y" && $(this).val() ==""){
					$(this).val(msg.savedFOPMap[$("#storedCCList").val()].split(",")[1]);
					$("#hdnIsAcctNumEdit").val("N");
					if($("#cartPayment").attr("novalidate")){
						$("#notLogInAccNumber").rules("remove", "emptyField");
						$("#notLogInAccNumber").rules("remove","validateCardNumber");
						$("#notLogInAccNumber").rules("remove","isNumeric");
					    $("#notLogInAccNumber").rules("remove","validateCardNumberLeadingChars");
					}
				}
			});

				/*$(document).on("focus","#notLogInExpMonth",function(){
					$("#notLogInExpMonth").rules("add", "validMonth");
					$("#notLogInExpMonth").rules("add","requiredMonthYear");
					$("#notLogInExpMonth").rules("add","expiredMonthYear");
				});*/
			 /**
			 * Changing the State dropdown to text box depends on country.
			 */
	    $("#nextGenBooking").off('change', "#countryCode").on('change', "#countryCode", function (event) {
		        var countryCode = $(this).val();
		        // Commenting out this line to solve the issue where
		        // the country code dropdown is popping up everytime in iPAD
		        //$(this).trigger("blur").trigger("focus");
		        $("#districtTownVillageWrapper").removeClass("adjustDisTwnVill");
	            $("#cityCountyWardWrapper").removeClass("adjustDisTwnVill");
	            $("#billingAddressSection, #billingAddressFormHolder").removeClass("adjustForSeychelles");
	        	$("#addr2_label").parent().removeClass("adjustedWidth");
	        	$("#cityCountyWardWrapper").next().next().removeClass("fieldRightSpacing");
	        	$(".emailRowWrapper .paymentFieldOuterLarge").eq(1).removeClass("adjustedWidth");
	        	if(countryCode == "CA"){
	        		$("#stateProvWrapper").addClass("provinceExtraWidth");//.css("width","16em");
	        	}else if(countryCode == "AU"){
	        		$("#stateProvWrapper").addClass("provinceExtraWidthAU");//.css("width","18em");
	        	}else{
	        		$("#stateProvWrapper").removeClass("provinceExtraWidth")//.css("width","");
	        		$("#stateProvWrapper").removeClass("provinceExtraWidthAU"); //.css("width","")
	        	}
		        if (countryCode == "US" || countryCode == "CA" || countryCode == "AU") {
		        	//Payment.fetchStatesFromCountry(countryCode);
		        	if(Payment.countryCode != countryCode) {
		        		Payment.countryCode = countryCode;
		        	$.ajax({
		  			  type: "POST",
		  			  dataType: "json",
		  			  url: "StatesListJSONAction",
		  			  data : {"countryCode": countryCode, "cacheKeySuffix" : cacheKeySuffix},
		  			  headers: { "cache-control": "no-cache" },
		  			  success: function (jsonResponse) {
			        	Payment.countryCodeResponse = jsonResponse;
						msg.stateList = jsonResponse.statesList;
		            $("#stateList").show();
		            $("#stateList select").attr({id:"stateProv",name:"stateProvCode"});
		            $("#stateText").hide();
		            $("#stateText input").attr({id:"stateProv1",name:"stateProvCode1"});
						var options = "";
						var stateProvVal = $("#stateProv").val();
						$("#stateProv").html(""); 	// Removing options to rebuild the dropdown
						$("#stateProv").append('<option value="" title="">Select</option>'); 	// Displaying 'Select' as first option of dropdown
						var stateListObj = [];
						$.each(msg.stateList, function (i, element) {
							if(countryCode!='US'){
								options += '<option value="' + element.stateProvinceCode + '" title="' +element.stateProvinceName + '">'+ element.stateProvinceName + '</option>'; // Displaying state name for AU and CA
						}  else {
								options += '<option value="' + element.stateProvinceCode +'" title="'+ element.stateProvinceName +'" >' + element.stateProvinceCode + '</option>'; // Displaying state name for US
							}
							stateListObj.push(element.stateProvinceCode);
						});
						$("#stateProv").append(options);
						// Resetting the state value in case of saved address
						if(stateProvVal!=null && stateProvVal!="" && ($.inArray(stateProvVal,stateListObj) > -1)){
							$("#stateProv").val(stateProvVal);
						} else{
							$("#stateProv").val("");
						}
							/*
							 * Fix for defect 61841
							 */
							if(msg.loggedInInd != null && msg.loggedInInd == "Y" && !$.isEmptyObject(Payment.loggedInAddress) && $("#hdnAddEditAddress").val()=="Y"){
								$("#stateProv").val(Payment.loggedInAddress.addressLine7).blur();
							}
						$("select").selectmenu( "refresh" );
		  			  },
		  			  error: function(jqXHR, textStatus, error) {
		  				//console.log("error");
						try{
							delta.utils.logger.ajaxError(jqxhr, textStatus, error);
							delta.utils.logger.logMessage("Request Failed: " + error, "error");
						}catch(err){
							if (window.console && window.console.error) {
								console.error('Error logging to delta.utils.logger:' + err);
							}
						}
		  			  }
		  		  });
		        	}else if(statesLoaded){

		        		msg.stateList = Payment.countryCodeResponse.statesList;
			            $("#stateList").show();
			            $("#stateList select").attr({id:"stateProv",name:"stateProvCode"});
			            $("#stateText").hide();
			            $("#stateText input").attr({id:"stateProv1",name:"stateProvCode1"});
							var options = "";
							var stateProvVal = $("#stateProv").val();							$("#stateProv").html(""); 	// Removing options to rebuild the dropdown
							$("#stateProv").append('<option value="" title="">Select</option>'); 	// Displaying 'Select' as first option of dropdown
							var stateListObj = [];
							$.each(msg.stateList, function (i, element) {
								if(countryCode!='US'){
									options += '<option value="' + element.stateProvinceCode + '" title="' +element.stateProvinceName + '">'+ element.stateProvinceName + '</option>'; // Displaying state name for AU and CA
							}  else {
									options += '<option value="' + element.stateProvinceCode +'" title="'+ element.stateProvinceName +'" >' + element.stateProvinceCode + '</option>'; // Displaying state name for US
								}
								stateListObj.push(element.stateProvinceCode);
							});
							$("#stateProv").append(options);
							// Resetting the state value in case of saved address
							if(stateProvVal!=null && stateProvVal!="" && ($.inArray(stateProvVal,stateListObj) > -1)){
								$("#stateProv").val(stateProvVal);
							} else{
								$("#stateProv").val("");
							}
							/*
							 * Fix for defect 61841
							 */
							if(msg.loggedInInd != null && msg.loggedInInd == "Y" && !$.isEmptyObject(Payment.loggedInAddress) && $("#hdnAddEditAddress").val()=="Y"){
								$("#stateProv").val(Payment.loggedInAddress.addressLine7).blur();
							}
		        	}
		        } else {
			        if(countryCode == "TW" || countryCode == "KP" || countryCode == "KR"){
			        	$("#districtTownVillageWrapper").addClass("adjustDisTwnVill");
			        }
			        else if(countryCode == "CN"){
			        	$("#cityCountyWardWrapper").addClass("adjustDisTwnVill");
			        	$("#cityCountyWardWrapper").next().next().addClass("fieldRightSpacing");
			        }
			        else if(countryCode == "SC"){
			        	$("#billingAddressSection, #billingAddressFormHolder").addClass("adjustForSeychelles");
			        	$("#addr2_label").parent().addClass("adjustedWidth");
			        	$(".emailRowWrapper .paymentFieldOuterLarge").eq(1).addClass("adjustedWidth");
			        }
		        	$("#stateList").hide();
		        	$("#stateList select").attr({id:"stateProv1",name:"stateProvCode1"});
		            $("#stateText").show();
		            $("#stateText input").attr({id:"stateProv",name:"stateProvCode"});
		        }

		        /*if (countryCode == "US" || countryCode == "CA" || countryCode == "AU") {

		        }*/
	        addressMap.addressFields();
	           // showing country specific tax message
	           //if(msg.loggedInInd == null || msg.loggedInInd == undefined || msg.loggedInInd != "Y"){
	        	/*   var messageText = ( msg.extraTktMsgMap && countryCode in msg.extraTktMsgMap )?msg.extraTktMsgMap[countryCode]:"";
		           if(messageText != ""){
		        	   $("#extraFeesMessage").removeClass("hide").find(".table_footer_text").html(messageText);
		           } else {
		        	  $("#extraFeesMessage").addClass("hide");
		           }*/
	           //}
	        if($("#cartPayment").attr("novalidate")){
	        	addressMap.addRemoveRules();
	        	if($("#purchase_button").hasClass("clicked")){
	        	  /* Commented for defect #58218 */
	        		//$("#cartPayment").valid();
	        		$("#cartPayment").blur();
	        	 }
	        }
	            //Disables PayPal and Paypal credit tabs if country selection is other than US.
	        /*
	         *  Commented as per CR 34121
	         */
	        /*if(countryCode != "US"){
	        	if (msg.fopRule.payPal != Payment.fopConstants.viewMore) {
	        		if ($("#payPP").next('span').hasClass('labelTxtSelected')) {
	        			$("#payPP").next('span').removeClass('labelTxtSelected');
	        	}
		        		isFopRuleModified = true;
	        		$("#payPP").next('span').addClass('labelTxtDisabled');
                             msg.fopRule.payPal = "Disabled";

                    Payment.hideFOPTripAdditionErrorMsg();
	        	}
	        	if (msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
	        		if ($("#payBL").next('span').hasClass('labelTxtSelected')) {
	        			$("#payBL").next('span').removeClass('labelTxtSelected');
	        		}
		        		isFopRuleModified = true;
	        		$("#payBL").next('span').addClass('labelTxtDisabled');
                             msg.fopRule.payPalCredit = "Disabled";
                     Payment.hideFOPTripAdditionErrorMsg();
                        }
	        } else {
	        	if (msg.fopRule.payPal != Payment.fopConstants.viewMore || msg.fopRule.payPalCredit != Payment.fopConstants.viewMore) {
		        		if (isFopRuleModified) {
	        		msg.fopRule = $.extend({}, fopRuleJSON);
							Payment.reloadFopRules(msg.fopRule);
	        	}
	        }
	    	    $(Payment).trigger("ajaxCompleteCko");
	         }*/
		    });

	    
      /* fix for enhancement CPM-656 end*/
		    $(document).off("keyup keydown","#notLogInAccNumber").on("keyup keydown","#notLogInAccNumber",function(e){
		    	var $this = $(this);
		    	//Changes added for Acculynk : Start
				Payment.acculynkCheckBinStatus = "";
				Payment.acculynkInvalidThirdTime = "N";
				Payment.isAcculynkCheckBinCalled = false;
		    	//Changes added for Acculynk : End
				var keyCode = (e.which) ? e.which : e.keyCode;
					if(e.type == "keydown"){
		    	var navU =  navigator.userAgent;
		    	var isAndroidChrome = navU.indexOf('Android') > -1 && navU.indexOf('Chrome') > -1;
		    	if(!isAndroidChrome){
		    	 // <START> Changes for CPM-458
		    	// Allow: backspace, delete, tab, escape, enter and asterisk
		    	if ($.inArray(keyCode, [46, 8, 9, 27, 13, 106]) !== -1 ||
		        	 // Allow: Asterisk
		        	(keyCode == 56 && keyCode === true) ||
		        	// Allow: Numeric characters
		        	(((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) && e.shiftKey === false) ||
		        	// Allow delete from Numpad
		        	(keyCode == 110 && e.shiftKey === true) ||
		        	// Allow: Ctrl+A
		            (keyCode == 65 && e.ctrlKey === true) ||
		            // Allow: Ctrl+C
		            (keyCode == 67 && e.ctrlKey === true) ||
		            // Allow: Ctrl+V
		            (keyCode == 86 && e.ctrlKey === true) ||
		             // Allow: home, end, left, right
		            (keyCode >= 35 && e.keyCode <= 39)) {
				    			//do nothing
				        	}
				        else{
				        	// Prevent all other keystrokes
				        	e.preventDefault();
				        }
				        // <END> Changes for CPM-458
				    	}
					}else if(e.type == "keyup"){
						if(editFOPAction == "Y" && $this.val() =="" && keyCode == 13){
			    			if($("#cartPayment").attr("novalidate")){
				    			$("#notLogInAccNumber").rules("remove", "emptyField");
			    				$("#notLogInAccNumber").rules("remove","validateCardNumber");
			    				$("#notLogInAccNumber").rules("remove","isNumeric");
			    				$("#notLogInAccNumber").rules("remove","validateCardNumberLeadingChars");
				    		}
				    	}
						if((Payment.selectedFop == "payCC" || Payment.selectedFop == "payWL") && $this.val().indexOf("*") == -1){
							if ($this.val().length == 1) {
							    Payment.setCardFirstDigit = $this.val()[0];
		    			    	var cardDetected = Payment.detectCardType($(this).val().replace(/\s/g,''));
		    			    	if(!!cardDetected){
		    			    		
		    			    		$("#notLogInAccNumber").addClass("autoSelectedCard");
								    if(cardDetected != Payment.typedCard){
								    	$("label[for=notLogInAccNumber]").parent('.errorTooltip').remove();
								    }
								    if((Payment.data.creditPaymentList != undefined && Payment.data.creditPaymentList != null && $(Payment.data.creditPaymentList).searchValueinObj(cardDetected)) ||
						    				 (Payment.data.unionpayPaymentList != undefined && Payment.data.unionpayPaymentList != null && $(Payment.data.unionpayPaymentList).searchValueinObj(cardDetected))){
								    	Payment.cardAlreadySelected = true;
								    	Payment.selectedCardIcon(cardDetected);
								    	$("#creditCardType").val(cardDetected).trigger("change",["autoDetectionEvent"]);
									}else{
										Payment.cardAlreadySelected = false;
						    			Payment.selectedCardIcon("");
						    		}
		    			    	}else{
		    			    		Payment.cardAlreadySelected = false;
		    			    		Payment.selectedCardIcon("");
		    			    	}
								
					    	
							}else if($this.val().length == 2){
								if(!Payment.cardAlreadySelected){
									var cardDetected = Payment.detectCardType($(this).val().replace(/\s/g,''));
									if(!!cardDetected){
										$("#notLogInAccNumber").addClass("autoSelectedCard");
									     if(cardDetected != Payment.typedCard){
											$("label[for=notLogInAccNumber]").parent('.errorTooltip').remove();
									    }
									    if((Payment.data.creditPaymentList != undefined && Payment.data.creditPaymentList != null && $(Payment.data.creditPaymentList).searchValueinObj(cardDetected)) ||
							    				 (Payment.data.unionpayPaymentList != undefined && Payment.data.unionpayPaymentList != null && $(Payment.data.unionpayPaymentList).searchValueinObj(cardDetected))){
									    	Payment.selectedCardIcon(cardDetected);
									    	Payment.cardAlreadySelected = true;
									    	$("#creditCardType").val(cardDetected).trigger("change",["autoDetectionEvent"]);
										}else{
											Payment.cardAlreadySelected = false;
							    			 Payment.selectedCardIcon("");
							    		}
									}else{
										Payment.cardAlreadySelected = false;
			    			    		Payment.selectedCardIcon("");
						    		}
								}
		    			    	
					    	
							} else if ($this.val().length >= 5 || ($this.val() != "" && $this.val().length >= 5 && $this.val()[0] != Payment.setCardFirstDigit)) {
								if(!Payment.cardAlreadySelected){
								
								var cardDetected = Payment.detectCardType($(this).val().replace(/\s/g, '')) || "ATM";
								/* Showing Amex card instead of SkyMiles Amex */
								//(Payment.manuallySelectedCard == "SM" && cardDetected == "AX") ? cardDetected = Payment.manuallySelectedCard : cardDetected = cardDetected;
							    $("#notLogInAccNumber").addClass("autoSelectedCard");
							    /* changes done for CPM-720 */
							    //$("#creditCardType option[value="+cardDetected+"]").prop("selected",true).trigger("change",["autoDetectionEvent"]);
							    //CPM - 677 - Reset validation everytime a card type is detected and the Payment Type drop down is auto-populated
							    if(cardDetected != Payment.typedCard){
							    	$("label[for=notLogInAccNumber]").parent('.errorTooltip').remove();
							    }							    
							    if((Payment.data.creditPaymentList != undefined && Payment.data.creditPaymentList != null && $(Payment.data.creditPaymentList).searchValueinObj(cardDetected)) ||
					    				 (Payment.data.unionpayPaymentList != undefined && Payment.data.unionpayPaymentList != null && $(Payment.data.unionpayPaymentList).searchValueinObj(cardDetected))){
							    	Payment.selectedCardIcon(cardDetected);
							    $("#creditCardType").val(cardDetected).trigger("change",["autoDetectionEvent"]);
								}else{
					    			 Payment.selectedCardIcon("");
					    		}
								}
							} else if ($this.val() == "" && keyCode != 9) {
							    $("#notLogInAccNumber").removeClass("autoSelectedCard").removeAttr("style");
							    Payment.selectedCardIcon("");
							    		Payment.cardAlreadySelected = false;
							    /* changes done for CPM-720 */
							    //$("#creditCardType option[value="+Payment.manuallySelectedCard+"]").prop("selected",true).trigger("change",["autoDetectionEvent"]);
							    //CPM - 686 - Reset validation when content is empty and manually selected card is populated
							    if(cardDetected != Payment.selectedCard){
							    	$("label[for=notLogInAccNumber]").parent('.errorTooltip').remove();
							    }
							    $("#creditCardType").val(Payment.manuallySelectedCard).trigger("change",["autoDetectionEvent"]);
							}
						}
		           }
		    });
		    // <START> Changes for CPM-458
		   /* $(document).on("keypress","#notLogInAccNumber",function(e){
		    	var charCode = (e.which) ? e.which : e.keyCode
		    			if (charCode != 42 && charCode > 31 && (charCode < 48 || charCode > 57)){
		    				return false;
		    			}else{
		    				return true;
		    			}
		    });*/
		    // <END> Changes for CPM-458

		    $(document).off('change', "#creditCardType").on('change', "#creditCardType", function (e, data) {
				var cardType = $(this).val();
				// For CPM-799/QC-69642
				if($(Payment.data.creditPaymentList).searchValueinObj(cardType) || (Payment.data.unionpayPaymentList && $(Payment.data.unionpayPaymentList).searchValueinObj(cardType))){
					if(Payment.selectedFop !== "payCC"){
				//if(!$('.cardSeparator').is(":visible")){
					Payment.manuallySelectedCard = cardType;
						Payment.resetPaymentTabValidation();
				}
				//var cardName = $("#creditCardType option:selected").text();
				var cardNumberField = $("#notLogInAccNumber");
				if(msg.persistFormData && (msg.persistFormData.cardType != cardType)){
					$("span[for^="+cardNumberField.prop("id")+"]").remove();
					cardNumberField.removeClass("nextGenErrorText");
				}

				$(".reviewPurchaseAmexEnrolled").hide();//hide amex prefilled data on cardtype change
				if(cardType == "DC")
					cardNumberField.prop("maxlength", 14);
				else if(cardType == "AX" || cardType == "TP")
					cardNumberField.prop("maxlength", 15);
				else if(cardType == "VI" || cardType == "CA" || cardType == "JC" || cardType == "DS" || cardType == "UPB")// Changes added for Acculynk : Start
					cardNumberField.prop("maxlength", 16);
				else if(cardType == "SM" || cardType == "ATM" || cardType == "UP")// Changes added for Acculynk : Start
					cardNumberField.prop("maxlength", 19);

				// Changes added for Acculynk : Start
				if((cardType == "UP" || cardType == "UPB") && Payment.selectedFop === "payGC"){
					$("#cardTypeHldr").addClass("cardTypePanel");
					$("#GcUnionPayCardHldr").show();
					$("#GcUnionPayCardType").val(cardType).trigger("change");
				}else{
					$("#cardTypeHldr").removeClass("cardTypePanel");
					$("#GcUnionPayCardHldr").hide();
				}
				if(cardType == "AP" || cardType == "ATM" || cardType == "UP" || cardType == "UPB" || ((cardType == "VI" || cardType == "CA") && Payment.selectedFop == "payACCU")){
					if(msg.saveToWalletEligible == "N"){
					$("#saveToProfileWrapper").hide();
					}
				if(cardType == "AP"){
					/* Start Fix for Defect #51552 */
					if(Payment.selectedFop == "payGC"){
						$("#cardInfoHldr").find("> .paymentFieldOuterLarge,> .CVVHolder").hide();
					}else{
						$("#cardInfoHldr").hide();
					}
					/* End Fix for Defect #51552 */
					$("#hdnIsAlipayPaymentSelected").val("Y");
				}else{
						$("#cardInfoHldr").find("> .paymentFieldOuterLarge,> .CVVHolder").show();
						$("#cardInfoHldr").show();
						$("#hdnIsAlipayPaymentSelected").val("N");
					}
				}else{
					$("#cardInfoHldr").find("> .paymentFieldOuterLarge,> .CVVHolder").show();
					$("#cardInfoHldr").show();
					if(msg.savedFOPList != null && msg.savedFOPList.length < 4 && msg.saveToWalletEligible == "Y"){ //62257
						$("#saveToProfileWrapper").show();
	                }
					$("#hdnIsAlipayPaymentSelected").val("N");
				}
				if(cardType == "TP" || cardType == "ATM" || cardType == "UP" || cardType == "AP"){// Changes added for Acculynk : Start
					$(".CVVHolder").hide();
					$("#cvv").val("");
				} else {
					$(".CVVHolder").show();
				}
				
				//fix for CPM-659  
				if(cardType == "ATM"){
					$("#saveToProfileWrapper").hide();
				}
				// Changes added for Acculynk : End
				$("#ATMCardAdvisory").hide();
				if($(".VBVHolder").length > 0){
					$(".VBVHolder").hide();
					$(".paymentLearnMore").hide();
					if(cardType == "VI" || (msg.creditPaymentList != undefined && msg.creditPaymentList != null && $(msg.creditPaymentList).searchValueinObj("VI") && msg.creditPaymentList.length == 1)){
						if(Payment.selectedFop == "payCC"){
							$("#VBVisa2").show();
							$("#VBVisaLearnMore2").show();
						}else{
							$("#VBVisa").show();
							$("#VBVisaLearnMore").show();
						}
						
					} else if(cardType == "CA" || (msg.creditPaymentList != undefined && msg.creditPaymentList != null && $(msg.creditPaymentList).searchValueinObj("CA") && msg.creditPaymentList.length == 1)){
						if(Payment.selectedFop == "payCC"){
							$("#VBMasterCard2").show();
							$("#VBMasterCardLearnMore2").show();
						}else{
							$("#VBMasterCard").show();
							$("#VBMasterCardLearnMore").show();
						}
					} else if(cardType == "ATM"){
						if(Payment.selectedFop == "payCC"){
							$("#ATMCardAdvisory").show();
						}
					}
				}
				$("#hdnCCTypes").val(cardType);
				$(".card-logo.active").removeClass("caret");
				$(".card-logo.active").removeClass("active");
				$("input[id="+cardType+"]").prop("checked", "true");
				$(".card-logo[data-description="+cardType+"]").addClass("active");
				$(".card-logo[data-description="+cardType+"]").addClass("caret");
				/* Clear out fields PCI compliance */
				$("#notLogInExpMonth").val("");
				$("#notLogInExpYear").val("");
				$("#cvv").val("");
				/* Fix for CPM-687 start */
				//if(data != "autoDetectionEvent" || Payment.selectedFop == "payCC"){
				//if(!$('.cardSeparator').is(":visible")){
				// Changes added for Acculynk : Start
				// CPM - 811 -- Acculynk card number reset commented out
				//Payment.acculynkCardNumber = "";
				//Payment.acculynkLastCardDigit = "";
				Payment.acculynkCheckBinStatus = "";
				Payment.acculynkSavedFopId = "";
				Payment.acculynkInvalidThirdTime = "N";
				Payment.isAcculynkCheckBinCalled = false;
				Payment.isAcculynkCombinedCall = false;
				Payment.removeFopErrorMsg();
				// Changes added for Acculynk : End
				//}
				/* Fix for CPM-687 end */
				if(msg.persistFormData && $("#cartPayment").attr("novalidate") && cardNumberField.val().indexOf("*")!= -1){
					$("span[for^="+cardNumberField.prop("id")+"]").remove();
					$("span#"+cardNumberField.prop("id")+"-error").remove();
					cardNumberField.removeClass("nextGenErrorText");
					cardNumberField.rules("add", "emptyField");
					cardNumberField.rules("add","validateCardNumber");
					cardNumberField.rules("add","isNumeric");
					cardNumberField.rules("add","validateCardNumberLeadingChars");
				}
				if(!data === "autoDetectionEvent"){
				$("#notLogInAccNumber").val("");
				}
				
				setTimeout(function(){
				if(cardType == "AX" || cardType == "SM"){
 	    			$("#cvv").attr("maxlength",4);
 	    		}else {
 	    			$("#cvv").attr("maxlength",3);
 	    		}
				},100);

				// amex card info display
            if(msg.amexApprovedInd && msg.amexCCMailOptionSelected){
               if(cardType == "SM"){
                  $("#cardInfoHldr, #cardPrintNameHldr, #billingContainerWrapper").show();
                  $("#hdnAmexApplInd").val("");
               }
               if(msg.loggedInInd != null && msg.loggedInInd == "Y"){
                  $("#billingAddressContainer").show();
               }
            }
            if(msg.amexApprovedInd && cardType != "SM"){
               $("#cardInfoHldr, #cardPrintNameHldr, #billingContainerWrapper").show();
               $(".reviewPurchaseAmexEnrolled").hide();
               $("#hdnAmexApplInd").val("");
            }
			/* AMEX Express Checkout banner control*/
			/* Commented for CPM - 787 requirement*/
            		// For CPM - 810 removed AMEX banner from Gift card
		            if(msg.creditPaymentList != undefined && msg.creditPaymentList != null && $(msg.creditPaymentList).searchValueinObj("AX") &&
		            		$.inArray(Payment.selectedFop, Payment.amexExpCheckoutEligibleFops) != -1 && 
		            		(Payment.selectedFop == "payCC" || cardType == "AX" || cardType == "SM")){
            	$("#amexExpressCko").show();
				$("#amex-express-checkout").show();
            }else{
            	$("#amexExpressCko").hide();
				$("#amex-express-checkout,#amexCKOErrorMsg").hide();
            }
            /*if(cardType == "SM" || cardType == "AX"){
				$("#amexExpressCko").show();
				$("#amex-express-checkout").show();

			}else{
				$("#amexExpressCko").hide();
				$("#amex-express-checkout,#amexCKOErrorMsg").hide();

			}
			/* AMEX Express Checkout banner control END*/
			Payment.setFirstAndLastNameInputLabel();
			Payment.selectedCard = cardType;
			// Changes added for Acculynk : Start
			Payment.acculynkExpDateDisplay();
			Payment.acculynkCardName = flightUtil.displayCardName(Payment.selectedCard);
			// Changes added for Acculynk : End
            //Show Card specific error msg if any.
			Payment.showCardSpecificErrorMsg (cardType);
			Payment.toggleTripExtraSelection();
			Payment.toggleTripInsuranceSelection();
			// Defect #72076
			if(e && e.originalEvent !== undefined){
				checkoutOmnitureUtil.registerClick($(this));
			}
			// Commenting out this line to solve the issue where
		    // the country code dropdown is popping on page load on iPAD
			//$("#countryCode").trigger("change").trigger("blur").trigger("focus");
			/* fix for defect id 60356 */
			$("select").selectmenu( "refresh" );
				}
				if(Payment.selectedFop == "payCC" && msg.creditPaymentList != undefined && msg.creditPaymentList != null && $.isArray(msg.creditPaymentList) && msg.creditPaymentList.length === 1){
					Payment.selectedCardIcon(msg.creditPaymentList[0].type);
				}
			});


		 // Changes added for Acculynk : Start
		    $(document).off("change","#GcUnionPayCardType").on("change","#GcUnionPayCardType",function(){
				var cardType = $(this).val();
				if($("#creditCardType option:selected").text() === "UnionPay"){
					$("#creditCardType option:selected").prop("value", cardType);
					$("#cardTypeLogo").find("input[name=cardType]:checked").prev("label").prop("for", cardType);
					$("#cardTypeLogo").find("input[name=cardType]:checked").prop("id", cardType);
					Payment.selectedCard = cardType;
					$("#notLogInExpMonth").val("");
					$("#notLogInExpYear").val("");
					Payment.acculynkExpDateDisplay();
					if(cardType == "UP"){
						$(".CVVHolder").hide();
						$("#cvv").val("");
					}else if(cardType == "UPB"){
						$(".CVVHolder").show();
					}
					checkoutOmnitureUtil.registerClick($(this));
				}
			});
			// Changes added for Acculynk : End

		    $(document).off("focus change","#notLogInAccNumber").on("focus change","#notLogInAccNumber",function(){
				if($(this).val().indexOf("*")!= -1){
					$(this).val("");
					/* For CPM 720 */
					if(Payment.selectedFop == "payCC"){
					Payment.selectedCardIcon("");
					}
					/* For CPM 720 */
				//if($("#cartPayment").attr("novalidate")){
					$("#notLogInAccNumber").rules("add", "emptyField");
					$("#notLogInAccNumber").rules("add","validateCardNumber");
					$("#notLogInAccNumber").rules("add","isNumeric");
					$("#notLogInAccNumber").rules("add","validateCardNumberLeadingChars");
					//}
				} else {
					$("#hdnIsAcctNumEdit").val("Y");
				}
			});
		    $(document).on("click","#addTripExtra, #addEditTripExtras",function(){
				var FOPFields = {};
				if (CustomerInfo.isLoggedIn()) {
					if (newPaymentAction == "Y") {
						$("#hdnPaymentOprType").val("loggedInNewPayment");
					} else if (editFOPAction == "Y" && addEditAddrAction == "Y") {
						$("#hdnPaymentOprType").val("loggedInAddEditAddr");
					} else if (editFOPAction == "Y" && addEditAddrAction != "Y") {
						$("#hdnPaymentOprType").val("loggedInEditFOP");
					} else {
						$("#hdnPaymentOprType").val("loggedInPayment");
					}
				} else {
					$("#hdnPaymentOprType").val("notLoggedInPayment");
				}
	            /*
	             * Setting value of hidden field payOpt to post to DataRetentionJSONAction
	             */
				$("#hdnPayOpt").val(Payment.selectedFop);
	    		$('#hdnTotalTripExtraPrice').val(tripExtraTotalAmount);
	    		$("#hdnTotalSeatPricePayment").val(SeatUtils.totalSeatPrice);
	    		/* Start for defect #47314 */
	    		if(!(msg.shopType == "Award" || msg.selectedPwm == "Y" || msg.edocSelectedInd == "Y" || msg.USOrCanadaFlight == false || msg.payWithMilesInd == "Y") && !msg.pricingDiscountTypeInd){
	    			$("#hdnBestFareLogoShowingFlag").val("Y");
	    		} else{
	    			$("#hdnBestFareLogoShowingFlag").val("N");
	    		}
	    	   /* Start for defect #47314 */
		    	$.each($("#cartPayment").serialize().split("&"),function(fieldIndx,fields){
		    	    var fieldsArr = fields.split("=");
		    	    if(fieldsArr[0] == "cvv"){
		    	        return true;
		    	    }

		    	    FOPFields[fieldsArr[0]] = fieldsArr[1];
		    	});
		    	if(msg.companionCert){
		    		FOPFields.country = "US";
		    	}
	    		tripExtraUtil.addTripExtraJSONAction(FOPFields);
		    });

		    $(document).on("click",".noSavedFOPLink a",function(){
					$("#payCC").trigger("click");
		    	$(".noSavedFOPLink").hide();
					Payment.amexExpTabTrack = "payWL"
		    });
		    /*$(document).on('keyup',".hazmatModalLink", function(e){
		    	if(e.which == 13) {
		    		$('.hazmatModalLink').trigger('click');
		        }
		    });*/

		    $(document).on("click",".hazmatModalLink",function(e){
		    	$('#hazMatModal').parent().addClass("pos-dialog").addClass("hazMatDialog").end().dialog('open').removeClass("ui-widget-content").parents(".ui-dialog").removeClass("ui-widget-content");
		        $(".ui-widget-overlay").addClass("tripOverlay");
		        $(".ui-dialog-titlebar").hide();
		        $("#hazMatModal #purchase_button").hide();
		        e = $.event.fix(e);
		    	e.preventDefault();
		    });

			$(document).on("click","#amexExpressCheckoutLink",function(e){
				$("#amex-express-checkout img").click();
			});

			$(document).off("click","#amex-express-checkout,#amexExpressCheckoutLink").on("click","#amex-express-checkout,#amexExpressCheckoutLink",function(e){
				var FOPFields = {};
				// make giftcard tab selected by default if gift card already applied
				if(msg.giftCardAppliedInd !== undefined && msg.giftCardAppliedInd){
					FOPFields.payOpt = "payGC";
				}else{
					FOPFields.payOpt = Payment.amexExpTabTrack;
				}
				FOPFields.creditCardType = Payment.selectedCard;
				FOPFields.cacheKeySuffix = cacheKeySuffix;
				if ($("#insuranceOfferHTML").is(":visible") && $('#addInsurance').val() && $('#removeInsurance').val() &&
					  	  (($("#addInsurance").hasClass("active") || $("#removeInsurance").hasClass("active")))) {
					if(Payment.amexExpTabTrack == "payGC"){
						// for Gift card tab, insurance always selected as NO if page reload from amex #63158
						FOPFields.insurancePurchase = "N";
					}else{
						FOPFields.insurancePurchase = $("#addInsurance").hasClass("active")? "Y":"N";
					}
		    	}
				FOPFields.hdnTotalSeatPrice=tripExtraTotalAmount;
				FOPFields.hdnTotalTripExtraPrice=SeatUtils.totalSeatPrice;

				if(CustomerInfo.isLoggedIn()){
					if(newPaymentAction == "Y") {
						FOPFields.hdnPaymentOprType = "loggedInNewPayment";
					} else if(editFOPAction == "Y" && addEditAddrAction == "Y"){
						FOPFields.hdnPaymentOprType = "loggedInAddEditAddr";
					} else if(editFOPAction == "Y" && addEditAddrAction != "Y"){
						FOPFields.hdnPaymentOprType = "loggedInEditFOP";
					} else {
						FOPFields.hdnPaymentOprType = "loggedInPayment";
					}
				} else {
					FOPFields.hdnPaymentOprType = "notLoggedInPayment";
			   	}
				checkoutOmnitureUtil.registerClick($(this));
				$.ajax({
			   		type: 'POST',
			           dataType: "json",
			           url: 'DataRetentionJSONAction',
			           headers : {"cache-control" : "no-cache"},
			           data: FOPFields,
			           success: function(data) {
			        	   //
			   		}/*,
			   		error : function (xhr, ajaxOptions, thrownError) {
			   		}*/
			   }).fail(function(jqXHR, textStatus, error){
					try{
						delta.utils.logger.ajaxError(jqXHR, textStatus, error);
						delta.utils.logger.logMessage("Request Failed: " + error, "error");
					}catch(err){
						if (window.console && window.console.error) {
							console.error('Error logging to delta.utils.logger:' + err);
						}
					}
				});
				 //e.stopImmediatePropagation();
			});
		},
		/**
		 * function for loading Card Logo on change of the FOP drop down.
		 */
		displayCardImage : function(cardType,msg){
			var imageURL;
			switch(cardType){
				case "VI" :
					imageURL = msg.walletCardImgUrl.VI;
					altTag = "VISA";
					break;
				case "AX":
					imageURL = msg.walletCardImgUrl.AX;
					altTag = "Amex";
					break;
				case "CA":
					imageURL = msg.walletCardImgUrl.CA;
					altTag = "MasterCard";
					break;
				case "DC":
					imageURL = msg.walletCardImgUrl.DC;
					altTag = "DinersClub";
					break;
				case "DL":
					imageURL = msg.walletCardImgUrl.DL;
					altTag = "Delta Equity Card";
					break;
				case "DS":
					imageURL = msg.walletCardImgUrl.DS;
					altTag = "Discover";
					break;
				case "JC":
					imageURL = msg.walletCardImgUrl.JC;
					altTag = "Japan Credit Bureau";
					break;
				case "MO":
					imageURL = msg.walletCardImgUrl.MO;
					altTag = "Rialto Pay";
					break;
				case "PP":
					imageURL = msg.walletCardImgUrl.PP;
					altTag = "PayPal";
					break;
				case "SM":
					imageURL = msg.walletCardImgUrl.SM;
					altTag = "SkyMilesAmex";
					break;
				case "TP":
					imageURL = msg.walletCardImgUrl.TP;
					altTag = "UATP";
					break;
				// Changes added for Acculynk : Start
				case "ATM":
					imageURL = msg.walletCardImgUrl.ATM;
					altTag = "ATM";
					break;
				case "UP":
					imageURL = msg.walletCardImgUrl.UP;
					altTag = "UnionPay Debit";
					break;
				case "UPB":
					imageURL = msg.walletCardImgUrl.UPB;
					altTag = "UnionPay Credit";
					break;
				// Changes added for Acculynk : End
			}
			var totalURL = msg.hyperLinkHostName + imageURL;//imageURL;
			$("#loggedPaymentSection .cardSelectionRow img").attr({"src":totalURL,"alt":altTag});
		},
		useNewPayment : function(msg,className){
			if(className != "myWallet") {
				newPaymentAction = "Y";
			this.loadNotLoggedInTemplate(msg);
				$("#hdnSavedFopId").val("");
				$("#addrAlias").change();
			}else{
				newPaymentAction = "N";
			}
   },
   processFopRules: function() {
	   /* Fix for CPM-416 */
		   msg.fopRule.payPalCredit = Payment.fopConstants.notApplicable;
	   if(!$( msg.fopRule ).searchObj(Payment.fopConstants.viewMore)) {
		   $(".viewMoreLink").remove();
	   }
	   $(".fopTypes input").each(function(index,element){

                //Clears selection
                if( $(element).next('span').hasClass('labelTxtDisabled')){
                    $(element).next('span').removeClass('labelTxtDisabled');
			 } else if ($(element).next('span').hasClass('labelTxtSelected')) {
                    $(element).next('span').removeClass('labelTxtSelected');
                }
		   var fopType = $(element).prop("id");
	       switch(fopType) {
	       	  case 'payWL':
			 	if (msg.fopRule.myWallet == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.myWallet == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
	       			  //Payment.selectedFop = 'payWL';
			 	} else if (msg.fopRule.myWallet == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		}else{
	       			$(element).parent().show();
	       		  }
	       		  break;
	       	case 'payCC':
			 	if (msg.fopRule.creditDebit == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.creditDebit == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
	       			  //Payment.selectedFop = 'payCC';
	       			 /* Fix for CPM-720 start */
	       			  $("#selectCardTypeDropdownHolder").css({'position': 'absolute','left' : '-9999px'});
	       			  $("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").show();
	       			  $("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder").addClass("autoSelectionClass");
	       		     /* Fix for CPM-720 end */
			 	} else if (msg.fopRule.creditDebit == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		 }else{
		       			$(element).parent().show();
	       		  }
	       		  break;
			// Changes added for Acculynk : Start
	       	case 'payACCU':
			 	if (msg.fopRule.acculynk == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.acculynk == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
	       			  //Payment.selectedFop = 'payCC';
			 	} else if (msg.fopRule.acculynk == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().prop('disabled', true).hide();
	       			  $(element).prop("disabled", true);
	       		 }else{
		       			$(element).parent().prop('disabled', false).show();
	       		  }
	       		  break;
	       	case 'payUN':
			 	if (msg.fopRule.unionPay == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.unionPay == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
					  $("#onlineBankHldr,#cardLogoHldr,#amex-express-checkout,#amexExpressCko").hide();
					  $("#cardInfoHldr").show();
	       			  //Payment.selectedFop = 'payCC';
			 	} else if (msg.fopRule.unionPay == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		 }else{
		       			$(element).parent().show();
	       		  }
	       		  break;
	       	// Changes added for Acculynk : End
	       	case 'payPP':
			 	if (msg.fopRule.payPal == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.payPal == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr,#amex-express-checkout,#amexExpressCko").hide();
	       			  //Payment.selectedFop = 'payPP';
			 	} else if (msg.fopRule.payPal == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		  }else{
		       			$(element).parent().show();
	       		  }

			 	var originalFopRule = $.extend({}, fopRuleJSON);
			 	if (originalFopRule.payPal == Payment.fopConstants.viewMore) {
			 		Payment.isPaypalPrimary = false;
	       			  $(".fopTypes.primaryFops").find("label[for=payPP]").remove();
	       			  $(".fopTypes.fopViewMore").find("label[for=payPP]").show();
	       		  }else{
	       			 Payment.isPaypalPrimary = true;
	       			 $(".fopTypes.fopViewMore").find("label[for=payPP]").remove();
	       		  }
	       		  break;
	       	case 'payBL':
			 	if (msg.fopRule.payPalCredit == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.payPalCredit == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr,#amex-express-checkout,#amexExpressCko").hide();
	       			  //Payment.selectedFop = 'payBL';
			 	} else if (msg.fopRule.payPalCredit == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		  }else{
		       			$(element).parent().show();
	       		  }
			 	var originalFopRule = $.extend({}, fopRuleJSON);
			 	if (originalFopRule.payPalCredit == Payment.fopConstants.viewMore) {
			 		Payment.isPaypalCreditPrimary = false;
	       			  $(".fopTypes.primaryFops").find("label[for=payBL]").remove();
	       			  $(".fopTypes.fopViewMore").find("label[for=payBL]").show();
	       		  }else{
	       			Payment.isPaypalCreditPrimary = true;
	       			 $(".fopTypes.fopViewMore").find("label[for=payBL]").remove();
	       		  }
	       		  break;
	       	case 'payAP':
			 	if (msg.fopRule.alipay == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.alipay == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr,#amex-express-checkout,#amexExpressCko").hide();
	       			  //Payment.selectedFop = 'payAP';
			 	} else if (msg.fopRule.alipay == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		  }else{
		       			$(element).parent().show();
	       		  }

			 	var originalFopRule = $.extend({}, fopRuleJSON);
			 	if (originalFopRule.alipay == Payment.fopConstants.viewMore) {
			 		Payment.isAlipayPrimary = false;
	       			$(".fopTypes.primaryFops").find("label[for=payAP]").remove();
	       			  $(".fopTypes.fopViewMore").find("label[for=payAP]").show();
	       		  }else{
	       			Payment.isAlipayPrimary = true;
	       			 $(".fopTypes.fopViewMore").find("label[for=payAP]").remove();
	       		  }
	       		  break;
			//For RTBT
            case 'payRTBT':
			 	if (msg.fopRule.rtbt == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.rtbt == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr,#amex-express-checkout,#amexExpressCko").hide();
					  $("#onlineBankHldr").show();
	       			 /* Fix for CPM-418 */
	       			  if(msg.germanCountry == true){
	       				 $("#onlineCountry option[value=DE]").attr("selected",true);
	       				 $("#onlineCountry").trigger("change");
	       			  }
	       			  //Payment.selectedFop = 'payAP';
			 	} else if (msg.fopRule.rtbt === Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		  }else{
		       			$(element).parent().show();
	       		  }

			 	var originalFopRule = $.extend({}, fopRuleJSON);
			 	if (originalFopRule.rtbt === Payment.fopConstants.viewMore) {
			 		Payment.isOnlineBankingPrimary = false;
                  $(".fopTypes.primaryFops").find("label[for=payRTBT]").remove();
                    $(".fopTypes.fopViewMore").find("label[for=payRTBT]").show();
	       		  }else{
	       			Payment.isOnlineBankingPrimary = true;
                   $(".fopTypes.fopViewMore").find("label[for=payRTBT]").remove();
	       		  }
	       		  break;
	       	case 'payGC':
			 	if (msg.fopRule.giftCard == "Disabled") {
	       			  $(element).next('span').addClass('labelTxtDisabled');
			 	} else if (msg.fopRule.giftCard == "Selected") {
	       			  $(element).prop("checked", true);
	       			  $(element).next('span').addClass('labelTxtSelected');
	       			  //Payment.selectedFop = 'payGC';
	       			 /* Fix for CPM-720 start */
	       			$("#selectCardTypeDropdownHolder").removeAttr("aria-hidden style");
	       			$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
	       			$("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder,#nextGenBooking .chooseCreditCardHeading").removeClass("autoSelectionClass");
	       		 /* Fix for CPM-720 end */
			 	} else if (msg.fopRule.giftCard == Payment.fopConstants.notApplicable) {
	       			  $(element).parent().hide();
	       			  $(element).prop("disabled", true);
	       		  }else{
		       			$(element).parent().show();
	       		  }
	       		  break;
	       	default:

	       		$(element).next('span').addClass('labelTxtDisabled');
	       }
	   });
	   // Changes added for Acculynk : Start
	   var defaultFopCount = $("#defaultFopHldr > label:visible").length;
	   if(defaultFopCount < 7){
		   $("#alternetAlipayUnionpay").show();
		   $("#defaultAlipayUnionpay").remove();
	   }else{
		   $("#alternetAlipayUnionpay").remove();
	   }
	   // Changes added for Acculynk : End
	   if(msg.fopRule.payPal == "Selected") {
    		$("#payPP").trigger("click");
	   }else if(msg.fopRule.myWallet == "Selected") {
	    		$("#payWL").trigger("click");
					// Amex checkout flow
					if(msg.amexExpCkoInd && msg.amexExpCkoData.success === true){
						$("#billingAddressContainer,#loggedPaymentSection").hide();
						Payment.renderAmexExpCko();
					}else if(msg.amexExpCkoInd && msg.amexExpCkoData.success === false){
						Payment.renderAmexExpCkoError();
						if(msg.loggedInInd == "Y" && $('.noSavedFOPLink').length > 0){
							$('.noSavedFOPLink a').click();
						}
					}else if(!msg.amexExpCkoInd && (msg.fareChangeInd !== undefined && msg.fareChangeInd == "Y") && (msg.persistFormData != null && msg.persistFormData.paymentOprType == "loggedInNewPayment")){
						if(msg.loggedInInd == "Y" && $('.noSavedFOPLink').length > 0){
							$('.newPaymentLink').click();
						}
					}else if(!msg.amexExpCkoInd && msg.bdsErrorMsgMap != null && !$.isEmptyObject(msg.bdsErrorMsgMap) && (msg.persistFormData != null && msg.persistFormData.paymentOprType == "loggedInNewPayment")){
						var chkAmexErrMap = false;
						$.each(msg.bdsErrorMsgMap,function(errCode,errMsg){
							if(errMsg != ""){
								chkAmexErrMap = true;
							}
						});
						if(chkAmexErrMap && msg.loggedInInd == "Y" && $('.noSavedFOPLink').length > 0){
							$('.newPaymentLink').click();
						}
					}
       }else if(msg.fopRule.creditDebit == "Selected") {
	    		$("#payCC").trigger("click");
	    		if(msg.amexApprovedInd && msg.amexCCMailOptionSelected){
						$("#billingAddressContainer").hide();
					}
					// Amex checkout flow
					if(msg.amexExpCkoInd && msg.amexExpCkoData.success === true){
						$("#billingAddressContainer").hide();
						Payment.renderAmexExpCko();
					}else if(msg.amexExpCkoInd && msg.amexExpCkoData.success === false){
						Payment.renderAmexExpCkoError();
					}
		// Changes added for Acculynk : Start
		}else if(msg.fopRule.acculynk == "Selected") {
            $("#payACCU").trigger("click");
		}else if(msg.fopRule.unionPay == "Selected") {
            $("#payUN").trigger("click");
        // Changes added for Acculynk : End
	    }else if(msg.fopRule.payPalCredit == "Selected") {
	    		$("#payBL").trigger("click");
	    }else if(msg.fopRule.alipay == "Selected") {
	    		$("#payAP").trigger("click");
		}else if(msg.fopRule.rtbt == "Selected") {//For RTBT
            $("#payRTBT").trigger("click");
	    }else if(msg.fopRule.giftCard == "Selected") {
	    		$("#payGC").trigger("click");
					// Amex checkout flow
					if(msg.amexExpCkoInd && msg.amexExpCkoData.success === true){
						$("#billingAddressContainer,.giftCardInfo").hide();
						Payment.renderAmexExpCko();
					}else if(msg.amexExpCkoInd && msg.amexExpCkoData.success === false){
						Payment.renderAmexExpCkoError();
					}else if(!msg.amexExpCkoInd && (msg.fareChangeInd !== undefined && msg.fareChangeInd == "Y") && (msg.persistFormData != null && msg.persistFormData.paymentOprType == "loggedInNewPayment")){
						if(msg.loggedInInd == "Y" && $('.noSavedFOPLink').length > 0){
							$('.newPaymentLink').click();
						}
					}else if(!msg.amexExpCkoInd && msg.bdsErrorMsgMap != null && !$.isEmptyObject(msg.bdsErrorMsgMap) && (msg.persistFormData != null && msg.persistFormData.paymentOprType == "loggedInNewPayment")){
						var chkAmexErrMap = false;
						$.each(msg.bdsErrorMsgMap,function(errCode,errMsg){
							if(errMsg != ""){
								chkAmexErrMap = true;
							}
						});
						if(chkAmexErrMap && msg.loggedInInd == "Y" && $('.noSavedFOPLink').length > 0){
							$('.newPaymentLink').click();
						}
					}
	    }
	   
	   /* Fix for CPM-622 start*/
	   $(".primaryFops label").each(function(){
   if($(this).prop("for") != "payWL" && $(this).find("span").hasClass("labelTxtDisabled")){
		   var disabledElement = $(this).detach();
			   Payment.addFopToViewMore.push(disabledElement);
		   }
	   });
	   /* Fix for CPM-622 end*/


	   if($("#defaultFopHldr  label").length > 6){
		   Payment.addFopToViewMore.push($("#defaultFopHldr  label").slice(6).detach());
	   }
   },
   renderAmexExpCko : function(){

	  $("#cardLogoHldr,#amexExpressCko,#cardInfoHldr, #amex-express-checkout, #billingContainerWrapper, #cardPrintNameHldr, #saveToProfileWrapper,#amexCKOErrorMsg").hide();
		if(msg.savedFOPList){
				savedFopLength = msg.savedFOPList.length;
				msg.savedFopLength = savedFopLength;
		}
		$("#amexExpCkoPayment").html($("#_amexExpressCheckout_payment_section").render(msg));
	  $("#amexExpCKOSelected").val("Y");
	  Payment.selectedCardForAEC = msg.persistFormData.cardType;
	  $(document).off("click","#amexExpBillToggle").on("click","#amexExpBillToggle", function(e){
		$("#amexExpBillInfo").toggle( "slow", function(e) {
				if($("#amexExpBillInfo").is(":visible")){
					$("#amexExpBillToggle").html("Hide Billing Address");
					$("#amexExpBillToggle").attr("aria-expanded","true");
					checkoutOmnitureUtil.registerClick($(this));
				}else{
					$("#amexExpBillToggle").html("Show Billing Address");
					$("#amexExpBillToggle").attr("aria-expanded","false");
				}
			});
		});
		$(document).on("click","#amexChooseCard",function(e){
			checkoutOmnitureUtil.registerClick($(this));
			$("#amex-express-checkout img").click();
		});
		$(document).on("click","#useNonAmexBilling",function(){
			msg.amexExpCkoInd = false;
			$("#cardLogoHldr,#amexExpressCko,#cardInfoHldr, #amex-express-checkout, #billingContainerWrapper, #cardPrintNameHldr, #billingAddressContainer,#saveToProfileWrapper").show();
			$('#amexExpCkoPayment').html("");
			//$("#payCC").trigger("click");
			if(msg.loggedInInd == "Y" && $('.noSavedFOPLink').length > 0 && Payment.selectedFop == "payWL"){
				$('.noSavedFOPLink a').click();
			}else{
				$('.newPaymentLink').click();
			}
			if(Payment.selectedFop == "payGC"){
				$(".giftCardInfo").show();
			}
			if($("#fopMsgCont p.fopRemoveMsg").is(":visible")){
				$("#amex-express-checkout").css("top","211px");
			}else if($("#billPayment p.doubleMilesContainer").is(":visible")){
				if(Payment.selectedFop == "payCC"){
					$("#amex-express-checkout").css("top","56px");
				}else{
				$("#amex-express-checkout").css("top","146px");
				}
			}else{
				$("#amex-express-checkout").css("top","117px");
			}
			$("select").selectmenu( "refresh" );
			checkoutOmnitureUtil.registerClick($(this));
		});
		// converting 4 digit year
		try{
			var amexExpiry = msg.amexExpCkoData.expDate.split("/");
			var amexCardName = "";
			var amexExpYrs = amexExpiry[1];
			var amex4digitYer = "0000";
			var currentCentury = 0;
			var current4digitYear = parseInt(new Date().getFullYear());
			var current2digitYear = current4digitYear.toString().substr(2,2);
			if(current4digitYear>"2000" & current4digitYear<="2100")currentCentury = 21;
			else if(current4digitYear>"2100" & current4digitYear<="2200")currentCentury = 22;
			if(amexExpYrs >= current2digitYear){
				amex4digitYer = parseInt(parseInt(currentCentury-1) * 100) + parseInt(amexExpYrs);
			}else{
				amex4digitYer = parseInt(currentCentury * 100) + parseInt(amexExpYrs);
		 }
		 amex4digitYer = amexExpiry[0] + "/" + amex4digitYer;
		 //msg.amexExpCkoData.expDate = amex4digitYer;
		 if(msg.amexExpCkoData.productDescription !== undefined && msg.amexExpCkoData.productDescription != ""){
		 		amexCardName = msg.amexExpCkoData.productDescription;
			}
	 		$('#amexCCInfo').val(amexCardName + '***********' + msg.amexExpCkoData.last4digit + ', exp ' + amex4digitYer).prop('readonly', true);
		}catch(e){
			delta.utils.logger.logMessage(e, "error");
	 	}
		//
		//Fix for capitalizing an already uppercase name
		$(".amexExpBillName").text($(".amexExpBillName").text().toLowerCase().replace(/\b[a-z]/g,function(f){return f.toUpperCase();}));
		if($("#amexUpdateProfileInd").length){
			$("#amexUpdateProfileInd").prop("checked", true);
		}
		if ($(".noSavedFOPLink").css("display", "block")){
			$(".noSavedFOPLink").hide();
		}
		//$("html, body").animate({ scrollTop: $('#defaultFopHldr').offset().top }, 1000);
	},
	renderAmexExpCkoError : function(){
			$("#amexCKOErrorMsg").load("/utils/Cart/EnhanceBooking/eb-promo/amex-express-checkout-error-message.html").show();
			//$("html, body").animate({ scrollTop: $('#defaultFopHldr').offset().top }, 1000);
	},
	/* fix for CPM-626 start */
	sortPaymentTabsEnabled : function(){
		var $fopHolder = $('#defaultFopHldr'),
		$tabs = $('#defaultFopHldr label');
		$tabs.sort(function(a,b){
			var an = a.getAttribute('data-order'),
				bn = b.getAttribute('data-order');
	
			if(an > bn) {
				return 1;
			}
			if(an < bn) {
				return -1;
			}
			return 0;
		});
		$tabs.detach().appendTo($fopHolder);
	},
	sortPaymentTabsDisabled : function(){
		var $fopHolder = $('#alternetFopHldr .fopViewMore'),
		$tabs = $('#alternetFopHldr .fopViewMore label');
		
		$tabs = $tabs.filter(function( index ) {
			 return $(this).find("span").hasClass("labelTxtDisabled");
	    });
		
		
		$tabs.sort(function(a,b){
			var an = a.getAttribute('data-order'),
				bn = b.getAttribute('data-order');
			if(an > bn) {
				return 1;
			}
			if(an < bn) {
				return -1;
			}
			return 0;
		});
		$tabs.detach().appendTo($fopHolder);
	},
   reloadFopRules : function(fopRule) {
	   /*
	    * Reload Fop rules and clear previous fop states.
	    */
	  // Payment.toggleTripInsuranceSelection(); // defect# 52077 fix

	   /* Fix for CPM-416 */
		   msg.fopRule.payPalCredit = Payment.fopConstants.notApplicable;
	   
	   /* Fix for CPM-626 start */
	   if(Payment.addFopToViewMore.length){
		   for(var i=0;i<Payment.addFopToViewMore.length;i++){
			   var attachableElement = $(Payment.addFopToViewMore[i]).find("span").removeClass("labelTxtDisabled");
			   $(attachableElement).parent().detach().appendTo("#defaultFopHldr");
		   }
		   Payment.addFopToViewMore = [];
	   }
	   
	   
	   /* Fix for CPM-626 end */
	   $(".fopTypes input").each(function(index,element){

           /*if( $(element).next('span').hasClass('labelTxtDisabled')){
               $(element).next('span').removeClass('labelTxtDisabled');
           }
           else if($(element).next('span').hasClass('labelTxtSelected')){
               $(element).next('span').removeClass('labelTxtSelected');
           }*/

	   var fopType = $(element).prop("id");
	      switch(fopType) {
	      	  case 'payWL':
	      		  if(fopRule.myWallet == "Disabled") {
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      		  }else if(fopRule.myWallet == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
	      			  //Payment.selectedFop = 'payWL';
	      		  }else if(fopRule.myWallet == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
		       			if( $(element).next('span').hasClass('labelTxtDisabled')){
		       				$(element).next('span').removeClass('labelTxtDisabled');
		       			}
		       			else if($(element).next('span').hasClass('labelTxtSelected')){
		       				$(element).next('span').removeClass('labelTxtSelected');
		       			}
	      		  }
	      		  break;
	      	case 'payCC':
	      		  if(fopRule.creditDebit == "Disabled") {
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      		  }else if(fopRule.creditDebit == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
	      			  //Payment.selectedFop = 'payCC';
	      			  /* Fix for CPM-720 start */
	      			$("#selectCardTypeDropdownHolder").css({'position': 'absolute','left' : '-9999px'});
	      			$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").show();
	      			$("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder").addClass("autoSelectionClass");
	      			 /* Fix for CPM-720 end */
                    if (msg.myWalletLoginClickInd != undefined && msg.myWalletLoginClickInd == "Y" && $("#openLoginContainer").length > 0) {
                        $(element).next('span').removeClass('labelTxtSelected');
                    }
	      		  }else if(fopRule.creditDebit == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
		       			if( $(element).next('span').hasClass('labelTxtDisabled')){
		       				$(element).next('span').removeClass('labelTxtDisabled');
		       			}
		       			else if($(element).next('span').hasClass('labelTxtSelected')){
		       				$(element).next('span').removeClass('labelTxtSelected');
		       			}
	      		  }
	      		  break;
			// Changes added for Acculynk : Start
	      	case 'payACCU':
	      		  if(fopRule.acculynk == "Disabled") {
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      		  }else if(fopRule.acculynk == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
	      		  }else if(fopRule.acculynk == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().prop('disabled', true).hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().prop('disabled', false).show();
		       			if( $(element).next('span').hasClass('labelTxtDisabled')){
		       				$(element).next('span').removeClass('labelTxtDisabled');
		       			}
		       			else if($(element).next('span').hasClass('labelTxtSelected')){
		       				$(element).next('span').removeClass('labelTxtSelected');
		       			}
	      		  }
	      		  break;
	      	case 'payUN':
	      		  if(fopRule.unionPay == "Disabled") {
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      		  }else if(fopRule.unionPay == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
					  $("#onlineBankHldr,#cardLogoHldr").hide();
					  $("#cardInfoHldr").show();
	      		  }else if(fopRule.unionPay == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
		       			if( $(element).next('span').hasClass('labelTxtDisabled')){
		       				$(element).next('span').removeClass('labelTxtDisabled');
		       			}
		       			else if($(element).next('span').hasClass('labelTxtSelected')){
		       				$(element).next('span').removeClass('labelTxtSelected');
		       			}
	      		  }
	      		  break;
	      	// Changes added for Acculynk : End
	      	case 'payPP':
	      		  if(fopRule.payPal == "Disabled" || eDocUtils.eDocDataObj.giftCertExist) {
	      			if(fopRule.payPal != Payment.fopConstants.viewMore){
	      			  msg.fopRule.payPal = "Disabled";
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      			}
	      		  }else if(fopRule.payPal == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr").hide();
	      			  //Payment.selectedFop = 'payPP';
	      		  }else if(fopRule.payPal == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
		       			if(fopRule.payPal != Payment.fopConstants.viewMore) {
		       				if( $(element).next('span').hasClass('labelTxtDisabled')){
			       				$(element).next('span').removeClass('labelTxtDisabled');
			       			}
			       			else if($(element).next('span').hasClass('labelTxtSelected')){
			       				$(element).next('span').removeClass('labelTxtSelected');
			       			}
		       			}
	      		  }
	      		  var originalFopRule = $.extend({}, fopRuleJSON);
	      		  if(originalFopRule.payPal == Payment.fopConstants.viewMore && !Payment.isPaypalPrimary) {
	      			  $(".fopTypes.primaryFops").find("label[for=payPP]").remove();
	      			  $(".fopTypes.fopViewMore").find("label[for=payPP]").show();
	      		  }else{
	      			 $(".fopTypes.fopViewMore").find("label[for=payPP]").remove();
	      		  }
	      		  break;
	      	case 'payBL':
	      		  if(fopRule.payPalCredit == "Disabled" || eDocUtils.eDocDataObj.giftCertExist || parseFloat(totalFinalAmountDue) > 5000) {
	      			  if(fopRule.payPalCredit != Payment.fopConstants.viewMore){
	      			  msg.fopRule.payPalCredit = "Disabled";
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      			  }
	      		  }else if(fopRule.payPalCredit == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr").hide();
	      			  //Payment.selectedFop = 'payBL';
	      		  }else if(fopRule.payPalCredit == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
		       			if(fopRule.payPalCredit != Payment.fopConstants.viewMore) {
		       				if( $(element).next('span').hasClass('labelTxtDisabled')){
			       				$(element).next('span').removeClass('labelTxtDisabled');
			       			}
			       			else if($(element).next('span').hasClass('labelTxtSelected')){
			       				$(element).next('span').removeClass('labelTxtSelected');
			       			}
		       			}
	      		  }
	      		 var originalFopRule = $.extend({}, fopRuleJSON);
	      		 if(originalFopRule.payPalCredit == Payment.fopConstants.viewMore && !Payment.isPaypalCreditPrimary) {
	      			  $(".fopTypes.primaryFops").find("label[for=payBL]").remove();
	      			  $(".fopTypes.fopViewMore").find("label[for=payBL]").show();
	      		  }else{
	      			 $(".fopTypes.fopViewMore").find("label[for=payBL]").remove();
	      		  }
	      		  break;
	      	case 'payAP':
	      		  if(fopRule.alipay == "Disabled") {
	      			 if(fopRule.alipay != Payment.fopConstants.viewMore){
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      			  msg.fopRule.alipay = "Disabled";
	      			 }
	      		  }else if(fopRule.alipay == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr,#onlineBankHldr").hide();
	      			  //Payment.selectedFop = 'payAP';
	      		  }else if(fopRule.alipay == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
		       			if(fopRule.alipay != Payment.fopConstants.viewMore) {
		       				if( $(element).next('span').hasClass('labelTxtDisabled')){
			       				$(element).next('span').removeClass('labelTxtDisabled');
			       			}
			       			else if($(element).next('span').hasClass('labelTxtSelected')){
			       				$(element).next('span').removeClass('labelTxtSelected');
			       			}
		       			}
	      		  }
	      		  var originalFopRule = $.extend({}, fopRuleJSON);
	      		  if(originalFopRule.alipay == Payment.fopConstants.viewMore && !Payment.isAlipayPrimary) {
	      			$(".fopTypes.primaryFops").find("label[for=payAP]").remove();
	      			  $(".fopTypes.fopViewMore").find("label[for=payAP]").show();
	      		  }else{
	      			 $(".fopTypes.fopViewMore").find("label[for=payAP]").remove();
	      		  }
	      		  break;
			//For RTBT
            case 'payRTBT':
	      		  if(fopRule.rtbt == "Disabled" || eDocUtils.eDocDataObj.giftCertExist) {
	      			  if(fopRule.rtbt !== Payment.fopConstants.viewMore){
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      			  msg.fopRule.rtbt = "Disabled";
	      			  }
	      		  }else if(fopRule.rtbt == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
					  $("#cardInfoHldr,#cardLogoHldr").hide();
					  $("#onlineBankHldr").show();
					  /* Fix for CPM-418 */
					  if(msg.germanCountry == true){
	       				  $("#onlineCountry option[value=DE]").attr("selected",true);
	       				  $("#onlineCountry").trigger("change");
	       			  }
					  $("select").selectmenu( "refresh" );
	      			  //Payment.selectedFop = 'payAP';
	      		  }else if(fopRule.rtbt === Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
		       			if(fopRule.rtbt !== Payment.fopConstants.viewMore) {
		       				if( $(element).next('span').hasClass('labelTxtDisabled')){
			       				$(element).next('span').removeClass('labelTxtDisabled');
			       			}
			       			else if($(element).next('span').hasClass('labelTxtSelected')){
			       				$(element).next('span').removeClass('labelTxtSelected');
			       			}
		       			}
	      		  }

	      		  var originalFopRule = $.extend({}, fopRuleJSON);
	      		  if(originalFopRule.rtbt === Payment.fopConstants.viewMore && !Payment.isOnlineBankingPrimary) {
                  $(".fopTypes.primaryFops").find("label[for=payRTBT]").remove();
                    $(".fopTypes.fopViewMore").find("label[for=payRTBT]").show();
	      		  }else{
                   $(".fopTypes.fopViewMore").find("label[for=payRTBT]").remove();
	      		  }
	      		  break;
	      	case 'payGC':
	      		  if(fopRule.giftCard == "Disabled") {
	      			  msg.fopRule.giftCard = "Disabled";
	      			  $(element).next('span').addClass('labelTxtDisabled');
	      		  }else if(fopRule.giftCard == "Selected") {
	      			  $(element).prop("checked", true);
	      			  $(element).next('span').addClass('labelTxtSelected');
	      			  //Payment.selectedFop = 'payGC';
	      			 /* Fix for CPM-720 start */
	      			$("#selectCardTypeDropdownHolder").removeAttr("aria-hidden style");
	      			$("#nextGenBooking .chooseCreditCardHeading,#nextGenBooking .cardSeparator").hide();
	      			$("#nextGenBooking .card-logo,#nextGenBooking .cardLogos,#nextGenBooking .paymentFieldOuterLarge.expDate,#nextGenBooking .CVVHolder").removeClass("autoSelectionClass");
	      			 /* Fix for CPM-720 end */
	      		  }else if(fopRule.giftCard == Payment.fopConstants.notApplicable) {
	      			  $(element).parent().hide();
	      			  $(element).prop("disabled", true);
	      		  }else{
		       			$(element).parent().show();
	       				if( $(element).next('span').hasClass('labelTxtDisabled')){
		       				$(element).next('span').removeClass('labelTxtDisabled');
		       			}
		       			else if($(element).next('span').hasClass('labelTxtSelected')){
		       				$(element).next('span').removeClass('labelTxtSelected');
		       			}
	      		  }
	      		  break;
	      	default:

	      		$(element).next('span').addClass('labelTxtDisabled');
	      }
	  });
	   
	   /* Fix for CPM-622 start*/
	   $(".primaryFops label").each(function(){
 if($(this).prop("for") != "payWL" && $(this).find("span").hasClass("labelTxtDisabled")){
			   var disabledElement = $(this).detach();
			   Payment.addFopToViewMore.push(disabledElement);
		   }
	   });
	   /* Fix for CPM-622 end*/

	   /* Fix for CPM-626 start */
	   Payment.sortPaymentTabsEnabled();
	   
	   if($("#defaultFopHldr  label").length > 6){
		   Payment.addFopToViewMore.push($("#defaultFopHldr  label").slice(6).detach());
	   }
	   
	   if(Payment.addFopToViewMore.length && !$(".viewMoreLink").is(":visible")){
		   $("#alternetFopHldr .fopTypes").eq(0).prepend(Payment.addFopToViewMore);
	   }
	   
	   if($(".viewMoreLink").is(":visible") && !$(".viewMoreLink").is("#defaultFopHldr :last-child")){
		   $(".viewMoreLink").detach().appendTo("#defaultFopHldr");
	   }
	   
	   Payment.sortPaymentTabsDisabled();
	   /* Fix for CPM-626 end */
   },
   attachPaymentEventHandlers : function(){
	   $(document).on("click","#continue_button, #convert_continue_button",function(e){//For RTBT
		   if($("#onlineProvider").is(':visible')){
			   if(!$("input[name='onlineProvider']" ).is(':checked')){
				   $("#onlineProvider fieldset legend").addClass("errIcon");
			   }

		   }

		   if($("#loginPage").is(':visible')){
			    $('#submit1_LoginPage').trigger('click');
			    return false;
		  }
		 //$('[aria-invalid=true]:eq(0)').focus();
	    	$(".toolTipErrorMessageContainer").attr({
				"tabindex": "0",
				//"role": "alert",
				//"aria-live": "polite"
				"aria-atomic": "true"
			});
		  $(".toolTipErrorMessageContainer").focus();
		     /* removing rules for giftcard-no and redemption-code for defect #57178 */
		     /*$("input[name=redemption_code]").rules("remove", "emptyField");
		     $("input[name=giftCard_number]").rules("remove", "emptyField");
			 $("input[name=giftCard_number]").rules("remove", "invalidGiftCardNumber");
			 $("input[name=redemption_code]").rules("remove", "invalidRedemptionCode");*/
		  /*
 		 $("input[name^=giftCard_number]").each(function () {
		        $(this).rules("remove",{
		        	emptyField: true,
		        	invalidGiftCardNumber:true
		   });
		 });
		 $("input[name^=redemption_code]").each(function () {
	        $(this).rules("remove",{
	        	emptyField: true,
	        	invalidRedemptionCode:true
	        });
		 });
		  */

	    	window.onbeforeunload = null;
	    	// Condition added for not disabling the complete purchase button in case of no saved FOP in profile
	    	// when redirected back to payment page after successful interaction from Amex
	    	if (msg.loggedInInd != null && msg.loggedInInd == "Y" && msg.loggedInInd == "Y"
	    		&& !msg.savedFOPInd && Payment.selectedFop == "payWL" && (!msg.amexExpCkoInd || msg.amexExpCkoData.success === false)) {
	    		$(".noSavedFOPMsg").show();
	    		$(".noSavedFOPLink").css("margin-bottom","0");
	    		$("#continue_button").prop('disabled', true);
	    		e = $.event.fix(e);
				e.preventDefault();
				return false;
	    	}
	    	if($("#saveFop").prop("checked") == true){

		    	$("#hdnIsProfUpdateNeed").val("true");
		    }else{
		    	//$("#hdnExpMonth").val($("#notLogInExpMonth").val());
		    	//$("#hdnExpYear").val($("#notLogInExpYear").val());
		    	$("#hdnIsProfUpdateNeed").val("false");
		    }
		    if($("#updateProfileInd") != undefined && $("#updateProfileInd") != null && $("#updateProfileInd").is(':visible') == true && $("#updateProfileInd").prop("checked") == true){
		    	$("#updateProfileInd").val("true");
		    }else{
		    	$("#updateProfileInd").val("false");
		    }

		    if(msg.amexExpCkoInd){
		    	newPaymentAction = "Y";
					var savedFopLength = 0;
					if(msg.savedFOPList){
						savedFopLength = msg.savedFOPList.length;
					}
					if(savedFopLength <= 0){
						$("#hdnFopSelectedTab").val("");
					}
		    }


	    	//If block is executed when FOP is AliPay and TripExtra is selected.
//	    	if (tripExtraValue > 0 && $("#payAP").is ( ":checked")) {
//	            $('html,  body').animate({ scrollTop: $("#err_Alipay").offset().top }, 'slow');
//	    	} else {
			   if ($("#insuranceOfferHTML").is(":visible") && $('#addInsurance').val() != undefined && $('#removeInsurance').val() != undefined &&
					  	  (!($("#addInsurance").hasClass("active") || $("#removeInsurance").hasClass("active")))) {
				         //$(".errorMsgContainer").append("<p><span class='errorMsg yesNo'>Please tell us if you would like to add Trip Protection.</span></p>");
				   		$("#cartPayment").valid();
				    	  TripInsurance.displayErrors();
						  $(".toolTipErrorMessageContainer").focus();//Defect#67539 - moving focus back to error message
				         $("#tripProtectorOptionHolder table").addClass("errorMsgTripProt");
                     $("html, body").animate({ scrollTop: $('#cartPayment').offset().top }, 1000);
				         if ($(this).hasClass("clicked")) {
				            $(this).removeClass("clicked");
				         }
				         $("label.error").removeClass("error");
				         e = $.event.fix(e);
				         e.preventDefault();

				      } else{
				    	  if ($("#insuranceOfferHTML").is(":visible") && $('#addInsurance').val() && $('#removeInsurance').val() &&
							  	  (($("#addInsurance").hasClass("active") || $("#removeInsurance").hasClass("active")))) {
				    		  insurancePurchase = $("#addInsurance").hasClass("active")? "Y":"N";
				    	  }
				    	  $("[name=insurancePurchase]").val(insurancePurchase);
				    	  if(!$("#purchase_button").hasClass("clicked")) {
					            $("#purchase_button").addClass("clicked");
				    	  }
				    	  // Changes added for Acculynk : Start
							$("#purchase_button").trigger("click");
							e = $.event.fix(e);
							e.preventDefault();
				    	  // Changes added for Acculynk : End
				      }
		   amexExpCKOSelectedForCompletePurchase = $("#amexExpCKOSelected").val();
		   checkoutOmnitureUtil.registerClick($(this));
	    	//}
		});

	   $(document).on("click",".viewMoreLink",function(e){
		   if(Payment.addFopToViewMore.length){
			   $("#alternetFopHldr .fopTypes").eq(0).prepend(Payment.addFopToViewMore);
		   }
		   $(".fopViewMore span").each(function(){
			  if(msg.fopRule[$(this).prop("class")] == "Disabled" || msg.fopRule[$(this).prop("class")] == "ViewMore"){
				  $(this).addClass("labelTxtDisabled");
			  }
		   });
		   
		   Payment.sortPaymentTabsDisabled();
		   
		   $(".fopViewMore input[type=radio]").each(function(){
		   $(this).parent().show();
			   /*var paymentType = $(this).prop("id");
				switch(paymentType){
					case 'payPP':
			       		  msg.fopRule.payPal = "Disabled";
			       		  break;
			       	case 'payBL':
			       		  msg.fopRule.payPalCredit = "Disabled";
			       		  break;
			       	case 'payAP':
			       		msg.fopRule.alipay = "Disabled";

				}*/
		   });
		   	// Changes added for Acculynk : Start
		   	//$(".fopViewMore").show();
		   	$("#alternetFopHldr").show();
		   	// Changes added for Acculynk : End
		   	checkoutOmnitureUtil.registerClick($(this));
		   	$(this).remove();
	   });

	   /**
	    * This Function is used for Currency Calculator. When user clicks on the currency calculator link from secondary
	    * display of the product.
	    */
	   $(document).on("click", ".currencyCalBtn", function (event) {
		   //event.stopImmediatePropagation();

	   	listPopulate();
	       $("#calcErrorHolder").not(".hideme").addClass("hideme");
	      // $("#calc_amount").val(grandTotal);
	       $("#calc_amount").val(msg.totalFare.grandTotal); //fix for defect# 44449
	       $("#calc-frm-price-text").html('$1.00 USD<span tabindex="0" id="footnoteindexC" role="link" data-attribute="#footernote2" class="toFootnote" aria-describedby="footernote2">*<span class="nextGenHiddenField">Note1</span></span>');
	       var eMsg = scGlobalMessage.ApproxExchngRate;
	       $("#ex-rate-text").html(eMsg);
	       $('#curCaclModal').dialog('open').removeClass("ui-widget-content").parents(".ui-dialog").removeClass("ui-widget-content");
	       $('#curCaclModal').css("height","50em");
	       $(".ui-dialog-titlebar").hide();
	   });

	   $(document).on("click","#openLoginContainer",function(e){
		   //$(this).remove();
		   /* Fix for Defect #65413 */
		   $(this).attr("aria-expanded","true");
		   $.ajax({
		          type : 'POST',
		          dataType : "json",
		          data : "cacheKeySuffix=" + cacheKeySuffix,
		          url : 'MyWalletLoginClickJSONAction',
		          headers : {
		             "cache-control" : "no-cache"
		          },
		          success : function (myWalletLoginRes) {
		          }/*,
		          error : function (jqXHR, textStatus, errorThrown) {
		          }*/
			}).fail(function(jqXHR, textStatus, error){
				try{
					delta.utils.logger.ajaxError(jqXHR, textStatus, error);
					delta.utils.logger.logMessage("Request Failed: " + error, "error");
				}catch(err){
					if (window.console && window.console.error) {
						console.error('Error logging to delta.utils.logger:' + err);
					}
				}
			});
		    //Hiding other FOP on clicking on login click
		   	$("#billPayment, #amexExpCkoPayment").addClass("hide");
		   	$("#eGiftFOPSection,#eGiftTotalSection").addClass('hide');
		   	// Removing selected state from other FOPS
		   	$(".fopTypes span").removeClass("labelTxtSelected");
		   	// $(".loginContainer").show();
		    // $(".loginContainer2").show();
		   	$("#loginPage").show();
			$('#usernm').focus();//defect#65408 - move focus to username field on click of 'Log in' link
				$('#amex-express-checkout,#amexCKOErrorMsg').hide();
				$("#cardLogoHldr,#amexExpressCko,#cardInfoHldr,#billingContainerWrapper, #cardPrintNameHldr").show();
		    if($("#loginwidgetLoginPage").length > 0){
				delta.LoginWidget.init("_LoginPage");
			}
		  //Removes multiple error messages
            if( $("#loginForm_LoginPage .loginPageFieldSet .error").length > 1 ){
              $("#loginForm_LoginPage .loginPageFieldSet .error:first").nextAll().remove();
            }
            checkoutOmnitureUtil.registerClick($(this));
            // fix for #57464
	        setTimeout(function(){
            $("#usernm_LoginPage").focus();
	    			},100);
					// Amex Exp code
					Payment.selectedFop = "payWL";
	   });

	   $(document).on("keydown","#usernm_LoginPage",function(e){
		  if(e.which ==9 && e.shiftKey ) {
				  //$("#openLoginContainer").focus();
			  setTimeout(function(){
		  $("#openLoginContainer").focus();},0);
		  }
	   });
	// Changes added for Acculynk : Start
		/*$(document).on("click", 'input[type=radio][name=cardType]',function(e){
			if(e.originalEvent !== undefined){
				checkoutOmnitureUtil.registerClick($(this));
			}
			$("#creditCardType").val($('input[name=cardType]:checked').prop("id")).trigger("change");
		});*/
		$(document).on("click", '.card-logo',function(e){
			/* changes done for CPM-720 start */
			/* changes done for CPM-1164 start */
			if(Payment.selectedFop != "payCC" && Payment.selectedFop != "payWL"){
			e.preventDefault();
			if(e.originalEvent !== undefined){
				checkoutOmnitureUtil.registerClick($(this));
			}
			$("#creditCardType").val($(this).data("description")).trigger("change");
			}
			 /* changes done for CPM-720 end */
			  /* changes done for CPM-1164 end */
		});
   },
   /*
    *  Removes the Error message that is displayed on selecting View More Fops.
    */
   removeFopErrorMsg : function() {
	   $("#fopErrorMsg p").html("");
	   // Changes added for Acculynk : Start
	   $("#fopErrorMsg p").removeAttr("role");
	   $("#fopErrorMsg p").removeAttr("tabindex");
	   // Changes added for Acculynk : End
	   $("#fopErrorMsg").addClass("hide");
	   $(".noSavedFOPMsg").hide();
	   $(".noSavedFOPLink").css("margin-bottom","10px");
   },
   showCardSpecificErrorMsg: function (cardType) {
		//Payment.removeInsuranceSelection(false);
		Payment.hideFOPTripAdditionErrorMsg();

	   if (cardType == "JC" || cardType == "DC" || cardType == "TP") {
		   if (parseFloat(tripExtraTotalAmount) > 0 && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi)) {
				var errCode = Payment.getCardSpecificErrorCode(),
					tripExtraErrCode = errCode.tripExtraErrCode,
				fopErrorCode = errCode.fopErrorCode;
				Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrorCode);
		   }
		   //Payment.removeInsuranceSelection(true);
       } else if (cardType == "AP" || cardType == "ATM" || cardType == "UP" || cardType == "UPB" ) {// Changes added for Acculynk : Start
    	   if (parseFloat(tripExtraTotalAmount) > 0) {
				var errCode = Payment.getCardSpecificErrorCode(),
					tripExtraErrCode = errCode.tripExtraErrCode,
					fopErrorCode = errCode.fopErrorCode;
				Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrorCode);
    	   }
       }
   },
   isBillingAddressNotUS : function(){
	   if(newPaymentAction === "Y") {
		   if($("#countryCode").length > 0 && $("#countryCode").val() != "US") {
		   return true;
	   }
	   }else{
		   // If My Wallet is selected
		   if(msg.savedFOPInd != null && msg.savedFOPInd != undefined && msg.savedFOPInd == "Y"){
		   if($("#hdnCountryCode").val() != "US") {
		   return true;
	   }
	   }


	   }
	   return false;
   },
   setFirstAndLastNameInputLabel: function () {
	   var fopType = Payment.selectedFop;
	   var fnLabel = "*First Name On Card";
	   var lnLabel = "*Last Name On Card";
	   if(newPaymentAction === "Y" && (fopType === "payWL" || fopType === "payGC")) {
		   if($("#creditCardType").val() === "AP"){
			   fnLabel = "*First Name";
			   lnLabel = "*Last Name";
		   }
	   }else if (fopType === "payPP" || fopType === "payBL" || fopType === "payAP" || fopType === "payRTBT") {//For RTBT
		   fnLabel = "*First Name";
		   lnLabel = "*Last Name";
	   }
	   $("#firstNameLbl").text(fnLabel);
	   $("#lastNameLbl").text(lnLabel);
	},
	showFOPTripAdditionErrorMsg: function (tripExtraErrCode, fopErrorCode) {
		var tripExtraErrMsg = errorCodeObj.getError(tripExtraErrCode);
		fopErrMsg = errorCodeObj.getError(fopErrorCode);
		/*changes for CPM-81*/
		if(Payment.selectedFop == "payGC"){
			fopErrMsg = "Gift Cards can only be used to purchase airline tickets. Please change your payment type or remove the additional items to continue. You may buy them later in My Trips.";
			$("#eGift_continue").prop('disabled', true);
		}
		$("#tripExtraErrorCont").html(tripExtraErrMsg);
		$("#fopMsgCont .fopRemoveMsg").html(fopErrMsg);
		$("#fopMsgCont").show();
		/*setTimeout(function(){
		$("#removeAllTripExtraBtn").focus();
		});*/
		$("#continue_button, #convert_continue_button").prop('disabled', true);
    //Changes for CPM-994
    $("#amex-express-checkout").css("top","138px");
	},
	hideFOPTripAdditionErrorMsg: function () {
		/*changes for CPM-81*/
		$("#fopMsgCont").hide();
		$("#tripExtraErrorCont").html("");
		$("#continue_button, #convert_continue_button, #eGift_continue").prop('disabled', false);
    //Changes for CPM-994
    if ($("#payCC").is(":checked")){
        $("#amex-express-checkout").css("top","57px");
    }
	},
	updateFopRuleOnSelection : function() {
		var selectedKey = $(fopRuleJSON).searchKeyforValue("Selected");
		var currentSelectedFop = Payment.selectedFop;
		switch(selectedKey){
			case 'alipay' :
				msg.fopRule.alipay = "Enabled";
				fopRuleJSON.alipay = "Enabled";
				break;
			//For RTBT
			case 'rtbt' :
				msg.fopRule.rtbt = "Enabled";
				fopRuleJSON.rtbt = "Enabled";
				break;
			case 'creditDebit' :
				msg.fopRule.creditDebit = "Enabled";
				fopRuleJSON.creditDebit = "Enabled";
				break;
			// Changes added for Acculynk : Start
			case "acculynk":
				msg.fopRule.acculynk = "Enabled";
				fopRuleJSON.acculynk = "Enabled";
				break;
			case "unionPay":
				msg.fopRule.unionPay = "Enabled";
				fopRuleJSON.unionPay = "Enabled";
				break;
			// Changes added for Acculynk : End
			case 'giftCard' :
				msg.fopRule.giftCard = "Enabled";
				fopRuleJSON.giftCard = "Enabled";
				break;
			case 'myWallet':
				msg.fopRule.myWallet = "Enabled";
				fopRuleJSON.myWallet = "Enabled";
				break;
			case 'payPal':
				msg.fopRule.payPal = "Enabled";
				fopRuleJSON.payPal = "Enabled";
				break;
			case 'payPalCredit':
				msg.fopRule.payPalCredit = "Enabled";
				fopRuleJSON.payPalCredit = "Enabled";
				break;
		}

		switch(currentSelectedFop){
			case 'payAP' :
				msg.fopRule.alipay = "Selected";
				fopRuleJSON.alipay = "Selected";
				break;
			//For RTBT
			case 'payRTBT' :
				msg.fopRule.rtbt = "Selected";
				fopRuleJSON.rtbt = "Selected";
				break;
			case 'payCC' :
				msg.fopRule.creditDebit = "Selected";
				fopRuleJSON.creditDebit = "Selected";
				break;
			//Changes added for Acculynk : Start
			case "payACCU":
				msg.fopRule.acculynk = "Selected";
				fopRuleJSON.acculynk = "Selected";
				break;
			case "payUN":
				msg.fopRule.unionPay = "Selected";
				fopRuleJSON.unionPay = "Selected";
				break;
			// Changes added for Acculynk : End
			case 'payGC' :
				msg.fopRule.giftCard = "Selected";
				fopRuleJSON.giftCard = "Selected";
				break;
			case 'payWL':
				msg.fopRule.myWallet = "Selected";
				fopRuleJSON.myWallet = "Selected";
				break;
			case 'payPP':
				msg.fopRule.payPal = "Selected";
				fopRuleJSON.payPal = "Selected";
				break;
			case 'payBL':
				msg.fopRule.payPalCredit = "Selected";
				fopRuleJSON.payPalCredit = "Selected";
				break;
		}
	},

	//Displays trip selection error messages on page load
	displayFopSelectionErrorOnLoad: function ( tripType ) {
		var currentFopSelected = $(msg.fopRule).searchKeyforValue("Selected"),
		tripExtraErrCode = "",
		fopErrorCode = "";
		if( currentFopSelected == "payPal" || currentFopSelected == "payPalCredit" ){
			tripExtraErrCode = "PAYPAL_0001";
			fopErrorCode =  "PAYPAL_0002";
		}
		if ( tripType.toUpperCase() === 'TRIP_EXTRA'){
			if (currentFopSelected == "alipay") {
				tripExtraErrCode = "ALIPAY_0001";
				fopErrorCode =  "ALIPAY_0002";
			} else if (currentFopSelected == "creditDebit" || currentFopSelected == "myWallet" || currentFopSelected == "acculynk") {// Changes added for Acculynk : Start
				var cardType = Payment.selectedCard;
				if ((cardType == "ATM") || ((cardType == "DC" || cardType == "JC" || cardType == "TP") && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi))) {
					var errCode = Payment.getCardSpecificErrorCode(),
					tripExtraErrCode = errCode.tripExtraErrCode,
					fopErrorCode = errCode.fopErrorCode;
				}// Changes added for Acculynk : End

			}
		}
		if(tripExtraErrCode && fopErrorCode){
			Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrorCode);
		}
	},

	//Trip extra/FOP error codes for JC/DC/TP.
	getCardSpecificErrorCode: function () {
		var cardType = Payment.selectedCard,
			tripExtraErrCode = "",
			fopErrorCode = "",
			errCodeObj = {};
		if (cardType == "JC") {
			tripExtraErrCode = "JCB_0001";
			fopErrorCode =  "JCB_0002";
		} else if (cardType == "DC") {
			tripExtraErrCode = "DC_0001";
			fopErrorCode = "DC_0002";
		} else if (cardType == "TP") {
			tripExtraErrCode = "UATP_0001";
			fopErrorCode = "UATP_0002";
		} else if (cardType == "AP") {
			tripExtraErrCode = "ALIPAY_0001";
			fopErrorCode = "ALIPAY_0002";
		}else if(cardType === "ATM"){// Changes added for Acculynk : Start
			tripExtraErrCode = "ATM_0001";
			fopErrorCode = "ATM_0002";
		}else if(cardType === "UP" || cardType === "UPB"){
			tripExtraErrCode = "UNPAY_0001";
			fopErrorCode = "UNPAY_0002";
		}
		// Changes added for Acculynk : End
		errCodeObj = {
				"tripExtraErrCode" : tripExtraErrCode,
				"fopErrorCode" : fopErrorCode
		};
		return errCodeObj;
	},
   init : function () {
     //  "use strict";
      $.ajax({
         type : 'POST',
         dataType : "json",
         data : "cacheKeySuffix=" + cacheKeySuffix,
         url : 'ReviewFlightInfoJSONAction',
         async: false,
         headers : {
            "cache-control" : "no-cache"
         },
         success : function (paymentRes) {
            Payment.setData(paymentRes);
         }/*,
         error : function (jqXHR, textStatus, errorThrown) {
         }*/
      }).fail(function(jqXHR, textStatus, error){
			try{
				delta.utils.logger.ajaxError(jqXHR, textStatus, error);
				delta.utils.logger.logMessage("Request Failed: " + error, "error");
			}catch(err){
				if (window.console && window.console.error) {
					console.error('Error logging to delta.utils.logger:' + err);
				}
			}
		});
	}
};

$(Payment).on("success", function (event) {
  //  "use strict";
   this.render();
});

$(Payment).on("ajaxCompleteCko", function (event) {
	if(SeatUtils.isLoaded && tripExtraUtil.isLoaded && TripInsurance.isLoaded && stateListJSONComplete) {

		Payment.persistCheckOutsData(msg);

		if (msg.bdsErrorMsgMap != null) {
	        displayBDSErr(msg.bdsErrorMsgMap, "", "nextGenErrorText", null);
	    }

		if(!msg.MAflag && !eDocUtils.eDocAjaxComplete){
			eDocUtils.eDocAjaxComplete = true;
  		  eDocUtils.render("");
  	    }
		Payment.hideFOPTripAdditionErrorMsg();
		var fopType = Payment.selectedFop;
		switch (fopType) {
			case "payPP":
				if (parseFloat(tripExtraTotalAmount) > 0 || SeatUtils.seatDataObj.totalSeatPrice > 0) {
					Payment.showFOPTripAdditionErrorMsg("PAYPAL_0001", "PAYPAL_0002");
				}
				$(".paypalMsg").show();
				break;
			case "payBL":
				if (parseFloat(tripExtraTotalAmount) > 0 || SeatUtils.seatDataObj.totalSeatPrice > 0) {
					Payment.showFOPTripAdditionErrorMsg("PAYPAL_0001", "PAYPAL_0002");
				}
				break;
			case "payCC":
				if (parseFloat(tripExtraTotalAmount) > 0) {
					var cardType = $("#creditCardType").val();
					if ((cardType == "JC" || cardType == "DC" || cardType == "TP") && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi)) {
						var errCode = Payment.getCardSpecificErrorCode();
							tripExtraErrCode = errCode.tripExtraErrCode;
							fopErrCode = errCode.fopErrorCode;
						Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
					}
				}
				break;
			// Changes added for Acculynk : Start
			case "payACCU":
				if (parseFloat(tripExtraTotalAmount) > 0) {
					var cardType = $("#creditCardType").val();
					if (cardType == "ATM") {
						var errCode = Payment.getCardSpecificErrorCode();
							tripExtraErrCode = errCode.tripExtraErrCode;
							fopErrCode = errCode.fopErrorCode;
						Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
					}
				}
				break;
			case "payUN":
				if (parseFloat(tripExtraTotalAmount) > 0) {
					Payment.showFOPTripAdditionErrorMsg("UNPAY_0001", "UNPAY_0002");
				}
				break;
			// Changes added for Acculynk : End
			case "payWL":
				if (parseFloat(tripExtraTotalAmount) > 0 && $("#storedCCList").val() !== undefined) {
					var cardType = $("#storedCCList").val().split("_")[0];
					if(msg.amexExpCkoInd){
						cardType = msg.persistFormData.cardType;
					}
					// Changes added for Acculynk : Start
					var errCode = Payment.getCardSpecificErrorCode();
					tripExtraErrCode = errCode.tripExtraErrCode;
					fopErrCode = errCode.fopErrorCode;
					if ((cardType == "JC" || cardType == "DC" || cardType == "TP") && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi)) {
						Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
					}else if(cardType == "ATM" || cardType == "UP" || cardType == "UPB"){
						Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
					}
					// Changes added for Acculynk : End
				}
				break;
			case "payAP":
				if (parseFloat(tripExtraTotalAmount) > 0) {
					Payment.showFOPTripAdditionErrorMsg("ALIPAY_0001", "ALIPAY_0002");
				}
				break;
			case "payGC":
				if (parseFloat(tripExtraTotalAmount) > 0) {
					var cardType = Payment.selectedCard;
					if(msg.amexExpCkoInd){
						cardType = msg.persistFormData.cardType;
					}
					if ((cardType == "JC" || cardType == "DC" || cardType == "TP") && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi)) {
						var errCode = Payment.getCardSpecificErrorCode(),
							tripExtraErrCode = errCode.tripExtraErrCode,
							fopErrCode = errCode.fopErrorCode;
						Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
					} else if (cardType == "AP") {
						var errCode = Payment.getCardSpecificErrorCode(),
							tripExtraErrCode = errCode.tripExtraErrCode,
							fopErrCode = errCode.fopErrorCode;
						Payment.showFOPTripAdditionErrorMsg(tripExtraErrCode, fopErrCode);
					}
				}
				Payment.toggleTripInsuranceSelection();
				break;
		};
		if(msg.addNewCardToWalletFlag != undefined && msg.addNewCardToWalletFlag == "Y"){
			$("html, body").animate({ scrollTop: $('#billingAddressContainer').offset().top }, 1000);
			msg.addNewCardToWalletFlag = "N"; // If user toggles between fop tabs, the stored FOP can be accessed.
		}
		/* Check for Delta Comfort Plus seat with Priority boarding */
		if(SeatUtils.seatDataObj != null && SeatUtils.seatDataObj.selSeatURLMap != null &&
				tripExtraUtil.response != null && tripExtraUtil.response.tripExtraMap != null) {

			var seatURLMap = SeatUtils.seatDataObj.selSeatURLMap,
				tripExtraMap = tripExtraUtil.response.tripExtraMap
				isDeltaComfPBErr = false;
			$.each(seatURLMap, function(key, value) {
				var paxSegmentDetailsArr = key.split("_"),
					paxId = paxSegmentDetailsArr[0].toUpperCase(),
					orgDestVal = paxSegmentDetailsArr[1] + "_" + paxSegmentDetailsArr[2];
				if(value != null && (value.productCode == "ECC" || value.productCode == "TEC" || value.productCode == "BHD" || value.productCode == "EXT")){
					SeatUtils.delComfTripExtraErr = true;

					$.each(tripExtraMap, function(paxIdKey, paxIdVal) {
						if (paxIdKey.toUpperCase() == paxId) {
							$.each(paxIdVal, function(airportKey, airportVal) {
								if (orgDestVal == airportKey) {
									$.each(airportVal, function(tripExtraKey, tripExtraVal) {
										var prodId = tripExtraVal.productId;
										if((parseFloat(value.priceAmount) > 0) && (prodId == "EARLY_BOARDING" || prodId == "ASCEND_PACKAGE" || prodId == "LIFT_PACKAGE")) {
											isDeltaComfPBErr = true;
											return false;
										}
									});
								}
							});
						}
					});
				}
			});
			if (isDeltaComfPBErr || (undefined !== msg.tripExtraRemovalInd && "Y" === msg.tripExtraRemovalInd)) {
				$("#delComfortError").show();
        		if($(".paymentTripContent .paymentTripDetails").hasClass("hide")){
        			$("#nextGenBooking .tripDetails").trigger("click");
        		}
			} else {
				$("#delComfortError").hide();
			}
		} else if (undefined !== msg.tripExtraRemovalInd && "Y" === msg.tripExtraRemovalInd) {
			$("#delComfortError").show();
		}
		if(undefined !== paymentMsgObj.paymentMsgs && !$.isEmptyObject(paymentMsgObj.paymentMsgs)){
		$(".tripExtrasLbl").html(paymentMsgObj.paymentMsgs.tripExtrasMsg.TE_0001);
		$(".tripExtrasText").html(paymentMsgObj.paymentMsgs.tripExtrasMsg.TE_0002);
		$(".totalSecureText").html(paymentMsgObj.paymentMsgs.fopMsg.FOP_0002);
		//change for CPM-734
		if(fopType == "payGC" || fopType == "payCC" || fopType ==  "payWL"){
			$(".doubleMilesContainer").html(paymentMsgObj.paymentMsgs.fopMsg.FOP_0001);
		}		
		$(".paymentSectionFooterTxt").html(paymentMsgObj.paymentMsgs.fopMsg.FOP_0003);
		}
		/* Fix for defect #60224 */
		if(Payment.selectedFop == "payGC" && msg.amexExpCkoInd && msg.amexExpCkoData.success === true){
			$("#billingAddressContainer, #loggedPaymentSection").hide();
			Payment.renderAmexExpCko();
		}else if(Payment.selectedFop == "payGC" && msg.amexExpCkoInd && msg.amexExpCkoData.success === false){
			Payment.renderAmexExpCkoError();
		}
		$(".tripSummaryHeader > h1").prop("id","#maincontent");
		if(msg.amexExpCkoInd){
			$("html, body").animate({ scrollTop: 1150 }, 1000);
		}
		//change for CPM-558
		if(msg.persistFormData != undefined){
		msg.persistFormData.fopSelectedTab = "";
	}
	}

});

var hideBML = function () {
	   if (greaterThanBMLamt) {
	      $(".BMLcont").hide();
	   }
};

var handlePurchaseBtnClick = function () {
	cartPaymentValidation.validatePaymentInfo();
	$("#closeHazMatModal").click(function () {
		$('#hazMatModal').dialog("close");
    });
/*$(document).on('keyup',"#closeHazMatModal", function(e){
		if(e.which == 13) {
			$('#hazMatModal').dialog("close");
	    }
	});*/

	$(document).on("keypress",".hazMatModalCloseBtn", function(e){
		if(e.which ==13)
			$("#closeHazMatModal").trigger("click");
	});
	   $(document).on("click", "#purchase_button", function (e) {
	      if ($("#amount_dropDown").is(":visible") && $("#buyMilesPrdtDO").val() == "") {
	         e = $.event.fix(e);
	         e.preventDefault();
	         $("#buyMilesErrorMsg").show().html("<div class='buyMilesError'>Please select an amount to buy to continue.</div>");
	         return false;
	      }

	      $(".errorMsgContainer .yesNo").parent().remove();

	      if ($("#insuranceOfferHTML").is(":visible") && $('#addInsurance').val() != undefined && $('#removeInsurance').val() != undefined &&
		  	  (!($("#addInsurance").hasClass("active") || $("#removeInsurance").hasClass("active")))) {
	         //$(".errorMsgContainer").append("<p><span class='errorMsg yesNo'>Please tell us if you would like to add Trip Protection.</span></p>");
	    	  TripInsurance.displayErrors();
	         $("#tripProtectorOptionHolder table").addClass("errorMsgTripProt");

	         //$(document).scrollTop(0);
	         $(document).scrollTop($("#insuranceError").offset().top);
	         if ($(this).hasClass("clicked")) {
	            $(this).removeClass("clicked");
	         }
	         $("label.error").removeClass("error");

	         e = $.event.fix(e);
	         e.preventDefault();

	      } else {
	   	if(CustomerInfo.isLoggedIn()){
	   		/* Checking for expired saved FOP */
	   		if( newPaymentAction != "Y" && editFOPAction != "Y" ){
		    		var cardID = $("#storedCCList").val();
		    		if( cardID && msg.expDateMap && (cardID in msg.expDateMap) ){
		    			var expDate = msg.expDateMap[cardID];
		    			var d = new Date();
		    			if((expDate.split("/")[0] < (d.getMonth()+1) && expDate.split("/")[1] == d.getFullYear()) ||
		    					(expDate.split("/")[0]< (d.getMonth()+1) && expDate.split("/")[1] < d.getFullYear())){
		    				$("#editCard").click();
		    			}
		    		}
		    	}

	   		if(addEmailOpr == "Y") {
	   			$("#hdnAddEmailOpr").val("loggedInAddEmail");
	   		}
	   		if(newPaymentAction == "Y") {
	   			$("#hdnPaymentOprType").val("loggedInNewPayment");
	   		} else if(editFOPAction == "Y" && addEditAddrAction == "Y"){
	   			$("#hdnPaymentOprType").val("loggedInAddEditAddr");
	   		} else if(editFOPAction == "Y" && addEditAddrAction != "Y"){
	   			$("#hdnPaymentOprType").val("loggedInEditFOP");
	   		} else {
	   			$("#hdnPaymentOprType").val("loggedInPayment");
	   		}
	   	} else {
	   		$("#hdnPaymentOprType").val("notLoggedInPayment");
	   	}
	   	/*Setting post values for AEC prefilled card scenario*/
	   	if($("#amexCCInfo").is(':visible')==true){
	   		if($("#hdnAddIds")!=undefined && $("#hdnAddIds").length){
	   			$("#hdnAddIds").val("");
	   		}
	   		if($("#hdnAddNewAddress")!=undefined && $("#hdnAddNewAddress").length){
	   			$("#hdnAddNewAddress").val("N");
	   		}
	   		if($("#hdnSavedFopId")!=undefined && $("#hdnSavedFopId").length){
	   			$("#hdnSavedFopId").val("");
	   		}
	   	}
	    	if (!$(this).hasClass("clicked")) {
	  	   		$(this).addClass("clicked");
	        }
	   	if($("#notLogInAccNumber").size()){
	   		var maskedCardNmbr = $("#notLogInAccNumber").val();
	   		if($("#cartPayment").attr("novalidate") && maskedCardNmbr.indexOf("*")!= -1){
	   			$("#notLogInAccNumber").rules("remove", "emptyField");
	   			$("#notLogInAccNumber").rules("remove","validateCardNumber");
	   			$("#notLogInAccNumber").rules("remove","isNumeric");
	   			$("#notLogInAccNumber").rules("remove","validateCardNumberLeadingChars");
	   			$("#notLogInAccNumber").valid();
	   		}
	   	}
	   	setTimeout(function(){
	   		if($("[name='defaultCvv']").hasClass("errorMsg")){
	   			$("[name='defaultCvv']").val("");
	   			}
	   	},10);
	   	    if ($("#insuranceOfferHTML").is(":visible") && $('#addInsurance').val() && $('#removeInsurance').val() &&
			  	  (($("#addInsurance").hasClass("active") || $("#removeInsurance").hasClass("active")))) {
	   		   insurancePurchase = $("#addInsurance").hasClass("active")? "Y":"N";
	   	    }
	    	$("[name=insurancePurchase]").val(insurancePurchase);
	    	// Changes added for Acculynk : Start
	    	if($("#cartPayment").valid()){
    			/*Fix for CPM-470*/
	    		if($.inArray(Payment.selectedFop, Payment.acculynkEligibleFops) != -1 && parseFloat(tripExtraTotalAmount) <= 0 && !TripInsurance.isInsuranceSelected() && (msg.USOrginFlight || msg.isUSorChinaOriginFlight)){
	    			if($.inArray(Payment.selectedCard, Payment.acculynkEligibleCards) != -1 && Payment.isAcculynkCheckBinCalled === false && msg.shopType === "Revenue" && msg.EDocNonDebitInd === "N"){
		    			Payment.isAcculynkCombinedCall = true;
		    			Payment.acculynkCheckBinCall();
					}else{
						/*if(Payment.acculynkPinpadFlag === "OFF"){
							Payment.acculynkDataRetention();
						}else{
							Payment.acculynkRetrivePinPadCall();
						}*/
						Payment.acculynkRetrivePinPadCall();
		    		}
					e = $.event.fix(e);
		    		e.preventDefault();
		    	}else{
		    		if(Payment.selectedFop === "payACCU" && (Payment.selectedCard === "VI" || Payment.selectedCard === "CA")){
						Payment.selectedFop = "payCC";
					}
					$("#cartPayment").submit();
				}
	    	}
	    	// Changes added for Acculynk : End
	      }
	      checkoutOmnitureUtil.registerClick($(this));
	   });
	   $(document).on("touchend", "#purchase_button", function (e) {
	      e.preventDefault();
	      $("#purchase_button").trigger("click");
	   });
};

/* Amex banner starts */
var amexCongratsBanner = {
   display : function(bannerCode){
         var wcmImagePath = $("#amexBannerImg").data("src");
         var bannerCongratsCode = "";
            if(bannerCode=="CG"){
                $("#amexContainer").css("background", "url('"+ wcmImagePath +"/content/dam/delta-applications/cart/background/AMEX_EB2B_5_28_RP_Gold.jpg') no-repeat top left #fff");
                bannerCongratsCode = "consumerGoldCard";
            }else if(bannerCode=="CP"){
                $("#amexContainer").css("background", "url('"+ wcmImagePath +"/content/dam/delta-applications/cart/background/AMEX_EB2B_5_28_RP_Plat.jpg') no-repeat top left #fff");
                bannerCongratsCode = "consumerPlatCard";
            }else if(bannerCode=="BG"){
                $("#amexContainer").css("background", "url('"+ wcmImagePath +"/content/dam/delta-applications/cart/background/AMEX_EB2B_5_28_RP_BizGold.jpg') no-repeat top left #fff");
                bannerCongratsCode = "consumerGoldBizCard";
            }else if(bannerCode=="BP"){
                $("#amexContainer").css("background", "url('"+ wcmImagePath +"/content/dam/delta-applications/cart/background/AMEX_EB2B_5_28_RP_BizPlat.jpg') no-repeat top left #fff");
                bannerCongratsCode = "consumerPlatBizCard";
            }else{
                return false;
            }
            if(bannerCongratsCode != ""){
               $("#amexCongratsTitle").html(AmexOfferMatrix.congratsBanner[bannerCongratsCode].header);
               $("#amexCongratsSubTitle").html(AmexOfferMatrix.congratsBanner[bannerCongratsCode].subheader);
               $("#amexCongratsStatCredit").html(AmexOfferMatrix.congratsBanner[bannerCongratsCode].statement);
           }
    }
}
/* Amex banner ends */


function removePaxSeat(seatId) {
	$.ajax({
        type: 'POST',
        async: false,
        dataType: "json",
        url: 'RemovePaxSeatJSONAction',
	    data : { "cacheKeySuffix" : cacheKeySuffix},
        headers: { "cache-control": "no-cache" },
        success: function (){
        //	resetSeat();
        	SeatUtils.init(msg);
        	pageLoad = false;
        	TripInsurance.init();
            Payment.hideFOPTripAdditionErrorMsg();
            if(!$("#continue_button").prop('disabled')){
    			$("#continue_button").removeAttr("disabled");
    		}
        }/*,
        error: function(jqXHR, textStatus, errorThrown) {

        }*/
	}).fail(function(jqXHR, textStatus, error){
		try{
			delta.utils.logger.ajaxError(jqXHR, textStatus, error);
			delta.utils.logger.logMessage("Request Failed: " + error, "error");
		}catch(err){
			if (window.console && window.console.error) {
				console.error('Error logging to delta.utils.logger:' + err);
			}
		}
	});
}
function removePaxTripAdditions() {
	var fopType = Payment.selectedFop;
	if (SeatUtils.seatDataObj.totalSeatPrice > 0 && tripExtraTotalAmount <= 0 && addedInsPrice <= 0) {
		seatRemoval = true;
		tripExtraRemoval = false;
		if (fopType == "payPP" || fopType == "payBL") {
			removePaxSeat();
		}
	} else if (SeatUtils.seatDataObj.totalSeatPrice <= 0 && addedInsPrice <= 0 && tripExtraTotalAmount > 0) {
		tripExtraRemoval = true;
		seatRemoval = false;
		if (fopType == "payPP" || fopType == "payBL" || fopType == "payAP" || fopType == "payRTBT" || fopType == "payUN") {//For RTBT // Changes added for Acculynk : Start
			tripExtraUtil.removeAllTripExtraJsonAction();
		} else if (fopType == "payCC" || fopType == "payWL" || fopType == "payGC" || fopType == "payACCU") {// Changes added for Acculynk : Start
			var cardType = Payment.selectedCard;
			if ((cardType == "JC" || cardType == "DC" || cardType == "TP") && (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi)) {
			tripExtraUtil.removeAllTripExtraJsonAction();
			} else if (cardType == "AP" || cardType == "ATM") {// Changes added for Acculynk : Start


				tripExtraUtil.removeAllTripExtraJsonAction();
			}
		}
	} else if (SeatUtils.seatDataObj.totalSeatPrice <= 0 && tripExtraTotalAmount <= 0 && totalInsPrice > 0) {
		TripInsurance.removeTripInsurance();
	} else {
		tripExtraRemoval = true;
		if (fopType == "payAP" || fopType == "payRTBT" || fopType == "payUN") {//For RTBT // Changes added for Acculynk : Start
			seatRemoval = false;
			// Changes added for Acculynk : Start
			TripInsurance.removeTripInsurance();
			tripExtraUtil.removeAllTripExtraJsonAction();
			// Changes added for Acculynk : End
		} else if (fopType == "payPP" || fopType == "payBL"  || fopType == "payGC") {
			seatRemoval = true;
			removePaxSeat();
			//tripExtraUtil.removeAllTripExtraJsonAction();
			TripInsurance.removeTripInsurance();
		} else if (fopType == "payCC" || fopType == "payWL" || fopType == "payACCU") {// Changes added for Acculynk : Start
			var cardType = Payment.selectedCard;
			if (cardType == "JC" || cardType == "DC" || cardType == "TP") {

				if (TripInsurance.isInsuranceSelected()) { //change defect#52077
					TripInsurance.removeTripInsurance();
				}
				if (tripExtraUtil.isAscendPackage || tripExtraUtil.isWifi) {
				tripExtraUtil.removeAllTripExtraJsonAction();
				}

			} else if (cardType == "AP" || cardType == "ATM") {// Changes added for Acculynk : Start
				// Changes added for Acculynk : Start
				if (TripInsurance.isInsuranceSelected()) {
					TripInsurance.removeTripInsurance();
				}
				tripExtraUtil.removeAllTripExtraJsonAction();
				// Changes added for Acculynk : End
			}
		}
	}
}
// Changes added for Acculynk : Start
function accu_FunctionResponse(strResponse){
	switch (strResponse) {
		case 'ACCU000': //PIN was received so merchant can process the authorization
			Acculynk._modalHide();
			if(Payment.selectedCard === "ATM" || Payment.selectedCard === "VI" || Payment.selectedCard === "CA"){
				Payment.selectedFop = "payACCU";
			}else if(Payment.selectedCard === "UP" || Payment.selectedCard === "UPB"){
				Payment.selectedFop = "payUN";
			}
			$("#cartPayment").submit();
			break;
		case 'ACCU200': //user pressed 'cancel' button so merchant may process as credit
			Acculynk._modalHide();
			if(Payment.selectedCard === "ATM" || Payment.selectedCard == "UP" || Payment.selectedCard == "UPB"){
				//$("#fopErrorMsg p").html("We're sorry. We can't process your " +Payment.acculynkCardName+ " card right now. Please select a different form of payment to continue or try again later.");
				//$("#fopErrorMsg").removeClass("hide");
				//Payment.acculynkShowErrorMsgs("ACCU200");
				$("#accu_keypad").removeAttr("tabindex");
				$("#accu_keypad").removeAttr("role");
			}else if(Payment.selectedCard === "VI" || Payment.selectedCard === "CA"){
				if(Payment.selectedFop === "payACCU"){
				Payment.selectedFop = "payCC";
				}
				$("#cartPayment").submit();
			}
			break;
		case 'ACCU400': //user was inactive
			Acculynk._modalHide();
			Payment.acculynkShowErrorMsgs("ACCU400");
			break;
		case 'ACCU600': //invalid data was posted to Acculynk
			Acculynk._modalHide();
			Payment.acculynkShowErrorMsgs("ACCU600");
			break;
		case 'ACCU800': //general catch all error
			Acculynk._modalHide();
			Payment.acculynkShowErrorMsgs("ACCU800");
			break;
		case 'ACCU999': //modal popup was opened successfully
			//no action necessary, but open for merchant to use
			$("#accu_loading").attr({tabindex: 0, role: "alert"}).focus();
			if($("#accu_keypad:visible")){
				$("#accu_loading").removeAttr("tabindex");
				$("#accu_loading").removeAttr("role");
				$("#accu_keypad").attr("tabindex", 0).focus();
			}
			break;
		case 'ACCU002': //general catch all error
			Acculynk._modalHide();
			Payment.acculynkShowErrorMsgs("ACCU002");
			break;
		case 'ACCU004': //general catch all error
			Acculynk._modalHide();
			Payment.acculynkShowErrorMsgs("ACCU004");
			break;
		case 'ACCU006': //general catch all error
			Acculynk._modalHide();
			Payment.acculynkShowErrorMsgs("ACCU006");
			break;
		case 'ACCU008': //general catch all error
			Acculynk._modalHide();
			Payment.acculynkShowErrorMsgs("ACCU008");
			break;
		default:
			break;
	}
}
// Changes added for Acculynk : End
/*function resetSeat(){
	$.ajax({
        type: 'POST',
        dataType: "json",
        url: 'SeatJSONAction',
	    data : { "cacheKeySuffix" : cacheKeySuffix},
        headers: { "cache-control": "no-cache" },
        success: function (SeatRes){
        	seatDisplayUpdate(SeatRes);
        },
        error: function (error) {

        }
	});
}*/

/*function seatDisplayUpdate(SeatRes) {
	SeatUtils.setData(SeatRes,msg);
	SeatUtils.cacheKeySuffix =  SeatRes.cacheKeySuffix;
    recordLocator = SeatRes.recordLocator;
    ckoRightRailUpdate(SeatRes);
    //$("#payCC").trigger("click");
    $("#continue_button").removeAttr("disabled");
}*/

/*function ckoRightRailUpdate(SeatRes){
	var totalSeatPrice = SeatUtils.seatDataObj.totalSeatPrice;
    var priceAddedSeatSection = parseFloat(parseFloat(finalPrice) +  parseFloat(addedInsPrice) + parseFloat(totalSeatPrice)).toFixed(flightUtil.currentPriceDecimalLength).toString();
    msg.tripExtra = tripExtraTotalAmount;
    msg.tripExtrasMultiCurr = false;
    if(msg.currCode == tripExtraPrice.currCode){
    	priceAddedSeatSection = parseFloat(parseFloat(priceAddedSeatSection) + parseFloat(msg.tripExtra)).toFixed(flightUtil.currentPriceDecimalLength).toString();
	}else{
		if(parseFloat(tripExtraTotalAmount) > 0){
			msg.tripExtrasMultiCurr = true;
		}
	}
	Payment.renderPriceHeader(priceAddedSeatSection);
}*/
function detectIE() {
	  var ua = window.navigator.userAgent;

	  // Test values; Uncomment to check result …

	  // IE 10
	  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

	  // IE 11
	  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

	  // Edge 12 (Spartan)
	  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

	  // Edge 13
	  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

	  var msie = ua.indexOf('MSIE ');
	  if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	  }

	  var trident = ua.indexOf('Trident/');
	  if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	  }

	  var edge = ua.indexOf('Edge/');
	  if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	  }

	  // other browser
	  return false;
	}
$(document).ready(function () {
	// "use strict";
	if(navigator.userAgent.match(/iPad/i)){
		$( "body" ).addClass( "ipad" );
	}
	flightUtil.openNewWindow();
    $.views.activeViews = false;
    errorCodeObj.init();
    paymentMsgObj.init();
    Payment.init();
    termsAndConditionMsgObj.init();
	//introduced as fix for defect#58477. HTML Conditional Comments used in the HTML fragments in CQ are not supported by IE 10 and above. This is a temporary patch to address just the issue mentioned in defect#58477
	if(detectIE()){
		var currentCqPath='';
		var currentCssVersion='';
		$.each(document.getElementsByTagName('script'), function(){ if(this.src.indexOf('payment.js')>-1) currentCqPath=this.src.split('/content/')[0].split('https:')[1];});
		$.each(document.getElementsByTagName('link'), function(){ if(this.href.indexOf('NG_payment.css')>-1) currentCssVersion=this.href.split('/cart/')[1].split('/NG_payment.css')[0];});
		$('head').append('<link rel="stylesheet" property="stylesheet" type="text/css" href="'+currentCqPath+'/content/dam/delta-applications/css/cart/'+currentCssVersion+'/NG_ie.css" media="all"/>');
		$('head').append('<link rel="stylesheet" property="stylesheet" type="text/css" href="'+currentCqPath+'/content/dam/delta-applications/css/cart/'+currentCssVersion+'/NG_ie8.css" media="all"/>');
	}

    $(document).on('click', '.corrections', function(e){
    	$('[aria-invalid=true]:eq(0)').focus();
    });
  /* Accessibility change for defect #57147 starts  */
    $(".viewMoreLink").on("keydown",function(e){
    	  if(e.keyCode ==13 || e.which ==13)
    	  {
    	    setTimeout(function () {
    	    	$("#alternetFopHldr").find('input[type=radio]').eq(0).trigger('change');
    	    }, 0);
    	  }
    	});
/*$(document).on('keyup',"#closeHazMatModal", function(e){
    	if(e.which == 13) {
    		$('#hazMatModal').dialog("close");
        }
    })*/
    /* Accessibility change for defect #57147 ends  */
    $(document).on("click","#closeHazMatModal",function(e){
    	$('#hazMatModal').dialog("close");
    });
	if(!(/iPad|iPhone|iPod/.test(navigator.userAgent))){
		$('#EdocModalHolder').css("overflow", "hidden");
	}
});

/*
 * This is just a dummy function to pass the TripExtras AddToCart functionality
 */


var inEligPaymentOpt = ["payPP", "payBL"];
var inBrazilCardType = ["DS","JC","DC"];
//Changes added for Acculynk : Start
var isMonthFieldValid = true;
var emptyCardNumberMsg = function(){
	if(Payment.selectedCard === "ATM" || Payment.selectedCard === "UP" || Payment.selectedFop === "payACCU"){
		return "Whoops! We're sorry, please enter a valid debit card number.";
	}else{
		return "Whoops! We're sorry, please enter a valid credit card number."
	}
}
//Changes added for Acculynk : End

/**
 * rule for validating empty fields
**/
jQuery.validator.addMethod("emptyField",function(value, element, param){
	return cartPaymentValidation.checkEmpty(value);
},"");

jQuery.validator.addMethod( "lettersOnlyStringTS", function(value, element, param) {
	return cartPaymentValidation.checkAlphaNumeric(element,value,this);
}
,"");

jQuery.validator.addMethod( "validateCardNumberLeadingChars", function(value, element, param) {
	var cardType = $('[name = "creditCardType"]:visible').val();
	
	if(cardType == "VI"){
		if(/^(4[0-9]+)$/.test(value)){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "CA"){ // Master Card
		if((/^(5[0-9]+)$/.test(value)) || (/^(2[0-9]+)$/.test(value))){
			return true;
		}else{
			return false;
		}
	// Changes added for Acculynk : Start
	}else if(cardType == "ATM" && !(/^(62[0-9]+)$/.test(value))){ // ATM Card 
		return true;
	}else if(cardType == "UP" || cardType == "UPB"){ // UnionPay Debit and UnionPay Credit
		if(/^(62[0-9]+)$/.test(value)){
			return true;
		}else{
			return false;
		}
	// Changes added for Acculynk : End
	}else if(cardType == "AX" || cardType == "SM"){ // Amex
		if(/^(37[0-9]+)$/.test(value)){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "JC"){ // JCB
		if(/^(35[0-9]+)$/.test(value)){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "DC"){ // Diners Club
		if(/^(36[0-9]+)$/.test(value)){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "DS"){ // Discover
		if(/^(6[0-9]+)$/.test(value) && !/^(62[0-9]+)$/.test(value)){// Changes added for Acculynk : Start
			return true;
		}else{
			return false;
		}
	}else if(cardType == "TP"){ // UATP
		if(/^(1[0-9]+)$/.test(value)){
			return true;
		}else{
			return false;
		}
	}
},function(params, element) {
	var cardName = $('[name = "creditCardType"] option:selected').text();
	// Changes added for Acculynk : Start
	if(Payment.selectedCard =="UP" || Payment.selectedCard =="UPB"){
		return "Whoops! We're sorry, please enter a valid UnionPay card number."
	}else{
		if(/^(62[0-9]+)$/.test($("#notLogInAccNumber").val())){
			if(Payment.selectedFop === "payACCU"){
		return "Whoops! We're sorry, please enter a valid " + cardName + " debit card number or select the UnionPay tab above."
			}else{
				return "Whoops! We're sorry, please enter a valid " + cardName + " card.  Please check the type of card and number and enter it again."
	}
		}else{
			//change for CPM-936
			if(Payment.selectedFop === "payCC"){
				return "Whoops! We're sorry, please enter one of the credit card types displayed above.";
			}else{
			return "Whoops! We're sorry, please enter a valid " + cardName + " card.  Please check the type of card and number and enter it again."
			}
			
			
		}
	}
	// Changes added for Acculynk : End
});

jQuery.validator.addMethod( "validateCardNumber", function(value, element, param) {
	var cardType = $('[name = "creditCardType"]:visible').val();
	if(!(/^(\d+)$/.test(value))) {
		return false;
	}
	
//	if(cardType == "VI"){
//		if(value.length >= 13 && value.length <= 16){
//			return true;
//		}else{
//			return false;
//		}
//	}else if(cardType == "AX" || cardType == "TP" || cardType == "SM"){
//		if(value.length >= 15 && value.length <= 19){
//			return true;
//		}else{
//			return false;
//		}
//	}else if(cardType == "CA" || cardType == "DS" || cardType == "SD"){
//		if(value.length >= 16 && value.length <= 19){
//			return true;
//		}else{
//			return false;
//		}
//	}else if(cardType == "DC" || cardType== "CC"){
//		if(value.length >= 1 && value.length <= 20){
//			return true;
//		}else{
//			return false;
//		}
//	}else if(cardType == "JC"){
//		if(value.length >= 11 && value.length <= 19){
//			return true;
//		}else{
//			return false;
//		}
//	}
	if(cardType == "VI" || cardType== "CA" || cardType== "JC" || cardType== "DS"){// Changes added for Acculynk : Start
		if(value.length == 16){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "AX" || cardType == "TP" || cardType == "SM"){
		if(value.length == 15){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "DC"){
		if(value.length == 14){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "SD"){
		if(value.length >= 16 && value.length <= 19){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "ATM"){// Changes added for Acculynk : Start
		if(value.length >= 13 && value.length <= 19){
			return true;
		}else{
			return false;
		}
	}else if(cardType == "UP" || cardType == "UPB"){ // UnionPay Debit and UnionPay Credit
		if(value.length >= 13 && value.length <= 19){
			return true;
		}else{
			return false;
		}
	// Changes added for Acculynk : End
	}else if(cardType== "CC"){
		if(value.length >= 1 && value.length <= 20){
			return true;
		}else{
			return false;
		}
	}
},function(params, element) {
	var cardName = $('[name = "creditCardType"] option:selected').text();
	return "Whoops! We're sorry, please enter a valid " + cardName + " card.  Please check the type of card and number and enter it again."
});

jQuery.validator.addMethod( "reqMinMaxFnLen", function(value, element, param) {
	if(value.length>15){
		return false;
	}else{
		return true;
	}
},"");
jQuery.validator.addMethod( "reqMinMaxLnLen", function(value, element, param) {
	if(value.length<2||value.length>15){
		return false;
	}else{
		return true;
	}
},"");

jQuery.validator.addMethod("invalidGiftCardNumber", function (value, element) {
	var validDocNumber = /^[0-9]+$/.test($.trim(value));
	if(validDocNumber != "" && validDocNumber == true){
		return true;
    }else{
		return false;
    }
}, "");


jQuery.validator.addMethod("invalidRedemptionCode", function (value, element) {
	var validRedemptionCode = /([0-9])([a-zA-Z])/.test($.trim(value));
	if(validRedemptionCode != "" && validRedemptionCode == true){
		return true;
    }else{
		return false;
    }
}, "");

jQuery.validator.addMethod( "isHashPresent", function(value, element, param) {
	var regx = /[\#]+/g ;
	if(regx.test(value)){
			return false;
		}else {
			return true;
	}
},"");
//change for CPM-1116
jQuery.validator.addMethod( "isValidChar", function(value, element, param) {
	if(value !=""){
	return (value.match(/^[A-za-z0-9!@$%^&*()+{}=#<>.?\`\~:;\[\],"\s]+$/) && value.match(/.*(?=.*[a-zA-Z])/) ? !0 : !1);
	}
	return true;
},"");

jQuery.validator.addMethod( "isValidZipCode", function(value, element, param) {
	var defaultValue="";
	if($("#countryCode").val() == "US"){
	var rgExp = new RegExp(/^([\d]+[\-]?[\d]+)$/);
	} else if ($("#countryCode").val() == "BR"){
		var rgExp = new RegExp(/^([\d]+[\-]?[\d]+)$/);
	}else{
		var rgExp = new RegExp(/^([\w]+[\s]?[\w]+)$/);		
	}	
	if(value == defaultValue || $.trim(value) == ""){
		return true;
	}
	var validatePostalNo = (value.length > 12 )? false: rgExp.test(value);
	return validatePostalNo;
 }
,"");

jQuery.validator.addMethod("isValidCity", function (value, element, param) {
	var defaultValue="";
	if(value == defaultValue || $.trim(value) == ""){
		return true;
	}
	var rgExp = new RegExp(/^[-.0-9a-zA-Z \']+$/); // dash, period, 0-9a-z, space, apostrophe,  
	return rgExp.test(value);
},"");




jQuery.validator.addMethod( "expiredMonthYear", function(value, element, param) {
	//value=$('[name=expYear]').val();
	var expYearVal = $('[name=expYear]:visible').val();
	var expMonthVal = $('[name=expMonth]:visible').val()
	var d	=	new Date();
	if(expYearVal == ""){
		cartPaymentValidation.unHighlightLegend(element);
		return true;
	}
	if(expYearVal<100){
		expYearVal = "20" + expYearVal; // for 2 digit exp year from text field ATM/Debit only
	}
	if( (expYearVal != "" && expMonthVal != "") && ((expMonthVal< (d.getMonth()+1) && expYearVal == d.getFullYear()) || expYearVal < d.getFullYear())) {
		cartPaymentValidation.highlightLegend(element)
		return false;
	} else {
	  cartPaymentValidation.unHighlightLegend(element);
		return true;
	}
},"");
//Changes added for Acculynk : Start
jQuery.validator.addMethod( "validMonth", function(value, element, param) {
	//value=$('[name=expYear]').val();
	//var valueLength = value.length, monthVal = $('[name=expMonth]').val(), monthLength = $('[name=expMonth]').val().length, 
	var reg = new RegExp('^[0-9]+$');

	if(Payment.selectedCard === "ATM" || Payment.selectedCard === "UP"){
		if((value === "") && Payment.selectedCard !== "UP"){
		{
			cartPaymentValidation.highlightLegend(element);
		return false;}
		}else if(parseInt(value)> 12 || parseInt(value)< 1 || value.length == 1){
			cartPaymentValidation.highlightLegend(element);
			return false;
		}else if(!reg.test(value) && value !== ""){
			cartPaymentValidation.highlightLegend(element);
			return false;
	}else{
		
			return true;
		}
	}else {
		return true;
	}
},"");

jQuery.validator.addMethod( "validYear", function(value, element, param) {
	//value=$('[name=expYear]').val();
	//var valueLength = value.length, monthVal = $('[name=expMonth]').val(), monthLength = $('[name=expMonth]').val().length, 
	var monthVal = $('[name=expMonth]').val();
	var reg = new RegExp('^[0-9]+$');

	if(Payment.selectedCard === "ATM" || Payment.selectedCard === "UP"){
		if((value === "") && Payment.selectedCard !== "UP"){
		{
			cartPaymentValidation.highlightLegend(element);
		return false;}
		}else if( value.length == 1){
			cartPaymentValidation.highlightLegend(element);
			return false;
		}else if(!reg.test(value) && value !=""){
			cartPaymentValidation.highlightLegend(element);
			return false;
		}else if(Payment.selectedCard === "UP"){
			if(value =="" && monthVal !="")	{	
				cartPaymentValidation.highlightLegend(element);
			return false;}
			else
				return true;
		}
		else{		
			return true;
		}
	}else {
		return true;
	}
},"");

//Changes added for Acculynk : End
jQuery.validator.addMethod( "validateCVVIsNumber", function(value, element, param) {
	return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
},"");

jQuery.validator.addMethod( "validateCVVNumber", function(value, element, param) {
	var type = $("#creditCardType").val();
	if(type == null && $("#hdnCCTypes").val() != null){
		type = $("#hdnCCTypes").val();
	}
	if(type == "AX" || type == "SM"){
		if(value.length == 4){
			return true;
		}else{
			return false;
		}
	}
	else {
		if(value.length == 3){
			return true;
		}else{
			return false;
		}
	}
},"");

/**
 * rule for validating CVV number
 */

jQuery.validator.addMethod( "cardId", function(value, element, param) {
	if(!(/^(\d+)$/.test(value))) {
		return false;
	}
	var cardType =  $('[name = "creditCardType"]:visible').val();
	if( cardType.indexOf("_") != "-1" ){
		cardType = $("#hdnCCTypes").val();
	}
	if(cardType == "AX" || cardType == "SM"){
		if(value.length == 4){
			return true;
		}else{
			return false;
		}
	}
	else {
		if(value.length == 3){
			return true;
		}else{
			return false;
		}
	}
 }
,"");

////for currency calculator
//
//jQuery.validator.addMethod("CurrencyCalc", function(value,element) {
//	var regex = /^\s*(?=.*[1-9])\d*(?:\.\d{1,5})?\s*$/;
//	if(regex.test(value)){
//		return true;
//	}
//		return false;
//},calcAmountError);
//
////adding rules for currency
//
//var currencyCalcValidation = {
//		validatecurrCalc : function(){
//			$("#CKOCurrCalc").validate({							
//				/**
//				 * specific rules for each fields
//				 */
//				rules: {
//						currencyAmount :{
//							CurrencyCalc:true
//						}
//				}											
//			});
//       }		
//};

jQuery.validator.addMethod("isNumeric", function(value, element) {
	return ($.trim(value) == "" )? true: /^(\d+)$/.test(value);
}, "");

jQuery.validator.addMethod( "requiredMonthYear", function(value, element, param) {
	var yearVal=$('[name=expYear]').val();
	var monthVal=$('[name=expMonth]').val();
	//Changes added for Acculynk : Start
	if(Payment.selectedCard === "UP"){
		if(yearVal =="")
		return true;
		else if((yearVal =="" && monthVal =="")||(yearVal !="" && monthVal !=""))
		return true;
	else if(yearVal !="" && monthVal ==""){cartPaymentValidation.highlightLegend(element);
			return false;	}
	}else{
		//if( value == "" || $.trim(value) == "" || $('[name=expMonth]').val() == "") {
		if( value == "" || $.trim(value) == "") {
			cartPaymentValidation.highlightLegend(element);
			//$(element).closest('fieldset').find('legend').addClass('errIcon');	
return false;
		} else {
			//cartPaymentValidation.unHighlightLegend(element);
return true;
}
	}
	//Changes added for Acculynk : Start
},"");

//Confirmation of Email is Required
jQuery.validator.addMethod( "requiredConfirmEmail", function(value, element, param) {
	var emailId = $("#email").val();
	if(emailId == "" &&(value == "" || $.trim(value) == "")) {
		return true;
	} else {
		if(value == emailId)
			return true;
		else{
			return false;
		}
	}
},"");

jQuery.validator.addMethod( "isFopInvalidBillingAddress", function(value, element, param) {
	if( $.trim(value) != "US" && $.inArray(Payment.selectedFop, inEligPaymentOpt) != -1) {
		return false;
	} else {
		return true;
	}
},function(params, element) {
	var paymentType = flightUtil.getPaymentTypeFromPayOpt(Payment.selectedFop);
	return "Whoops! We're sorry, please enter a valid United States billing address to use "+paymentType+" as a payment type."
});


jQuery.validator.addMethod( "isInvalidBrazilPaymentOpt", function(value, element, param) {
	var selectedPaymentOpt = $("#creditCardType").val();
	if( $.trim($("#countryCode").val()) == "BR" && $.inArray(selectedPaymentOpt,inBrazilCardType) != -1) {
		return false;
	} else {
		return true;
	}
},"");

jQuery.validator.addMethod( "isPayPalSelectedLoggedIn", function(value, element, param) {
	if( $.trim(loggedInAddressMap[value].addressLine8) != "US" && $("#payPP:checked").size()) {
		return false;
	} else {
		return true;
	}
}
,"");
$(document).on("change", "[id='notLogInExpMonth'],[id='notLogInExpYear']", function (e) {
	if(e.originalEvent !== undefined){
		$this = $(this);
		$(this).closest("fieldset").find("select:visible,input:visible").each(function(){
			if($this.prop("id")!= $(this).prop("id") && $(this).val() != ""){
				$(this).valid();
			}
		});
	}	
});

var cartPaymentValidation = {
	validatePaymentInfo : function(){
		
	/*jQuery.validator.setDefaults({
		onfocusout: function( element ) {
			this.element( element );
	},
	
	invalidHandler: function(event, validator) {
		console.log('invalidHandler');  
		if($(validator.currentForm).has(".toolTipErrorMessageContainer").length>0){
			  var errors = validator.numberOfInvalids();
		        if (errors) {
		          var message = errors == 1
		            ? 'To continue, please correct the 1 item indicated below. <span class="toolTipErrorCountContainer"><a href="javascript:void(0)" class="toolTipErrorCount corrections">Make Corrections</a></span>'
		            : 'To continue, please correct the <span class="toolTipErrorCountContainer"> <a href="javascript:void(0)" class="toolTipErrorCount">' + errors + ' items </a></span> indicated below. <a href="javascript:void(0)" class="toolTipErrorCount corrections">Make Corrections</a>';
		          $("#"+validator.currentForm.id+" .toolTipErrorMessageContainer").html(message);
		          $("#"+validator.currentForm.id+" .toolTipErrorMessageContainer").show();
		        } else {
		        	$("#"+validator.currentForm.id+" .toolTipErrorMessageContainer").hide();
		        }
		  }
		  $('#processingDialog').dialog("close");
			adjustModal.close();
		 }
	});*/
	 Payment.validator = $("#cartPayment").validate({
			 ignore : ":hidden",
			 debug:true,
			 /*invalidHandler : function(form){
		     },*/
//			  errorPlacement: function(error,element) {
//		    	 $("span[for^="+$(element).attr("id")+"]").remove();
//		    	 //Changes added for Acculynk : Start
//		    	 $("span[id^="+$(element).attr("id")+"]").remove();
//		    	 //Changes added for Acculynk : End
//		    	 if($(element).attr("id") == "notLogInExpYear" || $(element).attr("id") == "notLogInExpMonth" || $(element).attr("name") == "onlineProvider" || $(element).attr("name") == "onlineBank") {//For RTBT
//			    	 var expDate_container = $(element).parent().parent();							
//			    	 expDate_container.append(error);							
//		    	 }else  if($(element).attr("id") == "stateProv" || $(element).attr("id") == "countryCode" || $(element).attr("id") == "onlineCountry") {//For RTBT
//			    	 $(error).insertAfter($(element).parent());
//		        }
//		    	 /*
//		    	  * Commented as per Defect 34121 
//		    	  *
//		    	 else  if($(element).attr("id") == "countryCode") {
//		    		 $("#errorCountryFopMsg").html(error);
//		  }
//		    	 */
//		    	 else{ 
//		    		 $(error).insertAfter($(element));
//		 }
//			  },
			  rules : {
				  shcCreditCardNumber : {
				  		emptyField : true,
				  		validateCardNumberLeadingChars : true,
						validateCardNumber : true
					},
					expYear : {
						validYear : true,// Changes added for Acculynk : Start
						requiredMonthYear : true,
						expiredMonthYear : true
					},
					expMonth :{
						validMonth : true,// Changes added for Acculynk : Start
						requiredMonthYear : true,
						expiredMonthYear : true
					},
					cvv : {
						emptyField : true,
						cardId : true
					},
					txtFName : {
						emptyField : true,
						lettersOnlyStringTS : true,
						reqMinMaxFnLen : true
					},
					txtLName : {
						emptyField : true,
						lettersOnlyStringTS : true,
						reqMinMaxLnLen : true
					},					
					giftCard_number0 : {
						emptyField : true,
						invalidGiftCardNumber : true
					},
					redemption_code0 : {
						emptyField : true,
						invalidRedemptionCode : true
					},
					giftCard_number1 : {
						emptyField : true,
						invalidGiftCardNumber : true
					},
					redemption_code1 : {
						emptyField : true,
						invalidRedemptionCode : true

					},
					giftCard_number2 : {
						emptyField : true,
						invalidGiftCardNumber : true
					},
					redemption_code2 : {
						emptyField : true,
						invalidRedemptionCode : true
					},					
					
					/*giftCard_number : {
						emptyField : true,
						invalidGiftCardNumber : true
					},
					redemption_code0 : {
						emptyField : true,
						invalidRedemptionCode : true
					},
					giftCard_number1 : {
						emptyField : true,
						invalidGiftCardNumber : true
					},
					redemption_code1 : {
						emptyField : true,
						invalidRedemptionCode : true

					},
					giftCard_number2 : {
						emptyField : true,
						invalidGiftCardNumber : true
					},
					redemption_code2 : {
						emptyField : true,
						invalidRedemptionCode : true
					},*/
					addrLine1StreetName : {
						emptyField : true,
						isHashPresent : true
					},
					addrLine2RoomApartment : {
						isHashPresent : true
					},
					cityCountyWard : {
						emptyField : true,
						isValidCity : true
					},
					stateProvCode : {
						emptyField : true,
						isValidChar : true//change for CPM-1116
					},
					txtAreaTerritoryPrefecture : {
						isValidChar : true//change for CPM-1116
					},
					txtDistrictTownVillage : {
						isValidChar : true//change for CPM-1116
					},
					postalCode : {
						emptyField : true,
						isValidZipCode : true
					},
					notLogInEmail : {
						emptyField : true,
						email : true
					},
					loggedInEmail : {
						emptyField : true,
						email : true
					},
					notLogInConfEmail : {
						requiredConfirmEmail : true,
						email : true
					},
					country:{
						emptyField: true,
						isFopInvalidBillingAddress : true,
						isInvalidBrazilPaymentOpt : true
					},
					//For RTBT
					onlineCountry: {
						emptyField : true
					},
					onlineProvider:{
						emptyField : true
					},
					onlineBank:{
						emptyField : true
					}
			  },
			  messages : {
				  shcCreditCardNumber : {
				  		emptyField : emptyCardNumberMsg
				  		//validateCardNumberLeadingChars : "Please enter a valid credit card number.",
						//validateCardNumber : "Please enter a valid credit card number.",
				  	},
				  	expYear : {
				  		validYear : "Whoops! We're sorry, please enter a valid expiration date in MM/YY format.",// Changes added for Acculynk : Start
						requiredMonthYear : "Whoops! We're sorry, please enter a valid card expiration date.",
						expiredMonthYear : "Whoops! We're sorry, please enter a valid card expiration date."
					},
					expMonth : {
				  		validMonth : "Whoops! We're sorry, please enter a valid expiration date in MM/YY format.",// Changes added for Acculynk : Start
						requiredMonthYear : "Whoops! We're sorry, please enter a valid card expiration date.",
						expiredMonthYear : "Whoops! We're sorry, please enter a valid card expiration date."
					},
					cvv : {
						emptyField :"Whoops! We're sorry, but the credit card security code is invalid. Please enter the numbers exactly as they appear on your card. ",
						cardId:"Whoops! We're sorry, but the credit card security code is invalid. Please enter the numbers exactly as they appear on your card. "
					},
					txtFName : {
						emptyField : "Whoops! We're sorry, please enter a valid First Name.",
						lettersOnlyStringTS : "Whoops! We're sorry, please enter a valid First Name.",
						reqMinMaxFnLen : "Oops! We're sorry, please enter a minimum of 1 and a maximum of 15 letters."
					},
					txtLName : {
						emptyField : "Whoops! We're sorry, please enter a valid Last Name.",
						lettersOnlyStringTS : "Whoops! We're sorry, please enter a valid Last Name.",
						reqMinMaxLnLen : "Oops! We're sorry, please enter a minimum of 2 and a maximum of 15 letters."
					},
					/*Error handling for giftcard no and redemption code start*/
					giftCard_number0 : {
						emptyField : "Whoops! We're sorry, please enter the Gift Card number.",
						//invalidGiftCardNumber : "Oops! We're sorry, but the Certificate number or the Security Code you entered is either an invalid number, closed, or no longer available."
						invalidGiftCardNumber : "Whoops! We're sorry, please enter a valid document number."
							
					},
					redemption_code0 : {
						emptyField: "Whoops! We're sorry, please enter the redemption code.",
						//invalidRedemptionCode : "The Certificate number or the Security Code you entered is either an invalid number, closed, or no longer available."
						invalidRedemptionCode : "Whoops! We're sorry, please enter a valid redemption code."							
					},
					/*Error handling for giftcard no and redemption code start*/
					giftCard_number1 : {
						emptyField : "Whoops! We're sorry, please enter the Gift Card number.",
						//invalidGiftCardNumber : "The Certificate number or the Security Code you entered is either an invalid number, closed, or no longer available."
						invalidGiftCardNumber : "Whoops! We're sorry, please enter a valid document number."
							
					},
					redemption_code1 : {
						emptyField: "Whoops! We're sorry, please enter the redemption code.",
						//invalidRedemptionCode : "The Certificate number or the Security Code you entered is either an invalid number, closed, or no longer available."
						invalidRedemptionCode : "Whoops! We're sorry, please enter a valid redemption code."							
					},
					/*Error handling for giftcard no and redemption code start*/
					giftCard_number2 : {
						emptyField : "Whoops! We're sorry, please enter the Gift Card number.",
						//invalidGiftCardNumber : "The Certificate number or the Security Code you entered is either an invalid number, closed, or no longer available."
						invalidGiftCardNumber : "Whoops! We're sorry, please enter a valid document number."
							
					},
					redemption_code2 : {
						emptyField: "Whoops! We're sorry, please enter the redemption code.",
						//invalidRedemptionCode : "The Certificate number or the Security Code you entered is either an invalid number, closed, or no longer available."
						invalidRedemptionCode : "Whoops! We're sorry, please enter a valid redemption code."							
					},
					/*Error handling for giftcard no and redemption code end*/
					addrLine1StreetName : {
						emptyField : "Whoops! We're sorry, please enter a valid Address.",
						isHashPresent : "Whoops! We're sorry, please enter a valid Address."
					},
					addrLine2RoomApartment : {
						isHashPresent : "Whoops! We're sorry, please enter a valid Address."
					},
					cityCountyWard : {
						emptyField : "Whoops! We're sorry, please enter a valid City.",
						isValidCity : "Whoops! We're sorry, please enter a valid City. Please enter only letters, blanks, apostrophes, periods, or dashes in the field."
					},
					stateProvCode : {
						emptyField : "Whoops! We're sorry, please enter a valid State/Province.",
						isValidChar : "Whoops! We're sorry, please enter a valid State/Province."//change for CPM-1116
					},
					txtAreaTerritoryPrefecture : {
						emptyField : "Whoops! We're sorry, please enter a valid Area/Territory/Prefecture.",
						isValidChar : "Whoops! We're sorry, please enter a valid Area/Territory/Prefecture."//change for CPM-1116
					},
					txtDistrictTownVillage : {
						emptyField : "Whoops! We're sorry, please enter a valid District/Town/Village.",
						isValidChar : "Whoops! We're sorry, please enter a valid District/Town/Village."//change for CPM-1116
					},
					notLogInEmail : {
						emptyField : "Whoops! We're sorry, please enter a valid email address.",
						email : "Whoops! We're sorry, please enter a valid email address."
					},
					loggedInEmail : {
						emptyField : "Whoops! We're sorry, please enter a valid email address.",
						email : "Whoops! We're sorry, please enter a valid email address."
					},
					notLogInConfEmail : {
						requiredConfirmEmail : "Oops! We're sorry, but the email addresses entered do not match. Please try again. ",
						email : "Whoops! We're sorry, please enter a valid email address."
					},
					postalCode : {
						emptyField : "Whoops! We're sorry, please enter the Postal Code for your billing address.",
						isValidZipCode : "Whoops! We're sorry, please enter a valid Zip Code."
					},
					country:{						
						emptyField : "Whoops! We're sorry, please select a valid country.",
						isInvalidBrazilPaymentOpt : "Oops! We're sorry, please select a valid form of payment for this billing country. Please select American Express, VISA, MasterCard, or UATP."
					},
					//For RTBT
					onlineCountry: {
						emptyField : "Whoops! We're sorry, please select the banking country."
					},
					onlineProvider:{
						emptyField : "Whoops! We're sorry, please select the payment provider."
					},
					onlineBank:{
						emptyField : "Whoops! We're sorry, please select a bank."
					}
			  },
			  onfocusout:function( element ) {
		            if ( !this.checkable( element )) {
		                  this.element( element );
		            }
		        },
//			  highlight : function(element, errorClass){
//				  var fieldName = $(element).attr("name");
//				  if(fieldName == "expYear" || $(element).attr("id") == "stateProv" || $(element).attr("id") == "countryCode" || $(element).attr("id") == "onlineCountry") {//For RTBT
//					  $(element).parent().addClass("nextGenErrorText");
//					  if(fieldName == "expYear" && !isMonthFieldValid) {// Changes added for Acculynk : Start
//						  $(element).parent().parent().find("#notLogInExpMonth").parent().addClass("nextGenErrorText");
//					  }
//				  }else{ 
//					  $(element).addClass("nextGenErrorText");
//					  /*if($(element).prev("label").size()){
//						  $(element).prev("label").addClass("labelError");
//					  } else if($(element).parent().prev("label").size()){
//							$(element).parent().prev("label").addClass("labelError");
//					  }else{
//						$(element).parent().parent().find("label").addClass("labelError");
//					  }*/
//				  }				  
//			  },
			   //},
//			  unhighlight : function(element, errorClass){
//				  	var fieldName = $(element).attr("name");
//				  	$("span[for^="+$(element).prop("id")+"]").remove();
//				  	if(fieldName == "expYear" || $(element).attr("id") == "stateProv" || $(element).attr("id") == "countryCode" || $(element).attr("id") == "onlineCountry") {//For RTBT
//						  $(element).parent().removeClass("nextGenErrorText");
//						  if(fieldName == "expYear" && isMonthFieldValid) {// Changes added for Acculynk : Start
//							  $(element).parent().parent().find("#notLogInExpMonth").parent().removeClass("nextGenErrorText");
//						  }
//					} else {
//					  	$(element).removeClass("nextGenErrorText");
//						/*if($(element).prev("label").size()){
//				  			$(element).prev("label").removeClass("labelError");
//				  		} else if($(element).parent().prev("label").size()){
//							$(element).parent().prev("label").removeClass("labelError");
//							if(fieldName == "expMonth" && $("#notLogInExpYear").val() == ""){
//								$(element).parent().prev("label").addClass("labelError");
//							}
//						}else{
//								$(element).parent().parent().find("label").removeClass("labelError");
//					  	}*/
//			        }
//			  },
			 /* onkeyup: function(element) {
				    var element_id = jQuery(element).attr('id');
				    if (this.settings.rules[element_id] != undefined && this.settings.rules[element_id].onkeyup !== false) {
				      jQuery.validator.defaults.onkeyup.apply(this, arguments);
				    }
			  },*/
			  submitHandler : function(form){
				 /* $('#processingDialog').dialog("open");
				  if($("#saveInfo").is(":hidden")){
					  $("#saveInfo").val("false");
				  }*/

					// open if new buy miles is implemented
					/*if($("#selectMileageHolder").size() && $("#buyMilesPrdtDO").val() == ""){
						return false;
					}*/
					var submitForm = true;

					if($("#eCreditCheck").prop("checked")){
						var TEPrdtList = [], TEPrdtJSON = "", FOPFields = {};
				    	if($("#passinfoTripExtra").html() != ""){
				    		var TEPrdtHolder= $("#passinfoTripExtra");
				    		$("input[type=checkbox]:checked, select, input[type=text]", TEPrdtHolder).each(function(){
				    				var fieldObj = {};
				    				var fieldId = $(this).attr("id");
				    				if(fieldId){
				    					fieldObj.fieldId = fieldId;
				    				} else {
				    					fieldObj.fieldName =  $(this).attr("name");
				    				}
				    				fieldObj.tagName = $(this)[0].nodeName;
				    				fieldObj.value = $(this).val();
				    				fieldObj.type = $(this).attr("type");
				    				TEPrdtList.push(fieldObj);
				    		});
				    		TEPrdtJSON = JSON.stringify(TEPrdtList);
				    	}
				    	if($("[name=addrRadio]:checked").val()=="newAddress") {
							$("[name=newAddress]").val("Y");
						}
						/*if($("[name=ccRadio]:checked").val()=="newCard") {
							$("[name=newPaymentType]").val("Y");
						}*/
						if($("[name=txtAddressId]").is(":hidden")){
							$("#hdnAddIds").remove();
						}
						if($("#storedCCList").size() == 0 || $("#storedCCList").is(":hidden")){
							$("#hdnSavedFopId,#hdnCCTypes").remove();
						} else {
							var cCType = $("#storedCCList").val().split("_")[0];
							$("#storedCCList option:selected").attr("value",cCType);
						}
						$("[name=creditCardType]:hidden, [name=cvv]:hidden,  ,[name=shcCreditCardNumber]:hidden").remove();
						$("[name=addrLine1StreetName]:hidden, [name=addrLine2RoomApartment]:hidden, [name=cityCountyWard]:hidden, [name=stateProvCode]:hidden ,[name=postalCode]:hidden ,[name=txtAddressId]:hidden").remove();
				    	$.each($("#flightReview").serialize().split("&"),function(fieldIndx,fields){
				    	    var fieldsArr = fields.split("=");
				    	    if(fieldsArr[0] == "cvv"){
				    	        return true;
				    	    }
				    	    FOPFields[fieldsArr[0]] = fieldsArr[1];
				    	});
				    	var edocReatinableData = {};
				    	edocReatinableData = FOPFields;
				    	edocReatinableData.tEPrdtJSONStr = TEPrdtJSON;
				    	$.ajax({
				    		type: 'POST',
				            dataType: "json",
				            url: 'DataRetentionJSONAction',
				            headers: { "cache-control": "no-cache"},
				            data: edocReatinableData,
				            success:function(data){
						$("#frmEdocRedeem").submit();
				    		}/*,
				            error:function(xhr, ajaxOptions, thrownError){
				    		}*/
				    	}).fail(function(jqXHR, textStatus, error){
							try{
								delta.utils.logger.ajaxError(jqXHR, textStatus, error);
								delta.utils.logger.logMessage("Request Failed: " + error, "error");
							}catch(err){
								if (window.console && window.console.error) {
									console.error('Error logging to delta.utils.logger:' + err);
								}
							}
						});
						return true;
					}

					/* Trips Extra add to cart validation is removed, so that flight purchase go through*/
					/* even if there is any error for TE purchase*/


					if($(".tripextras_purchase_add").hasClass("addtocart_ready")){
							//var notLoggedInCcType = $("#ccType").val();
						//	var loggedInCcType = $("#storedCCList").val().split("_")[0];
						submitForm = true;
						dwr.engine.setAsync(false);
						// trip extra add to cart

						if (!$('#payPP').attr('checked')&& !$('#payBL').attr('checked')) {
						addItemsToCart();
							}


						if($("#tripextras_bottom").hasClass("tripExtras_UI_Error")){
							submitForm = false;
							if($("#passinfoTripExtra").length != 0){
							  $(document).scrollTop($("#passinfoTripExtra").offset().top);
							}
						}
						dwr.engine.setAsync(true);
					}else{
						submitForm = true;
					}

					if( $.trim($("#countryCode").val()) != "US" && $.inArray(Payment.selectedFop, inEligPaymentOpt) != -1) {
						var paymentType = flightUtil.getPaymentTypeFromPayOpt(Payment.selectedFop);
						$("#errorSavedAddressFopMsg").html("Oops! We're sorry, please enter a valid United States billing address to use "+paymentType+" as a payment type.").show();
						$("#addrAlias").parent().addClass("nextGenErrorText");
						submitForm = false;
					}
					if($('[name = "creditCardType"]:visible').length) {
						var selectedPaymentOpt = $('[name = "creditCardType"]:visible').val();
						if(selectedPaymentOpt && $.trim($("#countryCode").val()) == "BR" && $.inArray(selectedPaymentOpt,inBrazilCardType) != -1) {
						$("#errorSavedAddressFopMsg").html("Oops! We're sorry, please select a valid form of payment for this billing country. Please select American Express, VISA, MasterCard, or UATP.").show();
						$("#addrAlias").parent().addClass("nextGenErrorText");
						submitForm = false;
					}
					}
					
					if(submitForm){
						var TEPrdtList = [], TEPrdtJSON = "";
				    	if($("#passinfoTripExtra").html() != ""){
				    		var TEPrdtHolder= $("#passinfoTripExtra");
				    		$("input[type=checkbox]:checked, select, input[type=text]", TEPrdtHolder).each(function(){
				    				var fieldObj = {};
				    				var fieldId = $(this).attr("id");
				    				if(fieldId){
				    					fieldObj.fieldId = fieldId;
				    				} else {
				    					fieldObj.fieldName =  $(this).attr("name");
				    				}
				    				fieldObj.tagName = $(this)[0].nodeName;
				    				fieldObj.value = $(this).val();
				    				fieldObj.type = $(this).attr("type");
				    				TEPrdtList.push(fieldObj);
				    		});
				    		TEPrdtJSON = JSON.stringify(TEPrdtList);

				    		// collect all selected TripExtra accounting code
				    		var tripExtSelectedPrdts = new Array();
				    		var tripExtSelectedPrdtJson = "";
				    		$(".mileage_option:selected", TEPrdtHolder).each(function() {
				    			var tripExtra = new Object();
				    		    tripExtra.passengerNumber = $(this).attr("passengerNumber");
				    		    tripExtra.accountingCode = $(this).attr("accountingCode");
				    		    tripExtra.productId = $(this).val();
				    		    tripExtSelectedPrdts.push(tripExtra);
				    		});

				    		$(".tripExtras_checkbox:checked", TEPrdtHolder).each(function() {
				    			var tripExtra = new Object();
				    		    tripExtra.passengerNumber = $(this).closest(".tripextrasform_check").siblings(".passengerNumber").val();
				    		    tripExtra.accountingCode = $(this).closest(".tripextrasform_check").siblings(".accountingCode").val();
				    		    tripExtra.productId = $(this).val();
				    		    tripExtSelectedPrdts.push(tripExtra);
				    		});

				    		tripExtSelectedPrdtJson = JSON.stringify(tripExtSelectedPrdts);

				    	} // end of .html() != ""

				    	/*
				    	 * Added to post payment type as radio buttons are outside cartPayment form
				    	 */
				    	$("#hdnPayOpt").val(Payment.selectedFop);
				    	
				    	$("#hdnBookingAvailCount").val($("#tripInsuranceSection").find("input[name=bookingAvailCount]").val());
				    	$("#hdnTreatmentID").val($("#tripInsuranceSection").find("input[name=treatmentID]").val());
				    	$("#hdnQuotePackId").val($("#tripInsuranceSection").find("input[name=quotePackId]").val());
				    	$("#hdnTotalInsurancePrice").val($("#tripInsuranceSection").find("input[name=totalInsurancePrice]").val());
				    	
				    	$("#tEPrdtJSONStr").val(TEPrdtJSON);
				    	$("#tripExtSelectedJson").val(tripExtSelectedPrdtJson);

						if($("[name=addrRadio]:checked").val()=="newAddress") {
							$("[name=newAddress]").val("Y");
						}
						if($("#hdnIsExpiredCard").length > 0 && $("#hdnIsExpiredCard").val()  == "Y" ){			 
					    	/*$("#hdnExpMonth").val($("#notLogInExpMonth").val());
					    	$("#hdnExpYear").val($("#notLogInExpYear").val());	*/
							$("#hdnExpYear,#hdnExpMonth,#ccNumberField").remove();
					    }
						/*if($("[name=ccRadio]:checked").val()=="newCard") {
							$("[name=newPaymentType]").val("Y");
						}*/
						if($("[name=txtAddressId]").is(":hidden")){
							$("#hdnAddIds").remove();
						}
						if($("#storedCCList").size() == 0 || $("#storedCCList").is(":hidden")){
							$("#hdnSavedFopId,#hdnCCTypes").remove();
						} else {
							var cCType = $("#storedCCList").val().split("_")[0];
							$("#storedCCList option:selected").attr("value",cCType);
						}
						$("[name=creditCardType]:hidden, [name=cvv]:hidden, [name=shcCreditCardNumber]:hidden").remove();
						$("[name=addrLine1StreetName]:hidden, [name=addrLine2RoomApartment]:hidden, [name=cityCountyWard]:hidden, [name=stateProvCode]:hidden ,[name=postalCode]:hidden ,[name=txtAddressId]:hidden").remove();
						window.onbeforeunload = null;
						$("#continue_button, #purchase_button").attr("disabled","disabled");
						var userAgent = window.navigator.userAgent.toLowerCase();
						var isSafari = userAgent.indexOf('safari') != -1 && userAgent.indexOf('chrome') == -1;						
						
						if(!isSafari){							
							form.submit();
						}else{							

						setTimeout(function() {
							form.submit();					
							}, 300);
						}
						$.blockUI(completePurchaseBlockUIOptions);
					} else {
						return false;
					}
			}
		});
		addressMap.addRemoveRules();
	},
	checkEmpty : function(value){
		if( $.trim(value) == ""){
			return false;
		}
		else{
			return true;
		}
	},
	checkAlphaNumeric: function(element,value,thisObj){
		return thisObj.optional(element) || /^[a-z\s-\'\.]+$/i.test(value);
	},
	/* Ax changes for global error handling starts*/

	highlightLegend : function(element){
		$(element).addClass('errorInput');
		$(element).closest('fieldset').find('legend').addClass('errIcon');
	},
	unHighlightLegend : function(element){
		$(element).removeClass('errorInput');
		if($(element).closest('fieldset').find("select.errorInput").length == 0){
		$(element).closest('fieldset').find('legend').removeClass('errIcon');
	}
	}
	/* Ax changes for global error handling ends*/
}