class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :make
      t.string :model
      t.string :type
      t.string :department
      t.string :content
      t.references :user, foreign_key: true
      
      t.timestamps
    end
  end
end
