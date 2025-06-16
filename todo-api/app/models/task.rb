class Task < ApplicationRecord
  validates :title, presence: true
  before_save :set_default_status

  def set_default_status
    self.status = false if status.nil?
  end
end
