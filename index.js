
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.post('/connect/token', function (req, res) {
    res.send({
        access_token: 'pepe',
        expires_in: 3600,
        token_type: 'Bearer',});
});

app.get('/services', function(req,res){
    res.send({
        "data": {
            "services": [
                {
                    "service": {
                        "id": "adw-1231-dawdwa",
                        "name": "Atención al cliente",
                        "waiting_people": 5,
                        "wait_time_in_minutes": 10,
                        "is_person_id_required": true,
                        "subscription_type": "Turn | Normal | NormalWithCheckIn"
                    },
                    "node_type": "leaf"
                },
                {
                    "service": {
                        "id": "adw-1231-dawdwa",
                        "name": "Fila Clientes"
                    },
                    "node_type": "node",
                    "nodes": [
                        {
                            "service": {
                                "vendor_id": "adw-1231-dawdwa",
                                "name": "Clientes Premium",
                                "waiting_people": 5,
                                "wait_time_in_minutes": 5,
                                "is_person_id_required": true,
                                "subscription_type": "Turn | Normal | NormalWithCheckIn"
                            },
                            "node_type": "leaf"
                        }
                    ]
                }
            ]
        }
    });
})

app.get('/places/:placeId', (req, res )=> {
    res.send( {
        "data": {
            "place": {
                "id": "string",
                "address": "string",
                "is_working_day": true,
                "schedule": [
                    {
                        "dayOfWeek": 1,
                        "dayIntervals": [
                            {
                                "from": "9:00",
                                "to": "13:30"
                            },
                            {
                                "from": "15:10",
                                "to": "20:00"
                            }
                        ]
                    },
                    {
                        "dayOfWeek": 2,
                        "dayIntervals": [
                            {
                                "from": "9:00",
                                "to": "18:30"
                            }
                        ]
                    }
                ],
                "name": "Whyline Inc.",
                "telephones": [
                    44213212,
                    4239832
                ],
                "websites": [
                    "www.whyline.com",
                    "www.whyline.com.ar"
                ],
                "image_link": "www.whyline.com/picture/Adw14632",
                "services": [
                    {
                        "service": {
                            "id": "adw-1231-dawdwa",
                            "name": "Atención al cliente",
                            "waiting_people": 5,
                            "wait_time_in_minutes": 10
                        },
                        "node_type": "leaf"
                    },
                    {
                        "service": {
                            "vendor_id": "adw-1231-dawdwa",
                            "name": "Fila Clientes"
                        },
                        "node_type": "node",
                        "nodes": [
                            {
                                "service": {
                                    "id": "adw-1231-dawdwa",
                                    "name": "Clientes Premium",
                                    "waiting_people": 5,
                                    "wait_time_in_minutes": 5
                                },
                                "node_type": "leaf"
                            }
                        ]
                    }
                ],
                "statistics": {
                    "day_congestion": [
                        {
                            "x": "9:00",
                            "y": 1
                        },
                        {
                            "x": "10:00",
                            "y": 2
                        }
                    ]
                }
            }
        }
    });
});

app.get('/services/:serviceId', function (req,res)  {
    res.send( {
        "data": {
            "service": {
                "id": "adw-1231-dawdwa",
                "name": "Atención al cliente",
                "waiting_people": 5,
                "wait_time_in_minutes": 10,
                "is_person_id_required": true,
                "id_type": "dni",
                "subscription_type": "Turn | Normal | NormalWithCheckIn"
            },
            "node_type": "leaf"
        }
    });
});

app.post('/subscriptions/:serviceId', (req, res) =>{
    res.send({
        "data": {
            "subscription": {
                "subscription_type": "Turn",
                "subscription_entity": {
                    "id": Math.trunc(Math.random() * 1000000),
                    "created_at": new Date(),
                    "person": {
                        "person_id": "1235489",
                        "person_id_type": "dni"
                    },
                    "subscription_date": new Date(),
                    "early_check_in": new Date(),
                    "late_check_in": new Date(),
                    "status": "check-in-pending",
                    "alias": "pepe"
                }
            }
        }})
})

app.put('/subscriptions/:serviceId/actions/check-in', (req, res) => {
    res.send({
        "data": {
            "subscription": {
                "subscription_type": "Turn",
                "subscription_entity": {
                    "id": "1232458",
                    "status": "checked-in"
                }
            }
        }
    })
});
app.put('/subscriptions/:serviceId/actions/cancel-by-user', (req, res) => {
    res.send({
        "data": {
            "subscription": {
                "subscription_entity": {
                    "id": "string",
                    "status": "canceled-by-user"
                }
            }
        }
    })
});


app.post('/subscriptions/:serviceId/actions/re-join', (req, res) => {
    res.send({
        "data": {
            "subscription": {
                "subscription_type": "Turn",
                "subscription_entity": {
                    "id": "321354",
                    "created_at": "Date in ISO 8601 String",
                    "person": {
                        "person_id": "3754835",
                        "person_id_type": "dni"
                    },
                    "subscription_date": new Date(),
                    "early_check_in": new Date(),
                    "late_check_in": new Date(),
                    "status": "check-in-pending",
                    "alias": "pepe"
                }
            }
        }
    })
});

app.listen(80, function () {
    console.log('Example app listening on port listening!');
});