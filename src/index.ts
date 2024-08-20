import {
  APIGatewayEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from "aws-lambda";

type MyEvent = APIGatewayEvent & {
  body: {
    firstName: string;
  };
};

export const handler: Handler = async (
  event: MyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  const eventBody = JSON.parse(event.body);
  const { firstName } = eventBody;

  const responseBody = {
    firstName: firstName || "",
  };
  return {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
};
