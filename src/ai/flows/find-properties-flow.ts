
'use server';
/**
 * @fileOverview An AI flow to find and generate rental property listings.
 *
 * - findProperties - A function that generates property listings based on search criteria.
 * - FindPropertiesInput - The input type for the findProperties function.
 * - FindPropertiesOutput - The return type for the findProperties function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { v4 as uuidv4 } from 'uuid';
import { type Listing } from '@/types';
import { mockListings } from '@/lib/mock-data';

const FindPropertiesInputSchema = z.object({
  location: z.string().describe('The city or area to search for properties in.'),
  propertyType: z.enum(['any', 'PG', 'Flat']).describe("The type of property to search for. 'any' means both PG and Flat."),
  maxRent: z.number().describe('The maximum monthly rent in INR.'),
});
export type FindPropertiesInput = z.infer<typeof FindPropertiesInputSchema>;

const ListingSchema = z.object({
  title: z.string().describe('A catchy and descriptive title for the property listing.'),
  description: z.string().describe('A detailed and appealing description of the property, highlighting its key features.'),
  type: z.enum(['PG', 'Flat']).describe("The type of the property, either 'PG' or 'Flat'."),
  location: z.string().describe('The specific location of the property, including neighborhood and city.'),
  rent: z.number().describe('The monthly rent for the property in Indian Rupees (INR).'),
  amenities: z.array(z.string()).describe('A list of amenities available at the property.'),
  dataAiHints: z.array(z.string()).describe("An array of 4 descriptive two-word strings for image generation, corresponding to each imageUrl. e.g. ['living room', 'kitchen area', 'master bedroom', 'modern bathroom']"),
  verified: z.boolean().describe('A boolean value indicating if the property is verified.'),
});

const FindPropertiesOutputSchema = z.array(ListingSchema);
export type FindPropertiesOutput = z.infer<typeof FindPropertiesOutputSchema>;

export async function findProperties(input: FindPropertiesInput): Promise<Listing[]> {
    const listingsFromAI = await findPropertiesFlow(input);
    
    // Add mock image URLs and IDs since the AI doesn't generate them
    return listingsFromAI.map((listing, index) => {
        const mockListingImages = mockListings[index % mockListings.length].imageUrls;
        return {
            ...listing,
            id: uuidv4(),
            imageUrls: mockListingImages,
        };
    });
}

const findPropertiesPrompt = ai.definePrompt({
  name: 'findPropertiesPrompt',
  input: { schema: FindPropertiesInputSchema },
  output: { schema: FindPropertiesOutputSchema },
  prompt: `
    You are an expert real estate agent. Your task is to generate a list of 4 to 6 fictional but highly realistic rental property listings based on user-provided criteria.
    For each listing, you will generate all required fields.

    User Criteria:
    - Location: {{{location}}}
    - Property Type: {{{propertyType}}}
    - Maximum Rent (INR): {{{maxRent}}}

    Instructions:
    - If propertyType is 'any', generate a mix of 'PG' and 'Flat' listings. Otherwise, stick to the specified type.
    - The rent for each property must be below the specified maximum rent.
    - Ensure the generated locations are plausible and sound like real neighborhoods within the requested city.
    - Make the titles and descriptions appealing and realistic for a rental market.
    - Generate a diverse set of amenities for each property.
    - For 'dataAiHints', you MUST provide an array of exactly 4 descriptive two-word strings that could be used to generate images for a property listing, like 'living room', 'kitchen area', 'master bedroom', 'modern bathroom'.
    - Randomly set the 'verified' status for each listing.
  `,
});

const findPropertiesFlow = ai.defineFlow(
  {
    name: 'findPropertiesFlow',
    inputSchema: FindPropertiesInputSchema,
    outputSchema: FindPropertiesOutputSchema,
  },
  async (input) => {
    const { output } = await findPropertiesPrompt(input);
    return output || [];
  }
);
