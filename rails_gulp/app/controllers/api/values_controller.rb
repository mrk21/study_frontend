class Api::ValuesController < ApplicationController
  def index
    @api_values = [
      {value: 1},
      {value: 2},
    ]
  end
end
