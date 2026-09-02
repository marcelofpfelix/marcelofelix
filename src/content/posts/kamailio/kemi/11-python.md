---
title: "Kamailio by example - KEMI with Python"
description: "Kamailio by example - Notes and resources about kamailio"
slug: "kamailio/python"
date: 2024-06-25T16:43:16.000Z
modDatetime: 2024-07-08T09:50:16.000Z
tags:
  - kamailio
  - kemi
  - python
---

## Python

> :information_source: **Note:** Read the [official docs](https://kamailio.org/docs/tutorials/devel/kamailio-kemi-framework) to get the most updated information.


As we saw in the KEMI intro, we just need load the module, set the load path, and the `cfgengine`:

```kamailio
#!defenvs KAMA_LISTEN
listen=KAMA_LISTEN
auto_aliases=no

loadmodule "sl"
modparam("sl", "bind_tm", 0)

loadmodule "app_python3s"
modparam("app_python3s", "load", "/etc/kamailio/cfg/1-kemi/100-kemi-py.py")

cfgengine "python"
```

```py
import KSR as KSR

def ksr_request_route():
    KSR.sl.sl_send_reply(200, "Hello, py World!")
```

### Selecting an Interpreter
Since we know how to use a pre-processing directive, we can now use a single file file global parameters/modules load another file for routing, using `include_file "/etc/kamailio/tmp/route.inc.cfg"`

```sh
├── shared
│  └── route.inc.cfg # shared routing include
└── kemi
    ├── kemi.inc.cfg # routing with native config
    ├── kemi.lua     # routing with lua
    ├── kemi.cfg     # main file
    └── kemi.py      # routing with python
```

**How to test:** Check the [kamalab](/posts/kamailio/kamalab/) to prepare your lab.

> Now we can select the routing language with `-k language`

```sh
# kamalab ❯
./kamalab -r py
# select kemi
# Listening on
#              udp: 127.0.0.2 [127.0.0.2]:5060
#              tcp: 127.0.0.2 [127.0.0.2]:5060
# Aliases:
```

In another terminal let's send OPTIONS to the server:
```sh
# >
sipexer 127.0.0.2
# ...
# OPTIONS sip:127.0.0.2:5060 SIP/2.0
# ...
# SIP/2.0 200 Hello, py World!
# ...
```

We see that:
* We get the `200 Hello, py World!` if we select kemi with `py`, but we can easily test with different languages.

#### Resources
* [Wiki Pseudo-Variables Cookbook](https://www.kamailio.org/wikidocs/cookbooks/devel/pseudovariables/)
* [NickvsNetworking](https://nickvsnetworking.com/kamailio-bytes-kemi-intro/)
