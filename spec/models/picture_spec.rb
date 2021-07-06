require 'rails_helper'

RSpec.describe Picture, type: :model do
  describe "Validation tests" do
    context "ensure picture name presence" do
      let!(:picture) { Picture.new(profile_pic: nil).save }
      it "passes" do
        expect(picture).to eq(false)
      end
    end

    context "ensure picture name presence" do
      let!(:picture) { Picture.new(profile_pic: File.new("#{Rails.root}/app/assets/images/white_bg.png", "r")).save }
      it "passes" do
        expect(picture).to eq(true)
      end
    end
  end
end
