class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :items
  has_many :projects
end
