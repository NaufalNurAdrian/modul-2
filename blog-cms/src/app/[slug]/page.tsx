import { getBlogsSlug } from "@/libs/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default async function DetailBlog({params}:{params:{slug:string}}){
    const {slug}= params
    const data= await getBlogsSlug(slug)
    console.log(data)
    return(
        <div>
            {documentToReactComponents(data.fields.content)}
        </div>
    )
}