class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.references :user, foreign_key: true
      t.references :location, foreign_key: true
      t.string :title
      t.text :description
      t.string :studio


      t.timestamps
    end
  end
end
