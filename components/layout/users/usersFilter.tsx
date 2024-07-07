/**
 * Renders the filter component for the Users section.
 */

'use client'

import { useState } from 'react';
import { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';
import '@/styles/globals.css';

// for drag and drop
import { QueryBuilderDnD } from '@react-querybuilder/dnd';
import * as ReactDnD from 'react-dnd';
import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';

const fields: Field[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

const UsersFilter = () => {
  const [query, setQuery] = useState<RuleGroupType>({
    combinator: 'and',
    rules: [
      {
        combinator: 'and',
        rules: [],
      }
    ],
  });

  return (
    <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
      <QueryBuilder fields={fields} query={query} onQueryChange={setQuery} />

      <div className="flex flex-row justify-between mt-5">
        <button className='text-gray-500 text-xs font-semibold px-2 py-1 rounded hover:bg-blue1/5 hover:text-blue1 active:bg-blue1/5 focus:bg-blue1/5' onClick={() => setQuery(prevQuery => ({ ...prevQuery, rules: [...prevQuery.rules, { combinator: 'and', rules: [] }] }))}>
          <span className='text-lg  hover:text-blue1'>+</span>  Group
        </button>

        <div className='flex gap-2'>
          <button className='text-gray-500 text-xs font-semibold px-2 py-1 rounded hover:bg-blue1/5 hover:text-blue1 active:bg-blue1/5 focus:bg-blue1/5' onClick={() => setQuery(
            {
              combinator: 'and',
              rules: [
                {
                  combinator: 'and',
                  rules: [],
                }
              ],
            }          
          )}>
            Clear all
          </button>
          <button className='text-white bg-blue1 text-xs font-semibold px-2 py-1 rounded'>
            Save as
          </button>
        </div>
      </div>
      {/* display the query */}
      <div className='mt-5'>
        <pre>{JSON.stringify(query, null, 2)}</pre>
      </div>
    </QueryBuilderDnD>
  )
}

export default UsersFilter