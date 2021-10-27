import React,{useState} from 'react'
import Link from 'next/link'



const Nav = () => {
    const [activeLink,setActiveLink] = useState<number>(0)

    const handleActiveLink = (num:number)=>{
        setActiveLink(num)
    }
    return (
        <>
        <nav className="navbar">
        <div className="nav-container">
          <h1>Moment</h1>
          <ul className={`main-link `}>
            <li>
              <Link href="/">
                    {/* @ts-ignore */}
                  <a onClick={()=> handleActiveLink(0)} className={ activeLink === 0 ? "active" :null}>
                  Home
                  </a>
                
              </Link>
            </li>
            <li>
              <Link href="#">
                  {/* @ts-ignore */}
                  <a onClick={()=> handleActiveLink(1)} className={ activeLink === 1 ? "active" :null}>
                Moments
                  </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                  {/* @ts-ignore */}
                  <a onClick={()=> handleActiveLink(2)} className={ activeLink === 2 ? "active" :null}>
                Share Moment
                  </a>
              </Link>
            </li>
          </ul>
          <ul>
              
                <li>
                  <Link href="#">
                      {/* @ts-ignore */}
                  <a onClick={()=> handleActiveLink(3)} className={ activeLink === 3 ? "active" :null}>
                    Register
                      </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                      {/* @ts-ignore */}
                  <a onClick={()=> handleActiveLink(4)} className={ activeLink === 4 ? "active" :null}>
                    Login
                      </a>
                  </Link>
                </li>
            
         
           
                {/* <li>{`Welcome, ${user}`}</li> */}
                <li>
                  <Link href="#">
                     {/* @ts-ignore */}
                  <a onClick={()=> handleActiveLink(5)} className={ activeLink === 5 ? "active" :null}>
                    Logout
                      </a>
                  </Link>
                </li>
           
          
           
          </ul>
        </div>
      </nav>
        </>
    )
}

export default Nav
