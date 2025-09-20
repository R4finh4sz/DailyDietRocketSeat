import { Container, Logo, ProfileStyle } from "./styles";
import logoImg from '@/assets/LogoIcon/Logo.png';
import Profile from "@/assets/Profile/Profile.png";
import { Touchable, TouchableOpacity } from "react-native";


export function Header(){
    return(
        <Container>
            <Logo source={logoImg}/>
            <TouchableOpacity><ProfileStyle source={Profile}/></TouchableOpacity>
        </Container>
    )
}