import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { CHARS_QUERY, EPISODES_QUERY, LOCATIONS_QUERY } from '../queries';
import GridRow from './GridRow';
import { Location, ILocation } from './Locations'
import { Episode, IEpisode } from './Episodes'
import { Character, ICharacter } from './Characters';

import { IFilter } from './Filter';


export const CardElement = ({ getCount, page, query, filter }: { page: number, query: string, filter: IFilter, getCount: (c: number) => void; }) => {
  const [stateLoc, setStateLoc] = useState<JSX.Element[]>([]);
  const [stateEps, setStateEps] = useState<JSX.Element[]>([]);
  const [stateCh, setStateCh] = useState<JSX.Element[]>([]);
  const [apiPage, setApiPage] = useState(1)
  let { data: charsData, loading: charsLoading, error: charsError } = useQuery(CHARS_QUERY, { variables: { name: query }, skip: !filter.chars })
  let { data: locationData, loading: locationLoading, error: locationError } = useQuery(LOCATIONS_QUERY, { variables: { name: query }, skip: !filter.loc });
  let { data: episodesData, loading: episodesLoading, error: episodesError } = useQuery(EPISODES_QUERY, { variables: { name: query }, skip: !filter.eps });

  useEffect(() => {
    let locations: ILocation[] = [];
    if (!locationError && locationData) {
      locations = locationData.locations.results
    }
    setStateLoc(locations.map(l => <Location prop={l} />))
  }, [locationData, locationError])
  useEffect(() => {
    let episodes: IEpisode[] = [];
    if (!episodesError && episodesData) {
      episodes = episodesData.episodes.results
    }
    setStateEps(episodes.map(l => <Episode prop={l} />))
  }, [episodesData, episodesError])

  useEffect(() => {
    let characters: JSX.Element[] = [];
    if (!charsError && charsData) {
      characters = charsData.characters.results.map((c: ICharacter) => <Character prop={c} />)
    }
    setStateCh(characters)
  }, [charsData, charsError])
  const results = () => {
    let concatResults = stateCh.concat(stateLoc).concat(stateEps)
    let count = Math.trunc((concatResults.length + 7) / 8)
    getCount(count)
    return concatResults
  }
  return (
    <Fragment>
      { stateEps.length || stateLoc.length || stateCh.length ?
        <GridRow cards={results().slice((page - 1) * 8, page * 8)} /> :
        (locationLoading || episodesLoading || charsLoading) && <p> loading...</p>
      }
    </Fragment>
  )
}