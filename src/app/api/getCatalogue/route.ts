import {getKBase} from './_utils/readloacl'


export async function GET(){
    const list = await getKBase()
    return Response.json({ list: list })
}