import {
    FondoPrincipal,
    Container 
} from '../styleComponents/layout-style'
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
    children?: React.ReactNode | React.ReactNode[];
}

function Layout({children}: Props){
    return ( 
        <FondoPrincipal>
            <Container>
                <Navbar />
                    {children}
                <Footer/>
            </Container>
        </FondoPrincipal>
     );
}

export default Layout;