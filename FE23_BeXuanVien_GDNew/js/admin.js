$('#submenu_acc').hide();
$('input[type="text"]');

var show_menu=true;

$(".btn_acc").on('click',function(){
	if(show_menu==true){
		$('#submenu_acc').show('slow');
	}
	else{
		$('#submenu_acc').hide('slow');
		show_menu=true;
	}
	
	
});
$('#form_insert').validate({
	rules : {
		fullname: 'required',
		username: {
			required: true,
			email: true
		}
	},
	messages: {
		fullname: 'Vui lòng nhập họ tên',
		username: {
			required: 'Vui lòng nhập tài khoản',
			email: 'Vui lòng nhập đúng định dạng email'
		}
	}
});

