// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "f87m7m8fj6pu0ts493otpqbpr",     // CognitoClientID
  "api_base_url": "https://cu5cdfgju8.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-1.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1c07i26tjkh6o.amplifyapp.com"                                      // AmplifyURL
};

export default config;
