import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CHARS_QUERY, EPISODES_QUERY, LOCATIONS_QUERY, DATA_QUERY } from '../queries';
import GridRow from './GridRow';
import { Location, ILocation } from './Locations'
import { Episode, IEpisode } from './Episodes'
import { Character, ICharacter } from './Characters';
import { IFilter } from './Filter';


export const CardElement = ({ getCount, page, query, filter }: { page: number, query: string, filter: IFilter, getCount: (c: number) => void; }) => {
  const [state, setState] = useState({apiPage:1})
  const [queryResult, setQueryResult] = useState<JSX.Element[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  //let { data ,loading, error, fetchMore } = useQuery(DATA_QUERY, { variables: { name: query, page: state.apiPage } });  
  let { data ,loading, error, fetchMore } = useQuery(LOCATIONS_QUERY, { variables: { name: query, page: state.apiPage } });  
  let { data: cdata ,loading: cLoading, error:cerror } = useQuery(CHARS_QUERY, { variables: { name: query, page: state.apiPage } });
  let { data: edata ,loading: eLoading, error: eerror } = useQuery(EPISODES_QUERY, { variables: { name: query, page: state.apiPage } });
  

  useEffect(() => {
    let locations: JSX.Element[] = [];
    let episodes: JSX.Element[] = [];;
    let characters: JSX.Element[] = [];    
        if (filter.loc && !error && data && data.locations) {
          locations = data.locations.results.map((l: ILocation, i: string) => <Location key={'loc-'+l.id} prop={l} />)
        }
        if (filter.eps && !eerror && edata && edata.episodes) {
          episodes = edata.episodes.results.map((l: IEpisode, i: string) => <Episode key={'epi-'+l.id} prop={l} />)
        }
        if (filter.chars && !cerror && cdata && cdata.characters) {
          characters = cdata.characters.results.map((c: ICharacter, i: string) => <Character key={'char-'+c.id} prop={c} />)
        }
    
    let q=characters.concat(episodes).concat(locations)    
    console.log(q)
    setQueryResult(q)
    
  }, [filter, data, state.apiPage, error, edata, cdata, eerror, cerror])

  const nextPageRequired = useCallback((count: number) => {
    return page === count && ((filter.chars && cdata?.characters.info.next) ||
      (filter.loc && data?.locations.info.next) ||
      (filter.eps && edata?.episodes.info.next))
  }, [page, filter.chars, filter.loc, filter.eps, cdata, data, edata])
  
  const more = useCallback(async () => {
    setIsLoadingMore(true);
        await fetchMore({
          query:CHARS_QUERY,
          variables: { name: query, page: state.apiPage +1},
    });
    
    setIsLoadingMore(false);        
  },[fetchMore, query, state.apiPage])

  const power = useCallback((page,queryResult) => {
    
    if (!eLoading &&!cLoading && !loading && queryResult.length) {
      let tempCount =Math.trunc((queryResult.length + 7) / 8)
      if (nextPageRequired(tempCount)) {        
        more()
        //setState((state: { apiPage: number; }) => ({ apiPage: state.apiPage + 1}))
      }      
      getCount(tempCount)
    }
    return queryResult.slice((page - 1) * 8, page * 8)
  }, [cLoading, eLoading, getCount, loading, more, nextPageRequired])

  if (error){
   return <p> {error} </p>  
  }
  return (
    <Fragment>
      { queryResult.length ?
        <GridRow cards={power(page,queryResult)} /> :
        (loading || isLoadingMore) && <p> loading...</p>
      }
    </Fragment>
  )
}