// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6puqtoe989nk5e792dpopq1gg3",     // CognitoClientID
  "api_base_url": "https://ozkmdik1f6.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-1.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12gqt9e8dhvr7.amplifyapp.com"                                      // AmplifyURL
};

export default config;
