  $("#edit_pic").click(function(){
    $("#prf_upld").hide();
    $("#edit_pic").hide();
    var x = $("#picture_crop_x").val();
    var y = $("#picture_crop_y").val();
    var w = $("#picture_crop_w").val();
    var h = $("#picture_crop_h").val();
    if (x == ''){
      var funct = 'initializeCropper()'
    }
    else{
      var funct = 'editCropper('+x+','+y+','+w+','+h+')'
    }
    $("#prf_upld").after('<img src="'+$("#picture_pro_pic").val()+'" id="cropbox" class="img_cnt" style="max-width: 100%;" onload="'+funct+'">')
  });
  function readPicURL(input) {
    if (input.files && input.files[0]) {
      var reader_pic = new FileReader();
      reader_pic.onload = function(e) {
        $("#edit_pic").hide();
        $('#profile_pic_preview').attr('src', e.target.result);
        $("#prf_upld").after('<img src="'+e.target.result+'" id="cropbox" class="img_cnt" style="max-width: 100%;" onload="initializeCropper()">')
      }
      reader_pic.readAsDataURL(input.files[0]);
    }
  }

  $("#picture_profile_pic").change(function(){
    $("#cropbox").remove();
    $('.cropper-container').remove();
    const file = this.files[0];
    const fileType = file['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!validImageTypes.includes(fileType)) {
       alert("Image Must have .jpg, .jpeg, .png or .gif extension")
    }
    else{
    readPicURL(this);
    $("#prf_upld").hide();
    }
  });
