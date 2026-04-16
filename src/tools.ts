import { tool } from 'ai'
import { z } from 'zod'

export const tools = {
    generateDiagram: tool({
        description: 'Generate a complete diagram as an array of Excalidraw elements. Use this when the user asks you to create, draw, or design a new diagram. Return all elements needed including shapes, text labels, and arrow lines connecting them.',
        inputSchema: z.object({
            elements: z.array(z.object({
                id: z.string().describe('Unique identifier')
            }))
        })
    })
}