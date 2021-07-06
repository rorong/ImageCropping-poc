module CroppingConcern

	def crop_and_save
		pict = Picture.create(picture_params)
		if pict && crop_x.present?
			PictureEditDetail.create(picture_id: pict.id, scale_x: scale_x, scale_y: scale_y, rotate: rotate, pic_x: crop_x, pic_y: crop_y, pic_w: crop_w, pic_h: crop_h)
			flash[:notice] = 'Image successfully created!!!'
		else
			flash[:error] = 'Something went wrong.'
		end
	end

	def update_picture
		if picture.present?
      if crop_x.present?
        picture.picture_edit_detail.update_attributes(scale_x: scale_x, scale_y: scale_y, rotate: rotate, pic_x: crop_x, pic_y: crop_y, pic_w: crop_w, pic_h: crop_h)
      end
      flash[:notice] = 'Image successfully updated!!!'
    else
      flash[:error] = 'Something went wrong.'
    end
	end

	def picture
		Picture.find_by(id: params[:id])
	end

	private

	def picture_params
    params.require(:picture).permit(:crop_x, :scale_x, :scale_y, :rotate, :crop_y, :crop_w, :crop_h, :profile_pic)
  end

  def crop_x
  	picture_params.dig(:crop_x)
  end

  def crop_y
  	picture_params.dig(:crop_y)
  end

  def crop_w
  	picture_params.dig(:crop_w)
  end

  def crop_h
  	picture_params.dig(:crop_h)
  end

  def scale_x
  	picture_params.dig(:scale_x)
  end

  def scale_y
  	picture_params.dig(:scale_y)
  end

  def rotate
  	picture_params.dig(:rotate)
  end

  def profile_pic
  	picture_params.dig(:profile_pic)
  end

end