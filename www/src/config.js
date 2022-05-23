// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2k0suk4ek3129rnsrqmp7cr4ap",     // CognitoClientID
  "api_base_url": "https://02ylfiwx51.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-1.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d18q6yipjvqd97.amplifyapp.com"                                      // AmplifyURL
};

export default config;
