import React, { ChangeEvent, Fragment, useCallback, useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { CardElement } from './Cards';
import { Filter, IFilter } from './Filter';
import { QueryBar } from './QueryBar';


const useStyles = makeStyles(theme => ({
    pagination: {
        display: "inline-flex",
        alignItems: "flex-end",
        marginInline: "auto",
    },
}));


function Main() {
    const [query, setQuery] = useState("")
    const pagination = useStyles().pagination
    const [view, setView] = useState<JSX.Element | null>()
    const [page, setPage] = useState<number>(1)
    const [count, setCount] = useState<number>(1)
    const [filter, setFilter] = useState<IFilter>({ chars: false, loc: false, eps: false })

    const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
        setPage(page)
        setCardsView({ p: page })
    }
    const getCount = useCallback((c: number) => {
        setCount(c)
    }, [])
    const getQuery = (qu: string) => {
        setQuery(qu)
        setCardsView({ q: qu })
    }
    const getFilter = (f: React.ChangeEvent<HTMLInputElement>) => {
        let temp = filter
        let value = f.target.value
        let checked = f.target.checked
        switch (value) {
            case "ch":
                temp.chars = checked
                break;
            case "loc":
                temp.loc = checked
                break;
            case "eps":
                temp.eps = checked
                break;
            default:
                break;
        }
        setFilter(temp)
        setCardsView({ f: temp })
    }

    const setCardsView = useCallback(
        ({ p, q, f }: { p?: number, q?: string, f?: IFilter }) => {
            let temp: JSX.Element | null = null
            if (q ? q.length > 2 : query.length > 2) {
                temp = <CardElement page={p ? p : page} query={q ? q : query} filter={f ? f : filter} getCount={getCount} />
            }
            if (page > count) {
                setPage(1)
                temp = <CardElement page={1} query={q ? q : query} filter={f ? f : filter} getCount={getCount} />
            }
            setView(temp)
        }, [query, page, count, filter, getCount])


    return (
        <Fragment>
            <QueryBar setQuery={getQuery} />
            <Container disableGutters={true} style={{ minHeight: 'calc(90vh - 30px)' }} maxWidth={false}>
                <Grid container spacing={1}
                    wrap="nowrap"
                >
                    <Filter getFilter={getFilter} />
                    <Container style={{ display: 'grid' }} disableGutters={true} maxWidth={false}>
                        {view ?
                            view
                            : <p> </p>}
                        <Pagination className={pagination} page={page} count={count} variant="outlined" shape="rounded" onChange={handlePageChange} />
                    </Container>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default Main;