/**********************************************************************
 * Extern for AmazonCognitoIdentity
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var AmazonCognitoIdentity = {
  "AuthenticationDetails": function() { },
  "AuthenticationHelper": function() { },
  "CognitoAccessToken": function() { },
  "CognitoIdToken": function() { },
  "CognitoRefreshToken": function() { },
  "CognitoUser": function() { },
  "CognitoUserAttribute": function() { },
  "CognitoUserPool": function() { },
  "CognitoUserSession": function() { },
  "CookieStorage": function() { },
  "DateHelper": function() { }
};
AmazonCognitoIdentity.AuthenticationDetails.prototype = {
  "getAuthParameters": function() { },
  "getPassword": function() { },
  "getUsername": function() { },
  "getValidationData": function() { },
};
AmazonCognitoIdentity.AuthenticationHelper.prototype = {
  "calculateA": function() { },
  "calculateS": function() { },
  "calculateU": function() { },
  "computehkdf": function() { },
  "generateHashDevice": function() { },
  "generateRandomSmallA": function() { },
  "generateRandomString": function() { },
  "getLargeAValue": function() { },
  "getNewPasswordRequiredChallengeUserAttributePrefix": function() { },
  "getPasswordAuthenticationKey": function() { },
  "getRandomPassword": function() { },
  "getSaltDevices": function() { },
  "getSmallAValue": function() { },
  "getVerifierDevices": function() { },
  "hash": function() { },
  "hexHash": function() { },
  "padHex": function() { }
};
AmazonCognitoIdentity.CognitoAccessToken.prototype = {
  "decodePayload": function() { },
  "getExpiration": function() { },
  "getIssuedAt": function() { },
  "getJwtToken": function() { }
};
AmazonCognitoIdentity.CognitoIdToken.prototype = {
  "decodePayload": function() { },
  "getExpiration": function() { },
  "getIssuedAt": function() { },
  "getJwtToken": function() { }
};
AmazonCognitoIdentity.CognitoRefreshToken.prototype = {
  "getToken": function() { }
};
AmazonCognitoIdentity.CognitoUser.prototype = {
  "associateSoftwareToken": function() { },
  "authenticateUser": function() { },
  "authenticateUserDefaultAuth": function() { },
  "authenticateUserInternal": function() { },
  "authenticateUserPlainUsernamePassword": function() { },
  "cacheDeviceKeyAndPassword": function() { },
  "cacheTokens": function() { },
  "cacheUserData": function() { },
  "changePassword": function() { },
  "clearCachedDeviceKeyAndPassword": function() { },
  "clearCachedTokens": function() { },
  "clearCachedUser": function() { },
  "clearCachedUserData": function() { },
  "completeNewPasswordChallenge": function() { },
  "confirmPassword": function() { },
  "confirmRegistration": function() { },
  "deleteAttributes": function() { },
  "deleteUser": function() { },
  "disableMFA": function() { },
  "enableMFA": function() { },
  "forgetDevice": function() { },
  "forgetSpecificDevice": function() { },
  "forgotPassword": function() { },
  "getAttributeVerificationCode": function() { },
  "getAuthenticationFlowType": function() { },
  "getCachedDeviceKeyAndPassword": function() { },
  "getCognitoUserSession": function() { },
  "getDevice": function() { },
  "getDeviceResponse": function() { },
  "getMFAOptions": function() { },
  "getSession": function() { },
  "getSignInUserSession": function() { },
  "getUserAttributes": function() { },
  "getUserContextData": function() { },
  "getUserData": function() { },
  "getUsername": function() { },
  "globalSignOut": function() { },
  "initiateAuth": function() { },
  "listDevices": function() { },
  "refreshSession": function() { },
  "resendConfirmationCode": function() { },
  "sendCustomChallengeAnswer": function() { },
  "sendMFACode": function() { },
  "sendMFASelectionAnswer": function() { },
  "setAuthenticationFlowType": function() { },
  "setDeviceStatusNotRemembered": function() { },
  "setDeviceStatusRemembered": function() { },
  "setSignInUserSession": function() { },
  "setUserMfaPreference": function() { },
  "signOut": function() { },
  "updateAttributes": function() { },
  "verifyAttribute": function() { },
  "verifySoftwareToken": function() { },
};
AmazonCognitoIdentity.CognitoUserAttribute.prototype = {
  "getName": function() { },
  "getValue": function() { },
  "setName": function() { },
  "setValue": function() { },
  "toJSON": function() { },
  "toString": function() { }
};
AmazonCognitoIdentity.CognitoUserPool.prototype = {
  "getClientId": function() { },
  "getCurrentUser": function() { },
  "getUserContextData": function() { },
  "getUserPoolId": function() { },
  "signUp": function() { },
  "constructor": function() { }
};
AmazonCognitoIdentity.CognitoUserSession.prototype = {
  "calculateClockDrift": function() { },
  "getAccessToken": function() { },
  "getClockDrift": function() { },
  "getIdToken": function() { },
  "getRefreshToken": function() { },
  "isValid": function() { }
};
AmazonCognitoIdentity.CookieStorage.prototype = {
  "clear": function() { },
  "getItem": function() { },
  "removeItem": function() { },
  "setItem": function() { }
};
AmazonCognitoIdentity.DateHelper.prototype = {
  "getNowString": function() { }
};
/**********************************************************************
 * End Generated Extern for AmazonCognitoIdentity
/**********************************************************************/
