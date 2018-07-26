class Project < ApplicationRecord
  belongs_to :location
  belongs_to :user
  has_many :items

  def location_attributes=(location_attributes)
    self.location = Location.where(:name => location_attributes[:name]).first_or_create do |f|
      f.address = location_attributes[:address]
    end
end


  end
