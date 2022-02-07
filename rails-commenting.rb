# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#The purpose "class BlogPostsController" is the controller created by running $rails generate controller.
  def index
    # ---2)
    # The purpose @posts = BlogPost.all is there so that we can see ALL of the blog posts in our database.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #The purpose  @post = BlogPost.find.. is created so that we can find a specific blog post by its id, which is where params and id come into play.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The purpose 'new' is a controller action that will return a form to create new data.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The line below is the logic needed to create a new blog post.
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # The edit method is a controller method that will return a form for editing data.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # post.update is the logic needed to update data.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) it will be destroyed, or else it will redirect us back to the post we're wanting to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #The purpose 'private' is there so that everything below the word private, cannot be accessed or changed by the user.
  private
  def blog_post_params
    # ---10)
    #The purpose params.require... is created so that we can specify what information must be passed into posts being created or updated.
  end
end
