import {FaRegStar,FaRegFolder} from "react-icons/fa"
import {BiGitRepoForked} from "react-icons/bi"
import { Box,Flex,Heading,Text } from "@chakra-ui/react"
// import Link from 'next/link'
const Projects=({proj})=>{
    console.log(proj.items)
return(
<>
<h1 style={{textAlign:"center"}}>Projects</h1>
    <Box  border={"1px solid yellow"} width={"70%"} margin={"auto"} mt={"50px"}>
           {proj.items.map((el)=>(
             
             
           
            <Box h={"100px"} border={"3px solid purple"} margin={"auto"} width={"50%"} key={el.id} mt={"50px"}>
                
              
                 <Heading ><FaRegFolder/>{el.full_name}</Heading>
                 <Text  mt={"10px"}> {el.name}</Text>
                   <Flex gap={30}>
                   <Text mt={"10px"}><FaRegStar /> {el.forks_count}</Text>
                   <Text  mt={"10px"}><BiGitRepoForked /> {el.forks}</Text>
                   </Flex>
                   <Text textAlign={"right"} mt={"-40px"}>{el.language}</Text>
                  
            </Box>
            
      
        ))}
      
        </Box>
        </>
)

}

export default Projects



export async function getStaticProps(){

    let res=await fetch(`https://api.github.com/search/repositories?q=user:Janani1727+fork:true&sort=updated&per_page=10&type=Repositories`)
     
    let data=await res.json()
    return{
        props:{
            proj:data
        }
    }
}