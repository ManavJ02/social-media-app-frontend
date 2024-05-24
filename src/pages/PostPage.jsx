import {
  Flex,
  Avatar,
  Text,
  Image,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

function PostPage() {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/spheal-img.png" size={"md"} name="spheal" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              spheal
            </Text>
            <Image src="/verified-img.png" w="4" ml="4" h="4" />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Flex my={3}>Let's talk about ice.</Flex>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/spheal-img.png" w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          24 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>🙌</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="looks really good"
        createdAt="2d"
        likes={240}
        username={"walrein"}
        userAvatar="/walrein-img.png"
      />
      <Comment
        comment="looks really great"
        createdAt="4d"
        likes={210}
        username={"mamoswine"}
        userAvatar="/mamoswine-img.png"
      />
      <Comment
        comment="looks really terrible"
        createdAt="23h"
        likes={40}
        username={"dragonite"}
        userAvatar="/dragonite-img.png"
      />
    </>
  );
}

export default PostPage;
