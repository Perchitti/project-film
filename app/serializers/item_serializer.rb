class ItemSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :type, :department, :content
  has_one :user
  has_one :project
end
