class Api::V1::TasksController < ApplicationController

  before_action :set_task, only: %i[ show update destroy ]

  # GET /tasks
  def index
    @tasks = Task.all

    render json: {tasks: @tasks}
  end

  # GET /tasks/1
  def show
    render json: {tasks: @task}
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: {tasks: @task}, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: {tasks: @tasks}, status: :ok
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.expect(task: [ :title, :status, :content ])
    end
end
