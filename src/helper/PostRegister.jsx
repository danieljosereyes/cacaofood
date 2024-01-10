import DataPost from "../data/DataPost"

async function PostRegister(data) {
    let values = await data
    DataPost(values)
}

export default PostRegister