
{/*//studio/schemaTypes/index.ts
import {postType} from './postTypes';

export const schemaTypes = [postType]*/}

// /studio/schemaTypes/index.ts
import { postType } from './postTypes'
import { queryType } from './queryTypes'  // Add this import to expose the query schema in the Studio

export const schemaTypes = [postType, queryType]  // Ensure that queryType is included
