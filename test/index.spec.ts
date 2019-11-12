import {Context} from "aws-lambda";
import {handler} from "../src";

describe('Big Test', () => {
  it('should do something amazing', async () => {
    await handler({}, {} as Context, () => {});
    expect(true).toEqual(true);
  })
});
