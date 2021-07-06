class ImageCropController < ApplicationController
  include CroppingConcern

  def index
    @pictures = Picture.all.paginate(page: params[:page], per_page: 10)
  end

  def create
    crop_and_save
    redirect_to root_path
  end

  def show
    @picture = Picture.find_by(id: params[:id])
    unless @picture.present?
      return redirect_to root_path, notice: 'No image found !'
    end
  end

  def update
    update_picture
    redirect_to root_path
  end

  def destroy
    if picture.destroy
      flash[:notice] = 'Image successfully destroyed!!!'
    else
      flash[:error] = 'Something went wrong !'
    end
    redirect_to root_path
  end
end