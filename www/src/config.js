// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5ucn4lsss9glsfgr8sfetv1q43",     // CognitoClientID
  "api_base_url": "https://rt2euh0w4d.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-1.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1byrl9lria9lg.amplifyapp.com"                                      // AmplifyURL
};

export default config;
