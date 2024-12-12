import {getKBase} from './_utils/readloacl'


export async function GET(req:Request, res:Response){
    const list = await getKBase()
    return Response.json({ list: list })
}