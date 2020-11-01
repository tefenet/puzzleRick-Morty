import { gql } from "@apollo/client";

export const EPISODES_QUERY = gql`
query($name:String, $page:Int) {    
  episodes (filter:{name:$name},page:$page) {    
    info {
      pages
    next
    prev
    count
    }
    results{
      name
      episode
      id
    }
  }
}
`

export const LOCATIONS_QUERY = gql`
query($name:String,$page:Int) {
  locations(filter:{name:$name}, page:$page){
    info {
      pages
      next
      prev
    }
    results{
      name
      dimension
      id
    }
  }
}`
export const DATA_QUERY = gql`
query($name:String,$page:Int) {
  locations(filter:{name:$name}, page:$page){
    info {
      pages
      next
      prev
    }
    results{
      name
      dimension
      id
    }
  }
  characters(filter: { name: $name },page:$page) {
    info {
      pages
      next
      prev
    }
    results {
      name
      image      
      id
    }
  }
  episodes (filter:{name:$name},page:$page) {    
    info {
      pages
      next
      prev
    }
    results{
      name
      episode
      id
    }
  }  
}`

export const CHARS_QUERY = gql`
  query($name:String, $page:Int) {
    characters(filter: { name: $name },page:$page) {
    info {
      pages
      next
      prev
    }
    results {
      name
      image      
      id
    }
  }
}
`