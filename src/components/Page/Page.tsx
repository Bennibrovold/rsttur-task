import styled from 'styled-components';

interface IPage {
    children?: React.ReactNode
}

const Page = (props: IPage) => {

    const { children } = props;

    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    width: 1060px;
    max-width: 1060px;
    margin: 60px auto 0px auto;
    font-family: 'Inter';
`

export default Page;
