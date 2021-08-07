import { useState, useEffect } from 'react';

import InitialData from '../initial_data.json';

import Page from './../components/Page';
import PageHeader from './../components/PageHeader';
import TabGroup from './../components/TabGroup';
import Content from '../components/Content';
import Card from '../components/Card';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { request } from '../utils/request';
import { ICard } from '../types/card';
import { ITab } from '../types/tab';

const MainPage = () => {
    const [tabs, setTabs] = useState<Array<ITab>>([]);
    const [cards, setCards] = useState<Array<ICard>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async() => {
            const tabs_query = await request('api/collections/author-tour-region-tabs');

            setTabs(tabs_query.data);
        })();
    }, []);

    useEffect(() => {
        
        if(!tabs[0]) {
            return;
        }

        setLoading(true);

        const arr = [...tabs];
        const tab = arr.filter((tab: ITab) => tab.active)[0];
        const { name, value } = tab.params[0];

        (async() => {
            const cards_query = await request('api/collections/author-tour', { count: 6, [name]: value });

            setCards(cards_query.data);
            setLoading(false);
        })();
    }, [tabs]);

    const setActive = (id: number) => {
        const arr = [...tabs];

        /* Устанавливаем новый активный таб */
        const result = arr.map((tab: ITab) => {
            if(tab.id === id) return Object.assign(tab, { active: true });
            return Object.assign(tab, { active: false });
        });

        setTabs(result);
    }

    return (
        <Page>
            <PageHeader
                {...InitialData}
            />
            <TabGroup data={tabs} setActive={setActive} />
            <Content>
                { !loading ? cards.map((card: ICard) => (
                    <Card key={card.id} {...card} />
                )) : [0,0,0,0,0,0].map((_, i: number) => (
                    <SkeletonTheme key={i} color="#dadada" highlightColor="#dadada">
                        <Skeleton  height="170px"></Skeleton>
                        <Skeleton  style={{ marginTop: '10px' }} height="18px"></Skeleton>
                        <Skeleton  style={{ width: '70%', marginTop: '10px' }} height="18px"></Skeleton>
                        <Skeleton  style={{ width: '60%', marginTop: '5px' }} height="18px"></Skeleton>
                        <Skeleton  style={{ width: '45%', marginTop: '5px' }} height="18px"></Skeleton>
                        <Skeleton  style={{ width: '70%', marginTop: '10px' }} height="18px"></Skeleton>
                    </SkeletonTheme>
                )) }
            </Content>
        </Page>
    )
}

export default MainPage
