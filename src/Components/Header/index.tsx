import { useNavigation } from "@react-navigation/native";
import { Container, Logo } from "./styles";
import logoImg from '@/assets/LogoIcon/Logo.png';

export function Header(){
    return(
        <Container>
            <Logo source={logoImg}/>
        </Container>
    )
}