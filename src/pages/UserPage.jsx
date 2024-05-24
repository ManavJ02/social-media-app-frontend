import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={45} replies={4} postImg="/spheal-img.png" postTitle="Ice Type Ball of Hell" />
      <UserPost likes={65} replies={6} postImg="/seedot-img.png" postTitle="Grass Type Nut" />
      <UserPost likes={20} replies={78} postTitle="Fire Type Platter" />
    </>
  )
}

export default UserPage
