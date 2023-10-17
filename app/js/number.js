$(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
              
                // Increment
            
        });
    
         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
    });

// $(function() {
// 	$('[data-decrease]').click(decrease);
// 	$('[data-increase]').click(increase);
// 	$('[data-value]').change(valueChange);
// });

// function decrease() {
// 	var value = $(this).parent().find('[data-value]').val();
// 	if(value > 1) {
// 		value--;
// 		$(this).parent().find('[data-value]').val(value);
// 	}
// }

// function increase() {
// 	var value = $(this).parent().find('[data-value]').val();
// 	if(value < 100) {
// 		value++;
// 		$(this).parent().find('[data-value]').val(value);
// 	}
// }

// function valueChange() {
// 	var value = $(this).val();
// 	if(value == undefined || isNaN(value) == true || value <= 0) {
// 		$(this).val(1);
// 	} else if(value >= 101) {
// 		$(this).val(100);
// 	}
// }