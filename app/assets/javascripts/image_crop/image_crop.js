function editCropper(x,y,w,h){
  $("#zoom_in").show();
  $("#zoom_out").show();
  $("#submit_profile").show();
  var image = document.getElementById('cropbox');
  var cropper = new Cropper ( image ,{
    aspectRatio: 321/246,
    viewMode: 2,
    minContainerWidth: 100,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    checkCrossOrigin: false,
    checkOrientation: true,
    rotatable: true,
    scalable: true,
    data: {
      width: w,
      height: h,
      x: x,
      y: y
    },
    ready: true,
    ready: function (e) {
    },
    crop: function(event) {
      $('#picture_crop_x').val(event.detail.x);
      $('#picture_crop_y').val(event.detail.y);
      $('#picture_crop_w').val(event.detail.width);
      $('#picture_crop_h').val(event.detail.height);
      // $('#picture_scaleY').val(event.detail.scaleY);
      // $('#picture_scaleX').val(event.detail.scaleX);
      // $('#picture_rotate').val(event.detail.rotate);
    }
  });

  $("#zoom_in").click(function(){
    cropper.zoom(0.2)
  });

  $("#zoom_out").click(function(){
    cropper.zoom(-0.2)
  });
}

function initializeCropper(){
  $("#zoom_in").show();
  $("#zoom_out").show();
  $("#submit_profile").show();
  var image = document.getElementById('cropbox');
  var cropper = new Cropper ( image ,{
    aspectRatio: 321/246,
    viewMode: 2,
    minContainerWidth: 100,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    checkOrientation: true,
    rotatable: true,
    scalable: true,
    ready: true,
    ready: function (e) {
    },
    crop: function(event) {
      $('#picture_crop_x').val(event.detail.x);
      $('#picture_crop_y').val(event.detail.y);
      $('#picture_crop_w').val(event.detail.width);
      $('#picture_crop_h').val(event.detail.height);
      $('#picture_scale_y').val(event.detail.scaleY);
      $('#picture_scale_x').val(event.detail.scaleX);
      $('#picture_rotate').val(event.detail.rotate);
    }
  });

  $("#zoom_in").click(function(){
    cropper.zoom(0.2)
  });

  $("#zoom_out").click(function(){
    cropper.zoom(-0.2)
  });
}
