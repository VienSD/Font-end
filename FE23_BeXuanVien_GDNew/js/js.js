
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
function validateForm(){
	var username=document.getElementById('input_email');
	var password=document.getElementById('input_password');
	var str_username=username.value;
	var error_username=document.getElementById('error_username');
	if (str_username==''||str_username==null) {
		error_username.innerHTML='tên đăng nhập không hợp lệ';
		}
	var str_password=password.value;
	var error_password=document.getElementById('error_password');
	if (str_password==''||str_password==null) {
			error_password.innerHTML='mật khẩu không hợp lệ';
	}

	//set value moi
	username.value='viensiro11@gmail.com';
	password.value='vitb';
}

function hideErrorUsername(){
	var username=document.getElementById('input_email');
	var str_username=username.value;
		var error_username=document.getElementById('error_username');
	if(str_username==''||str_username==null){
		error_username.innerHTML='nhập tên đăng nhập';
	}
	else{
		error_username.innerHTML='';
	}
}



