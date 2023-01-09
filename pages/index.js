import {Box,Image,Heading,Text,Button,Flex} from "@chakra-ui/react"
import Link from 'next/link'

export default function Home({main}) {
  console.log(main)
  return (
    <>
    <Box h={"650px"} margin={"auto"} border={"1px solid white"} p={20} w={"500px"} fontSize={"20px"} key={main.id}>
       <Flex marginLeft={"60px"}>
       <Image w={"10%"} borderRadius={"50%"} src={main.avatar_url}/>
        <Heading>Janani Jayaraman</Heading>
       </Flex>
        
        <Text  marginTop={"10px"} marginLeft={"60px"}>@{main.login}</Text>
        <Text  marginTop={"40px"} marginLeft={"60px"}>Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS | Deno | ReactJS | HTML | CSS | Chakra-UI | MUI</Text>
    
    <Link href="https://drive.google.com/file/d/1DClxcKyEqmZsixEH5RkUihIg6d0AKaLN/view?usp=share_link">
    <Button w={"100px"} h={"40px"} marginLeft={"110px"} backgroundColor={"purple"} color={"white"}>Resume</Button>  </Link>  
     <Link href="https://github.com/Janani1727">
     <Button  w={"100px"} h={"40px"}  marginLeft={"80px"} backgroundColor={"purple"} color={"white"}>Follow</Button>
     </Link>
    

      <Text  marginTop={"40px"} marginLeft={"60px"}>
      1
SDE-3 at Masai School
October 2021 - Present


      </Text >

      <Text  marginTop={"40px"} marginLeft={"60px"}>
      2
Senior Software Engineer at Swiggy
November 2020 - September 2021

      </Text>
      <Text  marginTop={"40px"} marginLeft={"60px"}>
      3      
Senior Software Engineer at Globant
September 2019 - November 2020
      </Text>
      <Text  marginTop={"40px"} marginLeft={"60px"}>
      4
Software Engineer at Confluxsys
      </Text>
    </Box>
    </>
  )
}

export async function getServerSideProps(){

  let res=await fetch(`https://api.github.com/users/Janani1727`)
   
  let data=await res.json()
  return{
      props:{
          main:data
      }
  }
}
