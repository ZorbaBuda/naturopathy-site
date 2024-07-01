import { Client } from "@notionhq/client"
import type { NextApiRequest, NextApiResponse } from "next"

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({ auth: notionSecret})

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if( !notionSecret || !notionDatabaseId) throw new Error('MIssing notion secret or DB id')
    
        const query = await notion.databases.query({
            database_id: notionDatabaseId
        })

        console.log(query.results)

        res.status(200).json( { name: 'John doe'})
}