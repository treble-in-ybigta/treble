var myConfig = {
    type: 'radar',
    backgroundColor : '#000000',
    legend:{toggleAction: 'remove',
        'item':{fontColor:'white'},
        alpha: 0,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: '3px',
        "x":'65%',
        'y':'15%',
    },
    plot: {
        aspect: 'area',
        animation: {
            effect: 3,
            sequence: 1,
            speed: 10000
        }
    },
    scaleV: {
        visible: false
    },

    scaleK: {
        values: '0:4:1',
        labels: ['Get points', 'Flexibility', 'Winning rate', 'Cooperativity', 'Replaceability'],
        item: {
            fontColor: 'white',
            fontSize:'12',
            backgroundColor: "black",
            borderColor: "black",
            borderWidth: 1,
            padding: '5 10',
            borderRadius: 10
        },
        refLine: {
            lineColor: '#c10000'
        },
        tick: {
            lineColor: 'white',
            lineWidth: 2,
            lineStyle: 'dotted',
            size: 20
        },
        guide: {
            lineColor: "white",
            lineStyle: 'solid',
            alpha: 0.3,
            backgroundColor: "#D3D3D3 #808080"
        }
    },
    series: [{
        values: [79, 76, 67, 78, 66],
        text:'Treble',
        lineColor: '#F3B61B',
        backgroundColor: '#EDC542',
        marker: {
            type: 'circle',
            size:5,
            lineColor:'white',
            backgroundColor:'#F3B61B'
        }
    },{
        values: [77, 61, 67, 72, 63],
        text:'Double',
        lineColor: '#137D3F',
        backgroundColor: '#329945',
        marker: {
            type: 'circle',
            size:5,
            lineColor:'white',
            backgroundColor:'#137D3F'
        }
    },{
        values: [70, 59, 62, 86, 48],
        text:'My team',
        lineColor: '#0D4C88',
        backgroundColor: '#0F71B2',
        marker: {
            type: 'circle',
            size: 5,
            lineColor: 'white',
            backgroundColor: '#0D4C88'
        }
    }]
};

zingchart.render({
    id: 'myChart_23',
    data: myConfig,
    height: '100%',
    width: '100%'
});