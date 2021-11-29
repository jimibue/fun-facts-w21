class Api::FactsController < ApplicationController
  def index
    # when working with axios, what we render is going to come
    # back as data (res is a var name in js)

    # let res = axios.get('/api/facts')
    # render json: { facts: Fact.all, other: "yo" }
    render json: Fact.all
  end

  def create
    @fact = Fact.new(fact_params)
    if (@fact.save)
      render json: @fact
    else
      render json: { errors: @fact.errors }, status: :unprocessable_entity
    end
  end

  private

  def fact_params
    params.require(:fact).permit(:text, :source, :stars, :username)
  end
end
