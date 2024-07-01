import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Spinner, Flex } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", data.error, "error");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [username, showToast]);

  if(!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size="xl" />
      </Flex>
    )
  } 
  if(!user && !loading) return <h1>User Not Found</h1>;

  return (
    <>
      <UserHeader user={user} />
      <UserPost
        likes={45}
        replies={4}
        postImg="/spheal-img.png"
        postTitle="Ice Type Ball of Hell"
      />
      <UserPost
        likes={65}
        replies={6}
        postImg="/seedot-img.png"
        postTitle="Grass Type Nut"
      />
      <UserPost likes={20} replies={78} postTitle="Fire Type Platter" />
    </>
  );
};

export default UserPage;
