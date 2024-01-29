import { styled } from 'styled-components';
import ContainerColumn from '../Container/ContainerColumn';
import ContainerRow from '../Container/ContainerRow';
import StyledImg from '../Container/CustomImg';

const FooterContainer = styled.footer`
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #18181C;
    color: white;
    border-top" 2px solid #F0F0F0;
`;

const OneOfThree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Icon = styled.div`
    width: 20px;
    height: 20px;
    img {
         width: 100%;
        height: 100%;
    }
`

const Sizedbox = styled.div`
    width: 10px;
    height: 20px;
`

const RowForInsta = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    gap: ${props => props.$gap};
`

export default function Component() {
    return (
        <FooterContainer>
            <OneOfThree>
                <StyledImg src={'img/logo.png'} width='100px' height='100px' />
            </OneOfThree>
            <OneOfThree>
                <ContainerColumn>
                    <p style={{ fontWeight: 'bold' }}>COMPANY</p>
                    <Sizedbox />
                    <p>상호: Dr.Law</p>
                    <p>사업자 등록 번호: NNNNNNNNN</p>
                    <Sizedbox />
                    <p>대표: 이수혁</p>
                </ContainerColumn>
            </OneOfThree>
            <OneOfThree>
                <ContainerColumn>
                    <p style={{ fontWeight: 'bold' }}>CONTACT US</p>
                    <Sizedbox />
                    <RowForInsta $gap='10px'>
                        <Icon>
                            <img src="/img/icon_insta.svg" alt="로고" />
                        </Icon>
                        <Sizedbox />
                        <p>DrLaw.Official</p>
                    </RowForInsta>
                    <Sizedbox />
                    <ContainerRow>
                        <Icon>
                            <img src="/img/icon_email.svg" alt="로고" />
                        </Icon>
                        <Sizedbox />
                        <p>xxxxxxxxx@gmail.com</p>
                    </ContainerRow>
                </ContainerColumn>
            </OneOfThree>
        </FooterContainer>
    );
};