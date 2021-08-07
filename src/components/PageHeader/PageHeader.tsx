import styled from 'styled-components';
import { DARK_GREY_COLOR, BLACK_COLOR } from '../../variables';

interface IPageHeader {
    title: string,
    color: string,
    description: Array<string>
}

const PageHeader = (props: IPageHeader) => {

    const { title, description } = props;

    return (
        <Header>
            <PageHeadline>{title}</PageHeadline>
            <PageSubtitles>
                {description.map((item: string) => (
                    <Subtitle key={item}>{item}</Subtitle>
                ))}
            </PageSubtitles>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const PageHeadline = styled.h2`
    margin: 0px;
    font-family: 'Inter-ExtraBold';

    color: ${BLACK_COLOR};
`;

const PageSubtitles = styled.div`
    margin-top: 10px;
`

const Subtitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'Inter-Regular';

    color: ${DARK_GREY_COLOR};
`

export default PageHeader;
