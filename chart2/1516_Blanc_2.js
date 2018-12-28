var myConfig = {
    "background-color" : 'black',
    "graphset": [{
        "backgroundColor":"black",
        "type": "pop-pyramid",
        "height":"33.33%",
        "legend": {'item':{fontColor:'white'},
            alpha: 0,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: '3px',
            "shared": true,
            "x":'10%',
            'y':'30%',
            "layout":"3x3",
        },
        "plot": {
            "stacked": true
        },
        "scale-x": {
            visible:false,
            lineColor:'none'
        },
        "scale-y": {
            values:"0:100:20",
            visible:true,
            lineColor:'none',
            "short": true
        },
        "series": [{
            "data-side": 1,
            "background-color": "#EDC54E",
            "values": [81, 0, 0],
            'legendItem':{
                order: 1
            },
            'text':'Treble defence pts'
        }, {
            "data-side": 2,
            "background-color": "#F3B61B",
            "values": [53, 0, 0],
            'text':'Treble attack pts',
            'legendItem':{
                order: 5
            },
        },{
            "data-side": 1,
            "background-color": "#3E9945",
            "values": [0, 73, 0],
            'text':'Double defence pts',
            'legendItem':{
                order: 2
            },
        },{
            "data-side": 2,
            "background-color": "#137D3F",
            "values": [0, 46, 0],
            'text':'Double attack pts',
            'legendItem':{
                order: 6
            },
        },{
            "data-side": 1,
            "background-color": "#0F71B2",
            "values": [0,0,84],
            'text':'My team defence pts',
            'legendItem':{
                order: 3
            },
        },{
            "data-side": 2,
            "background-color": "#0D4C88",
            "values": [0,0,60],
            'text':'My team attack pts',
            'legendItem':{
                order: 7
            },
        }]
    }]
};

zingchart.render({
    id: '1516_blanc_2',
    data: myConfig,
    height: "100%",
    width: "100%"
});