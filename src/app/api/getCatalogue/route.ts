import { getKBase } from '../_utils/index'


export async function GET() {
    const list = await getKBase()
    return Response.json({ list }, { status: 200, statusText: "OK" })
}