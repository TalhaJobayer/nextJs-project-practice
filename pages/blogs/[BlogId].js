import {useRouter} from "next/router"
const BlogDetails = () => {
    const Router = useRouter()
    const BlogId = Router.query.BlogId
    return (
        <div>
            <h1>here is dynamic Route : {BlogId}</h1>
        </div>
    );
}

export default  BlogDetails;