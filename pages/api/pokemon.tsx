import { NextApiRequest, NextApiResponse, NextApiResponse, NextApiResponse } from "next";

type ResponseData = {
  abilities :ResponseAbility[]
};

type ResponseAbility ={
  ability:{
    name: string,
    url:string
  }
}

export default function handler (
    req: NextApiRequest,
    // res:NextApiResponse<ResponseData>
){
  NextApiResponse<ResponseData>

}

https://pokeapi.co/api/v2/{endpoint}/