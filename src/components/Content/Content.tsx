import styled from 'styled-components';

interface IContent {
    children: React.ReactNode;
}

const Content = (props: IContent) => {

    const {children} = props;

    return (
        <Group>
            {children}
        </Group>
    )
}

const Group = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`

export default Content
