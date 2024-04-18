import post_data from "./post_data.json";

export default function Posts() {
    return(
        <div className="center">
            <h1 className="mainTitle">Posts</h1>

            {post_data.posts.map((post, index) => {
                return (
                    <a href={`/${index+1}`}>
                        <div className="postCard">
                            <img src={post.image}/>
                            <h1>{post.title}</h1>
                        </div>
                    </a>
                );
            })}
        </div>
    );
}