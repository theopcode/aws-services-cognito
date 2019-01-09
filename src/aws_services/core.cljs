(ns aws-services.core
  (:require [cljsjs.aws-sdk-js]
            [aws.amazon-cognito]))

(defonce config (atom {}))

(def empty-data
  {:region nil
   :identity-pool-id nil
   :user-pool-id nil
   :client-id nil
   })

(defn ^:export sign-in [username password]
  "TODO: Test, goog.async"
  (let [username username
        password password
        authentication-data {:Username username :Password password}
        authentication-details (new js/AmazonCognitoIdentity.AuthenticationDetails (clj->js authentication-data))
        pool-data {:UserPoolId (:user-pool-id @config) :ClientId (:client-id @config)}
        user-pool (new js/AmazonCognitoIdentity.CognitoUserPool (clj->js pool-data))
        user-data {:Username username :Pool user-pool}
        cognito-user (new js/AmazonCognitoIdentity.CognitoUser (clj->js user-data))]
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

(defn- set-config [user-conf]
  "TODO: Test"
  (let [user-conf (merge empty-data user-conf)
        {:keys [region identity-pool-id user-pool-id client-id] :as required } user-conf]
    (if (some nil? (vals required))
      (let [missing (remove nil? (flatten (filterv (fn [[k v]] (nil? v)) required)))]
        (throw (js/Error. (str "The following values are required: " (clojure.string/join ", " missing)))))
      (do
        (swap! config assoc :region region)
        (swap! config assoc :identity-pool-id identity-pool-id)
        (swap! config assoc :user-pool-id user-pool-id)
        (swap! config assoc :client-id client-id)))))

(defn- set-aws-basic [{:keys [region identity-pool-id] :or {:region nil :identity-pool-id nil}}]
  "TODO: Test"
  (let [region region
        identity-pool-id identity-pool-id
        identity-credential-args { :IdentityPoolId identity-pool-id }
        cognito-identity-credentials (new js/AWS.CognitoIdentityCredentials (clj->js identity-credential-args))
        place-holder {:accessKeyId "anything" :secretAccessKey "anything"}]

    (set! (.-region (.-config js/AWS)) region)
    (set! (.-credentials (.-config js/AWS)) cognito-identity-credentials)
    (.update (.-config js/AWS) (clj->js place-holder))))


(defn ^:init init [user-conf]
  (set-config user-conf)
  (set-aws-basic @config))
