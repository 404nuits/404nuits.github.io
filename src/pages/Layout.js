import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <div className="row">
            <div className="logo text">
                <span className="delay-1">4</span>
                <span className="delay-2">0</span>
                <span className="delay-3">4</span>
                <span className="delay-4">nuits</span>
            </div>
        </div>

        <div className="row">
            <img className="logo image" src={process.env.PUBLIC_URL + "/images/logo.gif"}/>
        </div>

        <div className="row links">
            <a target="_blank" href="https://github.com/404nuits">
                <img src={process.env.PUBLIC_URL + "/images/github.svg"}/>
            </a>
            <a target="_blank" href="https://www.root-me.org/404-nuits">
                <img src={process.env.PUBLIC_URL + "/images/rootme.svg"}/>
            </a>
        </div>

        <div className="row menu">
            <Link to="/">HOME</Link>
            {/*<Link to="/posts">POSTS</Link>*/}
            <Link to="/photos">PHOTOGRAPHY</Link>
            <Link to="/designs">DESIGNS</Link>
            {/*<Link to="/projects">PROJECTS</Link>*/}
        </div>

        <div className="outlet">
            <Outlet />
        </div>
    </>
  )
};

export default Layout;