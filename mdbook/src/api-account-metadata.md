## BigMap

* [curl https://white.better-call.dev/v1/account/edo2net/KT1RUSCZ7pJ3WNTuXFD44UpStmNRjA459guZ/metadata](./api_results/account_metadata_white.json)
* [curl https://ee.better-call.dev/v1/account/edo2net/KT1RUSCZ7pJ3WNTuXFD44UpStmNRjA459guZ/metadata](./api_results/account_metadata_ee.json)

> diffs
> * No `level` or `timestamp`
> * Added `extras`

```json
 {
-  level: 105565
-  timestamp: "2021-03-21T22:42:47Z"
+  extras: {
+    pictures: [
+      {
+        link: "https://gateway.pinata.cloud/ipfs/QmYdHNWLwrfvSTnUiGeu2jGLbMriz8KgDbUjLeSofXJKGX"
+        type: "cover"
+      }
+      {
+        link: "https://gateway.pinata.cloud/ipfs/QmYdHNWLwrfvSTnUiGeu2jGLbMriz8KgDbUjLeSofXJKGX"
+        type: "logo"
+      }
+    ]
+    tokenCategory: "games"
+  }
   events: [
     {
       implementations: [
         {
           michelsonParameterEvent: {
-            entrypoints: null
           }
         }
       ]
     }
   ]
 }
```