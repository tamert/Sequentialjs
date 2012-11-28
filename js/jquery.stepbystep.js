/**
 * jQuery Stepbystep plugin
 * http://www.tinysay.com/
 *
 * Copyright 2012, Tamer Agaoglu
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Tuesday 27 Nov 2012
 */
;(function ($) {  
	$.fn.stepbystep = function(options,callback){
	
	/* OPTIONS DEFAULTS */

	var defaults = { 									
		speed					: 600,		// effect speed
		start					: true,		// item open or close ?
		number					: 0,		// first item number
		effect					: "fade",	// fade , slide OR animate jquery
		random					: false,	// random number all items ? 
		wait					: 100,		// delay all
		onebyone				: false,	// one item open and close
		toggle					: 0		// static  
    };
    
    var options = $.extend({}, defaults, options); 

    if(typeof callback != 'function'){
        callback = function(){ }; 
    }
    
    if($(this)==undefined){
    		return false;
    } else if($(this)==null){
    		return false;
    } else if($(this).length<1){
    		return false;
	}
    	
    var $this = $(this);
    var total = $this.length;
    
    /* RANDOM SHUFFLE : START  */
    
    if(options.random){
      $.shuffle = function(arr) {
      	for(
      		var j, x, i = arr.length; i;
	      	j = parseInt(Math.random() * i),
	      	x = arr[--i], arr[i] = arr[j], arr[j] = x
	      	);
	      return arr;
      }

      	if(options.number==0){
	      	var $this = $.shuffle($this);
	    }
   }
   
   /* RANDOM SHUFFLE : END  */
   
    var item = $this.eq(options.number);
    var next = parseInt(options.number+1);
   
    /* END STEP : START */
    
    if(item==undefined){
    	    callback(); 
    		return false;
    } else if(item==null){
	       	callback(); 
    		return false;
    } else if(item.length<1){
    		callback();
    		return false;
	}
	
   /* END STEP : END */   
   
   /* ONE BY ONE : START */
 
   
   if(options.onebyone){
   		if(options.toggle==0){
	   		options.toggle = 1; 
	   		next = parseInt(next-1);
	   		if(options.start){
	   			options.start = false;
	   		} else {
	   			options.start = true;
	   		}
		} else if(options.toggle==1) {
		   	options.toggle = 2;  

		   	if(options.start){
	   			options.start = false;
	   		} else {
	   			options.start = true;
	   		}
		}
   }
     //console.log("select ->"+next+"  start ->"+options.start+" toggle->"+options.toggle);

   if(options.toggle==2){
	   options.toggle = 0;
   }
   //console.log(options.toggle);
    
//console.log(options.toggle);

   /* ONE BY ONE : END */
   
   /* EFFECT : START */
   
   if(options.start==true){
   		if(options.effect=="fade"){
   		    item.delay(options.wait).fadeIn(options.speed, function () {
                $this.stepbystep({
                speed : options.speed,
                start : options.start,
                number : next,
                effect : options.effect,
                random : options.random,
                wait : options.wait,
                onebyone : options.onebyone,
                toggle : options.toggle
                }, callback);
            });
   		} else if(options.effect=="slide"){
	   		 item.delay(options.wait).slideDown(options.speed, function () {
                $this.stepbystep({
                speed : options.speed,
                start : options.start,
                number : next,
                effect : options.effect,
                random : options.random,
                wait : options.wait,
                onebyone : options.onebyone,
                toggle : options.toggle
                }, callback);
            });
   		}
   } else {
   		if(options.effect=="fade"){
   		    item.delay(options.wait).fadeOut(options.speed, function () {
                $this.stepbystep({
                speed : options.speed,
                start : options.start,
                number : next,
                effect : options.effect,
                random : options.random,
                wait : options.wait,
                onebyone : options.onebyone,
                toggle : options.toggle
                }, callback);
            });
   		} else if(options.effect=="slide"){
   		    item.delay(options.wait).slideUp(options.speed, function () {
                $this.stepbystep({
                speed : options.speed,
                start : options.start,
                number : next,
                effect : options.effect,
                random : options.random,
                wait : options.wait,
                onebyone : options.onebyone,
                toggle : options.toggle
                }, callback);
            });
   		}	
   }
   
   /* EFFECT : END */
   
   };	
})(jQuery);