import styled from 'styled-components'
import { ITab } from '../../types/tab';

interface ITabGroup {
    data: Array<ITab>,
    setActive: (id: number) => void
}

const TabGroup = (props: ITabGroup) => {

    const { data, setActive } = props;

    return (
        <Group>
            {data.map((tabItem: ITab) => (
                <TabItem key={tabItem.id} isActive={tabItem.active} onClick={() => setActive(tabItem.id)}>{tabItem.name}</TabItem>
            ))}
        </Group>
    )
}

const Group = styled.div`
    display: flex;

    margin: 20px 0px;
`

const TabItem = styled.div<{ isActive: boolean }>`
    height: 40px;

    margin: 0px 5px;
    padding: 13px 15px;

    font-family: 'Inter-Medium';
    font-weight: 500;
    line-height: 14px;
    font-size: 14px;
    cursor: pointer;

    color: ${props => props.isActive ? "#387CCC" : "#495458"};
    border: 1px solid ${props => props.isActive ? "#387CCC" : "#DADCE0"};
    border-radius: 33px;

    &:first-child {
        margin-left: 0px;
    }

    &:last-child {
        margin-right: 0px;
    }
`

export default TabGroup
