(ns aws-services.core
  (:require [react-dom]
            [cljsjs.aws-sdk-js]
            [aws.amazon-cognito]))

(let [region "us-east-1"
      identity-pool-id "us-east-1:bff6bbcc-885a-4333-8511-bb7e47dda47c"
      identity-credential-args { :IdentityPoolId identity-pool-id }
      cognito-identity-credentials (new js/AWS.CognitoIdentityCredentials (clj->js identity-credential-args))
      place-holder {:accessKeyId "anything" :secretAccessKey "anything"}]

  (set! (.-region (.-config js/AWS)) region)
  (set! (.-credentials (.-config js/AWS)) cognito-identity-credentials)
  (.update (.-config js/AWS) (clj->js place-holder)))

(defn ^:export sign-in [username password]
  (let [username username
        password password
        authentication-data {:Username username :Password password}
        authentication-details (new js/AmazonCognitoIdentity.AuthenticationDetails (clj->js authentication-data))
        pool-data {:UserPoolId "us-east-1_UFc3dgqnL" :ClientId "64iksosmn5fi0o55vk42cer0a6"}
        user-pool (new js/AmazonCognitoIdentity.CognitoUserPool (clj->js pool-data))
        user-data {:Username username :Pool user-pool}
        cognito-user (new js/AmazonCognitoIdentity.CognitoUser (clj->js user-data))
        ]
    (.authenticateUser cognito-user
                       authentication-details
                       (clj->js {
                                 :onSuccess (fn [results]
                                              (js/console.log "results" results)
                                              (js/console.log "accessToken" (.getJwtToken (.getAccessToken results)))
                                              (js/console.log "idToken" (.-jwtToken (.-idToken results)))
                                              )
                                 :onFailure (fn [error]
                                              (js/console.log "onFailure" error))
                                 }))))

(.render js/ReactDOM
         (.createElement js/React "h2" nil "Hello, React!")
         (.getElementById js/document "app"))
