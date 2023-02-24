import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    
    const { children } = props;

    return ( 
        <div className="layout">
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;