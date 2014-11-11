(function ( $ ) {
    'use strict';

    $(document).ready(function() 
    {

    	$('#guatemala_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#honduras_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#nicaragua_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#costarica_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#panama_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#colombia_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#peru_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#bolivia_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#paraguay_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});

    	$('#brasil_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});

    	$('#chile_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#belice_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    	$('#el_salvador_point').tooltip({ title:'<img src="/bundles/odiseoconagra/images/conagralatam/image.png"  style="background-color: transparent;height:100px; width:100px;">', container:'body', html:true});
    
    	//Entrenamiento de marcas
    	$('.infoBrand .tabs a').click(function(e)
    	{
    		e.preventDefault();
    		
    		if(!$(this).hasClass('active'))
    		{
    			var goToTabClass = $(this).data('tab');
    			
    			$('.infoBrand .tabs a').removeClass('active');
    			$(this).addClass('active');
    			
    			$('.infoBrand .info .tabContent').removeClass('hide');
    			$('.infoBrand .info .tabContent').hide();
    			$('.infoBrand .info .tabContent.'+goToTabClass).show();
    		}
    	});
    });
    
})( jQuery );
