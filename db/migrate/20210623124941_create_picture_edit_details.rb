class CreatePictureEditDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :picture_edit_details do |t|
      t.integer :picture_id
      t.float :pic_x
      t.float :pic_y
      t.float :pic_w
      t.float :pic_h
      t.float :scale_x
      t.float :scale_y
      t.float :rotate
      t.timestamps
    end
  end
end
