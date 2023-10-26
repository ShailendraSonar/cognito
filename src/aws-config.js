import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_WTDloRdyT',
    userPoolWebClientId: '1k8j0untn6grvq7uk18kbp2ia9',
  },
};

Amplify.configure(amplifyConfig);