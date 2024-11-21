import getThoughts from '../../../lib/get-thoughts'
import ThoughtsList from '../index.jsx'

export async function TheThoughtsList({paginate}) {
  const thoughts = await getThoughts()
  return <ThoughtsList thoughts={thoughts} paginate={paginate} />
}
