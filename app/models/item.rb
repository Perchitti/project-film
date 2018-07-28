class Item < ApplicationRecord
  belongs_to :project
  belongs_to :user

  accepts_nested_attributes_for :user, reject_if: :all_blank
end
