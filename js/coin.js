AFRAME.registerComponent('coin',{
    init:function(){
        for(var i=1;i<=10;i++){
            const id=`coin${i}`
            const posx=Math.random()*100+ -50;
            const posy=Math.random()*5+ 5;
            const posz=Math.random()*60+ -40;
            const position={x:posx,y:posy,z:posz}
            this.generateCoin(id,position)
            
        }
    },
    generateCoin:function(id,position){
        const coinModel=document.querySelector('#coinModels')
        var coin=document.createElement('a-entity')
        coin.setAttribute('id',id)
        coin.setAttribute('position',position)
    coin.setAttribute('geometry',{primitive:'circle',radius:1})
    coin.setAttribute('material','color','#ff9100')
    coin.setAttribute('animation',{
        property:'rotation',
        to:'0 360 0',
        loop:'true',
        dur:1000
    })
    coinModel.appendChild(coin)
    }
})