import {
  APIGatewayEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from "aws-lambda";

type MyEvent = APIGatewayEvent & {
  firstName: string;
};

export const handler: Handler = async (
  event: MyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  console.log([["a", "b"], ["c"]].flatMap((a) => a));
  const body = {
    firstName: event.firstName || "",
  };
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
