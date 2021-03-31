## BigMap

* [curl https://white.better-call.dev/v1/contract/edo2net/KT1RUSCZ7pJ3WNTuXFD44UpStmNRjA459guZ/storage](./api_results/contract_storage_white.json)
* [curl https://ee.better-call.dev/v1/contract/edo2net/KT1RUSCZ7pJ3WNTuXFD44UpStmNRjA459guZ/storage](./api_results/contract_storage_ee.json)

> * before returned object but now returns array

```json
 {
+  name: "@pair_1"
   children: [
     {
       children: [
         ...
         ...
-        {
-          name: "pending_admin"
-        }
+        {
+          prim: "option"
+          type: "option"
+          name: "pending_admin"
+          value: "None"
+        }
       ]
     }
     ...
     ...
     ...
   ]
 }
```