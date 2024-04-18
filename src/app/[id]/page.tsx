import post_data from "../post_data.json";

export default function Post({params}: {params: {id: number}}) {
    return(

        <div>
            <nav><a href="/">Home</a></nav>
            <div className="center">
                <h1 className="mainTitle">Post {params.id}</h1>

                <img src={post_data.posts[params.id-1].image}/>
                <h1>{post_data.posts[params.id-1].title}</h1>
                <p>{post_data.posts[params.id-1].content}</p>
            </div>
        </div>
    );
}