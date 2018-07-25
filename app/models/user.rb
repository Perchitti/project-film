class User < ApplicationRecord
  has_many :projects
  has_many :items
  has_many :locations, through: :projects
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :omniauthable, :omniauth_providers => [:facebook]

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:facebook]


  def self.from_omniauth(auth)
  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    user.email = auth.info.email
    user.provider = auth.provider
    user.uid = auth.uid
    user.password = Devise.friendly_token[0,20]
  end
end

end
