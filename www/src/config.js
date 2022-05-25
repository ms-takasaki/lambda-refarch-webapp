// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3o4kkv22300nvgkef70cffb1ei",     // CognitoClientID
  "api_base_url": "https://akotz9gtjc.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-3.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1w2sw0x8lp2lj.amplifyapp.com"                                      // AmplifyURL
};

export default config;
