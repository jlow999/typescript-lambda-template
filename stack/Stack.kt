import io.hexlabs.kloudformation.module.serverless.serverless
import io.kloudformation.KloudFormation
import io.kloudformation.StackBuilder
import io.kloudformation.unaryPlus

class Stack: StackBuilder {
    override fun KloudFormation.create(args: List<String>) {
        serverless("typescript-lambda-template", "prod", +"hexlabs-deployments") {
            serverlessFunction("lambda", +args.first(), +"bundle.handler", +"nodejs12.x")
        }
    }
}
