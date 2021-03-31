## BigMap

* [curl https://white.better-call.dev/v1/bigmap/edo2net/38166/keys](./api_results/bigmap_white.json)
* [curl https://ee.better-call.dev/v1/bigmap/edo2net/38166/keys](./api_results/bigmap_ee.json)

> a different 10 were returned
``` js
> white key_hash
=  'expruRnNMgBN2JkhA9jpqkZXPQr2AGbyxBJ5jYJDHhALiiF2WDWQfk',
=  'exprusLyKAq6HvYwew6NfSc4tGb2wjrpiKyWizZVhDbYuPsJUNejt9',
=  'exprutMXMcRii6jsQRrtww1mbBYLYwpddEdEgMi4XkpPneNCX3PhUr',
=  'exprvPkryw7uv1DVvRECZpCAW4217fR2WsmCXSZhhkeRXqbd6DdkvN',
   'exprtsU5B9C549nR686jeZS7TzszewC2bstRcgeoAdTbBMtupzjxqe',
   'exprvQvVhhgUgUrshkNUepsHQZAChuNfXXJaLNLsNHvDmXqKNtSNkE',
   'expruH79XPXEu5mNoPueJgQLubNMPy58JATHALS37oQqkvDu2wycNK',
   'exprtr81jL3bMcCYr8iJwfQjbEyFnBZE2DznRAA5D596NjPzQU7DoP',
   'exprtWzCqrHDKKX5SvbTC1ZBFyHnaMhGdKi1pytRd2QX315hbjaMu4',
   'exprte42g3n8T686MfnTfgRtTC1qXTDKL5djEQokYzC397cqhrSb6z'

> ee key_hash
   'exprty7uN1UEYLYVf8fAsZA5XJi3VcMgkF75Wk4dp2hefavjMdxsBu',
   'exprv2PcZUsgfhKh79PEAFYEQHkgMDnUVfgYUS8ALhM4SYhCwsnZBY',
   'exprtXmxCe739AhD9Kf1tUu2md7yjjzEVBNtzCtC8AVEQF5iZzXeGK',
   'expruXTiUZWMDWbY7A6tM5a1HBS2nJ8vHL8AtpRaAqrMsoWFA5gGRV',
   'expruge8n8nfjVZH9EHvp2DsnaABXZfTMCnk7cY971Q2G2p9XDv1sW',
   'expruphceMhmxXhVBrpHo1qcGYQqNrqvPFqvTahmApjC7KGNZt9np3',
=  'expruRnNMgBN2JkhA9jpqkZXPQr2AGbyxBJ5jYJDHhALiiF2WDWQfk',
=  'exprusLyKAq6HvYwew6NfSc4tGb2wjrpiKyWizZVhDbYuPsJUNejt9',
=  'exprutMXMcRii6jsQRrtww1mbBYLYwpddEdEgMi4XkpPneNCX3PhUr',
=  'exprvPkryw7uv1DVvRECZpCAW4217fR2WsmCXSZhhkeRXqbd6DdkvN'
```

---

> diffs for key_hash: `expruRnNMgBN2JkhA9jpqkZXPQr2AGbyxBJ5jYJDHhALiiF2WDWQfk`
```json
   {
     data: {
       key: {
-        type: "tuple"
+        type: "namedtuple"
+        name: "@pair_12"
         children: [
           {
+            name: "@address_13"
           }
           {
+            name: "@nat_14"
           }
         ]
       }
       value: {
+        name: "@nat_15"
       }
     }
   }
```