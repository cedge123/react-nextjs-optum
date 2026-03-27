import { Blog, BlogWithUser } from "@/model/Blog";
import { User } from "@/model/User";
import Link from "next/link";
//import axios from "axios"

export default async function CustomersPage(){

    const blogsUrl = "https://jsonplaceholder.typicode.com/posts";
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
  
    const blogsResponse  = await fetch(blogsUrl);       
    const blogs = await blogsResponse.json() as Blog[];

    const usersResponse  = await fetch(usersUrl);       
    const users = await usersResponse.json() as User[];

    // Convert users array into a map for fast lookup
    const userMap = new Map(users.map(user => [user.id, user.name]));

    // Merge user data with posts
    const blogsWithUsers: BlogWithUser[] = blogs.map(blog => ({
      ...blog,
      userName: userMap.get(blog.userId) || "Unknown User"
    }));


    return (
        <div>
            <h3>Blogs</h3>
            <div>
                {blogsWithUsers.map((blog, index) => {

                    return (
                        <div key={index} className="card mb-4 shadow-sm">
                        <div className="card-body">
                          <h3 className="card-title">{blog.title}</h3>
                          <p className="card-text">{blog.body}</p>
                          <p className="text-muted">
                            By: <Link href={`/users/${blog.userId}`} className="text-primary text-decoration-none">
                              {blog.userName}
                            </Link>
                          </p>
                        </div>
                      </div>
                    )
                })}
            </div>
          

        </div>
    )

}