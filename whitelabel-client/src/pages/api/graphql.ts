import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";
import gql from "graphql-tag";
import { cors, runMiddleware } from "@/middlewares/cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
  const headers = {};
  const { query } = req.body;
  const typeOfRequest = gql`
    ${query}
  `;

  try {
    if (typeOfRequest?.definitions?.length > 1) {
      // Multiple queries
      res.status(400);
      return res.end();
    }
    // if (isQuery) {
    // 	// Mutation without jwt
    // 	res.status(500);
    // 	return res.end();
    // }
  } catch (error) {
    res.status(422);
    return res.end();
  }

  const proxyResponse = await httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target: process.env.HASURA_ENDPOINT,
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy-middleware`
    pathRewrite: [
      {
        patternStr: "/api/graphql",
        replaceStr: "/v1/graphql",
      },
    ],
    headers,
    changeOrigin: true,
  });
  return proxyResponse;
};

export default handler;
