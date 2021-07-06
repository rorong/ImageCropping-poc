class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.string :profile_pic
      t.timestamps
    end
  end
end
