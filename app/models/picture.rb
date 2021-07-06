class Picture < ApplicationRecord
  mount_uploader :profile_pic, ImageUploader
  has_one :picture_edit_detail, foreign_key: 'picture_id'
  validates :profile_pic, presence: true
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h, :scale_x, :scale_y, :rotate

  after_update :crop_avatar

  def crop_avatar
    self.profile_pic.recreate_versions! if crop_x.present? && self.profile_pic.present?
  end
end
