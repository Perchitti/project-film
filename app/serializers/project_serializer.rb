class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :studio
  has_one :user
  has_one :location
end
