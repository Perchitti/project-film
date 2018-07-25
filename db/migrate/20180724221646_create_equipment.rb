class CreateEquipment < ActiveRecord::Migration[5.2]
  def change
    create_table :equipment do |t|
      t.text :make
      t.text :model
      t.text :type
      t.text :condition
      t.text :department
      t.text :content
      t.references :user, foregin_key: true

      t.timestamps
    end
  end
end
