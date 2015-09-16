(function() {
	var app = angular.module('fhir', []);

	app.controller("MyController", [ '$scope', '$window', function($scope, $window) {
		var self = this;
		$scope.ptName = "not loaded";
		
	 	var demo = {
	 		serviceUrl : "https://fhir-open-api.smarthealthit.org",
	 		patientId : "7321938" // "1137192"
	 	};

	 	// Create a FHIR client (server URL, patient id in `demo`)
	 	var smart = $window.FHIR.client(demo);
	 	var pt = smart.context.patient;
	
	 	$scope.ptName = "Loading..."
	 	
	 	// Create a patient banner by fetching + rendering demographics
	 	pt.read().then(
 			function(p) {
		 		var name = p.name[0];
		 		var formatted = name.given.join(" ") + " " + name.family;
		 		$scope.ptName = formatted; // doesn't work
		 		$scope.$apply();
 			}
		);
	 	
	 	// A more advanced query: search for active Prescriptions, including med details
	 	pt.MedicationPrescription.where.status("active")._include(
	 			"MedicationPrescription.medication").search().then(
	 			function(prescriptions) {
	 				prescriptions.forEach(function(rx) {
	 					var med = smart.cachedLink(rx, rx.medication);
	 					var row = $("<li> " + med.name + "</li>");
	 					$("#med_list").append(row);
	 				});
	 			});		


	} ]);

})();

//(function() {
//	var app = angular.module('fhir', []);
//
//	app.controller("MyController", [ '$scope', '$window', function($scope, $window) {
//		var self = this;
//		this.pname = "not loaded";
//		
//	 	var demo = {
//	 		serviceUrl : "https://fhir-open-api.smarthealthit.org",
//	 		patientId : "1137192"
//	 	};
//
//	 	// Create a FHIR client (server URL, patient id in `demo`)
//	 	var smart = $window.FHIR.client(demo);
//	 	var pt = smart.context.patient;
//	
//	 	// Create a patient banner by fetching + rendering demographics
//	 	pt.read().then(
// 			function(p) {
//		 		var name = p.name[0];
//		 		var formatted = name.given.join(" ") + " " + name.family;
//		 		self.pname = "changing pname in callback";
//		 		$("#patient_name").text(formatted);
// 			}
//		);
//
//		
//		this.getPatientInfo = function() {
//			this.pname = "loading";
//			
////			this.pt.read().then(function(p) {
////				this.pname = "an error has occurred";
////				var name = p.name[0];
////				var formatted = name.given.join(" ") + " " + name.family;
////				this.pname = "formatted";
////			});
//		};
//
//	} ]);
//
//})();