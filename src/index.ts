import {APIGatewayEvent, APIGatewayProxyResult, Context, Handler} from "aws-lambda";


export const handler: Handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  return {
    statusCode: 200,
    body: "Hello World!"
  }
};
