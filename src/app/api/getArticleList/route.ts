import { getArticleListByKBase, handleURL } from "../_utils"

export async function GET(req: Request) {
    const { searchParams:{base} } = handleURL(req.url)
    const list = await getArticleListByKBase(base)
    return Response.json({ list: list ,base,},{status: 200,statusText: "OK"})
}