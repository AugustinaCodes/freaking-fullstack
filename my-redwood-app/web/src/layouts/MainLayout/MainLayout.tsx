import { Link } from "@redwoodjs/router"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div>
    <nav>
      <ul><Link to={routes.about()} ></Link> </ul>
    </nav>
    {children}</div>
}

export default MainLayout
