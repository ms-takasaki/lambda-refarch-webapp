// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1qjhuqd4aal2lmmveu2gdlvjoc",     // CognitoClientID
  "api_base_url": "https://20k2iq17y8.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-3.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d11z2uz705vktf.amplifyapp.com"                                      // AmplifyURL
};

export default config;
