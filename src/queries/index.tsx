import { gql } from "apollo-boost";


export const EPISODES_QUERY = gql`
query($name:String, $page:number) {    
  episodes (filter:{name:$name}) {    
    results{
      name
      episode
    }
  }
}`

export const LOCATIONS_QUERY = gql`
query($name:String) {
  locations(filter:{name:$name}){
    results{
      name
      dimension
    }
  }
}`

export const CHARS_QUERY = gql`
  query($name:String) {
  characters(filter: { name: $name }) {
    info {
      pages
      next
      prev
    }
    results {
      name
      image      
    }
  }
}
`